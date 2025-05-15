-- Clients
INSERT INTO clients (name) VALUES 
  ('ACME Corp'), 
  ('Global Tech'), 
  ('EduFuture');

-- Countries
INSERT INTO countries (name) VALUES 
  ('Mexico'), 
  ('Colombia'), 
  ('Argentina');

-- Speakers
INSERT INTO speakers (full_name) VALUES 
  ('Dr. Ana García'), 
  ('John Smith'), 
  ('María Pérez');

-- Sessions
INSERT INTO sessions (name) VALUES 
  ('Morning'), 
  ('Afternoon'), 
  ('Evening');

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
  1, -- ACME Corp
  1, -- Mexico
  1, -- Dr. Ana García
  1  -- Morning
),
(
  'Emotional Intelligence Workshop',
  2000,
  3500,
  '2025-07-01',
  2, -- Global Tech
  2, -- Colombia
  2, -- John Smith
  2  -- Afternoon
),
(
  'Innovation & Creativity Seminar',
  3000,
  4500
  '2025-08-20',
  3, -- EduFuture
  3, -- Argentina
  3, -- María Pérez
  3  -- Evening
);
