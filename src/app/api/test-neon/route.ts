// app/api/test-neon/route.ts
import { pg } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { rows } = await pg.query('SELECT NOW()');
    return NextResponse.json({ connected: true, time: rows[0].now });
  } catch (error: any) {
    return NextResponse.json(
      { connected: false, error: error.message },
      { status: 500 }
    );
  }
}
