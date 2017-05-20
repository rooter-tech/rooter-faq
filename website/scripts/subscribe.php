<?php
require_once('Mailfunctions.php');
// Email Submit
// Note: filter_var() requires PHP >= 5.2.0
if ( isset($_POST['email']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {

    $name = $_POST['email'];
	$from_email = $_POST['email'];
    $message = "Subscribe form ";
	$to_email="support@superplan.io";
	$subject="[SuperPlan] ($from_email) wants to SUBSCRIBE to SuperPlan";
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
  //mail( "contactus@akira.co.in", "Contact Form: ".$_POST['name'], $_POST['message'], "From:" . $_POST['email'] );

}
?>