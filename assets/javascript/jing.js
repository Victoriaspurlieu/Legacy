var map;
// Initialize and add the map
function initMap() {
  // The location of center US
  var centerUS = { lat: 37.0902, lng: -95.7129 };
  // The map, centered of US
  map = new google.maps.Map(document.getElementById('map'), { zoom: 4, center: centerUS });
}

//load the page
$(document).ready(function() {
  var urlParams = new URLSearchParams(window.location.search);

  //get the string from url parameters
  $('#hottopicSearch').val(urlParams.get('search'));

  //***when page loaded, run this function to add card and markers on google maps
  displayHottopicSearch();

  //type keyword in the search bar on the main page and dispay info on the VolunteerSearch page
  var randerNextPage = function() {
    window.location.href = '../html/hottopicsSearch.html?search=' + $('#hottopicSearch').val();
  };

  // on the main page, if hottopic search button is clicked, redirect to the VolunteerSearch page and apply input value to url
  $('#hottopicSearchBtn').on('click', randerNextPage);

  // on the main page or VolunteerSearch page, if the Enter key is pressed, redirect to the VolunteerSearch page and apply input value to url
  $('#hottopicSearch').on('keypress', function(event) {
    if (event.key === 'Enter') {
      randerNextPage();
    }
  });

  // when search button is clicked, reload the page and apply input value to url
  $('#htSearch').on('click', randerNextPage);

  function displayHottopicSearch() {
    $('.volunteer-section').empty();

    var hotTopics = $('#hottopicSearch')
      .val()
      .trim();
    var queryURL =
      'https://www.googleapis.com/customsearch/v1?q=' +
      hotTopics +
      '&cx=007887247332676928493%3Aix05svhfpzm&key=AIzaSyBJrw0IM3bX1sGlbgH1Pwwbygf422fFx_M';

    // console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function(response) {
      var results = response.items;

      for (i = 0; i < results.length; i++) {
        var volunteer = results[i];

        // Increase the volunteerCount (track volunteer # - starting at 1)
        var volunteerCount = i + 1;

        // Create the  list group to contain the volunteer and add the volunteer content for each
        var $volunteerList = $('<ul>');
        $volunteerList.addClass('list-group');

        // Add the newly created element to the DOM
        $('.volunteer-section').append($volunteerList);

        // If the item has a htmlTitle, log and append to $volunteerList
        var volunteerTitle = volunteer.htmlTitle;
        // console.log(volunteerTitle);
        var $volunteerListItem = $("<li class='list-group-item'>");
        $volunteerListItem.append(
          "<span class='label label-primary'>" + volunteerCount + '<strong> ' + volunteerTitle + '</strong>' + '</span>' + '<br>' + '<br>'
        );

        // If the item has snippet & link, log and append to volunteerList
        var volunteerSummary = volunteer.snippet;
        var volunteerLink = volunteer.formattedUrl;

        if (volunteerSummary) {
          $volunteerListItem.append("<h5 class='statement'>Statement: " + volunteerSummary + '</h5>' + '<br>');
        }

        // If the item has image and website link, add the link to the image and append to volunteerList
        var volunteerImage = volunteer.pagemap.metatags[0]['og:image'];
        if (volunteerImage) {
          $volunteerListItem.append(
            "<a style='float:left' href='" +
              volunteerLink +
              "'target='_blank'>" +
              "<img style='width:200px; height:200px;border: 1px solid #ddd;border-radius: 4px;padding: 10px;' src='" +
              volunteerImage +
              "'>" +
              '</a>'
          );
        }

        // If the item has description, log and append to volunteerList
        var volunteerOrgDes = volunteer.pagemap.metatags[0]['og:description'];
        if (volunteerOrgDes) {
          $volunteerListItem.append("<div class= 'description'> " + volunteerOrgDes + '</div>' + '<br>');
        }

        // location information
        var address = volunteer.pagemap.metatags[0]['og:street-address'];
        var locality = volunteer.pagemap.metatags[0]['og:locality'];
        var region = volunteer.pagemap.metatags[0]['og:region'];
        var postalCode = volunteer.pagemap.metatags[0]['og:postal-code'];
        var country = volunteer.pagemap.metatags[0]['og:country-name'];

        var addressLayout = $('<address>');
        if (address || locality || region || postalCode || country) {
          if (address) {
            addressLayout.append('<div>Visit us at: </div>');
            addressLayout.append('<div>' + address + '</div>');
          }
          if (locality) {
            addressLayout.append('<div>' + locality + '</div>');
          }
          if (region || postalCode) {
            addressLayout.append('<div>' + region + ' ' + postalCode + '</div>');
          }
          if (country) {
            addressLayout.append('<div>' + country + '</div>');
          }
        }

        $volunteerListItem.append(addressLayout);

        // add a link.
        if (volunteerLink) {
          $volunteerListItem.append(
            '<br>' + '<div class=link-action>' + "<a href='" + volunteerLink + "'target='_blank'>" + 'LINK TO WEBSITE' + '</a>' + '</div>'
          );
        }

        // append <li> to <ul>
        $volunteerList.append($volunteerListItem);
        console.log(volunteer.pagemap.metatags[0]['og:image']);

        // set latitude and longtitude for each of search result
        var latitude = parseFloat(volunteer.pagemap.metatags[0]['og:latitude']);
        var longitude = parseFloat(volunteer.pagemap.metatags[0]['og:longitude']);
        var newMarker = { lat: latitude, lng: longitude };

        // make a maker of each search result on google map
        // ** use "const" to set local variable "marker", as "var" doesn't work properly
        const marker = new google.maps.Marker({ position: newMarker, map: map });

        // add a website link of each serach to the marker
        var contentString = "<a href='" + volunteerLink + "'target='_blank'>" + volunteerLink + '</a>';
        // ** use "const" to set local variable "infowindow",as "var" doesn't work properly
        const infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }
    });

    $('#hottopicSearch').val('');
  }
});
