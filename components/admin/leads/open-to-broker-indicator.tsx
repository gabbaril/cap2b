import { CircleHelp, Flame, Snowflake } from "lucide-react"

interface OpenToBrokerIndicatorProps {
  openToBroker?: string | null
}

export function OpenToBrokerIndicator({ openToBroker }: OpenToBrokerIndicatorProps) {
  const normalized = openToBroker?.trim().toLowerCase()

  if (normalized === "oui") {
    return (
      <span className="inline-flex items-center justify-center rounded-full bg-orange-100 p-1" title="Ouvert au courtier: Oui">
        <Flame className="h-3.5 w-3.5 text-red-600" />
      </span>
    )
  }

  if (normalized === "peut-être" || normalized === "peut-etre") {
    return (
      <span
        className="inline-flex items-center justify-center rounded-full bg-yellow-100 p-1"
        title="Ouvert au courtier: Peut-être"
      >
        <Flame className="h-3.5 w-3.5 text-yellow-700" />
      </span>
    )
  }

  if (normalized === "non") {
    return (
      <span className="inline-flex items-center justify-center rounded-full bg-blue-100 p-1" title="Ouvert au courtier: Non">
        <Snowflake className="h-3.5 w-3.5 text-blue-600" />
      </span>
    )
  }

  return (
    <span
      className="inline-flex items-center justify-center rounded-full bg-gray-200 p-1"
      title="Ouvert au courtier: Inconnu"
    >
      <CircleHelp className="h-3.5 w-3.5 text-gray-600" />
    </span>
  )
}
