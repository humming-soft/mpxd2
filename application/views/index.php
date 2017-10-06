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
	$(window).load(function(){
		data = <?php echo json_encode($data); ?>;
		console.log(data);
	/*	$('#pop_value .set1').text(typeof(data['overall_actual'])==="undefined"?'-':data['overall_actual']+'%');
		$('#pop_value .set2').text(typeof(data['overall_late'])==="undefined"?'-':data['overall_late']+'%');
		$('#pop_value .set3').text(typeof(data['overall_variance'])==="undefined"?'-':data['overall_variance']+'%');
		$trend = $('#trend'); $css = '';
		if(typeof(data['trend'])!="undefined") {
			$("#trend_text").text(data['trend'].toUpperCase());
			if (data['trend'] == "up") {
				$css = "fa fa-arrow-up status_green";
				$("#trend_text").addClass("status_green");
			} else if (data['trend'] == "down") {
				$css = "fa fa-arrow-down status_red";
				$("#trend_text").addClass("status_red");
			} else {
				$css = "";
			}
			$trend.removeClass().addClass($css);
		}else{
			$trend.removeClass();
		}*/
	});
</script>
<script type="text/javascript" src="<?php echo $this->config->base_url(); ?>assets/mmc/js/db.js"></script>
<?php include 'templates/default_footer.php' ?>