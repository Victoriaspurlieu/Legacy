$(document).ready(function() {
  $('#htSearch').on('click', function() {
    $('.volunteer-section').empty();

    var hotTopics = $('#hottopicSearch')
      .val()
      .trim();

    var queryURL = 'https://www.googleapis.com/customsearch/v1?q=' + hotTopics + '&cx=007887247332676928493%3Aix05svhfpzm&key=AIzaSyBJrw0IM3bX1sGlbgH1Pwwbygf422fFx_M';

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
        $volunteerListItem.append("<span class='label label-primary'>" + volunteerCount + '</span>' + '<strong> ' + volunteerTitle + '</strong>');

        var volunteerLink = volunteer.formattedUrl;

        // If the item has snippet & link, log and append to volunteerList
        var volunteerSummary = volunteer.snippet;
        var volunteerLink = volunteer.formattedUrl;
        if (volunteerSummary && volunteerLink) {
          $volunteerListItem.append('<h5>Statement: ' + volunteerSummary + '</h5>');
          $volunteerListItem.append("<a href='" + volunteerLink + "'>" + volunteerLink + '</a>');
        }

        // If the item has image and website link, add the link to the image and append to volunteerList
        var volunteerImage = volunteer.pagemap.metatags[0]['og:image'];
        if (volunteerImage) {
          $volunteerListItem.append("<a style='float:left' href='" + volunteerLink + "'>" + "<img style='width:200px; height:200px' src='" + volunteerImage + "'>" + '</a>');
        }

        // If the item has description, log and append to volunteerList
        var volunteerOrgDes = volunteer.pagemap.metatags[0]['og:description'];
        if (volunteerOrgDes) {
          $volunteerListItem.append('<div >Description: ' + volunteerOrgDes + '</div>');
        }

        // location information
        var address = volunteer.pagemap.metatags[0]['og:street-address'];
        var locality = volunteer.pagemap.metatags[0]['og:locality'];
        var region = volunteer.pagemap.metatags[0]['og:region'];
        var postalCode = volunteer.pagemap.metatags[0]['og:postal-code'];
        var country = volunteer.pagemap.metatags[0]['og:country-name'];

        if (address || locality || region || postalCode || country) {
          $volunteerListItem.append('<h5>Location: </h5>');
          $volunteerListItem.append('<h5>' + address + '</h5>');
          $volunteerListItem.append('<h5>' + locality + ',' + region + ' ' + postalCode + '</h5>');
        }

        var latitude = volunteer.pagemap.metatags[0]['og:latitude'];
        var longitude = volunteer.pagemap.metatags[0]['og:longitude'];

        // append <li> to <ul>
        $volunteerList.append($volunteerListItem);
        console.log(volunteer.pagemap.metatags[0]['og:image']);

        // link, snippethtml, pagemap.metatags[og:description];[og:title];[og:street-address];[og:locality];[og:country-name];[og:image]
      }
    });
  });
});
