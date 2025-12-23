import { NextRequest, NextResponse } from 'next/server'

const LOCK_COOKIE = 'site_lock'

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl

  // Bypass lock if explicitly disabled
  if (process.env.DISABLE_SITE_LOCK === 'true') {
    return NextResponse.next()
  }

  // Allow assets, next internals, and lock routes
  const openPaths = [
    '/lock',
    '/api/lock',
    '/_next',
    '/favicon.ico',
    '/robots.txt',
    '/sitemap.xml',
    '/icon.png',
    '/icon.jpg',
    '/apple-icon.png',
    '/images',
    '/assets',
    '/public',
  ]
  if (openPaths.some((p) => pathname === p || pathname.startsWith(p + '/'))) {
    return NextResponse.next()
  }

  // If already unlocked, continue
  const cookie = req.cookies.get(LOCK_COOKIE)
  if (cookie?.value === 'unlocked') {
    return NextResponse.next()
  }

  // Redirect to lock page with returnTo
  const url = req.nextUrl.clone()
  url.pathname = '/lock'
  const returnTo = pathname + (search || '')
  url.searchParams.set('returnTo', returnTo)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
}
