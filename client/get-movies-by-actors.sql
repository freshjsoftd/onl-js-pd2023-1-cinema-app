SELECT title
FROM movies
  JOIN movies_actors AS ma USING (movie_id)
WHERE ma.actor_id = (
    SELECT actor_id
    FROM actors
    WHERE actors.full_name LIKE 'Or%'
  );