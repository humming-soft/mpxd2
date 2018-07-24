<?php

class Pdf_model extends CI_Model
{

    public function __construct()
    {
       /* parent::__construct();*/
        $this->load->database();
       /* $this->load->library('phpgraphlib');*/
       /* $this->load->library('phpgraphlib_stacked');
        $this->load->library('phpgraphlib_pie');*/
    }
    //THIS MODEL CREATED BY ANCY MATHEW For PDF 25-04-2018
    public function getFullDetailsSlug($slug,$date)
    {
     if($date !=null){
         $sql = "SELECT dt.\"id\", dt.\"item_id\", dt.\"name\", dt.\"date\", dt.\"value\" FROM \"data_sources\" dt join \"items\" i on dt.\"item_id\"=i.\"id\" and i.\"slug\"='$slug' and dt.\"date\" = '$date'";
     }else{
         $sql = "SELECT dt.\"id\", dt.\"item_id\", dt.\"name\", dt.\"date\", dt.\"value\" FROM \"data_sources\" dt join \"items\" i on dt.\"item_id\"=i.\"id\" and i.\"slug\"='$slug' and dt.\"date\" = (SELECT distinct max(dt.\"date\")FROM \"data_sources\" dt join \"items\" i on dt.\"item_id\"=i.\"id\" and i.\"slug\"='$slug');";
     }

        $query = $this->db->query($sql);
        $result = $query->result_array();
        return $result;
    }
    public function getDataDate($slug)
    {
        $sql = "SELECT to_char(dt.\"date\", 'dd-Mon-YY') as date FROM \"data_sources\" dt join \"items\" i on dt.\"item_id\"=i.\"id\" and i.\"slug\"='$slug' and dt.\"date\" = (SELECT distinct max(dt.\"date\")FROM \"data_sources\" dt join \"items\" i on dt.\"item_id\"=i.\"id\" and i.\"slug\"='$slug');";
        $query = $this->db->query($sql);
        $result = $query->result_array();
        if(sizeof($result)>0){
            foreach ($result as $key => $val) {
               $date = $val['date'];
            }
        }else{
             $date=date('d-M-y');
        }

        return $date;
    }
    public function getCategory($slug)
    {
        $this->db->select('items.slug,pages.meta_group_id');
        $this->db->from('pages');
        $this->db->join('items', 'items.id = pages.item_id');
        $this->db->where('items.slug', $slug);
        $page_query = $this->db->get();
        $page_result = $page_query->result_array();
        if (sizeOf($page_result) < 1) {
            die();
        }
        $slug = $page_result[0]["meta_group_id"];
        $category = $slug;
        return $category;
    }


    public function stationProg($details,$slug,$category)
    {
        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);
            if (sizeof($obj->{$slug}->{'station'}) > 0) {
                $stationData = <<<EOD
                <td style="width: 40%;">
                <h2 style="text-align: center;  font-size:15px;">UNDERGROUND STATION PROGRESS</h2>
                     <table style="width: 100%;" border="1" cellspacing="2" cellpadding="1">
                            <tbody>
                           <tr>
                                <td style="text-align: center; width: 70%;"><strong style="font-size:13px;">STATION</strong></td>
                                <td style="text-align: center; width: 30%;"><strong style="font-size:13px;">PROGRESS</strong></td>
                                </tr>
EOD;
                foreach ($obj->{$slug}->{'station'} as $k => $v){
                   $station= $k;
                    foreach ($v as $value) {
                    $progress= $value;
                    }
                        $stationData .= <<<EOD
                                <tr>
                                <td style="text-align: center; width: 70%; font-size:13px;">$station</td>
                                <td style="text-align: center ; width: 30%;"><strong style="font-size:12px;">$progress %</strong></td>
                               </tr>
EOD;
                    }
                $stationData .= <<<EOD
                            </tbody>
                            </table>
              </td>
EOD;
            }else{
                $stationData = <<<EOD
                <td style="width: 40%;">
                <h2 style="text-align: center;  font-size:15px;">UNDERGROUND STATION PROGRESS</h2>
                     <table style="width: 100%;" border="1" cellspacing="2" cellpadding="1">
                            <tbody>
                           <tr>
                                <td style="text-align: center; width: 70%;"><strong style="font-size:13px;">STATION</strong></td>
                                <td style="text-align: center; width: 30%;"><strong style="font-size:13px;">PROGRESS</strong></td>
                                </tr>
                                <tr>
                                <td  colspan="2" style="text-align: center; width: 100%; font-size:13px;"> NO DATA AVAILABLE</td>
                               </tr>
                                </tbody>
                            </table>
              </td>     
EOD;
            }

        }else{
            $stationData = <<<EOD
                <td style="width: 40%;">
                <h2 style="text-align: center;  font-size:15px;">UNDERGROUND STATION PROGRESS</h2>
                     <table style="width: 100%;" border="1" cellspacing="2" cellpadding="1">
                            <tbody>
                           <tr>
                                <td style="text-align: center; width: 70%;"><strong style="font-size:13px;">STATION</strong></td>
                                <td style="text-align: center; width: 30%;"><strong style="font-size:13px;">PROGRESS</strong></td>
                                </tr>
                                <tr>
                                <td colspan="2" style="text-align: center; width: 70%; font-size:13px;"> NO DATA AVAILABLE</td>
                               </tr>
                                </tbody>
                            </table>
              </td>
                               
EOD;
        }
        return $stationData;
    }
    public function tunnelProg($details,$slug,$category)
    {
        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);
            if (sizeof($obj->{$slug}->{'overall_tunnel_progress'}) > 0) {

                    if(isset($obj->{$slug}->{'overall_tunnel_progress'}[0]->{'date'})){
                        if ($obj->{$slug}->{'overall_tunnel_progress'}[0]->{'date'} != "") {
                            $date = $obj->{$slug}->{'overall_tunnel_progress'}[0]->{'date'};
                        } else {
                            $date = date('d-M-y');
                        }
                    }else{
                        $date = date('d-M-y');
                    }
                $tunnelData = <<<EOD
                <table style="width: 100%; margin-top:10px;" border="1" cellspacing="2" cellpadding="1" height="400mm">
                    <tbody>
                     <tr>    
                      <td style="width: 40%;" rowspan="2">
                    <h2 style="text-align: center;  font-size:15px;">TUNNEL PROGRESS  :AS Of [ <span style="color:#D64627;"> $date </span> ]</h2>
                    <table style="width: 100%;" border="1"  cellpadding="1">
                    <thead>
                    <tr>
                    <th  style="text-align: center;  font-size:13px;" ><strong > Item </strong ></th>
                      <th  style="text-align: center;  font-size:13px;" ><strong >Previous Progress (%) </strong ></th>
                    <th  style="text-align: center;  font-size:13px;" ><strong >Current Progress (%) </strong ></th>
                    </tr>
                    </thead>
                    <tbody>
EOD;
                for ($i = 1; $i < sizeof($obj->{$slug}->{'overall_tunnel_progress'}); $i++) {
                    $item = $obj->{$slug}->{'overall_tunnel_progress'}[$i]->{'name'};
                    $cur_value = $obj->{$slug}->{'overall_tunnel_progress'}[$i]->{'value'};
                    $pre_value = $obj->{$slug}->{'overall_tunnel_progress'}[$i]->{'prev_value'};
                    $tunnelData .= <<<EOD
                    <tr>
                    <td style="text-align: left;  font-size:13px;"  >$item</td>
                    <td style="text-align: center;  font-size:13px;"  >$pre_value</td>
                    <td style="text-align: center;  font-size:13px;"  >$cur_value</td>
                    </tr>
EOD;
                }
                $tunnelData .= <<<EOD
                    </tbody>
                    </table>
                 </td>
EOD;
            }
            else{
                $tunnelData = <<<EOD
                <table style="width: 100%; margin-top:10px;" border="1" cellspacing="2" cellpadding="1" height="400mm">
                    <tbody>
                       <tr>    
                           <td style="width: 40%;" rowspan="2">
                <h2 style="text-align: center;  font-size:15px;">TUNNEL PROGRESS  :AS Of [ <span style="color:#D64627;"> - </span> ]</h2>
                  
                    <table style="width: 100%;" border="1" cellpadding="1">
                    <thead>
                    <tr>
                    <th  style="text-align: center;  font-size:13px;" ><strong > Item </strong ></th>
                      <th  style="text-align: center;  font-size:13px;" ><strong >Previous Progress (%) </strong ></th>
                    <th  style="text-align: center;  font-size:13px;" ><strong >Current Progress (%) </strong ></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td style="text-align: center;  font-size:13px;" colspan="3" >NO DATA AVAILABLE</td>
                    </tr>
                    </tbody>
                    </table>
                 </td>
EOD;
            }

        }else{
            $tunnelData = <<<EOD
                <table style="width: 100%; margin-top:10px;" border="1" cellspacing="2" cellpadding="1" height="400mm">
                    <tbody>
                       <tr>    
                           <td style="width: 40%;" rowspan="2">
                <h2 style="text-align: center;  font-size:15px;">TUNNEL PROGRESS  :AS Of [ <span style="color:#D64627;"> - </span> ]</h2>
                  
                    <table style="width: 100%;" border="1"  cellpadding="1">
                    <thead>
                    <tr>
                    <th  style="text-align: center;  font-size:13px;" ><strong > Item </strong ></th>
                      <th  style="text-align: center;  font-size:13px;" ><strong >Previous Progress (%) </strong ></th>
                    <th  style="text-align: center;  font-size:13px;" ><strong >Current Progress (%) </strong ></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td style="text-align: center;  font-size:13px;" colspan="3" >NO DATA AVAILABLE</td>
                    </tr>
                    </tbody>
                    </table>
                 </td>
EOD;
        }

        return $tunnelData;
    }
    public function kpi($details,$slug,$category)
    {

        $date = date('d-M-y');
        if($category==41 || $category==11){

            $kpi = <<<EOD
           
                  <table style="width: 100%; margin-top:10px;" border="1"  cellpadding="1" height="400mm">
                    <tbody>
                       <tr>    
                           <td style="width: 40%;" rowspan="2">
                <h2 style="text-align: center;  font-size:15px;">KEY PERFORMANCE INDICATORS :AS Of [ <span style="color:#D64627;"> $date </span> ]</h2>
                  <table style="width: 99%;"  border="1"  cellpadding="1">
                            <tbody>
                            <tr>
                              <td style="text-align: center;  font-size:13px;" colspan="2"><strong>Item</strong></td>
                              <td style="text-align: center;  font-size:13px;" ><strong>Progress</strong> </td>
                              <td style="text-align: center;  font-size:13px;" ><strong>Base Line</strong></td>
                              <td style="text-align: center;  font-size:13px;"  ><strong>Target</strong></td>
                              <td style="text-align: center;  font-size:13px;"  ><strong>Actual</strong></td>
                              <td style="text-align: center;  font-size:13px;"  ><strong>Sortfall</strong></td>
                            
                           
                            </tr>
                             <tr>
                   
                             <td style="text-align: center;  font-size:13px;" colspan="7">NO DATA AVAILABLE</td>
                            </tr>
                             </tbody>
                      </table>
                 </td>
                           
EOD;

        }else{
            if ($details != null) {
                foreach ($details as $key => $val) {
                    $json = $val['value'];
                }
                $obj = json_decode($json);

                if (sizeof($obj->{$slug}->{'QRM'}) > 0) {
                    if(isset($obj->{$slug}->{'QRM'}[0]->{'date'})){
                        if ($obj->{$slug}->{'QRM'}[0]->{'date'} != "") {
                            $date = $obj->{$slug}->{'QRM'}[0]->{'date'};
                        } else {
                            $date = date('d-M-y');
                        }
                    }else{
                        $date = date('d-M-y');
                    }


                    $kpi = <<<EOD
            
                  <table style="width: 100%; margin-top:10px;" border="1"  cellpadding="1" height="400mm">
                    <tbody>
                       <tr>       
EOD;
                    $kpi .= <<<EOD
            
                <td style="width: 40%;" rowspan="2">
                <h2 style="text-align: center;  font-size:15px;">KEY PERFORMANCE INDICATORS :AS Of [ <span style="color:#D64627;"> $date </span> ]</h2>
                  <table style="width: 99%;"  border="1" cellpadding="1">
                            <tbody>
                            <tr>
                              <td style="text-align: center;  font-size:13px;" colspan="2"><strong>Item</strong></td>
                              <td style="text-align: center;  font-size:13px;" ><strong>Progress</strong> </td>
                              <td style="text-align: center;  font-size:13px;" ><strong>Base Line</strong></td>
                              <td style="text-align: center;  font-size:13px;"  ><strong>Target</strong></td>
                              <td style="text-align: center;  font-size:13px;"  ><strong>Actual</strong></td>
                              <td style="text-align: center;  font-size:13px;"  ><strong>Sortfall</strong></td>
                            
                           
                            </tr>
                           
EOD;
                    for ($i = 1; $i < sizeof($obj->{$slug}->{'QRM'}); $i++) {
                        $item = $obj->{$slug}->{'QRM'}[$i][0];

                        $baseline = $obj->{$slug}->{'QRM'}[$i][1];
                        $target = $obj->{$slug}->{'QRM'}[$i][2];
                        $actual = $obj->{$slug}->{'QRM'}[$i][3];

                        if (is_numeric($baseline) && is_numeric($actual)) {
                            if($baseline > 0 && $actual > 0){
                                $overProgree = round((($actual / $baseline) * 100), 1) . "%";
                            }else{
                                $overProgree = "N/A";
                            }

                        } else {
                            $overProgree = "N/A";
                        }

                        if (is_numeric($target) && is_numeric($actual)) {
                            $shortfall = $target - $actual;
                        } else {
                            $shortfall = $target;
                        }
                        $kpi .= <<<EOD
              <tr>
                   
                             <td style="text-align: left;  font-size:13px;" colspan="2">$item</td>
                             <td style="text-align: center;  font-size:13px;">$overProgree</td>
                             <td  style="text-align: center;  font-size:13px;"  >$baseline</td>
                             <td style="text-align: center;  font-size:13px;" >$target</td>
                             <td style="text-align: center;  font-size:13px;"  >$actual</td>
                           
            
                       
EOD;
                        if ($shortfall < 0) {
                            $kpi .= <<<EOD
                            <td style="text-align: center;  font-size:13px;" ><strong><font color="#802000">$shortfall</font></strong></td>
                            </tr>
                           
                       
EOD;
                        } else {
                            $kpi .= <<<EOD
                           <td style="text-align: center;  font-size:13px;" ><strong><font color="#008000">$shortfall</font></strong></td>
                            </tr>
                          
EOD;
                        }
                    }
                    $kpi .= <<<EOD
                     </tbody>
                      </table>
                 </td>
EOD;
                } else {
                    $kpi = <<<EOD
           
                  <table style="width: 100%; margin-top:10px;" border="1"  cellpadding="1" height="400mm">
                    <tbody>
                       <tr>    
                           <td style="width: 40%;" rowspan="2">
                <h2 style="text-align: center;  font-size:15px;">KEY PERFORMANCE INDICATORS :AS Of [ <span style="color:#D64627;"> $date </span> ]</h2>
                  <table style="width: 99%;"  border="1" cellpadding="1">
                            <tbody>
                            <tr>
                              <td style="text-align: center;  font-size:13px;" colspan="2"><strong>Item</strong></td>
                              <td style="text-align: center;  font-size:13px;" ><strong>Progress</strong> </td>
                              <td style="text-align: center;  font-size:13px;" ><strong>Base Line</strong></td>
                              <td style="text-align: center;  font-size:13px;"  ><strong>Target</strong></td>
                              <td style="text-align: center;  font-size:13px;"  ><strong>Actual</strong></td>
                              <td style="text-align: center;  font-size:13px;"  ><strong>Sortfall</strong></td>
                            
                           
                            </tr>
                             <tr>
                   
                             <td style="text-align: center;  font-size:13px;" colspan="7">NO DATA AVAILABLE</td>
                            </tr>
                             </tbody>
                      </table>
                 </td>
                           
EOD;
                }

            }else{
                $kpi = <<<EOD
                <table style="width: 100%; margin-top:10px;" border="1" cellpadding="1" height="400mm">
                    <tbody>
                       <tr>    
                           <td style="width: 40%;" rowspan="2">
                <h2 style="text-align: center;  font-size:15px;">KEY PERFORMANCE INDICATORS :AS Of [ <span style="color:#D64627;"> $date </span> ]</h2>
                  <table style="width: 99%;"  border="1"  cellpadding="1">
                            <tbody>
                            <tr>
                              <td style="text-align: center;  font-size:13px;" colspan="2"><strong>Item</strong></td>
                              <td style="text-align: center;  font-size:13px;" ><strong>Progress</strong> </td>
                              <td style="text-align: center;  font-size:13px;" ><strong>Base Line</strong></td>
                              <td style="text-align: center;  font-size:13px;"  ><strong>Target</strong></td>
                              <td style="text-align: center;  font-size:13px;"  ><strong>Actual</strong></td>
                              <td style="text-align: center;  font-size:13px;"  ><strong>Sortfall</strong></td>
                            
                           
                            </tr>
                             <tr>
                   
                             <td style="text-align: center;  font-size:13px;" colspan="7">NO DATA AVAILABLE</td>
                            </tr>
                             </tbody>
                      </table>
                 </td>
EOD;
        }

        }

        return $kpi;
    }
 /*   public function packageInfo($details,$slug)
    {
        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);
        }
        if (sizeof($obj->{$slug}->{'INFO'}) > 0) {
            $package=$obj->{$slug}->{'INFO'}->{'name'};
            $con=$obj->{$slug}->{'INFO'}->{'contractor'};
            $packageInfo = <<<EOD


        <table style="width: 100%; margin-top:10px;" border="1" cellspacing="2" cellpadding="1" height="400mm">
        <tbody>
         <tr>
                    <td style="width: 20%;">
                        <table style="width: 100%;" cellpadding="1">
                            <tbody>
                            <tr>
                                <td style="width: 100%; text-align: center;   font-size:15px;" colspan="2" ></td>
                            </tr>
                                <tr>
                                <td style="width: 100%; text-align: center; border-bottom:1px   solid red  " colspan="2"><strong  style="font-size:15px;" > $package</strong></td>
                                </tr>
                                        <tr>
                                        <td style="width: 100%; text-align: center; font-size:15px;" colspan="2" ><strong>$con</strong></td>
                                        </tr>

                            </tbody>
                        </table>
                    </td>
EOD;
        }

        return $packageInfo;
    }*/
  public function packageInfo($details,$slug,$category)
{
    if ($details != null) {
        foreach ($details as $key => $val) {
            $json = $val['value'];
        }
        $obj = json_decode($json);
    }
    if($slug=="serdang-dpt"){
        $package=$obj->{$slug}->{'INFO'}->{'name'};
        $con=$obj->{$slug}->{'INFO'}->{'contractor'};

        $packageInfo = <<<EOD
        
            <table style="width: 100%; margin-top:10px;" border="1"  cellpadding="1">
            <tbody>  
                <tr>
                    <td style="width: 20%;">
                       <table style="width: 100%;" cellpadding="1">
                        <tbody>
                            <tr>
                                <td style="width: 100%; text-align: center;   font-size:15px;" colspan="2" ></td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center; border-bottom:1px   solid red  " colspan="2"><strong  style="font-size:15px;" > $package</strong></td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center; font-size:15px;" colspan="2" ><strong>$con</strong></td>
                            </tr>
                         </tbody>
                       </table>
                    </td>
                       

                          
EOD;
        //STaTION
    }else if($category==5 || $category==11 || $category==9){

        $package=$obj->{$slug}->{'INFO'}->{'name'};
        $con=$obj->{$slug}->{'INFO'}->{'contractor'};
        $packageInfo = <<<EOD
        
            <table style="width: 100%; margin-top:10px;" border="1"  cellpadding="1" height="400mm">
            <tbody>  
                <tr>
                    <td style="width: 20%;">
                       <table style="width: 100%;" cellpadding="1">
                        <tbody>
                            <tr>
                                <td style="width: 100%; text-align: center;   font-size:15px;" colspan="2" ></td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center; border-bottom:1px   solid red  " colspan="2"><strong  style="font-size:15px;" > $package</strong></td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center; font-size:15px;" colspan="2" ><strong>$con</strong></td>
                            </tr>
                         </tbody>
                       </table>
                    </td>
                       

                          
EOD;

        //MSPR
    }else if( $category==41){
        $package=$obj->{$slug}->{'INFO'}->{'name'};
        $con=$obj->{$slug}->{'INFO'}->{'stat'};
        $packagename=strtoupper($slug);
        $packageInfo = <<<EOD
        
            <table style="width: 100%; margin-top:10px;" border="1"  cellpadding="1" height="400mm">
            <tbody>  
                <tr>
                    <td style="width: 20%;">
                       <table style="width: 100%;" cellpadding="1">
                        <tbody>
                            <tr>
                                <td style="width: 100%; text-align: center;   font-size:15px;" colspan="2" ></td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center; border-bottom:1px   solid red  " colspan="2"><strong  style="font-size:15px;" > $package</strong></td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center; font-size:15px;" colspan="2" >Construction And Completion Of Multi Storey Car Park Building, External Works And Other Associated Works At <strong> $con </strong> (Package <strong> $packagename </strong> ) </td>
                            </tr>
                         </tbody>
                       </table>
                    </td>
                       

                          
EOD;
    }
    else{
        if (sizeof($obj->{$slug}->{'INFO'}) > 0) {
            $package=$obj->{$slug}->{'INFO'}->{'name'};
            if(isset($obj->{$slug}->{'INFO'}->{'contractor'})){
                $con=$obj->{$slug}->{'INFO'}->{'contractor'};
            }else{
                $con="";
            }

            $packageInfo = <<<EOD
        
            <table style="width: 100%; margin-top:10px;" border="1"  cellpadding="1" height="400mm">
            <tbody>  
           
                <tr>
                    <td style="width: 20%;">
                       <table style="width: 100%;" cellpadding="1">
                        <tbody>
                            <tr>
                                <td style="width: 100%; text-align: center;   font-size:15px;" colspan="2" ></td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center; border-bottom:1px   solid red  " colspan="2"><strong  style="font-size:15px;" > $package</strong></td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center; font-size:15px;" colspan="2" ><strong>$con</strong></td>
                            </tr>
                             <tr>

                          
EOD;
            if(sizeof($obj->{$slug}->{'INFO'}->{'station'})>0){
                $packageInfo .= <<<EOD
                                 
                                      <td>
                                        <table   border="1" cellspacing="8" >
                                        <tbody>
                                        <tr>
                                         <td style=" text-align: center;  font-size:13px;"><strong>STATIONS</strong></td>
                                        </tr>
                                       
EOD;
                for ($i = 0; $i < sizeof($obj->{$slug}->{'INFO'}->{'station'}); $i++) {
                    $station=$obj->{$slug}->{'INFO'}->{'station'}[$i];
                    $packageInfo .= <<<EOD
                                      <tr>
                                        <td style="  text-align: center;  font-size:13px; background-color:#ccffff;">$station</td>
                                       </tr>
EOD;
                }
                $packageInfo .= <<<EOD
                                        </tbody>
                                        </table>
                                  </td>
EOD;
            }

            //end STATION
            if( isset ($obj->{$slug}->{'INFO'}->{'mspr'}) && sizeof($obj->{$slug}->{'INFO'}->{'mspr'})>0) {
                $packageInfo .= <<<EOD
                                         <td>
                                        <table   border="1" cellspacing="8" >
                                        <tbody>
                                        <tr>
                                         <td style=" text-align: center; font-size:13px;" ><strong>MSPR</strong></td>
                                        </tr>
                                       
EOD;
                for ($i = 0; $i < sizeof($obj->{$slug}->{'INFO'}->{'mspr'}); $i++) {
                    $mspr = $obj->{$slug}->{'INFO'}->{'mspr'}[$i];
                    $packageInfo .= <<<EOD
                                        <tr>
                                        <td style="  text-align: center;  font-size:13px; background-color:#ffffcc;">$mspr</td>
                                        </tr>
EOD;
                }
                $packageInfo .= <<<EOD
                                        </tbody>
                                        </table>
                                </td>
EOD;
            }
            //END MSPR
            if(  isset ($obj->{$slug}->{'INFO'}->{'depot'}) && sizeof($obj->{$slug}->{'INFO'}->{'depot'})>0) {
                $packageInfo .= <<<EOD
                                
                                 <td>
                                        <table   border="1" cellspacing="8">
                                        <tbody>
                                        <tr>
                                         <td style=" text-align: center; font-size:13px;" ><strong>DEPOT</strong></td>
                                        </tr>
                                     
EOD;
                for ($i = 0; $i < sizeof($obj->{$slug}->{'INFO'}->{'depot'}); $i++) {
                    $depot = $obj->{$slug}->{'INFO'}->{'depot'}[$i];
                    $packageInfo .= <<<EOD
                                
                                <tr>
                                        <td style="  text-align: center;  font-size:13px; background-color:#ffe6ff;">$depot</td>
                                        </tr>
                                     
EOD;
                }
                $packageInfo .= <<<EOD
                                
                                      </tbody>
                                        </table>
                                </td>
                              
EOD;
            }
            $packageInfo .= <<<EOD
        
                             </tr>
                         </tbody>
                       </table>
                    </td>
                       
EOD;
        }else{
            $packageInfo = <<<EOD
        
         <table style="width: 100%; margin-top:10px;" border="1"  cellpadding="1" height="400mm">
            <tbody>
                <tr>
                    <td style="width: 20%;">
                       <table style="width: 100%;"  border="1" cellspacing="7" cellpadding="1">
                        <tbody>
                            <tr>
                                <td style="width: 100%; text-align: center; border-bottom:2px solid red  " colspan="2"><strong  style="font-size:15px;" >VIADUCT PACKAGE V201</strong></td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;  font-size:15px;" colspan="2" ><strong>Sunway Construction Sdn Bhd</strong></td>
                            </tr>
                            <tr>
                                <td style="width: 50%; text-align: center;  font-size:13px;"><strong>STATIONS</strong></td>
                                <td style="width: 50%; text-align: center; font-size:13px;" ><strong>MSPR</strong></td>
                            </tr>
                            <tr>
                               <td style="width: 50%; text-align: center;  font-size:13px;"><strong>DEPOT</strong></td>
                            </tr>  
                         </tbody>
                       </table>
                    </td>
            
                       
EOD;
        }
    }


    return $packageInfo;
}

    public function kad($details,$slug)
    {

        $date = date('d-M-y');
        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);

            if (sizeof($obj->{$slug}->{'KD'}) > 0) {
                if(isset($obj->{$slug}->{'KD'}[0]->{'date'}) ){
                    if ($obj->{$slug}->{'KD'}[0]->{'date'} != "") {
                        $date = $obj->{$slug}->{'KD'}[0]->{'date'};
                    } else {
                        $date = date('d-M-y');
                    }
                }else{
                    $date = date('d-M-y');
                }

                $kad = <<<EOD
           <td style="width: 40%;">
           <h2 style="text-align: center;  font-size:15px;">KEY ACCESS DATES :AS Of [ <span style="color:#D64627;"> $date </span> ]</h2>
                     <table style="width: 99%;" border="1"  cellpadding="1">
                            <tbody>
                           <tr>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">SN</strong></td>
                                <td style="text-align: center; width: 42%;"><strong style="font-size:13px;">DESC.</strong></td>
                                 <td style="text-align: center; width: 15.9807%;"><strong style="font-size:13px;">Forecast</strong></td>
                                <td style="text-align: center; width: 15.0193%;"><strong style="font-size:13px;">Planned</strong></td>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">Day Left</strong></td>
                                <td style="text-align: center; width: 6%;"><strong style="font-size:13px;">Var.</strong></td>
                                </tr>
EOD;
                for ($i = 1; $i < sizeof($obj->{$slug}->{'KD'}); $i++) {
                    $item = $obj->{$slug}->{'KD'}[$i][0];
                    $forecast = $obj->{$slug}->{'KD'}[$i][1];
                    $contract = $obj->{$slug}->{'KD'}[$i][2];
                    if(($forecast != null) && ($contract != null) ){
                        $cont = new DateTime($contract);
                        $fore = new DateTime($forecast);
                        $tod = new DateTime(date('d-M-y'));
                        $interval1 = $tod->diff($cont);
                        $date1 = $forecast;
                        $date2 = $contract;
                        $diff = abs(strtotime($date2) - strtotime($date1));
                        if($tod > $cont){
                            $dayleft=0;
                        }else{
                            $dayleft=$interval1->d;
                        }
                        if($date2 > $date1){
                            $variance=floor(($diff / (60 * 60 * 24))/7)."w";
                            $status=1;
                        }else{
                            $variance="-".floor(($diff / (60 * 60 * 24))/7)."w";
                            $status=-1;
                        }
                    }else{
                        $variance="-";
                        $dayleft="-";
                    }
                    if($status < 0){
                        $kad .= <<<EOD
                        <tr>
                                <td style=" font-size:13px; text-align: center; width: 10%;">$i</td>
                                <td style=" font-size:13px; text-align: left; width: 42%;">$item</td>
                                <td style=" font-size:13px; text-align: center; width: 15.9807%;">$forecast</td>
                                <td style=" font-size:13px; text-align: center; width: 15.0193%;">$contract</td>
                                <td style=" font-size:13px; text-align: center; width: 10%;">$dayleft</td>
                                <td style=" font-size:13px; text-align: center; width: 6%; background-color:#ff471a;"><strong>$variance</strong></td>
                        </tr>
EOD;
                    }else{
                        $kad .= <<<EOD
                        <tr>
                                <td style=" font-size:13px; text-align: center; width: 10%;">$i</td>
                                <td style=" font-size:13px; text-align: left; width: 42%;">$item</td>
                                <td style=" font-size:13px; text-align: center; width: 15.9807%;">$forecast</td>
                                <td style=" font-size:13px; text-align: center; width: 15.0193%;">$contract</td>
                                <td style=" font-size:13px; text-align: center; width: 10%;">$dayleft</td>
                                <td style=" font-size:13px; text-align: center; width: 6%; background-color:#66ff99;"><strong>$variance</strong></td>
                        </tr>
EOD;
                    }

                }
                $kad .= <<<EOD
                          
                            </tbody>
                            </table>
              </td>
EOD;
            } else {
                $kad = <<<EOD
         <td style="width: 40%;">
           <h2 style="text-align: center;  font-size:15px;">KEY ACCESS DATES :AS Of [ <span style="color:#D64627;"> $date </span> ]</h2>
                     <table style="width: 99%;" border="1"  cellpadding="1">
                            <tbody>
                           <tr>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">SN</strong></td>
                                <td style="text-align: center; width: 42%;"><strong style="font-size:13px;">DESC.</strong></td>
                                <td style="text-align: center; width: 15.9807%;"><strong style="font-size:13px;">Forecast</strong></td>
                                <td style="text-align: center; width: 15.0193%;"><strong style="font-size:13px;">Planned</strong></td>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">Day Left</strong></td>
                                <td style="text-align: center; width: 6%;"><strong style="font-size:13px;">Var.</strong></td>
                                </tr>
                                <tr>
                                <td style=" font-size:13px; text-align: center; width: 99%;" colspan="6">NO DATA AVAILABLE</td>
                        </tr>
                        
                            </tbody>
                            </table>
              </td>
                       
EOD;
            }

        }else{
            $kad = <<<EOD
        <td style="width: 40%;">
           <h2 style="text-align: center;  font-size:15px;">KEY ACCESS DATES :AS Of [ <span style="color:#D64627;"> $date </span> ]</h2>
                     <table style="width: 99%;" border="1"  cellpadding="1">
                            <tbody>
                           <tr>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">SN</strong></td>
                                <td style="text-align: center; width: 42%;"><strong style="font-size:13px;">DESC.</strong></td>
                                 <td style="text-align: center; width: 15.9807%;"><strong style="font-size:13px;">Forecast</strong></td>
                                <td style="text-align: center; width: 15.0193%;"><strong style="font-size:13px;">Planned</strong></td>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">Day Left</strong></td>
                                <td style="text-align: center; width: 6%;"><strong style="font-size:13px;">Var.</strong></td>
                                </tr>
                                <tr>
                                <td style=" font-size:13px; text-align: center; width: 99%;" colspan="6">NO DATA AVAILABLE</td>
                               </tr>
                            </tbody>
                            </table>
              </td>
            
                       
EOD;
        }

        return $kad;
    }
    public function scurve($details,$slug,$category)
    {
        $date = date('d-M-y');
        if($category==11){

            $scurve = <<<EOD
         <td style="width: 50%;">
                         <table style="width: 100%;">
                           <tbody>
                              <tr>
                                 <td style="width: 100%; text-align:center; vertical-align: middle; font-size:15px;"><strong>S-CURVE </strong></td>
                              </tr>
                               <tr>
                                <td  align="center"><img src=""  width="900" height="350"></td>
                            </tr>
                            </tbody>
                        </table>
                     </td>
                 </tr>
             </tbody>
          </table>
EOD;
        }else{
            if ($details != null) {
                foreach ($details as $key => $val) {
                    $json = $val['value'];
                }
                $obj = json_decode($json);

                if (sizeof($obj->{$slug}->{'scurve'}) > 0) {
                    if(isset($obj->{$slug}->{'scurve'}->{'date'})){
                        if ($obj->{$slug}->{'scurve'}->{'date'} != "") {
                            $date = $obj->{$slug}->{'scurve'}->{'date'};
                        } else {
                            $date = date('d-M-y');
                        }
                    }else{
                        $date = date('d-M-y');
                    }

                    if(sizeof($obj->{$slug}->{'scurve'}->{'earlyData'})>0){
                        require_once (APPPATH.'/libraries/jpgraph/jpgraph.php');
                        require_once (APPPATH.'/libraries/jpgraph/jpgraph_line.php');
                        if(sizeof($obj->{$slug}->{'scurve'}->{'delayedData'})>0){
                            $ydata   =  $obj->{$slug}->{'scurve'}->{'delayedData'};
                        }else{
                            $ydata   = array(0);
                        }
                        if(sizeof($obj->{$slug}->{'scurve'}->{'earlyData'})>0){
                            $ydata2  =  $obj->{$slug}->{'scurve'}->{'earlyData'};
                        }else{
                            $ydata2   = array(0);
                        }
                        if(sizeof($obj->{$slug}->{'scurve'}->{'actualData'})>0){
                            $ydata3  =  $obj->{$slug}->{'scurve'}->{'actualData'};
                        }else{
                            $ydata3   = array(0);
                        }


                        $width=900;
                        $height=300;
                        $graph = new Graph($width,$height);
                        $graph->SetScale('intlin');
                        $graph->SetShadow();
                        $graph->SetMargin(40,20,20,40);
                        $graph->ygrid->Show(false, false);
                        /* $graph->grid->Show("false");*/
                        $graph->img->SetAntiAliasing(false);
                        $graph->yaxis->SetFont( FF_ARIAL,FS_BOLD,10);
                        $graph->xaxis->SetFont( FF_ARIAL,FS_BOLD,10);
                        $data3y=array('Jul/16', 'Aug/16', 'Sep/16', "Oct/16", "Nov/16", "Dec/16", "Jan/17", "Feb/17", "Mar/17", "Apr/17", "May/17", "Jun/17", "Jul/17",
                            "Aug/17", "Sep/17", "Oct/17", "Nov/17", "Dec/17","Jan/18", "Feb/18", "Mar/18", "Apr/18", "May/18", "Jun/18", "Jul/18", "Aug/18", "Sep/18", "Oct/18", "Nov/18", "Dec/18", "Jan/19", "Feb/19", "Mar/19", "Apr/19", "May/19", "Jun/19", "Jul/19", "Aug/19", "Sep/19", "Oct/19", "Nov/19", "Dec/19", "Jan/20", "Feb/20", "Mar/20", "Apr/20", "May/20", "Jun/20", "Jul/20", "Aug/20", "Sep/20", "Oct/20", "Nov/20", "Dec/20", "Jan/21", "Feb/21", "Mar/21", "Apr/21", "May/21", "Jun/21", "Jul/21", "Aug/21", "Sep/21", "Oct/21", "Nov/21", "Dec/21",
                            "Jan/22", "Feb/22", "Mar/22", "Apr/22", "May/22", "Jun/22", "Jul/22", "Aug/22", "Sep/22", "Oct/22", "Nov/22", "Dec/22");
                        $graph->xaxis->SetTickLabels($data3y);
                        $graph->xaxis->SetLabelAngle(20);
                        $lineplot=new LinePlot($ydata);
                        $graph->Add($lineplot);
                        $lineplot->SetWeight(3);
                        $lineplot->SetStyle("solid");
                        $lineplot->SetColor('firebrick3');

                        $lineplot2=new LinePlot($ydata2);
                        $graph->Add($lineplot2);
                        $lineplot2->SetWeight(3);
                        $lineplot2->SetStyle("solid");
                        $lineplot2->SetColor('green');

                        $lineplot3=new LinePlot($ydata3);
                        $graph->Add($lineplot3);
                        $lineplot3->SetWeight(3);
                        $lineplot3->SetStyle("solid");
                        $lineplot3->SetColor('blue');

                        if(file_exists('scurve.png')){
                            if(unlink('scurve.png')) {
                                $graph->Stroke('scurve.png');
                            }
                        }else{
                            $graph->Stroke('scurve.png');
                        }
                        $Image ="scurve.png";
                        $scurve = <<<EOD
         <td style="width: 50%;">
                         <table style="width: 100%;">
                           <tbody>
                              <tr>
                                 <td style="width: 100%; text-align:center; vertical-align: middle; font-size:15px;"><strong>S-CURVE :AS Of [ <span style="color:#D64627;"> $date </span> ]</strong></td>
                              </tr>
                               <tr>
                                <td  align="center"><img src="$Image"  width="900" height="350"></td>
                            </tr>
                            </tbody>
                        </table>
                     </td>
                 </tr>
             </tbody>
          </table>
     
EOD;

                    }else{ $scurve = <<<EOD
         <td style="width: 50%;">
                         <table style="width: 100%;">
                           <tbody>
                              <tr>
                                 <td style="width: 100%; text-align:center; vertical-align: middle; font-size:15px;"><strong>S-CURVE :AS Of [ <span style="color:#D64627;"> $date </span> ]</strong></td>
                              </tr>
                               <tr>
                                <td  align="center"><img src=""  width="900" height="350"></td>
                            </tr>
                            </tbody>
                        </table>
                     </td>
                 </tr>
             </tbody>
          </table>
EOD;

                    }

                }else{
                    $scurve = <<<EOD
         <td style="width: 50%;">
                         <table style="width: 100%;">
                           <tbody>
                              <tr>
                                 <td style="width: 100%; text-align:center; vertical-align: middle; font-size:15px;"><strong>S-CURVE :AS Of [ <span style="color:#D64627;"> $date </span> ]</strong></td>
                              </tr>
                               <tr>
                                <td  align="center"><img src=""  width="900" height="350"></td>
                            </tr>
                            </tbody>
                        </table>
                     </td>
                 </tr>
             </tbody>
          </table>
EOD;
                }
            }else{
                $scurve = <<<EOD
         <td style="width: 50%;">
                         <table style="width: 100%;">
                           <tbody>
                              <tr>
                                 <td style="width: 100%; text-align:center; vertical-align: middle; font-size:15px;"><strong>S-CURVE </strong></td>
                              </tr>
                               <tr>
                                <td  align="center"><img src=""  width="900" height="350"></td>
                            </tr>
                            </tbody>
                        </table>
                     </td>
                 </tr>
             </tbody>
          </table>
EOD;
            }
        }

        return $scurve;
    }
    public function packageProgress($details,$slug,$category)
    {
        $date = date('d-M-y');
        if($category==11){

            $packageProg = <<<EOD
                    <td style="width: 30%;">
                        <table style="width: 100%;"  border="1" cellspacing="7" cellpadding="1" >
                            <tbody>
                               <tr>
                                  <td colspan="3" style="width:100%; text-align:center; vertical-align: middle; font-size:15px"><strong>PROGRESS PERCENTAGE :AS Of [ <span style="color:#D64627;"> $date </span> ]</strong></td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Early Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style=" text-align: center;  font-size:13px;">Late Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Actual</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Early</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Late</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                  <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">-</td>
                                    <td >&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
EOD;

        }else{
            if ($details != null) {
                foreach ($details as $key => $val) {
                    $json = $val['value'];
                }
                $obj = json_decode($json);
                if (sizeof($obj->{$slug}->{'scurve'}) > 0) {
                    if(isset($obj->{$slug}->{'scurve'}->{'date'})){
                        if ($obj->{$slug}->{'scurve'}->{'date'} != "") {
                            $date = $obj->{$slug}->{'scurve'}->{'date'};
                        } else {
                            $date = date('d-M-y');
                        }
                    }else{
                        $date = date('d-M-y');
                    }

                    $curEarly=$obj->{$slug}->{'scurve'}->{'currentEarly'};
                    $curLate=$obj->{$slug}->{'scurve'}->{'currentLate'};
                    $curActual=$obj->{$slug}->{'scurve'}->{'currentActual'};
                    $varEarly=$obj->{$slug}->{'scurve'}->{'varEarly'};
                    $varLate=$obj->{$slug}->{'scurve'}->{'varLate'};
                    $trend=$obj->{$slug}->{'scurve'}->{'trend'};
                    $packageProg = <<<EOD
                     <td style="width: 30%; align: center;" >
                        <table style="width: 99%;"  border="1" cellspacing="7"  cellpadding="1" >
                            <tbody>
                               <tr>
                                  <td colspan="3" style="width:100%; text-align:center; vertical-align: middle; font-size:15px"><strong>PROGRESS PERCENTAGE :AS Of [ <span style="color:#D64627;"> $date </span> ]</strong></td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Early Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">$curEarly</td>
                                </tr>
                                <tr>
                                    <td style=" text-align: center;  font-size:13px;">Late Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">$curLate</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Actual</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">$curActual</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Early</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">$varEarly</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Late</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">$varLate</td>
                                </tr>
EOD;
                    if($trend=="Up"){
                        $packageProg .= <<<EOD
                    
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">$trend</td>
                                    <td style="background-color:#33cc33;">&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
EOD;
                    }
                    else if($trend=="Constant minus"){


                        $packageProg .= <<<EOD
                    
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">$trend</td>
                                    <td style="background-color:#ff0000;">&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
EOD;
                    }
                    else if($trend=="Constant plus"){


                        $packageProg .= <<<EOD
                    
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">$trend</td>
                                    <td style="background-color:#33cc33;">&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                       
EOD;
                    } else if($trend=="Down"){
                        $packageProg .= <<<EOD
                    
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">$trend</td>
                                    <td style="background-color:#ff0000;">&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
EOD;
                    }
                    else {
                        $packageProg .= <<<EOD
                    
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">$trend</td>
                                    <td >&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
EOD;
                    }

                }else{
                    $packageProg = <<<EOD
                    <td style="width: 30%;">
                        <table style="width: 100%;"  border="1" cellspacing="7" cellpadding="1" >
                            <tbody>
                               <tr>
                                  <td colspan="3" style="width:100%; text-align:center; vertical-align: middle; font-size:15px"><strong>PROGRESS PERCENTAGE :AS Of [ <span style="color:#D64627;"> $date </span> ]</strong></td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Early Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style=" text-align: center;  font-size:13px;">Late Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Actual</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Early</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Late</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                  <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">-</td>
                                    <td >&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
EOD;
                }
            }else{
                $packageProg = <<<EOD
                      <td style="width: 30%;">
                        <table style="width: 100%;"  border="1" cellspacing="7" cellpadding="1" >
                            <tbody>
                               <tr>
                                  <td colspan="3" style="width:100%; text-align:center; vertical-align: middle; font-size:15px"><strong>PROGRESS PERCENTAGE :AS Of [ <span style="color:#D64627;"> $date </span> ]</strong></td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Early Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style=" text-align: center;  font-size:13px;">Late Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Actual</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Early</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Late</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                  <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">-</td>
                                     <td >&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                   
EOD;
            }
        }


        return $packageProg;
    }

    public function safeyIncident($details,$slug,$category)
    {

        if($category==5 || $category==41 ){
            $safeyIncident = <<<EOD
        <tr>
           <td style="width: 40%;">
                   </td>
           </tr>
                 </tbody>
             </table>
EOD;
        }else{
            $date = date('d-M-y');
            if ($details != null) {
                $k=0;
                foreach ($details as $key => $val) {
                    $json = $val['value'];
                }
                $obj = json_decode($json);

                if (sizeof($obj->{$slug}->{'hsse'}) > 0) {

                    if(isset($obj->{$slug}->{'hsse'}[0]->{'date'})){
                        $k=1;
                        if ($obj->{$slug}->{'hsse'}[0]->{'date'} != "") {
                            $date = $obj->{$slug}->{'hsse'}[0]->{'date'};
                        } else {
                            $date = date('d-M-y');
                        }
                    }else{
                        $k=0;
                        $date = date('d-M-y');
                    }


                    $safeyIncident = <<<EOD
             
        <tr>
         <td style="width: 40%;"  >
          <h2 style="text-align: center;  font-size:15px;">SAFETY INCIDENTS :AS Of [ <span style="color:#D64627;">$date </span> ]</h2>
                     <table style="width: 99%;" border="1" cellpadding="1">
                    <tbody>
                    <tr>
                    <td align="center" style="width: 18%; font-size:13px;" ><strong>DATE</strong> </td>
                    <td align="center" style="width: 80%; font-size:13px;"><strong>INCIDENT</strong></td>
                    </tr>
EOD;
                    for ($i = $k; $i < sizeof($obj->{$slug}->{'hsse'}); $i++) {
                        $incidentDate = $obj->{$slug}->{'hsse'}[$i][0];
                        $incident = $obj->{$slug}->{'hsse'}[$i][1];
                        $safeyIncident .= <<<EOD
                    <tr>
                  
                    <td align="center" style="width: 18%; font-size:13px;">$incidentDate</td>
                    <td align="left" style="width: 80%; font-size:13px;">$incident</td>
                    </tr>
                   
EOD;
                    }

                    $safeyIncident .= <<<EOD
                    </tbody>
                    </table>
                   </td>
       </tr>
                 </tbody>
             </table>
EOD;
                }else{
                    $safeyIncident = <<<EOD
             
               
        <tr>
         <td style="width: 40%;">
          <h2 style="text-align: center;  font-size:15px;">SAFETY INCIDENTS :AS Of [ <span style="color:#D64627;">$date </span> ]</h2>
                     <table style="width: 99%; margin-left: 30px;" border="1" cellpadding="1" >
                    <tbody>
                    <tr>
                    <td align="center" style="width: 15%; font-size:13px;" ><strong>DATE</strong> </td>
                    <td align="center" style="width: 85%; font-size:13px;"><strong>INCIDENT</strong></td>
                    </tr>
                     </tbody>
                    </table>
                   </td>
       </tr>
                 </tbody>
             </table>
EOD;
                }
            }else{
                $safeyIncident = <<<EOD
        <tr>
         <td style="width: 40%;">
          <h2 style="text-align: center;  font-size:15px;">SAFETY INCIDENTS :AS Of [ <span style="color:#D64627;">$date </span> ]</h2>
                     <table style="width: 99%;" border="1" cellpadding="1">
                    <tbody>
                    <tr>
                    <td align="center" style="width: 15%; font-size:13px;" ><strong>DATE</strong> </td>
                    <td align="center" style="width: 85%; font-size:13px;"><strong>INCIDENT</strong></td>
                    </tr>
                     </tbody>
                    </table>
                   </td>
       </tr>
                 </tbody>
             </table>
EOD;
            }
        }

        return $safeyIncident;
    }
    public function Images($details,$slug,$category)
    {

        if($category==9){
            $images = <<<EOD
             <td style="width: 20%;" rowspan="2">  
               <h2 style="text-align: center;  font-size:15px;">PROGRESS PHOTOS</h2>
                      <table style="width: 100%;"  cellspacing="7" cellpadding="1">
                        <tbody>
                           <tr>
                                <td  align="center" style=" font-size:12px;" ></td>
                            </tr>
                            <tr>
                                <td  align="center" width="400" height="200">NO PROGRESS PHOTOS</td>
                              
                            </tr>
                         
                         </tbody>
                      </table>
               </td>
                </tr> 

EOD;
        }else{
            if ($details != null) {
                foreach ($details as $key => $val) {
                    $json = $val['value'];
                }
                $obj = json_decode($json);
                if (sizeof($obj->{$slug}->{'gallery'}) > 0) {
                    if (sizeof($obj->{$slug}->{'gallery'}->{'items'}) > 0) {

                        $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";

                        $images = <<<EOD
             <td style="width: 20%;" rowspan="2">  
               <h2 style="text-align: center;  font-size:15px;">PROGRESS PHOTOS </h2>
                      <table style="width: 100%;"  cellspacing="7" cellpadding="1">
                        <tbody>
EOD;
                        if(sizeof($obj->{$slug}->{'gallery'}->{'items'}) > 3){
                            $limit=3;

                        }else{
                            $limit=sizeof($obj->{$slug}->{'gallery'}->{'items'});

                        }
                        for ($i = 1; $i < $limit; $i++) {
                            $Image =$protocol. $_SERVER['SERVER_NAME'].":".$_SERVER['SERVER_PORT']."/".$obj->{$slug}->{'gallery'}->{'items'}[$i]->{'path'};
                            $desc = $obj->{$slug}->{'gallery'}->{'items'}[$i]->{'title'};
                            $file_headers = @get_headers($Image);
                            if ($file_headers[0] != 'HTTP/1.1 404 Not Found') {
                                $images .= <<<EOD
                            <tr>
                                <td  align="center"><img src="$Image"  width="400" height="232"><span>$desc</span></td>
                            </tr>
EOD;

                            }
                        }
                        $images .= <<<EOD
                         </tbody>
                      </table>
               </td>
                </tr> 
EOD;
                    }else{
                        $images = <<<EOD
             <td style="width: 20%;" rowspan="2">  
               <h2 style="text-align: center;  font-size:15px;">PROGRESS PHOTOS</h2>
                      <table style="width: 100%;"  cellspacing="7" cellpadding="1">
                        <tbody>
                           <tr>
                                <td  align="center" style=" font-size:12px;" ></td>
                            </tr>
                            <tr>
                                <td  align="center" width="400" height="200">NO PROGRESS PHOTOS</td>
                              
                            </tr>
                         
                         </tbody>
                      </table>
               </td>
                </tr> 

EOD;
                    }
                }else{
                    $images = <<<EOD
             <td style="width: 20%;" rowspan="2">  
               <h2 style="text-align: center;  font-size:15px;">PROGRESS PHOTOS</h2>
                      <table style="width: 100%;"  cellspacing="7" cellpadding="1">
                        <tbody>
                           <tr>
                                <td  align="center" style=" font-size:12px;" ></td>
                            </tr>
                            <tr>
                                <td  align="center" width="400" height="200">NO PROGRESS PHOTOS</td>
                              
                            </tr>
                         
                         </tbody>
                      </table>
               </td>
                </tr> 

EOD;
                }




            }else{
                $images = <<<EOD
             <td style="width: 20%;" rowspan="2">  
               <h2 style="text-align: center;  font-size:15px;">PROGRESS PHOTOS :AS Of [ <span style="color:#D64627;">date </span> ]</h2>
                      <table style="width: 100%;"  border="1" cellspacing="7" cellpadding="1">
                        <tbody>
                            <tr>
                                <td  align="center" style=" font-size:12px;" ></td>
                            </tr>
                            <tr>
                                <td  align="center" width="400" height="200">NO PROGRESS PHOTOS</td>
                              
                            </tr>
                         
                         </tbody>
                      </table>
               </td>
                </tr> 

EOD;
            }
        }
        return $images;
    }

    public function setHeader($imgPath,$projName,$packageName,$dataDate,$slug){


        $header = <<<EOD
        
          <table style="width: 100%;" border="1">
            <tbody>
                <tr style="height: 300px;">
                    <td style="width: 10%;">
                        <table style="width: 100%;">
                            <tbody>
                                <tr>
                                    <td style="width: 100%; " align="center"><img src="$imgPath"  width="100" height="50"></td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                     <td style="width: 40%;">
                        <table style="width: 100%;">
                            <tbody>
                               <tr>
                                  <td style="width:100%; text-align:center; vertical-align: middle; font-size:15px">$projName</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                       <td style="width: 40%;">
                         <table style="width: 100%;">
                           <tbody>
                              <tr>
                                 <td style="width: 100%; text-align:center; vertical-align: middle; font-size:15px;"><strong>$packageName</strong></td>
                              </tr>
                            </tbody>
                        </table>
                     </td>
                      <td style="width: 10%;">
                         <table style="width: 100%;">
                            <tbody>
                               <tr>
                                 <td style="width: 100%; text-align:center; vertical-align: middle; font-size:20px"><strong>$dataDate</strong></td>
                               </tr>
                             </tbody>
                         </table>
                      </td>
                 </tr>
             </tbody>
          </table>
     
EOD;

        return $header;
    }
    public function setHeaderETDE($imgPath,$projName,$packageName,$dataDate,$slug)
    {
        $header = <<<EOD
        
          <table style="width: 100%;" border="1" >
            <tbody>
                <tr style="height: 300px;">
                    <td style="width: 10%;">
                        <table style="width: 100%;">
                            <tbody>
                                <tr>
                                    <td style="width: 100%; " align="center"><img src="$imgPath"  width="100" height="50"></td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                     <td style="width: 40%;">
                        <table style="width: 100%;">
                            <tbody>
                               <tr>
                                  <td style="width:100%; text-align:center; vertical-align: middle; font-size:15px">$projName</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                       <td style="width: 42%;">
                         <table style="width: 100%;">
                           <tbody>
                              <tr>
                                 <td style="width: 100%; text-align:center; vertical-align: middle; font-size:15px;"><strong>$packageName</strong></td>
                              </tr>
                            </tbody>
                        </table>
                     </td>
                      <td style="width: 8%;">
                         <table style="width: 100%;">
                            <tbody>
                               <tr>
                                 <td style="width: 100%; text-align:center; vertical-align: middle; font-size:20px"><strong>$dataDate</strong></td>
                               </tr>
                             </tbody>
                         </table>
                      </td>
                 </tr>
             </tbody>
          </table>
     
EOD;
        return $header;
    }
    public function packageInfoETDE($details,$slug,$category)
    {
        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);
        }
        $package=$obj->{$slug}->{'INFO'}->{'name'};
        $con=$obj->{$slug}->{'INFO'}->{'contractor'};
            $packageInfo = <<<EOD
        
            <table style="width: 100%; margin-top:10px;" border="1" cellpadding="1" height="400mm">
            <tbody>  
                <tr>
                    <td style="width: 20%;">
                       <table style="width: 100%;" cellpadding="1">
                        <tbody>
                            <tr>
                                <td style="width: 100%; text-align: center;   font-size:15px;" colspan="2" ></td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center; border-bottom:1px   solid red  " colspan="2"><strong  style="font-size:15px;" > $package</strong></td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center; font-size:14px;" colspan="2" >$con</td>
                            </tr>
                         </tbody>
                       </table>
                    </td>
                       

                          
