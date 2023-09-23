/* Сколько книг и какого жанра заказывает каждый пользователь библиотеки.
 Названия жанров должны быть строковые, а не номера. */
SELECT customers.name AS name,
  CASE
    genre_id
    WHEN 1 THEN 'Drama'
    WHEN 2 THEN 'Fantazy'
    WHEN 3 THEN 'Melodrama'
    WHEN 4 THEN 'Romantic'
    WHEN 5 THEN 'Action'
    WHEN 6 THEN 'Detective'
    WHEN 8 THEN 'Western'
    WHEN 9 THEN 'Horror'
    WHEN 10 THEN 'Comedy'
    WHEN 12 THEN 'Sience fiction'
    WHEN 13 THEN 'Historical'
  END AS genre,
  count(books.genre_id) AS genre_count
FROM customers
  JOIN requests USING (customer_id)
  JOIN requests_books USING (request_id)
  JOIN books USING (book_id)
GROUP BY genre,
  name
ORDER BY name,
  genre DESC