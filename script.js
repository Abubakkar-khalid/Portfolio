$('#contact-form').on('submit', function(event){
    event.preventDefault();
    sendEmail()
})
function sendEmail() {
    // Fetch form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var budget = document.getElementById('budget').value;
    var message = document.getElementById('message').value;

    // Construct email body
    var emailBody = `
        Name: ${name} <br/>
        Email: ${email} <br/>
        Subject: ${subject} <br/>
        Budget: ${budget} <br/>
        Message: ${message}
    `;

    console.log(emailBody)
    // Send email
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "abubakarkhalad4@gmail.com",
        Password: "A0E5E5BA92D8CB22C50A9DEFD347CB1C924D",  
        Port: 2525,
        To: 'abubakarkhalad4@gmail.com', 
        From: 'abubakarkhalad4@gmail.com',  
        Subject: subject,
        Body: emailBody
    })
    .then(function (message) {
        console.log(message)
        alert("Mail sent successfully"); 
    })
    .catch(function (error) {
        alert("Error in sending mail: " + error);
    });
}
