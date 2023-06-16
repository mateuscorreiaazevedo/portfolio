import { NextRequest, NextResponse } from 'next/server'

export async function GET (req: NextRequest) {
  const redirectUrl = new URL('/auth/login', req.url)

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': 'auth_token=; Path=/; max-age=0'
    }
  })
}
