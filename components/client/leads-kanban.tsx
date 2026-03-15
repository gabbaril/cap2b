"use client"

import { useState } from "react"
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  type DragStartEvent,
  type DragEndEvent,
  useDroppable,
  useDraggable,
} from "@dnd-kit/core"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin } from "lucide-react"
import { OpenToBrokerIndicator } from "@/components/admin/leads/open-to-broker-indicator"

interface Lead {
  id: string
  lead_number: string
  full_name: string
  email: string
  phone: string
  address: string
  city: string | null
  property_type: string
  status: string
  created_at: string
  open_to_broker?: string | null
}

interface ClientLeadsKanbanProps {
  leads: Lead[]
  onOpenLead: (lead: Lead) => void
  onStatusChange: (leadId: string, newStatus: string) => Promise<void>
  getStatusColor: (status: string) => string
}

// ---------- Draggable Lead Card ----------
function DraggableLeadCard({
  lead,
  onOpenLead,
  getStatusColor,
}: {
  lead: Lead
  onOpenLead: (lead: Lead) => void
  getStatusColor: (status: string) => string
}) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: lead.id })

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{ opacity: isDragging ? 0.4 : 1 }}
      className="touch-none"
    >
      <LeadCardContent lead={lead} onOpenLead={onOpenLead} getStatusColor={getStatusColor} />
    </div>
  )
}

// ---------- Shared Card Content ----------
function LeadCardContent({
  lead,
  onOpenLead,
  getStatusColor,
}: {
  lead: Lead
  onOpenLead: (lead: Lead) => void
  getStatusColor: (status: string) => string
}) {
  return (
    <Card
      className="p-4 cursor-pointer hover:shadow-md transition-shadow select-none"
      onClick={() => onOpenLead(lead)}
    >
      <div className="space-y-2">
        <div className="flex items-center gap-2 justify-between">
          <div className="font-semibold text-sm">{lead.full_name}</div>
          <OpenToBrokerIndicator openToBroker={lead.open_to_broker} />
        </div>
        <div className="text-xs text-gray-500 font-mono">{lead.lead_number}</div>
        <Badge className={getStatusColor(lead.status)} variant="outline">
          {lead.property_type}
        </Badge>
        <div className="space-y-1 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <Mail className="h-3 w-3" />
            <span className="truncate">{lead.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-3 w-3" />
            <span>{lead.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3" />
            <span className="truncate">{lead.city || lead.address}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

// ---------- Droppable Column ----------
function DroppableColumn({
  column,
  leads,
  onOpenLead,
  getStatusColor,
  isOver,
}: {
  column: { id: string; title: string; status: string }
  leads: Lead[]
  onOpenLead: (lead: Lead) => void
  getStatusColor: (status: string) => string
  isOver: boolean
}) {
  const { setNodeRef } = useDroppable({ id: column.id })

  return (
    <div className="flex flex-col">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">{column.title}</h3>
        <Badge variant="secondary">{leads.length}</Badge>
      </div>
      <div
        ref={setNodeRef}
        className={`space-y-3 flex-1 min-h-24 rounded-lg p-2 transition-colors ${
          isOver ? "bg-blue-50 ring-2 ring-blue-200" : "bg-transparent"
        }`}
      >
        {leads.map((lead) => (
          <DraggableLeadCard
            key={lead.id}
            lead={lead}
            onOpenLead={onOpenLead}
            getStatusColor={getStatusColor}
          />
        ))}
      </div>
    </div>
  )
}

// ---------- Main Kanban ----------
export function ClientLeadsKanban({ leads, onOpenLead, onStatusChange, getStatusColor }: ClientLeadsKanbanProps) {
  const [activeLeadId, setActiveLeadId] = useState<string | null>(null)
  const [overId, setOverId] = useState<string | null>(null)

  const columns = [
    { id: "assigned", title: "Assigné", status: "assigned" },
    { id: "contacted", title: "Contacté", status: "contacted" },
    { id: "converted", title: "Converti", status: "converted" },
    { id: "closed", title: "Fermé", status: "closed" },
  ]

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    })
  )

  const getLeadsByStatus = (status: string) =>
    leads.filter((lead) => lead.status === status)

  const activeLead = activeLeadId ? leads.find((l) => l.id === activeLeadId) : null

  const handleDragStart = (event: DragStartEvent) => {
    setActiveLeadId(event.active.id as string)
  }

  const handleDragOver = (event: { over: { id: string } | null }) => {
    setOverId(event.over?.id ?? null)
  }

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event
    setActiveLeadId(null)
    setOverId(null)

    if (!over) return

    const leadId = active.id as string
    const targetColumnId = over.id as string

    const targetColumn = columns.find((c) => c.id === targetColumnId)
    if (!targetColumn) return

    const lead = leads.find((l) => l.id === leadId)
    if (!lead || lead.status === targetColumn.status) return

    await onStatusChange(leadId, targetColumn.status)
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {columns.map((column) => (
          <DroppableColumn
            key={column.id}
            column={column}
            leads={getLeadsByStatus(column.status)}
            onOpenLead={onOpenLead}
            getStatusColor={getStatusColor}
            isOver={overId === column.id}
          />
        ))}
      </div>

      <DragOverlay>
        {activeLead ? (
          <div className="rotate-2 scale-105 shadow-xl">
            <LeadCardContent
              lead={activeLead}
              onOpenLead={() => {}}
              getStatusColor={getStatusColor}
            />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}
