// controllers/authMiddleware.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function authMiddleware(req: NextRequest) {
    const tokenCookie = req.cookies.get('token');

    if (!tokenCookie) {
        return NextResponse.json({ message: 'Please Login Before You Post Job' }, { status: 401 });
    }

    const token = tokenCookie.value; // Extract the token value

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET!);
        (req as any).user = decoded; // Add user info to the request object
    } catch (error) {
        return NextResponse.json({ message: 'Unauthorized: Invalid token' }, { status: 401 });
    }

    return null; // Indicate the request can proceed
}
