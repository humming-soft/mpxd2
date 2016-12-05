<?php

class Portlets_model extends CI_Model
{
    public function __construct()
    {
        $this->load->database();
    }

    /**
     * @sebin
     * date:17/10/2016
     * Parameter:viaduct_name
     * Return type:
     * Description:function get package info
     */
    public function package_info($viaduct){
        $pkg_info = array("INFO" => array());
        $pkg_info["INFO"]['name'] = strtoupper($viaduct);
        $this->db->select('tbl_stations.category_type_id,tbl_stations.spd_name,tbl_project_master.cont_name');
        $this->db->from('tbl_stations');
        $this->db->join('tbl_project_sub', 'tbl_project_sub.station_master_id = tbl_stations.station_master_id');
        $this->db->join('tbl_project_master', 'tbl_project_master.pjct_master_id = tbl_project_sub.pjct_master_id');
        $this->db->where('LOWER(tbl_project_master.pjct_name)',strtolower($viaduct));
        $page_query = $this->db->get();
        $slug_result = $page_query->result_array();
        $pkg_info["INFO"]['station'] = array();
        $pkg_info["INFO"]['parking'] = array();
        $cont= true;
        foreach ($slug_result as $v) {
            if($cont){
                $pkg_info["INFO"]['contractor']=$v['cont_name'];
            }
            $cont =false;
            if($v['category_type_id']==1 || $v['category_type_id']==2) {
                array_push($pkg_info["INFO"]['station'], $v['spd_name']);
            }else{
                array_push($pkg_info["INFO"]['parking'], $v['spd_name']);
            }
        }
        $pkg_info["INFO"]['piers_url'] = $viaduct."/piers";
        return json_encode($pkg_info);
    }
    /**
     * @jane
     * date:17/10/2016
     * Parameter:viaduct_name
     * Return type:
     * Description:function get key access dates
     */
    public function kad($viaduct, $date = FALSE)
    {
        $this->db->select("tbl_kd_master.kd_desc, CASE WHEN tbl_kd_master.forecast_date!='' THEN to_char(to_date(tbl_kd_master.forecast_date, 'YYYY-MM-DD'), 'DD-Mon-yy') ELSE '' END AS forecast_date, CASE WHEN tbl_kd_master.contract_date!='' THEN to_char(to_date(tbl_kd_master.contract_date, 'YYYY-MM-DD'), 'DD-Mon-yy') ELSE '' END AS contract_date");
        $this->db->from('tbl_kd_master');
        $this->db->join('tbl_journal_master', 'tbl_journal_master.journal_master_id = tbl_kd_master.journal_master_id');
        $this->db->join('tbl_project_master', 'tbl_project_master.pjct_master_id = tbl_journal_master.pjct_master_id');
        $this->db->where('LOWER(tbl_project_master.pjct_name)', strtolower($viaduct));
        $this->db->where('tbl_journal_master.journal_category_id',KAD);
        if ($date) { //If date is selected
            $timestamp = date('Y-m-d', strtotime($date));
            $this->db->where('DATE(tbl_kd_master.data_date)', $timestamp);
        }else{
            $max_date = $this->max_data_date("tbl_kd_master", $this->db->get_compiled_select('', FALSE));
            if($max_date!=""){
                $this->db->where('tbl_kd_master.data_date', $max_date);
            }
        }
        $kad_query = $this->db->get();
        $kad_result = $kad_query->result_array();
        $result['KAD'] = array();
        foreach ($kad_result as $value) {
            array_push($result['KAD'], array_values($value));
        }
        return json_encode($result);
    }


