//=======================================
$(document).ready(function() {
  // Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyCdgLnE4X5II0AUhLuW_N0JjUhRIYzmKmo',
    authDomain: 'legacy-9be16.firebaseapp.com',
    databaseURL: 'https://legacy-9be16.firebaseio.com',
    projectId: 'legacy-9be16',
    storageBucket: 'legacy-9be16.appspot.com',
    messagingSenderId: '28478023899',
    appId: '1:28478023899:web:aecc927cd3508f86'
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  $('#submitStory').on('click', function(event) {
    event.preventDefault();

    //grab the user input
    var userName = $('#name-input')
      .val()
      .trim();

    var locationName = $('#locationName-input')
      .val()
      .trim();

    var story = $('#story-input')
      .val()
      .trim();

    var randomImg = Math.floor(Math.random() * 3);
    console.log(randomImg);
    // Creates local "temporary" object for holding user data

    var newStory = {
      Name: userName,
      VolunteerLocation: locationName,
      Story: story,
      AveterImageNum: randomImg
    };

    // Uploads employee data to the database
    database.ref().push(newStory);

    // Clears all of the text-boxes
    $('#name-input').val('');
    $('#locationName-input').val('');
    $('#story-input').val('');
  });

  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry

  database.ref().on('child_added', function(childSanpshot) {
    // Store everything into a variable.

    //1. store img

    var userAdverter = $('<img>').attr('style', 'width: 100px;');
    userAdverter.attr('src', '../assets/imgs/Asset' + childSanpshot.val().AveterImageNum + '.png');

    //2. store name and location of volunteer
    var userName = $('<h5>').text(childSanpshot.val().Name);
    var locationName = $('<p>').text(childSanpshot.val().VolunteerLocation);

    //3. store user story
    var userStory;
    var wordlength = childSanpshot.val().Story.length;

    var colDiv = $('<div>')
      .addClass('col-3')
      .attr('id', 'storyDiv');

    var cardDiv = $('<div>')
      .addClass('card')
      .attr('style', 'width: 18rem; padding:20px');

    if (wordlength < 250) {
      userStory = $('<p>').text(childSanpshot.val().Story);

      cardDiv.append(userAdverter, userName, locationName, userStory);
    } else {
      var readMoreBtn = $('<buttom>')
        .addClass('btn btn-primary')
        .attr('type', 'button')
        .attr('data-toggle', 'popover')
        .attr('title', childSanpshot.val().Name)
        .attr('data-content', childSanpshot.val().Story);

      readMoreBtn.text('Read More Here');

      $(function() {
        $('[data-toggle="popover"]').popover();
      });

      userStory = $('<p>').text(childSanpshot.val().Story.substr(0, 240) + '......');

      cardDiv.append(userAdverter, userName, locationName, userStory, readMoreBtn);
    }

    colDiv.append(cardDiv);

    $('#usercard').prepend(colDiv);
  });
});
