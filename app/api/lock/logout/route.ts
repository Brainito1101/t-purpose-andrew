import { NextResponse } from 'next/server'

const LOCK_COOKIE = 'site_lock'

export async function POST() {
  const res = NextResponse.json({ ok: true })
  res.cookies.set(LOCK_COOKIE, '', { path: '/', maxAge: 0 })
  return res
}