    public function gallary($viaduct){

        $dummy_json = '{"gallery": {
            "title": "V201 Image Gallery",
			"album": "6063014444371096097",
			"keyword": "V201 Project - 26-December-15 to 08-January-16|V201 Project - 16-January-16 to 22-January-16",
			"authkey": "Gv1sRgCMrhgfP6lL7PogE",
			"items": [{
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page95_I%281%29.jpg",
				"title": "v201 Project 15-Feb-2016 to 21-Feb-2016",
				"kind": "album",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page95_I%281%29.jpg",
				"title": "Excavation of road base for service road at Sg. Buloh Station in progress",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page95_I%282%29.jpg",
				"title": "Premix works for service road at Kg. Selamat Station in progress",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page95_I%283%29.jpg",
				"title": "Laying crusher run to service road at Sg. Buloh Station in progress",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page95_I%284%29.jpg",
				"title": "Excavation works for Sewer Treatment Plant at Sg. Buloh Station in progress",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page95_I%285%29.jpg",
				"title": "Rectification works for SB07 portal in progress",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page95_I.jpg",
				"title": "Road reinstatement works at Jalan Sg. Buloh in progress (Sg. Buloh Bound)",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page96_I%281%29.jpg",
				"title": "Pile boring works at FDD11/5 in progress",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page96_I%282%29.jpg",
				"title": "Pile boring works at FDD12/1 in progress",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page96_I%283%29.jpg",
				"title": "Sheet pile installation for pilecap works at FDD17 in progress",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page96_I%284%29.jpg",
				"title": "View of trackwork (SD Spur Line/RRI area)",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week08_2016/CEO%20Weekly%20Report%20No.%206%2026022016%20Finaljpg_Page96_I.jpg",
				"title": "Pile hacking works at FDD15 in progress",
				"kind": "image",
				"id": 1
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page93_I%282%29.jpg",
				"title": "v1 Project 08-Feb-2016 to 14-Feb-2016",
				"kind": "album",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page93_I%282%29.jpg",
				"title": "Shuttering works for drainage sump at Sg. BulohStation in progress",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page93_I%283%29.jpg",
				"title": "Shuttering works for retaining wall capping beam at Kg. SelamatStation in progress",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page93_I%284%29.jpg",
				"title": "Sheet pile installation for Sewer Treatment Plant at Sg. BulohStation in progress",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page93_I%285%29.jpg",
				"title": "Road reinstatement works at JalanSg. Bulohin progress",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page93_I.jpg",
				"title": "Shuttering works for Covered Walkway stumps at Sg. BulohStation in progress",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page94_I%281%29.jpg",
				"title": "View of completed noise barrier panel at Sg. BulohStation",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page94_I%282%29.jpg",
				"title": "View of completed noise barrier panel",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page94_I%283%29.jpg",
				"title": "View of trackwork(KTMB Sg. Buloh/ Army Camp)",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page94_I.jpg",
				"title": "View of trackwork(SD Spur Line)",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page95_I%281%29.jpg",
				"title": "Pile boring works at FDA12/8 in progress",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page95_I%282%29.jpg",
				"title": "Preparation for bored pile concreting work at FDD15/5 in progress",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page95_I%283%29.jpg",
				"title": "Pile boring works at FDD12/2 in progress",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page95_I.jpg",
				"title": "Soil investigation works at FDA15 in progress",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week07_2016/CEO%20Weekly%20Report%20No.%205%2019022016%20Finaljpg_Page93_I%281%29.jpg",
				"title": "Shuttering works for drainage sump at KwasaDamansaraStation in progress",
				"kind": "image",
				"id": 2
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page34_I%282%29.jpg",
				"title": "v1 Project 25-Jan-2016 to 31-Jan-2016",
				"kind": "album",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page34_I%282%29.jpg",
				"title": "Shuttering works for covered walkway footing at Sg. Buloh Station in progress",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page34_I%283%29.jpg",
				"title": "Sub-base preparation works for slip road to Kg. Selamat Station in progress",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page34_I%284%29.jpg",
				"title": "Pier rectification works at SBN07 in progress",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page34_I.jpg",
				"title": "Rebar fixing & shuttering works for On site Detention (OSD) sump at Sg. Buloh Station in",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page35_I%281%29.jpg",
				"title": "Trackwork at Kwasa Damansara Station area completed",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page35_I%282%29.jpg",
				"title": "Installation of noise barrier panel at DD01 to Sg. Buloh Station in progress",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page35_I%283%29.jpg",
				"title": "Installation of noise barrier panel at SBN05 \u2013 SBN09 in progress.",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page35_I.jpg",
				"title": "Cable laying through Kg. Selamat Station in progress",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page36_I%281%29.jpg",
				"title": "Pile boring works at FDD16 in progress",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page36_I%282%29.jpg",
				"title": "Platform preparation works for PDA test of complete pile group at FDD17",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page36_I%283%29.jpg",
				"title": "Rock coring works at FDA12 in progress.",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page36_I.jpg",
				"title": "Soil investigation works at FDA14 in progress",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page34_I%281%29.jpg",
				"title": "Shuttering works for sump at Kwasa Damansara Station in progress",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week05_2016/CEO%20Weekly%20Report%20No.%204%2005022016%20Finaljpg_Page34_I%285%29.jpg",
				"title": "Shuttering works for covered walkway stump at Kg. Selamat Station (Ent. A) in progress",
				"kind": "image",
				"id": 3
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page33_I%281%29.jpg",
				"title": "v1 Project 18-Jan-2016 to 24-Jan-2016",
				"kind": "album",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page33_I%281%29.jpg",
				"title": "Pier rectification works BB02a in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page33_I%282%29.jpg",
				"title": "Drainage works around Kg. Selamat Station in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page33_I%284%29.jpg",
				"title": "Shuttering works to drain at Kg. Selamat Station in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page33_I%285%29.jpg",
				"title": "Pier rectification works at SBN07 in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page33_I.jpg",
				"title": "Pier rectification works at SBN12 in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page34_I%281%29.jpg",
				"title": "Painting works to walkway edge South of Sg. Buloh Station in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page34_I%282%29.jpg",
				"title": "Installation of noise barrier pole at SBN05 \u2013 SBN11 in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page34_I%283%29.jpg",
				"title": "Installation of noise barrier pole at DD01 \u2013 SB01 in progress.",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page34_I.jpg",
				"title": "Cleaning works to trackwork at Kg. Selamat Station in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page35_I%281%29.jpg",
				"title": "Sonic logging pipe installation to FDD17/1 steel cage in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page35_I%282%29.jpg",
				"title": "Bored pile steel cage fabrication in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page35_I%283%29.jpg",
				"title": "Steel cage installation to bored pile FDD17/1",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page35_I.jpg",
				"title": "Site preparation for bored pile works in progress.",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week04_2016/CEO%20Weekly%20Report%20No.%203%2029012016%20Finaljpg_Page33_I%283%29.jpg",
				"title": "Shuttering works to concrete barrier at Kg. Selamat area in progress",
				"kind": "image",
				"id": 4
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page32_I%281%29.jpg",
				"title": "v1 Project 11-Jan-2016 to 17-Jan-2016",
				"kind": "album",
				"id": 5
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page32_I%281%29.jpg",
				"title": "Drainage works near Kota Damansara Station in progress",
				"kind": "image",
				"id": 5
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page32_I%282%29.jpg",
				"title": "Painting of pier BB04 in progress",
				"kind": "image",
				"id": 5
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page32_I%283%29.jpg",
				"title": "Drainage works at Sg. Buloh Station in progress",
				"kind": "image",
				"id": 5
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page32_I%285%29.jpg",
				"title": "Rebar fixing and shuttering works for drainage at Kg. Selamat area in progress",
				"kind": "image",
				"id": 5
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page32_I.jpg",
				"title": "Shuttering works to walkway canopy foundations stump at Sg. Buloh area in progress",
				"kind": "image",
				"id": 5
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page33_I%281%29.jpg",
				"title": "Rectification walkway panel at Sg. Buloh Station in progress",
				"kind": "image",
				"id": 5
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page33_I%282%29.jpg",
				"title": "Installation of noise barrier pole at SB05 \u2013 BB01 in progress",
				"kind": "image",
				"id": 5
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page33_I%283%29.jpg",
				"title": "Installation of noise barrier pole at DD01 \u2013 SB01 in progress",
				"kind": "image",
				"id": 5
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page33_I.jpg",
				"title": "Rectification works to walkway panels at SB33 in progress",
				"kind": "image",
				"id": 5
			}, {
                "path": "gallery/v1/week03_2016/CEO%20Weekly%20Report%20No.%202%2022012016%20Finaljpg_Page32_I%284%29.jpg",
				"title": "Rebar fixing and shuttering works drainage at Sg. Buloh area in progress",
				"kind": "image",
				"id": 5
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page32_I%282%29.jpg",
				"title": "v1 Project 04-Jan-2016 to 10-Jan-2016",
				"kind": "album",
				"id": 6
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page32_I%282%29.jpg",
				"title": "Pier rectification works at BB04 in progress",
				"kind": "image",
				"id": 6
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page32_I%283%29.jpg",
				"title": "Drainage works near KD Station in progress",
				"kind": "image",
				"id": 6
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page32_I%284%29.jpg",
				"title": "Pier rectification works at SBS03 in progress",
				"kind": "image",
				"id": 6
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page32_I%285%29.jpg",
				"title": "Retaining wall installation in progress",
				"kind": "image",
				"id": 6
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page32_I.jpg",
				"title": "Pier rectification works at SB07 in progress",
				"kind": "image",
				"id": 6
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page33_I%281%29.jpg",
				"title": "Trackwork snagging on special span (SBS line) in progress",
				"kind": "image",
				"id": 6
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page33_I%282%29.jpg",
				"title": "Trackwork testing at Kg. Selamat Station area in progress",
				"kind": "image",
				"id": 6
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page33_I%283%29.jpg",
				"title": "Installation of noise barrier pole at BB05 \u2013 BB06 in progress",
				"kind": "image",
				"id": 6
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page33_I.jpg",
				"title": "Installation of noise barrier poles at SBN05 \u2013 SBN11 in progress",
				"kind": "image",
				"id": 6
			}, {
                "path": "gallery/v1/week02_2016/CEO%20Weekly%20Report%20No.%201%2015012016%20Finaljpg_Page32_I%281%29.jpg",
				"title": "Drainage rebar fixing and shuttering works in progress",
				"kind": "image",
				"id": 6
			}]
		}}';
        return $dummy_json;
    }

    /**
     * @jane
     * date:20/10/2016
     * Parameter:viaduct_name
     * Return type:
     * Description:function to get scurve data
     */
    public function scurve($viaduct, $date = FALSE){
        $pkg_info["scurve"] = array();
        $pkg_info["scurve"]["chartType"] = "short";
        $pkg_info["scurve"]["viewType"] = "2";

        $this->db->select("tbl_project_prgs_master.early_perc,tbl_project_prgs_master.actual_perc,tbl_project_prgs_master.late_perc,tbl_project_prgs_master.early_variance,tbl_project_prgs_master.late_varience, to_char(tbl_project_prgs_master.data_date, 'Mon/yy') AS data_date");
        $this->db->from('tbl_project_prgs_master');
        $this->db->join('tbl_journal_master', 'tbl_journal_master.journal_master_id = tbl_project_prgs_master.journal_master_id');
        $this->db->join('tbl_project_master', 'tbl_project_master.pjct_master_id = tbl_journal_master.pjct_master_id');
        $this->db->where('LOWER(tbl_project_master.pjct_name)',strtolower($viaduct));
        $this->db->where('tbl_journal_master.journal_category_id',V_SCURVE);
        $this->db->order_by('tbl_project_prgs_master.data_date','desc');
        $this->db->order_by('tbl_project_prgs_master.crea_date','desc');
        /*echo ($this->db->get_compiled_select());*/
        if ($date) { //if date is selected
            $timestamp = date('Y-m-d', strtotime($date));
            $this->db->where('DATE(tbl_project_prgs_master.data_date)<=', $timestamp);
        }
        $page_query = $this->db->get();
        $scurve_result = $page_query->result_array();
        $i = true;
        $prefix = $actual_perc = $early_perc = $late_perc = $date = '';
        if(empty($scurve_result)) {
            return json_encode($pkg_info);
        }
            foreach ($scurve_result as $result) {
                if ($i) {
                    $pkg_info["scurve"]["currentEarly"] = $result['early_perc'] . "%";
                    $pkg_info["scurve"]["currentLate"] = $result['late_perc'] . "%";
                    $pkg_info["scurve"]["currentActual"] = $result['actual_perc'] . "%";
                    $pkg_info["scurve"]["varEarly"] = $result['early_variance'] . "%";
                    $pkg_info["scurve"]["varLate"] = $result['late_varience'] . "%";
                    $actual_perc .= $prefix . $result['actual_perc'];
                    $early_perc .= $prefix . $result['early_perc'];
                    $late_perc .= $prefix . $result['late_perc'];
                    $date .= $prefix . $result['data_date'];
                    $prefix = ', ';
                    $i = false;
                } else {
                    $actual_perc .= $prefix . $result['actual_perc'];
                    $early_perc .= $prefix . $result['early_perc'];
                    $late_perc .= $prefix . $result['late_perc'];
                    $date .= $prefix . $result['data_date'];
                    $prefix = ', ';
                    $dates = explode(", ", $date);
                    $pkg_info["scurve"]["actualData"] = array_reverse(array_map('floatval', explode(", ", $actual_perc)));
                    $pkg_info["scurve"]["earlyData"] = array_reverse(array_map('floatval', explode(", ", $early_perc)));
                    $pkg_info["scurve"]["delayedData"] = array_reverse(array_map('floatval', explode(", ", $late_perc)));
                    $pkg_info["scurve"]["categories"] = array_reverse($dates);
                }
            }
            $date_count = count($dates);
            if ($date_count > 30) {
                $pkg_info["scurve"]["tickInterval"] = 3;
            } else {
                $pkg_info["scurve"]["tickInterval"] = 1;
            }
            $pkg_info["scurve"]["trend"] = "up";
            return json_encode($pkg_info);
    }

    /**
     * @jane
     * date:24/10/2016
     * Parameter:date
     * Return type:
     * Description:function to get programme scurve data
     */
    public function p_scurve($date = FALSE){
        $data["programme"] = array();
        $this->db->distinct();
        $this->db->select('prgm_sub_name');
        $this->db->from('tbl_prgm_master');
        $page_query = $this->db->get();
        $sub_name_result = $page_query->result_array();
        if(empty($sub_name_result)){
            return json_encode($data);
        }
        foreach($sub_name_result as $val){
            //echo $val['prgm_sub_name'];
            $this->db->select("tbl_prgm_master.prgm_sub_name,tbl_prgm_master.early_prec,tbl_prgm_master.actual_prec,tbl_prgm_master.late_prec,tbl_prgm_master.early_varience,tbl_prgm_master.late_varience, to_char(tbl_prgm_master.data_date, 'Mon/yy') AS data_date");
            $this->db->from('tbl_prgm_master');
            $this->db->join('tbl_journal_master', 'tbl_journal_master.journal_master_id = tbl_prgm_master.journal_master_id');
            $this->db->where('tbl_prgm_master.prgm_sub_name',$val['prgm_sub_name']);
            $this->db->where('tbl_journal_master.journal_category_id',P_SCURVE);
            $this->db->order_by('tbl_prgm_master.data_date','desc');
            $this->db->order_by('tbl_prgm_master.crea_date','desc');
//          echo ($this->db->get_compiled_select());
            if ($date) { //if date is selected
                $timestamp = date('Y-m-d', strtotime($date));
                $this->db->where('DATE(tbl_prgm_master.data_date)<=', $timestamp);
            }
            $page_query = $this->db->get();
            $p_result = $page_query->result_array();
            $i = true;
            $prefix = $actual_perc = $early_perc = $late_perc = $data_date = '';
            $pkg_info = array();
            if(empty($p_result)){
                $pkg_info[$val['prgm_sub_name']]["chartType"] = "long";
                $pkg_info[$val['prgm_sub_name']]["viewType"] = "1";
                return json_encode($data);
            }
            foreach($p_result as $result) {
                if ($i) {
                    $pkg_info[$result["prgm_sub_name"]]["currentEarly"] = $result['early_prec'] . "%";
                    $pkg_info[$result["prgm_sub_name"]]["currentLate"] = $result['late_prec'] . "%";
                    $pkg_info[$result["prgm_sub_name"]]["currentActual"] = $result['actual_prec'] . "%";
                    $pkg_info[$result["prgm_sub_name"]]["varEarly"] = $result['early_varience'] . "%";
                    $pkg_info[$result["prgm_sub_name"]]["varLate"] = $result['late_varience'] . "%";
                    $actual_perc .= $prefix . $result['actual_prec'];
                    $early_perc .= $prefix . $result['early_prec'];
                    $late_perc .= $prefix . $result['late_prec'];
                    $data_date .= $prefix . $result['data_date'];
                    $prefix = ', ';
                    $i = false;
                    if(sizeof($p_result)==1){
                        $dates = explode(", ", $data_date);
                        $pkg_info[$result["prgm_sub_name"]]["actualData"] = array_reverse(array_map('floatval', explode(", ", $actual_perc)));
                        $pkg_info[$result["prgm_sub_name"]]["earlyData"] = array_reverse(array_map('floatval', explode(", ", $early_perc)));
                        $pkg_info[$result["prgm_sub_name"]]["delayedData"] = array_reverse(array_map('floatval', explode(", ", $late_perc)));
                        $pkg_info[$result["prgm_sub_name"]]["categories"] = array_reverse($dates);
                    }
                } else {
                    $actual_perc .= $prefix . $result['actual_prec'];
                    $early_perc .= $prefix . $result['early_prec'];
                    $late_perc .= $prefix . $result['late_prec'];
                    $data_date .= $prefix . $result['data_date'];
                    $prefix = ', ';
                    $dates = explode(", ", $data_date);
                    $pkg_info[$result["prgm_sub_name"]]["actualData"] = array_reverse(array_map('floatval', explode(", ", $actual_perc)));
                    $pkg_info[$result["prgm_sub_name"]]["earlyData"] = array_reverse(array_map('floatval', explode(", ", $early_perc)));
                    $pkg_info[$result["prgm_sub_name"]]["delayedData"] = array_reverse(array_map('floatval', explode(", ", $late_perc)));
                    $pkg_info[$result["prgm_sub_name"]]["categories"] = array_reverse($dates);
                }
            }
            if($dates) {
                $date_count = count($dates);
                if ($date_count > 30) {
                    $pkg_info[$result["prgm_sub_name"]]["tickInterval"] = 3;
                } else {
                    $pkg_info[$result["prgm_sub_name"]]["tickInterval"] = 0;
                }
            }
            $pkg_info[$result["prgm_sub_name"]]["chartType"] = "long";
            $pkg_info[$result["prgm_sub_name"]]["viewType"] = "1";
            $pkg_info[$result["prgm_sub_name"]]["trend"] = "up";
            foreach($pkg_info as $key => $value){
                $data["programme"][$key]= $value;
            }
        }
        return json_encode($data);
    }

    public function hsse(){
        $dummy_json = '{"hsse": [
            ["01-January-2016", "An employee being ran over by a car whilst walking along Jalan Sg. Buloh road in front of Megamas business center. He sustained injuries to his head and died in the hospital the next day."],
            ["20-November-2015", "Kampung Selamat Station. Whilst relocating skylift, Operator lost control and hit a lorry. No injury but front screen of skylift broken."],
            ["20-November-2015", "Sungai Buloh Station. During unloading of an escalator from a trailer. The boom of the crane hit a catch platform. Incident occurred due to lack of communication between crane operator and rigger. No injury or damage reported."]
        ]}';
        return $dummy_json;
    }

    public function kpi($viaduct, $date = FALSE){
        $kpi = array("QRM" => array());
//        $this->db->select('MAX(tbl_kpi_master.data_date)')->from('tbl_kpi_master');
        //this will show the query in console.
//        $subQuery =  $this->db->get_compiled_select();

        $this->db->select('tbl_kpi_master.kpi_type,tbl_kpi_master.baseline,tbl_kpi_master.kpi_target,tbl_kpi_master.actual');
        $this->db->from('tbl_kpi_master');
        $this->db->join('tbl_journal_master', 'tbl_journal_master.journal_master_id = tbl_kpi_master.journal_master_id');
        $this->db->join('tbl_project_master', 'tbl_project_master.pjct_master_id = tbl_journal_master.pjct_master_id');
        $this->db->where('tbl_journal_master.journal_category_id',KPI);
        $this->db->where('LOWER(tbl_project_master.pjct_name)',strtolower($viaduct));
        if ($date) { //If date is selected
            $timestamp = date('Y-m-d', strtotime($date));
            $this->db->where('DATE(tbl_kpi_master.data_date)', $timestamp);
        }else{
            $max_date = $this->max_data_date("tbl_kpi_master", $this->db->get_compiled_select('', FALSE));
            if($max_date!=""){
                $this->db->where('tbl_kpi_master.data_date', $max_date);
            }
        }
        $slug_result = $this->db->get()->result_array();
        foreach ($slug_result as $v) {
            array_push($kpi["QRM"], array("type" => $v['kpi_type'], "baseline" => $v['baseline'], "target" => $v['kpi_target'], "actual" => $v['actual']));
        }
        $kpi["QRM"]["url"] = strtolower($viaduct)."/kpi".strtolower($viaduct);
        return json_encode($kpi);
    }

    public function kpi_piers($viaduct, $date = FALSE){

        $data = array($viaduct => array());
        $this->db->distinct();
        $this->db->select('LOWER(kpi_type) as kpi_type');
        $this->db->from('tbl_kpi_master');
        $page_query = $this->db->get();
        $sub_name_result = $page_query->result_array();
        if(empty($sub_name_result)){
            return json_encode($data);
        }
        foreach($sub_name_result as $val){
            $this->db->select("tbl_kpi_master.kpi_type,tbl_kpi_master.baseline,tbl_kpi_master.kpi_target,tbl_kpi_master.actual, to_char(tbl_kpi_master.data_date, 'Mon/yy') AS data_date");
            $this->db->from('tbl_kpi_master');
            $this->db->join('tbl_journal_master', 'tbl_journal_master.journal_master_id = tbl_kpi_master.journal_master_id');
            $this->db->where('LOWER(tbl_kpi_master.kpi_type)',$val['kpi_type']);
            $this->db->where('tbl_journal_master.journal_category_id',KPI);
            if ($date) { //if date is selected
                $timestamp = date('Y-m-d', strtotime($date));
                $this->db->where('DATE(tbl_kpi_master.data_date)<=', $timestamp);
            }
            $this->db->order_by('tbl_kpi_master.data_date','desc');
            $this->db->order_by('tbl_kpi_master.crea_date','desc');
            $page_query = $this->db->get();
            $p_result = $page_query->result_array();
            $i = true;
            $prefix = $baseline = $kpi_target = $actual = $data_date = '';
            $pkg_info = array();
            if(empty($p_result)){
                return json_encode($data);
            }
            foreach($p_result as $result) {
                $type = strtolower(preg_replace('/\s+/', '', $result["kpi_type"]));
                if ($i) {
                    $pkg_info[$type]["baseline"] = $result['baseline'] . "%";
                    $pkg_info[$type]["target"] = $result['kpi_target'] . "%";
                    $pkg_info[$type]["actual"] = $result['actual'] . "%";
                    $baseline .= $prefix . $result['baseline'];
                    $kpi_target .= $prefix . $result['kpi_target'];
                    $actual .= $prefix . $result['actual'];
                    $data_date .= $prefix . $result['data_date'];
                    $prefix = ', ';
                    $i = false;
                    if(sizeof($p_result)==1){
                        $dates = explode(", ", $data_date);
                        $pkg_info[$type]["baseData"] = array_reverse(array_map('floatval', explode(", ", $baseline)));
                        $pkg_info[$type]["actualData"] = array_reverse(array_map('floatval', explode(", ", $actual)));
                        $pkg_info[$type]["targetData"] = array_reverse(array_map('floatval', explode(", ", $kpi_target)));
                        $pkg_info[$type]["categories"] = array_reverse($dates);
                    }
                } else {
                    $baseline .= $prefix . $result['baseline'];
                    $kpi_target .= $prefix . $result['kpi_target'];
                    $actual .= $prefix . $result['actual'];
                    $data_date .= $prefix . $result['data_date'];
                    $prefix = ', ';
                    $dates = explode(", ", $data_date);
                    $pkg_info[$type]["baseData"] = array_reverse(array_map('floatval', explode(", ", $baseline)));
                    $pkg_info[$type]["actualData"] = array_reverse(array_map('floatval', explode(", ", $actual)));
                    $pkg_info[$type]["targetData"] = array_reverse(array_map('floatval', explode(", ", $kpi_target)));
                    $pkg_info[$type]["categories"] = array_reverse($dates);
                }
            }
            if($dates) {
                $date_count = count($dates);
                if ($date_count > 30) {
                    $pkg_info[$type]["tickInterval"] = 3;
                } else {
                    $pkg_info[$type]["tickInterval"] = 0;
                }
            }
            $pkg_info[$type]["chartType"] = "long";
            $pkg_info[$type]["viewType"] = "1";
            $pkg_info[$type]["trend"] = "up";
            foreach($pkg_info as $key => $value){
                $data[$viaduct][$key]= $value;
            }
        }
        return json_encode($data);


/*        $kpi = array($viaduct => array());
        $this->db->select('tbl_kpi_master.kpi_type,tbl_kpi_master.baseline,tbl_kpi_master.kpi_target,tbl_kpi_master.actual');
        $this->db->from('tbl_kpi_master');
        $this->db->join('tbl_journal_master', 'tbl_journal_master.journal_master_id = tbl_kpi_master.journal_master_id');
        $this->db->join('tbl_project_master', 'tbl_project_master.pjct_master_id = tbl_journal_master.pjct_master_id');
        $this->db->where('tbl_journal_master.journal_category_id',KPI);
        $this->db->where('LOWER(tbl_project_master.pjct_name)',strtolower($viaduct));
        if ($date) { //If date is selected
            $timestamp = date('Y-m-d', strtotime($date));
            $this->db->where('DATE(tbl_kpi_master.data_date)', $timestamp);
        }else{
            $max_date = $this->max_data_date("tbl_kpi_master", $this->db->get_compiled_select('', FALSE));
            if($max_date!=""){
                $this->db->where('tbl_kpi_master.data_date', $max_date);
            }
        }
        $slug_result = $this->db->get()->result_array();
        foreach ($slug_result as $v) {
            $kpi[$viaduct][strtolower(preg_replace('/\s+/', '', $v['kpi_type']))] = array("type" => $v['kpi_type'], "baseline" => $v['baseline'], "target" => $v['kpi_target'], "actual" => $v['actual']);
        }
        return json_encode($kpi);*/
    }

    public function piers($viaduct, $date = FALSE){
        $dummy_json = '{"PIERS": [
            {"pier_v":"v201","pier_id":"SB01","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"100","span2":"0","span3":"0","span4":"0","parapet1":"100","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB02","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"1"},
            {"pier_v":"v201","pier_id":"SB03","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB04","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"Special Crossing","pier_marker_b":"2","pier_layout":"1","pier_type":"p14","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB05","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"1","pier_type":"p14","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB06","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"1","pier_type":"p12","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB07","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"1","pier_type":"p12","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB08","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB09","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB10","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB11","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB12","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB13","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB14","pier_north_id":"SBN14","pier_south_id":"SBS14","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p8211","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB15","pier_north_id":"SBN15","pier_south_id":"SBS15","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p8211","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SB16","pier_north_id":"SBN16","pier_south_id":"SBS16","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p8211","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD01","pier_north_id":"DDN01","pier_south_id":"DDS01","pier_marker_a":"Damansara Damai Station (Island Platform)","pier_marker_b":"1","pier_layout":"1","pier_type":"p7x","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD02","pier_north_id":"DDN02","pier_south_id":"DDS02","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p7x","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD03","pier_north_id":"DDN03","pier_south_id":"DDS03","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p7x","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD04","pier_north_id":"DDN04","pier_south_id":"DDS04","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p7x","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD05","pier_north_id":"DDN05","pier_south_id":"DDS05","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p7x","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD06","pier_north_id":"DDN06","pier_south_id":"DDS06","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p8211","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD07","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD08","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD09","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD10","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p33","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD11","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p24","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD12","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s2","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD13","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD14","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD15","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD16","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD17","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD18","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD19","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD20","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD21","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD22","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD23","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD24","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD25","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD26","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD27","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD28","pier_north_id":"DDN28","pier_south_id":"DDS28","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p6x","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD29","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD30","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p22","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD31","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p22","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD32","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD33","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD34","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD35","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD36","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD37","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD38","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD39","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"Special Crossing","pier_marker_b":"2","pier_layout":"1","pier_type":"p12","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD40","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"1","pier_type":"p12","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD41","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"1","pier_type":"p12","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD42","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD43","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p33","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD44","pier_north_id":"DDN44","pier_south_id":"DDS44","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p6x","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD45","pier_north_id":"DDN45","pier_south_id":"DDS45","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p6x","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD46","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p33","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD47","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p33","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"DD48","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p33","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW01","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"Sri Damansara West Station (Island Platform)","pier_marker_b":"1","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW02","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW03","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW04","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW05","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW06","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW07","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p33","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW08","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p33","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW09","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW10","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW11","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW12","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW13","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW14","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW15","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW16","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW17","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW18","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW19","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW20","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW21","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW22","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW23","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW24","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW25","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW26","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW27","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW28","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p22","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW29","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p22","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW30","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW31","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW32","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW33","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW34","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW35","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"Special Crossing","pier_marker_b":"2","pier_layout":"1","pier_type":"p12","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW36","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"1","pier_type":"p12","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW37","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"1","pier_type":"p12","span_type":"sx","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW38","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW39","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW40","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDW41","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE01","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"Sri Damansara East Station (Side Platform)","pier_marker_b":"1","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE02","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE03","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE04","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE05","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE06","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE07","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE08","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE09","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p22","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE10","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE11","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE12","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE13","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"12 nos. Single Pier Near Syabas Water Tanks (RCD Method)","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE14","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE15","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE16","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE17","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE18","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE19","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE20","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE21","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE22","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE23","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE24","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"v201","pier_id":"SDE25","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"},
            {"pier_v":"0","pier_id":"0","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"0","pier_pile_2":"0","pier_pilecap_1":"0","pier_pilecap_2":"0","pier_pier_1":"0","pier_pier_2":"0","pier_pierhead_1":"0","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","span4":"0","parapet1":"0","parapet2":"0","parapet3":"0","p_progress":"0"}
        ]}';
        return $dummy_json;
    }
    /**
     * @sebin
     * date:24/10/2016
     * Parameter:Data Date
     * Return type: json
     * Description: Viaduct Summary (Progress of the Viaducts).
     */
    public function viaducts_summary($date = FALSE){
        $v_summary["systems"] = array(
            "syspackage"=>array()
        );
        $ids = $this->get_viaducts();
        foreach($ids as $i){
            $this->db->select("tbl_project_master.pjct_name, tbl_project_master.pjct_master_id,tbl_project_prgs_master.early_perc,tbl_project_prgs_master.actual_perc,tbl_project_prgs_master.late_perc,tbl_project_prgs_master.early_variance,tbl_project_prgs_master.late_varience");
            $this->db->from('tbl_project_prgs_master');
            $this->db->join('tbl_journal_master', 'tbl_journal_master.journal_master_id = tbl_project_prgs_master.journal_master_id');
            $this->db->join('tbl_project_master', 'tbl_project_master.pjct_master_id = tbl_journal_master.pjct_master_id');
            $this->db->where('tbl_journal_master.journal_category_id', V_SCURVE);
            $this->db->where('tbl_project_master.pjct_master_id', $i['pjct_master_id']);
            if ($date) { //if date is selected
                $timestamp = date('Y-m-d', strtotime($date));
                $this->db->where('DATE(tbl_project_prgs_master.data_date)', $timestamp);
            } else {
                $max_date = $this->max_data_date("tbl_project_prgs_master", $this->db->get_compiled_select('', FALSE));
                if ($max_date != "") {
                    $this->db->where('tbl_project_prgs_master.data_date', $max_date);
                }
            }
            $vs_result = $this->db->get()->result_array();
            foreach ($vs_result as $v) {
                array_push($v_summary["systems"]["syspackage"], array(
                    "item" => strtoupper($v["pjct_name"]),
                    "id" => $v["pjct_master_id"],
                    "url" => strtolower($v["pjct_name"]) . "/index",
                    "early" => $v["early_perc"],
                    "late" => $v["late_perc"],
                    "actual" => $v["actual_perc"],
                    "varianceEarly" => $v["early_variance"],
                    "varianceLate" => $v["late_varience"],
                    "trend" => "down"
                ));
            }
        }
        return json_encode($v_summary);
    }

    public function get_overall_progress($data_date){
        $prgs = array();
        $proj_size = sizeof($this->get_viaducts());
        $journal = $this->get_journal_ids(V_SCURVE);
        $actual = 0; $early = 0; $late=0; $v_early=0; $v_late = 0;
        foreach($journal as $v) {
//            $timestamp = date('Y-m-d', strtotime($data_date));
            $this->db->select('actual_perc, early_perc, late_perc, early_variance, late_varience ');
            $this->db->from("tbl_project_prgs_master");
//            $this->db->where('DATE(data_date)', $timestamp);
            $this->db->order_by('data_date', 'DESC');
            $this->db->limit(1);
            $progress = $this->db->get()->result_array();
            foreach ($progress as $v) {
                $actual += $v["actual_perc"];
                $early += $v["early_perc"];
                $late += $v["late_perc"];
                $v_early += $v["early_variance"];
                $v_late += $v["late_varience"];
            }
        }
        $prgs["actual"] = ($actual>0)?ceil($actual/$proj_size):"N/A";
        $prgs["early"] = ($early>0)?ceil($early/$proj_size):"N/A";
        $prgs["late"] = ($late>0)?ceil($late/$proj_size):"N/A";
        $prgs["variance"] = array();
        $prgs["variance"]["early"] = ($v_early>0)?ceil($v_early/$proj_size):"N/A";
        $prgs["variance"]["late"] = ($v_late>0)?ceil($v_late/$proj_size):"N/A";
        return $prgs;
    }


    public function get_journal_ids($type){
        $this->db->select('tbl_journal_master.journal_master_id');
        $this->db->from('tbl_journal_master');
        $this->db->join('tbl_project_master','tbl_project_master.pjct_master_id = tbl_journal_master.pjct_master_id');
        $this->db->where('tbl_journal_master.journal_category_id', $type);
        return $this->db->get()->result_array();
    }

    /*Miscellaneous Methods*/

    /**
     * @sebin
     * date:21/10/2016
     * Parameter:Table Name, Sql Query, Data Date field name in the table(default: data_date), Boolean value for removing Order by clause
     * Return type: String
     * Description: Attain the Max of data date from schemas.
     */
    public function max_data_date($table,$q,$field = FALSE,$remove_order_by = FALSE){
        $merger="";
        if($field){
            $merger="SELECT MAX(".$table.".".$field.")";
        }else{
            $merger="SELECT MAX(".$table.".data_date)";
        }
        if($remove_order_by){
            $max_date = $this->db->query($merger . " " . strstr(strstr($q,'ORDER BY',TRUE), 'FROM'))->row()->max;
        }else {
            $max_date = $this->db->query($merger . " " . strstr($q, 'FROM'))->row()->max;
        }
        return $max_date;
    }

    public function get_data_dates($table){
        $this->db->distinct();
        $this->db->select("to_char(data_date, 'DD-Mon-YY') as data_date");
        $this->db->from($table);
        $this->db->order_by('data_date','DESC');
        $query = $this->db->get();
        if ($query) return $query->result_array();

    }
    /**
     * @sebin
     * date:22/10/2016
     * Parameter:Slug_ID(Item ID), Page Name
     * Return type: array
     * Description: get the page
     */
    public function get_page($slug_id){
        $sql = "select \"page\" from \"pages\" where \"item_id\" = '$slug_id'";
        $result = $this->db->query($sql)->result_array();
        return $result;
    }
    /**
     * @sebin
     * date:24/10/2016
     * Parameter:
     * Return type: array
     * Description: Id of the Projects (viaducts)
     */
    public function get_viaducts(){
        $this->db->select("pjct_master_id");
        $this->db->from('tbl_project_master');
        return $this->db->get()->result_array();
    }
    /**
     * @sebin
     * date:25/10/2016
     * Parameter:Project ID
     * Return type: string
     * Description: Returns project name based on the ID.
     */
    public function get_project($pid){
        $this->db->select("pjct_name");
        $this->db->from('tbl_project_master');
        $this->db->where('pjct_master_id',$pid);
        return $this->db->get()->row()->pjct_name;
    }

    public function get_ref($item_meta,$cmp){
        $d = array();
        $i=0;
        foreach($item_meta as $sub){
            $d[$sub['id']]=strtoupper($this->get_project($cmp[$i]));
            $i++;
        }
        return json_encode($d);
    }
}