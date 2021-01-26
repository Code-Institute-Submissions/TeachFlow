function sendMail(contactForm) {
    emailjs.send("google", "teachflow", {
        "from_fname": contactForm.firstname.value,
        "from_lname": contactForm.lastname.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.yourmessage.value,
        "subscribe":contactForm.subscribe.value
    })
    .then(
        function() {
            // successful - message sent
            let form = document.getElementById('jswrapper');
            form.innerHTML= `<h3 class = "special-text-main">Your message has been successfully sent!</h3`;
        },
        // failed - message not sent
        function() {
            swal(`Error!
            Your message has not been sent.
            Please try again. `)
        }
    );
    return false;  // To block from loading a new page
}