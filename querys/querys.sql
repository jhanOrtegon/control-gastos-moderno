CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE countries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE speakers (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL
);

CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);


CREATE TABLE trainings (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  national_fee NUMERIC NOT NULL,
  international_fee NUMERIC NOT NULL,
  date DATE NOT NULL,
  client_id INTEGER NOT NULL,
  country_id INTEGER NOT NULL,
  speaker_id INTEGER NOT NULL,
  session_id INTEGER NOT NULL,

  -- Foreign keys (assuming these referenced tables exist)
  CONSTRAINT fk_client FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE RESTRICT,
  CONSTRAINT fk_country FOREIGN KEY (country_id) REFERENCES countries(id) ON DELETE RESTRICT,
  CONSTRAINT fk_speaker FOREIGN KEY (speaker_id) REFERENCES speakers(id) ON DELETE RESTRICT,
  CONSTRAINT fk_session FOREIGN KEY (session_id) REFERENCES sessions(id) ON DELETE RESTRICT
);
