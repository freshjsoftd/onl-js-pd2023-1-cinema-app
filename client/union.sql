(
  SELECT full_name,
    birth_year
  FROM actors
  EXCEPT
  SELECT full_name,
    birth_year
  FROM directors
)
ORDER BY full_name