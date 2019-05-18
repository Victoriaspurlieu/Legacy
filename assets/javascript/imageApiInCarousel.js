var apiKey = "user_key=dd6dab64b179a2bb9a93127562835ed8";

var searchResult = "";
var corbEnabler = "https://cors-anywhere.herokuapp.com/";
var queryOrgHunter = "https://data.orghunter.com/v1/charitysearch?"
var twitterApiTrending = "https://api.twitter.com/1.1/trends/place.json?id=1"
var trendSpotterKey1 = "ae8480dff3fa343b6d215da041939e3e"
var backupKeyTrendspottr = "3bdb237763a5006354063055aa678cce";
var trendSpotter = "http://api.trendspottr.com/v1.5/search?key=" +backupKeyTrendspottr+ "&q=?"
var nytSearch = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&query=disaster&api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M";
var trendSpotterWord = "charity";
var googleCustomSearchAPI = "AIzaSyBjbsMhY3Ex-VPnna_MT9VkGJnyZFfzKqE"
var test = trendSpotter + trendSpotterWord ;


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


        // var imageQuery1 = response.results.hashtags[0].value
        var queryDiv1 = $("<div class='onclickQuery'>");
        var imageQuery1 = "#charity"
        var imageQuery1Word = imageQuery1.slice(1);
        console.log(imageQuery1Word)
        queryDiv1.attr("topicQuery",imageQuery1Word)
        queryDiv1.html(imageQuery1);
        $("#hashtag1").prepend(queryDiv1);
        

        // var imageQuery2 = response.results.hashtags[1].value
        var queryDiv2 = $("<div>");
        var imageQuery2 = "#helping";
        var imageQuery2Word = imageQuery2.slice(1);
        $("#hashtag2").html(imageQuery2);
        $("#hashtag2").append(queryDiv2);
        console.log(imageQuery2Word)


        // var imageQuery3 = response.results.hashtags[2].value
        var imageQuery3 = "#religion";
        var imageQuery3Word = imageQuery3.slice(1);
        $("#hashtag3").text(imageQuery3);

        // var imageQuery4 = response.results.hashtags[3].value
        var imageQuery4 = "#charity";
        var imageQuery4Word = imageQuery4.slice(1);
        $("#hashtag4").text(imageQuery4);
        
        // var imageQuery5 = response.results.hashtags[4].value
        var imageQuery5 = "#helping";
        var imageQuery5Word = imageQuery5.slice(1);
        $("#hashtag5").text(imageQuery5);

        // var imageQuery6 = response.results.hashtags[5].value
        var imageQuery6 = "#dogs";
        var imageQuery6Word = imageQuery6.slice(1);
        $("#hashtag6").text(imageQuery6);

        // var imageQuery7 = response.results.hashtags[6].value
        var imageQuery7 = "#cats"
        var imageQuery7Word = imageQuery7.slice(1);
        $("#hashtag7").text(imageQuery7);


        // $("#testDiv").append(trendingTopics)



    var pixabayApi = '12500053-5110b31002f0fc8b89ed377c4';

    var URL1 = "https://pixabay.com/api/?key=" + pixabayApi + "&q=" + encodeURIComponent(imageQuery1Word);
    var URL2 = "https://pixabay.com/api/?key=" + pixabayApi + "&q=" + encodeURIComponent(imageQuery2Word);
    var URL3 = "https://pixabay.com/api/?key=" + pixabayApi + "&q=" + encodeURIComponent(imageQuery3Word);
    var URL4 = "https://pixabay.com/api/?key=" + pixabayApi + "&q=" + encodeURIComponent(imageQuery4Word);
    var URL5 = "https://pixabay.com/api/?key=" + pixabayApi + "&q=" + encodeURIComponent(imageQuery5Word);
    var URL6 = "https://pixabay.com/api/?key=" + pixabayApi + "&q=" + encodeURIComponent(imageQuery6Word);
    var URL7 = "https://pixabay.com/api/?key=" + pixabayApi + "&q=" + encodeURIComponent(imageQuery7Word);


    var URL1alt = "https://pixabay.com/api/?key=" + pixabayApi + "&q=" + encodeURIComponent("charity");
    var URL2alt = "https://pixabay.com/api/?key=" + pixabayApi + "&q=" + encodeURIComponent("donation");
    var URL3alt = "https://pixabay.com/api/?key=" + pixabayApi + "&q=" + encodeURIComponent("helping");
    var URL4alt = "https://pixabay.com/api/?key=" + pixabayApi + "&q=" + encodeURIComponent("charity");
    var URL5alt = "https://pixabay.com/api/?key=" + pixabayApi + "&q=" + encodeURIComponent("volunteer");
    var URL6alt = "https://pixabay.com/api/?key=" + pixabayApi + "&q=" + encodeURIComponent("donation");
    var URL7alt = "https://pixabay.com/api/?key=" + pixabayApi + "&q=" + encodeURIComponent("poor");

    var randomizer = Math.floor(Math.random() * 7);

    // START OF TRENDING IMAGE 1 ------->

    $.getJSON(URL1, function (data) {
        if (parseInt(data.totalHits) == 0) {
            $.ajax({
                url: URL1alt,
                method: "GET",
            }).then(function (response) {
                console.log(response.hits[randomizer].largeImageURL + "No Result");
                var imageLink = response.hits[randomizer].largeImageURL;
                var imageTrending = $("<img>").attr("src", imageLink).attr("class", "d-block w-100");
                // ask how to insert the variable i to the ID so that it populates the next div
                $("#trendingTopic1").html(imageTrending);
            });
        }
        else {
            $.ajax({
                url: URL1,
                method: "GET",
            }).then(function (response) {
                console.log(response.hits[0].largeImageURL + "else triggered");
                var imageLink = response.hits[0].largeImageURL;
                var imageTrending = $("<img>").attr("src", imageLink).attr("class", "d-block w-100");
                // ask how to insert the variable i to the ID so that it populates the next div
                $("#trendingTopic1").html(imageTrending);

            })
        }
    });

    // END OF TRENDING IMAGE 1 ------->


    // START OF TRENDING IMAGE 2 ------->

    $.getJSON(URL2, function (data) {
        if (parseInt(data.totalHits) == 0) {
            $.ajax({
                url: URL2alt,
                method: "GET",
            }).then(function (response) {
                console.log(response.hits[randomizer].largeImageURL + "No Result");
                var imageLink = response.hits[randomizer].largeImageURL;
                var imageTrending = $("<img>").attr("src", imageLink).attr("class", "d-block w-100");
                // ask how to insert the variable i to the ID so that it populates the next div
                $("#trendingTopic2").html(imageTrending);
            });
        }
        else {
            $.ajax({
                url: URL2,
                method: "GET",
            }).then(function (response) {
                console.log(response.hits[0].largeImageURL + "else triggered");
                var imageLink = response.hits[0].largeImageURL;
                var imageTrending = $("<img>").attr("src", imageLink).attr("class", "d-block w-100");
                // ask how to insert the variable i to the ID so that it populates the next div
                $("#trendingTopic2").html(imageTrending);

            })
        }
    });

    // END OF TRENDING IMAGE 2 ------->


    // START OF TRENDING IMAGE 3 ------->

    $.getJSON(URL3, function (data) {
        if (parseInt(data.totalHits) == 0) {
            $.ajax({
                url: URL3alt,
                method: "GET",
            }).then(function (response) {
                console.log(response.hits[randomizer].largeImageURL + "No Result");
                var imageLink = response.hits[randomizer].largeImageURL;
                var imageTrending = $("<img>").attr("src", imageLink).attr("class", "d-block w-100");
                // ask how to insert the variable i to the ID so that it populates the next div
                $("#trendingTopic3").html(imageTrending);
            });
        }
        else {
            $.ajax({
                url: URL3,
                method: "GET",
            }).then(function (response) {
                console.log(response.hits[0].largeImageURL + "else triggered");
                var imageLink = response.hits[0].largeImageURL;
                var imageTrending = $("<img>").attr("src", imageLink).attr("class", "d-block w-100");
                // ask how to insert the variable i to the ID so that it populates the next div
                $("#trendingTopic3").html(imageTrending);

            })
        }
    });

    // END OF TRENDING IMAGE 3 ------->

                    // START OF TRENDING IMAGE 4 ------->

                    $.getJSON(URL4, function (data) {
        if (parseInt(data.totalHits) == 0) {
            $.ajax({
                url: URL4alt,
                method: "GET",
            }).then(function (response) {
                console.log(response.hits[randomizer].largeImageURL + "No Result");
                var imageLink = response.hits[randomizer].largeImageURL;
                var imageTrending = $("<img>").attr("src", imageLink).attr("class", "d-block w-100");
                // ask how to insert the variable i to the ID so that it populates the next div
                $("#trendingTopic4").html(imageTrending);
            });
        }
        else {
            $.ajax({
                url: URL4,
                method: "GET",
            }).then(function (response) {
                console.log(response.hits[0].largeImageURL + "else triggered");
                var imageLink = response.hits[0].largeImageURL;
                var imageTrending = $("<img>").attr("src", imageLink).attr("class", "d-block w-100");
                // ask how to insert the variable i to the ID so that it populates the next div
                $("#trendingTopic4").html(imageTrending);

            })
        }
    });

    // END OF TRENDING IMAGE 4 ------->


                    // START OF TRENDING IMAGE 5 ------->

                    $.getJSON(URL5, function (data) {
        if (parseInt(data.totalHits) == 0) {
            $.ajax({
                url: URL5alt,
                method: "GET",
            }).then(function (response) {
                console.log(response.hits[randomizer].largeImageURL + "No Result");
                var imageLink = response.hits[randomizer].largeImageURL;
                var imageTrending = $("<img>").attr("src", imageLink).attr("class", "d-block w-100");
                // ask how to insert the variable i to the ID so that it populates the next div
                $("#trendingTopic5").html(imageTrending);
            });
        }
        else {
            $.ajax({
                url: URL5,
                method: "GET",
            }).then(function (response) {
                console.log(response.hits[0].largeImageURL + "else triggered");
                var imageLink = response.hits[0].largeImageURL;
                var imageTrending = $("<img>").attr("src", imageLink).attr("class", "d-block w-100");
                // ask how to insert the variable i to the ID so that it populates the next div
                $("#trendingTopic5").html(imageTrending);

            })
        }
    });

    // END OF TRENDING IMAGE 5 ------->


                    // START OF TRENDING IMAGE 6 ------->

                    $.getJSON(URL6, function (data) {
        if (parseInt(data.totalHits) == 0) {
            $.ajax({
                url: URL6alt,
                method: "GET",
            }).then(function (response) {
                console.log(response.hits[randomizer].largeImageURL + "No Result");
                var imageLink = response.hits[randomizer].largeImageURL;
                var imageTrending = $("<img>").attr("src", imageLink).attr("class", "d-block w-100");
                // ask how to insert the variable i to the ID so that it populates the next div
                $("#trendingTopic6").html(imageTrending);
            });
        }
        else {
            $.ajax({
                url: URL6,
                method: "GET",
            }).then(function (response) {
                console.log(response.hits[0].largeImageURL + "else triggered");
                var imageLink = response.hits[0].largeImageURL;
                var imageTrending = $("<img>").attr("src", imageLink).attr("class", "d-block w-100");
                // ask how to insert the variable i to the ID so that it populates the next div
                $("#trendingTopic6").html(imageTrending);

            })
        }
    });

    // END OF TRENDING IMAGE 6 ------->


                    // START OF TRENDING IMAGE 7 ------->

                    $.getJSON(URL7, function (data) {
        if (parseInt(data.totalHits) == 0) {
            $.ajax({
                url: URL7alt,
                method: "GET",
            }).then(function (response) {
                console.log(response.hits[randomizer].largeImageURL + "No Result");
                var imageLink = response.hits[randomizer].largeImageURL;
                var imageTrending = $("<img>").attr("src", imageLink).attr("class", "d-block w-100");
                // ask how to insert the variable i to the ID so that it populates the next div
                $("#trendingTopic7").html(imageTrending);
            });
        }
        else {
            $.ajax({
                url: URL7,
                method: "GET",
            }).then(function (response) {
                console.log(response.hits[0].largeImageURL + "else triggered");
                var imageLink = response.hits[0].largeImageURL;
                var imageTrending = $("<img>").attr("src", imageLink).attr("class", "d-block w-100");
                // ask how to insert the variable i to the ID so that it populates the next div
                $("#trendingTopic7").html(imageTrending);

            })
        }
    });

    // END OF TRENDING IMAGE 7 ------->



    // CLOSING FOR TRENDSPOTTER DIV

// });

    // CLOSING FOR TRENDSPOTTER DIV
