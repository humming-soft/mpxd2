<!-- to use scroller : class="col-md-12 scroll_set_1" -->
<?php include 'templates/default_header.php' ?>
<title>CEODB L2</title>
<div id="wrapper" class="">
	<div id="wrapper_landing_page">
		<!-- -- -->
		
		
		<!-- -- -->
		<!-- header -->
		<?php include 'module/header_menu.php'; ?>
		<!-- -- -->
		
		<!-- -- -->
		<!-- content -->
		<div id="content">
			<div id="dashboard" class="col-md-12">

				<div id="infographic" class="">
					<div class="ig_plate">
						<!-- -- -->

						<?php include 'module/gis_accessories.php' ?>

						<!-- -- -->
						<img src="<?php echo $this->config->base_url(); ?>assets/mmc/images/base/MRT-L2-1080.jpg">
					</div>
					<div class="ig_plate">
						<img src="<?php echo $this->config->base_url(); ?>assets/mmc/images/base/MRT-L2-1080.png">
					</div>
				</div>
			</div>
		</div>
		<!-- -- -->
			
				
		
		<!-- -- -->
	</div>
</div>
<script>
	baseURL = <?php echo json_encode($this->config->base_url()); ?>;
	/*$(window).load(function(){
		data = <?php echo json_encode($data); ?>;
		$('#overall_actual').text(data['overall_actual']+'%');
		$('#overall_variance').text(data['overall_variance']["early"]+'%');
		$('#overall_early').text(data['overall_late']+'%');
		$trend = $('#trend'); $css='';
		$("#trend_text").text(data['trend'].toUpperCase());
		if(data['trend']=="up"){
			$css = "fa fa-arrow-up";
		}else if(data['trend']=="down"){
			$css = "fa fa-arrow-down red";
		}else{
			$css = "";
		}
		$trend.removeClass().addClass($css);
	});*/
</script>
<script type="text/javascript" src="<?php echo $this->config->base_url(); ?>assets/mmc/js/db.js"></script>
<?php include 'templates/default_footer.php' ?>