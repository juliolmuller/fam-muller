import { NextResponse } from 'next/server'

export function middleware(request: Request) {
  const currentUrl = new URL(request.url)
  const pathname = currentUrl.pathname
  const headers = new Headers(request.headers)

  headers.set('pathname', pathname)

  return NextResponse.next({
    request: {
      headers,
    },
  })
}
