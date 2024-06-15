// Initialize EmailJS with your service ID
emailjs.init('RuMCqfD1WeOJQMM6Z'); // Replace 'user_YOUR_USER_ID' with your actual Email.js user ID

// Function to send email
async function sendEmail(e) {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
 
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log(name);

    // Check if all fields are filled
    if (name && email && message) {
        try {
            // Send email using EmailJS

            const response = await emailjs.send('service_syr317p', 'template_o612gtf', {
                from_name: name,
                from_email: email,
                message: message
            });

            console.log('Email sent successfully!', response);
            alert('Your message has been sent successfully!');
            // Clear form fields
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Oops! An error occurred while sending your message.');
        }finally {
            // Enable submit button after email is sent (success or error)
            submitBtn.disabled = false;
        }
    } else {
        alert('Please fill in all fields.');
        // Enable submit button if form fields are not filled
        submitBtn.disabled = false;
    }
}

// Hook up the form submit button to sendEmail function
document.getElementById('contactForm').addEventListener('submit', sendEmail);
