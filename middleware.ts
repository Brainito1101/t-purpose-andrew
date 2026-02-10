import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Skip middleware for Next.js internal routes and static files
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.') ||
        pathname === '/favicon.ico'
    ) {
        return NextResponse.next()
    }

    // Check for authentication cookie
    const authCookie = request.cookies.get('site_access')
    const isAuthenticated = authCookie?.value === 'true'

    // If not authenticated and not on lock page, redirect to lock
    if (!isAuthenticated && pathname !== '/lock') {
        const url = new URL('/lock', request.url)
        return NextResponse.redirect(url)
    }

    // If authenticated and on lock page, redirect to home
    if (isAuthenticated && pathname === '/lock') {
        const url = new URL('/', request.url)
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all paths except:
         * - _next/static (static files)
         * - _next/image (image optimization)
         * - favicon.ico (favicon file)
         * - public folder files
         */
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
}
