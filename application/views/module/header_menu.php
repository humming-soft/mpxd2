<style>
	div.ui-datepicker{
		font-size:14px;
	}
</style>
<div class="col-md-12">
	<div class="col-md-3">
		<div class="row">
			<div class="logo_holder col-md-12">
				<div class="logo"><img src="<?php echo $this->config->base_url(); ?>assets/mmc/images/logo/mpxd_sm.png"></div>
				<div class="logo"><img src="<?php echo $this->config->base_url(); ?>assets/mmc/images/logo/ceodb-logo-bw-sm.png"></div>
			</div>
		</div>
	</div>
	<div class="col-md-9">
		<div class="row">
			<div class="col-md-5">
				<div id="header_datetime">
					<span class="hd_label hd_label_today"><i class="fa fa-calendar-o" aria-hidden="true"></i> Today: <span id="current_date">22 JUN 2016</span></span>
					<span class="hd_label hd_label_data"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> Data Date :</span>
						<input readonly="true" id="data_date" type="text" value="" placeholder="Data date" name="data-date">
						<input type="hidden" id="data_date_selected" value=""/>
						<div style="display: none;" class="input-group-btn">
							<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown">Date <span class="caret"></span></button>
							<ul id="date_list" class="dropdown-menu">
							</ul>
						</div>
					<span id="date_selector" class="hd_label hd_button">Change</span>
				</div>
			</div>
			<div id="header_menu" class="col-md-7">
				<span class="hm_button active"><a href="<?php echo $this->config->base_url(); ?>dashboard"><i class="fa fa-home" aria-hidden="true"></i> Home</a></span>
				<span class="hm_button"><a href="<?php echo $this->config->base_url(); ?>programme/scurve"><i class="fa fa-line-chart" aria-hidden="true"></i> Programme</a></span>
<!--				<span class="hm_button disabled"><a disabled="disabled" class="disabled"><i class="fa fa-cube" aria-hidden="true"></i> Procurement</a></span>-->
				<span class="hm_button"><a href="<?php echo $this->config->base_url(); ?>viaducts/summary"><i class="fa fa-cube" aria-hidden="true"></i> Summary</a></span>
				<a style="text-decoration: none; color: #fff;" href="<?php echo $this->config->base_url(); ?>logout"><span class="hm_button"><i class="fa fa-sign-in" aria-hidden="true"></i> Logout</span></a>
				<span class="hm_user_profile dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<i class="fa fa-user" aria-hidden="true"></i> Profile
						<i class="fa fa-caret-down" aria-hidden="true"></i>
					</a>
					 <div class="dropdown-menu">
						 <a class="dropdown-item"><i class="fa fa-user fa-2xc" aria-hidden="true"></i></a>
						 <div class="dropdown-divider"></div>
						 <p class="dropdown-item"><?php echo ($this->session->userdata['fullname']); ?></p>
					 </div>
				</span>
			</div>
		</div>
	</div>
</div>