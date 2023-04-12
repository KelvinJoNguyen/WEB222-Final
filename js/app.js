/**
 * WEB222 – Final Assignment
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <Kelvin Nguyen>
 *      Student ID: <104087226>
 *      Date:       <12/4/23>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { reviews } = window;

window.addEventListener("load", function () {
  var reviewCards = document.getElementById("reviews");

  for (var j = 0; j < reviews.length; j++) {
    var card = document.createElement("div");
    card.classList.add("cardBuy");

    var textContainer = document.createElement("div");
    textContainer.classList.add("textContainer");

    var name = document.createElement("h6");
    var date = document.createElement("p");
    var rating = document.createElement("p");
    var text = document.createElement("p");

    //Creates content for card

    var nameText = document.createTextNode(reviews[j].name);
    var dateText = document.createTextNode(reviews[j].date);
    var ratingText = document.createTextNode(reviews[j].rating + "/5");
    var reviewText = document.createTextNode(reviews[j].review);

    //Adds content to card
    name.appendChild(nameText);
    date.appendChild(dateText);
    rating.appendChild(ratingText);
    text.appendChild(reviewText);

    textContainer.appendChild(name);
    textContainer.appendChild(date);
    textContainer.appendChild(rating);
    textContainer.appendChild(text);
    card.appendChild(textContainer);

    reviewCards.appendChild(card);
  }
});

// Get a reference to the review form and reviews container elements
var reviewForm = document.getElementById("reviewForm");
var reviewCards = document.getElementById("reviews");

// Add an event listener for the form submit event
reviewForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the form input values
  var nameInput = document.getElementById("name");
  var ratingInput = document.getElementById("rating");
  var reviewInput = document.getElementById("review");

  // Create a new review object with the input values and a generated date
  var newReview = {
    name: nameInput.value,
    date: new Date().toLocaleDateString(), // Generate a new date in the format "MM/DD/YYYY"
    rating: ratingInput.value,
    review: reviewInput.value
  };

  // Create a new card element with the review data
  var card = document.createElement("div");
  card.classList.add("cardBuy");

  var textContainer = document.createElement("div");
  textContainer.classList.add("textContainer");

  var name = document.createElement("h6");
  var date = document.createElement("p");
  var rating = document.createElement("p");
  var text = document.createElement("p");

  var nameText = document.createTextNode(newReview.name);
  var dateText = document.createTextNode(newReview.date);
  var ratingText = document.createTextNode(newReview.rating + "/5");
  var reviewText = document.createTextNode(newReview.review);

  name.appendChild(nameText);
  date.appendChild(dateText);
  rating.appendChild(ratingText);
  text.appendChild(reviewText);

  textContainer.appendChild(name);
  textContainer.appendChild(date);
  textContainer.appendChild(rating);
  textContainer.appendChild(text);
  card.appendChild(textContainer);

  reviewCards.appendChild(card);

  // Reset the form inputs
  nameInput.value = "";
  ratingInput.value = "";
  reviewInput.value = "";
});
