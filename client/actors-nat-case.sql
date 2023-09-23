SELECT CASE nationality_id
    WHEN 1 THEN 'USA'
    WHEN  2 THEN 'UK'
    WHEN  3 THEN 'UA'
    WHEN  4 THEN 'DE'
    WHEN  5 THEN 'FR'
    WHEN  6 THEN 'AUS'
    WHEN  10 THEN 'DK'
    WHEN  13 THEN 'IE'
    WHEN  15 THEN 'CA'
    WHEN  16 THEN 'CN'
    WHEN  30 THEN 'NZ'
    WHEN  31 THEN 'PUR'
    WHEN  32 THEN 'MLT'
    WHEN  33 THEN 'BEN'
    WHEN  34 THEN 'SWE'
    WHEN  35 THEN 'FIN'
    WHEN  36 THEN 'RU'
    WHEN  37 THEN 'ISL'
  END AS national,
  count(nationality_id)
FROM actors
GROUP BY nationality_id
ORDER BY count DESC,
  national;