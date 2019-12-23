
function sendMail(contactForm) {
    emailjs.send("gmail", "contact_form", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.email.value,
        "from_number": contactForm.mobile.value,
        "contact_summary": contactForm.contactsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );      return false;
}