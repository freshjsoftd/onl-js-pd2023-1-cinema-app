SELECT
  full_name,
  birth_year
FROM
  actors
  JOIN movies_actors AS ma USING (actor_id)
WHERE
  ma.movie_id =(
    SELECT
      movie_id
    FROM
      movies
    WHERE
      movies.title LIKE 'Gla%');

