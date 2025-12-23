import { NextResponse } from 'next/server'

const LOCK_COOKIE = 'site_lock'

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()
    const expectedUser = process.env.LOCK_USERNAME ?? 'preview'
    const expectedPass = process.env.LOCK_PASSWORD ?? 'preview'

    if (typeof username !== 'string' || typeof password !== 'string') {
      return NextResponse.json({ message: 'Invalid request' }, { status: 400 })
    }

    if (username !== expectedUser || password !== expectedPass) {
      return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 })
    }

    const res = NextResponse.json({ ok: true })
    const isProd = process.env.NODE_ENV === 'production'

    res.cookies.set(LOCK_COOKIE, 'unlocked', {
      httpOnly: true,
      secure: isProd,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 8, // 8 hours
    })

    return res
  } catch (e) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
