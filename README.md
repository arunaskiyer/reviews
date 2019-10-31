# Hackshack Reviews Module

*** Information about the Reviews component ***

## Table of Contents

1. [Usage](#Usage)
1. [API Documentation](#API)
1. [Related Projects](#related)

## Usage

Info to come.

## API Documentation

1. POST /hotel/123/newreview
Data sent in request body. Data sent should be a JSON document with the text of the review as well asinformation about the reviewer (name, picture) 

1. GET /hotel/123/reviews
Returned data will be in the shape of an array of objects. Each Review object will contain the text of the review, the reviewer's name and picture, and the month and year that the review was posted.Each review will have a unique ID.

1. PUT /hotel/123/updatereview
Data sent in request body. Data sent should be the new text of the review as well as the ID of the review.

1. DELETE /hotel/123/deletereview
Data sent should be the ID of the review to delete.

## Related Projects

Info to come.
