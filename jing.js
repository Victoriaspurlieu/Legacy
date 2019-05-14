
(function () {
    var cx = '007887247332676928493:ix05svhfpzm';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();


$(document).ready(function () {

    function hottopictSearch() {


        // // Logging the URL so we have access to it for troubleshooting
        // console.log("---------------\nURL: " + queryURL + "\n---------------");
        // console.log(queryURL + $.param(queryParams));
        // return queryURL + $.param(queryParams);

        var hotTopics = $("#hottopicSearch").val().trim();

        var queryURL = "https://www.googleapis.com/customsearch/v1?q=" +
            hotTopics + "&api_key=AIzaSyBJrw0IM3bX1sGlbgH1Pwwbygf422fFx_M";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var results = response.data;
                for (i=0; i<results.length;i++){
                    var volunteer = response.items[i];






                }

              

        })





















    }


})















