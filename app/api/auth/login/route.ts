import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const VALID_USERNAME = 'Brainito'
const VALID_PASSWORD = 'Brainito@9352'

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json()

        if (username === VALID_USERNAME && password === VALID_PASSWORD) {
            const cookieStore = await cookies()
            cookieStore.set('site_access', 'true', {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
                sameSite: 'lax',
            })

            return NextResponse.json({ success: true })
        }

        return NextResponse.json(
            { success: false, error: 'Invalid credentials' },
            { status: 401 }
        )
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Server error' },
            { status: 500 }
        )
    }
}
