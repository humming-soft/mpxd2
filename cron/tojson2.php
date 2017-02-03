<?php
include "./config.php";
/**
 * Created on 			: 31-11-2016
 * Author 				: Sebin Thomas
 * Last Modified on 	: 25-01-2017
 * Desc 				: Formatted JSON Data Creation.
 * 						  This file is called in Cron Job for the further processing.
 **/

//Test
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
		}else{
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
		->where("slug", $slug)
		->or("slug", strtoupper($slug));
	$m = $max_date->fetch();
	if($m) {
		$date = ($m['max']);
		$query = db()->kpi()
			->select('name', 'baseline', 'target', 'actual')
			->where("slug", $slug)
			->or("slug", strtoupper($slug))
			->where("date", $date);
		$result = array_map('iterator_to_array', iterator_to_array($query));
		$kpiarr = array();
		foreach($result as $q){
			$kpiarr[] = array($q['name'], (float)$q['baseline'], (float)$q['target'], (float)$q['actual']);
		}
		return $kpiarr;
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

function getName($slug){
	$slugInfo = db()->ref_slug()
		->where("slug", $slug);
	$slugInfo = $slugInfo->fetch();
	if($slugInfo) {
		$name = ($slugInfo['name']);
	}else{
		$name ="-";
	}
	return $name;
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
function packageInfo($slug, $type = 1){
	$contractor = contractor($slug);
	$i = array();
	$i["name"] = getName($slug);
	foreach ($contractor as $value) {
		$i["contractor"] = $value['contractor'];
	}
	if ($type == 1) {
		$info = info($slug);
		$i["station"] = array();
		$i["mspr"] = array();
		$i["depot"] = array();
		foreach ($info as $value) {
			if ($value["type"] == 1) {
				array_push($i["station"], $value["spd"]);
			} elseif ($value["type"] == 2) {
				array_push($i["mspr"], $value["spd"]);
			} else {
				array_push($i["depot"], $value["spd"]);
			}
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
 * KD
 * @param $slug
 * @return Array
 * @Desc
 */
function kd($slug){
	return [];
}
/**
 * Safety Incidents (hsse)
 * @param $slug
 * @return Array
 * @Desc
 */
function safety_incident($slug){
	$query = db()->hsse()
		->select('incident_date','incident')
		->where("slug", $slug)
		->or("slug", strtoupper($slug));
	$result = array_map('iterator_to_array', iterator_to_array($query));
	$hssearr = array();
	foreach($result as $q){
		$hssearr[] = array(date('d-F-Y', strtotime($q['incident_date'])), $q['incident']);
	}
	return $hssearr;
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
 * Tunnel Progress
 * @param $slug
 * @return Array
 * @Desc
 */
function tunnel_progress($slug){
	return [];
}

/**
 * Underground Station Progress
 * @param $slug
 * @return Array
 * @Desc
 */
function ug_station_progress($slug){
	return [];
}

/**
 * INFO TUNNEL
 * @param $slug
 * @return Array
 * @Desc
 */
function info_tunnel($slug){
	return [];
}

/**
 * Underground Station Activity
 * @param $slug
 * @return Array
 * @Desc
 */
function ug_station_activity($slug){
	return [];
}

/**
 * Viaduct Summary
 * @param $slug
 * @return Array
 * @Desc
 */
function v_summary($slug){
	return[];
}
/**
 *69696969669696969696969696969696969696969696969696969696969696969696969696969696969699696969696996969696969696969696969696969696969696969696969696969
 */

/**
 * VIADUCTS
 * @param $slug
 * @return Array
 * @Desc Portlet specific info of viaducts
 */
function build_viaducts($slug){

	$info = packageInfo($slug,1);
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

	return json_encode($superFinal);
//	updateDB($slug, json_encode($superFinal), $date);
}
/**
 * SYSTEMS
 * @param $slug
 * @return Array
 * @Desc  Portlet specific info of Systems
 */
function build_systems($slug){
	$info = packageInfo($slug,2);
	$gallery = gallery($slug);
	$kad = kad($slug);
	$scurve = scurve($slug);

	$finalKAD = array("KAD" => $kad);
	$finalINFO = array("INFO" =>$info);
	$finalGALLERY = array("gallery" => $gallery);
	$finalSCURVE = array("scurve" => $scurve);
	$superFinal = array($slug => array_merge($finalINFO,  $finalKAD, $finalGALLERY, $finalSCURVE));
	return json_encode($superFinal);
}

/**
 * STATIONS
 * @param $slug
 * @return Array
 * @Desc Portlet specific info of Stations
 */
function build_stations($slug){

	$info = packageInfo($slug,2);
	$gallery = gallery($slug);
	$kpi = kpi($slug);
	$kad = kad($slug);
	$scurve = scurve($slug);

	$finalQRM = array("QRM" => $kpi);
	$finalKAD = array("KAD" => $kad);
	$finalINFO = array("INFO" =>$info);
	$finalGALLERY = array("gallery" => $gallery);
	$finalSCURVE = array("scurve" => $scurve);
	$superFinal = array($slug => array_merge($finalQRM, $finalKAD, $finalINFO, $finalGALLERY, $finalSCURVE));
	return json_encode($superFinal);
}

/**
 * UNDER GROUND (UG)
 * @param $slug
 * @return Array
 * @Desc  Portlet specific info of Under Ground (UG)
 */
function build_ug($slug){
	$tunnel_progress = tunnel_progress($slug);
	$info = packageInfo($slug,2);
	$info_tunnel = info_tunnel($slug);
	$station_progress = ug_station_progress($slug);
	$gallery = gallery($slug);
	$gallery_tunnel = gallery($slug);
	$kad = kad($slug);
	$kad_tunnel = kad($slug);
	$hsse = safety_incident($slug);
	$hsse_tunnel = safety_incident($slug);
	$scurve = scurve($slug);

	$finalPROGRESS = array("overall_tunnel_progress" => $tunnel_progress);
	$finalSP = array("station" => $station_progress);
	$finalKAD = array("KAD" => $kad);
	$finalKADTEL = array("KAD_TUNNEL" => $kad_tunnel);
	$finalINFO = array("INFO" =>$info);
	$finalINFOTEL = array("INFO_TUNNEL" =>$info_tunnel);
	$finalHSSE = array("hsse" => $hsse);
	$finalHSSETEL = array("hsse_tunnel" => $hsse_tunnel);
	$finalGALLERY = array("gallery" => $gallery);
	$finalGALLERYTEL = array("gallery_tunnel" => $gallery_tunnel);
	$finalSCURVE = array("scurve" => $scurve);
	$superFinal = array($slug => array_merge($finalPROGRESS, $finalINFO, $finalKAD, $finalSP, $finalHSSE, $finalGALLERY, $finalSCURVE, $finalINFOTEL, $finalKADTEL, $finalHSSETEL, $finalGALLERYTEL));
	return json_encode($superFinal);
}

/**
 * UNDER GROUND STATIONS
 * @param $slug
 * @return Array
 * @Desc  Portlet specific info of Under Ground (UG)
 */
function build_ug_stations($slug){

	$info = packageInfo($slug,2);
	$gallery = gallery($slug);
	$kad = kad($slug);
	$hsse = safety_incident($slug);
	$station_activity = ug_station_activity($slug);

	$finalKAD = array("KAD" => $kad);
	$finalINFO = array("INFO" =>$info);
	$finalHSSE = array("hsse" => $hsse);
	$finalSA = array("station_activity" => $station_activity);
	$finalGALLERY = array("gallery" => $gallery);
	$superFinal = array($slug => array_merge($finalINFO, $finalKAD, $finalHSSE, $finalSA, $finalGALLERY));
	return json_encode($superFinal);
}

/**
 *	DEPOT
 * @param $slug
 * @return Array
 * @Desc  Portlet specific info of Under Ground (UG)
 */
function build_depot($slug){

	$info = packageInfo($slug,2);
	$gallery = gallery($slug);
	$kpi = kpi($slug);
	$kad = kad($slug);
	$kd = kad($slug);
	$hsse = safety_incident($slug);
	$scurve = scurve($slug);

	$finalQRM = array("QRM" => $kpi);
	$finalKD = array("KD" => $kd);
	$finalKAD = array("KAD" => $kad);
	$finalINFO = array("INFO" =>$info);
	$finalHSSE = array("hsse" => $hsse);
	$finalGALLERY = array("gallery" => $gallery);
	$finalSCURVE = array("scurve" => $scurve);
	$superFinal = array($slug => array_merge($finalQRM, $finalINFO, $finalKAD, $finalKD, $finalHSSE, $finalGALLERY, $finalSCURVE));
	return json_encode($superFinal);
}

/**
 * S-CURVES (PROGRAMME)
 * @param $slug
 * @return Array
 * @Desc  Portlet specific info of Under Ground (UG)
 */
function build_scurves($slug){

}

/**
 * MSPR
 * @param $slug
 * @return Array
 * @Desc  Portlet specific info of Under Ground (UG)
 */
function build_mspr($slug){

	$info = packageInfo($slug,2);
	$gallery = gallery($slug);
	$kad = kad($slug);
	$scurve = scurve($slug);

	$finalKAD = array("KAD" => $kad);
	$finalINFO = array("INFO" =>$info);
	$finalGALLERY = array("gallery" => $gallery);
	$finalSCURVE = array("scurve" => $scurve);
	$superFinal = array($slug => array_merge($finalINFO,  $finalKAD, $finalGALLERY, $finalSCURVE));
	return json_encode($superFinal);
}

/**
 * PROCUREMENT
 * @param $slug
 * @return Array
 * @Desc  Portlet specific info of Under Ground (UG)
 */
function build_procurement($slug){

}

/**
 * DASHBOARD
 * @param $slug
 * @return Array
 * @Desc  Portlet specific info of Under Ground (UG)
 */
function build_dashboard($slug){

}

/**
 * Systems Summary
 * @param $slug
 * @return Array
 * @Desc  Portlet specific info of Under Ground (UG)
 */
function build_systems_summary($slug){
	$summary = v_summary($slug);
	$finalSUMMARY = array("syspackage" => $summary);
	$superFinal = array($slug => array_merge($finalSUMMARY));
	return json_encode($superFinal);

}

/**
 * Viaducts Summary
 * @param $slug
 * @return Array
 * @Desc  Portlet specific info of Under Ground (UG)
 */
function build_viaducts_summary($slug){

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
		}else{ //new row
			$d = array("item_id" => $id , "value" => $value, "date" => $date, "name" => $name);
			$ds = mpxd()->data_sources(); //echo $ds->count();
			$ds->insert($d);
		}
	}
}
function run(){
	$query = db()->ref_slug()
		         ->select('slug','category');
	$slug_ref = array_map('iterator_to_array', iterator_to_array($query));
	//Job date
	$date = date("Y-m-d");
	foreach($slug_ref as $q) {
		switch ($q['category']) {
			case 1:
				$viaduct = build_viaducts($q['slug']);
				updateDB($q['slug'], $viaduct, $date);
				break;
			case 2:
				$stations = build_stations($q['slug']);
				updateDB($q['slug'], $stations, $date);
				break;
			case 3:
				$depot = build_depot($q['slug']);
				updateDB($q['slug'], $depot, $date);
				break;
			case 4:
				$ug = build_ug($q['slug']);
				updateDB($q['slug'], $ug, $date);
				break;
			case 5:
				$ug_station = build_ug_stations($q['slug']);
				updateDB($q['slug'], $ug_station, $date);
				break;
			case 6:
				$systems = build_systems($q['slug']);
				updateDB($q['slug'], $systems, $date);
				break;
			case 7:
				$scurves = build_scurves($q['slug']);
//				updateDB($q['slug'], $scurves, $date);
				break;
			case 8:
				$mspr = build_mspr($q['slug']);
				updateDB($q['slug'], $mspr, $date);
				break;
			case 9:
				$procurement = build_procurement($q['slug']);
//				updateDB($q['slug'], $procurement, $date);
				break;
			case 10:
				$dashboard = build_dashboard($q['slug']);
//				updateDB($q['slug'], $dashboard, $date);
				break;
			case 11:
				$systems_summary = build_systems_summary($q['slug']);
				updateDB($q['slug'], $systems_summary, $date);
				break;
			case 12:
				$viaducts_summary = build_viaducts_summary($q['slug']);
				updateDB($q['slug'], $viaducts_summary, $date);
				break;
			default:
				echo "Nothing to run";
		}
	}
}
run();
?>