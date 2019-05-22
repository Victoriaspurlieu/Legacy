$(document).ready(function() {
  var apiKey = 'user_key=dd6dab64b179a2bb9a93127562835ed8';

  var trendSpotterKey1 = '7743da92de8ab506139a44b7a092ca95';
  var backupKeyTrendspottr = '1582e1c19ebc9c57de3aa64745c46068';

  var trendSpotter = 'http://api.trendspottr.com/v1.5/search?key=' + trendSpotterKey1 + '&q=?';
  var trendSpotterWord = 'charity';
  var test = trendSpotter + trendSpotterWord;

  var queryURL = test;

  // WORKING CODE FOR TRENDSPOTTER -- START 1 ---->

  //             $.ajax({
  //                 url: queryURL,
  //                 method: "GET",
  //             }).then(function (response) {
  //                 // console.log(test)
  //                 for(i=0;i<7;i++){

  //                     var trendingResult = response.results.hashtags[i].value;
  //                     var trendingTopics = $("<h2>").text(trendingResult);
  //                     $("#testDiv").append(trendingTopics)
  // }

  // WORKING CODE FOR TRENDSPOTTER -- END 1---->

  // VARIABLE FOR TRENDSPOTTER API RESULT 1 START -- >

  // var imageQuery1 = response.results.hashtags[0].value;

  // VARIABLE FOR TRENDSPOTTER API RESULT 1 END -- >

  // NO API VERSION WORD 1 START---- >
  var imageQuery1 = '#charity';
  // NO API VERSION WORD 1 END---- >

  var queryDiv1 = $("<div class='onclickQuery'>");
  var imageQuery1Word = imageQuery1.slice(1);
  console.log(imageQuery1Word);
  queryDiv1.attr('topicQuery', imageQuery1Word);
  queryDiv1.html(imageQuery1);
  $('#hashtag1').prepend(queryDiv1);

  // NO API VERSION WORD 2 START---- >
  var imageQuery2 = '#shelter';
  // NO API VERSION WORD 2 END---- >

  // var imageQuery2 = response.results.hashtags[1].value;

  var queryDiv2 = $("<div class='onclickQuery'>");

  var imageQuery2Word = imageQuery2.slice(1);
  console.log(imageQuery1Word);
  queryDiv2.attr('topicQuery', imageQuery2Word);
  queryDiv2.html(imageQuery2);
  $('#hashtag2').prepend(queryDiv2);

  // NO API VERSION WORD 3 START---- >
  var imageQuery3 = '#house';
  // NO API VERSION WORD 3 END---- >

  // var imageQuery3 = response.results.hashtags[2].value;

  var queryDiv3 = $("<div class='onclickQuery'>");
  var imageQuery3Word = imageQuery3.slice(1);
  console.log(imageQuery3Word);
  queryDiv3.attr('topicQuery', imageQuery3Word);
  queryDiv3.html(imageQuery3);
  $('#hashtag3').prepend(queryDiv3);

  // NO API VERSION WORD 2 START---- >
  var imageQuery4 = '#adopt';
  // NO API VERSION WORD 2 END---- >

  // var imageQuery4 = response.results.hashtags[3].value;

  var queryDiv4 = $("<div class='onclickQuery'>");
  var imageQuery4Word = imageQuery4.slice(1);
  console.log(imageQuery4Word);
  queryDiv4.attr('topicQuery', imageQuery4Word);
  queryDiv4.html(imageQuery4);
  $('#hashtag4').prepend(queryDiv4);

  // var imageQuery5 = response.results.hashtags[4].value;

  // NO API VERSION WORD 5 START---- >
  var imageQuery5 = '#hunger';
  // NO API VERSION WORD 5 END---- >

  var queryDiv5 = $("<div class='onclickQuery'>");
  var imageQuery5Word = imageQuery5.slice(1);
  console.log(imageQuery5Word);
  queryDiv5.attr('topicQuery', imageQuery5Word);
  queryDiv5.html(imageQuery5);
  $('#hashtag5').prepend(queryDiv5);

  // var imageQuery6 = response.results.hashtags[5].value;

  // NO API VERSION WORD 6 START---- >
  var imageQuery6 = '#poverty';
  // NO API VERSION WORD 6 END---- >
  var queryDiv6 = $("<div class='onclickQuery'>");
  var imageQuery6Word = imageQuery6.slice(1);
  console.log(imageQuery1Word);
  queryDiv6.attr('topicQuery', imageQuery6Word);
  queryDiv6.html(imageQuery6);
  $('#hashtag6').prepend(queryDiv6);

  // NO API VERSION WORD 6 START---- >
  var imageQuery7 = '#world';
  // NO API VERSION WORD 7 END---- >

  // var imageQuery7 = response.results.hashtags[6].value

  var queryDiv7 = $("<div class='onclickQuery'>");
  var imageQuery7Word = imageQuery7.slice(1);
  console.log(imageQuery1Word);
  queryDiv7.attr('topicQuery', imageQuery7Word);
  queryDiv7.html(imageQuery7);
  $('#hashtag7').prepend(queryDiv7);

  // $("#testDiv").append(trendingTopics)

  var pixabayApi = '12500053-5110b31002f0fc8b89ed377c4';

  var URL1 = 'https://pixabay.com/api/?key=' + pixabayApi + '&q=' + encodeURIComponent(imageQuery1Word);
  var URL2 = 'https://pixabay.com/api/?key=' + pixabayApi + '&q=' + encodeURIComponent(imageQuery2Word);
  var URL3 = 'https://pixabay.com/api/?key=' + pixabayApi + '&q=' + encodeURIComponent(imageQuery3Word);
  var URL4 = 'https://pixabay.com/api/?key=' + pixabayApi + '&q=' + encodeURIComponent(imageQuery4Word);
  var URL5 = 'https://pixabay.com/api/?key=' + pixabayApi + '&q=' + encodeURIComponent(imageQuery5Word);
  var URL6 = 'https://pixabay.com/api/?key=' + pixabayApi + '&q=' + encodeURIComponent(imageQuery6Word);
  var URL7 = 'https://pixabay.com/api/?key=' + pixabayApi + '&q=' + encodeURIComponent(imageQuery7Word);

  var URL1alt = 'https://pixabay.com/api/?key=' + pixabayApi + '&q=' + encodeURIComponent('charity');
  var URL2alt = 'https://pixabay.com/api/?key=' + pixabayApi + '&q=' + encodeURIComponent('donation');
  var URL3alt = 'https://pixabay.com/api/?key=' + pixabayApi + '&q=' + encodeURIComponent('helping');
  var URL4alt = 'https://pixabay.com/api/?key=' + pixabayApi + '&q=' + encodeURIComponent('charity');
  var URL5alt = 'https://pixabay.com/api/?key=' + pixabayApi + '&q=' + encodeURIComponent('volunteer');
  var URL6alt = 'https://pixabay.com/api/?key=' + pixabayApi + '&q=' + encodeURIComponent('donation');
  var URL7alt = 'https://pixabay.com/api/?key=' + pixabayApi + '&q=' + encodeURIComponent('poor');

  var randomizer = Math.floor(Math.random() * 7);

  // START OF TRENDING IMAGE 1 ------->

  $.getJSON(URL1, function(data) {
    if (parseInt(data.totalHits) == 0) {
      $.ajax({
        url: URL1alt,
        method: 'GET'
      }).then(function(response) {
        console.log(response.hits[randomizer].largeImageURL + 'No Result');
        var imageLink = response.hits[randomizer].largeImageURL;
        var imageTrending = $('<img>')
          .attr('src', imageLink)
          .attr('class', 'd-block w-100');
        // ask how to insert the variable i to the ID so that it populates the next div
        $('#trendingTopic1').html(imageTrending);
      });
    } else {
      $.ajax({
        url: URL1,
        method: 'GET'
      }).then(function(response) {
        console.log(response.hits[0].largeImageURL + 'else triggered');
        var imageLink = response.hits[0].largeImageURL;
        var imageTrending = $('<img>')
          .attr('src', imageLink)
          .attr('class', 'd-block w-100');
        // ask how to insert the variable i to the ID so that it populates the next div
        $('#trendingTopic1').html(imageTrending);
      });
    }
  });

  // END OF TRENDING IMAGE 1 ------->

  // START OF TRENDING IMAGE 2 ------->

  $.getJSON(URL2, function(data) {
    if (parseInt(data.totalHits) == 0) {
      $.ajax({
        url: URL2alt,
        method: 'GET'
      }).then(function(response) {
        console.log(response.hits[randomizer].largeImageURL + 'No Result');
        var imageLink = response.hits[randomizer].largeImageURL;
        var imageTrending = $('<img>')
          .attr('src', imageLink)
          .attr('class', 'd-block w-100');
        // ask how to insert the variable i to the ID so that it populates the next div
        $('#trendingTopic2').html(imageTrending);
      });
    } else {
      $.ajax({
        url: URL2,
        method: 'GET'
      }).then(function(response) {
        console.log(response.hits[0].largeImageURL + 'else triggered');
        var imageLink = response.hits[0].largeImageURL;
        var imageTrending = $('<img>')
          .attr('src', imageLink)
          .attr('class', 'd-block w-100');
        // ask how to insert the variable i to the ID so that it populates the next div
        $('#trendingTopic2').html(imageTrending);
      });
    }
  });

  // END OF TRENDING IMAGE 2 ------->

  // START OF TRENDING IMAGE 3 ------->

  $.getJSON(URL3, function(data) {
    if (parseInt(data.totalHits) == 0) {
      $.ajax({
        url: URL3alt,
        method: 'GET'
      }).then(function(response) {
        console.log(response.hits[randomizer].largeImageURL + 'No Result');
        var imageLink = response.hits[randomizer].largeImageURL;
        var imageTrending = $('<img>')
          .attr('src', imageLink)
          .attr('class', 'd-block w-100');
        // ask how to insert the variable i to the ID so that it populates the next div
        $('#trendingTopic3').html(imageTrending);
      });
    } else {
      $.ajax({
        url: URL3,
        method: 'GET'
      }).then(function(response) {
        console.log(response.hits[0].largeImageURL + 'else triggered');
        var imageLink = response.hits[0].largeImageURL;
        var imageTrending = $('<img>')
          .attr('src', imageLink)
          .attr('class', 'd-block w-100');
        // ask how to insert the variable i to the ID so that it populates the next div
        $('#trendingTopic3').html(imageTrending);
      });
    }
  });

  // END OF TRENDING IMAGE 3 ------->

  // START OF TRENDING IMAGE 4 ------->

  $.getJSON(URL4, function(data) {
    if (parseInt(data.totalHits) == 0) {
      $.ajax({
        url: URL4alt,
        method: 'GET'
      }).then(function(response) {
        console.log(response.hits[randomizer].largeImageURL + 'No Result');
        var imageLink = response.hits[randomizer].largeImageURL;
        var imageTrending = $('<img>')
          .attr('src', imageLink)
          .attr('class', 'd-block w-100');
        // ask how to insert the variable i to the ID so that it populates the next div
        $('#trendingTopic4').html(imageTrending);
      });
    } else {
      $.ajax({
        url: URL4,
        method: 'GET'
      }).then(function(response) {
        console.log(response.hits[0].largeImageURL + 'else triggered');
        var imageLink = response.hits[0].largeImageURL;
        var imageTrending = $('<img>')
          .attr('src', imageLink)
          .attr('class', 'd-block w-100');
        // ask how to insert the variable i to the ID so that it populates the next div
        $('#trendingTopic4').html(imageTrending);
      });
    }
  });

  // END OF TRENDING IMAGE 4 ------->

  // START OF TRENDING IMAGE 5 ------->

  $.getJSON(URL5, function(data) {
    if (parseInt(data.totalHits) == 0) {
      $.ajax({
        url: URL5alt,
        method: 'GET'
      }).then(function(response) {
        console.log(response.hits[randomizer].largeImageURL + 'No Result');
        var imageLink = response.hits[randomizer].largeImageURL;
        var imageTrending = $('<img>')
          .attr('src', imageLink)
          .attr('class', 'd-block w-100');
        // ask how to insert the variable i to the ID so that it populates the next div
        $('#trendingTopic5').html(imageTrending);
      });
    } else {
      $.ajax({
        url: URL5,
        method: 'GET'
      }).then(function(response) {
        console.log(response.hits[0].largeImageURL + 'else triggered');
        var imageLink = response.hits[0].largeImageURL;
        var imageTrending = $('<img>')
          .attr('src', imageLink)
          .attr('class', 'd-block w-100');
        // ask how to insert the variable i to the ID so that it populates the next div
        $('#trendingTopic5').html(imageTrending);
      });
    }
  });

  // END OF TRENDING IMAGE 5 ------->

  // START OF TRENDING IMAGE 6 ------->

  $.getJSON(URL6, function(data) {
    if (parseInt(data.totalHits) == 0) {
      $.ajax({
        url: URL6alt,
        method: 'GET'
      }).then(function(response) {
        console.log(response.hits[randomizer].largeImageURL + 'No Result');
        var imageLink = response.hits[randomizer].largeImageURL;
        var imageTrending = $('<img>')
          .attr('src', imageLink)
          .attr('class', 'd-block w-100');
        // ask how to insert the variable i to the ID so that it populates the next div
        $('#trendingTopic6').html(imageTrending);
      });
    } else {
      $.ajax({
        url: URL6,
        method: 'GET'
      }).then(function(response) {
        console.log(response.hits[0].largeImageURL + 'else triggered');
        var imageLink = response.hits[0].largeImageURL;
        var imageTrending = $('<img>')
          .attr('src', imageLink)
          .attr('class', 'd-block w-100');
        // ask how to insert the variable i to the ID so that it populates the next div
        $('#trendingTopic6').html(imageTrending);
      });
    }
  });

  // END OF TRENDING IMAGE 6 ------->

  // START OF TRENDING IMAGE 7 ------->

  $.getJSON(URL7, function(data) {
    if (parseInt(data.totalHits) == 0) {
      $.ajax({
        url: URL7alt,
        method: 'GET'
      }).then(function(response) {
        console.log(response.hits[randomizer].largeImageURL + 'No Result');
        var imageLink = response.hits[randomizer].largeImageURL;
        var imageTrending = $('<img>')
          .attr('src', imageLink)
          .attr('class', 'd-block w-100');
        // ask how to insert the variable i to the ID so that it populates the next div
        $('#trendingTopic7').html(imageTrending);
      });
    } else {
      $.ajax({
        url: URL7,
        method: 'GET'
      }).then(function(response) {
        console.log(response.hits[0].largeImageURL + 'else triggered');
        var imageLink = response.hits[0].largeImageURL;
        var imageTrending = $('<img>')
          .attr('src', imageLink)
          .attr('class', 'd-block w-100');
        // ask how to insert the variable i to the ID so that it populates the next div
        $('#trendingTopic7').html(imageTrending);
      });
    }
  });

  // END OF TRENDING IMAGE 7 ------->

  // CLOSING FOR API TRENDSPOTTER VERSION --- >

  // });

  // CLOSING FOR API TRENDSPOTTER VERSION --->

  function randerNextPage() {
    clickQuery = $(this).attr('topicQuery');
    console.log('CLICKED ON ' + $(this).attr('topicQuery'));
    window.location.href = 'html/hottopicsSearch.html?search=' + clickQuery;
  }

  $(document).on('click', '.onclickQuery', randerNextPage);
});
