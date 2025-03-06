<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Recipient's email address
    $to = "j.travinov@gmail.com"; // Replace with your email address
    $subject = "New Message from Contact Form";

    // Email body
    $body = "You have received a new message from the contact form on your website.\n\n";
    $body .= "Name: " . $name . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Message: \n" . $message . "\n";

    // Email headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        // Email sent successfully
        echo "Thank you, the form has been submitted.";
    } else {
        // Error sending email
        echo "An error occurred while sending the form.";
    }
}
?>