EOD;
        RETURN $packageInfo;
    }
    public function packageProgressETDE($details,$slug,$category)
    {
        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);
            if(sizeof($obj->{$slug}->{'sys_etde_progress'})>0){
                if(sizeof($obj->{$slug}->{'sys_etde_progress'}->{'PROGRESS'})>0){
                    $date= $obj->{$slug}->{'sys_etde_progress'}->{'PROGRESS'}->{'date'};
                    $curEarly=$obj->{$slug}->{'sys_etde_progress'}->{'PROGRESS'}->{'currentEarly'};
                    $curLate=$obj->{$slug}->{'sys_etde_progress'}->{'PROGRESS'}->{'currentLate'};
                    $curActual=$obj->{$slug}->{'sys_etde_progress'}->{'PROGRESS'}->{'currentActual'};
                    $varEarly=$obj->{$slug}->{'sys_etde_progress'}->{'PROGRESS'}->{'varEarly'};
                    $varLate=$obj->{$slug}->{'sys_etde_progress'}->{'PROGRESS'}->{'varLate'};
                    $trend=$obj->{$slug}->{'sys_etde_progress'}->{'PROGRESS'}->{'varTrainCompletion'};
                    $completed=0;
                    if(sizeof($obj->{$slug}->{'sys_etde_progress'}->{'first'}) > 0){
                        for($i=0;$i< sizeof($obj->{$slug}->{'sys_etde_progress'}->{'first'});$i++){
                            $static_tot= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'static_total'};

                            $static_pass= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'static_pass'};
                            $static_in= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'static_incomplete'};
                            $static_fail= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'static_fail'};
                            $sat_tot= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'sat_total'};
                            $sat_pass= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'sat_pass'};
                            $sat_in= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'sat_incomplete'};
                            $sat_fail= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'sat_fail'};
                            $it_tot= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'it_toatl'};
                            $it_pass= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'it_pass'};
                            $it_in= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'it_incomplete'};
                            $it_fail= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'it_fail'};
                            $sit_tot= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'sit_total'};
                            $sit_pass= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'sit_pass'};
                            $sit_in= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'sit_incomplete'};
                            $sit_fail= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'sit_fail'};
                            $pat_tot= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'pat_total'};
                            $pat_pass= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'pat_pass'};
                            $pat_in= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'pat_incomplete'};
                            $pat_fail= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'pat_fail'};
                            if(($static_tot==$static_pass) && ($sat_pass==$sat_tot) && ($it_tot==$it_pass)&& ($sit_tot==$sit_pass) && ($pat_tot==$pat_pass) && $static_in==0 && $static_fail==0 && $sat_in==0 && $sat_fail==0 && $it_in==0
                                && $it_fail==0 && $sit_in==0 && $sit_fail==0 && $pat_in==0 && $pat_fail==0){
                                $train_no= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'train'};
                                if(sizeof($obj->{$slug}->{'sys_etde_progress'}->{'second'}) > 0) {
                                    for ($i = 0; $i < sizeof($obj->{$slug}->{'sys_etde_progress'}->{'second'}); $i++) {
                                        $trainnoJob=$obj->{$slug}->{'sys_etde_progress'}->{'second'}[$i]->{'train'};
                                        if($train_no==$trainnoJob){
                                            $openjob=$obj->{$slug}->{'sys_etde_progress'}->{'second'}[$i]->{'open_job'};
                                            $closedjob=$obj->{$slug}->{'sys_etde_progress'}->{'second'}[$i]->{'closed_job'};
                                            if($openjob==0 && $closedjob != 0){
                                                $completed=$completed+1;
                                                /* array_push($ComplteTrains,"Train-".$train_no);*/
                                            }
                                        }
                                    }
                                }else{
                                    $completed=0;
                                }
                            }else{
                                $completed=0;
                            }
                        }
                    }else{
                        $completed=0;
                    }



                    $packageProg = <<<EOD
                      <td style="width: 30%;">
                        <table style="width: 100%;"  border="1" cellspacing="7" cellpadding="1" >
                            <tbody>
                               <tr>
                                  <td colspan="3" style="width:100%; text-align:center; vertical-align: middle; font-size:15px"><strong>PROGRESS PERCENTAGE :AS Of [ <span style="color:#D64627;">$date </span> ]</strong></td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Early Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">$curEarly</td>
                                </tr>
                                <tr>
                                    <td style=" text-align: center;  font-size:13px;">Late Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">$curLate</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Actual</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">$curActual</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Early</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">$varEarly</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Late</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">$varLate</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Train Completion (%)</td>
                                    <td style="text-align: center;  font-size:13px;" colspan="2">$trend</td>
                                </tr>
                                  <tr>
                                    <td style="text-align: center;  font-size:13px;" colspan="2">Fully Completed Train</td>
                                    <td style="text-align: center;  font-size:13px;" >$completed</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
EOD;

                }  else{
                    $packageProg = <<<EOD
                      <td style="width: 30%;">
                        <table style="width: 100%;"  border="1" cellspacing="7" cellpadding="1" >
                            <tbody>
                               <tr>
                                  <td colspan="3" style="width:100%; text-align:center; vertical-align: middle; font-size:15px"><strong>PROGRESS PERCENTAGE :AS Of [ <span style="color:#D64627;">- </span> ]</strong></td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Early Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">-</td>
                                </tr>
                                <tr>
                                    <td style=" text-align: center;  font-size:13px;">Late Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">-</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Actual</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">-</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Early</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Late</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Train Completion (%)</td>
                                    <td style="text-align: center;  font-size:13px;" colspan="2">-</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                   
EOD;
                }
            }
            else{
                $packageProg = <<<EOD
                      <td style="width: 30%;">
                        <table style="width: 100%;"  border="1" cellspacing="7" cellpadding="1" >
                            <tbody>
                               <tr>
                                  <td colspan="3" style="width:100%; text-align:center; vertical-align: middle; font-size:15px"><strong>PROGRESS PERCENTAGE :AS Of [ <span style="color:#D64627;">- </span> ]</strong></td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Early Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">-</td>
                                </tr>
                                <tr>
                                    <td style=" text-align: center;  font-size:13px;">Late Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">-</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Actual</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">-</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Early</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Late</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Train Completion (%)</td>
                                    <td style="text-align: center;  font-size:13px;" colspan="2">-</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                   
EOD;

            }

        }else{
            $packageProg = <<<EOD
                      <td style="width: 30%;">
                        <table style="width: 100%;"  border="1" cellspacing="7" cellpadding="1" >
                            <tbody>
                               <tr>
                                  <td colspan="3" style="width:100%; text-align:center; vertical-align: middle; font-size:15px"><strong>PROGRESS PERCENTAGE :AS Of [ <span style="color:#D64627;">- </span> ]</strong></td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Early Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">-</td>
                                </tr>
                                <tr>
                                    <td style=" text-align: center;  font-size:13px;">Late Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">-</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Actual</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">-</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Early</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Late</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Train Completion (%)</td>
                                    <td style="text-align: center;  font-size:13px;" colspan="2">-</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                   
EOD;
        }


        RETURN $packageProg;
    }
    public function fullyCompletedTrain($details,$slug,$category)
    {
        $ComplteTrains=array();
        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);
            if(sizeof($obj->{$slug}->{'sys_etde_progress'}) > 0) {
                if(sizeof($obj->{$slug}->{'sys_etde_progress'}->{'first'}) > 0){
                    for($i=0;$i< sizeof($obj->{$slug}->{'sys_etde_progress'}->{'first'});$i++){
                        $static_tot= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'static_total'};
                        $static_pass= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'static_pass'};
                        $static_in= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'static_incomplete'};
                        $static_fail= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'static_fail'};
                        $sat_tot= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'sat_total'};
                        $sat_pass= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'sat_pass'};
                        $sat_in= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'sat_incomplete'};
                        $sat_fail= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'sat_fail'};
                        $it_tot= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'it_toatl'};
                        $it_pass= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'it_pass'};
                        $it_in= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'it_incomplete'};
                        $it_fail= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'it_fail'};
                        $sit_tot= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'sit_total'};
                        $sit_pass= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'sit_pass'};
                        $sit_in= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'sit_incomplete'};
                        $sit_fail= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'sit_fail'};
                        $pat_tot= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'pat_total'};
                        $pat_pass= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'pat_pass'};
                        $pat_in= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'pat_incomplete'};
                        $pat_fail= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'pat_fail'};
                        if(($static_tot==$static_pass) && ($sat_pass==$sat_tot) && ($it_tot==$it_pass)&& ($sit_tot==$sit_pass) && ($pat_tot==$pat_pass) && $static_in==0 && $static_fail==0 && $sat_in==0 && $sat_fail==0 && $it_in==0
                            && $it_fail==0 && $sit_in==0 && $sit_fail==0 && $pat_in==0 && $pat_fail==0){
                            $train_no= $obj->{$slug}->{'sys_etde_progress'}->{'first'}[$i]->{'train'};
                            if(sizeof($obj->{$slug}->{'sys_etde_progress'}->{'second'}) > 0) {
                                for ($i = 0; $i < sizeof($obj->{$slug}->{'sys_etde_progress'}->{'second'}); $i++) {
                                    $trainnoJob=$obj->{$slug}->{'sys_etde_progress'}->{'second'}[$i]->{'train'};
                                    if($train_no==$trainnoJob){
                                        $openjob=$obj->{$slug}->{'sys_etde_progress'}->{'second'}[$i]->{'open_job'};
                                        $closedjob=$obj->{$slug}->{'sys_etde_progress'}->{'second'}[$i]->{'closed_job'};
                                        if($openjob==0 && $closedjob != 0){
                                            array_push($ComplteTrains,"Train-".$train_no);
                                        }
                                    }
                                }
                            }else{
                                $completed=0;
                            }
                        }
                    }
                }else{
                    $completed=0;
                }
            }

            $full = <<<EOD
        <table style="width: 100%; margin-top:10px;" border="1"  cellpadding="1" height="400mm">
            <tbody>  
                <tr>
                    <td style="width: 20%;">
                     <table style="width: 100%;"  cellspacing="7" cellpadding="1" >
                            <tbody>
                               <tr>
                                  <td style="width:100%; text-align:center; vertical-align: middle; font-size:15px"><strong>COMPLETED TRAIN(S)</strong></td>
                                </tr>
                                  <tr>
                                    <td style="text-align: center;  font-size:13px;">
                                    <ul>
EOD;
            if(sizeof($ComplteTrains)>0){
                foreach($ComplteTrains as $val){
                    $full .= <<<EOD
                                    <li style="text-align: center;  font-size:13px;">$val</li>
EOD;
                }
            }else{
                $full .= <<<EOD
                                    <li style="text-align: center;  font-size:13px;">No Trains Completed Yet</li>
EOD;
            }

            $full .= <<<EOD
             </ul>
                                    </td>
                                </tr>
                            </tbody>
                         </table>
                    </td>
                   
