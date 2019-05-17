
    var pixabayApi = '12500053-5110b31002f0fc8b89ed377c4';
    var imageQuery1 = "charity";
    var imageQuery2 = "animals";
    var imageQuery3 = "poverty";


    var URL1 = "https://pixabay.com/api/?key=" + pixabayApi + "&q=" + encodeURIComponent(imageQuery1);


    $.ajax({
        url: URL1,
        method: "GET",
    }).then(function (response) {
        console.log(response.hits[0].largeImageURL)
        var imageLink = response.hits[0].largeImageURL;
        var imageTrending = $("<img>").attr("src", imageLink).attr("class", "d-block w-100");
        // ask how to insert the variable i to the ID so that it populates the next div
        $("#trendingTopic1").html(imageTrending);
    }
    );

    var URL2 = "https://pixabay.com/api/?key=" + pixabayApi + "&q=" + encodeURIComponent(imageQuery2);

    $.ajax({
        url: URL2,
        method: "GET",
    }).then(function (response) {
        console.log(response.hits[0].largeImageURL)
        var imageLink = response.hits[0].largeImageURL;
        var imageTrending = $("<img>").attr("src", imageLink).attr("class", "d-block w-100");
        // ask how to insert the variable i to the ID so that it populates the next div
        $("#trendingTopic2").html(imageTrending);
    }
    );

    var URL3= "https://pixabay.com/api/?key=" + pixabayApi + "&q=" + encodeURIComponent(imageQuery3);

    $.ajax({
        url: URL3,
        method: "GET",
    }).then(function (response) {
        console.log(response.hits[0].largeImageURL)
        var imageLink = response.hits[0].largeImageURL;
        var imageTrending = $("<img>").attr("src", imageLink).attr("class", "d-block w-100");
        // ask how to insert the variable i to the ID so that it populates the next div
        $("#trendingTopic3").html(imageTrending);
    }
    );




