"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface User {
  id: string
  email: string
  created_at: string
  last_sign_in_at: string | null
  role: string
}

interface PasswordsPanelProps {
  users: User[]
  onOpenReset: (user: User) => void
}

export function PasswordsPanel({ users, onOpenReset }: PasswordsPanelProps) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Gestion des mots de passe</h2>
      <p className="text-sm text-gray-600 mb-4">Réinitialisez les mots de passe des clients</p>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Créé le</TableHead>
              <TableHead>Dernière connexion</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.email}</TableCell>
                <TableCell>
                  <Badge variant="outline">{user.role}</Badge>
                </TableCell>
                <TableCell className="text-sm">{new Date(user.created_at).toLocaleDateString("fr-CA")}</TableCell>
                <TableCell className="text-sm">
                  {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString("fr-CA") : "Jamais"}
                </TableCell>
                <TableCell>
                  <Button size="sm" variant="outline" onClick={() => onOpenReset(user)}>
                    Réinitialiser
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