EOD;
        }else{
            $full = <<<EOD
        <table style="width: 100%; margin-top:10px;" border="1" cellspacing="2" cellpadding="1" height="400mm">
            <tbody>  
                <tr>
                    <td style="width: 20%;">
                     <table style="width: 100%;"  border="1" cellspacing="7" cellpadding="1" >
                            <tbody>
                               <tr>
                                  <td style="width:100%; text-align:center; vertical-align: middle; font-size:15px"><strong>COMPLETED TRAIN(S)</strong></td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">No Trains Completed Yet</td>
                                </tr>
                            </tbody>
                         </table>
                    </td>
                   
EOD;
        }
        return $full;
    }
    public function kadDetailsETDE($details,$slug,$category)
    {
        $date = date('d-M-y');
        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);
            if (sizeof($obj->{$slug}->{'KAD'}) > 0) {
                if ($obj->{$slug}->{'KAD'}[0]->{'date'} != "") {
                    $date = $obj->{$slug}->{'KAD'}[0]->{'date'};
                } else {
                    $date = date('d-M-y');
                }
                $kadETDE = <<<EOD
           <td style="width: 80%;">
           <h2 style="text-align: center;  font-size:15px;">KEY ACCESS DATES :AS Of [ <span style="color:#D64627;"> $date </span> ]</h2>
                     <table style="width: 100%;" border="1"  cellpadding="1">
                            <tbody>
                           <tr>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">SN</strong></td>
                                <td style="text-align: center; width: 42%;"><strong style="font-size:13px;">DESC.</strong></td>
                                 <td style="text-align: center; width: 15.9807%;"><strong style="font-size:13px;">Forecast</strong></td>
                                <td style="text-align: center; width: 15.0193%;"><strong style="font-size:13px;">Planned</strong></td>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">Day Left</strong></td>
                                <td style="text-align: center; width: 6%;"><strong style="font-size:13px;">Var.</strong></td>
                                </tr>
EOD;
                for ($i = 1; $i < sizeof($obj->{$slug}->{'KAD'}); $i++) {
                    $item = $obj->{$slug}->{'KAD'}[$i][0];
                    $forecast = $obj->{$slug}->{'KAD'}[$i][1];
                    $contract = $obj->{$slug}->{'KAD'}[$i][2];
                    if(($forecast != null) && ($contract != null) ){
                        $cont = new DateTime($contract);
                        $fore = new DateTime($forecast);
                        $tod = new DateTime(date('d-M-y'));
                        $interval1 = $tod->diff($cont);
                        $date1 = $forecast;
                        $date2 = $contract;
                        $diff = abs(strtotime($date2) - strtotime($date1));
                        if($tod > $cont){
                            $dayleft=0;
                        }else{
                            $dayleft=$interval1->d;
                        }
                        if($date2 > $date1){
                            $variance="-".floor(($diff / (60 * 60 * 24))/7)."w";
                            $status=-1;
                        }else{
                            $variance=floor(($diff / (60 * 60 * 24))/7)."w";
                            $status=1;
                        }
                    }else{
                        $variance="-";
                        $dayleft="-";
                    }
                    if($status < 0){
                        $kadETDE .= <<<EOD
                        <tr>
                                <td style=" font-size:13px; text-align: center; width: 10%;">$i</td>
                                <td style=" font-size:13px; text-align: left; width: 42%;">$item</td>
                                <td style=" font-size:13px; text-align: center; width: 15.9807%;">$forecast</td>
                                <td style=" font-size:13px; text-align: center; width: 15.0193%;">$contract</td>
                                <td style=" font-size:13px; text-align: center; width: 10%;">$dayleft</td>
                                <td style=" font-size:13px; text-align: center; width: 6%; background-color:#ff471a;"><strong>$variance</strong></td>
                        </tr>
EOD;
                    }else{
                        $kadETDE .= <<<EOD
                        <tr>
                                <td style=" font-size:13px; text-align: center; width: 10%;">$i</td>
                                <td style=" font-size:13px; text-align: left; width: 42%;">$item</td>
                                <td style=" font-size:13px; text-align: center; width: 15.9807%;">$forecast</td>
                                <td style=" font-size:13px; text-align: center; width: 15.0193%;">$contract</td>
                                <td style=" font-size:13px; text-align: center; width: 10%;">$dayleft</td>
                                <td style=" font-size:13px; text-align: center; width: 6%; background-color:#66ff99;"><strong>$variance</strong></td>
                        </tr>
EOD;
                    }

                }
                $kadETDE .= <<<EOD
                          
                            </tbody>
                            </table>
               </td>
                    </tr>
                    </tbody>
                    </table>
EOD;
            } else {
                $kadETDE = <<<EOD
         <td style="width: 80%;">
           <h2 style="text-align: center;  font-size:15px;">KEY ACCESS DATES :AS Of [ <span style="color:#D64627;"> $date </span> ]</h2>
                     <table style="width: 100%;" border="1" cellspacing="2" cellpadding="1">
                            <tbody>
                           <tr>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">SN</strong></td>
                                <td style="text-align: center; width: 42%;"><strong style="font-size:13px;">DESC.</strong></td>
                                <td style="text-align: center; width: 15.9807%;"><strong style="font-size:13px;">Forecast</strong></td>
                                <td style="text-align: center; width: 15.0193%;"><strong style="font-size:13px;">Planned</strong></td>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">Day Left</strong></td>
                                <td style="text-align: center; width: 6%;"><strong style="font-size:13px;">Var.</strong></td>
                                </tr>
                                <tr>
                                <td style=" font-size:13px; text-align: center; width: 99%;" colspan="6">NO DATA AVAILABLE</td>
                        </tr>
                        
                            </tbody>
                            </table>
              </td>  
                    </tr>
                    </tbody>
                    </table>
                       
EOD;
            }
        }else{
            $kadETDE = <<<EOD
                    <td style="width: 80%;">
                       <table style="width: 100%;" border="1" cellspacing="2" cellpadding="1">
                            <tbody>
                           <tr>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">SN</strong></td>
                                <td style="text-align: center; width: 42%;"><strong style="font-size:13px;">DESC.</strong></td>
                                 <td style="text-align: center; width: 15.9807%;"><strong style="font-size:13px;">Forecast</strong></td>
                                <td style="text-align: center; width: 15.0193%;"><strong style="font-size:13px;">Planned</strong></td>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">Day Left</strong></td>
                                <td style="text-align: center; width: 6%;"><strong style="font-size:13px;">Var.</strong></td>
                                </tr>
                                <tr>
                                <td style=" font-size:13px; text-align: center; width: 99%;" colspan="6">NO DATA AVAILABLE</td>
                               </tr>
                            </tbody>
                            </table>
                    </td>
                    </tr>
                    </tbody>
                    </table>
EOD;
        }
        return $kadETDE;
    }
    public function testingETDE($details,$slug,$category){
        $date = date('d-M-y');
        if ($details != null) {
            $statisTotal=0;
            $statisPass=0;
            $patTotal=0;
            $patPass=0;
            $satTotal=0;
            $satPass=0;
            $itTotal=0;
            $itPass=0;
            $sitTotal=0;
            $sitPass=0;

            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);
            if (sizeof($obj->{$slug}->{'sys_etde_testing'}) > 0) {
                if ($obj->{$slug}->{'sys_etde_testing'}[0]->{'date'} != "") {
                    $date = $obj->{$slug}->{'sys_etde_testing'}[0]->{'date'};
                } else {
                    $date = date('d-M-y');
                }
                $testingETDE = <<<EOD
                    <table style="width: 100%; margin-top:10px;" border="1"  cellpadding="1" height="400mm">
                        <tbody>  
                                <tr>
                                <td style="width: 100%;">
                                  <h2 style="text-align: center;  font-size:15px;">TESTING-COMPLETION PERCENTAGE OF 58 TRAINS (TESTING REPORT):AS Of [ <span style="color:#D64627;"> $date </span> ]</h2>
                                   <table style="width: 100%;" border="0.2"  cellpadding="1">
                                   <tbody>
                                    <tr>
                                        <td style="text-align: center; background-color:#0099cc;"><strong style="font-size:13px;">Train NO</strong></td>
                                        <td style="text-align: center; background-color:#0099cc;" colspan="4"><strong style="font-size:13px;">STATIC TEST</strong></td>
                                        <td style="text-align: center; background-color:#0099cc;" colspan="4"><strong style="font-size:13px;">PAT</strong></td>
                                         <td style="text-align: center; background-color:#0099cc;" colspan="4"><strong style="font-size:13px;">SAT</strong></td>
                                          <td style="text-align: center; background-color:#0099cc;" colspan="4"><strong style="font-size:13px;">IT</strong></td>
                                           <td style="text-align: center; background-color:#0099cc;" colspan="4"><strong style="font-size:13px;">SIT</strong></td>
                                    </tr>
                                   <tr>
                                        <td style="text-align: center;  background-color:#ccf2ff;"><strong style="font-size:13px;"></strong></td>
                                        <td style="text-align: center;  background-color:#ccf2ff;"><strong style="font-size:13px;">Total</strong></td>
                                        <td style="text-align: center;  background-color:#ccf2ff; "><strong style="font-size:13px;">Pass</strong></td>
                                        <td style="text-align: center;   background-color:#ccf2ff;"><strong style="font-size:13px;">Incomplete</strong></td>
                                        <td style="text-align: center;   background-color:#ccf2ff;"><strong style="font-size:13px;">Fail</strong></td>
                                         <td style="text-align: center;  background-color:#ccf2ff;"><strong style="font-size:13px;">Total</strong></td>
                                        <td style="text-align: center;   background-color:#ccf2ff;"><strong style="font-size:13px;">Pass</strong></td>
                                        <td style="text-align: center;   background-color:#ccf2ff;"><strong style="font-size:13px;">Incomplete</strong></td>
                                        <td style="text-align: center;   background-color:#ccf2ff;"><strong style="font-size:13px;">Fail</strong></td>
                                         <td style="text-align: center;  background-color:#ccf2ff;"><strong style="font-size:13px;">Total</strong></td>
                                        <td style="text-align: center;   background-color:#ccf2ff;"><strong style="font-size:13px;">Pass</strong></td>
                                        <td style="text-align: center;   background-color:#ccf2ff;"><strong style="font-size:13px;">Incomplete</strong></td>
                                        <td style="text-align: center;   background-color:#ccf2ff;"><strong style="font-size:13px;">Fail</strong></td>
                                         <td style="text-align: center;   background-color:#ccf2ff;"><strong style="font-size:13px;">Total</strong></td>
                                        <td style="text-align: center;   background-color:#ccf2ff;"><strong style="font-size:13px;">Pass</strong></td>
                                        <td style="text-align: center;   background-color:#ccf2ff;"><strong style="font-size:13px;">Incomplete</strong></td>
                                        <td style="text-align: center;   background-color:#ccf2ff;"><strong style="font-size:13px;">Fail</strong></td>
                                         <td style="text-align: center;  background-color:#ccf2ff;"><strong style="font-size:13px;">Total</strong></td>
                                        <td style="text-align: center;   background-color:#ccf2ff;"><strong style="font-size:13px;">Pass</strong></td>
                                        <td style="text-align: center;   background-color:#ccf2ff;"><strong style="font-size:13px;">Incomplete</strong></td>
                                        <td style="text-align: center;   background-color:#ccf2ff;"><strong style="font-size:13px;">Fail</strong></td>
                                    </tr>
EOD;
                for ($i = 1; $i < sizeof($obj->{$slug}->{'sys_etde_testing'}); $i++) {
                    $trainno= $obj->{$slug}->{'sys_etde_testing'}[$i]->{'train_no'};
                    $static_tot= $obj->{$slug}->{'sys_etde_testing'}[$i]->{'static_total'};
                    if(is_numeric($static_tot)){
                        $statisTotal += $static_tot;
                    }
                    $static_pass= $obj->{$slug}->{'sys_etde_testing'}[$i]->{'static_pass'};
                    if(is_numeric($static_pass)){
                        $statisPass += $static_pass;
                    }
                    $static_in= $obj->{$slug}->{'sys_etde_testing'}[$i]->{'static_incomplete'};
                    $static_fail= $obj->{$slug}->{'sys_etde_testing'}[$i]->{'static_fail'};
                    $sat_tot= $obj->{$slug}->{'sys_etde_testing'}[$i]->{'sat_total'};
                    $sat_pass= $obj->{$slug}->{'sys_etde_testing'}[$i]->{'sat_pass'};
                    $sat_in= $obj->{$slug}->{'sys_etde_testing'}[$i]->{'sat_incomplete'};
                    $sat_fail= $obj->{$slug}->{'sys_etde_testing'}[$i]->{'sat_fail'};
                    $it_tot= $obj->{$slug}->{'sys_etde_testing'}[$i]->{'it_toatl'};
                    $it_pass= $obj->{$slug}->{'sys_etde_testing'}[$i]->{'it_pass'};
                    $it_in= $obj->{$slug}->{'sys_etde_testing'}[$i]->{'it_incomplete'};
                    $it_fail= $obj->{$slug}->{'sys_etde_testing'}[$i]->{'it_fail'};
                    $sit_tot= $obj->{$slug}->{'sys_etde_testing'}[$i]->{'sit_total'};
                    $sit_pass= $obj->{$slug}->{'sys_etde_testing'}[$i]->{'sit_pass'};
                    $sit_in= $obj->{$slug}->{'sys_etde_testing'}[$i]->{'sit_incomplete'};
                    $sit_fail= $obj->{$slug}->{'sys_etde_testing'}[$i]->{'sit_fail'};
                    $pat_tot= $obj->{$slug}->{'sys_etde_testing'}[$i]->{'pat_total'};
                    $pat_pass= $obj->{$slug}->{'sys_etde_testing'}[$i]->{'pat_pass'};
                    $pat_in= $obj->{$slug}->{'sys_etde_testing'}[$i]->{'pat_incomplete'};
                    $pat_fail= $obj->{$slug}->{'sys_etde_testing'}[$i]->{'pat_fail'};
                    if(is_numeric($sat_tot)){
                        $satTotal += $sat_tot;
                    }
                    if(is_numeric($sat_pass)){
                        $satPass += $sat_pass;
                    }
                    if(is_numeric($pat_tot)){
                        $patTotal += $pat_tot;
                    }
                    if(is_numeric($pat_pass)){
                        $patPass += $pat_pass;
                    }
                    if(is_numeric($it_tot)){
                        $itTotal += $it_tot;
                    }
                    if(is_numeric($it_pass)){
                        $itPass += $it_pass;
                    }
                    if(is_numeric($sit_tot)){
                        $sitTotal += $sit_tot;
                    }
                    if(is_numeric($sit_pass)){
                        $sitPass += $sit_pass;
                    }
                    $testingETDE .= <<<EOD
                                    <tr>
                                        <td style="text-align: center; font-size:13px;">$trainno</td>
                                        <td style="text-align: center; font-size:13px;">$static_tot</td>
                                        <td style="text-align: center; font-size:13px;">$static_pass</td>
                                        <td style="text-align: center; font-size:13px;">$static_in</td>
                                        <td style="text-align: center; font-size:13px;">$static_fail</td>
                                        <td style="text-align: center; font-size:13px;">$pat_tot</td>
                                        <td style="text-align: center; font-size:13px;">$pat_pass</td>
                                        <td style="text-align: center; font-size:13px;">$pat_in</td>
                                        <td style="text-align: center; font-size:13px;">$pat_fail</td>
                                        <td style="text-align: center; font-size:13px;">$sat_tot</td>
                                        <td style="text-align: center; font-size:13px;">$sat_pass</td>
                                        <td style="text-align: center; font-size:13px;">$sat_in</td>
                                        <td style="text-align: center; font-size:13px;">$sat_fail</td>
                                        <td style="text-align: center; font-size:13px;">$it_tot</td>
                                        <td style="text-align: center; font-size:13px;">$it_pass</td>
                                        <td style="text-align: center; font-size:13px;">$it_in</td>
                                        <td style="text-align: center; font-size:13px;">$it_fail</td>
                                        <td style="text-align: center; font-size:13px;">$sit_tot</td>
                                        <td style="text-align: center; font-size:13px;">$sit_pass</td>
                                        <td style="text-align: center; font-size:13px;">$sit_in</td>
                                        <td style="text-align: center; font-size:13px;">$sit_fail</td>
                                     
                                    </tr>
EOD;
                }
                $staticPer=round((((int)str_replace(' ', '', $statisPass))/((int)str_replace(' ', '', $statisTotal)))*100, 0);
                $patPer=round((((int)str_replace(' ', '', $patPass))/((int)str_replace(' ', '', $patTotal)))*100, 0);
                $satPer=round((((int)str_replace(' ', '', $satPass))/((int)str_replace(' ', '', $satTotal)))*100, 0);
                $itPer=round((((int)str_replace(' ', '', $itPass))/((int)str_replace(' ', '', $itTotal)))*100, 0);
                $sitPer=round((((int)str_replace(' ', '', $sitPass))/((int)str_replace(' ', '', $sitTotal)))*100, 0);
                $testingETDE .= <<<EOD
                                   <tr>
                                        <td style="text-align: center; background-color:#e6f9ff;"><strong style="font-size:13px;">Progress</strong></td>
                                        <td style="text-align: center; background-color:#e6f9ff;" colspan="4"><strong style="font-size:13px;">$staticPer%</strong></td>
                                        <td style="text-align: center; background-color:#e6f9ff;" colspan="4"><strong style="font-size:13px;">$patPer%</strong></td>
                                        <td style="text-align: center; background-color:#e6f9ff;" colspan="4"><strong style="font-size:13px;">$satPer%</strong></td>
                                        <td style="text-align: center; background-color:#e6f9ff;" colspan="4"><strong style="font-size:13px;">$itPer%</strong></td>
                                        <td style="text-align: center; background-color:#e6f9ff;" colspan="4"><strong style="font-size:13px;">$sitPer%</strong></td>
                                    </tr>
                                </tbody>
                                </table>
                                </td>
                                </tr>
                        </tbody>
                       </table>
EOD;
            }else{
                $testingETDE = <<<EOD
                    <table style="width: 100%; margin-top:10px;" border="1" cellspacing="2" cellpadding="1" height="400mm">
                        <tbody>  
                                <tr>
                                <td style="width: 100%;">
                                  <h2 style="text-align: center;  font-size:15px;">Testing - Completion Percentage of 58 Trains ( Testing Report ) :AS Of [ <span style="color:#D64627;"> $date </span> ]</h2>
                                   <table style="width: 100%;" border="0.2" cellspacing="2" cellpadding="1">
                                   <tbody>
                                    <tr>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Train NO</strong></td>
                                        <td style="text-align: center;" colspan="4"><strong style="font-size:13px;">STATIC TEST</strong></td>
                                        <td style="text-align: center;" colspan="4"><strong style="font-size:13px;">PAT</strong></td>
                                         <td style="text-align: center;" colspan="4"><strong style="font-size:13px;">SAT</strong></td>
                                          <td style="text-align: center;" colspan="4"><strong style="font-size:13px;">IT</strong></td>
                                           <td style="text-align: center;" colspan="4"><strong style="font-size:13px;">SIT</strong></td>
                                    </tr>
                                   <tr>
                                        <td style="text-align: center;"><strong style="font-size:13px;"></strong></td>
                                        <td style="text-align: center;"><strong style="font-size:13px;">Total</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Pass</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Incomplete</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Fail</strong></td>
                                         <td style="text-align: center;"><strong style="font-size:13px;">Total</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Pass</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Incomplete</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Fail</strong></td>
                                         <td style="text-align: center;"><strong style="font-size:13px;">Total</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Pass</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Incomplete</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Fail</strong></td>
                                         <td style="text-align: center;"><strong style="font-size:13px;">Total</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Pass</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Incomplete</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Fail</strong></td>
                                         <td style="text-align: center;"><strong style="font-size:13px;">Total</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Pass</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Incomplete</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Fail</strong></td>
                                    </tr>
                                    <tr>
                                    <td style=" font-size:13px; text-align: center; width: 100%;" colspan="21">NO DATA AVAILABLE</td>
                                   </tr>
                                </tbody>
                                </table>
                                </td>
                                </tr>
                        </tbody>
                       </table>
EOD;
            }
        }else{
            $testingETDE = <<<EOD
                    <table style="width: 100%; margin-top:10px;" border="1" cellspacing="2" cellpadding="1" height="400mm">
                        <tbody>  
                                <tr>
                                <td style="width: 100%;">
                                  <h2 style="text-align: center;  font-size:15px;">Testing - Completion Percentage of 58 Trains ( Testing Report ) :AS Of [ <span style="color:#D64627;"> $date </span> ]</h2>
                                   <table style="width: 100%;" border="0.2" cellspacing="2" cellpadding="1">
                                   <tbody>
                                    <tr>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Train NO</strong></td>
                                        <td style="text-align: center;" colspan="4"><strong style="font-size:13px;">STATIC TEST</strong></td>
                                        <td style="text-align: center;" colspan="4"><strong style="font-size:13px;">PAT</strong></td>
                                         <td style="text-align: center;" colspan="4"><strong style="font-size:13px;">SAT</strong></td>
                                          <td style="text-align: center;" colspan="4"><strong style="font-size:13px;">IT</strong></td>
                                           <td style="text-align: center;" colspan="4"><strong style="font-size:13px;">SIT</strong></td>
                                    </tr>
                                   <tr>
                                        <td style="text-align: center;"><strong style="font-size:13px;"></strong></td>
                                        <td style="text-align: center;"><strong style="font-size:13px;">Total</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Pass</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Incomplete</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Fail</strong></td>
                                         <td style="text-align: center;"><strong style="font-size:13px;">Total</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Pass</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Incomplete</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Fail</strong></td>
                                         <td style="text-align: center;"><strong style="font-size:13px;">Total</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Pass</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Incomplete</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Fail</strong></td>
                                         <td style="text-align: center;"><strong style="font-size:13px;">Total</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Pass</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Incomplete</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Fail</strong></td>
                                         <td style="text-align: center;"><strong style="font-size:13px;">Total</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Pass</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Incomplete</strong></td>
                                        <td style="text-align: center; "><strong style="font-size:13px;">Fail</strong></td>
                                    </tr>
                                    <tr>
                                    <td style=" font-size:13px; text-align: center; width: 100%;" colspan="21">NO DATA AVAILABLE</td>
                                   </tr>
                                </tbody>
                                </table>
                                </td>
                                </tr>
                        </tbody>
                       </table>
EOD;
        }
        return $testingETDE;
    }
    public function manufacturingETDE($details,$slug,$category){
        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);
            if (sizeof($obj->{$slug}->{'sys_etde_manufacturing_progress'}) > 0) {
                if ($obj->{$slug}->{'sys_etde_manufacturing_progress'}[0]->{'date'} != "") {
                    $date = $obj->{$slug}->{'sys_etde_manufacturing_progress'}[0]->{'date'};
                } else {
                    $date = date('d-M-y');
                }
                $manufactureETDE = <<<EOD
                 <table style="width: 100%; margin-top:10px;" border="1" cellpadding="1" height="400mm">
                        <tbody>  
                         <tr>
                               <td style="width: 100%;">
                                 <h2 style="text-align: center;  font-size:15px;">MANUFACTURING PROGRESS :AS Of [ <span style="color:#D64627;"> $date </span> ]</h2>
                               </td>
                          </tr>
                              <tr>
                                 
                                                   
                                                 
EOD;
                $manufactureETDE .= <<<EOD
                                    <td style="width: 50%;">
                                    <h3 style="text-align: center;  font-size:15px;">SITE ONE</h3>
                                    <table style="width: 100%;" border="1"  cellpadding="1" >
                                    <tbody>
                                 
EOD;
                for ($i = 1; $i < sizeof($obj->{$slug}->{'sys_etde_manufacturing_progress'}); $i++) {
                    if(($obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'site_name'})=="site1"){
                        $car1perc=0;
                        $car2perc=0;
                        $car3perc=0;
                        $car4perc=0;
                        $train=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'train_no'};
                        $car1=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_1_no'};
                        $car1Per=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_1_percentage'};
                        $car2=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_2_no'};
                        $car2Per=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_2_percentage'};
                        $car3=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_3_no'};
                        $car3Per=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_3_percentage'};
                        $car4=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_4_no'};
                        $car4Per=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_4_percentage'};
                        $rolled=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'date_rolled_out'};
                        $rev=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'rev_no'};
                        if(is_numeric($car1Per)){
                          $car1perc=  $car1Per;
                        }
                        if(is_numeric($car2Per)){
                            $car2perc=  $car2Per;
                        }
                        if(is_numeric($car3Per)){
                            $car3perc=  $car3Per;
                        }
                        if(is_numeric($car4Per)){
                            $car4perc=  $car4Per;
                        }
                        $totalPerc=round((($car1perc + $car2perc + $car3perc + $car4perc)/4),2);
                        $manufactureETDE .= <<<EOD
                                    <tr>
                                    <td  style="width: 15%; font-size:12px; text-align: center; " rowspan="2">TRAIN $train</td>
                                    <td  style="width: 10%; font-size:12px; text-align: center;" >$car1</td>
                                    <td  style="width: 10%; font-size:12px; text-align: center;" >$car2</td>
                                    <td   style="width:10%; font-size:12px; text-align: center;">$car3</td>
                                    <td  style="width: 10%; font-size:12px; text-align: center;">$car4</td>
                                    <td  style="width: 15%; font-size:12px; text-align: center;">ROLLEDOUT</td>
                                    <td  style="width: 15%; font-size:12px; text-align: center;">REV.</td>
                                    <td  style="width: 15%; font-size:12px; text-align: center;">PROGRSS</td>
                                    </tr>
                                    <tr>
                                    <td  style="width: 10%; font-size:12px; text-align: center;" >$car1Per%</td>
                                    <td  style="width: 10%; font-size:12px; text-align: center;" >$car2Per%</td>
                                    <td   style="width:10%; font-size:12px; text-align: center;">$car3Per%</td>
                                    <td  style="width: 10%; font-size:12px; text-align: center;">$car4Per%</td>
                                    <td  style="width: 15%; font-size:12px; text-align: center;">$rolled</td>
                                    <td  style="width: 15%; font-size:12px; text-align: center;">$rev</td>
                                 
EOD;
                        if($totalPerc < 50){
                            $manufactureETDE .= <<<EOD
                                    <td  style="width: 15%; font-size:12px; text-align: center;  background-color:#ff66a3;">$totalPerc%</td>
                                    </tr>
                                  
                                 
EOD;
                        }else if($totalPerc >= 50 && $totalPerc < 100){
                            $manufactureETDE .= <<<EOD
                                    <td  style="width: 15%; font-size:12px; text-align: center;  background-color:#ffd633;">$totalPerc%</td>
                                    </tr>
                                  
                                 
EOD;
                        }else if($totalPerc == 100){
                            $manufactureETDE .= <<<EOD
                                    <td  style="width: 15%; font-size:12px; text-align: center;  background-color:#70db70;">$totalPerc%</td>
                                    </tr>
                                  
                                 
EOD;
                        }else{
                            $manufactureETDE .= <<<EOD
                                    <td  style="width: 15%; font-size:12px; text-align: center;">$totalPerc%</td>
                                    </tr>
                                 
EOD;
                        }
                    }
                }
                $manufactureETDE .= <<<EOD
                                    </tbody>
                                    </table>
                                     </td>
                                  
                                 
EOD;
                //TWO
                $manufactureETDE .= <<<EOD
               
                                   <td style="width: 50%;">
                                   <h3 style="text-align: center;  font-size:15px;">SITE TWO</h3>
                                    <table style="width: 100%;" border="1"  cellpadding="1" >
                                    <tbody>
                                    
EOD;
                for ($i = 1; $i < sizeof($obj->{$slug}->{'sys_etde_manufacturing_progress'}); $i++) {
                    if(($obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'site_name'})=="site2"){
                        $car1perc=0;
                        $car2perc=0;
                        $car3perc=0;
                        $car4perc=0;
                        $train=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'train_no'};
                        $car1=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_1_no'};
                        $car1Per=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_1_percentage'};
                        $car2=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_2_no'};
                        $car2Per=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_2_percentage'};
                        $car3=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_3_no'};
                        $car3Per=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_3_percentage'};
                        $car4=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_4_no'};
                        $car4Per=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_4_percentage'};
                        $rolled=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'date_rolled_out'};
                        $rev=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'rev_no'};
                        if(is_numeric($car1Per)){
                            $car1perc=  $car1Per;
                        }
                        if(is_numeric($car2Per)){
                            $car2perc=  $car2Per;
                        }
                        if(is_numeric($car3Per)){
                            $car3perc=  $car3Per;
                        }
                        if(is_numeric($car4Per)){
                            $car4perc=  $car4Per;
                        }
                        $totalPerc=round((($car1perc + $car2perc + $car3perc + $car4perc)/4),2);
                        $manufactureETDE .= <<<EOD
                                  <tr>
                                    <td  style="width: 15%; font-size:12px; text-align: center; " rowspan="2">TRAIN $train</td>
                                    <td  style="width: 10%; font-size:12px; text-align: center;" >$car1</td>
                                    <td  style="width: 10%; font-size:12px; text-align: center;" >$car2</td>
                                    <td   style="width:10%; font-size:12px; text-align: center;">$car3</td>
                                    <td  style="width: 10%; font-size:12px; text-align: center;">$car4</td>
                                    <td  style="width: 15%; font-size:12px; text-align: center;">ROLLEDOUT</td>
                                    <td  style="width: 15%; font-size:12px; text-align: center;">REV.</td>
                                    <td  style="width: 15%; font-size:12px; text-align: center;">PROGRSS</td>
                                    </tr>
                                    <tr>
                                    <td  style="width: 10%; font-size:12px; text-align: center;" >$car1Per%</td>
                                    <td  style="width: 10%; font-size:12px; text-align: center;" >$car2Per%</td>
                                    <td   style="width:10%; font-size:12px; text-align: center;">$car3Per%</td>
                                    <td  style="width: 10%; font-size:12px; text-align: center;">$car4Per%</td>
                                    <td  style="width: 15%; font-size:12px; text-align: center;">$rolled</td>
                                    <td  style="width: 15%; font-size:12px; text-align: center;">$rev</td>
                                 
EOD;
                        if($totalPerc < 50){
                            $manufactureETDE .= <<<EOD
                                    <td  style="width: 15%; font-size:12px; text-align: center;  background-color:#ff66a3;">$totalPerc%</td>
                                    </tr>
                                  
                                 
EOD;
                        }else if($totalPerc >= 50 && $totalPerc < 100){
                            $manufactureETDE .= <<<EOD
                                    <td  style="width: 15%; font-size:12px; text-align: center;  background-color:#ffd633;">$totalPerc%</td>
                                    </tr>
                                  
                                 
EOD;
                        }else if($totalPerc == 100){
                            $manufactureETDE .= <<<EOD
                                    <td  style="width: 15%; font-size:12px; text-align: center;  background-color:#70db70;">$totalPerc%</td>
                                    </tr>
                                  
                                 
EOD;
                        }else{
                            $manufactureETDE .= <<<EOD
                                    <td  style="width: 15%; font-size:12px; text-align: center;">$totalPerc%</td>
                                    </tr>
                                 
EOD;
                        }
                    }
                }
                $manufactureETDE .= <<<EOD
                                    </tbody>
                                    </table>
                                   </td>
EOD;
                //ROW
                $manufactureETDE .= <<<EOD
                                   </tr>
                                 
EOD;
                //Three
                $manufactureETDE .= <<<EOD
                                   <tr>
                                   <td style="width: 50%;">
                                   <h3 style="text-align: center;  font-size:15px;">SITE THREE</h3>
                                    <table style="width: 100%;" border="1" cellpadding="1" >
                                    <tbody>
EOD;
                for ($i = 1; $i < sizeof($obj->{$slug}->{'sys_etde_manufacturing_progress'}); $i++) {
                    if(($obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'site_name'})=="site3"){
                        $car1perc=0;
                        $car2perc=0;
                        $car3perc=0;
                        $car4perc=0;
                        $train=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'train_no'};
                        $car1=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_1_no'};
                        $car1Per=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_1_percentage'};
                        $car2=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_2_no'};
                        $car2Per=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_2_percentage'};
                        $car3=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_3_no'};
                        $car3Per=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_3_percentage'};
                        $car4=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_4_no'};
                        $car4Per=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_4_percentage'};
                        $rolled=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'date_rolled_out'};
                        $rev=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'rev_no'};
                        if(is_numeric($car1Per)){
                            $car1perc=  $car1Per;
                        }
                        if(is_numeric($car2Per)){
                            $car2perc=  $car2Per;
                        }
                        if(is_numeric($car3Per)){
                            $car3perc=  $car3Per;
                        }
                        if(is_numeric($car4Per)){
                            $car4perc=  $car4Per;
                        }
                        $totalPerc=round((($car1perc + $car2perc + $car3perc + $car4perc)/4),2);
                        $manufactureETDE .= <<<EOD
                                    <tr>
                                    <td  style="width: 15%; font-size:12px; text-align: center; " rowspan="2">TRAIN $train</td>
                                    <td  style="width: 10%; font-size:12px; text-align: center;" >$car1</td>
                                    <td  style="width: 10%; font-size:12px; text-align: center;" >$car2</td>
                                    <td   style="width:10%; font-size:12px; text-align: center;">$car3</td>
                                    <td  style="width: 10%; font-size:12px; text-align: center;">$car4</td>
                                    <td  style="width: 15%; font-size:12px; text-align: center;">ROLLEDOUT</td>
                                    <td  style="width: 15%; font-size:12px; text-align: center;">REV.</td>
                                    <td  style="width: 15%; font-size:12px; text-align: center;">PROGRSS</td>
                                    </tr>
                                    <tr>
                                    <td  style="width: 10%; font-size:12px; text-align: center;" >$car1Per%</td>
                                    <td  style="width: 10%; font-size:12px; text-align: center;" >$car2Per%</td>
                                    <td   style="width:10%; font-size:12px; text-align: center;">$car3Per%</td>
                                    <td  style="width: 10%; font-size:12px; text-align: center;">$car4Per%</td>
                                    <td  style="width: 15%; font-size:12px; text-align: center;">$rolled</td>
                                    <td  style="width: 15%; font-size:12px; text-align: center;">$rev</td>
                                 
EOD;
                        if($totalPerc < 50){
                            $manufactureETDE .= <<<EOD
                                    <td  style="width: 15%; font-size:12px; text-align: center;  background-color:#ff66a3;">$totalPerc%</td>
                                    </tr>
                                  
                                 
EOD;
                        }else if($totalPerc >= 50 && $totalPerc < 100){
                            $manufactureETDE .= <<<EOD
                                    <td  style="width: 15%; font-size:12px; text-align: center;  background-color:#ffd633;">$totalPerc%</td>
                                    </tr>
                                  
                                 
EOD;
                        }else if($totalPerc == 100){
                            $manufactureETDE .= <<<EOD
                                    <td  style="width: 15%; font-size:12px; text-align: center;  background-color:#70db70;">$totalPerc%</td>
                                    </tr>
                                  
                                 
EOD;
                        }else{
                            $manufactureETDE .= <<<EOD
                                    <td  style="width: 15%; font-size:12px; text-align: center;">$totalPerc%</td>
                                    </tr>
                                 
EOD;
                        }
                    }
                }
                $manufactureETDE .= <<<EOD
                                    </tbody>
                                    </table>
                                   </td>
                                   
EOD;
                //FOUR
                $manufactureETDE .= <<<EOD
                                   <td style="width: 50%;">
                                   <h3 style="text-align: center;  font-size:15px;">SITE FOUR</h3>
                                    <table style="width: 100%;" border="1"  cellpadding="1" >
                                    <tbody>
EOD;
                for ($i = 1; $i < sizeof($obj->{$slug}->{'sys_etde_manufacturing_progress'}); $i++) {
                    if(($obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'site_name'})=="site4"){
                        $car1perc=0;
                        $car2perc=0;
                        $car3perc=0;
                        $car4perc=0;
                        $train=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'train_no'};
                        $car1=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_1_no'};
                        $car1Per=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_1_percentage'};
                        $car2=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_2_no'};
                        $car2Per=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_2_percentage'};
                        $car3=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_3_no'};
                        $car3Per=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_3_percentage'};
                        $car4=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_4_no'};
                        $car4Per=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'car_4_percentage'};
                        $rolled=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'date_rolled_out'};
                        $rev=$obj->{$slug}->{'sys_etde_manufacturing_progress'}[$i]->{'rev_no'};
                        if(is_numeric($car1Per)){
                            $car1perc=  $car1Per;
                        }
                        if(is_numeric($car2Per)){
                            $car2perc=  $car2Per;
                        }
                        if(is_numeric($car3Per)){
                            $car3perc=  $car3Per;
                        }
                        if(is_numeric($car4Per)){
                            $car4perc=  $car4Per;
                        }
                        $totalPerc=round((($car1perc + $car2perc + $car3perc + $car4perc)/4),2);
                        $manufactureETDE .= <<<EOD
                                     <tr>
                                    <td  style="width: 15%; font-size:12px; text-align: center; " rowspan="2">TRAIN $train</td>
                                    <td  style="width: 10%; font-size:12px; text-align: center;" >$car1</td>
                                    <td  style="width: 10%; font-size:12px; text-align: center;" >$car2</td>
                                    <td   style="width:10%; font-size:12px; text-align: center;">$car3</td>
                                    <td  style="width: 10%; font-size:12px; text-align: center;">$car4</td>
                                    <td  style="width: 15%; font-size:12px; text-align: center;">ROLLEDOUT</td>
                                    <td  style="width: 15%; font-size:12px; text-align: center;">REV.</td>
                                    <td  style="width: 15%; font-size:12px; text-align: center;">PROGRSS</td>
                                    </tr>
                                    <tr>
                                    <td  style="width: 10%; font-size:12px; text-align: center;" >$car1Per%</td>
                                    <td  style="width: 10%; font-size:12px; text-align: center;" >$car2Per%</td>
                                    <td   style="width:10%; font-size:12px; text-align: center;">$car3Per%</td>
                                    <td  style="width: 10%; font-size:12px; text-align: center;">$car4Per%</td>
                                    <td  style="width: 15%; font-size:12px; text-align: center;">$rolled</td>
                                    <td  style="width: 15%; font-size:12px; text-align: center;">$rev</td>
                                 
EOD;
                        if($totalPerc < 50){
                            $manufactureETDE .= <<<EOD
                                    <td  style="width: 15%; font-size:12px; text-align: center;  background-color:#ff66a3;">$totalPerc%</td>
                                    </tr>
                                  
                                 
EOD;
                        }else if($totalPerc >= 50 && $totalPerc < 100){
                            $manufactureETDE .= <<<EOD
                                    <td  style="width: 15%; font-size:12px; text-align: center;  background-color:#ffd633;">$totalPerc%</td>
                                    </tr>
                                  
                                 
EOD;
                        }else if($totalPerc == 100){
                            $manufactureETDE .= <<<EOD
                                    <td  style="width: 15%; font-size:12px; text-align: center;  background-color:#70db70;">$totalPerc%</td>
                                    </tr>
                                  
                                 
EOD;
                        }else{
                            $manufactureETDE .= <<<EOD
                                    <td  style="width: 15%; font-size:12px; text-align: center;">$totalPerc%</td>
                                    </tr>
                                 
EOD;
                        }
                    }
                }
                $manufactureETDE .= <<<EOD
                                    </tbody>
                                    </table>
                                   </td>
                              
EOD;
                //LAST
                $manufactureETDE .= <<<EOD
                                  
                               </tr>
                        </tbody>
                       </table>
