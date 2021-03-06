
<div id="float_plate" class="row">
	<div id="plate_vector_map" class="plate_vector_map">
		<!--missing plate_vector_map.svg-->
	</div>
	<div id="plate_overall_progress">
		<div id="pop_label">
			<span class="set1">OVERALL PROGRESS <b><?php
                    if(isset($progress["as_of"])){
                        echo "(AS OF : ".date('d-M-Y',strtotime($progress["as_of"])).")";
                    }
                    ?></b></span>
			<span class="set2">ACTUAL</span>
			<span class="set3">PLANNED</span>
			<span class="set4">VARIANCE</span>
			<span class="set5">TREND</span>

		</div>
		<div id="pop_value">
			<span class="set1 actual">
                <?php
                    if(isset($progress["actual_value"])){
                        echo $progress["actual_value"];
                    }else{
                        echo "N/A";
                    }
                ?>
                <b><?php
                    if(isset($progress["actual_value"])){ echo "%"; } ?></b>
            </span>
            <span class="set2 plan">
                <?php
                    if(isset($progress["plan_value"])){
                        echo $progress["plan_value"];
                    }else {
                        echo "N/A";
                    }
                ?>
                <b><?php
                    if(isset($progress["plan_value"])){ echo "%"; } ?></b>
            </span>
			<span class="set3 variance">
                <?php
                    if(isset($progress["variance_value"])){
                        echo $progress["variance_value"];
                    }else {
                        echo "N/A";
                    }
                ?>
                <b><?php
                    if(isset($progress["variance_value"])){ echo "w"; } ?></b>
            </span>
			<span class="set4
			    <?php
                if(isset($progress["trend_value"])) {
                    if ((float)$progress["trend_value"] == 1) {
                        echo 'trend-up';
                    } else {
                        echo 'trend-down';
                    }
                }
                ?>">
                <i class="fa
                    <?php
                    if(isset($progress["trend_value"])) {
                        if ((float)$progress["trend_value"] == 1) {
                            echo 'fa-arrow-up';
                        } else {
                            echo 'fa-arrow-down';
                        }
                    }?>" aria-hidden="true">
                </i>
                <?php
                if(isset($progress["trend_value"])) {
                    if ((float)$progress["trend_value"] == 1) {
                        echo 'UP';
                    } else {
                        echo 'DOWN';
                    }
                }else{ echo 'N/A';}?></span>
		</div>
	</div>
	<div id="plate_commercial">
		<div id="pcom_label">
			<span class="set1">PROJECT COST UPDATE</span>
			<span class="set2">Project Spend To Date</span>
			<span class="set3">Awarded Package</span>
			<span class="set4">PDP Reimbursables</span>
			<span class="set5">WPCs Payment</span>
			<span class="set6">Retention Sum</span>
			<span class="set7">Variation Orders</span>
			<span class="set8">Contingency Sum</span>
			
		</div>
	
		<div id="pcom_value">
			<span class="set1"><?php echo $data['project_spend_to_date']; ?></span>
			<span class="set2"><?php echo $data['awarded_packages']; ?> </span>
			<span class="set3"><?php echo $data['pdp_reimbursables']; ?></span>
			<span class="set4"><?php echo $data['wpcs_payment']; ?></span>
			<span class="set5"><?php echo $data['retention_sum']; ?></span>
			<span class="set6"><?php echo $data['variation_orders']; ?></span>
			<span class="set7"><?php echo $data['contingency_sum']; ?></span>
		</div>
	</div>
	<div id="plate_legend">
		<div id="pl_label_header">
			<span class="set1">LEGENDS</span>
		</div>
		<div id="pl_label_content">
			<span class="set1">Not Started</span>
			<span class="set2">On Schedule</span>
			<span class="set3">Behind Late</span>
			<span class="set4">Critical</span>
		</div>
	</div>
	<div id="plate_system">
		<div id="donut_plate">
			<div class="donut_box_small">
			</div>
			<div class="donut_box_small">
				<div class="the_donut dp_db_donut_1a"></div>
				<div class="the_donut dp_db_donut_1b"></div>
			</div>
			<div class="donut_box_small">
				<div class="the_donut dp_db_donut_2a"></div>
				<div class="the_donut dp_db_donut_2b"></div>
			</div>
			<div class="donut_box_small">
				<div class="the_donut dp_db_donut_3a"></div>
				<div class="the_donut dp_db_donut_3b"></div>
			</div>
			<div class="donut_box_small">
				<div class="the_donut dp_db_donut_4a"></div>
				<div class="the_donut "></div>
			</div>
		</div>
	</div>

	<div id="plate_physical">
		<div id="pp_station">
			<span class="set1"></span>
		</div>
		<div id="pp_depot">
			<span class="set1"></span>
		</div>
	</div>
	<div id="plate_label">
		<div id="pl_depot">
			<span class="set1"><a href="<?php echo $this->config->base_url(); ?>serdang-dpt/index">Serdang Depot</a></span>
		</div>
		<div id="pl_station">
			<span class="set1"><a href="<?php echo $this->config->base_url(); ?>sg-buloh/index">Sg. Buloh</a></span>
			<span class="set2"><a href="<?php echo $this->config->base_url(); ?>dsara-damai/index">D'sara Damai</a></span>
			<span class="set3"><a href="<?php echo $this->config->base_url(); ?>sri-dsara-west/index">Sri D'sara West</a></span>
			<span class="set4"><a href="<?php echo $this->config->base_url(); ?>sri-dsara-east/index">Sri D'sara East</a></span>
			<span class="set5"><a href="<?php echo $this->config->base_url(); ?>kepong-sentral/index">Kepong Sentral</a></span>
			<span class="set6"><a href="<?php echo $this->config->base_url(); ?>metro-prima/index">Metro Prima</a></span>
			<span class="set7"><a href="<?php echo $this->config->base_url(); ?>kepong-baru/index">Kepong Baru</a></span>
			<span class="set8"><a href="<?php echo $this->config->base_url(); ?>jinjang/index">Jinjang</a></span>
			<span class="set9"><a href="<?php echo $this->config->base_url(); ?>sri-delima/index">Sri Delima</a></span>
			<span class="set10"><a href="<?php echo $this->config->base_url(); ?>kg-batu/index">Kg. Batu</a></span>
			<span class="set11"><a href="<?php echo $this->config->base_url(); ?>kentonmen/index">Kentonmen</a></span>
			<span class="set12"><a href="<?php echo $this->config->base_url(); ?>jln-ipoh/index">Jln. Ipoh</a></span>
			<span class="set13"><a href="<?php echo $this->config->base_url(); ?>sentul-west/index">Sentul West</a></span>
			<span class="set14"><a href="<?php echo $this->config->base_url(); ?>titiwangsa/index">Titiwangsa</a></span>
			<span class="set15"><a href="<?php echo $this->config->base_url(); ?>hkl/index">HKL</a></span>
			<span class="set16"><a href="<?php echo $this->config->base_url(); ?>kg-baru-north/index">Kg. Baru North</a></span>
			<span class="set17"><a href="<?php echo $this->config->base_url(); ?>ampang-park/index">Ampang Park</a></span>
			<span class="set18"><a href="<?php echo $this->config->base_url(); ?>klcc-east/index">KLCC East</a></span>
			<span class="set19"><a href="<?php echo $this->config->base_url(); ?>conlay/index">Conlay</a></span>
			<span class="set20"><a href="<?php echo $this->config->base_url(); ?>trx/index">TRX</a></span>
			<span class="set21"><a href="<?php echo $this->config->base_url(); ?>chan-sow-lin/index">Chan Sow Lin</a></span>
			<span class="set22"><a href="<?php echo $this->config->base_url(); ?>bdr-malaysia-north/index">Bdr. Malaysia North</a></span>
			<span class="set23"><a href="<?php echo $this->config->base_url(); ?>bdr-malaysia-south/index">Bdr. Malaysia South</a></span>
			<span class="set24"><a href="<?php echo $this->config->base_url(); ?>kuchai-lama/index">Kuchai Lama</a></span>
			<span class="set25"><a href="<?php echo $this->config->base_url(); ?>tmn-naga-emas/index">Tmn. Naga Emas</a></span>
			<span class="set26"><a href="<?php echo $this->config->base_url(); ?>sg-besi/index">Sg. Besi</a></span>
			<span class="set27"><a href="<?php echo $this->config->base_url(); ?>tech-park/index">Tech. Park</a></span>
			<span class="set28"><a href="<?php echo $this->config->base_url(); ?>serdang-raya-north/index">Serdang Raya North</a></span>
			<span class="set29"><a href="<?php echo $this->config->base_url(); ?>serdang-raya-south/index">Serdang Raya South</a></span>
			<span class="set30"><a href="<?php echo $this->config->base_url(); ?>sri-kembangan/index">Seri Kembangan</a></span>
			<span class="set31"><a href="<?php echo $this->config->base_url(); ?>upm/index">UPM</a></span>
			<span class="set32"><a href="<?php echo $this->config->base_url(); ?>tmn-universiti/index">Tmn. Universiti</a></span>
			<span class="set33"><a href="<?php echo $this->config->base_url(); ?>equine-park/index">Equine Park</a></span>
			<span class="set34"><a href="<?php echo $this->config->base_url(); ?>tmn-putra-permai/index">Tmn. Putra Permai</a></span>
			<span class="set35"><a href="<?php echo $this->config->base_url(); ?>16-sierra/index">16 Sierra</a></span>
			<span class="set36"><a href="<?php echo $this->config->base_url(); ?>cyberjaya-north/index">Cyberjaya North</a></span>
			<span class="set37"><a href="<?php echo $this->config->base_url(); ?>cyberjaya-city-centre/index">Cyberjaya City Centre</a></span>
			<span class="set38"><a href="<?php echo $this->config->base_url(); ?>putrajaya-sentral/index">Putrajaya Sentral</a></span>
		</div>
		<div id="pl_mspr">
			<span class="set1"><a href="<?php echo $this->config->base_url(); ?>mspr1/index">P</a></span>
			<span class="set2"><a href="<?php echo $this->config->base_url(); ?>mspr2/index">P</a></span>
			<span class="set3"><a href="<?php echo $this->config->base_url(); ?>mspr3/index">P</a></span>
			<span class="set4"><a href="<?php echo $this->config->base_url(); ?>mspr4/index">P</a></span>
			<span class="set5"><a href="<?php echo $this->config->base_url(); ?>mspr5/index">P</a></span>
			<span class="set6"><a href="<?php echo $this->config->base_url(); ?>mspr6/index">P</a></span>
			<span class="set7"><a href="<?php echo $this->config->base_url(); ?>mspr7/index">P</a></span>
			<span class="set8"><a href="<?php echo $this->config->base_url(); ?>mspr8/index">P</a></span>
			<span class="set9"><a href="<?php echo $this->config->base_url(); ?>mspr9/index">P</a></span>
			<span class="set10"><a href="<?php echo $this->config->base_url(); ?>mspr10/index">P</a></span>
			<span class="set11"><a href="<?php echo $this->config->base_url(); ?>mspr11/index">P</a></span>
			<span class="set12"><a href="<?php echo $this->config->base_url(); ?>mspr12/index">P</a></span>
			<span class="set13"><a href="<?php echo $this->config->base_url(); ?>mspr13/index">P</a></span>
			<span class="set14"><a href="<?php echo $this->config->base_url(); ?>mspr14/index">P</a></span>
			<span class="set15"><a href="<?php echo $this->config->base_url(); ?>mspr15/index">P</a></span>
		</div>
		<div id="pl_package">
			<a class="set1" href="<?php echo $this->config->base_url(); ?>v201/index">V201</a>
			<a class="set2" href="<?php echo $this->config->base_url(); ?>v202/index">V202</a>
			<a class="set3" href="<?php echo $this->config->base_url(); ?>v203/index">V203</a>
			<a class="set4" href="<?php echo $this->config->base_url(); ?>ug/index">UG</a>
			<a class="set5" href="<?php echo $this->config->base_url(); ?>v204/index">V204</a>
			<a class="set6" href="<?php echo $this->config->base_url(); ?>v205/index">V205</a>
			<a class="set7" href="<?php echo $this->config->base_url(); ?>v206/index">V206</a>
			<a class="set8" href="<?php echo $this->config->base_url(); ?>v207/index">V207</a>
			<a class="set9" href="<?php echo $this->config->base_url(); ?>v208/index">V208</a>
			<a class="set10" href="<?php echo $this->config->base_url(); ?>v209/index">V209</a>
			<a class="set11" href="<?php echo $this->config->base_url(); ?>v210/index">V210</a>
		</div>
		<div id="pl_phase">
			<a class="set1" href="<?php echo $this->config->base_url(); ?>north/index">NORTH</a>
			<a class="set2" href="<?php echo $this->config->base_url(); ?>south/index">SOUTH</a>
		</div>
	</div>
</div>

