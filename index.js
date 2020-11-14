function getDogImage(qty) {
  // add quantity at the end of the API link
  fetch(`https://dog.ceo/api/breeds/image/random/${qty}`)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson));
}

function displayResults(results) {
  console.log(results);
  // empty the html
  $(".images").html("");
  // map images and display each
  results.message.map((imgurl) =>
    $(".images").append(`<img src="${imgurl}" width="300"/>`)
  );
  // display results
  $(".results").removeClass("hidden");
}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    // create a variable qty to store the form value
    const qty = $("form #img-quantity").val();
    getDogImage(qty);
  });
}

$(function () {
  console.log("App ready!");
  watchForm();
});