EOD;
            }else{
                $manufactureETDE = <<<EOD
                 <table style="width: 100%; margin-top:10px;" border="1" cellspacing="2" cellpadding="1" height="400mm">
                        <tbody>  
                         <tr>
                               <td style="width: 100%;">
                                 <h2 style="text-align: center;  font-size:15px;">MANUFACTURING PROGRESS :AS Of [ <span style="color:#D64627;"> - </span> ]</h2>
                               </td>
                          </tr>
                              <tr>
                                 
                                                   
                                                 
EOD;
                $manufactureETDE .= <<<EOD
                                    <td style="width: 50%;">
                                    <h3 style="text-align: center;  font-size:15px;">SITE ONE</h3>
                                    <table style="width: 100%;" border="1" cellspacing="2" cellpadding="1" >
                                    <tbody>
                                 
EOD;
                $manufactureETDE .= <<<EOD
                                    <tr>
                                    <td  style="width: 15%; text-align: center; " rowspan="2">NO DATA AVAILABLE</td>
                                    </tr>
                                  
                                 
EOD;
                $manufactureETDE .= <<<EOD
                                    </tbody>
                                    </table>
                                     </td>
                                  
                                 
EOD;
                //TWO
                $manufactureETDE .= <<<EOD
               
                                   <td style="width: 50%;">
                                   <h3 style="text-align: center;  font-size:15px;">SITE TWO</h3>
                                    <table style="width: 100%;" border="1" cellspacing="2" cellpadding="1" >
                                    <tbody>
                                    
EOD;
                $manufactureETDE .= <<<EOD
                                    <tr>
                                  <td  style="width: 15%; text-align: center; " rowspan="2">NO DATA AVAILABLE</td>
                                    </tr>
                                   
EOD;
                $manufactureETDE .= <<<EOD
                                    </tbody>
                                    </table>
                                   </td>
EOD;
                //ROW
                $manufactureETDE .= <<<EOD
                                   </tr>
                                 
EOD;
                //Three
                $manufactureETDE .= <<<EOD
                                   <tr>
                                   <td style="width: 50%;">
                                   <h3 style="text-align: center;  font-size:15px;">SITE THREE</h3>
                                    <table style="width: 100%;" border="1" cellspacing="2" cellpadding="1" >
                                    <tbody>
EOD;
                $manufactureETDE .= <<<EOD
                                    <tr>
                                   <td  style="width: 15%; text-align: center; " rowspan="2">NO DATA AVAILABLE</td>
                                    </tr>
                                   
EOD;
                $manufactureETDE .= <<<EOD
                                    </tbody>
                                    </table>
                                   </td>
                                   
EOD;
                //FOUR
                $manufactureETDE .= <<<EOD
                                   <td style="width: 50%;">
                                   <h3 style="text-align: center;  font-size:15px;">SITE FOUR</h3>
                                    <table style="width: 99%;" border="1" cellspacing="2" cellpadding="1" >
                                    <tbody>
EOD;
                $manufactureETDE .= <<<EOD
                                    <tr>
                                    <td  style="width: 15%; text-align: center; " rowspan="2">NO DATA AVAILABLE</td>
                                    </tr>
EOD;
                $manufactureETDE .= <<<EOD
                                    </tbody>
                                    </table>
                                   </td>
                              
EOD;
                //LAST
                $manufactureETDE .= <<<EOD
                                  
                               </tr>
                        </tbody>
                       </table>
EOD;
            }
        }
        else{
            $manufactureETDE = <<<EOD
                 <table style="width: 100%; margin-top:10px;" border="1" cellspacing="2" cellpadding="1" height="400mm">
                        <tbody>  
                         <tr>
                               <td style="width: 100%;">
                                 <h2 style="text-align: center;  font-size:15px;">MANUFACTURING PROGRESS :AS Of [ <span style="color:#D64627;"> - </span> ]</h2>
                               </td>
                          </tr>
                              <tr>
                                 
                                                   
                                                 
EOD;
            $manufactureETDE .= <<<EOD
                                    <td style="width: 50%;">
                                    <h3 style="text-align: center;  font-size:15px;">SITE ONE</h3>
                                    <table style="width: 100%;" border="1" cellspacing="2" cellpadding="1" >
                                    <tbody>
                                 
EOD;
            $manufactureETDE .= <<<EOD
                                    <tr>
                                    <td  style="width: 15%; text-align: center; " rowspan="2">NO DATA AVAILABLE</td>
                                    </tr>
                                  
                                 
EOD;
            $manufactureETDE .= <<<EOD
                                    </tbody>
                                    </table>
                                     </td>
                                  
                                 
EOD;
            //TWO
            $manufactureETDE .= <<<EOD
               
                                   <td style="width: 50%;">
                                   <h3 style="text-align: center;  font-size:15px;">SITE TWO</h3>
                                    <table style="width: 100%;" border="1" cellspacing="2" cellpadding="1" >
                                    <tbody>
                                    
EOD;
            $manufactureETDE .= <<<EOD
                                    <tr>
                                    <td  style="width: 15%; text-align: center; " rowspan="2">NO DATA AVAILABLE</td>
                                    </tr>
                                   
EOD;
            $manufactureETDE .= <<<EOD
                                    </tbody>
                                    </table>
                                   </td>
EOD;
            //ROW
            $manufactureETDE .= <<<EOD
                                   </tr>
                                 
EOD;
            //Three
            $manufactureETDE .= <<<EOD
                                   <tr>
                                   <td style="width: 50%;">
                                   <h3 style="text-align: center;  font-size:15px;">SITE THREE</h3>
                                    <table style="width: 100%;" border="1" cellspacing="2" cellpadding="1" >
                                    <tbody>
EOD;
            $manufactureETDE .= <<<EOD
                                    <tr>
                                    <td  style="width: 15%; text-align: center; " rowspan="2">NO DATA AVAILABLE</td>
                                    </tr>
                                   
EOD;
            $manufactureETDE .= <<<EOD
                                    </tbody>
                                    </table>
                                   </td>
                                   
EOD;
            //FOUR
            $manufactureETDE .= <<<EOD
                                   <td style="width: 50%;">
                                   <h3 style="text-align: center;  font-size:15px;">SITE FOUR</h3>
                                    <table style="width: 100%;" border="1" cellspacing="2" cellpadding="1" >
                                    <tbody>
EOD;
            $manufactureETDE .= <<<EOD
                                    <tr>
                                     <td  style="width: 15%; text-align: center; " rowspan="2">NO DATA AVAILABLE</td>
                                    </tr>
EOD;
            $manufactureETDE .= <<<EOD
                                    </tbody>
                                    </table>
                                   </td>
                              
EOD;
            //LAST
            $manufactureETDE .= <<<EOD
                                  
                               </tr>
                        </tbody>
                       </table>
EOD;
        }

    return $manufactureETDE;
    }
  public function lineChart($details,$slug,$category){
      $date = date('d-M-y');
      if ($details != null) {
          foreach ($details as $key => $val) {
              $json = $val['value'];
          }
          $dates=array();
          $target=array();
          $done=array();
          $obj = json_decode($json);
          if (sizeof($obj->{$slug}->{'sys_etde_overall_open_item_closure'}) > 0) {
              if ($obj->{$slug}->{'sys_etde_overall_open_item_closure'}[0]->{'date'} != "") {
                  $date = $obj->{$slug}->{'sys_etde_overall_open_item_closure'}[0]->{'date'};
              } else {
                  $date = date('d-M-y');
              }
              foreach ($obj->{$slug}->{'sys_etde_overall_open_item_closure'} as $key => $val) {
                  foreach ($val as $key1 => $val1) {
                      if($key1=="outstanding"){
                          array_push ($dates,$val1[0]);
                          array_push ($done,$val1[1]);
                          array_push ($target,$val1[2]);
                      }
                  }
              }
              require_once (APPPATH.'/libraries/jpgraph/jpgraph.php');
              require_once (APPPATH.'/libraries/jpgraph/jpgraph_line.php');
              $datay1 = $target;
              $datay2 = $done;
              $graph = new Graph(900,350);
              $graph->SetScale("textlin");

              $theme_class=new UniversalTheme;

              $graph->SetTheme($theme_class);
              $graph->img->SetAntiAliasing(false);
              $graph->img->SetMargin(100,30,30,100);
              $graph->xgrid->Show();
              $graph->xgrid->SetLineStyle("solid");
              $graph->xaxis->SetTickLabels($dates);
              $graph->yaxis->SetFont( FF_ARIAL,FS_BOLD,10);
              $graph->xaxis->SetFont( FF_ARIAL,FS_BOLD,10);

// Create the first line
              $p1 = new LinePlot($datay1);
              $graph->Add($p1);
              $p1->SetWeight(3);
              $p1->SetColor('deepskyblue');
              $p1->SetLegend('Target');
              $p1->mark->SetType(MARK_FILLEDCIRCLE);
              $p1->mark->SetColor('black');
              $p1->mark->SetFillColor('deepskyblue');
              $p1->mark->SetWidth(4);

// Create the second line
              $p2 = new LinePlot($datay2);
              $graph->Add($p2);
              $p2->SetWeight(3);
              $p2->SetColor('aquamarine1');
              $p2->SetLegend('Closed Job');
              $p2->mark->SetType(MARK_FILLEDCIRCLE);
              $p2->mark->SetColor('black');
              $p2->mark->SetFillColor('aquamarine1');
              $p2->mark->SetWidth(4);
              $graph->xaxis->SetLabelAngle(20);
              $graph->legend->SetFont(FF_ARIAL,FS_BOLD,12);
              $graph->legend->SetFrameWeight(1);
              $graph->legend->SetAbsPos(10,20,'right','top');
              if(file_exists('lineEt.png')){
                  if(unlink('lineEt.png')) {
                      $graph->Stroke('lineEt.png');
                  }
              }else{
                  $graph->Stroke('lineEt.png');
              }
              $image="lineEt.png";
              $OverallOpen = <<<EOD
                              <td style="width: 50%;">
                               <table style="width: 100%;">
                                   <tbody>
                                            <tr>
                                            <td style="width: 100%; text-align:center; vertical-align: middle; font-size:15px;"><strong>Outstanding Item Completion Progress [ <span style="color:#D64627;"> $date  </span> ]</strong></td>
                                            </tr>
                                            <tr>
                                            <td  align="center"><img src="$image"  width="900" height="350"></td>
                                            </tr>
                                            <tr>
                                           <td>
                                           <table style="width: 98%;" border="1"  cellpadding="1">
                                            <tbody>
                                            <tr>
                                            <td style=" font-size:11px; text-align:center;" >DATE</td>
                                           
                                               
EOD;
              for($i=0;$i<sizeof($dates);$i++) {
                  $dateValue = $dates[$i];
                  $OverallOpen .= <<<EOD
                                            <td style=" font-size:11px; text-align:center;">$dateValue</td>
                                            
                                               
EOD;
              }
              $OverallOpen .= <<<EOD
                            </tr>
                                            <tr>
                                            <td style=" font-size:11px; text-align:center;" >TARGET</td>
                                           
                                               
EOD;
              for($i=0;$i<sizeof($datay1);$i++) {
                  $tar= $datay1[$i];
                  $OverallOpen .= <<<EOD
                                            <td style=" font-size:11px; text-align:center;">$tar</td>
EOD;
              }
              $OverallOpen .= <<<EOD
                                        </tr>
                                            <tr>
                                            <td style=" font-size:11px; text-align:center; ">JOBS DONE</td>
                                           
                                               
EOD;
              for($i=0;$i<sizeof($datay2);$i++) {
                  $done = $datay2[$i];
                  $OverallOpen .= <<<EOD
                                           <td style=" font-size:11px; text-align:center;">$done</td>
EOD;
              }
              $OverallOpen .= <<<EOD
                            </tr>
                                            </tbody>
                                            </table>
                                           </td>
                                            </tr>
                                            <tr>
                                            <td >
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                               </td>
                            </tr>
                          </tbody>
                         </table> 
                                               
EOD;
          }else{
              $OverallOpen = <<<EOD
                              <td style="width: 50%;">
                                        <table style="width: 100%;">
                                       <tbody>
                                          <tr>
                                            <td style="width: 100%; text-align:center; vertical-align: middle; font-size:15px;"><strong>Outstanding Item Completion Progress [ <span style="color:#D64627;"> $date  </span> ]</strong></td>
                                            </tr>
                                           <tr>
                                            <td  align="center"><img src=""  width="900" height="350"></td>
                                         </tr>
                                        </tbody>
                                     </table>
                              </td>
                              </tr>
                              </tbody>
                              </table>
                                           
                                               
EOD;

          }
          }else{
          $OverallOpen = <<<EOD
                               <td style="width: 50%;">
                                        <table style="width: 100%;">
                                       <tbody>
                                          <tr>
                                           <td style="width: 100%; text-align:center; vertical-align: middle; font-size:15px;"><strong>Outstanding Item Completion Progress [ <span style="color:#D64627;"> $date  </span> ]</strong></td>
                                            </tr>
                                           <tr>
                                            <td  align="center"><img src=""  width="900" height="350"></td>
                                         </tr>
                                        </tbody>
                                     </table>
                              </td>
                              </tr>
                              </tbody>
                              </table>
                                           
                                               
EOD;

      }

      return $OverallOpen;
  }
    public function barChart($details,$slug,$category) {
        $date = date('d-M-y');
        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);
            $open=array();
            $close=array();
            $train=array();

            if (sizeof($obj->{$slug}->{'sys_etde_overall_open_item_closure'}) > 0) {
                if ($obj->{$slug}->{'sys_etde_overall_open_item_closure'}[0]->{'date'} != "") {
                    $date = $obj->{$slug}->{'sys_etde_overall_open_item_closure'}[0]->{'date'};
                } else {
                    $date = date('d-M-y');
                }
                foreach ($obj->{$slug}->{'sys_etde_overall_open_item_closure'} as $key => $val) {
                    foreach ($val as $key1 => $val1) {
                    if($key1=="open"){
                        array_push ($train,$val1[0]);
                        $openAct=round(($val1[1]/($val1[1]+$val1[2]))*100,0);
                        $closeAct=round(($val1[2]/($val1[1]+$val1[2]))*100,0);
                        array_push ($open,$openAct);
                        array_push ($close,$closeAct);
                    }
                    }
                }
                require_once (APPPATH.'/libraries/jpgraph/jpgraph.php');
                require_once (APPPATH.'/libraries/jpgraph/jpgraph_bar.php');
                setlocale (LC_ALL, 'et_EE.ISO-8859-1');
                $data1y=$open;
                $data2y=$close;
                $data3y=$train;
                $graph = new Graph(650,350);
                $graph->SetScale("textlin");
                $graph->SetShadow();

                $graph->img->SetMargin(50,30,30,40);
                $graph->ygrid->Show(false, false);
                $b2plot = new BarPlot($data2y);
                $b1plot = new BarPlot($data1y);
                $gbplot = new AccBarPlot(array($b2plot,$b1plot));
                $graph->Add($gbplot);

                $b1plot->SetFillColor('deepskyblue');
                $b1plot->SetLegend('Open Job');
                $b2plot->SetFillColor('aquamarine1');
                $b2plot->SetLegend('Closed Job');

                $graph->xaxis->SetTickLabels($data3y);

                $graph->yaxis->SetFont( FF_ARIAL,FS_BOLD,10);
                $graph->xaxis->SetFont( FF_ARIAL,FS_BOLD,10);
                $graph->yaxis->title->Set('No Of Jobs Done(%)');
                $graph->legend->SetColumns(2);
                $graph->legend->SetAbsPos(20,20,'right','bottom');
                $graph->legend->SetFrameWeight(1);
                if(file_exists('testbar.png')){
                    if(unlink('testbar.png')) {
                        $graph->Stroke('testbar.png');
                    }
                }else{
                    $graph->Stroke('testbar.png');
                }
                $Image="testbar.png";
                $Overall = <<<EOD
                  <table style="width: 100%; margin-top:10px;" border="1"  cellpadding="1" height="400mm">
                        <tbody>  
                         <tr>
                            <td style="width: 50%;">
                            <table style="width: 100%;">
                           <tbody>
                              <tr>
                                 <td style="width: 100%; text-align:center; vertical-align: middle; font-size:15px;"><strong>Overall Progress Per Train [ <span style="color:#D64627;">  $date  </span> ]</strong></td>
                              </tr>
                               <tr>
                                <td  align="center"><img src="$Image"  width="900" height="350"></td>
                                
                            </tr>
                            <tr>
                            <td>
                                <table style="width: 99%;" border="1" cellpadding="1">
                                <tbody>
                                <tr>
                                <td style=" font-size:11px; text-align:center;" >TRAIN</td>
EOD;
                for($i=0;$i<sizeof($data3y);$i++){
                    $trainName=$data3y[$i];
                    $Overall .= <<<EOD
                                <td >$trainName</td>
                                
EOD;
                }

                $Overall .= <<<EOD
                </tr>
                                <tr>
                                <td style=" font-size:11px; text-align:center;" >OPEN</td>
EOD;
                for($i=0;$i<sizeof($data1y);$i++) {
                    $openName = $data1y[$i];
                    $Overall .= <<<EOD

                                <td style=" font-size:11px; text-align:center;" >$openName%</td>
EOD;
                }
                $Overall .= <<<EOD
                                </tr>
                                <tr>
                                <td style=" font-size:11px; text-align:center;" >CLOSED</td>
EOD;
                for($i=0;$i<sizeof($data2y);$i++) {
                    $closeName = $data2y[$i];
                    $Overall .= <<<EOD
                                <td style=" font-size:11px; text-align:center;">$closeName%</td>
EOD;
                }

                $Overall .= <<<EOD
                                </tr>
                                </tbody>
                                </table>
                                </td>
                            </tr>
                            </tbody>
                             </table>
                             </td>       
EOD;

            }else{
                $Overall = <<<EOD
                 <table style="width: 100%; margin-top:10px;" border="1" cellspacing="2" cellpadding="1" height="400mm">
                        <tbody>  
                         <tr>
                            <td style="width: 50%;">
                            <table style="width: 100%;">
                           <tbody>
                              <tr>
                                 <td style="width: 100%; text-align:center; vertical-align: middle; font-size:15px;"><strong>Overall Progress Per Train [ <span style="color:#D64627;"> $date  </span> ]</strong></td>
                              </tr>
                               <tr>
                                <td  align="center"><img src=""  width="900" height="350"></td>
                            </tr>
                            </tbody>
                        </table>
                             </td>
                          
                                                   
                                                 
EOD;
            }

            }else{
            $Overall = <<<EOD
                 <table style="width: 100%; margin-top:10px;" border="1" cellspacing="2" cellpadding="1" height="400mm">
                        <tbody>  
                         <tr>
                            <td style="width: 50%;">
                            <table style="width: 100%;">
                           <tbody>
                              <tr>
                                 <td style="width: 100%; text-align:center; vertical-align: middle; font-size:15px;"><strong>Overall Progress Per Train [ <span style="color:#D64627;"> $date  </span> ]</strong></td>
                              </tr>
                               <tr>
                                <td  align="center"><img src=""  width="900" height="350"></td>
                            </tr>
                            </tbody>
                        </table>
                             </td>
                            
                                                   
                                                 
EOD;
        }

        return $Overall;
    }
    public function ETDEPhase($details,$slug,$category){
        $date = date('d-M-y');
        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);
            if (sizeof($obj->{$slug}->{'sys_etde_project_timeline'}) > 0) {
                if ($obj->{$slug}->{'sys_etde_project_timeline'}[0]->{'date'} != "") {
                    $date = $obj->{$slug}->{'sys_etde_project_timeline'}[0]->{'date'};
                } else {
                    $date = date('d-M-y');
                }
                $etdePhase = <<<EOD
                 <table style="width: 100%; margin-top:10px;" border="1"  cellpadding="1" height="300mm">
                        <tbody>  
                         <tr>
                            <td style="width: 65%;">
                            <h2 style=" text-align: center;"> Project Timeline  [ <span style="color:#D64627;"> $date </span> ]</h2>
                            <table style="width: 100%;" border=".5"  cellpadding="1">
                           <tbody>
                               <tr>
                                <td style=" font-size:13px; text-align: center;"><strong>PROJECT PHASE</strong></td>
                                <td style=" font-size:13px; text-align: center;" colspan="3"><strong>SAT</strong></td>
                                <td style=" font-size:13px; text-align: center;" colspan="3"><strong>SIT</strong></td>
                                <td style=" font-size:13px; text-align: center;" colspan="3"><strong>TRIAL RUN</strong></td>
                                </tr>
                                <tr>
                                 <td style=" font-size:13px; text-align: center;"></td>
                                <td style=" font-size:13px; text-align: center;">START</td>
                                <td style=" font-size:13px; text-align: center;">VARIANCE</td>
                                <td style=" font-size:13px; text-align: center;">DAY LEFT</td>
                                <td style=" font-size:13px; text-align: center;">START</td>
                                <td style=" font-size:13px; text-align: center;">VARIANCE</td>
                                <td style=" font-size:13px; text-align: center;">DAY LEFT</td>
                                <td style=" font-size:13px; text-align: center;">START</td>
                                <td style=" font-size:13px; text-align: center;">VARIANCE</td>
                                <td style=" font-size:13px; text-align: center;">DAY LEFT</td>
                                </tr>
                                                 
EOD;
                for ($i = 1; $i < sizeof($obj->{$slug}->{'sys_etde_project_timeline'}); $i++) {
                    $phase = $obj->{$slug}->{'sys_etde_project_timeline'}[$i]->{'phase'};
                    $satdate = $obj->{$slug}->{'sys_etde_project_timeline'}[$i]->{'sat_date'};
                    $sitdate = $obj->{$slug}->{'sys_etde_project_timeline'}[$i]->{'sit_date'};
                    $trialdate = $obj->{$slug}->{'sys_etde_project_timeline'}[$i]->{'trial_date'};
                    $tod = date('d-M-y');
                    $diffsat = abs(strtotime($satdate) - strtotime($tod));
                    $diffsit = abs(strtotime($sitdate) - strtotime($tod));
                    $difftr = abs(strtotime($trialdate) - strtotime($tod));
                    if($tod > $satdate){
                        $dayleftsat=0;
                        $variancesat=0;
                    }else{
                        $dayleftsat=floor(($diffsat / (60 * 60 * 24)));
                        $variancesat=floor(($diffsat / (60 * 60 * 24))/7);
                    }
                    if($tod > $sitdate){
                        $dayleftsit=0;
                        $variancesit=0;
                    }else{
                        $dayleftsit=floor(($diffsit / (60 * 60 * 24)));
                        $variancesit=floor(($diffsit / (60 * 60 * 24))/7);
                    }

                    if($tod > $satdate){
                        $daylefttr=0;
                        $variancetr=0;
                    }else{
                        $daylefttr=floor(($difftr / (60 * 60 * 24)));
                        $variancetr=floor(($difftr / (60 * 60 * 24))/7);
                    }
                    $etdePhase .= <<<EOD
                                <tr>
                                <td style=" font-size:13px; text-align: center;">$phase</td>
                                <td style=" font-size:13px; text-align: center;">$satdate</td>
                                <td style=" font-size:13px; text-align: center;">$variancesat.w</td>
                                <td style=" font-size:13px; text-align: center;">$dayleftsat</td>
                                <td style=" font-size:13px; text-align: center;">$sitdate</td>
                                <td style=" font-size:13px; text-align: center;">$variancesit.w</td>
                                <td style=" font-size:13px; text-align: center;">$dayleftsit</td>
                                <td style=" font-size:13px; text-align: center;">$trialdate</td>
                                <td style=" font-size:13px; text-align: center;">$variancetr.w</td>
                                <td style=" font-size:13px; text-align: center;">$daylefttr</td>
                                </tr>        
EOD;
                }
                $etdePhase .= <<<EOD
                            </tbody>
                            </table>
                             </td>         
EOD;
            }else{
                $etdePhase = <<<EOD
                  <table style="width: 100%; margin-top:10px;" border="1" cellspacing="2" cellpadding="1" height="300mm">
                        <tbody>  
                         <tr>
                            <td style="width: 65%;">
                            <h2 style=" text-align: center;"> Project Timeline  [ <span style="color:#D64627;"> $date </span> ]</h2>
                            <table style="width: 100%;" border=".5" cellspacing="2" cellpadding="1">
                           <tbody>
                               <tr>
                                <td style=" font-size:13px; text-align: center;"><strong>Project Phase</strong></td>
                                <td style=" font-size:13px; text-align: center;" colspan="3"><strong>SAT</strong></td>
                                <td style=" font-size:13px; text-align: center;" colspan="3"><strong>SIT</strong></td>
                                <td style=" font-size:13px; text-align: center;" colspan="3"><strong>TRIAL RUN</strong></td>
                                </tr>
                                <tr>
                                <td style=" font-size:13px; text-align: center;" rowspan="2">Phase 1</td>
                                <td style=" font-size:13px; text-align: center;">START</td>
                                <td style=" font-size:13px; text-align: center;">END</td>
                                <td style=" font-size:13px; text-align: center;">DAY LEFT</td>
                                <td style=" font-size:13px; text-align: center;">START</td>
                                <td style=" font-size:13px; text-align: center;">END</td>
                                <td style=" font-size:13px; text-align: center;">DAY LEFT</td>
                                <td style=" font-size:13px; text-align: center;">START</td>
                                <td style=" font-size:13px; text-align: center;">END</td>
                                <td style=" font-size:13px; text-align: center;">DAY LEFT</td>
                                </tr>
                                <tr>
                                <td style=" font-size:13px; text-align: center;" colspan="9" >NO DATA AVAILABLE</td>
                             </tr>
                            </tbody>
                        </table>
                             </td>
                                                 
EOD;
            }
        }else{
            $etdePhase = <<<EOD
                 <table style="width: 100%; margin-top:10px;" border="1" cellspacing="2" cellpadding="1" height="300mm">
                        <tbody>  
                         <tr>
                            <td style="width: 65%;">
                            <h2 style=" text-align: center;"> Project Timeline  [ <span style="color:#D64627;"> $date </span> ]</h2>
                            <table style="width: 100%;" border=".5" cellspacing="2" cellpadding="1">
                           <tbody>
                               <tr>
                                <td style=" font-size:13px; text-align: center;"><strong>Project Phase</strong></td>
                                <td style=" font-size:13px; text-align: center;" colspan="3"><strong>SAT</strong></td>
                                <td style=" font-size:13px; text-align: center;" colspan="3"><strong>SIT</strong></td>
                                <td style=" font-size:13px; text-align: center;" colspan="3"><strong>TRIAL RUN</strong></td>
                                </tr>
                                <tr>
                                <td style=" font-size:13px; text-align: center;" rowspan="2">Phase 1</td>
                                <td style=" font-size:13px; text-align: center;">START</td>
                                <td style=" font-size:13px; text-align: center;">END</td>
                                <td style=" font-size:13px; text-align: center;">DAY LEFT</td>
                                <td style=" font-size:13px; text-align: center;">START</td>
                                <td style=" font-size:13px; text-align: center;">END</td>
                                <td style=" font-size:13px; text-align: center;">DAY LEFT</td>
                                <td style=" font-size:13px; text-align: center;">START</td>
                                <td style=" font-size:13px; text-align: center;">END</td>
                                <td style=" font-size:13px; text-align: center;">DAY LEFT</td>
                                </tr>
                                <tr>
                               <td style=" font-size:13px; text-align: center;" colspan="9" >NO DATA AVAILABLE</td>
                             </tr>
                            </tbody>
                        </table>
                             </td>
                                                 
EOD;
        }
        return $etdePhase;
    }
    public function ETDEImage($details,$slug,$category){
        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);
            if (sizeof($obj->{$slug}->{'gallery'}) > 0) {
                if (sizeof($obj->{$slug}->{'gallery'}->{'items'}) > 0) {
                    $title = $obj->{$slug}->{'gallery'}->{'items'}[0]->{'title'};
                    $titlepieces = explode("_", $title);
                    $imageTitle = $titlepieces[2] . "-To-" . $titlepieces[2];
                    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
                    $etdeImage = <<<EOD
                              <td style="width: 35%;">
                              <h2 style=" text-align: center;"> PROGRESS PHOTOS  [ <span style="color:#D64627;"> $imageTitle </span> ]</h2>
                                         <table >
                                        <tbody>
EOD;
                    if (sizeof($obj->{$slug}->{'gallery'}->{'items'}) > 2) {
                        $limit = 2;
                    } else {
                        $limit = sizeof($obj->{$slug}->{'gallery'}->{'items'});
                    }
                    for ($i = 1; $i < $limit; $i++) {
                        $Image = $protocol . $_SERVER['SERVER_NAME'] . "/" . $obj->{$slug}->{'gallery'}->{'items'}[$i]->{'path'};
                        $desc = $obj->{$slug}->{'gallery'}->{'items'}[$i]->{'title'};
                        $file_headers = @get_headers($Image);
                        if ($file_headers[0] != 'HTTP/1.1 404 Not Found') {
                            $etdeImage .= <<<EOD
                                        <tr>
                                           <td  align="center"><img src="$Image"  width="300" height="200">$desc<span></span></td>
                                         </tr>
EOD;
                        }
                    }
                    $etdeImage .= <<<EOD
                                        </tbody>
                                        </table>
                                  </td>
                                 </tr>
                               </tbody>
                              </table>  
EOD;
                } else {
                    $etdeImage = <<<EOD
                              <td style="width: 35%;">
                              <h2 style=" text-align: center;"> PROGRESS PHOTOS  [ <span style="color:#D64627;">  </span> ]</h2>
                                  </td>
                                 </tr>
                               </tbody>
                              </table>  
EOD;

                }
            }else{
                $etdeImage = <<<EOD
                                   <td style="width: 35%;">
                                   <h2 style=" text-align: center;"> PROGRESS PHOTOS  [ <span style="color:#D64627;">  </span> ]</h2>
                                  </td>
                                 </tr>
                               </tbody>
                              </table>  
EOD;
            }


        }else{

            $etdeImage = <<<EOD
                                   <td style="width: 35%;">
                                   <h2 style=" text-align: center;"> PROGRESS PHOTOS  [ <span style="color:#D64627;">  </span> ]</h2>
                                  </td>
                                 </tr>
                               </tbody>
                              </table>  
EOD;
        }

        return $etdeImage;
    }
    public function packageProgressPSDS($details,$slug,$category)
    {
        $date = date('d-M-y');
        if($category==11){
            $packageProg = <<<EOD
                    <td style="width: 30%;">
                        <table style="width: 100%;"  border="1" cellspacing="7" cellpadding="1" >
                            <tbody>
                               <tr>
                                  <td colspan="3" style="width:100%; text-align:center; vertical-align: middle; font-size:15px"><strong>PROGRESS PERCENTAGE :AS Of [ <span style="color:#D64627;"> $date </span> ]</strong></td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Early Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style=" text-align: center;  font-size:13px;">Late Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Actual</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Early</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Late</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                  <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">-</td>
                                     <td >&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                   
EOD;
        }else{
            if ($details != null) {
                foreach ($details as $key => $val) {
                    $json = $val['value'];
                }
                $obj = json_decode($json);
                if (sizeof($obj->{$slug}->{'scurve'}) > 0) {
                    if ($obj->{$slug}->{'scurve'}->{'date'} != "") {
                        $date = $obj->{$slug}->{'scurve'}->{'date'};
                    } else {
                        $date = date('d-M-y');
                    }
                    $curEarly=$obj->{$slug}->{'scurve'}->{'currentEarly'};
                    $curLate=$obj->{$slug}->{'scurve'}->{'currentLate'};
                    $curActual=$obj->{$slug}->{'scurve'}->{'currentActual'};
                    $varEarly=$obj->{$slug}->{'scurve'}->{'varEarly'};
                    $varLate=$obj->{$slug}->{'scurve'}->{'varLate'};
                    $trend=$obj->{$slug}->{'scurve'}->{'trend'};
                    $packageProg = <<<EOD
                     <td style="width: 30%;">
                        <table style="width: 100%;"  border="1" cellspacing="7" cellpadding="1" >
                            <tbody>
                               <tr>
                                  <td colspan="3" style="width:100%; text-align:center; vertical-align: middle; font-size:15px"><strong>PROGRESS PERCENTAGE :AS Of [ <span style="color:#D64627;"> $date </span> ]</strong></td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Early Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">$curEarly</td>
                                </tr>
                                <tr>
                                    <td style=" text-align: center;  font-size:13px;">Late Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">$curLate</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Actual</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">$curActual</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Early</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">$varEarly</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Late</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">$varLate</td>
                                </tr>
EOD;
                    if($trend=="Up"){
                        $packageProg .= <<<EOD
                    
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">$trend</td>
                                    <td style="background-color:#33cc33;">&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                   
            
                       
EOD;
                    }
                    else if($trend=="Constant minus"){


                        $packageProg .= <<<EOD
                    
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">$trend</td>
                                    <td style="background-color:#ff0000;">&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                   
            
                       
EOD;
                    }
                    else if($trend=="Constant plus"){


                        $packageProg .= <<<EOD
                    
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">$trend</td>
                                    <td style="background-color:#33cc33;">&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                   
            
                       
EOD;
                    } else if($trend=="Down"){
                        $packageProg .= <<<EOD
                    
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">$trend</td>
                                    <td style="background-color:#ff0000;">&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                   
            
                       
EOD;
                    }
                    else {
                        $packageProg .= <<<EOD
                    
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">$trend</td>
                                    <td >&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                   
            
                       
EOD;
                    }

                }else{
                    $packageProg = <<<EOD
                    <td style="width: 30%;">
                        <table style="width: 100%;"  border="1" cellspacing="7" cellpadding="1" >
                            <tbody>
                               <tr>
                                  <td colspan="3" style="width:100%; text-align:center; vertical-align: middle; font-size:15px"><strong>PROGRESS PERCENTAGE :AS Of [ <span style="color:#D64627;"> $date </span> ]</strong></td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Early Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style=" text-align: center;  font-size:13px;">Late Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Actual</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Early</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Late</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                  <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">-</td>
                                    <td >&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                   
            
                       
EOD;
                }
            }else{
                $packageProg = <<<EOD
                      <td style="width: 30%;">
                        <table style="width: 100%;"  border="1" cellspacing="7" cellpadding="1" >
                            <tbody>
                               <tr>
                                  <td colspan="3" style="width:100%; text-align:center; vertical-align: middle; font-size:15px"><strong>PROGRESS PERCENTAGE :AS Of [ <span style="color:#D64627;"> $date </span> ]</strong></td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Early Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style=" text-align: center;  font-size:13px;">Late Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Actual</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Early</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Late</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                  <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">-</td>
                                     <td >&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                   
                   
            
                       
EOD;
            }
        }


        return $packageProg;
    }
    public function kadPSDS($details,$slug,$category){
        $date = date('d-M-y');
        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);

            if (isset ($obj->{$slug}->{'KAD'}) && sizeof($obj->{$slug}->{'KAD'}) > 0) {
                if ($obj->{$slug}->{'KAD'}[0]->{'date'} != "") {
                    $date = $obj->{$slug}->{'KAD'}[0]->{'date'};
                } else {
                    $date = date('d-M-y');
                }
                $kadpsds = <<<EOD
                <table style="width: 100%;" border="0.5" cellpadding="1">
                <tbody>
                <tr>
                <td style="width: 70%;">
                 <h2 style="text-align: center;  font-size:15px;">KEY ACCESS DATES :AS Of [ <span style="color:#D64627;"> $date </span> ]</h2>
                     <table style="width: 100%;" border="1" cellpadding="1">
                            <tbody>
                           <tr>
                                <td style="text-align: center; width: 3%;"><strong style="font-size:13px;">SN</strong></td>
                                <td style="text-align: center; width: 65%;"><strong style="font-size:13px;">DESC.</strong></td>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">Forecast</strong></td>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">Planned</strong></td>
                                <td style="text-align: center; width: 7%;"><strong style="font-size:13px;">Day Left</strong></td>
                                <td style="text-align: center; width: 5%;"><strong style="font-size:13px;">Var.</strong></td>
                                </tr>
EOD;
                for ($i = 1; $i < sizeof($obj->{$slug}->{'KAD'}); $i++) {
                    $item = $obj->{$slug}->{'KAD'}[$i][0];
                    $forecast = $obj->{$slug}->{'KAD'}[$i][1];
                    $contract = $obj->{$slug}->{'KAD'}[$i][2];
                    if(($forecast != null) && ($contract != null) ){
                        $cont = new DateTime($contract);
                        $fore = new DateTime($forecast);
                        $tod = new DateTime(date('d-M-y'));
                        $interval1 = $tod->diff($cont);
                        $date1 = $forecast;
                        $date2 = $contract;
                        $diff = abs(strtotime($date2) - strtotime($date1));
                        if($tod > $cont){
                            $dayleft=0;
                        }else{
                            $dayleft=$interval1->d;
                        }
                        if($date2 > $date1){
                            $variance="-".floor(($diff / (60 * 60 * 24))/7)."w";
                            $status=-1;
                        }else{
                            $variance=floor(($diff / (60 * 60 * 24))/7)."w";
                            $status=1;
                        }
                    }else{
                        $variance="-";
                        $dayleft="-";
                    }
                    if($status < 0){
                        $kadpsds .= <<<EOD
                        <tr>
                                <td style=" font-size:13px; text-align: center; width: 3%;">$i</td>
                                <td style=" font-size:13px; text-align: left; width: 65%;">$item</td>
                                <td style=" font-size:13px; text-align: center; width: 10%;">$forecast</td>
                                <td style=" font-size:13px; text-align: center; width: 10%;">$contract</td>
                                <td style=" font-size:13px; text-align: center; width: 7%;">$dayleft</td>
                                <td style=" font-size:13px; text-align: center; width: 5%; background-color:#ff471a;"><strong>$variance</strong></td>
                        </tr>
EOD;
                    }else{
                        $kadpsds .= <<<EOD
                        <tr>
                                <td style=" font-size:13px; text-align: center; width: 3%;">$i</td>
                                <td style=" font-size:13px; text-align: left; width: 65%;">$item</td>
                                <td style=" font-size:13px; text-align: center; width: 10%;">$forecast</td>
                                <td style=" font-size:13px; text-align: center; width: 10%;">$contract</td>
                                <td style=" font-size:13px; text-align: center; width: 7%;">$dayleft</td>
                                <td style=" font-size:13px; text-align: center; width: 5%; background-color:#66ff99;"><strong>$variance</strong></td>
                        </tr>
EOD;
                    }
                }
                $kadpsds .= <<<EOD
                          
                            </tbody>
                            </table>
               </td>
EOD;
            } else {
                $kadpsds = <<<EOD
          <table style="width: 100%;" border="0.5" cellpadding="1">
                <tbody>
                <tr>
                <td style="width: 70%;">
                 <h2 style="text-align: center;  font-size:15px;">KEY ACCESS DATES :AS Of [ <span style="color:#D64627;"> $date </span> ]</h2>
                     <table style="width: 100%;" border="1" cellpadding="1">
                            <tbody>
                           <tr>
                                <td style="text-align: center; width: 3%;"><strong style="font-size:13px;">SN</strong></td>
                                <td style="text-align: center; width: 65%;"><strong style="font-size:13px;">DESC.</strong></td>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">Forecast</strong></td>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">Planned</strong></td>
                                <td style="text-align: center; width: 7%;"><strong style="font-size:13px;">Day Left</strong></td>
                                <td style="text-align: center; width: 5%;"><strong style="font-size:13px;">Var.</strong></td>
                                </tr>
                                <tr>
                                <td style="text-align: center; width: 100%;"> NO DATA AVAILABLE</td>
                                </tr>
                                    </tbody>
                            </table>
               </td>
EOD;
            }
        }else {
            $kadpsds = <<<EOD
                     <table style="width: 100%;" border="0.5" cellpadding="1">
                <tbody>
                <tr>
                <td style="width: 70%;">
                 <h2 style="text-align: center;  font-size:15px;">KEY ACCESS DATES :AS Of [ <span style="color:#D64627;"> $date </span> ]</h2>
                     <table style="width: 100%;" border="1" cellpadding="1">
                            <tbody>
                           <tr>
                                <td style="text-align: center; width: 3%;"><strong style="font-size:13px;">SN</strong></td>
                                <td style="text-align: center; width: 65%;"><strong style="font-size:13px;">DESC.</strong></td>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">Forecast</strong></td>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">Planned</strong></td>
                                <td style="text-align: center; width: 7%;"><strong style="font-size:13px;">Day Left</strong></td>
                                <td style="text-align: center; width: 5%;"><strong style="font-size:13px;">Var.</strong></td>
                                </tr>
                                   <tr>
                                <td style="text-align: center; width: 100%;"> NO DATA AVAILABLE</td>
                                </tr>
                                    </tbody>
                            </table>
               </td>
EOD;
        }
        return $kadpsds;
    }
    public function galleryPSDS($details,$slug,$category){
        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);
            if (isset($obj->{$slug}->{'gallery'})) {

                if (isset($obj->{$slug}->{'gallery'}->{'items'}) && sizeof($obj->{$slug}->{'gallery'}->{'items'}) > 0) {
                 $title = $obj->{$slug}->{'gallery'}->{'items'}[0]->{'title'};
                   $titlepieces = explode("_", $title);
                  $imageTitle = $titlepieces[2] . "-To-" . $titlepieces[2];
                    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
                    $gallerypsds = <<<EOD
                    <td  style="width: 30%;" rowspan="2">
                    <h2 style="text-align: center;  font-size:15px;">PROGRESS PHOTOS :AS Of [ <span style="color:#D64627;"> </span> ]</h2>
                              <table style="width: 100%;"  cellspacing="3" cellpadding="1" >
                                <tbody>
                                    <tr>
                                        <td  align="center" style=" font-size:12px;" ></td>
                                    </tr>
                                  
EOD;

                        if(sizeof($obj->{$slug}->{'gallery'}->{'items'}) > 3){
                            $limit=3;
                        }else{
                            $limit=sizeof($obj->{$slug}->{'gallery'}->{'items'});
                        }
                        for ($i = 1; $i < $limit; $i++) {
                            $Image =$protocol. $_SERVER['SERVER_NAME'].":".$_SERVER['SERVER_PORT']."/".$obj->{$slug}->{'gallery'}->{'items'}[$i]->{'path'};
                            $desc = $obj->{$slug}->{'gallery'}->{'items'}[$i]->{'title'};
                            $file_headers = @get_headers($Image);
                            if ($file_headers[0] != 'HTTP/1.1 404 Not Found') {
                                $gallerypsds .= <<<EOD
                            <tr>
                                <td  align="center"><img src="$Image"  width="400" height="225"><br><span>$desc</span></td>
                            </tr>
EOD;
                            }
                        }

                    $gallerypsds .= <<<EOD
                                 </tbody>
                              </table>
                     </td>
                     </tr>
EOD;
                }else{
                    $gallerypsds = <<<EOD
                 <td  style="width: 30%;" rowspan="2">
                    <h2 style="text-align: center;  font-size:15px;">PROGRESS PHOTOS :AS Of [ <span style="color:#D64627;"> </span> ]</h2>
                              <table style="width: 100%;"  cellspacing="3" cellpadding="1" >
                                <tbody>
                                    <tr>
                                        <td  align="center" style=" font-size:12px;" ></td>
                                    </tr>
                                     <tr>
                                <td>NO PROGRESS PHOTOS</td>
                            </tr>
                             </tbody>
                              </table>
                     </td>
                     </tr>
EOD;

                }
            }else{

                $gallerypsds = <<<EOD
                <td  style="width: 30%;" rowspan="2">
                  <h2 style="text-align: center;  font-size:15px;">PROGRESS PHOTOS :AS Of [ <span style="color:#D64627;">date </span> ]</h2>
                              <table style="width: 100%;"  cellspacing="3" cellpadding="1">
                                <tbody>
                                    <tr>
                                        <td  align="center" style=" font-size:12px;" ></td>
                                    </tr>
                                    <tr>
                                        <td  align="center"><width="400" height="200">NO PROGRESS PHOTOS</td>
                                      
                                    </tr>
                                 
                                 </tbody>
                              </table>
                </td>
                 </tr>
EOD;

            }
        }else{
            $gallerypsds = <<<EOD
        <td  style="width: 30%;" rowspan="2">
          <h2 style="text-align: center;  font-size:15px;">PROGRESS PHOTOS :AS Of [ <span style="color:#D64627;">date </span> ]</h2>
                      <table style="width: 100%;"  cellspacing="3" cellpadding="1">
                        <tbody>
                            <tr>
                                <td  align="center" style=" font-size:12px;" ></td>
                            </tr>
                            <tr>
                                <td  align="center"><width="400" height="200">NO PROGRESS PHOTOS</td>
                              
                            </tr>
                         
                         </tbody>
                      </table>
        </td>
         </tr>
EOD;

        }
        return $gallerypsds;
    }
    public function tripcablePSDS($details,$slug,$category){
        $date = date('d-M-y');
        if ($details != null) {
            $k=0;
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);
            if (isset($obj->{$slug}->{'sys_psds_trip_cable'})) {
                if (sizeof($obj->{$slug}->{'sys_psds_trip_cable'}) > 0) {
                    if(isset($obj->{$slug}->{'sys_psds_trip_cable'}[0]->{'date'})){
                        $k=1;
                        if ($obj->{$slug}->{'sys_psds_trip_cable'}[0]->{'date'} != "") {
                            $date = $obj->{$slug}->{'sys_psds_trip_cable'}[0]->{'date'};
                        } else {
                            $date = date('d-M-y');
                        }
                    }else{
                        $k=0;
                        $date = date('d-M-y');
                    }

                    $trippsds = <<<EOD
        <tr>
EOD;
                    $trippsds .= <<<EOD
        <td style="width: 70%;">
        <h2 style="text-align: center;  font-size:15px;">TRIP CABLE STATUS PROGRESS  :AS Of [ <span style="color:#D64627;">$date </span> ]</h2>
       <table style="width: 100%;" border="1"  cellpadding="1">
            <tbody>
            <tr>
            <th align="center" style=" font-size:13px; width: 15%; " rowspan="2"><strong>Station/Block</strong></th>
            <th align="center" style=" font-size:13px; width: 15%; " rowspan="2"><strong>33KV AC/750V DC</strong></th>
            <th align="center" style=" font-size:13px; width: 20%;" colspan="2"><strong>Cable Installation</strong></th>
            <th align="center" style=" font-size:13px; width: 15%;" colspan="2"><strong>Testing</strong></th>
            <th align="center" style=" font-size:13px; width: 35%;" colspan="2" ><strong>Energization</strong></th>
            </tr>
            <tr>
            <th align="center" style=" font-size:13px; width: 10%; "><strong style="color:#ff9900;">Laying</strong></th>
            <th align="center" style=" font-size:13px; width: 10%;"><strong style="color:#ff9900;">Termination</strong></th>
            <th align="center" style=" font-size:13px; width: 7.5%;"><strong style="color:green;">PAT</strong></th>
            <th align="center" style=" font-size:13px; width: 7.5%;"><strong style="color:green;">SAT</strong></th>
            <th align="center" style=" font-size:13px; width: 25%;"><strong >Status</strong></th>
            <th align="center" style=" font-size:13px; width: 10%;"><strong >Date</strong></th>
            </tr>
EOD;
                    for ($i = $k; $i < sizeof($obj->{$slug}->{'sys_psds_trip_cable'}); $i++) {
                         $station_from = $obj->{$slug}->{'sys_psds_trip_cable'}[$i]->{'station_from'};
                         $station_to = $obj->{$slug}->{'sys_psds_trip_cable'}[$i]->{'station_to'};
                         $th_laying = $obj->{$slug}->{'sys_psds_trip_cable'}[$i]->{'th_laying'};
                         $sev_laying = $obj->{$slug}->{'sys_psds_trip_cable'}[$i]->{'sev_laying'};
                         $th_termination = $obj->{$slug}->{'sys_psds_trip_cable'}[$i]->{'th_termination'};
                         $sev_termination = $obj->{$slug}->{'sys_psds_trip_cable'}[$i]->{'sev_termination'};
                         $th_pat = $obj->{$slug}->{'sys_psds_trip_cable'}[$i]->{'th_pat'};
                         $sev_pat = $obj->{$slug}->{'sys_psds_trip_cable'}[$i]->{'sev_pat'};
                         $th_sat = $obj->{$slug}->{'sys_psds_trip_cable'}[$i]->{'th_sat'};
                         $sev_sat = $obj->{$slug}->{'sys_psds_trip_cable'}[$i]->{'sev_sat'};
                         $th_ener_date = $obj->{$slug}->{'sys_psds_trip_cable'}[$i]->{'th_ener_date'};
                         $th_ener_stat = $obj->{$slug}->{'sys_psds_trip_cable'}[$i]->{'th_ener_stat'};
                         $sev_ener_stat = $obj->{$slug}->{'sys_psds_trip_cable'}[$i]->{'sev_ener_stat'};
                         $sev_ener_date = $obj->{$slug}->{'sys_psds_trip_cable'}[$i]->{'sev_ener_date'};
                    $trippsds .= <<<EOD
                    <tr>
                    <td rowspan="2" align="center" style=" font-size:13px;">$station_from - $station_to </td>
                    <td rowspan="1" align="center" style=" font-size:13px;">33KV AC</td>
EOD;
                        //laying 33
                        if($th_laying==-1.00){
                            $trippsds .= <<<EOD
                               <td rowspan="1" align="center" style=" font-size:13px;">-</td>
                        
EOD;
                        }
                        else if($th_laying==2.00){
                            $trippsds .= <<<EOD
                               <td rowspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:orange;">*</span></td>
                        
EOD;
                        }
                        else if($th_laying==1.00){
                            $trippsds .= <<<EOD
                               <td rowspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:green;">*</span></td>
                        
EOD;
                        }
                       else if($th_laying==3.00){
                            $trippsds .= <<<EOD
                               <td rowspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:red;">*</span></td>
                        
EOD;
                        }else{
                           $trippsds .= <<<EOD
                               <td rowspan="1" align="center" style=" font-size:13px;">-</td>
                        
EOD;
                       }

                        //th_termination
                        if($th_termination==-1.00){
                            $trippsds .= <<<EOD
                                  <td colspan="1" align="center" style=" font-size:13px;">-</td>
                        
EOD;
                        }
                        else if($th_termination==2.00){
                            $trippsds .= <<<EOD
                                   <td colspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:orange;">*</span></td>
                        
EOD;
                        }
                       else  if($th_termination==1.00){
                            $trippsds .= <<<EOD
                                  <td colspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:orange;">*</span> </td>
                        
EOD;
                        }
                       else if($th_termination==3.00){
                            $trippsds .= <<<EOD
                                   <td colspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:orange;">*</span></td>
                        
EOD;
                        }else{
                           $trippsds .= <<<EOD
                                   <td colspan="1" align="center" style=" font-size:13px;">-</td>
                        
EOD;
                       }


                        //$th_pat
                        if($th_pat==-1.00){
                            $trippsds .= <<<EOD
                                  <td colspan="1" align="center" style=" font-size:13px;">-</td>
                        
EOD;
                        }
                       else if($th_pat==2.00){
                            $trippsds .= <<<EOD
                                   <td colspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:orange;">*</span></td>
                        
EOD;
                        }
                      else  if($th_pat==1.00){
                            $trippsds .= <<<EOD
                                  <td colspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:orange;">*</span> </td>
                        
EOD;
                        }
                       else if($th_pat==3.00){
                            $trippsds .= <<<EOD
                                   <td colspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:orange;">*</span></td>
                        
EOD;
                        }else{
                           $trippsds .= <<<EOD
                                   <td colspan="1" align="center" style=" font-size:13px;">-</td>
                        
EOD;
                       }


                        //$th_sat
                        if($th_sat==-1.00){
                            $trippsds .= <<<EOD
                                  <td colspan="1" align="center" style=" font-size:13px;">-</td>
                        
EOD;
                        }
                       else if($th_sat==2.00){
                            $trippsds .= <<<EOD
                                   <td colspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:orange;">*</span></td>
                        
EOD;
                        }
                       else if($th_sat==1.00){
                            $trippsds .= <<<EOD
                                  <td colspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:orange;">*</span> </td>
                        
EOD;
                        }
                       else if($th_sat==3.00){
                            $trippsds .= <<<EOD
                                   <td colspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:orange;">*</span></td>
                        
EOD;
                        }else{
                           $trippsds .= <<<EOD
                                   <td colspan="1" align="center" style=" font-size:13px;">-</td>
                        
EOD;
                       }

                        //$th_ener_stat
                        $enerstst="N/A";
                        if($th_ener_stat==1.00){
                            $enerstst="Work Not Yet Started";
                        }
                        if($th_ener_stat==2.00){
                            $enerstst="Work In Progree";
                        }
                        if($th_ener_stat==3.00){
                            $enerstst="Testing Completed";
                        }
                        if($th_ener_stat==4.00){
                            $enerstst="AC Energized";
                        }
                        if($th_ener_stat==5.00){
                            $enerstst="AC/DC Energized";
                        }
                        $trippsds .= <<<EOD
                    <td colspan="1" align="center" style=" font-size:13px;" >$enerstst</td>
                    <td colspan="1" align="center" style=" font-size:13px;" >$th_ener_date</td>
                    </tr>
                    <tr>
                    <td rowspan="1" align="center" style=" font-size:13px;">750V DC</td>
EOD;


                        if($sev_laying==-1.00){
                            $trippsds .= <<<EOD
                               <td rowspan="1" align="center" style=" font-size:13px;">-</td>
                        
EOD;
                        }
                        else if($sev_laying==2.00){
                            $trippsds .= <<<EOD
                               <td rowspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:orange;">*</span></td>
                        
EOD;
                        }
                        else if($sev_laying==1.00){
                            $trippsds .= <<<EOD
                               <td rowspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:green;">*</span></td>
                        
EOD;
                        }
                        else if($sev_laying==3.00){
                            $trippsds .= <<<EOD
                               <td rowspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:red;">*</span></td>
                        
EOD;
                        }else{
                            $trippsds .= <<<EOD
                               <td rowspan="1" align="center" style=" font-size:13px;">-</td>
                        
EOD;
                        }

                        //th_termination
                        if($sev_termination==-1.00){
                            $trippsds .= <<<EOD
                                  <td colspan="1" align="center" style=" font-size:13px;">-</td>
                        
EOD;
                        }
                        else if($sev_termination==2.00){
                            $trippsds .= <<<EOD
                                   <td colspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:orange;">*</span></td>
                        
EOD;
                        }
                        else  if($sev_termination==1.00){
                            $trippsds .= <<<EOD
                                  <td colspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:green;">*</span> </td>
                        
EOD;
                        }
                        else if($sev_termination==3.00){
                            $trippsds .= <<<EOD
                                   <td colspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:red;">*</span></td>
                        
EOD;
                        }else{
                            $trippsds .= <<<EOD
                                   <td colspan="1" align="center" style=" font-size:13px;">-</td>
                        
EOD;
                        }


                        //$th_pat
                        if($sev_pat==-1.00){
                            $trippsds .= <<<EOD
                                  <td colspan="1" align="center" style=" font-size:13px;">-</td>
                        
EOD;
                        }
                        else if($sev_pat==2.00){
                            $trippsds .= <<<EOD
                                   <td colspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:orange;">*</span></td>
                        
EOD;
                        }
                        else  if($sev_pat==1.00){
                            $trippsds .= <<<EOD
                                  <td colspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:green;">*</span> </td>
                        
EOD;
                        }
                        else if($sev_pat==3.00){
                            $trippsds .= <<<EOD
                                   <td colspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:red;">*</span></td>
                        
EOD;
                        }else{
                            $trippsds .= <<<EOD
                                   <td colspan="1" align="center" style=" font-size:13px;">-</td>
                        
EOD;
                        }


                        //$th_sat
                        if($sev_sat==-1.00){
                            $trippsds .= <<<EOD
                                  <td colspan="1" align="center" style=" font-size:13px;">-</td>
                        
EOD;
                        }
                        else if($sev_sat==2.00){
                            $trippsds .= <<<EOD
                                   <td colspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:orange;">*</span></td>
                        
EOD;
                        }
                        else if($sev_sat==1.00){
                            $trippsds .= <<<EOD
                                  <td colspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:green;">*</span> </td>
                        
EOD;
                        }
                        else if($sev_sat==3.00){
                            $trippsds .= <<<EOD
                                   <td colspan="1" align="center" style=" font-size:13px;"> <span style=" font-size:20px; color:red;">*</span></td>
                        
EOD;
                        }else{
                            $trippsds .= <<<EOD
                                   <td colspan="1" align="center" style=" font-size:13px;">-</td>
                        
EOD;
                        }

                        //$th_ener_stat
                        $enerstst="N/A";
                        if($sev_ener_stat==1.00){
                            $enerststsev="Work Not Yet Started";
                        }
                        if($sev_ener_stat==2.00){
                            $enerststsev="Work In Progree";
                        }
                        if($sev_ener_stat==3.00){
                            $enerststsev="Testing Completed";
                        }
                        if($sev_ener_stat==4.00){
                            $enerststsev="AC Energized";
                        }
                        if($sev_ener_stat==5.00){
                            $enerststsev="AC/DC Energized";
                        }



                        $trippsds .= <<<EOD
                    <td colspan="1" align="center" style=" font-size:13px;" >$enerststsev</td>
                    <td colspan="1" align="center" style=" font-size:13px;" > $sev_ener_date</td>
                    </tr>
EOD;
                    }
                    $trippsds .= <<<EOD
                    <tr><td  colspan="9" align="right"  style=" font-size:13px;">
                     <span style=" font-size:20px; color:green; ">*</span><span>Completed</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style=" font-size:20px; color:orange; ">*</span><span>In Progress</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style=" font-size:20px; color:red; ">*</span><span>Pending</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </td></tr>
                    </tbody>
					</table>
        </td>
EOD;
                    $trippsds .= <<<EOD
        </tr>
        
EOD;
                }else{
                    $trippsds = <<<EOD
        <tr>
EOD;
                    $trippsds .= <<<EOD
        <td style="width: 70%;">
        <h2 style="text-align: center;  font-size:15px;">TRIP CABLE STATUS PROGRESS  :AS Of [ <span style="color:#D64627;">date </span> ]</h2>
       <table style="width: 100%;" border="1"  cellpadding="1">
            <tbody>
            <tr>
            <th align="center" style=" font-size:13px;" rowspan="2"><strong>Station/Block</strong></th>
            <th align="center" style=" font-size:13px;" rowspan="2"><strong>33KV AC/750V DC</strong></th>
            <th align="center" style=" font-size:13px;" colspan="2"><strong>Cable Installation</strong></th>
            <th align="center" style=" font-size:13px;" colspan="2"><strong>Testing</strong></th>
            <th align="center" style=" font-size:13px;" colspan="2" rowspan="2"><strong>SAT</strong></th>
            </tr>
            <tr>
            <th align="center" style=" font-size:13px;"><strong>Laying</strong></th>
            <th align="center" style=" font-size:13px;"><strong>Termination</strong></th>
            <th align="center" style=" font-size:13px;"><strong>PAT</strong></th>
            <th align="center" style=" font-size:13px;"><strong>SAT</strong></th>
            </tr>
EOD;
                    $trippsds .= <<<EOD
            <tr>
            <td colspan="8" align="center" style=" font-size:13px;" >NO DATA AVAILABLE</td>
            </tr>
EOD;
                    $trippsds .= <<<EOD
                    </tbody>
					</table>
        </td>
EOD;
                    $trippsds .= <<<EOD
        </tr>
EOD;
                }
            }else{
                $trippsds = <<<EOD
        <tr>
EOD;
                $trippsds .= <<<EOD
        <td style="width: 70%;">
        <h2 style="text-align: center;  font-size:15px;">TRIP CABLE STATUS PROGRESS  :AS Of [ <span style="color:#D64627;">date </span> ]</h2>
       <table style="width: 100%;" border="1"  cellpadding="1">
            <tbody>
            <tr>
            <th align="center" style=" font-size:13px;" rowspan="2"><strong>Station/Block</strong></th>
            <th align="center" style=" font-size:13px;" rowspan="2"><strong>33KV AC/750V DC</strong></th>
            <th align="center" style=" font-size:13px;" colspan="2"><strong>Cable Installation</strong></th>
            <th align="center" style=" font-size:13px;" colspan="2"><strong>Testing</strong></th>
            <th align="center" style=" font-size:13px;" colspan="2" rowspan="2"><strong>SAT</strong></th>
            </tr>
            <tr>
            <th align="center" style=" font-size:13px;"><strong>Laying</strong></th>
            <th align="center" style=" font-size:13px;"><strong>Termination</strong></th>
            <th align="center" style=" font-size:13px;"><strong>PAT</strong></th>
            <th align="center" style=" font-size:13px;"><strong>SAT</strong></th>
            </tr>
EOD;

                $trippsds .= <<<EOD
            <tr>
            <td colspan="8" align="center" style=" font-size:13px;" >NO DATA AVAILABLE</td>
            </tr>
EOD;
                $trippsds .= <<<EOD
                    </tbody>
					</table>
        </td>
EOD;
                $trippsds .= <<<EOD
        </tr>
EOD;
            }
        }else{
            $trippsds = <<<EOD
        <tr>
EOD;
            $trippsds .= <<<EOD
        <td style="width: 70%;">
        <h2 style="text-align: center;  font-size:15px;">TRIP CABLE STATUS PROGRESS  :AS Of [ <span style="color:#D64627;">date </span> ]</h2>
       <table style="width: 100%;" border="1" cellpadding="1">
            <tbody>
            <tr>
            <th align="center" style=" font-size:13px;" rowspan="2"><strong>Station/Block</strong></th>
            <th align="center" style=" font-size:13px;" rowspan="2"><strong>33KV AC/750V DC</strong></th>
            <th align="center" style=" font-size:13px;" colspan="2"><strong>Cable Installation</strong></th>
            <th align="center" style=" font-size:13px;" colspan="2"><strong>Testing</strong></th>
            <th align="center" style=" font-size:13px;" colspan="2" rowspan="2"><strong>SAT</strong></th>
            </tr>
            <tr>
            <th align="center" style=" font-size:13px;"><strong>Laying</strong></th>
            <th align="center" style=" font-size:13px;"><strong>Termination</strong></th>
            <th align="center" style=" font-size:13px;"><strong>PAT</strong></th>
            <th align="center" style=" font-size:13px;"><strong>SAT</strong></th>
            </tr>
EOD;

            $trippsds .= <<<EOD
            <tr>
            <td colspan="8" align="center" style=" font-size:13px;" >NO DATA AVAILABLE</td>
            </tr>
EOD;
            $trippsds .= <<<EOD
                    </tbody>
					</table>
        </td>
EOD;
            $trippsds .= <<<EOD
        </tr>
EOD;
        }

        return $trippsds;
    }
    public function testingPSDS($details,$slug,$category){
        $date = date('d-M-y');
        if ($details != null) {
            $k = 0;
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);
            if (isset($obj->{$slug}->{'sys_psds_installation'})) {
                if (sizeof($obj->{$slug}->{'sys_psds_installation'}) > 0) {
                    if (isset($obj->{$slug}->{'sys_psds_installation'}[0]->{'date'})) {
                        $k = 1;
                        if ($obj->{$slug}->{'sys_psds_installation'}[0]->{'date'} != "") {
                            $date = $obj->{$slug}->{'sys_psds_installation'}[0]->{'date'};
                        } else {
                            $date = date('d-M-y');
                        }
                    } else {
                        $k = 0;
                        $date = date('d-M-y');
                    }
                    //////////////////////////////////////////////////////////
                    $testingpsds = <<<EOD
                    <tr>
EOD;
                    $testingpsds .= <<<EOD
                    <td style="width: 100%;">
                    <h2 style="text-align: center;  font-size:15px;">INSTALLATION AND TESTING & COMMISSIONING STATUS AT STATION  :AS Of [ <span style="color:#D64627;">$date </span> ]</h2>
                    <table width="100%" border="1"  cellpadding="1">
                    <tbody>
                    <tr>
                    <td style="width: 28%; text-align: center; font-size:13px;" rowspan="2">&nbsp;<strong>Station</strong></td>
                    <td style="width: 10%; text-align: center; font-size:13px;" rowspan="2">&nbsp;<strong>Installation</strong></td>
                    <td style="width: 10%; text-align: center; font-size:13px;" rowspan="2"><strong>&nbsp;AC/DC</strong></td>
                    <td style="width: 20%; text-align: center; font-size:13px;" colspan="2">&nbsp;<strong>Testing</strong></td>
                    <td style="width: 32%; text-align: center; font-size:13px;" colspan="2"><strong>&nbsp;Energization</strong></td>
                    </tr>
                    <tr>
                    <td style="width: 10%; text-align: center; font-size:13px;"><span style="color: #ff6600;"><strong>&nbsp;PAT</strong></span></td>
                    <td style="width: 10%; text-align: center; font-size:13px;">&nbsp;<strong><span style="color: #ff6600;">SAT</span></strong></td>
                    <td style="width: 17%; text-align: center; font-size:13px;">&nbsp;<strong><span style="color: #0000ff;">Forecast</span></strong></td>
                    <td style="width: 15%; text-align: center; font-size:13px;">&nbsp;<strong><span style="color: #ff00ff;">Actual</span></strong></td>
                    </tr>
EOD;
                    for ($i = $k; $i < sizeof($obj->{$slug}->{'sys_psds_installation'}); $i++) {
                        $station_code = $obj->{$slug}->{'sys_psds_installation'}[$i]->{'station_code'};
                        $station = $obj->{$slug}->{'sys_psds_installation'}[$i]->{'station'};
                        $installation = $obj->{$slug}->{'sys_psds_installation'}[$i]->{'installation'};
                        $in_perc = $obj->{$slug}->{'sys_psds_installation'}[$i]->{'in_perc'};
                        $th_testing_pat = $obj->{$slug}->{'sys_psds_installation'}[$i]->{'th_testing_pat'};
                        $th_testing_sat = $obj->{$slug}->{'sys_psds_installation'}[$i]->{'th_testing_sat'};
                        $th_fore = $obj->{$slug}->{'sys_psds_installation'}[$i]->{'th_fore'};
                        $th_actual = $obj->{$slug}->{'sys_psds_installation'}[$i]->{'th_actual'};
                        $th_act_stat = $obj->{$slug}->{'sys_psds_installation'}[$i]->{'th_act_stat'};
                        $sev_pat = $obj->{$slug}->{'sys_psds_installation'}[$i]->{'sev_pat'};
                        $sev_sat = $obj->{$slug}->{'sys_psds_installation'}[$i]->{'sev_sat'};
                        $sev_fore = $obj->{$slug}->{'sys_psds_installation'}[$i]->{'sev_fore'};
                        $sev_actual = $obj->{$slug}->{'sys_psds_installation'}[$i]->{'sev_actual'};
                        $sev_act_stat = $obj->{$slug}->{'sys_psds_installation'}[$i]->{'sev_act_stat'};
                        $pscada_pat = $obj->{$slug}->{'sys_psds_installation'}[$i]->{'pscada_pat'};
                        $pscada_sat = $obj->{$slug}->{'sys_psds_installation'}[$i]->{'pscada_sat'};
                        $pscada_fore = $obj->{$slug}->{'sys_psds_installation'}[$i]->{'pscada_fore'};
                        $psca_actual = $obj->{$slug}->{'sys_psds_installation'}[$i]->{'psca_actual'};
                        $psca_act_stat = $obj->{$slug}->{'sys_psds_installation'}[$i]->{'psca_act_stat'};
                        $testingpsds .= <<<EOD
                      <tr>
                        <td style="width: 28%; text-align: center; font-size:13px;" rowspan="3">
                        <strong>$station_code</strong>
                        <p style="text-align: center; font-size:13px;">$station</p>
                        </td>
                       
EOD;
                        //INSTALLATION
                        if($installation==-1.00){
                            $testingpsds .= <<<EOD
                        <td style="width: 10%; text-align: center; font-size:13px;" rowspan="3">$in_perc %</td>
                      
EOD;
                        }
                        else if($installation==2.00){
                            $testingpsds .= <<<EOD
                        <td style="width: 10%; text-align: center; font-size:13px;" rowspan="3"> <span style=" font-size:20px; color:orange;">*</span></td>
                      
EOD;

                        }
                        else if($installation==1.00){
                            $testingpsds .= <<<EOD
                        <td style="width: 10%; text-align: center; font-size:13px;" rowspan="3"> <span style=" font-size:20px; color:green;">*</span></td>
                      
EOD;

                        }
                        else if($installation==3.00){
                            $testingpsds .= <<<EOD
                        <td style="width: 10%; text-align: center; font-size:13px;" rowspan="3"> <span style=" font-size:20px; color:red;">*</span></td>
                      
EOD;

                        }else{
                            $testingpsds .= <<<EOD
                        <td style="width: 10%; text-align: center; font-size:13px;" rowspan="3"> $in_perc %</td>
                      
EOD;
                        }
 //33 PAT
                        if($th_testing_pat==-1.00){
                            $testingpsds .= <<<EOD
                           <td style="width: 10%; text-align: center; font-size:13px;">&nbsp;33KV</td>
                       <td style="width: 10%; font-size:13px; text-align: center;">-</td>
                      
EOD;
                        }
                        else if($th_testing_pat==2.00){

                            $testingpsds .= <<<EOD
                           <td style="width: 10%; text-align: center; font-size:13px;">&nbsp;33KV</td>
                       <td style="width: 10%; font-size:13px; text-align: center;"><span style=" font-size:20px; color:orange;">*</span></td>
                      
EOD;
                        }
                        else if($th_testing_pat==1.00){
                            $testingpsds .= <<<EOD
                           <td style="width: 10%; text-align: center; font-size:13px;">&nbsp;33KV</td>
                       <td style="width: 10%; font-size:13px; text-align: center;"><span style=" font-size:20px; color:green;">*</span></td>
                      
EOD;
                        }
                        else if($th_testing_pat==3.00){
                            $testingpsds .= <<<EOD
                           <td style="width: 10%; text-align: center; font-size:13px;">&nbsp;33KV</td>
                       <td style="width: 10%; font-size:13px; text-align: center;"><span style=" font-size:20px; color:red;">*</span></td>
                      
EOD;

                        }else{
                            $testingpsds .= <<<EOD
                           <td style="width: 10%; text-align: center; font-size:13px;">&nbsp;33KV</td>
                       <td style="width: 10%; font-size:13px; text-align: center;">-</td>
                      
EOD;
                        }


//33 sat
                        if($th_testing_sat==-1.00){
                            $testingpsds .= <<<EOD
                       <td style="width: 10%; font-size:13px; text-align: center;">-</td>
                        <td style="width: 17%; font-size:13px; text-align: center;">&nbsp;$th_fore</td>
                        <td style="width: 15%; font-size:13px; text-align: center;">&nbsp;$th_actual</td>
                        </tr>
                      
EOD;
                        }
                        else if($th_testing_sat==2.00){

                            $testingpsds .= <<<EOD
                       <td style="width: 10%; font-size:13px; text-align: center;"><span style=" font-size:20px; color:orange;">*</span></td>
                        <td style="width: 17%; font-size:13px; text-align: center;">&nbsp;$th_fore</td>
                        <td style="width: 15%; font-size:13px; text-align: center;">&nbsp;$th_actual</td>
                        </tr>
                      
EOD;
                        }
                        else if($th_testing_sat==1.00){
                            $testingpsds .= <<<EOD
                       <td style="width: 10%; font-size:13px; text-align: center;"><span style=" font-size:20px; color:green;">*</span></td>
                        <td style="width: 17%; font-size:13px; text-align: center;">&nbsp;$th_fore</td>
                        <td style="width: 15%; font-size:13px; text-align: center;">&nbsp;$th_actual</td>
                        </tr>
                      
EOD;
                        }
                        else if($th_testing_sat==3.00){

                            $testingpsds .= <<<EOD
                       <td style="width: 10%; font-size:13px; text-align: center;"><span style=" font-size:20px; color:red;">*</span></td>
                        <td style="width: 17%; font-size:13px; text-align: center;">&nbsp;$th_fore</td>
                        <td style="width: 15%; font-size:13px; text-align: center;">&nbsp;$th_actual</td>
                        </tr>
                      
EOD;
                        }else{
                            $testingpsds .= <<<EOD
                       <td style="width: 10%; font-size:13px; text-align: center;">-</td>
                        <td style="width: 17%; font-size:13px; text-align: center;">&nbsp;$th_fore</td>
                        <td style="width: 15%; font-size:13px; text-align: center;">&nbsp;$th_actual</td>
                        </tr>
                      
EOD;
                        }

                        if($sev_pat==-1.00){
                            $testingpsds .= <<<EOD
                      <tr>
                        <td style="width: 10%; text-align: center; font-size:13px;">&nbsp;750V</td>
                        <td style="width: 10%; font-size:13px; text-align: center;">-</td>
                      
EOD;
                        }
                        else if($sev_pat==2.00){

                            $testingpsds .= <<<EOD
                      <tr>
                        <td style="width: 10%; text-align: center; font-size:13px;">&nbsp;750V</td>
                        <td style="width: 10%; font-size:13px; text-align: center;"><span style=" font-size:20px; color:orange;">*</span></td>
                      
EOD;
                        }
                        else if($sev_pat==1.00){
                            $testingpsds .= <<<EOD
                      <tr>
                        <td style="width: 10%; text-align: center; font-size:13px;">&nbsp;750V</td>
                        <td style="width: 10%; font-size:13px; text-align: center;"><span style=" font-size:20px; color:green;">*</span></td>
                      
EOD;
                        }
                        else if($sev_pat==3.00){

                            $testingpsds .= <<<EOD
                      <tr>
                        <td style="width: 10%; text-align: center; font-size:13px;">&nbsp;750V</td>
                        <td style="width: 10%; font-size:13px; text-align: center;"><span style=" font-size:20px; color:red;">*</span></td>
                      
EOD;
                        }else{
                            $testingpsds .= <<<EOD
                      <tr>
                        <td style="width: 10%; text-align: center; font-size:13px;">&nbsp;750V</td>
                        <td style="width: 10%; font-size:13px; text-align: center;">-</td>
                      
EOD;
                        }

                        if($sev_sat==-1.00){
                            $testingpsds .= <<<EOD
                      <td style="width: 10%; font-size:13px; text-align: center;">-</td>
                        <td style="width: 17%; font-size:13px; text-align: center;">&nbsp;$sev_fore</td>
                        <td style="width: 15%; font-size:13px; text-align: center;">&nbsp;$sev_actual</td>
                        </tr>
                      
EOD;
                        }
                        else if($sev_sat==2.00){
                            $testingpsds .= <<<EOD
                      <td style="width: 10%; font-size:13px; text-align: center;"><span style=" font-size:20px; color:orange;">*</span></td>
                        <td style="width: 17%; font-size:13px; text-align: center;">&nbsp;$sev_fore</td>
                        <td style="width: 15%; font-size:13px; text-align: center;">&nbsp;$sev_actual</td>
                        </tr>
                      
EOD;
                        }
                        else if($sev_sat==1.00){
                            $testingpsds .= <<<EOD
                      <td style="width: 10%; font-size:13px; text-align: center;"><span style=" font-size:20px; color:green;">*</span></td>
                        <td style="width: 17%; font-size:13px; text-align: center;">&nbsp;$sev_fore</td>
                        <td style="width: 15%; font-size:13px; text-align: center;">&nbsp;$sev_actual</td>
                        </tr>
                      
EOD;
                        }
                        else if($sev_sat==3.00){

                            $testingpsds .= <<<EOD
                      <td style="width: 10%; font-size:13px; text-align: center;"><span style=" font-size:20px; color:red;">*</span></td>
                        <td style="width: 17%; font-size:13px; text-align: center;">&nbsp;$sev_fore</td>
                        <td style="width: 15%; font-size:13px; text-align: center;">&nbsp;$sev_actual</td>
                        </tr>
                      
EOD;
                        }else{
                            $testingpsds .= <<<EOD
                      <td style="width: 10%; font-size:13px; text-align: center;"></td>
                        <td style="width: 17%; font-size:13px; text-align: center;">&nbsp;$sev_fore</td>
                        <td style="width: 15%; font-size:13px; text-align: center;">&nbsp;$sev_actual</td>
                        </tr>
                      
EOD;
                        }

                        if($pscada_pat==-1.00){
                            $testingpsds .= <<<EOD
                     <tr>
                        <td style="width: 10%; text-align: center; font-size:13px;">&nbsp;PSCADA</td>
                        <td style="width: 10%; font-size:13px; text-align: center;">-</td>
                      
EOD;
                        }
                        else if($pscada_pat==2.00){

                            $testingpsds .= <<<EOD
                     <tr>
                        <td style="width: 10%; text-align: center; font-size:13px;">&nbsp;PSCADA</td>
                        <td style="width: 10%; font-size:13px; text-align: center;"><span style=" font-size:20px; color:orange;">*</span></td>
                      
EOD;
                        }
                        else if($pscada_pat==1.00){
                            $testingpsds .= <<<EOD
                     <tr>
                        <td style="width: 10%; text-align: center; font-size:13px;">&nbsp;PSCADA</td>
                        <td style="width: 10%; font-size:13px; text-align: center;"><span style=" font-size:20px; color:green;">*</span></td>
                      
EOD;
                        }
                        else if($pscada_pat==3.00){
                            $testingpsds .= <<<EOD
                     <tr>
                        <td style="width: 10%; text-align: center; font-size:13px;">&nbsp;PSCADA</td>
                        <td style="width: 10%; font-size:13px; text-align: center;"><span style=" font-size:20px; color:red;">*</span></td>
                      
EOD;

                        }else{
                            $testingpsds .= <<<EOD
                     <tr>
                        <td style="width: 10%; text-align: center; font-size:13px;">&nbsp;PSCADA</td>
                        <td style="width: 10%; font-size:13px; text-align: center;">-</td>
                      
EOD;
                        }


                        if($pscada_sat==-1.00){
                            $testingpsds .= <<<EOD
                     <td style="width: 10%; font-size:13px; text-align: center;">-</td>
                        <td style="width: 17%; font-size:13px; text-align: center;">&nbsp;$pscada_fore</td>
                        <td style="width: 15%; font-size:13px; text-align: center;">&nbsp;$psca_actual</td>
                        </tr>
                      
EOD;
                        }
                        else if($pscada_sat==2.00){

                            $testingpsds .= <<<EOD
                     <td style="width: 10%; font-size:13px; text-align: center;"><span style=" font-size:20px; color:orange;">*</span></td>
                        <td style="width: 17%; font-size:13px; text-align: center;">&nbsp;$pscada_fore</td>
                        <td style="width: 15%; font-size:13px; text-align: center;">&nbsp;$psca_actual</td>
                        </tr>
                      
EOD;
                        }
                        else if($pscada_sat==1.00){
                            $testingpsds .= <<<EOD
                     <td style="width: 10%; font-size:13px; text-align: center;"><span style=" font-size:20px; color:green;">*</span></td>
                        <td style="width: 17%; font-size:13px; text-align: center;">&nbsp;$pscada_fore</td>
                        <td style="width: 15%; font-size:13px; text-align: center;">&nbsp;$psca_actual</td>
                        </tr>
                      
EOD;
                        }
                        else if($pscada_sat==3.00){

                            $testingpsds .= <<<EOD
                     <td style="width: 10%; font-size:13px; text-align: center;"><span style=" font-size:20px; color:red;">*</span></td>
                        <td style="width: 17%; font-size:13px; text-align: center;">&nbsp;$pscada_fore</td>
                        <td style="width: 15%; font-size:13px; text-align: center;">&nbsp;$psca_actual</td>
                        </tr>
                      
EOD;
                        }else{
                            $testingpsds .= <<<EOD
                     <td style="width: 10%; font-size:13px; text-align: center;">-</td>
                        <td style="width: 17%; font-size:13px; text-align: center;">&nbsp;$pscada_fore</td>
                        <td style="width: 15%; font-size:13px; text-align: center;">&nbsp;$psca_actual</td>
                        </tr>
                      
EOD;
                        }
                    }
                    $testingpsds .= <<<EOD
                     <tr><td  colspan="9" align="right"  style=" font-size:13px;">
                     <span style=" font-size:20px; color:green; ">*</span><span>Completed</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style=" font-size:20px; color:orange; ">*</span><span>In Progress</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style=" font-size:20px; color:red; ">*</span><span>Pending</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </td></tr>
                        </tbody>
                        </table>
                        </td>
EOD;
                    $testingpsds .= <<<EOD
                    </tr>
                    </tbody>
                    </table>
EOD;
                 /////////////////////////////////////////////////////////////

                }else{
                    $testingpsds = <<<EOD
        <tr>
EOD;
                    $testingpsds .= <<<EOD
        <td style="width: 100%;">
        <h2 style="text-align: center;  font-size:15px;">INSTALLATION AND TESTING & COMMISSIONING STATUS AT STATION  :AS Of [ <span style="color:#D64627;">date </span> ]</h2>
        <table width="100%" border="1"  cellpadding="1">
        <tbody>
        <tr>
        <td style="width: 28%; text-align: center; font-size:13px;" rowspan="2">&nbsp;<strong>Station</strong></td>
        <td style="width: 10%; text-align: center; font-size:13px;" rowspan="2">&nbsp;<strong>Installation</strong></td>
        <td style="width: 10%; text-align: center; font-size:13px;" rowspan="2"><strong>&nbsp;AC/DC</strong></td>
        <td style="width: 20%; text-align: center; font-size:13px;" colspan="2">&nbsp;<strong>Testing</strong></td>
        <td style="width: 32%; text-align: center; font-size:13px;" colspan="2"><strong>&nbsp;Energization</strong></td>
        </tr>
        <tr>
        <td style="width: 10%; text-align: center; font-size:13px;"><span style="color: #ff6600;"><strong>&nbsp;PAT</strong></span></td>
        <td style="width: 10%; text-align: center; font-size:13px;">&nbsp;<strong><span style="color: #ff6600;">SAT</span></strong></td>
        <td style="width: 17%; text-align: center; font-size:13px;">&nbsp;<strong><span style="color: #0000ff;">Forecast</span></strong></td>
        <td style="width: 15%; text-align: center; font-size:13px;">&nbsp;<strong><span style="color: #ff00ff;">Actual</span></strong></td>
        </tr>
EOD;
                    $testingpsds .= <<<EOD
        <tr>
      <td style="width: 10%; text-align: center; font-size:13px;" colspan="7">NO DATA AVAILABLE</td>
        </tr>
EOD;
                    $testingpsds .= <<<EOD
        </tbody>
        </table>
        </td>
EOD;
                    $testingpsds .= <<<EOD
        </tr>
        </tbody>
        </table>
EOD;

                }
            }else{
                $testingpsds = <<<EOD
        <tr>
EOD;
                $testingpsds .= <<<EOD
        <td style="width: 100%;">
        <h2 style="text-align: center;  font-size:15px;">INSTALLATION AND TESTING & COMMISSIONING STATUS AT STATION  :AS Of [ <span style="color:#D64627;">date </span> ]</h2>
        <table width="100%" border="1"  cellpadding="1">
        <tbody>
        <tr>
        <td style="width: 28%; text-align: center; font-size:13px;" rowspan="2">&nbsp;<strong>Station</strong></td>
        <td style="width: 10%; text-align: center; font-size:13px;" rowspan="2">&nbsp;<strong>Installation</strong></td>
        <td style="width: 10%; text-align: center; font-size:13px;" rowspan="2"><strong>&nbsp;AC/DC</strong></td>
        <td style="width: 20%; text-align: center; font-size:13px;" colspan="2">&nbsp;<strong>Testing</strong></td>
        <td style="width: 32%; text-align: center; font-size:13px;" colspan="2"><strong>&nbsp;Energization</strong></td>
        </tr>
        <tr>
        <td style="width: 10%; text-align: center; font-size:13px;"><span style="color: #ff6600;"><strong>&nbsp;PAT</strong></span></td>
        <td style="width: 10%; text-align: center; font-size:13px;">&nbsp;<strong><span style="color: #ff6600;">SAT</span></strong></td>
        <td style="width: 17%; text-align: center; font-size:13px;">&nbsp;<strong><span style="color: #0000ff;">Forecast</span></strong></td>
        <td style="width: 15%; text-align: center; font-size:13px;">&nbsp;<strong><span style="color: #ff00ff;">Actual</span></strong></td>
        </tr>
EOD;
                $testingpsds .= <<<EOD
         <tr>
         <td style="width: 10%; text-align: center; font-size:13px;" colspan="7">NO DATA AVAILABLE</td>
        </tr>
EOD;
                $testingpsds .= <<<EOD
        </tbody>
        </table>
        </td>
EOD;
                $testingpsds .= <<<EOD
        </tr>
        </tbody>
        </table>
EOD;

            }
        }else{
            $testingpsds = <<<EOD
        <tr>
EOD;
            $testingpsds .= <<<EOD
        <td style="width: 100%;">
        <h2 style="text-align: center;  font-size:15px;">INSTALLATION AND TESTING & COMMISSIONING STATUS AT STATION  :AS Of [ <span style="color:#D64627;">date </span> ]</h2>
        <table width="100%" border="1"  cellpadding="1">
        <tbody>
        <tr>
        <td style="width: 28%; text-align: center; font-size:13px;" rowspan="2">&nbsp;<strong>Station</strong></td>
        <td style="width: 10%; text-align: center; font-size:13px;" rowspan="2">&nbsp;<strong>Installation</strong></td>
        <td style="width: 10%; text-align: center; font-size:13px;" rowspan="2"><strong>&nbsp;AC/DC</strong></td>
        <td style="width: 20%; text-align: center; font-size:13px;" colspan="2">&nbsp;<strong>Testing</strong></td>
        <td style="width: 32%; text-align: center; font-size:13px;" colspan="2"><strong>&nbsp;Energization</strong></td>
        </tr>
        <tr>
        <td style="width: 10%; text-align: center; font-size:13px;"><span style="color: #ff6600;"><strong>&nbsp;PAT</strong></span></td>
        <td style="width: 10%; text-align: center; font-size:13px;">&nbsp;<strong><span style="color: #ff6600;">SAT</span></strong></td>
        <td style="width: 17%; text-align: center; font-size:13px;">&nbsp;<strong><span style="color: #0000ff;">Forecast</span></strong></td>
        <td style="width: 15%; text-align: center; font-size:13px;">&nbsp;<strong><span style="color: #ff00ff;">Actual</span></strong></td>
        </tr>
EOD;
            $testingpsds .= <<<EOD
      <tr>
        <td style="width: 10%; text-align: center; font-size:13px;" colspan="7">NO DATA AVAILABLE</td>
        </tr>
EOD;
            $testingpsds .= <<<EOD
        </tbody>
        </table>
        </td>
EOD;
            $testingpsds .= <<<EOD
        </tr>
        </tbody>
        </table>
EOD;

        }



  return $testingpsds;
    }
    public function setHeaderTW($imgPath,$projName,$packageName,$dataDate,$slug)
    {
        $header = <<<EOD
        
          <table style="width: 100%;" border="1" >
            <tbody>
                <tr style="height: 300px;">
                    <td style="width: 10%;">
                        <table style="width: 100%;">
                            <tbody>
                                <tr>
                                    <td style="width: 100%; " align="center"><img src="$imgPath"  width="100" height="50"></td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                     <td style="width: 40%;">
                        <table style="width: 100%;">
                            <tbody>
                               <tr>
                                  <td style="width:100%; text-align:center; vertical-align: middle; font-size:15px">$projName</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                       <td style="width: 42%;">
                         <table style="width: 100%;">
                           <tbody>
                              <tr>
                                 <td style="width: 100%; text-align:center; vertical-align: middle; font-size:15px;"><strong>$packageName</strong></td>
                              </tr>
                            </tbody>
                        </table>
                     </td>
                      <td style="width: 8%;">
                         <table style="width: 100%;">
                            <tbody>
                               <tr>
                                 <td style="width: 100%; text-align:center; vertical-align: middle; font-size:20px"><strong>$dataDate</strong></td>
                               </tr>
                             </tbody>
                         </table>
                      </td>
                 </tr>
             </tbody>
          </table>
     
EOD;
        return $header;
    }
    public function packageInfoTW($details,$slug,$category)
    {
        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);
        }
        $package=$obj->{$slug}->{'INFO'}->{'name'};
        $packageInfo = <<<EOD
        
            <table style="width: 100%; margin-top:10px;" border="1" cellpadding="1" height="400mm">
            <tbody>  
                <tr>
                    <td style="width: 20%;">
                       <table style="width: 100%;" cellpadding="1">
                        <tbody>
                            <tr>
                                <td style="width: 100%; text-align: center;   font-size:15px;" colspan="2" ></td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center; border-bottom:1px   solid red  " colspan="2"><strong  style="font-size:15px;" > $package</strong></td>
                            </tr>
                         </tbody>
                       </table>
                    </td>
                       

                          
