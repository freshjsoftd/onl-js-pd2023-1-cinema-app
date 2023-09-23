CREATE TABLE public.genres (
  genre_id serial4 NOT NULL,
  title varchar(100) NOT NULL,
  description text NULL,
  CONSTRAINT genres_pkey PRIMARY KEY (genre_id)
);
CREATE TABLE public.shelves (
  shelf_id serial4 NOT NULL,
  title varchar(100) NOT NULL,
  description text NULL,
  CONSTRAINT shelves_pkey PRIMARY KEY (shelf_id)
);
CREATE TABLE public.customers (
  customer_id serial4 NOT NULL,
  "name" varchar(100) NOT NULL,
  email varchar(100) NULL,
  description text NULL,
  CONSTRAINT customers_name_email_key UNIQUE (name, email),
  CONSTRAINT customers_pkey PRIMARY KEY (customer_id)
);
CREATE TABLE public.requests (
  request_id serial4 NOT NULL,
  title varchar(100) NOT NULL,
  "start" date NULL,
  customer_id int4 NULL,
  CONSTRAINT requests_pkey PRIMARY KEY (request_id),
  CONSTRAINT requests_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(customer_id)
);
CREATE TABLE public.books (
  book_id serial4 NOT NULL,
  title varchar(100) NOT NULL,
  description text NULL,
  genre_id int4 NOT NULL,
  shelf_id int4 NOT NULL,
  CONSTRAINT books_pkey PRIMARY KEY (book_id),
  CONSTRAINT books_genre_id_fkey FOREIGN KEY (genre_id) REFERENCES public.genres(genre_id),
  CONSTRAINT books_shelf_id_fkey FOREIGN KEY (shelf_id) REFERENCES public.shelves(shelf_id)
);
CREATE TABLE public.authors (
  author_id serial4 NOT NULL,
  "name" varchar(100) NOT NULL,
  email varchar(100) NULL,
  CONSTRAINT authors_name_email_key UNIQUE (name, email),
  CONSTRAINT authors_pkey PRIMARY KEY (author_id)
);
CREATE TABLE public.authors_books (
  author_id int4 NOT NULL,
  book_id int4 NOT NULL,
  CONSTRAINT authors_books_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.authors(author_id),
  CONSTRAINT authors_books_book_id_fkey FOREIGN KEY (book_id) REFERENCES public.books(book_id)
);
CREATE TABLE public.requests_books (
  request_id int4 NOT NULL,
  book_id int4 NOT NULL,
  CONSTRAINT requests_books_book_id_fkey FOREIGN KEY (book_id) REFERENCES public.books(book_id),
  CONSTRAINT requests_books_request_id_fkey FOREIGN KEY (request_id) REFERENCES public.requests(request_id)
);