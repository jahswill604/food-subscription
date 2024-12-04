import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This is a mock function. Replace with your actual auth check logic.
function isAuthenticated(request: NextRequest) {
  const token = request.cookies.get('auth_token')
  return !!token
}

// This is a mock function. Replace with your actual role check logic.
function isVendor(request: NextRequest) {
  const role = request.cookies.get('user_role')
  return role === 'vendor'
}

export function middleware(request: NextRequest) {
  const isAuth = isAuthenticated(request)
  const vendorAuth = isVendor(request)
  const isAuthPage = request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/signup')
  const isVendorPage = request.nextUrl.pathname.startsWith('/dashboard/vendor')

  if (isAuthPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    return NextResponse.next()
  }

  if (!isAuth && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isVendorPage && !vendorAuth) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/signup'],
}

