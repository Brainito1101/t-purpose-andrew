import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json()

        // Validate credentials
        if (username === 'tpurpose' && password === 'weT19UP0bG8l') {
            // Set cookie with proper configuration
            const cookieStore = await cookies()
            cookieStore.set('site_access', 'true', {
                httpOnly: false, // Allow client-side access for compatibility
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
            })

            return NextResponse.json({ success: true })
        } else {
            return NextResponse.json(
                { success: false, error: 'Invalid credentials' },
                { status: 401 }
            )
        }
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Server error' },
            { status: 500 }
        )
    }
}
