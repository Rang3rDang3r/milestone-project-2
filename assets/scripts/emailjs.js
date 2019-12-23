
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
            $("#myModal").css("display", "none");
            $(".alert-success").css("display", "block")
        },
        function(error) {
            console.log("FAILED", error);
            $(".help-block").innerHTML("Our server is currently undergoing maintenance - Please try again later");
        }
    );      return false;
}