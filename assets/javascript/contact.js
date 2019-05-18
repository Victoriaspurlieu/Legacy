$(document).ready(function() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = $('.needs-validation');
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function(form) {
    forms.submit(function(event) {
      event.preventDefault();
      event.stopPropagation();
      if (form.checkValidity() === false) {
      } else {
        // insert sweet Alert moado dialog
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Thank You for Contacting Us',
          showConfirmButton: false,
          timer: 3000,
          onClose: function() {
            location.reload();
          }
        });

        var firstName = $('#first-name-input')
          .val()
          .trim();

        var lastName = $('#last-name-input')
          .val()
          .trim();

        var email = $('#inputEmail')
          .val()
          .trim();

        var comment = $('#Textarea1')
          .val()
          .trim();

        var newMessage = {
          FirstName: firstName,
          LastName: lastName,
          Email: email,
          Message: comment
        };

        database.ref().push(newMessage);
      }
      form.classList.add('was-validated');
    });
  });

  // Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyBd9qBRs0QAT_gN_RzoIOFsWCRkJC-UcEU',
    authDomain: 'contact-53f6e.firebaseapp.com',
    databaseURL: 'https://contact-53f6e.firebaseio.com',
    projectId: 'contact-53f6e',
    storageBucket: 'contact-53f6e.appspot.com',
    messagingSenderId: '367259568208',
    appId: '1:367259568208:web:d36a5588b8986704'
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();
});
