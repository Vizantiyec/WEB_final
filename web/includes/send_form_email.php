<?php
if (isset($_REQUEST['InputEmail'])) {

// EDIT THE 2 LINES BELOW AS REQUIRED
$email_to = "d.elenchuk.uct@gmail.com";
$email_subject = "Your company name";

$input_name = $_POST['InputName']; // required
$email_from = $_POST['InputEmail']; // required
$comments = $_POST['InputMessage']; // required
$spam = $_POST['username'];
if ($spam) {  // If the hidden field is not empty, it's a bot
    died("No spamming allowed.");
}

$email_message = 'FROM: ' . $input_name . ' Email: ' . $email_from . 'Message: ' . $comments;
$headers = 'From: ' . $email_from . "\r\n";
if (filter_var($email_from, FILTER_VALIDATE_EMAIL)) {
    mail($email_to, $email_subject, $email_message, $headers);
    echo "Your email was sent!"; // success message
} else {
    echo "Invalid Email, please provide a correct email.";
}
}
?>
