CREATE TABLE listing_reviews {
  listing_num int,
  is_response boolean,
  date_posted date,
  username text,
  userpic text,
  review_id int,
  response_to int,
  review_text text,
  communication_rating int,
  check_in_rating int,
  location_rating int,
  accuracy_rating int,
  cleanliness_rating int,
  value_rating int,
  PRIMARY KEY (listing_num, is_response, date_posted)
    WITH CLUSTERING ORDER BY (date_posted DESC);
}