import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { pages } from '@/db/schema/school';
import { eq } from 'drizzle-orm';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const pageId = parseInt(params.id);
    
    const [page] = await db
      .select()
      .from(pages)
      .where(eq(pages.id, pageId))
      .limit(1);

    if (!page) {
      return NextResponse.json(
        { error: 'Page not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(page);
  } catch (error) {
    console.error('Error fetching page:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const pageId = parseInt(params.id);
    const body = await request.json();
    
    const { title, content } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    const [updatedPage] = await db
      .update(pages)
      .set({
        title,
        content,
        updatedAt: new Date(),
      })
      .where(eq(pages.id, pageId))
      .returning();

    if (!updatedPage) {
      return NextResponse.json(
        { error: 'Page not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedPage);
  } catch (error) {
    console.error('Error updating page:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
