SELECT nationality_id,
  count(nationality_id) national_ac
FROM actors
GROUP BY nationality_id
HAVING nationality_id IN (1, 2, 15)
ORDER BY national_ac DESC