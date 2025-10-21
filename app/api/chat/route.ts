import { GoogleGenerativeAI } from '@google/generative-ai';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { NextRequest } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return Response.json({ error: 'Message is required' }, { status: 400 });
    }

    // Read school context
    const contextPath = join(process.cwd(), 'lib', 'school-context.md');
    const schoolContext = await readFile(contextPath, 'utf-8');

    // Create prompt with context
    const prompt = `Anda adalah asisten AI untuk SMK Bina Mandiri. Tugas Anda adalah menjawab pertanyaan dari siswa atau calon siswa dengan ramah dan membantu, jika pertanayaan di luar konteks maka tetap jawab tetapi pentingkan kepentingan sekolah.

Konteks Sekolah:
${schoolContext}

Pertanyaan Pengguna: ${message}

Jawaban (dalam Bahasa Indonesia yang ramah dan informatif):`;

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return Response.json({ response: text });
  } catch (error) {
    console.error('Chat API Error:', error);
    return Response.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
