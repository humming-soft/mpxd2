<?php
include "./config.php";
/**
 * Created on 			: 31-11-2016
 * Author 				: sebin
 * Last Modified on 	: 02-11-2016
 * Desc 				:
 **/

//Test
$ref=["gallery"=>["v201","v202","v203","v204","v205","v206","v207","v208","v209","v210"]];


/**
 * GALLERY
 * @param $slug
 * @return Array
 * @Desc If a new week is found first push it as an album and the same as image. Then others are as image
 */
function gallery($slug){
	$temp = array();
	$t= array();
	$query = db()->gallery()
		->select("*")
		->where("slug", $slug)
		->order("week DESC");
	$result = array_map('iterator_to_array', iterator_to_array($query));
	$week = array();
	$itr = 0;
	foreach ($result as $v){
		if(!in_array($v["week"], $week)) {
			$itr++;
			$temp["path"] = $v["uploaded_path"];
			$temp["title"] = $v["album_name"];
			$temp["kind"] = "album";
			$temp["id"] = $itr;
			array_push($t, $temp);
			$temp["path"] = $v["uploaded_path"];
			$temp["title"] = $v["image_description"];
			$temp["kind"] = "image";
			$temp["id"] = $itr;
			array_push($t, $temp);
		}else {
			$temp["path"] = $v["uploaded_path"];
			$temp["title"] = $v["image_description"];
			$temp["kind"] = "image";
			$temp["id"] = $itr;
			array_push($t, $temp);
		}
		if(!in_array($v["week"], $week)) {
			array_push($week, $v["week"]);
		}
	}
	return $t;
}

/**
 * KPI(QRM)
 * @param $slug
 * @return Array
 * @Desc
 */
function kpi($slug){
	$max_date = db()->kpi()
		->select('MAX(date)')
		->where("slug", $slug);
	$m =$max_date->fetch();
	if($m) {
		$date = ($m['max']);
		$query = db()->kpi()
			->select('name', 'baseline', 'target', 'actual')
			->where("slug", $slug)
			->where("date", $date);
		$result = array_map('iterator_to_array', iterator_to_array($query));
		return $result;
	}
	return [];
}

/**
 * Info
 * @param $slug
 * @return Array
 * @Desc
 */
function info($slug){
	$query = db()->package_info()
		->select('spd','type','url')
		->where("slug", $slug);
	$result = array_map('iterator_to_array', iterator_to_array($query));
	return $result;
}

/**
 * Contractor info
 * @param $slug
 * @return Array
 * @Desc
 */
function contractor($slug){
	$query = db()->contractors()
		->select('contractor')
		->where("slug", $slug);
	$result = array_map('iterator_to_array', iterator_to_array($query));
	return $result;
}

/**
 * Package Info
 * @param $slug
 * @return Array
 * @Desc
 */
function packageInfo($slug){
	$info = info($slug);
	$contractor = contractor($slug);
	$i = array();
	$i["name"] = strtoupper($slug);
	foreach ($contractor as $value){
		$i["contractor"] = $value['contractor'];
	}
	$i["station"] = array();
	$i["mspr"] = array();
	$i["depot"] = array();
	foreach ($info as $value){
		if($value["type"] == 1){
			array_push($i["station"],$value["spd"]);
		}elseif ($value["type"] == 2){
			array_push($i["mspr"],$value["spd"]);
		}else{
			array_push($i["depot"],$value["spd"]);
		}
	}
	return $i;
}

/**
 * KAD
 * @param $slug
 * @return Array
 * @Desc
 */
function kad($slug){
	return [];
}

/**
 * Safety Incidents (hsse)
 * @param $slug
 * @return Array
 * @Desc
 */
function safety_incident($slug){
	return [];
}

/**
 * S-curve
 * @param $slug
 * @return Array
 * @Desc
 */
function scurve($slug){
	return [];
}

/**
 * VIADUCTS
 * @param $slug
 * @return Array
 * @Desc Portlet specific info of viaducts
 */
function build_viaducts($slug){
	//Job date
	$date = date("Y-m-d");

	$info = packageInfo($slug);
	$gallery = gallery($slug);
	$kpi = kpi($slug);
	$kad = kad($slug);
	$hsse = safety_incident($slug);
	$scurve = scurve($slug);

	$finalQRM = array("QRM" => $kpi);
	$finalKAD = array("KAD" => $kad);
	$finalINFO = array("INFO" =>$info);
	$finalHSSE = array("hsse" => $hsse);
	$finalGALLERY = array("gallery" => $gallery);
	$finalSCURVE = array("scurve" => $scurve);
	$superFinal = array($slug => array_merge($finalQRM, $finalKAD, $finalINFO, $finalHSSE, $finalGALLERY, $finalSCURVE));

	echo json_encode($superFinal);
//	updateDB($slug, json_encode($gallery), $date);
}
/**
 * SYSTEMS
 * @param $slug
 * @return Array
 * @Desc  Portlet specific info of Systems
 */
function build_systems($slug){

}

/**
 * STATIONS
 * @param $slug
 * @return Array
 * @Desc Portlet specific info of Stations
 */
function build_stations($slug){

}

/**
 * UNDER GROUND (UG)
 * @param $slug
 * @return Array
 * @Desc  Portlet specific info of Under Ground (UG)
 */
function build_ug($slug){

}
/**
 * Update the Line2 DB
 * @param $slug, $value, $date
 * @Desc Updates if item_id and date exists otherwise Inserts.
 */
function updateDB($slug, $value, $date){
	$item = mpxd()->items()
		->where("slug", $slug);
	$item = $item->fetch();
	if($item){
		$id = ($item['id']);
		$name = ($item['name']);
		$data = mpxd()->data_sources()
			->where("item_id = $id AND date = '$date'"); //Check if there's a record for given date.
		$datax = $data->fetch();
		if($datax){ // exist
			$d = array("value" => $value);
			$data->update($d);
		}
		else{ //new row
			$d = array("item_id" => $id , "value" => $value, "date" => $date, "name" => $name);
			$ds = mpxd()->data_sources(); //echo $ds->count();
			$ds->insert($d);
		}
	}
}

build_viaducts("v201");
?>