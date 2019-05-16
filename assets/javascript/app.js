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



// TRENDING TOPICS API --- START HERE ---//

var apiKey = "user_key=dd6dab64b179a2bb9a93127562835ed8";

var searchResult = "";
var corbEnabler = "https://cors-anywhere.herokuapp.com/";
var queryOrgHunter = "https://data.orghunter.com/v1/charitysearch?"
var twitterApiTrending = "https://api.twitter.com/1.1/trends/place.json?id=1"
var trendSpotter = "http://api.trendspottr.com/v1.5/search?key=ae8480dff3fa343b6d215da041939e3e&q=?"
var nytSearch = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&query=disaster&api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M";
var trendSpotterKey = "charity";

var test = trendSpotter + trendSpotterKey;
var backupKeyTrendspottr = "3bdb237763a5006354063055aa678cce";


var queryURL = test;

$.ajax({
    url: queryURL,
    method: "GET",
}).then(function (response) {
    console.log(test)
    for (i = 0; i < 3; i++) {
    var trendingResult = response.results.hashtags[i].value;
    var trendingTopics = $("<h2>").text(trendingResult);

    $("#testDiv").append(trendingTopics)

    }

});

// TRENDING TOPICS API --- END HERE ---//




