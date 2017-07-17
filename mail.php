<?php

$recaptcha_response = $_POST['g-recaptcha-response'];

// request to recaptcha api
$url = 'https://www.google.com/recaptcha/api/siteverify';
$RECAPTCHA_SECRET = 'XXXXX';

$data = array('secret' => $RECAPTCHA_SECRET, 'response' => 'value2');

// use key 'http' even if you send the request to https://...
$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data)
    )
);
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);
if ($result === FALSE) { die("Recaptcha Error! (Code: 0) Bitte kontaktieren Sie einen Administrator.") }

if(!$result['success']) { die("Recaptcha Error! (Code: 1) Bitte kontaktieren Sie einen Administrator." }

// send mail

$name = $_POST['name'];
$email = $_POST['mail'];
$tel = $_POST['tel'];
$message = $_POST['message'];

$formcontent="Name: $name \n Email: $email \n Tel: $tel \n Nachricht: $message";
$recipient = "kontakt@LichtStephanieBader.de";
$subject = "Kontaktanfrage per Formular";
$mailheader = "From: $email \r\n";

mail($recipient, $subject, $formcontent, $mailheader) or die("Mail Error! Bitte kontaktieren Sie einen Administrator.");
echo "Ihre Anfrage wurde versendet. Vielen Dank!";

?>