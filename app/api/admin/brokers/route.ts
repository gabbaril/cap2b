import { NextResponse } from "next/server"
import { getSupabaseAdmin } from "@/lib/supabase-server"

export async function GET() {
  try {
    const supabase = getSupabaseAdmin()

    const { data, error } = await supabase.from("brokers").select("*").order("created_at", { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const supabase = getSupabaseAdmin()
    const body = await request.json()

    const { email, fullName, companyName, phone, territory } = body

    const { data, error } = await supabase
      .from("brokers")
      .insert({
        email,
        full_name: fullName,
        company_name: companyName,
        phone,
        territory,
        is_active: true,
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