EOD;
        RETURN $packageInfo;
    }
    public function kadTW($details,$slug,$category){
        $date = date('d-M-y');
        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);

            if (isset ($obj->{$slug}->{'KAD'}) && sizeof($obj->{$slug}->{'KAD'}) > 0) {
                if ($obj->{$slug}->{'KAD'}[0]->{'date'} != "") {
                    $date = $obj->{$slug}->{'KAD'}[0]->{'date'};
                } else {
                    $date = date('d-M-y');
                }
                $kadpsds = <<<EOD
                <table style="width: 100%;" border="0.5" cellpadding="1">
                <tbody>
                <tr>
                <td style="width: 70%;">
                 <h2 style="text-align: center;  font-size:15px;">KEY ACCESS DATES :AS Of [ <span style="color:#D64627;"> $date </span> ]</h2>
                     <table style="width: 100%;" border="1" cellpadding="1">
                            <tbody>
                           <tr>
                                <td style="text-align: center; width: 3%;"><strong style="font-size:13px;">SN</strong></td>
                                <td style="text-align: center; width: 65%;"><strong style="font-size:13px;">DESC.</strong></td>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">Forecast</strong></td>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">Planned</strong></td>
                                <td style="text-align: center; width: 7%;"><strong style="font-size:13px;">Day Left</strong></td>
                                <td style="text-align: center; width: 5%;"><strong style="font-size:13px;">Var.</strong></td>
                                </tr>
EOD;
                for ($i = 1; $i < sizeof($obj->{$slug}->{'KAD'}); $i++) {
                    $item = $obj->{$slug}->{'KAD'}[$i][0];
                    $forecast = $obj->{$slug}->{'KAD'}[$i][1];
                    $contract = $obj->{$slug}->{'KAD'}[$i][2];
                    if(($forecast != null) && ($contract != null) ){
                        $cont = new DateTime($contract);
                        $fore = new DateTime($forecast);
                        $tod = new DateTime(date('d-M-y'));
                        $interval1 = $tod->diff($cont);
                        $date1 = $forecast;
                        $date2 = $contract;
                        $diff = abs(strtotime($date2) - strtotime($date1));
                        if($tod > $cont){
                            $dayleft=0;
                        }else{
                            $dayleft=$interval1->d;
                        }
                        if($date2 > $date1){
                            $variance="-".floor(($diff / (60 * 60 * 24))/7)."w";
                            $status=-1;
                        }else{
                            $variance=floor(($diff / (60 * 60 * 24))/7)."w";
                            $status=1;
                        }
                    }else{
                        $variance="-";
                        $dayleft="-";
                    }
                    if($status < 0){
                        $kadpsds .= <<<EOD
                        <tr>
                                <td style=" font-size:13px; text-align: center; width: 3%;">$i</td>
                                <td style=" font-size:13px; text-align: left; width: 65%;">$item</td>
                                <td style=" font-size:13px; text-align: center; width: 10%;">$forecast</td>
                                <td style=" font-size:13px; text-align: center; width: 10%;">$contract</td>
                                <td style=" font-size:13px; text-align: center; width: 7%;">$dayleft</td>
                                <td style=" font-size:13px; text-align: center; width: 5%; background-color:#ff471a;"><strong>$variance</strong></td>
                        </tr>
EOD;
                    }else{
                        $kadpsds .= <<<EOD
                        <tr>
                                <td style=" font-size:13px; text-align: center; width: 3%;">$i</td>
                                <td style=" font-size:13px; text-align: left; width: 65%;">$item</td>
                                <td style=" font-size:13px; text-align: center; width: 10%;">$forecast</td>
                                <td style=" font-size:13px; text-align: center; width: 10%;">$contract</td>
                                <td style=" font-size:13px; text-align: center; width: 7%;">$dayleft</td>
                                <td style=" font-size:13px; text-align: center; width: 5%; background-color:#66ff99;"><strong>$variance</strong></td>
                        </tr>
EOD;
                    }
                }
                $kadpsds .= <<<EOD
                          
                            </tbody>
                            </table>
               </td>
EOD;
            } else {
                $kadpsds = <<<EOD
          <table style="width: 100%;" border="0.5" cellpadding="1">
                <tbody>
                <tr>
                <td style="width: 70%;">
                 <h2 style="text-align: center;  font-size:15px;">KEY ACCESS DATES :AS Of [ <span style="color:#D64627;"> $date </span> ]</h2>
                     <table style="width: 100%;" border="1" cellpadding="1">
                            <tbody>
                           <tr>
                                <td style="text-align: center; width: 3%;"><strong style="font-size:13px;">SN</strong></td>
                                <td style="text-align: center; width: 65%;"><strong style="font-size:13px;">DESC.</strong></td>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">Forecast</strong></td>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">Planned</strong></td>
                                <td style="text-align: center; width: 7%;"><strong style="font-size:13px;">Day Left</strong></td>
                                <td style="text-align: center; width: 5%;"><strong style="font-size:13px;">Var.</strong></td>
                                </tr>
                                <tr>
                                <td style="text-align: center; width: 100%;"> NO DATA AVAILABLE</td>
                                </tr>
                                    </tbody>
                            </table>
               </td>
EOD;
            }
        }else {
            $kadpsds = <<<EOD
                     <table style="width: 100%;" border="0.5" cellpadding="1">
                <tbody>
                <tr>
                <td style="width: 70%;">
                 <h2 style="text-align: center;  font-size:15px;">KEY ACCESS DATES :AS Of [ <span style="color:#D64627;"> $date </span> ]</h2>
                     <table style="width: 100%;" border="1" cellpadding="1">
                            <tbody>
                           <tr>
                                <td style="text-align: center; width: 3%;"><strong style="font-size:13px;">SN</strong></td>
                                <td style="text-align: center; width: 65%;"><strong style="font-size:13px;">DESC.</strong></td>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">Forecast</strong></td>
                                <td style="text-align: center; width: 10%;"><strong style="font-size:13px;">Planned</strong></td>
                                <td style="text-align: center; width: 7%;"><strong style="font-size:13px;">Day Left</strong></td>
                                <td style="text-align: center; width: 5%;"><strong style="font-size:13px;">Var.</strong></td>
                                </tr>
                                   <tr>
                                <td style="text-align: center; width: 100%;"> NO DATA AVAILABLE</td>
                                </tr>
                                    </tbody>
                            </table>
               </td>
EOD;
        }
        return $kadpsds;
    }
    public function galleryTW($details,$slug,$category){
        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);
            if (isset($obj->{$slug}->{'gallery'})) {

                if (isset($obj->{$slug}->{'gallery'}->{'items'}) && sizeof($obj->{$slug}->{'gallery'}->{'items'}) > 0) {
                    $title = $obj->{$slug}->{'gallery'}->{'items'}[0]->{'title'};
                    $titlepieces = explode("_", $title);
                    $imageTitle = $titlepieces[2] . "-To-" . $titlepieces[2];
                    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
                    $gallerypsds = <<<EOD
                    <td  style="width: 30%;">
                    <h2 style="text-align: center;  font-size:15px;">PROGRESS PHOTOS :AS Of [ <span style="color:#D64627;"> </span> ]</h2>
                              <table style="width: 100%;"  cellspacing="3" cellpadding="1" >
                                <tbody>
                                    <tr>
                                        <td  align="center" style=" font-size:12px;" ></td>
                                    </tr>
                                  
EOD;

                    if(sizeof($obj->{$slug}->{'gallery'}->{'items'}) > 3){
                        $limit=3;
                    }else{
                        $limit=sizeof($obj->{$slug}->{'gallery'}->{'items'});
                    }
                    for ($i = 1; $i < $limit; $i++) {
                        $Image =$protocol. $_SERVER['SERVER_NAME'].":".$_SERVER['SERVER_PORT']."/".$obj->{$slug}->{'gallery'}->{'items'}[$i]->{'path'};
                        $desc = $obj->{$slug}->{'gallery'}->{'items'}[$i]->{'title'};
                        $file_headers = @get_headers($Image);
                        if ($file_headers[0] != 'HTTP/1.1 404 Not Found') {
                            $gallerypsds .= <<<EOD
                            <tr>
                                <td  align="center"><img src="$Image"  width="400" height="225"><br><span>$desc</span></td>
                            </tr>
EOD;
                        }
                    }

                    $gallerypsds .= <<<EOD
                                 </tbody>
                              </table>
                     </td>
                     </tr>
                      </tbody>
                </table>
EOD;
                }else{
                    $gallerypsds = <<<EOD
                 <td  style="width: 30%;" rowspan="2">
                    <h2 style="text-align: center;  font-size:15px;">PROGRESS PHOTOS :AS Of [ <span style="color:#D64627;"> </span> ]</h2>
                              <table style="width: 100%;"  cellspacing="3" cellpadding="1" >
                                <tbody>
                                    <tr>
                                        <td  align="center" style=" font-size:12px;" ></td>
                                    </tr>
                                     <tr>
                                <td>NO PROGRESS PHOTOS</td>
                            </tr>
                             </tbody>
                              </table>
                     </td>
                     </tr>
                      </tbody>
                </table>
EOD;

                }
            }else{

                $gallerypsds = <<<EOD
                <td  style="width: 30%;" rowspan="2">
                  <h2 style="text-align: center;  font-size:15px;">PROGRESS PHOTOS :AS Of [ <span style="color:#D64627;">date </span> ]</h2>
                              <table style="width: 100%;"  cellspacing="3" cellpadding="1">
                                <tbody>
                                    <tr>
                                        <td  align="center" style=" font-size:12px;" ></td>
                                    </tr>
                                    <tr>
                                        <td  align="center"><width="400" height="200">NO PROGRESS PHOTOS</td>
                                      
                                    </tr>
                                 
                                 </tbody>
                              </table>
                </td>
                 </tr>
                  </tbody>
                </table>
EOD;

            }
        }else{
            $gallerypsds = <<<EOD
        <td  style="width: 30%;" rowspan="2">
          <h2 style="text-align: center;  font-size:15px;">PROGRESS PHOTOS :AS Of [ <span style="color:#D64627;">date </span> ]</h2>
                      <table style="width: 100%;"  cellspacing="3" cellpadding="1">
                        <tbody>
                            <tr>
                                <td  align="center" style=" font-size:12px;" ></td>
                            </tr>
                            <tr>
                                <td  align="center"><width="400" height="200">NO PROGRESS PHOTOS</td>
                              
                            </tr>
                         
                         </tbody>
                      </table>
        </td>
         </tr>
          </tbody>
                </table>
EOD;

        }
        return $gallerypsds;


    }
    public function packageInfoKD($details,$slug,$category){
        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);
            if (sizeof($obj->{$slug}->{'INFO'}) > 0) {
                $package=$obj->{$slug}->{'INFO'}->{'name'};
                if(isset($obj->{$slug}->{'INFO'}->{'contractor'})){
                    $con=$obj->{$slug}->{'INFO'}->{'contractor'};
                }else{
                    $con="";
                }

                $packageInfo = <<<EOD
        
            <table style="width: 100%;" border="1"  cellpadding="1">
            <tbody>  
           
                <tr>
                    <td style="width: 20%;">
                       <table style="width: 100%;" cellpadding="1">
                        <tbody>
                            <tr>
                                <td style="width: 100%; text-align: center;   font-size:15px;" colspan="2" ></td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center; border-bottom:1px   solid red  " colspan="2"><strong  style="font-size:15px;" > $package</strong></td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center; font-size:15px;" colspan="2" ><strong>$con</strong></td>
                            </tr>
                             <tr>

                          
EOD;
                if(sizeof($obj->{$slug}->{'INFO'}->{'station'})>0){
                    $packageInfo .= <<<EOD
                                 
                                      <td>
                                        <table   border="1" cellspacing="8" >
                                        <tbody>
                                        <tr>
                                         <td style=" text-align: center;  font-size:13px;"><strong>STATIONS</strong></td>
                                        </tr>
                                       
EOD;
                    for ($i = 0; $i < sizeof($obj->{$slug}->{'INFO'}->{'station'}); $i++) {
                        $station=$obj->{$slug}->{'INFO'}->{'station'}[$i];
                        $packageInfo .= <<<EOD
                                      <tr>
                                        <td style="  text-align: center;  font-size:13px; background-color:#ccffff;">$station</td>
                                       </tr>
EOD;
                    }
                    $packageInfo .= <<<EOD
                                        </tbody>
                                        </table>
                                  </td>
EOD;
                }

                //end STATION
                if( isset ($obj->{$slug}->{'INFO'}->{'mspr'}) && sizeof($obj->{$slug}->{'INFO'}->{'mspr'})>0) {
                    $packageInfo .= <<<EOD
                                         <td>
                                        <table   border="1" cellspacing="8" >
                                        <tbody>
                                        <tr>
                                         <td style=" text-align: center; font-size:13px;" ><strong>MSPR</strong></td>
                                        </tr>
                                       
EOD;
                    for ($i = 0; $i < sizeof($obj->{$slug}->{'INFO'}->{'mspr'}); $i++) {
                        $mspr = $obj->{$slug}->{'INFO'}->{'mspr'}[$i];
                        $packageInfo .= <<<EOD
                                        <tr>
                                        <td style="  text-align: center;  font-size:13px; background-color:#ffffcc;">$mspr</td>
                                        </tr>
EOD;
                    }
                    $packageInfo .= <<<EOD
                                        </tbody>
                                        </table>
                                </td>
EOD;
                }
                //END MSPR
                if(  isset ($obj->{$slug}->{'INFO'}->{'depot'}) && sizeof($obj->{$slug}->{'INFO'}->{'depot'})>0) {
                    $packageInfo .= <<<EOD
                                
                                 <td>
                                        <table   border="1" cellspacing="8">
                                        <tbody>
                                        <tr>
                                         <td style=" text-align: center; font-size:13px;" ><strong>DEPOT</strong></td>
                                        </tr>
                                     
EOD;
                    for ($i = 0; $i < sizeof($obj->{$slug}->{'INFO'}->{'depot'}); $i++) {
                        $depot = $obj->{$slug}->{'INFO'}->{'depot'}[$i];
                        $packageInfo .= <<<EOD
                                
                                <tr>
                                        <td style="  text-align: center;  font-size:13px; background-color:#ffe6ff;">$depot</td>
                                        </tr>
                                     
EOD;
                    }
                    $packageInfo .= <<<EOD
                                
                                      </tbody>
                                        </table>
                                </td>
                              
EOD;
                }
                $packageInfo .= <<<EOD
        
                             </tr>
                         </tbody>
                       </table>
                    </td>
                       
EOD;
            }else{
                $packageInfo = <<<EOD
        
         <table style="width: 100%; margin-top:10px;" border="1"  cellpadding="1" height="400mm">
            <tbody>
                <tr>
                    <td style="width: 20%;">
                       <table style="width: 100%;"  border="1" cellspacing="7" cellpadding="1">
                        <tbody>
                            <tr>
                                <td style="width: 100%; text-align: center; border-bottom:2px solid red  " colspan="2"><strong  style="font-size:15px;" >VIADUCT PACKAGE V201</strong></td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;  font-size:15px;" colspan="2" ><strong>Sunway Construction Sdn Bhd</strong></td>
                            </tr>
                            <tr>
                                <td style="width: 50%; text-align: center;  font-size:13px;"><strong>STATIONS</strong></td>
                                <td style="width: 50%; text-align: center; font-size:13px;" ><strong>MSPR</strong></td>
                            </tr>
                            <tr>
                               <td style="width: 50%; text-align: center;  font-size:13px;"><strong>DEPOT</strong></td>
                            </tr>  
                         </tbody>
                       </table>
                    </td>
            
                       
EOD;
            }
        }else{
            $packageInfo = <<<EOD
        
         <table style="width: 100%; margin-top:10px;" border="1"  cellpadding="1" height="400mm">
            <tbody>
                <tr>
                    <td style="width: 20%;">
                       <table style="width: 100%;"  border="1" cellspacing="7" cellpadding="1">
                        <tbody>
                            <tr>
                                <td style="width: 100%; text-align: center; border-bottom:2px solid red  " colspan="2"><strong  style="font-size:15px;" >VIADUCT PACKAGE V201</strong></td>
                            </tr>
                            <tr>
                                <td style="width: 100%; text-align: center;  font-size:15px;" colspan="2" ><strong>Sunway Construction Sdn Bhd</strong></td>
                            </tr>
                            <tr>
                                <td style="width: 50%; text-align: center;  font-size:13px;"><strong>STATIONS</strong></td>
                                <td style="width: 50%; text-align: center; font-size:13px;" ><strong>MSPR</strong></td>
                            </tr>
                            <tr>
                               <td style="width: 50%; text-align: center;  font-size:13px;"><strong>DEPOT</strong></td>
                            </tr>  
                         </tbody>
                       </table>
                    </td>
            
                       
EOD;
        }
        return $packageInfo;
    }
    public function packageProgressKDSummary($details,$slug,$category){
        $date = date('d-M-y');
        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);
            if (sizeof($obj->{$slug}->{'sys_twmv_kd_summary'}) > 0 && isset($obj->{$slug}->{'sys_twmv_kd_summary'})) {
                if (isset($obj->{$slug}->{'sys_twmv_kd_summary'}{0}->{'date'})) {
                    $date = $obj->{$slug}->{'sys_twmv_kd_summary'}{0}->{'date'};
                } else {
                    $date = date('d-M-y');
                }

                $summary = <<<EOD
                            <td style="width: 50%;">
                             <h2 style="text-align: center;  font-size:15px;">TRACK WORK SUMMARY :AS Of [ <span style="color:#D64627;">$date </span> ]</h2>
                                   <table style="width: 100%;" border="1" cellpadding="1">
                                    <tbody>
EOD;
                //LINE 1
                $summary .= <<<EOD
                       <tr>
EOD;
                for ($i = 1; $i < 5; $i++) {
                    if(isset($obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{0})){
                        $Item = $obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{0};
                    }else{
                        $Item = "-";
                    }
                    if(isset($obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{1})){
                        $Plan =$obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{1};
                    }else{
                        $Plan ="";
                    }
                    if(isset($obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{2})){
                        $Actual =$obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{2};
                    }else{
                        $Actual = "-";
                    }


                    $summary .= <<<EOD
                           
                                          <td style="text-align: center;">
<strong style="font-size: 13px;">$Item</strong>
<p  style="font-size: 13px;">Plan : <strong><span style="color: #008000;">$Plan </strong></span></p>
<p  style="font-size: 13px;">Actual : <strong><span style="color: #ff0000;">$Actual </strong></span></p>
</td>
                       
EOD;
                }

                $summary .= <<<EOD
                    </tr>
EOD;

                //Line 2
                $summary .= <<<EOD
                       <tr>
EOD;
                for ($i = 5; $i < 9; $i++) {
                    if(isset($obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{0})){
                        $Item = $obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{0};
                    }else{
                        $Item = "-";
                    }
                    if(isset($obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{1})){
                        $Plan =$obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{1};
                    }else{
                        $Plan ="";
                    }
                    if(isset($obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{2})){
                        $Actual =$obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{2};
                    }else{
                        $Actual = "-";
                    }
                    $summary .= <<<EOD
                                                                    
                                          <td style="text-align: center;">
<strong style="font-size: 13px;">$Item</strong>
<p  style="font-size: 13px;">Plan : <strong><span style="color: #008000;">$Plan </strong></span></p>
<p  style="font-size: 13px;">Actual : <strong><span style="color: #ff0000;">$Actual </strong></span></p>
</td>
                       
EOD;
                }
                $summary .= <<<EOD
                       </tr>
EOD;
                //line 3
                $summary .= <<<EOD
                       <tr>
EOD;
                for ($i = 9; $i < 12; $i++) {
                    if(isset($obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{0})){
                        $Item = $obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{0};
                    }else{
                        $Item = "-";
                    }
                    if(isset($obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{1})){
                        $Plan =$obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{1};
                    }else{
                        $Plan ="";
                    }
                    if(isset($obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{2})){
                        $Actual =$obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{2};
                    }else{
                        $Actual = "-";
                    }
                    $summary .= <<<EOD
                           
                                                                   
                                          <td style="text-align: center;">
<strong style="font-size: 13px;">$Item</strong>
<p  style="font-size: 13px;">Plan : <strong><span style="color: #008000;">$Plan</strong></span></p>
<p  style="font-size: 13px;">Actual : <strong><span style="color: #ff0000;">$Actual </strong></span></p>
</td>
                       
EOD;
                }
                $summary .= <<<EOD
                       </tr>
EOD;
                //Line 4
                $summary .= <<<EOD
                       <tr>
EOD;
                for ($i = 12; $i < 16; $i++) {
                    if(isset($obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{0})){
                        $Item = $obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{0};
                    }else{
                        $Item = "-";
                    }
                    if(isset($obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{1})){
                        $Plan =$obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{1};
                    }else{
                        $Plan ="";
                    }
                    if(isset($obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{2})){
                        $Actual =$obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{2};
                    }else{
                        $Actual = "-";
                    }
                    $summary .= <<<EOD
                                                      
                                          <td style="text-align: center;">
<strong style="font-size: 13px;">$Item</strong>
<p  style="font-size: 13px;">Plan : <strong><span style="color: #008000;">$Plan</strong></span></p>
<p  style="font-size: 13px;">Actual : <strong><span style="color: #ff0000;">$Actual</strong></span></p>
</td>
EOD;
                }
                $summary .= <<<EOD
                       </tr>
EOD;
                $summary .= <<<EOD
                           
                                     </tbody>
                                        </table>
                            </td>
                    </tr>
                    </tbody>
                    </table>
            
            
                       
EOD;

            }else{
                $summary = <<<EOD
                            <td style="width: 50%;">
                             <h2 style="text-align: center;  font-size:15px;">TRACK WORK SUMMARY :AS Of [ <span style="color:#D64627;">date </span> ]</h2>
                                   <table style="width: 100%;" border="1"   cellpadding="1">
                                        <tbody>
                                        <tr>
                                        <td style="text-align: center;">
                                        <div><strong style="font-size:13px;">Track Survey</strong></div>
                                        </td>
                                        <td >
                                        <div style="text-align: center;"><strong style="font-size:13px;">Surface Preparation</strong></div>
                                        </td>
                                        <td style=" text-align: center;">
                                        <div><strong style="font-size:13px;">Long Rail Distribution</strong></div>
                                        </td>
                                        <td style=" text-align: center;">
                                        <div><strong style="font-size:13px;">Rail &amp; Sleeper Assembly</strong></div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        </tr>
                                        <tr>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        </tr>
                                        <tr>
                                        <td style=" text-align: center;"><strong>&nbsp;</strong>
                                        <div><strong style="font-size:13px;">Rebar &amp; Form Settingy</strong></div>
                                        </td>
                                        <td style=" text-align: center;"><strong>&nbsp;</strong>
                                        <div><strong style="font-size:13px;">Concreting</strong></div>
                                        </td>
                                        <td style=" text-align: center;"><strong>&nbsp;</strong>
                                        <div><strong style="font-size:13px;">Derailment Wall</strong></div>
                                        </td>
                                        <td style="text-align: center;"><strong>&nbsp;</strong>
                                        <div><strong style="font-size:13px;">Welding/Destressing</strong></div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        </tr>
                                        <tr>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;" ><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        </tr>
                                        <tr>
                                        <td style="text-align: center;"><strong>&nbsp;</strong>
                                        <div><strong style="font-size:13px;">Rail Alignment</strong></div>
                                        </td>
                                        <td style=" text-align: center;"><strong>&nbsp;</strong>
                                        <div><strong style="font-size:13px;">PR Bracket Installation</strong></div>
                                        </td>
                                        <td style=" text-align: center;"><strong>&nbsp;</strong>
                                        <div><strong style="font-size:13px;">PR Installation/Alignmnt</strong></div>
                                        </td>
                                        <td style=" text-align: center; font-size:13px;"><strong>&nbsp;PR Cover Installation</strong></td>
                                        </tr>
                                        <tr>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        </tr>
                                        <tr>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        </tr>
                                        <tr>
                                        <td style=" text-align: center; font-size:13px;"><strong>&nbsp;</strong>
                                        <div><strong>Cable Through &amp; Containment</strong></div>
                                        </td>
                                        <td style="text-align: center; font-size:13px;"><strong>&nbsp;</strong>
                                        <div><strong>Commissioning</strong></div>
                                        </td>
                                        <td style="text-align: center; font-size:13px;"><strong>&nbsp;</strong>
                                        <div><strong>Emergency Walkway</strong></div>
                                        </td>
                                        <td style=" text-align: center; font-size:13px;" rowspan="3">
                                        <p><strong><span style="color: #00ff00;">plan&nbsp;</span> &nbsp;</strong></p>
                                        <p><span style="color: #ff00ff;"><strong>Actual&nbsp;</strong></span></p>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>-</strong></span></td>
                                        </tr>
                                        <tr>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        </tr>
                                        </tbody>
                                        </table>
                            </td>
                    </tr>
                    </tbody>
                    </table>
            
                       
EOD;
            }
        }else{
            $summary = <<<EOD
                            <td style="width: 50%;">
                             <h2 style="text-align: center;  font-size:15px;">TRACK WORK SUMMARY :AS Of [ <span style="color:#D64627;">date </span> ]</h2>
                                   <table style="width: 100%;" border="1"   cellpadding="1">
                                        <tbody>
                                        <tr>
                                        <td style="text-align: center;">
                                        <div><strong style="font-size:13px;">Track Survey</strong></div>
                                        </td>
                                        <td >
                                        <div style="text-align: center;"><strong style="font-size:13px;">Surface Preparation</strong></div>
                                        </td>
                                        <td style=" text-align: center;">
                                        <div><strong style="font-size:13px;">Long Rail Distribution</strong></div>
                                        </td>
                                        <td style=" text-align: center;">
                                        <div><strong style="font-size:13px;">Rail &amp; Sleeper Assembly</strong></div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        </tr>
                                        <tr>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        </tr>
                                        <tr>
                                        <td style=" text-align: center;"><strong>&nbsp;</strong>
                                        <div><strong style="font-size:13px;">Rebar &amp; Form Settingy</strong></div>
                                        </td>
                                        <td style=" text-align: center;"><strong>&nbsp;</strong>
                                        <div><strong style="font-size:13px;">Concreting</strong></div>
                                        </td>
                                        <td style=" text-align: center;"><strong>&nbsp;</strong>
                                        <div><strong style="font-size:13px;">Derailment Wall</strong></div>
                                        </td>
                                        <td style="text-align: center;"><strong>&nbsp;</strong>
                                        <div><strong style="font-size:13px;">Welding/Destressing</strong></div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        </tr>
                                        <tr>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;" ><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        </tr>
                                        <tr>
                                        <td style="text-align: center;"><strong>&nbsp;</strong>
                                        <div><strong style="font-size:13px;">Rail Alignment</strong></div>
                                        </td>
                                        <td style=" text-align: center;"><strong>&nbsp;</strong>
                                        <div><strong style="font-size:13px;">PR Bracket Installation</strong></div>
                                        </td>
                                        <td style=" text-align: center;"><strong>&nbsp;</strong>
                                        <div><strong style="font-size:13px;">PR Installation/Alignmnt</strong></div>
                                        </td>
                                        <td style=" text-align: center; font-size:13px;"><strong>&nbsp;PR Cover Installation</strong></td>
                                        </tr>
                                        <tr>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        </tr>
                                        <tr>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        </tr>
                                        <tr>
                                        <td style=" text-align: center; font-size:13px;"><strong>&nbsp;</strong>
                                        <div><strong>Cable Through &amp; Containment</strong></div>
                                        </td>
                                        <td style="text-align: center; font-size:13px;"><strong>&nbsp;</strong>
                                        <div><strong>Commissioning</strong></div>
                                        </td>
                                        <td style="text-align: center; font-size:13px;"><strong>&nbsp;</strong>
                                        <div><strong>Emergency Walkway</strong></div>
                                        </td>
                                        <td style=" text-align: center; font-size:13px;" rowspan="3">
                                        <p><strong><span style="color: #00ff00;">plan&nbsp;</span> &nbsp;</strong></p>
                                        <p><span style="color: #ff00ff;"><strong>Actual&nbsp;</strong></span></p>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>&nbsp;-</strong></span></td>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #00ff00;"><strong>-</strong></span></td>
                                        </tr>
                                        <tr>
                                        <td style="text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        <td style=" text-align: center; font-size:13px;"><span style="color: #ff00ff;"><strong>&nbsp;-</strong></span></td>
                                        </tr>
                                        </tbody>
                                        </table>
                            </td>
                    </tr>
                    </tbody>
                    </table>
            
                       
EOD;
        }

        return $summary;
    }
    public function packageProgressKD($details,$slug,$category)
    {
        $date = date('d-M-y');
            if ($details != null) {
                foreach ($details as $key => $val) {
                    $json = $val['value'];
                }
                $obj = json_decode($json);
                if (isset($obj->{$slug}->{'sys_twmv_kd_summary'})) {
                    if (sizeof($obj->{$slug}->{'sys_twmv_kd_summary'}) > 0 ) {
                        if (isset($obj->{$slug}->{'sys_twmv_kd_summary'}{0}->{'date'})) {
                            $date = $obj->{$slug}->{'sys_twmv_kd_summary'}{0}->{'date'};
                        } else {
                            $date = date('d-M-y');
                        }
                        if(isset($obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{'total_plan'})){
                            $total_plan = $obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{'total_plan'};
                        }else{
                            $total_plan = 0;
                        }
                        if(isset($obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{'total_act'})){
                            $total_act = $obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{'total_act'};
                        }else{
                            $total_act =0;
                        }
                        if(isset($obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{'total_var'})){
                            $total_var = $obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{'total_var'};
                        }else{
                            $total_var = 0;
                        }
                        if(isset($obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{'var_week'})){
                            $var_week = $obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{'var_week'};
                        }else{
                            $var_week = 0;
                        }

                        $packageProg = <<<EOD
                     <td style="width: 30%;">
                        <table style="width: 100%;"  border="1" cellspacing="7" cellpadding="1" >
                            <tbody>
                               <tr>
                               <h2></h2>
                                  <td colspan="3" style="width:100%; text-align:center; vertical-align: middle; font-size:15px"><strong>PROGRESS PERCENTAGE :AS Of [ <span style="color:#D64627;"> $date </span> ]</strong></td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">$total_plan</td>
                                </tr>
                                <tr>
                                    <td style=" text-align: center;  font-size:13px;">Actual</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">$total_act</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Actual Variance</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">$total_var</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Variance (Week)</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">$var_week</td>
                                </tr>
                              
EOD;
                        if ($var_week >= 0) {
                            $packageProg .= <<<EOD
                    
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">UP</td>
                                    <td style="background-color:#33cc33;">&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                   
            
                       
EOD;
                        } else if ($var_week < 0) {


                            $packageProg .= <<<EOD
                    
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">DOWN</td>
                                    <td style="background-color:#ff0000;">&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                   
            
                       
EOD;
                        } else {
                            $packageProg .= <<<EOD
                    
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">-</td>
                                    <td >&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                   
            
                       
EOD;
                        }
                    }else{
                        $packageProg = <<<EOD
                    <td style="width: 30%;">
                        <table style="width: 100%;"  border="1" cellspacing="7" cellpadding="1" >
                            <tbody>
                               <tr>
                                  <td colspan="3" style="width:100%; text-align:center; vertical-align: middle; font-size:15px"><strong>PROGRESS PERCENTAGE :AS Of [ <span style="color:#D64627;"> $date </span> ]</strong></td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Early Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style=" text-align: center;  font-size:13px;">Late Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Actual</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Early</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Late</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                  <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">-</td>
                                    <td >&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                   
            
                       
EOD;
                    }

                }else{

                    $packageProg = <<<EOD
                    <td style="width: 30%;">
                        <table style="width: 100%;"  border="1" cellspacing="7" cellpadding="1" >
                            <tbody>
                               <tr>
                                  <td colspan="3" style="width:100%; text-align:center; vertical-align: middle; font-size:15px"><strong>PROGRESS PERCENTAGE :AS Of [ <span style="color:#D64627;"> $date </span> ]</strong></td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Early Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style=" text-align: center;  font-size:13px;">Late Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Actual</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Early</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Late</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                  <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">-</td>
                                    <td >&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                   
            
                       
EOD;
                }
            }else{

                $packageProg = <<<EOD
                      <td style="width: 30%;">
                        <table style="width: 100%;"  border="1" cellspacing="7" cellpadding="1" >
                            <tbody>
                               <tr>
                                  <td colspan="3" style="width:100%; text-align:center; vertical-align: middle; font-size:15px"><strong>PROGRESS PERCENTAGE :AS Of [ <span style="color:#D64627;"> $date </span> ]</strong></td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Early Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style=" text-align: center;  font-size:13px;">Late Plan</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Actual</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px;">0%</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Early</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;  font-size:13px;">Var.Late</td>
                                    <td colspan="2" style="text-align: center;  font-size:13px; ">-</td>
                                </tr>
                                  <tr>
                                    <td style="text-align: center;  font-size:13px;">Status</td>
                                    <td style="text-align: center;  font-size:13px;">-</td>
                                     <td >&nbsp;</td>
                                </tr>
                            </tbody>
                         </table>
                     </td>
                   
                   
            
                       
EOD;
            }
        return $packageProg;
    }
    public function SummaryGraph($details,$slug,$category){
        $date = date('d-M-y');
        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }
            $obj = json_decode($json);
            if (sizeof($obj->{$slug}->{'sys_twmv_kd_summary'}) > 0 && isset($obj->{$slug}->{'sys_twmv_kd_summary'})) {
                if (isset($obj->{$slug}->{'sys_twmv_kd_summary'}{0}->{'date'})) {
                    $date = $obj->{$slug}->{'sys_twmv_kd_summary'}{0}->{'date'};
                } else {
                    $date = date('d-M-y');
                }
                $data1y = array ();
                $data2y = array ();
                $data3y= array ();
                require_once (APPPATH.'/libraries/jpgraph/jpgraph.php');
                require_once (APPPATH.'/libraries/jpgraph/jpgraph_bar.php');
               /* foreach ($obj->{$slug}->{'sys_twmv_kd_summary'}{1} as $key => $val) {*/
                for ($i = 1; $i < 16; $i++) {
                   /* $Plan = $obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{1};
                    $Actual =$obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{2};*/
                    if(isset($obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{0})){
                       array_push($data3y,$obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{0}) ;
                        if($obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{1}!= null){
                            array_push($data1y,$obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{1}) ;
                        }else{
                            array_push($data1y,0) ;
                        }
                        if($obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{2} != null){
                            array_push($data2y,$obj->{$slug}->{'sys_twmv_kd_summary'}{1}->{$i}{2}) ;
                        }else{
                            array_push($data2y,0) ;
                        }

                    }

                }

                if(sizeof($data3y) >0){
                    $graph = new Graph(1200,400,'auto');
                    $graph->SetScale("textlin");

                    $theme_class=new UniversalTheme;
                    $graph->SetTheme($theme_class);

                    $graph->ygrid->SetFill(false);
                    $graph->xaxis->SetTickLabels($data3y);
                    $graph->yaxis->HideLine(false);
                    $graph->yaxis->HideTicks(false,false);
                    $graph->xaxis->SetLabelAngle(20);
                    $graph->yaxis->title->Set('Total Work (m)');

                    $graph->img->SetMargin(100,30,50,100);
// Create the bar plots
                    $b1plot = new BarPlot($data1y);
                    $b2plot = new BarPlot($data2y);

// Create the grouped bar plot
                    $gbplot = new GroupBarPlot(array($b1plot,$b2plot,));
// ...and add it to the graPH
                    $graph->Add($gbplot);



                    $b1plot->SetColor("white");
                    $b1plot->SetFillColor("chartreuse2");
                    $b1plot->SetLegend('Planned');

                    $b2plot->SetColor("white");
                    $b2plot->SetFillColor("deeppink");
                    $b2plot->SetLegend('Actual');
                    $graph->legend->SetAbsPos(10,20,'right','top');


                    if(file_exists('summary.png')){
                        if(unlink('summary.png')) {
                            $graph->Stroke('summary.png');
                        }
                    }else{
                        $graph->Stroke('summary.png');
                    }
                } else{
                    $data5y=array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
                    $data6y=array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
                    $data7y=array('Track Survey','Surface Preparation','Long Rail Distibution','Rail & Sleeper Assembly','Rebar & Form Settingy','Concreting','Derailment Wall','Welding/Destressing','Rail Alignment','PR Bracket Installation','PR Installation/Alignment','PR Cover Installation','Emergency Walkway','Cable Through & Containment','Commissioning');
                    $graph = new Graph(1200,400,'auto');
                    $graph->SetScale("textlin");

                    $theme_class=new UniversalTheme;
                    $graph->SetTheme($theme_class);

                    $graph->ygrid->SetFill(false);
                    $graph->xaxis->SetTickLabels($data7y);
                    $graph->yaxis->HideLine(false);
                    $graph->yaxis->HideTicks(false,false);
                    $graph->xaxis->SetLabelAngle(20);
                    $graph->yaxis->title->Set('Total Work (m)');

                    $graph->img->SetMargin(100,30,50,100);
// Create the bar plots
                    $b1plot = new BarPlot($data5y);
                    $b2plot = new BarPlot($data6y);

// Create the grouped bar plot
                    $gbplot = new GroupBarPlot(array($b1plot,$b2plot,));
// ...and add it to the graPH
                    $graph->Add($gbplot);



                    $b1plot->SetColor("white");
                    $b1plot->SetFillColor("chartreuse2");
                    $b1plot->SetLegend('Planned');

                    $b2plot->SetColor("white");
                    $b2plot->SetFillColor("deeppink");
                    $b2plot->SetLegend('Actual');
                    $graph->legend->SetAbsPos(10,20,'right','top');


                    if(file_exists('summary.png')){
                        if(unlink('summary.png')) {
                            $graph->Stroke('summary.png');
                        }
                    }else{
                        $graph->Stroke('summary.png');
                    }

                }

                $Image ="summary.png";
                $sumGraph = <<<EOD
                    <table width="100%" border="1">
                    <tbody>
                    <tr>
                    <td >
                      <h2 style="text-align: center;  font-size:15px;">KD OVERALL PROGRESS :AS Of [ <span style="color:#D64627;">$date </span> ]</h2>
                      <table style="width: 100%;">
                                        <tbody>
                                         
                                          <tr>
                                            <td  align="center"><img src="$Image"  width="1200" height="400"></td>
                                          </tr>
                                        </tbody>
                                     </table>
                    </td>
                    	
                    </tr>
                    </tbody>
                    </table>
EOD;
            }else{
                $sumGraph = <<<EOD
                    <table width="100%" border="1">
                    <tbody>
                    <tr>
                    <td >
                      <h2 style="text-align: center;  font-size:15px;">KD OVERALL PROGRESS :AS Of [ <span style="color:#D64627;">$date </span> ]</h2>
                    </td>
                    	
                    </tr>
                    </tbody>
                    </table>
EOD;
            }
        }else{
            $sumGraph = <<<EOD
                    <table width="100%" border="1">
                    <tbody>
                    <tr>
                    <td > <h2 style="text-align: center;  font-size:15px;">KD OVERALL PROGRESS :AS Of [ <span style="color:#D64627;">$date </span> ]</h2></td>
                    </tr>
                    </tbody>
                    </table>
EOD;
        }
        return $sumGraph;
    }
    public function overAllElevatedPDP($details,$slug,$category){
        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }

            $obj = json_decode($json);
            if (sizeof($obj->{$slug}->{'overall_elevated_pdp'}) > 0)
            {
                if(sizeof($obj->{$slug}->{'overall_elevated_pdp'}->{'earlyData'})>0){
                    require_once (APPPATH.'/libraries/jpgraph/jpgraph.php');
                    require_once (APPPATH.'/libraries/jpgraph/jpgraph_line.php');
                    if(sizeof($obj->{$slug}->{'overall_elevated_pdp'}->{'delayedData'})>0){
                        $ydata   =  $obj->{$slug}->{'overall_elevated_pdp'}->{'delayedData'};
                    }else{
                        $ydata   = array(0);
                    }
                    if(sizeof($obj->{$slug}->{'overall_elevated_pdp'}->{'earlyData'})>0){
                        $ydata2  =  $obj->{$slug}->{'overall_elevated_pdp'}->{'earlyData'};
                    }else{
                        $ydata2   = array(0);
                    }
                    if(sizeof($obj->{$slug}->{'overall_elevated_pdp'}->{'actualData'})>0){
                        $ydata3  =  $obj->{$slug}->{'overall_elevated_pdp'}->{'actualData'};
                    }else{
                        $ydata3   = array(0);
                    }
                    $currentEarly= $obj->{$slug}->{'overall_elevated_pdp'}->{'currentEarly'};
                    $currentLate= $obj->{$slug}->{'overall_elevated_pdp'}->{'currentLate'};
                    $currentActual= $obj->{$slug}->{'overall_elevated_pdp'}->{'currentActual'};
                    $varEarly= $obj->{$slug}->{'overall_elevated_pdp'}->{'varEarly'};
                    $varLate= $obj->{$slug}->{'overall_elevated_pdp'}->{'varLate'};
                    $trend= $obj->{$slug}->{'overall_elevated_pdp'}->{'trend'};
                    $width=1200;
                    $height=450;
                    $graph = new Graph($width,$height);
                    $graph->SetScale('intlin');
                    $graph->SetShadow();
                    $graph->SetMargin(40,20,20,40);
                    $graph->ygrid->Show(false, false);
                    /* $graph->grid->Show("false");*/
                    $graph->img->SetAntiAliasing(false);
                    $graph->yaxis->SetFont( FF_ARIAL,FS_BOLD,10);
                    $graph->xaxis->SetFont( FF_ARIAL,FS_BOLD,10);
                    $data3y=array('Jan/16','Feb/16','Mar/16','Apr/16','May/16','Jun/16','Jul/16', 'Aug/16', 'Sep/16', "Oct/16", "Nov/16", "Dec/16", "Jan/17", "Feb/17", "Mar/17", "Apr/17", "May/17", "Jun/17", "Jul/17",
                        "Aug/17", "Sep/17", "Oct/17", "Nov/17", "Dec/17","Jan/18", "Feb/18", "Mar/18", "Apr/18", "May/18", "Jun/18", "Jul/18", "Aug/18", "Sep/18", "Oct/18", "Nov/18", "Dec/18", "Jan/19", "Feb/19", "Mar/19", "Apr/19", "May/19", "Jun/19", "Jul/19", "Aug/19", "Sep/19", "Oct/19", "Nov/19", "Dec/19", "Jan/20", "Feb/20", "Mar/20", "Apr/20", "May/20", "Jun/20", "Jul/20", "Aug/20", "Sep/20", "Oct/20", "Nov/20", "Dec/20", "Jan/21", "Feb/21", "Mar/21", "Apr/21", "May/21", "Jun/21", "Jul/21", "Aug/21", "Sep/21", "Oct/21", "Nov/21", "Dec/21",
                        "Jan/22", "Feb/22", "Mar/22", "Apr/22", "May/22", "Jun/22", "Jul/22", "Aug/22", "Sep/22", "Oct/22", "Nov/22", "Dec/22");
                    $graph->xaxis->SetTickLabels($data3y);
                    $graph->xaxis->SetLabelAngle(20);
                    $lineplot=new LinePlot($ydata);
                    $graph->Add($lineplot);
                    $lineplot->SetWeight(3);
                    $lineplot->SetStyle("solid");
                    $lineplot->SetColor('firebrick3');

                    $lineplot2=new LinePlot($ydata2);
                    $graph->Add($lineplot2);
                    $lineplot2->SetWeight(3);
                    $lineplot2->SetStyle("solid");
                    $lineplot2->SetColor('green');

                    $lineplot3=new LinePlot($ydata3);
                    $graph->Add($lineplot3);
                    $lineplot3->SetWeight(3);
                    $lineplot3->SetStyle("solid");
                    $lineplot3->SetColor('blue');

                    if(file_exists('overAllElevatedPDP.png')){
                        if(unlink('overAllElevatedPDP.png')) {
                            $graph->Stroke('overAllElevatedPDP.png');
                        }
                    }else{
                        $graph->Stroke('overAllElevatedPDP.png');
                    }
                    $Image ="overAllElevatedPDP.png";
                    $sumGraph = <<<EOD
                <table width="100%"  border="1">
                <tbody>
                <tr>
                <td width="50%"><h2 style="text-align: center;  font-size:15px;">Overall [Elevated + Systems] - PDP Scope</h2>
                            <table width="100%">
                            <tbody>
                            <tr><td>
                    <table width="98%" border="1">
                    <tbody>
                    <tr>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentEarly</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentLate</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentActual</td>
                    <td style="text-align: center;" colspan="2">Variance&nbsp;&nbsp;</td>
                    <td style="text-align: center; font-size:13px;" rowspan="2">&nbsp; &nbsp; $trend&nbsp;&nbsp;</td>
                    </tr>
                    <tr>
                    <td style="text-align: center;">&nbsp;%&nbsp; Early</td>
                    <td style="text-align: center;">&nbsp;% &nbsp;Late</td>
                    <td style="text-align: center;">&nbsp;% &nbsp;Actual</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$varEarly E</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$varLate L</td>
                    </tr>
                    </tbody>
                    </table></td>
                </tr>
                  <tr align="center">
                <td  style="text-align: center;" width="80%" > </td>
                </tr>
                 <tr align="center" >
                <td align="center" width="80%" > <img src="$Image"  width="1200" height="450"></td>
                 </tr>
                  <tr>
                  <td>
                  </td>
                 </tr>
                 
                                                                <tr>
                                                                <td>
                                                              
                                                                </td>
                                                                </tr>
                </tbody>
                </table>
EOD;
                 $sumGraph .= <<<EOD
                   
                   </td>
                 
EOD;
                }else{
                    $sumGraph = <<<EOD
                <table width="100%"  border="1">
                <tbody>
                <tr>
                <td width="50%"><h2 style="text-align: center;  font-size:15px;">Overall [Elevated + Systems] - PDP Scope</h2>
                     </td>
                    
                 
EOD;
                }

            }else{
                $sumGraph = <<<EOD
                <table width="100%"  border="1">
                <tbody>
                <tr>
                <td width="50%"><h2 style="text-align: center;  font-size:15px;">Overall [Elevated + Systems] - PDP Scope</h2>
                     </td>
                   
                 
EOD;
            }
        }else{
            $sumGraph = <<<EOD
                <table width="100%"  border="1">
                <tbody>
                <tr>
                <td width="50%"><h2 style="text-align: center;  font-size:15px;">Overall [Elevated + Systems] - PDP Scope</h2>
                     </td>
                   
EOD;
        }

        return $sumGraph;
    }
    public function phaseOne($details,$slug,$category){

        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }

            $obj = json_decode($json);
            if (sizeof($obj->{$slug}->{'phase1_elevated_system'}) > 0)
            {
                if(sizeof($obj->{$slug}->{'phase1_elevated_system'}->{'earlyData'})>0){
                    require_once (APPPATH.'/libraries/jpgraph/jpgraph.php');
                    require_once (APPPATH.'/libraries/jpgraph/jpgraph_line.php');
                    if(sizeof($obj->{$slug}->{'phase1_elevated_system'}->{'delayedData'})>0){
                        $ydata   =  $obj->{$slug}->{'phase1_elevated_system'}->{'delayedData'};
                    }else{
                        $ydata   = array(0);
                    }
                    if(sizeof($obj->{$slug}->{'phase1_elevated_system'}->{'earlyData'})>0){
                        $ydata2  =  $obj->{$slug}->{'phase1_elevated_system'}->{'earlyData'};
                    }else{
                        $ydata2   = array(0);
                    }
                    if(sizeof($obj->{$slug}->{'phase1_elevated_system'}->{'actualData'})>0){
                        $ydata3  =  $obj->{$slug}->{'phase1_elevated_system'}->{'actualData'};
                    }else{
                        $ydata3   = array(0);
                    }
                    $currentEarly= $obj->{$slug}->{'phase1_elevated_system'}->{'currentEarly'};
                    $currentLate= $obj->{$slug}->{'phase1_elevated_system'}->{'currentLate'};
                    $currentActual= $obj->{$slug}->{'phase1_elevated_system'}->{'currentActual'};
                    $varEarly= $obj->{$slug}->{'phase1_elevated_system'}->{'varEarly'};
                    $varLate= $obj->{$slug}->{'phase1_elevated_system'}->{'varLate'};
                    $trend= $obj->{$slug}->{'phase1_elevated_system'}->{'trend'};
                    $width=1200;
                    $height=450;
                    $graph = new Graph($width,$height);
                    $graph->SetScale('intlin');
                    $graph->SetShadow();
                    $graph->SetMargin(40,20,20,40);
                    $graph->ygrid->Show(false, false);
                    /* $graph->grid->Show("false");*/
                    $graph->img->SetAntiAliasing(false);
                    $graph->yaxis->SetFont( FF_ARIAL,FS_BOLD,10);
                    $graph->xaxis->SetFont( FF_ARIAL,FS_BOLD,10);
                    $data3y=array('Jan/16','Feb/16','Mar/16','Apr/16','May/16','Jun/16','Jul/16', 'Aug/16', 'Sep/16', "Oct/16", "Nov/16", "Dec/16", "Jan/17", "Feb/17", "Mar/17", "Apr/17", "May/17", "Jun/17", "Jul/17",
                        "Aug/17", "Sep/17", "Oct/17", "Nov/17", "Dec/17","Jan/18", "Feb/18", "Mar/18", "Apr/18", "May/18", "Jun/18", "Jul/18", "Aug/18", "Sep/18", "Oct/18", "Nov/18", "Dec/18", "Jan/19", "Feb/19", "Mar/19", "Apr/19", "May/19", "Jun/19", "Jul/19", "Aug/19", "Sep/19", "Oct/19", "Nov/19", "Dec/19", "Jan/20", "Feb/20", "Mar/20", "Apr/20", "May/20", "Jun/20", "Jul/20", "Aug/20", "Sep/20", "Oct/20", "Nov/20", "Dec/20", "Jan/21", "Feb/21", "Mar/21", "Apr/21", "May/21", "Jun/21", "Jul/21", "Aug/21", "Sep/21", "Oct/21", "Nov/21", "Dec/21",
                        "Jan/22", "Feb/22", "Mar/22", "Apr/22", "May/22", "Jun/22", "Jul/22", "Aug/22", "Sep/22", "Oct/22", "Nov/22", "Dec/22");
                    $graph->xaxis->SetTickLabels($data3y);
                    $graph->xaxis->SetLabelAngle(20);
                    $lineplot=new LinePlot($ydata);
                    $graph->Add($lineplot);
                    $lineplot->SetWeight(3);
                    $lineplot->SetStyle("solid");
                    $lineplot->SetColor('firebrick3');

                    $lineplot2=new LinePlot($ydata2);
                    $graph->Add($lineplot2);
                    $lineplot2->SetWeight(3);
                    $lineplot2->SetStyle("solid");
                    $lineplot2->SetColor('green');

                    $lineplot3=new LinePlot($ydata3);
                    $graph->Add($lineplot3);
                    $lineplot3->SetWeight(3);
                    $lineplot3->SetStyle("solid");
                    $lineplot3->SetColor('blue');

                    if(file_exists('phase1_elevated_system.png')){
                        if(unlink('phase1_elevated_system.png')) {
                            $graph->Stroke('phase1_elevated_system.png');
                        }
                    }else{
                        $graph->Stroke('phase1_elevated_system.png');
                    }
                    $Image ="phase1_elevated_system.png";
                    $sumGraph = <<<EOD
               <td  width="50%"><h2 style="text-align: center;  font-size:15px;">Phase 1 [ Elevated + Systems ] </h2>
                            <table width="100%">
                            <tbody>
                            <tr><td>
                    <table width="98%" border="1">
                    <tbody>
                    <tr>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentEarly</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentLate</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentActual</td>
                    <td style="text-align: center;" colspan="2">Variance&nbsp;&nbsp;</td>
                    <td style="text-align: center; font-size:13px;" rowspan="2">&nbsp; &nbsp; $trend&nbsp;&nbsp;</td>
                    </tr>
                    <tr>
                    <td style="text-align: center;">&nbsp;%&nbsp; Early</td>
                    <td style="text-align: center;">&nbsp;% &nbsp;Late</td>
                    <td style="text-align: center;">&nbsp;% &nbsp;Actual</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$varEarly E</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$varLate L</td>
                    </tr>
                    </tbody>
                    </table></td>
                </tr>
                  <tr align="center">
                <td  style="text-align: center;" width="80%" > </td>
                </tr>
                 <tr align="center" >
                <td align="center" width="80%" > <img src="$Image"  width="1200" height="450"></td>
                </tr>
                 <tr>
                  <td>
                  </td>
                 </tr>
                 
                                                                <tr>
                                                                <td>
                                                              
                                                                </td>
                                                                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                 
EOD;
                }else{
                    $sumGraph = <<<EOD
                <td  width="50%"><h2 style="text-align: center;  font-size:15px;">Phase 1 [ Elevated + Systems ] </h2>
                     </td>
                     </tr>
                    
                 
EOD;
                }

            }else{
                $sumGraph = <<<EOD
                   <td  width="50%"><h2 style="text-align: center;  font-size:15px;">Phase 1 [ Elevated + Systems ] </h2>
                     </td>
                     </tr>
                   
                 
EOD;
            }
        }else{
            $sumGraph = <<<EOD
                  <td  width="50%"><h2 style="text-align: center;  font-size:15px;">Phase 1 [ Elevated + Systems ] </h2>
                     </td>
                     </tr>
                   
EOD;
        }
        return $sumGraph;
    }
    public function phaseTwo($details,$slug,$category){

        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }

            $obj = json_decode($json);
            if (sizeof($obj->{$slug}->{'phase2_elevated_system'}) > 0)
            {
                if(sizeof($obj->{$slug}->{'phase2_elevated_system'}->{'earlyData'})>0){
                    require_once (APPPATH.'/libraries/jpgraph/jpgraph.php');
                    require_once (APPPATH.'/libraries/jpgraph/jpgraph_line.php');
                    if(sizeof($obj->{$slug}->{'phase2_elevated_system'}->{'delayedData'})>0){
                        $ydata   =  $obj->{$slug}->{'phase2_elevated_system'}->{'delayedData'};
                    }else{
                        $ydata   = array(0);
                    }
                    if(sizeof($obj->{$slug}->{'phase2_elevated_system'}->{'earlyData'})>0){
                        $ydata2  =  $obj->{$slug}->{'phase2_elevated_system'}->{'earlyData'};
                    }else{
                        $ydata2   = array(0);
                    }
                    if(sizeof($obj->{$slug}->{'phase2_elevated_system'}->{'actualData'})>0){
                        $ydata3  =  $obj->{$slug}->{'phase2_elevated_system'}->{'actualData'};
                    }else{
                        $ydata3   = array(0);
                    }
                    $currentEarly= $obj->{$slug}->{'phase2_elevated_system'}->{'currentEarly'};
                    $currentLate= $obj->{$slug}->{'phase2_elevated_system'}->{'currentLate'};
                    $currentActual= $obj->{$slug}->{'phase2_elevated_system'}->{'currentActual'};
                    $varEarly= $obj->{$slug}->{'phase2_elevated_system'}->{'varEarly'};
                    $varLate= $obj->{$slug}->{'phase2_elevated_system'}->{'varLate'};
                    $trend= $obj->{$slug}->{'phase2_elevated_system'}->{'trend'};
                    $width=1200;
                    $height=450;
                    $graph = new Graph($width,$height);
                    $graph->SetScale('intlin');
                    $graph->SetShadow();
                    $graph->SetMargin(40,20,20,40);
                    $graph->ygrid->Show(false, false);
                    /* $graph->grid->Show("false");*/
                    $graph->img->SetAntiAliasing(false);
                    $graph->yaxis->SetFont( FF_ARIAL,FS_BOLD,10);
                    $graph->xaxis->SetFont( FF_ARIAL,FS_BOLD,10);
                    $data3y=array('Jan/16','Feb/16','Mar/16','Apr/16','May/16','Jun/16','Jul/16', 'Aug/16', 'Sep/16', "Oct/16", "Nov/16", "Dec/16", "Jan/17", "Feb/17", "Mar/17", "Apr/17", "May/17", "Jun/17", "Jul/17",
                        "Aug/17", "Sep/17", "Oct/17", "Nov/17", "Dec/17","Jan/18", "Feb/18", "Mar/18", "Apr/18", "May/18", "Jun/18", "Jul/18", "Aug/18", "Sep/18", "Oct/18", "Nov/18", "Dec/18", "Jan/19", "Feb/19", "Mar/19", "Apr/19", "May/19", "Jun/19", "Jul/19", "Aug/19", "Sep/19", "Oct/19", "Nov/19", "Dec/19", "Jan/20", "Feb/20", "Mar/20", "Apr/20", "May/20", "Jun/20", "Jul/20", "Aug/20", "Sep/20", "Oct/20", "Nov/20", "Dec/20", "Jan/21", "Feb/21", "Mar/21", "Apr/21", "May/21", "Jun/21", "Jul/21", "Aug/21", "Sep/21", "Oct/21", "Nov/21", "Dec/21",
                        "Jan/22", "Feb/22", "Mar/22", "Apr/22", "May/22", "Jun/22", "Jul/22", "Aug/22", "Sep/22", "Oct/22", "Nov/22", "Dec/22");
                    $graph->xaxis->SetTickLabels($data3y);
                    $graph->xaxis->SetLabelAngle(20);
                    $lineplot=new LinePlot($ydata);
                    $graph->Add($lineplot);
                    $lineplot->SetWeight(3);
                    $lineplot->SetStyle("solid");
                    $lineplot->SetColor('firebrick3');

                    $lineplot2=new LinePlot($ydata2);
                    $graph->Add($lineplot2);
                    $lineplot2->SetWeight(3);
                    $lineplot2->SetStyle("solid");
                    $lineplot2->SetColor('green');

                    $lineplot3=new LinePlot($ydata3);
                    $graph->Add($lineplot3);
                    $lineplot3->SetWeight(3);
                    $lineplot3->SetStyle("solid");
                    $lineplot3->SetColor('blue');

                    if(file_exists('phase2_elevated_system.png')){
                        if(unlink('phase2_elevated_system.png')) {
                            $graph->Stroke('phase2_elevated_system.png');
                        }
                    }else{
                        $graph->Stroke('phase2_elevated_system.png');
                    }
                    $Image ="phase2_elevated_system.png";
                    $sumGraph = <<<EOD
              <tr>
                     <td  width="50%"><h2 style="text-align: center;  font-size:15px;">Phase 2 [ Elevated + Systems ] </h2>
                            <table width="100%">
                            <tbody>
                            <tr><td>
                    <table width="98%" border="1">
                    <tbody>
                    <tr>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentEarly</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentLate</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentActual</td>
                    <td style="text-align: center;" colspan="2">Variance&nbsp;&nbsp;</td>
                    <td style="text-align: center; font-size:13px;" rowspan="2">&nbsp; &nbsp; $trend&nbsp;&nbsp;</td>
                    </tr>
                    <tr>
                    <td style="text-align: center;">&nbsp;%&nbsp; Early</td>
                    <td style="text-align: center;">&nbsp;% &nbsp;Late</td>
                    <td style="text-align: center;">&nbsp;% &nbsp;Actual</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$varEarly E</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$varLate L</td>
                    </tr>
                    </tbody>
                    </table></td>
                </tr>
                  <tr align="center">
                <td  style="text-align: center;" width="80%" > </td>
                </tr>
                 <tr align="center" >
                <td align="center" width="80%" > <img src="$Image"  width="1200" height="450"></td>
                </tr>
                 <tr>
                  <td>
                  </td>
                 </tr>
                 
                                                                <tr>
                                                                <td>
                                                              
                                                                </td>
                                                                </tr>
                </tbody>
                </table>
                </td>
                 
EOD;
                }else{
                    $sumGraph = <<<EOD
                <tr>
                     <td  width="50%"><h2 style="text-align: center;  font-size:15px;">Phase 2 [ Elevated + Systems ] </h2>
                     </td>
EOD;
                }

            }else{
                $sumGraph = <<<EOD
               <tr>
                     <td  width="50%"><h2 style="text-align: center;  font-size:15px;">Phase 2 [ Elevated + Systems ] </h2>
                     </td>
EOD;
            }
        }else{
            $sumGraph = <<<EOD
                 <tr>
                     <td  width="50%"><h2 style="text-align: center;  font-size:15px;">Phase 2 [ Elevated + Systems ] </h2>
                     </td>
EOD;
        }
        return $sumGraph;
    }
    public function phaseTwoUGW($details,$slug,$category){


        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }

            $obj = json_decode($json);
            if (sizeof($obj->{$slug}->{'phase2_ug_ele_sys'}) > 0)
            {
                if(sizeof($obj->{$slug}->{'phase2_ug_ele_sys'}->{'earlyData'})>0){
                    require_once (APPPATH.'/libraries/jpgraph/jpgraph.php');
                    require_once (APPPATH.'/libraries/jpgraph/jpgraph_line.php');
                    if(sizeof($obj->{$slug}->{'phase2_ug_ele_sys'}->{'delayedData'})>0){
                        $ydata   =  $obj->{$slug}->{'phase2_ug_ele_sys'}->{'delayedData'};
                    }else{
                        $ydata   = array(0);
                    }
                    if(sizeof($obj->{$slug}->{'phase2_ug_ele_sys'}->{'earlyData'})>0){
                        $ydata2  =  $obj->{$slug}->{'phase2_ug_ele_sys'}->{'earlyData'};
                    }else{
                        $ydata2   = array(0);
                    }
                    if(sizeof($obj->{$slug}->{'phase2_ug_ele_sys'}->{'actualData'})>0){
                        $ydata3  =  $obj->{$slug}->{'phase2_ug_ele_sys'}->{'actualData'};
                    }else{
                        $ydata3   = array(0);
                    }
                    $currentEarly= $obj->{$slug}->{'phase2_ug_ele_sys'}->{'currentEarly'};
                    $currentLate= $obj->{$slug}->{'phase2_ug_ele_sys'}->{'currentLate'};
                    $currentActual= $obj->{$slug}->{'phase2_ug_ele_sys'}->{'currentActual'};
                    $varEarly= $obj->{$slug}->{'phase2_ug_ele_sys'}->{'varEarly'};
                    $varLate= $obj->{$slug}->{'phase2_ug_ele_sys'}->{'varLate'};
                    $trend= $obj->{$slug}->{'phase2_ug_ele_sys'}->{'trend'};
                    $width=1200;
                    $height=450;
                    $graph = new Graph($width,$height);
                    $graph->SetScale('intlin');
                    $graph->SetShadow();
                    $graph->SetMargin(40,20,20,40);
                    $graph->ygrid->Show(false, false);
                    /* $graph->grid->Show("false");*/
                    $graph->img->SetAntiAliasing(false);
                    $graph->yaxis->SetFont( FF_ARIAL,FS_BOLD,10);
                    $graph->xaxis->SetFont( FF_ARIAL,FS_BOLD,10);
                    $data3y=array('Jan/16','Feb/16','Mar/16','Apr/16','May/16','Jun/16','Jul/16', 'Aug/16', 'Sep/16', "Oct/16", "Nov/16", "Dec/16", "Jan/17", "Feb/17", "Mar/17", "Apr/17", "May/17", "Jun/17", "Jul/17",
                        "Aug/17", "Sep/17", "Oct/17", "Nov/17", "Dec/17","Jan/18", "Feb/18", "Mar/18", "Apr/18", "May/18", "Jun/18", "Jul/18", "Aug/18", "Sep/18", "Oct/18", "Nov/18", "Dec/18", "Jan/19", "Feb/19", "Mar/19", "Apr/19", "May/19", "Jun/19", "Jul/19", "Aug/19", "Sep/19", "Oct/19", "Nov/19", "Dec/19", "Jan/20", "Feb/20", "Mar/20", "Apr/20", "May/20", "Jun/20", "Jul/20", "Aug/20", "Sep/20", "Oct/20", "Nov/20", "Dec/20", "Jan/21", "Feb/21", "Mar/21", "Apr/21", "May/21", "Jun/21", "Jul/21", "Aug/21", "Sep/21", "Oct/21", "Nov/21", "Dec/21",
                        "Jan/22", "Feb/22", "Mar/22", "Apr/22", "May/22", "Jun/22", "Jul/22", "Aug/22", "Sep/22", "Oct/22", "Nov/22", "Dec/22");
                    $graph->xaxis->SetTickLabels($data3y);
                    $graph->xaxis->SetLabelAngle(20);
                    $lineplot=new LinePlot($ydata);
                    $graph->Add($lineplot);
                    $lineplot->SetWeight(3);
                    $lineplot->SetStyle("solid");
                    $lineplot->SetColor('firebrick3');

                    $lineplot2=new LinePlot($ydata2);
                    $graph->Add($lineplot2);
                    $lineplot2->SetWeight(3);
                    $lineplot2->SetStyle("solid");
                    $lineplot2->SetColor('green');

                    $lineplot3=new LinePlot($ydata3);
                    $graph->Add($lineplot3);
                    $lineplot3->SetWeight(3);
                    $lineplot3->SetStyle("solid");
                    $lineplot3->SetColor('blue');

                    if(file_exists('phase2_ug_ele_sys.png')){
                        if(unlink('phase2_ug_ele_sys.png')) {
                            $graph->Stroke('phase2_ug_ele_sys.png');
                        }
                    }else{
                        $graph->Stroke('phase2_ug_ele_sys.png');
                    }
                    $Image ="phase2_ug_ele_sys.png";
                    $sumGraph = <<<EOD
                 <td  width="50%"><h2 style="text-align: center;  font-size:15px;">Phase 2 [ UGW + Elevated + Systems ]</h2>
                            <table width="100%">
                            <tbody>
                            <tr><td>
                    <table width="98%" border="1">
                    <tbody>
                    <tr>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentEarly</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentLate</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentActual</td>
                    <td style="text-align: center;" colspan="2">Variance&nbsp;&nbsp;</td>
                    <td style="text-align: center; font-size:13px;" rowspan="2">&nbsp; &nbsp; $trend&nbsp;&nbsp;</td>
                    </tr>
                    <tr>
                    <td style="text-align: center;">&nbsp;%&nbsp; Early</td>
                    <td style="text-align: center;">&nbsp;% &nbsp;Late</td>
                    <td style="text-align: center;">&nbsp;% &nbsp;Actual</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$varEarly E</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$varLate L</td>
                    </tr>
                    </tbody>
                    </table></td>
                </tr>
                  <tr align="center">
                <td  style="text-align: center;" width="80%" > </td>
                </tr>
                 <tr align="center" >
                <td align="center" width="80%" > <img src="$Image"  width="1200" height="450"></td>
                </tr>
                 <tr>
                  <td>
                  </td>
                 </tr>
                 
                                                                <tr>
                                                                <td>
                                                              
                                                                </td>
                                                                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                 
EOD;
                }else{
                    $sumGraph = <<<EOD
                 <td  width="50%">
                    <h2 style="text-align: center;  font-size:15px;">Phase 2 [ UGW + Elevated + Systems ]</h2>
                    </td>
                    </tr>
EOD;
                }

            }else{
                $sumGraph = <<<EOD
                 <td  width="50%">
                    <h2 style="text-align: center;  font-size:15px;">Phase 2 [ UGW + Elevated + Systems ]</h2>
                    </td>
                    </tr>
EOD;
            }
        }else{
            $sumGraph = <<<EOD
              <td  width="50%">
                    <h2 style="text-align: center;  font-size:15px;">Phase 2 [ UGW + Elevated + Systems ]</h2>
                    </td>
                    </tr>
EOD;
        }
        return $sumGraph;
    }
    public function elevated($details,$slug,$category){




        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }

            $obj = json_decode($json);
            if (sizeof($obj->{$slug}->{'elevated'}) > 0)
            {
                if(sizeof($obj->{$slug}->{'elevated'}->{'earlyData'})>0){
                    require_once (APPPATH.'/libraries/jpgraph/jpgraph.php');
                    require_once (APPPATH.'/libraries/jpgraph/jpgraph_line.php');
                    if(sizeof($obj->{$slug}->{'elevated'}->{'delayedData'})>0){
                        $ydata   =  $obj->{$slug}->{'elevated'}->{'delayedData'};
                    }else{
                        $ydata   = array(0);
                    }
                    if(sizeof($obj->{$slug}->{'elevated'}->{'earlyData'})>0){
                        $ydata2  =  $obj->{$slug}->{'elevated'}->{'earlyData'};
                    }else{
                        $ydata2   = array(0);
                    }
                    if(sizeof($obj->{$slug}->{'elevated'}->{'actualData'})>0){
                        $ydata3  =  $obj->{$slug}->{'elevated'}->{'actualData'};
                    }else{
                        $ydata3   = array(0);
                    }
                    $currentEarly= $obj->{$slug}->{'elevated'}->{'currentEarly'};
                    $currentLate= $obj->{$slug}->{'elevated'}->{'currentLate'};
                    $currentActual= $obj->{$slug}->{'elevated'}->{'currentActual'};
                    $varEarly= $obj->{$slug}->{'elevated'}->{'varEarly'};
                    $varLate= $obj->{$slug}->{'elevated'}->{'varLate'};
                    $trend= $obj->{$slug}->{'elevated'}->{'trend'};
                    $width=1200;
                    $height=450;
                    $graph = new Graph($width,$height);
                    $graph->SetScale('intlin');
                    $graph->SetShadow();
                    $graph->SetMargin(40,20,20,40);
                    $graph->ygrid->Show(false, false);
                    /* $graph->grid->Show("false");*/
                    $graph->img->SetAntiAliasing(false);
                    $graph->yaxis->SetFont( FF_ARIAL,FS_BOLD,10);
                    $graph->xaxis->SetFont( FF_ARIAL,FS_BOLD,10);
                    $data3y=array('Jan/16','Feb/16','Mar/16','Apr/16','May/16','Jun/16','Jul/16', 'Aug/16', 'Sep/16', "Oct/16", "Nov/16", "Dec/16", "Jan/17", "Feb/17", "Mar/17", "Apr/17", "May/17", "Jun/17", "Jul/17",
                        "Aug/17", "Sep/17", "Oct/17", "Nov/17", "Dec/17","Jan/18", "Feb/18", "Mar/18", "Apr/18", "May/18", "Jun/18", "Jul/18", "Aug/18", "Sep/18", "Oct/18", "Nov/18", "Dec/18", "Jan/19", "Feb/19", "Mar/19", "Apr/19", "May/19", "Jun/19", "Jul/19", "Aug/19", "Sep/19", "Oct/19", "Nov/19", "Dec/19", "Jan/20", "Feb/20", "Mar/20", "Apr/20", "May/20", "Jun/20", "Jul/20", "Aug/20", "Sep/20", "Oct/20", "Nov/20", "Dec/20", "Jan/21", "Feb/21", "Mar/21", "Apr/21", "May/21", "Jun/21", "Jul/21", "Aug/21", "Sep/21", "Oct/21", "Nov/21", "Dec/21",
                        "Jan/22", "Feb/22", "Mar/22", "Apr/22", "May/22", "Jun/22", "Jul/22", "Aug/22", "Sep/22", "Oct/22", "Nov/22", "Dec/22");
                    $graph->xaxis->SetTickLabels($data3y);
                    $graph->xaxis->SetLabelAngle(20);
                    $lineplot=new LinePlot($ydata);
                    $graph->Add($lineplot);
                    $lineplot->SetWeight(3);
                    $lineplot->SetStyle("solid");
                    $lineplot->SetColor('firebrick3');

                    $lineplot2=new LinePlot($ydata2);
                    $graph->Add($lineplot2);
                    $lineplot2->SetWeight(3);
                    $lineplot2->SetStyle("solid");
                    $lineplot2->SetColor('green');

                    $lineplot3=new LinePlot($ydata3);
                    $graph->Add($lineplot3);
                    $lineplot3->SetWeight(3);
                    $lineplot3->SetStyle("solid");
                    $lineplot3->SetColor('blue');

                    if(file_exists('elevated.png')){
                        if(unlink('elevated.png')) {
                            $graph->Stroke('elevated.png');
                        }
                    }else{
                        $graph->Stroke('elevated.png');
                    }
                    $Image ="elevated.png";
                    $sumGraph = <<<EOD
               <tr>
                        <td width="50%"><h2 style="text-align: center;  font-size:15px;">Elevated  Only</h2>
                            <table width="100%">
                            <tbody>
                            <tr><td>
                    <table width="98%" border="1">
                    <tbody>
                    <tr>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentEarly</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentLate</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentActual</td>
                    <td style="text-align: center;" colspan="2">Variance&nbsp;&nbsp;</td>
                    <td style="text-align: center; font-size:13px;" rowspan="2">&nbsp; &nbsp; $trend&nbsp;&nbsp;</td>
                    </tr>
                    <tr>
                    <td style="text-align: center;">&nbsp;%&nbsp; Early</td>
                    <td style="text-align: center;">&nbsp;% &nbsp;Late</td>
                    <td style="text-align: center;">&nbsp;% &nbsp;Actual</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$varEarly E</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$varLate L</td>
                    </tr>
                    </tbody>
                    </table></td>
                </tr>
                  <tr align="center">
                <td  style="text-align: center;" width="80%" > </td>
                </tr>
                 <tr align="center" >
                <td align="center" width="80%" > <img src="$Image"  width="1200" height="450"></td>
                </tr>
                 <tr>
                  <td>
                  </td>
                 </tr>
                 
                                                                <tr>
                                                                <td>
                                                              
                                                                </td>
                                                                </tr>
                </tbody>
                </table>
                </td>
                 
EOD;
                }else{
                    $sumGraph = <<<EOD
                <tr>
                        <td  width="50%"> <h2 style="text-align: center;  font-size:15px;">Elevated  Only</h2>
                     </td>
                    
                 
EOD;
                }

            }else{
                $sumGraph = <<<EOD
            <tr>
                        <td  width="50%"> <h2 style="text-align: center;  font-size:15px;">Elevated  Only</h2>
                     </td>
                   
                 
EOD;
            }
        }else{
            $sumGraph = <<<EOD
              <tr>
                        <td  width="50%"> <h2 style="text-align: center;  font-size:15px;">Elevated  Only</h2>
                     </td>
                   
EOD;
        }
        return $sumGraph;
    }
    public function systems($details,$slug,$category){




        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }

            $obj = json_decode($json);
            if (sizeof($obj->{$slug}->{'systems'}) > 0)
            {
                if(sizeof($obj->{$slug}->{'systems'}->{'earlyData'})>0){
                    require_once (APPPATH.'/libraries/jpgraph/jpgraph.php');
                    require_once (APPPATH.'/libraries/jpgraph/jpgraph_line.php');
                    if(sizeof($obj->{$slug}->{'systems'}->{'delayedData'})>0){
                        $ydata   =  $obj->{$slug}->{'systems'}->{'delayedData'};
                    }else{
                        $ydata   = array(0);
                    }
                    if(sizeof($obj->{$slug}->{'systems'}->{'earlyData'})>0){
                        $ydata2  =  $obj->{$slug}->{'systems'}->{'earlyData'};
                    }else{
                        $ydata2   = array(0);
                    }
                    if(sizeof($obj->{$slug}->{'systems'}->{'actualData'})>0){
                        $ydata3  =  $obj->{$slug}->{'systems'}->{'actualData'};
                    }else{
                        $ydata3   = array(0);
                    }
                    $currentEarly= $obj->{$slug}->{'systems'}->{'currentEarly'};
                    $currentLate= $obj->{$slug}->{'systems'}->{'currentLate'};
                    $currentActual= $obj->{$slug}->{'systems'}->{'currentActual'};
                    $varEarly= $obj->{$slug}->{'systems'}->{'varEarly'};
                    $varLate= $obj->{$slug}->{'systems'}->{'varLate'};
                    $trend= $obj->{$slug}->{'systems'}->{'trend'};
                    $width=1200;
                    $height=450;
                    $graph = new Graph($width,$height);
                    $graph->SetScale('intlin');
                    $graph->SetShadow();
                    $graph->SetMargin(40,20,20,40);
                    $graph->ygrid->Show(false, false);
                    /* $graph->grid->Show("false");*/
                    $graph->img->SetAntiAliasing(false);
                    $graph->yaxis->SetFont( FF_ARIAL,FS_BOLD,10);
                    $graph->xaxis->SetFont( FF_ARIAL,FS_BOLD,10);
                    $data3y=array('Jan/16','Feb/16','Mar/16','Apr/16','May/16','Jun/16','Jul/16', 'Aug/16', 'Sep/16', "Oct/16", "Nov/16", "Dec/16", "Jan/17", "Feb/17", "Mar/17", "Apr/17", "May/17", "Jun/17", "Jul/17",
                        "Aug/17", "Sep/17", "Oct/17", "Nov/17", "Dec/17","Jan/18", "Feb/18", "Mar/18", "Apr/18", "May/18", "Jun/18", "Jul/18", "Aug/18", "Sep/18", "Oct/18", "Nov/18", "Dec/18", "Jan/19", "Feb/19", "Mar/19", "Apr/19", "May/19", "Jun/19", "Jul/19", "Aug/19", "Sep/19", "Oct/19", "Nov/19", "Dec/19", "Jan/20", "Feb/20", "Mar/20", "Apr/20", "May/20", "Jun/20", "Jul/20", "Aug/20", "Sep/20", "Oct/20", "Nov/20", "Dec/20", "Jan/21", "Feb/21", "Mar/21", "Apr/21", "May/21", "Jun/21", "Jul/21", "Aug/21", "Sep/21", "Oct/21", "Nov/21", "Dec/21",
                        "Jan/22", "Feb/22", "Mar/22", "Apr/22", "May/22", "Jun/22", "Jul/22", "Aug/22", "Sep/22", "Oct/22", "Nov/22", "Dec/22");
                    $graph->xaxis->SetTickLabels($data3y);
                    $graph->xaxis->SetLabelAngle(20);
                    $lineplot=new LinePlot($ydata);
                    $graph->Add($lineplot);
                    $lineplot->SetWeight(3);
                    $lineplot->SetStyle("solid");
                    $lineplot->SetColor('firebrick3');

                    $lineplot2=new LinePlot($ydata2);
                    $graph->Add($lineplot2);
                    $lineplot2->SetWeight(3);
                    $lineplot2->SetStyle("solid");
                    $lineplot2->SetColor('green');

                    $lineplot3=new LinePlot($ydata3);
                    $graph->Add($lineplot3);
                    $lineplot3->SetWeight(3);
                    $lineplot3->SetStyle("solid");
                    $lineplot3->SetColor('blue');

                    if(file_exists('systems.png')){
                        if(unlink('systems.png')) {
                            $graph->Stroke('systems.png');
                        }
                    }else{
                        $graph->Stroke('systems.png');
                    }
                    $Image ="systems.png";
                    $sumGraph = <<<EOD
               <td  width="50%"><h2 style="text-align: center;  font-size:15px;">Systems Only</h2>
                            <table width="100%">
                            <tbody>
                            <tr><td>
                    <table width="98%" border="1">
                    <tbody>
                    <tr>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentEarly</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentLate</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentActual</td>
                    <td style="text-align: center;" colspan="2">Variance&nbsp;&nbsp;</td>
                    <td style="text-align: center; font-size:13px;" rowspan="2">&nbsp; &nbsp; $trend&nbsp;&nbsp;</td>
                    </tr>
                    <tr>
                    <td style="text-align: center;">&nbsp;%&nbsp; Early</td>
                    <td style="text-align: center;">&nbsp;% &nbsp;Late</td>
                    <td style="text-align: center;">&nbsp;% &nbsp;Actual</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$varEarly E</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$varLate L</td>
                    </tr>
                    </tbody>
                    </table></td>
                </tr>
                  <tr align="center">
                <td  style="text-align: center;" width="80%" > </td>
                </tr>
                 <tr align="center" >
                <td align="center" width="80%" > <img src="$Image"  width="1200" height="450"></td>
                </tr>
                 <tr>
                  <td>
                  </td>
                 </tr>
                 
                                                                <tr>
                                                                <td>
                                                              
                                                                </td>
                                                                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                 
EOD;
                }else{
                    $sumGraph = <<<EOD
                <td  width="50%"><h2 style="text-align: center;  font-size:15px;">Systems Only</h2>
                </td>
                </tr>
                    
                 
EOD;
                }

            }else{
                $sumGraph = <<<EOD
                <td  width="50%"><h2 style="text-align: center;  font-size:15px;">Systems Only</h2>
                </td>
                </tr>
                   
EOD;
            }
        }else{
            $sumGraph = <<<EOD
                  <td  width="50%"><h2 style="text-align: center;  font-size:15px;">Systems Only</h2>
                </td>
                </tr>
                   
EOD;
        }

        return $sumGraph;
    }
    public function projectOverall($details,$slug,$category){



        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }

            $obj = json_decode($json);
            if (sizeof($obj->{$slug}->{'project_overall'}) > 0)
            {
                if(sizeof($obj->{$slug}->{'project_overall'}->{'earlyData'})>0){
                    require_once (APPPATH.'/libraries/jpgraph/jpgraph.php');
                    require_once (APPPATH.'/libraries/jpgraph/jpgraph_line.php');
                    if(sizeof($obj->{$slug}->{'project_overall'}->{'delayedData'})>0){
                        $ydata   =  $obj->{$slug}->{'project_overall'}->{'delayedData'};
                    }else{
                        $ydata   = array(0);
                    }
                    if(sizeof($obj->{$slug}->{'project_overall'}->{'earlyData'})>0){
                        $ydata2  =  $obj->{$slug}->{'project_overall'}->{'earlyData'};
                    }else{
                        $ydata2   = array(0);
                    }
                    if(sizeof($obj->{$slug}->{'project_overall'}->{'actualData'})>0){
                        $ydata3  =  $obj->{$slug}->{'project_overall'}->{'actualData'};
                    }else{
                        $ydata3   = array(0);
                    }
                    $currentEarly= $obj->{$slug}->{'project_overall'}->{'currentEarly'};
                    $currentLate= $obj->{$slug}->{'project_overall'}->{'currentLate'};
                    $currentActual= $obj->{$slug}->{'project_overall'}->{'currentActual'};
                    $varEarly= $obj->{$slug}->{'project_overall'}->{'varEarly'};
                    $varLate= $obj->{$slug}->{'project_overall'}->{'varLate'};
                    $trend= $obj->{$slug}->{'project_overall'}->{'trend'};
                    $width=1200;
                    $height=450;
                    $graph = new Graph($width,$height);
                    $graph->SetScale('intlin');
                    $graph->SetShadow();
                    $graph->SetMargin(40,20,20,40);
                    $graph->ygrid->Show(false, false);
                    /* $graph->grid->Show("false");*/
                    $graph->img->SetAntiAliasing(false);
                    $graph->yaxis->SetFont( FF_ARIAL,FS_BOLD,10);
                    $graph->xaxis->SetFont( FF_ARIAL,FS_BOLD,10);
                    $data3y=array('Jan/16','Feb/16','Mar/16','Apr/16','May/16','Jun/16','Jul/16', 'Aug/16', 'Sep/16', "Oct/16", "Nov/16", "Dec/16", "Jan/17", "Feb/17", "Mar/17", "Apr/17", "May/17", "Jun/17", "Jul/17",
                        "Aug/17", "Sep/17", "Oct/17", "Nov/17", "Dec/17","Jan/18", "Feb/18", "Mar/18", "Apr/18", "May/18", "Jun/18", "Jul/18", "Aug/18", "Sep/18", "Oct/18", "Nov/18", "Dec/18", "Jan/19", "Feb/19", "Mar/19", "Apr/19", "May/19", "Jun/19", "Jul/19", "Aug/19", "Sep/19", "Oct/19", "Nov/19", "Dec/19", "Jan/20", "Feb/20", "Mar/20", "Apr/20", "May/20", "Jun/20", "Jul/20", "Aug/20", "Sep/20", "Oct/20", "Nov/20", "Dec/20", "Jan/21", "Feb/21", "Mar/21", "Apr/21", "May/21", "Jun/21", "Jul/21", "Aug/21", "Sep/21", "Oct/21", "Nov/21", "Dec/21",
                        "Jan/22", "Feb/22", "Mar/22", "Apr/22", "May/22", "Jun/22", "Jul/22", "Aug/22", "Sep/22", "Oct/22", "Nov/22", "Dec/22");
                    $graph->xaxis->SetTickLabels($data3y);
                    $graph->xaxis->SetLabelAngle(20);
                    $lineplot=new LinePlot($ydata);
                    $graph->Add($lineplot);
                    $lineplot->SetWeight(3);
                    $lineplot->SetStyle("solid");
                    $lineplot->SetColor('firebrick3');

                    $lineplot2=new LinePlot($ydata2);
                    $graph->Add($lineplot2);
                    $lineplot2->SetWeight(3);
                    $lineplot2->SetStyle("solid");
                    $lineplot2->SetColor('green');

                    $lineplot3=new LinePlot($ydata3);
                    $graph->Add($lineplot3);
                    $lineplot3->SetWeight(3);
                    $lineplot3->SetStyle("solid");
                    $lineplot3->SetColor('blue');

                    if(file_exists('project_overall.png')){
                        if(unlink('project_overall.png')) {
                            $graph->Stroke('project_overall.png');
                        }
                    }else{
                        $graph->Stroke('project_overall.png');
                    }
                    $Image ="project_overall.png";
                    $sumGraph = <<<EOD
                 <tr>
                        <td  width="50%"><h2 style="text-align: center;  font-size:15px;">Project Overall [UGW + Elevated + Systems]</h2>
                            <table width="100%">
                            <tbody>
                            <tr><td>
                    <table width="98%" border="1">
                    <tbody>
                    <tr>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentEarly</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentLate</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentActual</td>
                    <td style="text-align: center;" colspan="2">Variance&nbsp;&nbsp;</td>
                    <td style="text-align: center; font-size:13px;" rowspan="2">&nbsp; &nbsp; $trend&nbsp;&nbsp;</td>
                    </tr>
                    <tr>
                    <td style="text-align: center;">&nbsp;%&nbsp; Early</td>
                    <td style="text-align: center;">&nbsp;% &nbsp;Late</td>
                    <td style="text-align: center;">&nbsp;% &nbsp;Actual</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$varEarly E</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$varLate L</td>
                    </tr>
                    </tbody>
                    </table></td>
                </tr>
                  <tr align="center">
                <td  style="text-align: center;" width="80%" > </td>
                </tr>
                 <tr align="center" >
                <td align="center" width="80%" > <img src="$Image"  width="1200" height="450"></td>
                </tr>
                 <tr>
                  <td>
                  </td>
                 </tr>
                 
                                                                <tr>
                                                                <td>
                                                              
                                                                </td>
                                                                </tr>
                </tbody>
                </table>
                </td>
                 
EOD;
                }else{
                    $sumGraph = <<<EOD
               <tr>
                        <td  width="50%"><h2 style="text-align: center;  font-size:15px;">Project Overall [UGW + Elevated + Systems]</h2>
                     </td>
                    
                 
EOD;
                }

            }else{
                $sumGraph = <<<EOD
             <tr>
                        <td  width="50%"><h2 style="text-align: center;  font-size:15px;">Project Overall [UGW + Elevated + Systems]</h2>
                     </td>
                   
                 
EOD;
            }
        }else{
            $sumGraph = <<<EOD
              <tr>
                        <td  width="50%"><h2 style="text-align: center;  font-size:15px;">Project Overall [UGW + Elevated + Systems]</h2>
                     </td>
                   
EOD;
        }
        return $sumGraph;
    }
    public function underground($details,$slug,$category){



        if ($details != null) {
            foreach ($details as $key => $val) {
                $json = $val['value'];
            }

            $obj = json_decode($json);
            if (sizeof($obj->{$slug}->{'underground'}) > 0)
            {
                if(sizeof($obj->{$slug}->{'underground'}->{'earlyData'})>0){
                    require_once (APPPATH.'/libraries/jpgraph/jpgraph.php');
                    require_once (APPPATH.'/libraries/jpgraph/jpgraph_line.php');
                    if(sizeof($obj->{$slug}->{'underground'}->{'delayedData'})>0){
                        $ydata   =  $obj->{$slug}->{'underground'}->{'delayedData'};
                    }else{
                        $ydata   = array(0);
                    }
                    if(sizeof($obj->{$slug}->{'underground'}->{'earlyData'})>0){
                        $ydata2  =  $obj->{$slug}->{'underground'}->{'earlyData'};
                    }else{
                        $ydata2   = array(0);
                    }
                    if(sizeof($obj->{$slug}->{'underground'}->{'actualData'})>0){
                        $ydata3  =  $obj->{$slug}->{'underground'}->{'actualData'};
                    }else{
                        $ydata3   = array(0);
                    }
                    $currentEarly= $obj->{$slug}->{'underground'}->{'currentEarly'};
                    $currentLate= $obj->{$slug}->{'underground'}->{'currentLate'};
                    $currentActual= $obj->{$slug}->{'underground'}->{'currentActual'};
                    $varEarly= $obj->{$slug}->{'underground'}->{'varEarly'};
                    $varLate= $obj->{$slug}->{'underground'}->{'varLate'};
                    $trend= $obj->{$slug}->{'underground'}->{'trend'};
                    $width=1200;
                    $height=450;
                    $graph = new Graph($width,$height);
                    $graph->SetScale('intlin');
                    $graph->SetShadow();
                    $graph->SetMargin(40,20,20,40);
                    $graph->ygrid->Show(false, false);
                    /* $graph->grid->Show("false");*/
                    $graph->img->SetAntiAliasing(false);
                    $graph->yaxis->SetFont( FF_ARIAL,FS_BOLD,10);
                    $graph->xaxis->SetFont( FF_ARIAL,FS_BOLD,10);
                    $data3y=array('Jan/16','Feb/16','Mar/16','Apr/16','May/16','Jun/16','Jul/16', 'Aug/16', 'Sep/16', "Oct/16", "Nov/16", "Dec/16", "Jan/17", "Feb/17", "Mar/17", "Apr/17", "May/17", "Jun/17", "Jul/17",
                        "Aug/17", "Sep/17", "Oct/17", "Nov/17", "Dec/17","Jan/18", "Feb/18", "Mar/18", "Apr/18", "May/18", "Jun/18", "Jul/18", "Aug/18", "Sep/18", "Oct/18", "Nov/18", "Dec/18", "Jan/19", "Feb/19", "Mar/19", "Apr/19", "May/19", "Jun/19", "Jul/19", "Aug/19", "Sep/19", "Oct/19", "Nov/19", "Dec/19", "Jan/20", "Feb/20", "Mar/20", "Apr/20", "May/20", "Jun/20", "Jul/20", "Aug/20", "Sep/20", "Oct/20", "Nov/20", "Dec/20", "Jan/21", "Feb/21", "Mar/21", "Apr/21", "May/21", "Jun/21", "Jul/21", "Aug/21", "Sep/21", "Oct/21", "Nov/21", "Dec/21",
                        "Jan/22", "Feb/22", "Mar/22", "Apr/22", "May/22", "Jun/22", "Jul/22", "Aug/22", "Sep/22", "Oct/22", "Nov/22", "Dec/22");
                    $graph->xaxis->SetTickLabels($data3y);
                    $graph->xaxis->SetLabelAngle(20);
                    $lineplot=new LinePlot($ydata);
                    $graph->Add($lineplot);
                    $lineplot->SetWeight(3);
                    $lineplot->SetStyle("solid");
                    $lineplot->SetColor('firebrick3');

                    $lineplot2=new LinePlot($ydata2);
                    $graph->Add($lineplot2);
                    $lineplot2->SetWeight(3);
                    $lineplot2->SetStyle("solid");
                    $lineplot2->SetColor('green');

                    $lineplot3=new LinePlot($ydata3);
                    $graph->Add($lineplot3);
                    $lineplot3->SetWeight(3);
                    $lineplot3->SetStyle("solid");
                    $lineplot3->SetColor('blue');

                    if(file_exists('underground.png')){
                        if(unlink('underground.png')) {
                            $graph->Stroke('underground.png');
                        }
                    }else{
                        $graph->Stroke('underground.png');
                    }
                    $Image ="underground.png";
                    $sumGraph = <<<EOD
               <td  width="50%"><h2 style="text-align: center;  font-size:15px;">UGW </h2>
                            <table width="100%">
                            <tbody>
                            <tr><td>
                    <table width="98%" border="1">
                    <tbody>
                    <tr>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentEarly</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentLate</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$currentActual</td>
                    <td style="text-align: center;" colspan="2">Variance&nbsp;&nbsp;</td>
                    <td style="text-align: center; font-size:13px;" rowspan="2">&nbsp; &nbsp; $trend&nbsp;&nbsp;</td>
                    </tr>
                    <tr>
                    <td style="text-align: center;">&nbsp;%&nbsp; Early</td>
                    <td style="text-align: center;">&nbsp;% &nbsp;Late</td>
                    <td style="text-align: center;">&nbsp;% &nbsp;Actual</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$varEarly E</td>
                    <td style="text-align: center; font-size:13px;">&nbsp;$varLate L</td>
                    </tr>
                    </tbody>
                    </table></td>
                </tr>
                
                  <tr align="center">
                <td  style="text-align: center;" width="80%" > </td>
                </tr>
                 <tr align="center" >
                <td align="center" width="80%" > <img src="$Image"  width="1200" height="450"></td>
                </tr>
                 <tr>
                  <td>
                  </td>
                 </tr>
                 
                                                                <tr>
                                                                <td>
                                                              
                                                                </td>
                                                                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                 
EOD;
                }else{
                    $sumGraph = <<<EOD
              <td  width="50%"><h2 style="text-align: center;  font-size:15px;">UGW </h2>
                </td>
                </tr>
                </tbody>
                </table>
                    
                 
EOD;
                }

            }else{
                $sumGraph = <<<EOD
               <td  width="50%"><h2 style="text-align: center;  font-size:15px;">UGW </h2>
                </td>
                </tr>
                </tbody>
                </table>
                 
EOD;
            }
        }else{
            $sumGraph = <<<EOD
               <td  width="50%"><h2 style="text-align: center;  font-size:15px;">UGW </h2>
                </td>
                </tr>
                </tbody>
                </table>
EOD;
        }

        return $sumGraph;
    }
    public function getStructure($slug,$date)
    {
        $details = $this->getFullDetailsSlug($slug,$date);
        $category= $this->getCategory($slug);
        $imgPath = base_url()."assets/img/pdf/mrt_md.png";
        $projName = "PROJEK MASS RAPID TRANSIT LALUAN 2: SUNGAI BULOH - SERDANG - PUTRAJAYA [SSP]";
        $packageName = "[PACKAGE ".strtoupper($slug).": PROJECT PROGRESS]";
       /* $dataDate=$this->getDataDate($slug);*/
        $value="";
        switch ($category) {
            case 1:
                if(sizeof($details )> 0){
                     $value .= $this->setHeader($imgPath,$projName,$packageName,$date,$slug);
                     $value .= $this->packageInfo($details,$slug,$category);
                     $value .= $this->packageProgress($details,$slug,$category);
                     $value .= $this->scurve($details,$slug,$category);
                     $value .= $this->kpi($details,$slug,$category);
                     $value .= $this->kad($details,$slug);
                     $value .= $this->Images($details,$slug,$category);
                     $value .= $this->safeyIncident($details,$slug,$category);
                }
                break;
            case 2:
                if(sizeof($details )> 0){
                    $value .= $this->setHeader($imgPath, $projName, "Program S-Curves", $date, $slug);
                    $value .= $this->overAllElevatedPDP($details,$slug,$category);
                    $value .= $this->phaseOne($details,$slug,$category);
                    $value .= $this->phaseTwo($details,$slug,$category);
                    $value .= $this->phaseTwoUGW($details,$slug,$category);
                    $value .= $this->elevated($details,$slug,$category);
                    $value .= $this->systems($details,$slug,$category);
                    $value .= $this->projectOverall($details,$slug,$category);
                    $value .= $this->underground($details,$slug,$category);
                }
                break;
            case 11://UG STATIONS
                if(sizeof($details )> 0) {
                    $value .= $this->setHeader($imgPath, $projName, $packageName, $date, $slug);
                    $value .= $this->packageInfo($details, $slug, $category);
                    $value .= $this->packageProgress($details, $slug, $category);
                    $value .= $this->scurve($details, $slug, $category);
                    $value .= $this->kpi($details, $slug, $category);
                    $value .= $this->kad($details, $slug);
                    $value .= $this->Images($details, $slug, $category);
                    $value .= $this->safeyIncident($details, $slug, $category);
                }
                break;
            case 5:
                if(sizeof($details )> 0) {
                    $value .= $this->setHeader($imgPath, $projName, $packageName, $date, $slug);
                    $value .= $this->packageInfo($details, $slug, $category);
                    $value .= $this->packageProgress($details, $slug, $category);
                    $value .= $this->scurve($details, $slug, $category);
                    $value .= $this->kpi($details, $slug, $category);
                    $value .= $this->kad($details, $slug);
                    $value .= $this->Images($details, $slug, $category);
                    $value .= $this->safeyIncident($details, $slug, $category);
                }
                break;
            case 41:
                if(sizeof($details )> 0) {
                    $value .= $this->setHeader($imgPath, $projName, $packageName, $date, $slug);
                    $value .= $this->packageInfo($details, $slug, $category);
                    $value .= $this->packageProgress($details, $slug, $category);
                    $value .= $this->scurve($details, $slug, $category);
                    $value .= $this->kpi($details, $slug, $category);
                    $value .= $this->kad($details, $slug);
                    $value .= $this->Images($details, $slug, $category);
                    $value .= $this->safeyIncident($details, $slug, $category);
                }
                break;
            case 9:
                if(sizeof($details )> 0) {
                    $value .= $this->setHeader($imgPath, $projName, $packageName, $date, $slug);
                    $value .= $this->packageInfo($details, $slug, $category);
                    $value .= $this->packageProgress($details, $slug, $category);
                    $value .= $this->scurve($details, $slug, $category);
                    $value .= $this->tunnelProg($details, $slug, $category);
                    $value .= $this->stationProg($details, $slug, $category);
                    $value .= $this->Images($details, $slug, $category);
                    $value .= $this->safeyIncident($details, $slug, $category);
                }
                break;
            case 20:
                if(sizeof($details )> 0) {
                    $value .= $this->setHeaderETDE($imgPath, $projName, $packageName, $date, $slug);
                    $value .= $this->packageInfoETDE($details, $slug, $category);
                    $value .= $this->packageProgressETDE($details, $slug, $category);
                    $value .= $this->scurve($details, $slug, $category);
                    $value .= $this->fullyCompletedTrain($details, $slug, $category);
                    $value .= $this->kadDetailsETDE($details, $slug, $category);
                    $value .= $this->testingETDE($details, $slug, $category);
                    $value .= $this->manufacturingETDE($details, $slug, $category);
                    $value .= $this->barChart($details, $slug, $category);
                    $value .= $this->lineChart($details, $slug, $category);
                    $value .= $this->ETDEPhase($details, $slug, $category);
                    $value .= $this->ETDEImage($details, $slug, $category);
                }
                break;
            case 43:case 44:case 45:case 46:case 47:case 48:case 49:
            if(sizeof($details )> 0) {
                $value .= $this->setHeader($imgPath, $projName, $packageName, $date, $slug);
                $value .= $this->packageInfo($details, $slug, $category);
                $value .= $this->packageProgressPSDS($details, $slug, $category);
                $value .= $this->scurve($details, $slug, $category);
                $value .= $this->kadPSDS($details, $slug, $category);
                $value .= $this->galleryPSDS($details, $slug, $category);
                $value .= $this->tripcablePSDS($details, $slug, $category);
                $value .= $this->testingPSDS($details, $slug, $category);
            }
                break;
            case 62:
                if(sizeof($details )> 0) {
                    $value .= $this->setHeaderTW($imgPath, $projName, "Trackworks & Maintenance Vehicles & Works Train - Detail", $date, $slug);
                    $value .= $this->packageInfoTW($details, $slug, $category);
                    $value .= $this->packageProgress($details, $slug, $category);
                    $value .= $this->scurve($details, $slug, $category);
                    $value .= $this->kadTW($details, $slug, $category);
                    $value .= $this->galleryTW($details, $slug, $category);
                }

                 break;
            case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 58:case 59:case 60:
            if(sizeof($details )> 0) {
                $value .= $this->setHeaderTW($imgPath, $projName, $packageName, $date, $slug);
                $value .= $this->packageInfoKD($details, $slug, $category);
                $value .= $this->packageProgressKD($details, $slug, $category);
                $value .= $this->packageProgressKDSummary($details, $slug, $category);
                $value .= $this->SummaryGraph($details, $slug, $category);
                /*$value .= $this->kadTW($details,$slug,$category);
                $value .= $this->galleryTW($details,$slug,$category);*/
            }
                break;
            default:
        }

        return $value;
    }
}
