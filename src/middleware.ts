import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './i18n-config'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  if(pathname === '/Logo-removebg-preview.png' || pathname === '/Rami.jpg' || pathname === '/karim.jpg' || pathname === '/Ramy.jpg' || pathname === '/sitemap') {
    return
  }
  // Check if the pathname is the root path
  if (pathname === '/') {
    // Redirect to the default language (English)
    return NextResponse.redirect(new URL('/en', request.url))
  }
  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // If the pathname is missing a locale, redirect to the default language
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/en${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
