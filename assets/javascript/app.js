// on click function get the still gifs

$('#searchBtn').on('click', function(event) {
  event.preventDefault();

  // set Api request

  //var yourKey = 'dd6dab64b179a2bb9a93127562835ed8';
  //the search request equal to the user click data topic value
  var searchQ;
  var queryURL = 'https://cors-anywhere.herokuapp.com/http://data.orghunter.com/v1/charitysearch?user_key=dd6dab64b179a2bb9a93127562835ed8&searchTerm=animal';

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    var results = response.data;
    console.log(results);
  });
});


