function joinClub() {
    alert("Thank you for your interest! Contact us to join the club.");
}

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Message Sent Successfully!");

    this.reset();
});