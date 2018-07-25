<?php 

header("Content-type: application/x-msdownload");
header("Content-Disposition: attachment; filename=export.xls");
header("Pragma: no-cache");
header("Expires: 0"); 
//header('content-type:text/json');
var_dump($_POST);
$array = json_decode($post,true);
// var_dump($array
for ($i=0; $i < sizeof($array); $i++) {
	
	echo "<h1>".$array[$i]['title']."</h1>";

	echo $array[$i]['html'];

	echo "<br><br>";
}

?>
