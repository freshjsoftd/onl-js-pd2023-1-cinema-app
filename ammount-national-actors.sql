SELECT nationality_id,
  count(nationality_id)
FROM actors
GROUP BY nationality_id
-- HAVING nationality_id < 10
ORDER BY nationality_id