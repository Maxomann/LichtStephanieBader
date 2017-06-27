<?php

$name = $_POST['name'];
$email = $_POST['mail'];
$tel = $_POST['tel'];
$message = $_POST['message'];

$formcontent="Name: $name \n Email: $email \n Tel: $tel \n Nachricht: $message";
$recipient = "kontakt@LichtStephanieBader.de";
$subject = "Kontaktanfrage per Formular";
$mailheader = "From: $email \r\n";

mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Ihre Anfrage wurde versendet. Vielen Dank!";

?>