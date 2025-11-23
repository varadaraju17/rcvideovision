<?php
if(
  isset($_POST['email']) && isset($_POST['name'])
){
  $to = 'contact@rcvideovision.in';
  $subject = 'Website contact form: ' . $_POST['name'];
  $message = "Name: ".$_POST['name']."\nEmail: ".$_POST['email']."\nPhone: ".$_POST['phone']."\n\n".$_POST['message'];
  $headers = 'From: '. $_POST['email'] ."\r\n" . 'Reply-To: '.$_POST['email'];
  mail($to, $subject, $message, $headers);
  header('Location: /?sent=1');
}
?>
