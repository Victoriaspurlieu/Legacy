


$(document).ready(function () {

    $("#htSearch").on("click", function () {



        $(".volunteer-section").empty();

        var hotTopics = $("#hottopicSearch").val().trim();

        var queryURL = "https://www.googleapis.com/customsearch/v1?q=" +
            hotTopics + "&cx=007887247332676928493%3Aix05svhfpzm&key=AIzaSyBJrw0IM3bX1sGlbgH1Pwwbygf422fFx_M";

        // console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
              

                var results = response.items;
                for (i = 0; i < results.length; i++) {
                    var volunteer = results[i];

                    // Increase the volunteerCount (track volunteer # - starting at 1)
                    var volunteerCount = i + 1;

                    // Create the  list group to contain the volunteer and add the volunteer content for each
                    var $volunteerList = $("<ul>");
                    $volunteerList.addClass("list-group");

                    // Add the newly created element to the DOM
                    $(".volunteer-section").append($volunteerList);

                    // If the item has a htmlTitle, log and append to $volunteerList
                    var volunteerTitle = volunteer.htmlTitle;
                    // console.log(volunteerTitle);
                    var $volunteerListItem = $("<li class='list-group-item'>");
                    $volunteerListItem.append(
                        "<span class='label label-primary'>" +
                        volunteerCount +
                        "</span>" +

                        "<strong> " +
                        volunteerTitle +
                        "</strong>"
                    );
                
                    

                    var volunteerSummary = volunteer.snippet;
                    if(volunteerSummary){
                        $volunteerListItem.append("<h5>Statement: "+volunteerSummary +"</h5>");
                    }

                    var volunteerImage = volunteer.pagemap.metatags[0]["og:image"];
                    var volunteerLink = volunteer.formattedUrl;
                    if(volunteerImage) {
                        $volunteerListItem.append("<a href='" + volunteerLink + "'>" + "<img style='width:200px; height:200px' src='" + volunteerImage  +"'>"+ "</a>");


                    }

                    $volunteerList.append($volunteerListItem);
                    console.log(volunteer.pagemap.metatags[0]["og:image"])

                    // link, snippethtml, pagemap.metatags[og:description];[og:title];[og:street-address];[og:locality];[og:country-name];[og:image]
                }



            })
       


    })
   



})















