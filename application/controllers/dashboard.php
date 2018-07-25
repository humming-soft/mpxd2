<?php

/* w7G506tgBv */

class Dashboard extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('dashboard_model');
        $this->load->model('pdf_model');
        $this->load->library('Pdf');
    }

    public function index($slug = FALSE) {
        if ($this->session->userdata('uid')!=null) { // Redirects logged in user
            return redirect('dashboard');
        }

        $data['items'] = $this->dashboard_model->get_items();
        $data['title'] = 'HOME';
        $this->load->view('dashboard/index', $data);
    }

    public function login() {
        $username = strtolower($this->input->post("username"));
        $password = $this->input->post("password");
        //$hpassword = hash('sha256',$password);

        $result = $this->dashboard_model->login($username, $password);

        if ($result) { //Successfully logged in
            
            $this->session->set_userdata(array(
                "loggedin" => true,
                "uid" => $result["id"],
                "username" => $result["username"],
                "fullname" => $result["fullname"],
                "lastlogin" => $result["lastlogin"],
                "usergroup" => $result["user_group"],
                "allowed_page" => json_encode($this->dashboard_model->menuPermissionBySlugAndPage($result["user_group"]))
            ));
            $success = 1;
            //logging to be done later. sleepy
        } else {
            $success = 0;
        }
        //$this->output->enable_profiler(TRUE);
        //print_r($this->session->all_userdata());
        echo $success;
    }

    public function toexcel() {
        $post = $this->input->post();
        if ((!$post) || (!isset($post['id'])))
            die();

        $print = (isset($post['print']) && ($post['print'] == 1));
        $id = $post["id"];
        $date=$post["ddate"];
        $fullslug = $this->dashboard_model->getSlugFromPageId($id);
        if($fullslug != "") {
            $slug = strtoupper($fullslug);
            $kpi = $this->pdf_model->getStructureExcel($fullslug, $date);
            print_r($kpi);
            $this->load->view('dashboard/toexcel', array("post" => $kpi));
        }
        }
    public function topdf() {

        $post = $this->input->post();
        if ((!$post) || (!isset($post['id'])))
            die();

		$print = (isset($post['print']) && ($post['print'] == 1));
		$id = $post["id"];
        $date=$post["ddate"];
		$fullslug = $this->dashboard_model->getSlugFromPageId($id);
        if($fullslug != "") {
            $slug=strtoupper($fullslug);
            $kpi=$this->pdf_model->getStructure($fullslug,$date);

            $pdf = new Pdf(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
            $pdf->SetCreator(PDF_CREATOR);
            $pdf->SetAuthor($this->session->userdata('username'));
            $pdf->SetTitle($slug . " PROGRESS");
          /*  $pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, $slug . " PROGRESS", "MRT Corp", array(0,64,255), array(0,64,128));*/
            //$pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
            $pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));
            $pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);
            $pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
            $pdf->SetFooterMargin(PDF_MARGIN_FOOTER);/*
            $pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);*/
            $pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);
            $pdf->setFontSubsetting(false);
            $pdf->SetFont('helvetica', '', 8, '', false);
            $pdf->AddPage('L', 'A3');
            $pdf->writeHTML($kpi);
            $pdf->Output($fullslug.'_progress".pdf', 'D');
            die();
        }
    }

    public function logout() {
        $this->session->sess_destroy();
        return redirect('/');
    }

    public function debug() {
        var_dump($this->session->all_userdata());
    }

    public function test() {
        $data['title'] = 'test';

        $this->load->view('templates/header', $data);
        $this->load->view('dashboard/view', $data);
        $this->load->view('templates/footer');
    }

    public function dashboard() {

        if (!$this->session->userdata('uid'))
            return redirect('/');
       // $data['menu'] = $this->dashboard_model->getCost();

//        $data = $this->dashboard_model->get_source_archivable(5);
//        $data = json_decode($data[0]['value'], true);
//        $data = $data['programme']['overall_elevated_underground'];
//
      //  $comdate = $this->dashboard_model->get_date_list('commercial_front')[0]['date'];
//
//		$comdata = $this->dashboard_model->get_source_archivable(78);
//		$comdata = json_decode($comdata[0]['value'],true);
//
//		//var_dump($comdata);die();
//		$date = $this->dashboard_model->get_date_list('programme')[0]['date'];
//
//
//
//        //var_dump($date);die();
//
//        $data_packages = $this->dashboard_model->get_source_archivable(7); //North
//        $data_packages2 = $this->dashboard_model->get_source_archivable(20); //South
//        $data_packages3 = $this->dashboard_model->get_source_archivable(29); //South
//        $data_packages = json_decode($data_packages[0]['value'], true);
//        $data_packages2 = json_decode($data_packages2[0]['value'], true);
//        $data_packages3 = json_decode($data_packages3[0]['value'], true);
//        $data_packages_north = $data_packages['north']['scorecard'];
//        $data_packages_south = $data_packages2['south']['scorecard'];//var_dump($data_packages3);die();
//        $data_packages_system = $data_packages3['systems']['syspackage'];
//
//
//        $early = round(explode("%", $data['currentEarly'])[0]);
//        $late = round(explode("%", $data['currentLate'])[0]);
//        $actual = round(explode("%", $data['currentActual'])[0]);
//        $var_early = round(explode("w", $data['varLate'])[0]);
//        $var_early = ($var_early > 0 ? "+" . $var_early : $var_early);
//
//        $packages_data = array_merge(
//                (array_map(function($i) {
//                    return array($i['item'] => $i['varianceLate']);
//                }, $data_packages_north)), (array_map(function($i) {
//                    return array($i['item'] => $i['varianceLate']);
//                }, $data_packages_south)), (array_map(function($i) {
//                    return array($i['item'] => $i['varianceLate']);
//                }, $data_packages_system)));//var_dump($packages_data);die();
//
//
//        //print_r(array_keys(json_encode($data[0]['value'])));die();
   
            //$value .=','..','..','..','..','..',777,';
//              'project_value' => 36.6,
//              'vo_value' => 2.5,
//              'claims' => 39.1,
//              'claims_paid' => 13.4,
//              'claims_paid_percent' => 38,
//              'vo_value_percent' => 6.8 */
//        ));
//		//$data = array_merge($data,$comdata);
//		//
//		//var_dump($comdata);die();
//
//		foreach($comdata as $k => $v)
//			$data['data'][$k] = $v;
//
//        foreach ($packages_data as $k => $d) {
//            foreach ($d as $kk => $dd)
//                $data['data'][$kk] = $dd;
//        }
      /*  $data['comdata'] = $this->dashboard_model->getOverall();*/

        if ($this->input->get()) {
            $data = $this->dashboard_model->getCost($this->input->get('date'));
        }else {
            $data = $this->dashboard_model->getCost();
        }
      $this->load->view('index',$data);
        //$this->load->view('index');
    }

    public function view($item = FALSE, $query_type = FALSE, $query_key = FALSE) {
        //print_r($this->session->userdata('allowed_page'));
        if (!$this->session->userdata('uid')) {
            //commented by Jane on 19/10/2016
            /* if (in_array($_SERVER['REMOTE_ADDR'], array('127.0.0.1', "::1"))) {
                 $this->session->set_userdata(array(
                     "loggedin" => true,
                     "uid" => '',
                     "username" => '',
                     "fullname" => 'Hummingsoft Robot',
                     "lastlogin" => '',
                     "usergroup" => 1,
                     "allowed_page" => json_encode($this->dashboard_model->menuPermissionBySlugAndPage(1))
                 ));
             } else*/
                return redirect('/');
        }

        $date = $this->input->get("date");
        //if($_SERVER['REQUEST_URI'] != "/mpxd2/assets/js/backbone-min.map" && $_SERVER['REQUEST_URI'] != "/mpxd2/assets/js/underscore-min.map") // Why these scripts call view?
        //$this->session->set_userdata(array("selected_date" => $date));
        //$this->session->set_userdata(array($_SERVER['REQUEST_URI'] => $date));

        $data['menu'] = $this->dashboard_model->getMenu();
        $data['permission'] = $this->dashboard_model->menuPermission();
        $data['title'] = 'View Page';
        $data['userdata'] = $this->session->all_userdata(); 

//        $this->load->view('templates/header', $data);
//        $this->load->view('dashboard/view', $data);
        $this->load->view('portlets_holder',$data);
    }
    public function ringComment(){
        if ($this->input->get()) {
            $date=date_create($this->input->get('date'));
            $data = array(
                'message' => $this->input->get('comments'),
                'ring_slug' => $this->input->get('r'),
                'timestamps' =>date('Y-m-d h:i:s'),
                'data_date' =>date_format($date,'Y/m/d')
            );
            $result = $this->dashboard_model->setComments($data);
            $int = (int)$result;
            if($int > 0){
                $data['item'] = 1;
            }else{
                $data['item'] = 0;
            }

        } else {
            return show_404();
        }
        $this->load->view('dashboard/api', $data);
        
    }
    public function getComment(){

        $comments = $this->dashboard_model->get_comments_ps();
        $data['item'] = $comments;
        $this->load->view('dashboard/api', $data);

    }

    public function portlet($slug = FALSE, $page = FALSE) {
        if (!$slug)
            return show_404();
        else {
            $page = ($page == false ? 1 : $page);
            $result = $this->dashboard_model->getPortlet($slug, $page);
        }
        $data['title'] = 'portlet configuration';
        $data['item'] = $result;

        //var_dump($data);
        $this->load->view('dashboard/api', $data);
        //$this->output->enable_profiler(TRUE);
    }

    public function api() {
        //$result = array();
        if ($this->input->get()) {
            $gets = $this->input->get();
			//Unset unneeded array
			unset($gets['item_id']);
			unset($gets['date']);
			unset($gets['_']);

            $query = array_keys($gets);
            $itemID = $this->input->get('item_id');

            //Data archive date list
            if ($this->input->get("date_list")) {
                $slug = $this->input->get("date_list");
                $data['item'] = $this->dashboard_model->get_date_list($slug);
            }else{
                $date = $this->input->get("date");

                if ($itemID) //Use item ID to retrieve items meta
                    $item_meta = $this->dashboard_model->get_meta($query, $itemID);
                else
                    $item_meta = $this->dashboard_model->get_meta($query);
//                if (!empty($date)) {
//                    if (DateTime::createFromFormat('d-M-y', $date) !== FALSE) {
//                        // it's a date
//                        $data_source = $this->dashboard_model->get_source_archivable($item_meta[0]['item_id'], $date);
//                    } else {
//                        $data_source = [];
//                    }
//                }else{}
                $data_source = $this->dashboard_model->get_source_archivable($item_meta[0]['item_id'], $date);
//				$data_source_static = $this->dashboard_model->get_static_source($itemID);
                $data_source_static =array();
                //var_dump($this->session->all_userdata());
                $data['title'] = 'api';
                $data['item'] = array('item' => $item_meta, 'data' => $data_source, 'static_data' => $data_source_static);

                //var_dump($data);
                //$this->output->enable_profiler(TRUE);
            }
        } else {
            return show_404();
        }
		//$data = array_merge($data[, array(0));
        $this->load->view('dashboard/api', $data);
    }

    public function setapi() {
        $result = array();
        if ($this->input->post()) {
            $gets = $this->input->post();
            foreach ($gets as $k => $get) {
                $query = null;
                $object = new stdClass();
                $keys = explode(":", $get);
                if (sizeof($keys) == 4) {

                    $query['item'] = $keys[0];
                    $query['type'] = $keys[1];
                    $query['meta_key'] = $keys[2];
                    $query['meta_value'] = base64_decode($keys[3]);

                    $log = $this->dashboard_model->set_item_by_allkey($query['item'], $query['type'], $query['meta_key'], $query['meta_value']);
                    //array_push($result[$k], array('id' => $k));
                    $result[$k] = Array();
                    $result[$k]['id'] = $k;
                    $result[$k]['log'] = $log;
                } else {
                    $result[$k] = 'Parameters passed are not correct' . implode(",", $gets);
                }
            }
            //var_dump($result);die();
        } else {
            return show_404();
        }

        //var_dump($result);
        $data['title'] = 'api';
        $data['item'] = $result;
        //$this->output->enable_profiler(TRUE);
        $this->load->view('dashboard/api', $data);
    }

    public function draw() {
        $items = $this->dashboard_model->get_items();
        //var_dump($items);die();
        $pages = Array();
        foreach ($items as $idx => $i) {
            $items[$idx]['temp_pages'] = $this->dashboard_model->getPortletBySlug($i['slug']);

            //$pages[$i['id']] = $this->dashboard_model->getPortletBySlug($i['slug']);
        }
        //$pages = $this->dashboard_model->getPortletBySlug('programme');
        $this->load->view('dashboard/draw', Array('data' => Array(
                'items' => $items
        )));
    }

    public function save() {

        //header('Content-type: application/json');

        $input_data = $this->input->post(); //'[{"id":"2","key":"overall_elevated","slug":"programme","type":"scurve","col":1,"row":1,"size_x":6,"size_y":1},{"id":"7","key":"underground","slug":"programme","type":"scurve","col":7,"row":1,"size_x":6,"size_y":1},{"id":"8","key":"elevated_north","slug":"programme","type":"scurve","col":1,"row":2,"size_x":6,"size_y":1},{"id":"9","key":"elevated_south_underground","slug":"programme","type":"scurve","col":7,"row":2,"size_x":6,"size_y":1},{"id":"10","key":"overall_elevated_underground","slug":"programme","type":"scurve","col":1,"row":3,"size_x":6,"size_y":1},{"id":"11","key":"elevated_south","slug":"programme","type":"scurve","col":7,"row":3,"size_x":6,"size_y":1}]';
        if ($input_data) {
            $portlets = $input_data['portlets'];
            //$page = 0;//$input_data['page'];
            $portlet_array = json_decode($portlets, true);

            $log = $this->dashboard_model->updatePortlet($portlet_array);
            //$a = $this->dashboard_model->updatePortlet(json_decode('[{"id":"2","key":"overall_elevated","slug":"programme","type":"scurve","col":1,"row":1,"size_x":6,"size_y":1},{"id":"7","key":"underground","slug":"programme","type":"scurve","col":7,"row":1,"size_x":6,"size_y":1},{"id":"8","key":"elevated_north","slug":"programme","type":"scurve","col":1,"row":2,"size_x":6,"size_y":1},{"id":"9","key":"elevated_south_underground","slug":"programme","type":"scurve","col":7,"row":2,"size_x":6,"size_y":1},{"id":"10","key":"overall_elevated_underground","slug":"programme","type":"scurve","col":1,"row":3,"size_x":6,"size_y":1},{"id":"11","key":"elevated_south","slug":"programme","type":"scurve","col":7,"row":3,"size_x":6,"size_y":1}]', true), "1");
            printf($log);
        } else {
            return show_404();
        }
    }

    public function apiapi($item = FALSE, $query_type = FALSE, $query_key = FALSE) {

        if ($item && !$query_type) {
            $data['item'] = $this->dashboard_model->get_items($item);
        } else if ($query_type && $query_key) {
            $allowed_type = array('type', 'meta_key');

            if (in_array($query_type, $allowed_type)) {
                $data['item'] = $this->dashboard_model->get_items_by_type($item, $query_type, $query_key);
            }
        } else {
            return show_404();
        }


        if (empty($data['item'])) {
            show_404();
        }

        //var_dump($data);
        $data['title'] = 'api';
        //$this->output->enable_profiler(TRUE);
        $this->load->view('dashboard/api', $data);
    }

    /*
     *
     * TEST TEST BELOW
     *
     */

    public function create($test1 = 'test1', $test2 = 'test2') {
        $this->load->helper('form');
        $this->load->library('form_validation');
        $this->load->library('session');

        $newdata = array(
            'username' => 'johndoe',
            'email' => 'johndoe@some-site.com',
            'logged_in' => TRUE
        );

        $this->session->set_userdata($newdata);

        var_dump($this->session->all_userdata());
        var_dump($test2);

        $data['title'] = 'Create a news item';

        $this->form_validation->set_rules('title', 'Title', 'required');
        $this->form_validation->set_rules('text', 'text', 'required');

        if ($this->form_validation->run() === FALSE) {
            $this->load->view('templates/header', $data);
            $this->load->view('news/create');
            $this->load->view('templates/footer');
        } else {
            $this->news_model->set_news();
            $this->load->view('news/success');
        }
    }

    public function buildTree($ar, $pid = null) {
        $op = array();
        foreach ($ar as $item) {
            if ($item['parentId'] == $pid) {
                $op[$item['id']] = array(
                    'name' => $item['name'],
                    'parentId' => $item['parentId']
                );
                // using recursion
                $children = $this->buildTree($ar, $item['id']);
                if ($children) {
                    $op[$item['id']]['children'] = $children;
                }
            }
        }
        return $op;
    }

    public function error_404(){
        $this->load->view('error/404');
    }

}
