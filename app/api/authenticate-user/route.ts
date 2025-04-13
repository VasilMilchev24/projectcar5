import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET!

export async function POST(req: NextRequest) {
    const { email, password } = await req.json()

    const user = await prisma.user.findUnique({ where: { EMAIL_ADDRESS: email } })
    if (!user) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const passwordMatch = await bcrypt.compare(password, user.PASSWORD)
    if (!passwordMatch) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const token = jwt.sign({ userId: user.ID, email: user.EMAIL_ADDRESS }, JWT_SECRET, {
        expiresIn: '1d',
    })

    const response = NextResponse.json({ message: 'Logged in successfully' })

    // Set the JWT as an HTTP-only cookie
    response.cookies.set('token', token, {
        httpOnly: true, // Cookie can't be accessed via JavaScript
        secure: process.env.NODE_ENV === 'production', // Ensure it's sent over HTTPS in production
        maxAge: 24 * 60 * 60, // 1 day expiration
        path: '/', // Cookie is valid for the entire domain
    })

    return response
}