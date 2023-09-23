SELECT full_name,
  birth_year
FROM actors
UNION ALL
SELECT full_name AS dir_full_name,
  birth_year
FROM directors
ORDER BY birth_year