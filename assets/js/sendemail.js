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
            console.log("SUCCESS");
            let form = document.getElementById('jswrapper');
            form.innerHTML= `<h3 class = "special-text-main">Your message has seen successfully sent!</h3`;
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}