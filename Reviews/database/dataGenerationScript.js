var faker = require('faker');
const fs = require('fs');

const reviewsData = fs.createWriteStream('reviews.csv');


var writeReviews = (writer, encoding, callback) => {
  let i = 1000000 ;
  let id = 0;
  
  while( i !== 0) {
    id++;
    const listing_id = id;
    const username = faker.internet.userName();
    const userpic = faker.image.imageUrl();
    const date_posted = faker.date.recent();
    const review_id = 1; //this will eventually have to be a while loop
    const review_text = faker.lorem.sentences();
    const communication_rating = faker.random.number({min: 1, max: 5});
    const check_in_rating = faker.random.number({min: 1, max: 5});
    const location_rating = faker.random.number({min: 1, max: 5});
    const accuracy_rating = faker.random.number({min: 1, max: 5});
    const cleanliness_rating = faker.random.number({min: 1, max: 5});
    const value_rating = faker.random.number({min: 1, max: 5});
    i--;
    const data = `${listing_id},${date_posted},${username},${userpic}, ${review_id}, ${review_text}, 
                  ${communication_rating}, ${check_in_rating}, ${location_rating}, ${accuracy_rating}, ${cleanliness_rating}
                  ${value_rating}\n`;
    writer.write(data, encoding, callback);
  }
}

writeReviews(reviewsData, "utf-8", () => {
  reviewsData.end();
});