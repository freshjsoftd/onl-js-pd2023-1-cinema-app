/* SELECT genre_id, studio_id, count(genre_id) g_sum, count(studio_id) st_sum
 FROM movies
 GROUP BY GROUPING SETS ((genre_id), (studio_id), ()); */
SELECT genre_id,
  studio_id,
  count(genre_id) g_sum,
  count(studio_id) st_sum
FROM movies
GROUP BY ROLLUP (genre_id, studio_id)