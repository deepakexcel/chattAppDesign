<?php

// API access key from Google API's Console
define( 'API_ACCESS_KEY', 'AIzaSyCud3Ip685_VAzRB-b5KtTl3CpUKCGdezE' );


$registrationIds = array( "eAJkrNGFyO8:APA91bEUo11qxV4vnJEN-e5QNIOB-FXKHkThJGl6kIeVURi5hgbcjtbpvCA12XsdFtYJ5G-hnGLP4ancT-miIL-ODvFkvU37ppyYmQGwsTJSE_EPcKne33bQjMnrb5OYh90lAfnyDs4u" );

// prep the bundle
$msg = array
(
	'message' 	=> 'Yuvraj: Have a good day to you :D',
	'title'		=> 'Chatt',
	'image' => 'http://excellencetechnologies.co.in/yuvraj/splash.jpg',
	'actions'	=>  '[
       
       { "icon": "snooze", "title": "Reply", "callback": "actions_left","closeAfterClick" : 1},
   ]'
);
$fields = array
(
	'registration_ids' 	=> $registrationIds,
	'data'			=> $msg
);
 
$headers = array
(
	'Authorization: key=' . API_ACCESS_KEY,
	'Content-Type: application/json'
);
 
$ch = curl_init();
curl_setopt( $ch,CURLOPT_URL, 'https://android.googleapis.com/gcm/send' );
curl_setopt( $ch,CURLOPT_POST, true );
curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $fields ) );
$result = curl_exec($ch );
curl_close( $ch );

echo $result;
?>
