// app/api/seed/route.ts
import { pg } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Insert clients
    await pg.query(`
      INSERT INTO clients (name) VALUES 
        ('ACME Corp'), 
        ('Global Tech'), 
        ('EduFuture')
      ON CONFLICT DO NOTHING;
    `);

    // Insert countries
    await pg.query(`
      INSERT INTO countries (name) VALUES 
        ('Mexico'), 
        ('Colombia'), 
        ('Argentina')
      ON CONFLICT DO NOTHING;
    `);

    // Insert speakers
    await pg.query(`
      INSERT INTO speakers (full_name) VALUES 
        ('Dr. Ana García'), 
        ('John Smith'), 
        ('María Pérez')
      ON CONFLICT DO NOTHING;
    `);

    // Insert sessions
    await pg.query(`
      INSERT INTO sessions (name) VALUES 
        ('Morning'), 
        ('Afternoon'), 
        ('Evening')
      ON CONFLICT DO NOTHING;
    `);

    // Insert trainings
    await pg.query(`
      INSERT INTO trainings (
        title,
        national_fee,
        international_fee,
        date,
        client_id,
        country_id,
        speaker_id,
        session_id
      ) VALUES
        (
          'Advanced Leadership Training',
          2500,
          4000,
          '2025-06-10',
          1, 1, 1, 1
        ),
        (
          'Emotional Intelligence Workshop',
          2000,
          3500,
          '2025-07-01',
          2, 2, 2, 2
        ),
        (
          'Innovation & Creativity Seminar',
          3000,
          4500,
          '2025-08-20',
          3, 3, 3, 3
        )
      ON CONFLICT DO NOTHING;
    `);

    return NextResponse.json({ message: 'Seed completed successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
