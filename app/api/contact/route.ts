import { db } from '@/db';
import { contactSubmissions } from '@/db/schema/school';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    await db.insert(contactSubmissions).values({
      name,
      email,
      message,
      isRead: false,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact API Error:', error);
    return Response.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
