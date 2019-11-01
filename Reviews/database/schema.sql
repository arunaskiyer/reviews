drop database if exists users;
create database users;
use users;

create table users (
    id serial primary key,
    username varchar(100),
    userpic varchar(100)
);

drop database if exists listings;
create database listings;
use listings;

create table listings (
    id serial primary key
);


drop database if exists reviews;
create database reviews;
use reviews;

create table reviews (
  id primary key,
  listingID REFERENCES listings(id),
  userID REFERENCES users(id),
  reviewText varchar(1000),
  datePosted date,
  communicationRating Number,
  checkInRating Number,
  locationRating Number,
  accuracyRating Number,
  cleanlinessRating Number,
  valueRating Number
);

drop database if exists responses;
create database responses;
use responses;

create table responses (
  id primary key,
  listingID REFERENCES listings(id),
  userID REFERENCES users(id),
  responseText varchar(1000),
  datePosted date,
  respondTo REFERENCES reviews(id);
}