import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import bcrypt from 'bcrypt'

export async function POST(request: Request) {
  try {
      const body = await request.json();
      const { username, email, password } = body;

      const existingUsers = await prisma.user.findMany({
        where: {
          OR: [
            { EMAIL_ADDRESS: email },
            { USERNAME: username }
          ]
        }
      });
      
      const emailTaken = existingUsers.find(u => u.EMAIL_ADDRESS === email);
      const usernameTaken = existingUsers.find(u => u.USERNAME === username);
      
      if (emailTaken && usernameTaken) {
        return NextResponse.json({ error: 'Email and username are already in use' }, { status: 400 });
      } else if (emailTaken) {
        return NextResponse.json({ error: 'Email already in use' }, { status: 401 });
      } else if (usernameTaken) {
        return NextResponse.json({ error: 'Username already in use' }, { status: 402 });
      }
      
      const hashedPassword = await bcrypt.hash(password, 10)

      const newUser = await prisma.user.create({
        data: {
          USERNAME: username,
          PASSWORD: hashedPassword, 
          EMAIL_ADDRESS: email,
        },
      });

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}