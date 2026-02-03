import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Check for the authentication token in cookies
    const authToken = request.cookies.get('site_access')
    const isLocked = !authToken || authToken.value !== 'true'

    // Define paths that do not require authentication
    const isPublicPath =
        request.nextUrl.pathname === '/lock' ||
        request.nextUrl.pathname.startsWith('/_next') ||
        request.nextUrl.pathname.startsWith('/api') ||
        request.nextUrl.pathname.startsWith('/static') ||
        request.nextUrl.pathname.includes('.') // Files (favicon, images, etc.)

    if (isLocked && !isPublicPath) {
        // Redirect to lock screen if not authenticated and trying to access a protected path
        return NextResponse.redirect(new URL('/lock', request.url))
    }

    if (!isLocked && request.nextUrl.pathname === '/lock') {
        // Redirect to home if already authenticated and trying to access lock screen
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
