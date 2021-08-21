// From Code institue lesson for Sending Emails
function sendMail(contactForm) {
    emailjs.send("gmail", "Mythical Locations", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.contact.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
          return false;  // To block from loading a new page
}