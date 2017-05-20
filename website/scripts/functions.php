<?php
require_once('Mailfunctions.php');
// Email Submit
// Note: filter_var() requires PHP >= 5.2.0
if ( isset($_POST['emaild']) && isset($_POST['name']) && isset($_POST['subject']) && isset($_POST['message']) && filter_var($_POST['emaild'], FILTER_VALIDATE_EMAIL) ) {

	$name  = $_POST['name'];
	$from_email = $_POST['emaild'];
	$message = $_POST['message'];
	$to_email="piyush@rooter.io";
	$subject = $name . " [" . $from_email . "] " . "wants to contact rooter with subject " ."\"". $_POST['subject']."\"";
  // detect & prevent header injections
  $test = "/(content-type|bcc:|cc:|to:)/i";
  foreach ( $_POST as $key => $val ) {
   if ( preg_match( $test, $val ) ) {
      exit;
    }
}
  
  //echo $message;
  //send email
  smtpmailer($to_email, $from_email, $name, $subject, $message);

}
?>
