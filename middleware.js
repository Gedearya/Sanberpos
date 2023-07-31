import { NextRequest, NextResponse } from "next/server";

export function middleware(req, res) {

    if (req.nextUrl.pathname.startsWith('/auth/register') || req.nextUrl.pathname.startsWith('/auth/forgot-password')) {
        if (req.cookies.get('token') !== undefined) {
            return NextResponse.redirect(new URL('/dashboard', req.url))
        }
    }

    if (req.nextUrl.pathname.startsWith('/dashboard')) {
        if (req.cookies.get('token') === undefined) {
            return NextResponse.redirect(new URL('/', req.url))
        }
    }

}