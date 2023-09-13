CREATE TABLE directors (
  director_id SERIAL PRIMARY KEY,
  full_name VARCHAR(50) NOT NULL,
  birth_year INTEGER CHECK (birth_year > 1850),
  death_year INTEGER,
  nationality_id INTEGER NOT NULL,
  poster TEXT,
  CONSTRAINT director_nacional_fkey FOREIGN KEY (nationality_id) REFERENCES nationalities(national_id),
  UNIQUE(full_name, birth_year)
);