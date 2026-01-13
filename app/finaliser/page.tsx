"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import dynamic from "next/dynamic"

const FinaliserContent = dynamic(() => import("../admin/finaliser/finaliser-content"), {
  ssr: false,
})

function FinaliserPageContent() {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  return <FinaliserContent token={token} />
}

export default function FinaliserPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Chargement...</div>}>
      <FinaliserPageContent />
    </Suspense>
  )
}
