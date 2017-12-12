

//
// TEMP
//

mpxd.constructors.temp_portlet = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.temp_module.temp_portlet_data({data: data, el: el});
}



//
// MPXD1
//

mpxd.constructors.mpxd1_gis = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.temp_mpxd1.mpxd1_gis_data({data: data, el: el});
}


//
// /*SPECIFIC - S&TC & PSD/APG*/
//
mpxd.constructors.sys_stcpsd_actual_progress = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_stcpsd.sys_stcpsd_actual_progress({data: data, el: el});
}


//
// ICSS&CMMS
//


//
// ET&DE
//
mpxd.constructors.sys_etde_actual_progress = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_etde.sys_etde_actual_progress({data: data, el: el});
}
mpxd.constructors.sys_info = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_etde.sys_info({data: data, el: el});
}
mpxd.constructors.sys_etde_progress = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_etde.sys_etde_progress({data: data, el: el});
}
mpxd.constructors.sys_etde_overallOpenItemClosure = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_etde.sys_etde_overallOpenItemClosure({data: data, el: el});
}
mpxd.constructors.sys_etde_testing = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_etde.sys_etde_testing({data: data, el: el});
}
mpxd.constructors.sys_etde_manufacturing_progress = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_etde.sys_etde_manufacturing_progress({data: data, el: el});
}
mpxd.constructors.sys_etde_project_timeline = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_etde.sys_etde_project_timeline({data: data, el: el});
}


//
// TW&MV (Main)
//
mpxd.constructors.sys_twmv_gis = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_twmv_m.sys_twmv_gis({data: data, el: el});
}

//
// TW&MV
//
mpxd.constructors.sys_twmv_actual_progress = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_twmv.sys_twmv_actual_progress({data: data, el: el});
}
mpxd.constructors.sys_twmv_kd_overall_progress = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_twmv.sys_twmv_kd_overall_progress({data: data, el: el});
}
mpxd.constructors.sys_twmv_kd_summary = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_twmv.sys_twmv_kd_summary({data: data, el: el});
}


//
// PSDS (Main)
//
mpxd.constructors.sys_psds_gis = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_psds_m.sys_psds_gis({data: data, el: el});
}

//
// PSDS
//
mpxd.constructors.sys_psds_trip_cable = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_psds.sys_psds_trip_cable({data: data, el: el});
}
mpxd.constructors.sys_psds_installation = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_psds.sys_psds_installation({data: data, el: el});
}

//
// COMMS&ITS
//
mpxd.constructors.sys_commsits_actual_progress = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_commsits.sys_commsits_actual_progress({data: data, el: el});
}


//
// AFC
//
mpxd.constructors.sys_afc_actual_progress = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_afc.sys_afc_actual_progress({data: data, el: el});
}




//----------------------
//
// DECLARATION
//----------------------
mpxd.modules.temp_module ={};	// TEMPORARY (FOR TEST ONLY)
mpxd.modules.temp_mpxd1 ={};	// TEMPORARY (LINE 1)
mpxd.modules.sys_stcpsd ={};	// S&TC & PSD/APG
mpxd.modules.sys_icsscmms ={};	// ICSS&CMMS
mpxd.modules.sys_etde ={};		// ET&DE
mpxd.modules.sys_twmv_m ={};	// TW&MV (Main)
mpxd.modules.sys_twmv ={};		// TW&MV
mpxd.modules.sys_psds_m ={};	// PSDS (Main)
mpxd.modules.sys_psds ={};		// PSDS
mpxd.modules.sys_commsits ={};	// COMMS&ITS
mpxd.modules.sys_afc ={};		// AFC

//----------------------
// DECLARATION
//
//----------------------




//
//	TEMP
//

mpxd.modules.temp_module.temp_portlet_data = Backbone.View.extend({   
	initialize: function (options) {
		this.data = options.data;
		this.render();
	}, render: function () {
		var that = this;
		var html = mpxd.getTemplate(that.data.type);
		template = _.template(html, {data: that.data});
		that.$el.html(template);
		that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
		that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
	}
})



//
//	MPXD1
//

mpxd.modules.temp_mpxd1.mpxd1_gis_data = Backbone.View.extend({   
	initialize: function (options) {
		this.data = options.data;
		this.render();
	}, render: function () {
		var that = this;
		var html = mpxd.getTemplate(that.data.type);
		template = _.template(html, {data: that.data});
		that.$el.html(template);
		that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
		that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
	}
})



//
// S&TC & PSD/APG
// 

mpxd.modules.sys_stcpsd.sys_stcpsd_actual_progress = Backbone.View.extend({   
	initialize: function (options) {
		this.data = options.data;
		this.render();
	}, render: function () {
		var that = this;
		var html = mpxd.getTemplate(that.data.type);
		template = _.template(html, {data: that.data});
		that.$el.html(template);
		that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
		that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
	}
})

//
// ICSS&CMMS
// 




//
// ET&DE
// 

mpxd.modules.sys_etde.sys_etde_actual_progress = Backbone.View.extend({   
	initialize: function (options) {
		this.data = options.data;
		this.render();
	}, render: function () {
		var that = this;
		var html = mpxd.getTemplate(that.data.type);
		template = _.template(html, {data: that.data});
		that.$el.html(template);
		that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
		that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
	}
})
mpxd.modules.sys_etde.sys_info = Backbone.View.extend({   
	initialize: function (options) {
		this.data = options.data;
		this.render();
	}, render: function () {
		var that = this;
		var html = mpxd.getTemplate(that.data.type);
		template = _.template(html, {data: that.data});
		that.$el.html(template);
		that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
		that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
	}
})
mpxd.modules.sys_etde.sys_etde_progress = Backbone.View.extend({
	initialize: function (options) {
		this.data = options.data;
		this.render();
	}, render: function () {
		var that = this;
		var html = mpxd.getTemplate(that.data.type);
		var currentProgress = parseFloat((typeof that.data.data.PROGRESS.currentActual == "undefined")?0:that.data.data.PROGRESS.currentActual);
		var remainingProgress = 100 - currentProgress;
		template = _.template(html, {data: that.data});
		that.$el.html(template);
		that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
		that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
		var closedJ = [];
		var openJ = [];
		var train = [];
		var trainData = [];
		var second=that.data.data.second;
		var portlet_etde_testing_data_detail =that.data.data.first;
		var completed=0;
		var flag = 0;
		for (var i = 0; i < portlet_etde_testing_data_detail.length; i++) {
			var train_no=0;
			b = portlet_etde_testing_data_detail[i]
			var td_data1 =parseInt( b.train);
			var td_data2a = b.static_total;
			var td_data2b = b.static_pass;
			var td_data2c = b.static_incomplete;
			var td_data2d = b.static_fail;
			var td_data3a = b.pat_total;
			var td_data3b = b.pat_pass;
			var td_data3c = b.pat_incomplete;
			var td_data3d = b.pat_fail;
			var td_data4a = b.sat_total;
			var td_data4b = b.sat_pass;
			var td_data4c = b.sat_incomplete;
			var td_data4d = b.sat_fail;
			var td_data5a = b.it_toatl;
			var td_data5b = b.it_pass;
			var td_data5c = b.it_incomplete;
			var td_data5d = b.it_fail;
			var td_data6a = b.sit_total;
			var td_data6b = b.sit_pass;
			var td_data6c = b.sit_incomplete;
			var td_data6d = b.sit_fail;
			if(td_data2a==td_data2b && td_data3a==td_data3b && td_data4a==td_data4b && td_data5a==td_data5b && td_data6a==td_data6b && td_data2c==0 && td_data2d==0 && td_data3c==0 && td_data3d==0 && td_data4c==0 && td_data4d==0 && td_data5c==0 && td_data5d==0 && td_data6c==0 &&  td_data6d==0 ){
				train_no=td_data1;
				var td = "";
				for (var k = 0; k < second.length; k++) {
					c = second[k];
					var train_number=parseInt(c.train);
					var open=parseInt(c.open_job);
					var closed=parseInt(c.closed_job);
					if(open==0 && closed !=0 && train_number==train_no ){
						console.log("train-> "+train_no);
						train.push(train_no);
						openJ.push(open); // values
						closedJ.push(closed); // values
						trainData.push(train_number);// all data
					}
				}

			}
		}

		for (var l = 0; l < trainData.length; l++) {
			flag = 1;
			td += "<tr><td>Train " + trainData[l] + "</td></tr>";
		}
		if (flag == 0) // to show if there is not completed trains
		{
			$('#id_tabHed').text("No Trains Completed Yet");
		}
		var completed = train.length;
		var perc = ((parseInt(closedJ.length)/ 58) * 100).toFixed(2);
		var stop= parseFloat(100-parseFloat(perc));
		if (perc == 0 || perc == 100) { // to trim trim decimal places for zero and 100
			perc = ((closedJ.length / 58) * 100);
		}
		$('.complete_train').text(completed);
		$('#complete_per').text(perc+"%");
		$('#start_id').attr('offset',perc+"%");
		$('#stop_id').attr('offset',stop+"%");
		$('#id_fullyTable').append(td);
		that.$el.find('#chart_' + that.data.id).highcharts({
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: 0,
				plotShadow: false,
				margin: [0, 0, 0, 0],
				spacingTop: 0,
				spacingBottom: 0,
				spacingLeft: 0,
				spacingRight: 0,
				height: 250
			},
			title: {
				text: currentProgress + '%',
				style: {
					color: '#0ff',
					fontSize: '250%',
					fontWeight: 'bold'
				},
				align: 'center',
				verticalAlign: 'middle',
				y: 10
			},
			tooltip: {
				pointFormat: '<b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					dataLabels: {
						enabled: false,
						distance: -50,
						style: {
							fontWeight: 'bold',
							color: 'white',
							textShadow: '0px 1px 2px black'
						}
					},
					startAngle: 0,
					endAngle: 360,
					size:'100%'
				}
			},
			series: [{
					type: 'pie',
					innerSize: '90%',
					data: [
						{
							name: 'Completed',
							y: currentProgress,
							color: 'rgba(0,255,255,.5)'
						},
						{
							name: 'Remaining',
							y: remainingProgress,
							color: 'rgba(0,0,0,0.2)'
						},
					]
				}]
			,
			credits: {
				enabled: false
			}
		});

	}
})

mpxd.modules.sys_etde.sys_etde_overallOpenItemClosure = Backbone.View.extend({   
	initialize: function (options) {
		this.data = options.data;
		this.render();
	}, render: function () {
		var that = this;
		var html = mpxd.getTemplate(that.data.type);
		template = _.template(html, {data: that.data});
		that.$el.html(template);
		that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});

		that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
		var train = [];
		var open = [];
		var closed = [];
		var date = [];
		var jobdone = [];
		var target = [];
		var portlet_detail =that.data.data;
		for (var i = 0; i <portlet_detail.length; i++) {
			if(that.data.data[i].open != undefined){
				train.push(that.data.data[i].open[0]);
				open.push(parseInt(that.data.data[i].open[1]));
				closed.push(parseInt(that.data.data[i].open[2]));
			}
			if(that.data.data[i].outstanding != undefined){
				date.push(that.data.data[i].outstanding[0]);
				jobdone.push(parseInt(that.data.data[i].outstanding[1]));
				target.push(parseInt(that.data.data[i].outstanding[2]));
			}

		}
		Highcharts.chart('portlet_et_overallOpenItemClosure_chart_1', {
			chart: {
				type: 'column'
			},
			title: {
				text: ''
			},
			xAxis: {
				categories:train,
				title: {
					text: 'Train'
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Number of Jobs (%)'
				}
			},
			tooltip: {
				pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
				shared: true
			},
			plotOptions: {
				column: {
					stacking: 'percent'
				}
			},
			series: [{
				name: 'Open Job',
				data: open,
				color: '#0af'
			}, {
				name: 'Closed Job',
				data: closed,
				color: '#0fa'
			}],
			credits: {
				enabled: false
			}
		});

		Highcharts.chart('portlet_et_overallOpenItemClosure_chart_2', {

			xAxis: {
				categories: date,
				title: {
					text: 'Date'
				}
			},
			title: {
				text: ''
			},
			yAxis: {
				title: {
					text: 'Number of Jobs Done'
				}
			},
			plotOptions: {
				series: {
					label: {
						connectorAllowed: false
					}
				}
			},
			tooltip: {
				shared: true
			},
			series: [{
				name: 'Jobs Done',
				data: jobdone,
				color:'#0fa'
			}, {
				name: 'Target',
				data: target,
				color: '#0af'
			}],

			responsive: {
				rules: [{
					condition: {
						maxWidth: 500
					},
					chartOptions: {
						legend: {
							layout: 'horizontal',
							align: 'center',
							verticalAlign: 'bottom'
						}
					}
				}]
			},
			credits: {
				enabled: false
			}

		});


	}
})

mpxd.modules.sys_etde.sys_etde_testing = Backbone.View.extend({   
	initialize: function (options) {
		this.data = options.data;
		this.render();
	}, render: function () {
		var that = this;
		var html = mpxd.getTemplate(that.data.type);
		template = _.template(html, {data: that.data});
		that.$el.html(template);
		that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
		that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
		var getPercent = function (totalIndex, passIndex) {
			var totalArray = _.map(that.data.data, function (p) {
				if(p[totalIndex] > 0){
					return parseInt(p[totalIndex]);
				}else{
					return 0;
				}

			});
			var passArray = _.map(that.data.data, function (p) {
				if(p[passIndex] > 0){
					return parseInt(p[passIndex]);
				}else{
					return 0;
				}
			});
			var total = _.reduce(totalArray, function (memo, num) {
				return ((isNaN(memo)) ? 0 : memo) + ((isNaN(num)) ? 0 : num);
			});
			var pass = _.reduce(passArray, function (memo, num) {
				return ((isNaN(memo)) ? 0 : memo) + ((isNaN(num)) ? 0 : num);
			});
			return (isNaN(parseFloat((pass / total) * 100).toFixed(0)) ? 0 : parseFloat((pass / total) * 100).toFixed(0));
		}


		var statictest = getPercent('static_total','static_pass');
		var dynamictest = getPercent('pat_total', 'pat_pass');
		var sat = getPercent('sat_total', 'sat_pass');
		//var sit = getPercent(13, 14); // before it was same for manline and it. Its a typo by illyas i think so changing : Agaile and for sit it was wrong columns so that's also changing
		var it = getPercent('it_toatl', 'it_pass');
		var sit = getPercent('sit_total', 'sit_pass');

		var td_data1 = statictest;
		var td_data2 = dynamictest;
		var td_data3 = sat;
		var td_data4 = it;
		var td_data5 = sit;

		var append_this = '<tr><td>'+td_data1+'%</td><td>'+td_data2+'%</td><td>'+td_data3+'%</td><td>'+td_data4+'%</td><td>'+td_data5+'%</td></tr>'

		$('.portlet_etde_testing table tbody').append(append_this);

		var portlet_etde_testing_data_detail =that.data.data;
		for (var i = 0; i < portlet_etde_testing_data_detail.length; i++) {
			b = portlet_etde_testing_data_detail[i]

			var td_data1 = b.train_no;
			var td_data2a = b.static_total;
			var td_data2b = b.static_pass;
			var td_data2c = b.static_incomplete;
			var td_data2d = b.static_fail;
			var td_data3a = b.pat_total;
			var td_data3b = b.pat_pass;
			var td_data3c = b.pat_incomplete;
			var td_data3d = b.pat_fail;
			var td_data4a = b.sat_total;
			var td_data4b = b.sat_pass;
			var td_data4c = b.sat_incomplete;
			var td_data4d = b.sat_fail;
			var td_data5a = b.it_toatl;
			var td_data5b = b.it_pass;
			var td_data5c = b.it_incomplete;
			var td_data5d = b.it_fail;
			var td_data6a = b.sit_total;
			var td_data6b = b.sit_pass;
			var td_data6c = b.sit_incomplete;
			var td_data6d = b.sit_fail;

			var append_this = '<tr><td>'+td_data1+'</td><td>'+td_data2a+'</td><td>'+td_data2b+'</td><td>'+td_data2c+'</td><td>'+td_data2d+'</td><td>'+td_data3a+'</td><td>'+td_data3b+'</td><td>'+td_data3c+'</td><td>'+td_data3d+'</td><td>'+td_data4a+'</td><td>'+td_data4b+'</td><td>'+td_data4c+'</td><td>'+td_data4d+'</td><td>'+td_data5a+'</td><td>'+td_data5b+'</td><td>'+td_data5c+'</td><td>'+td_data5d+'</td><td>'+td_data6a+'</td><td>'+td_data6b+'</td><td>'+td_data6c+'</td><td>'+td_data6d+'</td></tr>';

			$('.portlet_etde_testing_detail table tbody').append(append_this);

		}

	}
})

mpxd.modules.sys_etde.sys_etde_manufacturing_progress = Backbone.View.extend({   
	initialize: function (options) {
		this.data = options.data;
		this.render();
	}, render: function () {
		var that = this;
		var html = mpxd.getTemplate(that.data.type);
		template = _.template(html, {data: that.data});
		that.$el.html(template);
		that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
		that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
		var manufacturing_progress =that.data.data;
		var train_no_puzhen = [];
		var train_no_smh = [];
		var train_no_subd = [];
		var train_no_kjd = [];
		for (var i = 1; i < manufacturing_progress.length; i++) {
			var y = manufacturing_progress[i];
			var use_site_name = y.site_name;
			var site = y.site;
			var use_train_no = y.train_no;
			var use_car_1_no = y.car_1_no;
			var use_car_1_arrive = y.car_1_arrive;
			var use_car_2_no = y.car_2_no;
			var use_car_2_arrive = y.car_2_arrive;
			var use_car_3_no = y.car_3_no;
			var use_car_3_arrive = y.car_3_arrive;
			var use_car_4_no = y.car_4_no;
			var use_car_4_arrive = y.car_4_arrive;
			var use_data_date = y.data_date;
			var use_date_rolled_out = y.date_rolled_out;
			var use_date_deliver = y.date_deliver;
			var use_date_acc_baseline = y.date_acc_baseline;
			var use_date_forecast = y.date_forecast;
			var use_rev = y.rev_no;
			var use_comment = y.comment;
			if(use_site_name =="site3" || use_site_name == "Site3" || use_site_name == "SITE3") {
				train_no_kjd.push(parseInt(y.train_no));
				if (use_date_deliver === "") {
					var use_car_1_percentage = y.car_1_percentage;
					var use_car_2_percentage = y.car_2_percentage;
					var use_car_3_percentage = y.car_3_percentage;
					var use_car_4_percentage = y.car_4_percentage;

				} else {
					var use_car_1_percentage = "100";
					var use_car_2_percentage = "100";
					var use_car_3_percentage = "100";
					var use_car_4_percentage = "100";

				}
			}else if(use_site_name =="site4" || use_site_name == "Site4" || use_site_name == "SITE4"){
				train_no_subd.push(y.train_no);
				var use_car_1_puzhen = y.car_1_puzhen;
				var use_car_1_smh = y.car_1_smh;
				var use_car_2_puzhen = y.car_2_puzhen;
				var use_car_2_smh = y.car_2_smh;
				var use_car_3_puzhen = y.car_3_puzhen;
				var use_car_3_smh = y.car_3_smh;
				var use_car_4_puzhen = y.car_4_puzhen;
				var use_car_4_smh = y.car_4_smh;
				if(use_date_deliver === ""){
					var use_car_1_percentage = y.car_1_percentage;
					var use_car_2_percentage = y.car_2_percentage;
					var use_car_3_percentage = y.car_3_percentage;
					var use_car_4_percentage = y.car_4_percentage;

				}else{
					var use_car_1_percentage = "100";
					var use_car_2_percentage = "100";
					var use_car_3_percentage = "100";
					var use_car_4_percentage = "100";
				}
			}else if(use_site_name =="site2" || use_site_name == "Site2" || use_site_name == "SITE2"){
				train_no_smh.push(parseInt(y.train_no));
				var use_car_1_percentage = y.car_1_percentage;
				var use_car_2_percentage = y.car_2_percentage;
				var use_car_3_percentage = y.car_3_percentage;
				var use_car_4_percentage = y.car_4_percentage;
			}
			else{
				train_no_puzhen.push(parseInt(y.train_no));
				var use_car_1_percentage = y.car_1_percentage;
				var use_car_2_percentage = y.car_2_percentage;
				var use_car_3_percentage = y.car_3_percentage;
				var use_car_4_percentage = y.car_4_percentage;
			}


			var use_unit_percent_0 = "%";
			var use_unit_percent_1 = "%";
			var use_unit_percent_2 = "%";
			var use_unit_percent_3 = "%";
			var use_unit_percent_4 = "%";

			// pre calc
			if(use_car_1_percentage === "" || !use_car_1_percentage){
				var use_car_1_percentage = "N/A";
				var use_unit_percent_1 = "";
				var use_car_1_percentage_status = "null";
			} else {
				var use_car_1_percentage_status = "";
			}
			if(use_car_2_percentage === "" || !use_car_2_percentage){
				var use_car_2_percentage = "N/A";
				var use_unit_percent_2 = "";
				var use_car_2_percentage_status = "null";
			} else {
				var use_car_2_percentage_status = "";
			}
			if(use_car_3_percentage === "" || !use_car_3_percentage){
				var use_car_3_percentage = "N/A";
				var use_unit_percent_3 = "";
				var use_car_3_percentage_status = "null";
			} else {
				var use_car_3_percentage_status = "";
			}
			if(use_car_4_percentage === "" || !use_car_4_percentage){
				var use_car_4_percentage = "N/A";
				var use_unit_percent_4 = "";
				var use_car_4_percentage_status = "null";
			} else {
				var use_car_4_percentage_status = "";
			}
			if (use_car_1_percentage == "N/A" && use_car_2_percentage == "N/A" && use_car_3_percentage == "N/A" && use_car_4_percentage == "N/A") {
				var use_car_overall_percentage = "N/A";
				var use_unit_percent_0 = "";
			}else{
				var use_car_overall_percentage = parseInt(use_car_1_percentage)+parseInt(use_car_2_percentage)+parseInt(use_car_3_percentage)+parseInt(use_car_4_percentage);
				var use_car_overall_percentage = use_car_overall_percentage/4;
			}


			// define which portlet inner-block they will populated
			if (use_site_name == "site1" || use_site_name == "SITE1" || use_site_name == "Site1"){
				use_site_name = "train_block_1";
			} else if (use_site_name == "site2" || use_site_name == "SITE2" || use_site_name == "Site2"){
				use_site_name = "train_block_2";
			} else if (use_site_name == "Site4" || use_site_name == "SITE4" || use_site_name == "site4"){
				use_site_name = "train_block_3";
			} else if (use_site_name == "site3" || use_site_name == "Site3" || use_site_name == "SITE3"){
				use_site_name = "train_block_4";
			} else {
				use_site_name = "train_block_xx";
			}


			// date deliver
			if (!use_date_deliver) {
				hide_use_date_deliver = "hidden";
			} else {
				hide_use_date_deliver = "";
			}


			// hide percentage when there is date for rollout
			if (!use_date_rolled_out) {
				hide_date_rolled_out = "hidden";
				hide_percentage_due_to_rolled_out = '';
			} else {
				hide_date_rolled_out = "";
				hide_percentage_due_to_rolled_out = "hidden";
			}


			// color of car
			if (use_car_1_percentage_status == "null" && use_car_2_percentage_status == "null" && use_car_3_percentage_status == "null" && use_car_4_percentage_status == "null"){
				var use_car_0_percentage_class = "car_status_0";
				var use_train_table_data4 = "fa_status_0";
			} else if (use_car_overall_percentage < 50){
				var use_car_0_percentage_class = "car_status_1";
				var use_train_table_data4 = "fa_status_1";
			} else if (use_car_overall_percentage >= 50 && use_car_overall_percentage < 100){
				var use_car_0_percentage_class = "car_status_2";
				var use_train_table_data4 = "fa_status_2";
			} else if (use_car_overall_percentage == 100){
				var use_car_0_percentage_class = "car_status_3";
				var use_train_table_data4 = "fa_status_3";
			}

			if (use_car_1_percentage_status == "null") {
				var use_car_1_percentage_class = "car_status_0";
			} else if (use_car_1_percentage < 50){
				var use_car_1_percentage_class = "car_status_1";
			} else if (use_car_1_percentage >= 50 && use_car_1_percentage < 100){
				var use_car_1_percentage_class = "car_status_2";
			} else if (use_car_1_percentage == 100){
				var use_car_1_percentage_class = "car_status_3";
			}

			if (use_car_2_percentage_status == "null") {
				var use_car_2_percentage_class = "car_status_0";
			} else if (use_car_2_percentage < 50){
				var use_car_2_percentage_class = "car_status_1";
			} else if (use_car_2_percentage >= 50 && use_car_2_percentage < 100){
				var use_car_2_percentage_class = "car_status_2";
			} else if (use_car_2_percentage == 100){
				var use_car_2_percentage_class = "car_status_3";
			}

			if (use_car_3_percentage_status == "null") {
				var use_car_3_percentage_class = "car_status_0";
			} else if (use_car_3_percentage < 50){
				var use_car_3_percentage_class = "car_status_1";
			} else if (use_car_3_percentage >= 50 && use_car_3_percentage < 100){
				var use_car_3_percentage_class = "car_status_2";
			} else if (use_car_3_percentage == 100){
				var use_car_3_percentage_class = "car_status_3";
			}

			if (use_car_4_percentage_status == "null") {
				var use_car_4_percentage_class = "car_status_0";
			} else if (use_car_4_percentage < 50){
				var use_car_4_percentage_class = "car_status_1";
			} else if (use_car_4_percentage >= 50 && use_car_4_percentage < 100){
				var use_car_4_percentage_class = "car_status_2";
			} else if (use_car_4_percentage == 100){
				var use_car_4_percentage_class = "car_status_3";
			}


			// populate the table
			var use_train_table_data1 = use_train_no;

			var use_train_table_data2 = use_rev;

			var use_train_table_data3 = use_date_forecast;



			// rendering svg for all cars
			compile_svg_header = '<svg viewBox="100 0 8400 350">';
			compile_svg_car_head = '<g inkscape:groupmode="layer" id="car_h" class="'+use_car_0_percentage_class+'" inkscape:label="Head" transform="translate(0,-690.51888)" sodipodi:insensitive="true"> <path style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.90037203;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 179.08531,751.99263 13.44882,4.69677 137.64609,0.34366 11.22683,-5.3841 12.39636,93.36292 -17.0742,14.66311 -153.31689,-1.26011 -15.67083,-12.83023 z" id="path4167" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccccccc" /> <path style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:7.95506382;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 117.33755,969.41936 c 14.1071,17.74749 -2.8877,24.84009 22.21985,25.66037 7.48917,37.60707 37.42585,28.80727 47.74834,29.24257 l -0.10627,19.0694 6.52483,0.1219 1.73656,-0.04 0.95101,-1.2556 c -0.85951,-12.5201 -1.19826,-12.7562 9.22038,-13.8008 l -0.11696,-2.8638 c 27.1549,-0.127 27.20815,0 53.32761,0 -0.19471,-32.30836 11.55148,-37.11597 -21.63509,-37.11597 l -1.87118,-2.40568 c -34.8162,3.69774 -61.01693,-2.0315 -95.63287,-10.22566 -9.15961,0.24792 -17.74502,-0.30484 -22.36607,-6.38645 z" id="path4239" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccccccccccccc" /> <path sodipodi:nodetypes="ccccccccccccccc" inkscape:connector-curvature="0" id="path4241" d="m 404.28911,969.41039 c -8.73158,16.18415 0.23121,24.92693 -22.21982,25.66037 -7.48927,37.60714 -37.23683,28.99614 -47.55942,29.43134 l -0.0826,18.8807 -6.52483,0.1219 -1.73656,-0.04 -0.95097,-1.2556 c 0.85947,-12.5201 1.19828,-12.7563 -9.22039,-13.8009 l 0.11697,-2.8639 c -27.15485,-0.127 -27.20822,0 -53.32766,0 0.19472,-32.30833 -11.55141,-37.11585 21.63513,-37.11585 l 1.87115,-2.40576 c 34.81549,3.69764 61.0176,-2.03117 95.63301,-10.22401 9.15958,0.24788 17.74498,-0.30492 22.36603,-6.38653 z" style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:7.95506382;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path class="body_frame" style="opacity:1;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:7.80074406;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 188.17629,697.23243 -40.6974,34.82492 -4.21009,0.91647 -11.69463,9.62267 -4.67788,10.99735 6.08122,7.78979 c -16.10203,53.59803 -16.63321,123.97383 -21.05038,190.16246 l 3.85094,6.77728 c -0.63293,21.11722 21.381,15.61623 23.74846,16.5921 l 50.0531,11.91383 22.92151,-2.74937 99.17067,0 19.75318,2.80022 49.38345,-11.87097 c 14.25087,-0.0327 25.09335,0.36688 24.88833,-16.58974 l 3.27451,-8.24799 C 404.66682,885.94921 404.0994,819.31876 389.37859,758.49769 l 4.29278,-5.38986 -4.81488,-11.42778 -11.22687,-9.16447 -5.77637,-0.91404 -38.66331,-33.91088 z" id="path4147-2" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccccccccccccccccccccc" /> <path style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:7.80074406;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 188.34916,697.10256 -9.2617,21.06078 c -13.28189,37.86956 -17.04794,95.31389 -21.83114,150.66581 -1.50992,21.2486 3.84767,38.573 12.90024,53.78609 l 6.94625,2.5921 165.71813,-0.32402 8.60014,-3.56412 c 10.10433,-14.96694 13.59493,-33.42229 12.23864,-54.43413 -4.961,-48.16926 -4.93926,-91.45763 -22.16186,-151.63784 l -8.26938,-17.49668 z" id="path4193" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccccccccc" /> <path style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:7.80074406;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 180.24517,717.67732 -24.6427,15.71461 -12.07326,25.43498 c -6.31964,33.07268 -6.84227,75.06869 -7.11167,117.45455 0.20054,4.94862 0.15135,9.65263 4.63084,18.7927 l 18.73013,38.03096 4.42409,-3.36161 191.35316,0 5.78855,4.41467 18.85416,-39.73205 c 3.85906,-8.15431 3.82892,-13.45139 4.30006,-19.11671 -1.0995,-39.08321 0.84088,-75.85034 -7.60781,-120.53265 l -8.9309,-19.11675 -26.13121,-19.11674 -19.51569,3.24012 -128.3406,-0.32402 z" id="path4195" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccccccccccccccc" /> </g>';
			compile_svg_car_left = '<g inkscape:groupmode="layer" id="car_l" class="'+use_car_1_percentage_class+'" inkscape:label="L" style="display:inline" transform="translate(0,-690.51897)" sodipodi:insensitive="true"> <path class="body_frame" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:12.28785515;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 653.5316,704.71162 -48.86262,25.1606 c -37.22024,64.80194 -53.51116,112.35506 -65.33428,183.0709 l -9.37402,13.1715 c 8.81796,31.35703 13.55975,12.5017 13.08303,38.95461 l 110.48789,-0.36464 0.0408,-9.91323 1826.1091,0.5209 -0.01,-6.90999 32.8258,-0.47144 -0.7293,-203.47275 -29.1275,-0.3021 -0.044,-15.60964 -369.4496,1.03136 0.2577,-18.87314 -1069.9828,0.69266 0.088,21.17853 -390.28304,-1.8232 z" id="path4836" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccccccccccccccccc" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:12.28785515;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 2482.718,751.61025 0,193.38302 25.2687,0 0,-193.38302 z" id="path4952" inkscape:connector-curvature="0" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 717.70941,774.3591 0,161.90307 76.94041,0 0,-161.90307 z" id="path4860" inkscape:connector-curvature="0" /> <path inkscape:connector-curvature="0" id="path4868" d="m 873.77815,774.3591 0,161.90307 -76.94045,0 0,-161.90307 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path inkscape:connector-curvature="0" id="path4874" d="m 1210.7115,774.3591 0,161.90307 76.9404,0 0,-161.90307 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 1366.7802,774.3591 0,161.90307 -76.9404,0 0,-161.90307 z" id="path4880" inkscape:connector-curvature="0" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 1859.789,774.44757 0,161.90308 -76.9403,0 0,-161.90308 z" id="path4886" inkscape:connector-curvature="0" /> <path inkscape:connector-curvature="0" id="path4892" d="m 1703.7203,774.44757 0,161.90308 76.9405,0 0,-161.90308 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path inkscape:connector-curvature="0" id="path4898" d="m 2352.7869,773.93191 0,161.90304 -76.9404,0 0,-161.90304 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 2196.7182,773.93191 0,161.90304 76.9405,0 0,-161.90304 z" id="path4904" inkscape:connector-curvature="0" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.37916017;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 972.99309,783.21 c -4.02906,0.27474 -9.83517,-1.80249 -9.48082,7.93106 l 0,62.81037 c -0.0412,7.31392 4.70099,8.92473 10.93937,8.75153 l 137.68726,0.19338 c 5.6863,0.0481 9.8107,-2.44666 9.6742,-11.47532 l -0.044,-59.45949 c 0.1914,-7.50773 -3.2541,-9.4976 -8.0222,-9.48082 z" id="path4841-9" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccccccc" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" id="path4847-7" d="m 1465.2659,784.66858 c -4.029,0.27475 -9.8351,-1.80249 -9.4808,7.9311 l 0,62.81033 c -0.041,7.31392 4.701,8.92473 10.9394,8.75153 l 137.6872,0.19338 c 5.6863,0.0481 9.8107,-2.44666 9.6742,-11.47528 l -0.044,-59.45953 c 0.1914,-7.50773 -3.2542,-9.49761 -8.0223,-9.48082 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.37916017;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.37916017;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 1958.2681,783.93929 c -4.0291,0.27474 -9.8351,-1.80248 -9.4808,7.93109 l 0,62.81033 c -0.041,7.31393 4.701,8.92477 10.9393,8.75154 l 137.6872,0.19337 c 5.6863,0.0481 9.8107,-2.44666 9.6742,-11.47531 l -0.044,-59.45948 c 0.1914,-7.50775 -3.2543,-9.49761 -8.0224,-9.48083 z" id="path4853-1" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccccccc" /> <ellipse style="display:inline;opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:12.28785515;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="path4957" cx="760.31976" cy="1002.7504" rx="37.129539" ry="36.098164" /> <ellipse ry="36.098164" rx="37.129539" cy="1002.2347" cx="967.11084" id="ellipse4959" style="display:inline;opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:12.28785515;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <ellipse ry="36.098164" rx="37.129539" cy="1002.7504" cx="-2309.0146" id="ellipse4983" style="display:inline;opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:12.28785515;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" transform="scale(-1,1)" /> <ellipse style="display:inline;opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:12.28785515;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="ellipse4985" cx="-2102.2236" cy="1002.2347" rx="37.129539" ry="36.098164" transform="scale(-1,1)" /> <path style="display:inline;opacity:1;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:12.28785515;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 1058.9033,959.94824 0,57.75706 950.9287,0 0,-57.75706 z" id="path5007" inkscape:connector-curvature="0" /> </g>';
			compile_svg_car_center_1 = '<g sodipodi:insensitive="true" transform="translate(0,-690.51897)" inkscape:label="C 1" id="car_c1" class="'+use_car_2_percentage_class+'" inkscape:groupmode="layer"> <path class="body_frame" sodipodi:nodetypes="ccccccccccccccccc" inkscape:connector-curvature="0" id="path4199" d="m 2570.6146,726.93444 -0.3879,16.9096 -30.502,0.22684 c -0.3016,73.85131 0.085,134.75037 -0.4619,200.17705 l 33.0975,0.18388 0,7.28378 c 630.3375,-1.36667 1260.7116,-0.27365 1891.0569,-0.0938 l -0.01,-6.90995 32.8258,-0.47143 -0.7294,-203.47278 -29.1274,-0.3021 -0.044,-15.60964 -369.4495,1.03137 0.2577,-18.87314 -1176.0949,-2.58918 0.089,21.17856 c -152.2128,-0.60819 -198.3104,1.62373 -350.5229,1.33099 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:12.28785515;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path inkscape:connector-curvature="0" id="path4201" d="m 4466.4537,747.91977 0,193.38302 25.2687,0 0,-193.38302 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:12.28785515;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:12.28785515;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 2543.4528,748.04868 0,193.38301 25.2688,0 0,-193.38301 z" id="path4203" inkscape:connector-curvature="0" /> <path inkscape:connector-curvature="0" id="path4205" d="m 2701.4451,770.66861 0,161.90305 76.9404,0 0,-161.90305 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 2857.5139,770.66861 0,161.90305 -76.9405,0 0,-161.90305 z" id="path4207" inkscape:connector-curvature="0" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 3194.4472,770.66861 0,161.90305 76.9405,0 0,-161.90305 z" id="path4209" inkscape:connector-curvature="0" /> <path inkscape:connector-curvature="0" id="path4211" d="m 3350.516,770.66861 0,161.90305 -76.9405,0 0,-161.90305 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path inkscape:connector-curvature="0" id="path4213" d="m 3843.5248,770.75708 0,161.90305 -76.9404,0 0,-161.90305 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 3687.4561,770.75708 0,161.90305 76.9403,0 0,-161.90305 z" id="path4215" inkscape:connector-curvature="0" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 4336.5226,770.2414 0,161.90308 -76.9404,0 0,-161.90308 z" id="path4217" inkscape:connector-curvature="0" /> <path inkscape:connector-curvature="0" id="path4219" d="m 4180.4539,770.2414 0,161.90308 76.9404,0 0,-161.90308 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" id="path4221" d="m 2955.1495,779.23123 c -4.029,0.27472 -9.8351,-1.8025 -9.4808,7.93105 l 0,62.81037 c -0.041,7.31389 4.701,8.92473 10.9394,8.75152 l 137.6872,0.19337 c 5.6863,0.0481 9.8107,-2.44665 9.6742,-11.4753 l -0.044,-59.45951 c 0.1914,-7.50772 -3.2542,-9.49759 -8.0223,-9.4808 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.37916017;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.37916017;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 3447.4223,780.68981 c -4.0291,0.27473 -9.8352,-1.8025 -9.4809,7.93106 l 0,62.81036 c -0.041,7.3139 4.701,8.92474 10.9395,8.75152 l 137.6872,0.19338 c 5.6863,0.048 9.8107,-2.44665 9.6742,-11.4753 l -0.044,-59.45951 c 0.1913,-7.50772 -3.2542,-9.49759 -8.0223,-9.4808 z" id="path4223" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccccccc" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" id="path4225" d="m 3940.4245,779.96051 c -4.0291,0.27473 -9.8352,-1.8025 -9.4809,7.93107 l 0,62.81037 c -0.041,7.31389 4.701,8.92473 10.9393,8.75151 l 137.6873,0.19338 c 5.6864,0.048 9.8108,-2.44666 9.6743,-11.4753 l -0.044,-59.45951 c 0.1914,-7.50774 -3.2541,-9.49759 -8.0222,-9.4808 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.37916017;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <ellipse transform="scale(-1,1)" style="display:inline;opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:12.28785515;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="ellipse4227" cx="-4292.75" cy="999.05988" rx="37.129539" ry="36.098164" /> <ellipse transform="scale(-1,1)" ry="36.098164" rx="37.129539" cy="998.54419" cx="-4085.9595" id="ellipse4229" style="display:inline;opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:12.28785515;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path inkscape:connector-curvature="0" id="path4231" d="m 3042.639,956.25776 0,57.75704 950.9287,0 0,-57.75704 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:12.28785515;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <ellipse ry="36.098164" rx="37.129539" cy="999.05981" cx="2742.7366" id="ellipse4233" style="display:inline;opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:12.28785515;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <ellipse style="display:inline;opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:12.28785515;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="ellipse4235" cx="2949.5276" cy="998.54407" rx="37.129539" ry="36.098164" /> </g>';
			compile_svg_car_center_2 = '<g inkscape:groupmode="layer" id="car_c2" class="'+use_car_3_percentage_class+'" inkscape:label="C 2" transform="translate(0,-690.51897)"> <path class="body_frame" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:12.28785515;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 4553.1415,723.44214 -0.3879,16.9096 -30.502,0.22684 c -0.3016,73.85131 0.085,134.75037 -0.4619,200.17705 l 33.0975,0.18388 0,7.28378 c 630.3375,-1.36667 1260.7116,-0.27365 1891.0569,-0.0938 l -0.01,-6.90995 32.8258,-0.47143 -0.7294,-203.47278 -29.1274,-0.3021 -0.044,-15.60964 -369.4495,1.03137 0.2577,-18.87314 -1176.0949,-2.58918 0.089,21.17856 c -152.2128,-0.60819 -198.3104,1.62373 -350.5229,1.33099 z" id="path4836-9" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccccccccccccccc" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:12.28785515;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 6448.9806,744.42747 0,193.38302 25.2687,0 0,-193.38302 z" id="path4952-78" inkscape:connector-curvature="0" /> <path inkscape:connector-curvature="0" id="path5029" d="m 4525.9797,744.55638 0,193.38301 25.2688,0 0,-193.38301 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:12.28785515;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 4683.972,767.17631 0,161.90305 76.9404,0 0,-161.90305 z" id="path4860-73" inkscape:connector-curvature="0" /> <path inkscape:connector-curvature="0" id="path4868-7" d="m 4840.0408,767.17631 0,161.90305 -76.9405,0 0,-161.90305 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path inkscape:connector-curvature="0" id="path4874-2" d="m 5176.9741,767.17631 0,161.90305 76.9405,0 0,-161.90305 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 5333.0429,767.17631 0,161.90305 -76.9405,0 0,-161.90305 z" id="path4880-62" inkscape:connector-curvature="0" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 5826.0517,767.26478 0,161.90305 -76.9404,0 0,-161.90305 z" id="path4886-5" inkscape:connector-curvature="0" /> <path inkscape:connector-curvature="0" id="path4892-6" d="m 5669.983,767.26478 0,161.90305 76.9403,0 0,-161.90305 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path inkscape:connector-curvature="0" id="path4898-1" d="m 6319.0495,766.7491 0,161.90308 -76.9404,0 0,-161.90308 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 6162.9808,766.7491 0,161.90308 76.9404,0 0,-161.90308 z" id="path4904-6" inkscape:connector-curvature="0" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.37916017;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 4937.6764,775.73893 c -4.029,0.27472 -9.8351,-1.8025 -9.4808,7.93105 l 0,62.81037 c -0.041,7.31389 4.701,8.92473 10.9394,8.75152 l 137.6872,0.19337 c 5.6863,0.0481 9.8107,-2.44665 9.6742,-11.4753 l -0.044,-59.45951 c 0.1914,-7.50772 -3.2542,-9.49759 -8.0223,-9.4808 z" id="path4841-2" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccccccc" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" id="path4847-0" d="m 5429.9492,777.19751 c -4.0291,0.27473 -9.8352,-1.8025 -9.4809,7.93106 l 0,62.81036 c -0.041,7.3139 4.701,8.92474 10.9395,8.75152 l 137.6872,0.19338 c 5.6863,0.048 9.8107,-2.44665 9.6742,-11.4753 l -0.044,-59.45951 c 0.1913,-7.50772 -3.2542,-9.49759 -8.0223,-9.4808 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.37916017;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.37916017;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 5922.9514,776.46821 c -4.0291,0.27473 -9.8352,-1.8025 -9.4809,7.93107 l 0,62.81037 c -0.041,7.31389 4.701,8.92473 10.9393,8.75151 l 137.6873,0.19338 c 5.6864,0.048 9.8108,-2.44666 9.6743,-11.4753 l -0.044,-59.45951 c 0.1914,-7.50774 -3.2541,-9.49759 -8.0222,-9.4808 z" id="path4853-2" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccccccc" /> <ellipse ry="36.098164" rx="37.129539" cy="995.56757" cx="-6275.2769" id="ellipse4983-5" style="display:inline;opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:12.28785515;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" transform="scale(-1,1)" /> <ellipse style="display:inline;opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:12.28785515;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="ellipse4985-7" cx="-6068.4863" cy="995.05188" rx="37.129539" ry="36.098164" transform="scale(-1,1)" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:12.28785515;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 5025.1659,952.76546 0,57.75704 950.9287,0 0,-57.75704 z" id="path5007-9" inkscape:connector-curvature="0" /> <ellipse style="display:inline;opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:12.28785515;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="ellipse5011" cx="4725.2632" cy="995.5675" rx="37.129539" ry="36.098164" /> <ellipse ry="36.098164" rx="37.129539" cy="995.05176" cx="4932.0542" id="ellipse5013" style="display:inline;opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:12.28785515;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> </g>';
			compile_svg_car_right = '<g inkscape:groupmode="layer" id="car_r" class="'+use_car_4_percentage_class+'" inkscape:label="R" style="display:inline" transform="translate(0,-690.51897)"> <path class="body_frame" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:12.28785515;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 8365.9173,697.13823 48.8624,25.1606 17.8679,30.26568 c 43.7297,32.05148 33.3255,130.02201 56.8406,165.97671 -5.7065,28.99593 -13.7278,0.91311 -13.0831,38.95466 l -110.4878,-0.36467 -0.041,-9.91324 -1826.1093,0.52089 0.01,-6.90994 -32.8259,-0.47144 0.7294,-203.47278 29.1274,-0.30212 0.044,-15.60963 369.4495,1.03139 -0.2577,-18.87316 1069.9828,0.69265 -0.089,21.17858 390.2832,-1.82325 z" id="path4836-6" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccccccccccccccccc" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:12.28785515;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 6536.7307,744.03689 0,193.38303 -25.2688,0 0,-193.38303 z" id="path4952-7" inkscape:connector-curvature="0" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 8301.7394,766.78574 0,161.90304 -76.9403,0 0,-161.90304 z" id="path4860-7" inkscape:connector-curvature="0" /> <path inkscape:connector-curvature="0" id="path4868-0" d="m 8145.6708,766.78574 0,161.90304 76.9403,0 0,-161.90304 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path inkscape:connector-curvature="0" id="path4874-9" d="m 7808.7371,766.78574 0,161.90304 -76.9404,0 0,-161.90304 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 7652.6684,766.78574 0,161.90304 76.9404,0 0,-161.90304 z" id="path4880-6" inkscape:connector-curvature="0" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 7159.6596,766.87421 0,161.90305 76.9404,0 0,-161.90305 z" id="path4886-7" inkscape:connector-curvature="0" /> <path inkscape:connector-curvature="0" id="path4892-3" d="m 7315.7283,766.87421 0,161.90305 -76.9404,0 0,-161.90305 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path inkscape:connector-curvature="0" id="path4898-5" d="m 6666.6618,766.35852 0,161.90304 76.9404,0 0,-161.90304 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.07196379;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 6822.7305,766.35852 0,161.90304 -76.9404,0 0,-161.90304 z" id="path4904-2" inkscape:connector-curvature="0" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.37916017;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 8045.5244,774.03714 c 4.0291,0.27474 9.8352,-1.80248 9.4809,7.93109 l 0,62.81033 c 0.041,7.31393 -4.701,8.92477 -10.9394,8.75154 l -137.6873,0.19337 c -5.6863,0.0481 -9.8107,-2.44666 -9.6742,-11.47528 l 0.044,-59.45952 c -0.1914,-7.50774 3.2542,-9.4976 8.0221,-9.48082 z" id="path4841-7-2" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccccccc" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" id="path4847-6-5" d="m 7553.2516,775.49573 c 4.0291,0.27473 9.8351,-1.80249 9.4808,7.93108 l 0,62.81037 c 0.041,7.31389 -4.701,8.92474 -10.9394,8.7515 l -137.6872,0.19338 c -5.6863,0.048 -9.8107,-2.44667 -9.6742,-11.47529 l 0.044,-59.45952 c -0.1914,-7.50773 3.2542,-9.4976 8.0223,-9.48082 z" style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.37916017;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:3.37916017;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 7060.2495,774.76643 c 4.0291,0.27475 9.8351,-1.80249 9.4808,7.93109 l 0,62.81037 c 0.041,7.31389 -4.7011,8.92473 -10.9394,8.75149 l -137.6872,0.19338 c -5.6863,0.0481 -9.8107,-2.44666 -9.6743,-11.47527 l 0.044,-59.45953 c -0.1913,-7.50773 3.2542,-9.49761 8.0223,-9.48078 z" id="path4853-2-0" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccccccc" /> <ellipse style="display:inline;opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:12.28785515;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="path4957-6" cx="-8259.1279" cy="995.177" rx="37.129539" ry="36.098164" transform="scale(-1,1)" /> <ellipse ry="36.098164" rx="37.129539" cy="994.66125" cx="-8052.3379" id="ellipse4959-6" style="display:inline;opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:12.28785515;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" transform="scale(-1,1)" /> <ellipse ry="36.098164" rx="37.129539" cy="995.177" cx="6710.4341" id="ellipse4983-1" style="display:inline;opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:12.28785515;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /> <ellipse style="display:inline;opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:12.28785515;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="ellipse4985-8" cx="6917.2251" cy="994.66125" rx="37.129539" ry="36.098164" /> <path style="display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:12.28785515;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 7960.5454,952.37488 0,57.75702 -950.9288,0 0,-57.75702 z" id="path5007-3" inkscape:connector-curvature="0" /> </g>';
			compile_svg_footer = '</svg>';


			// compile svg for all car
			compile_svg_all = compile_svg_header+compile_svg_car_head+compile_svg_car_left+compile_svg_car_center_1+compile_svg_car_center_2+compile_svg_car_right+compile_svg_footer;


			// compile everything into html
			use_train_plate_html = '<div class="train_plate"><div class="label_top"><span class="label_plate label_1" '+hide_use_date_deliver+'><span>Target Delivery - '+use_date_deliver+'</span></span></div><div class="svg_inside">'+compile_svg_all+'</div><div class="label_bottom"><div class="car_name"><span class="label_plate label_1"><span>Train '+use_train_no+'</span></span><span class="label_plate label_2"><span>'+use_car_1_no+'</span></span><span class="label_plate label_3"><span>'+use_car_2_no+'</span></span><span class="label_plate label_4"><span>'+use_car_3_no+'</span></span><span class="label_plate label_5"><span>'+use_car_4_no+'</span></span></div><div class="car_progress"><span class="progress_plate progress_1"><span>'+use_car_overall_percentage+use_unit_percent_0+'</span></span><span class="progress_plate progress_2" '+hide_percentage_due_to_rolled_out+'><span>'+use_car_1_percentage+use_unit_percent_1+'</span></span><span class="progress_plate progress_3" '+hide_percentage_due_to_rolled_out+'><span>'+use_car_2_percentage+use_unit_percent_2+'</span></span><span class="progress_plate progress_4" '+hide_percentage_due_to_rolled_out+'><span>'+use_car_3_percentage+use_unit_percent_3+'</span></span><span class="progress_plate progress_5" '+hide_percentage_due_to_rolled_out+'><span>'+use_car_4_percentage+use_unit_percent_4+'</span></span><span class="progress_plate progress_6" '+hide_date_rolled_out+'><span>Rolled out on '+use_date_rolled_out+'</span></span></div></div></div>'



			// compile table into html
			use_train_table_html = '<tr><td>'+use_train_table_data1+'</td><td>'+use_train_table_data2+'</td><td>'+use_train_table_data3+'</td><td><i class="'+use_train_table_data4+' fa fa-circle" aria-hidden="true"></i></td></tr>'

			// everything compile everything into everything, so everyhing can render into everything.
			$('#'+use_site_name+' .diagram').append(use_train_plate_html);
			$('#'+use_site_name+' .train_table table tbody').append(use_train_table_html);

		}
		var tg = function (n) {
			var t = '', a = [], b = [], k = 0;
			for (var i = 0; i < n.length; i++) {
				if (i == 0 || (n[i] != n[i - 1] + 1)) {
					a.push(n[i]);
				}
			}
			for (var i = 1; i < a.length; i++) {
				if (a[i] != a[i - 1] + 1) {
					b.push(n[n.indexOf(a[i]) - 1]);
				}
			}
			b.push(n[n.length - 1]);
			for (var j = 0; j < a.length; j++) {
				if (a[j] == b[j]) {
					if (j == a.length - 1) {
						t += a[j];
					} else {
						t += a[j] + ", ";
					}
				} else {
					if (j == a.length - 1) {
						t += a[j] + " - " + b[j];
					}
					else {
						t += a[j] + " - " + b[j] + ", ";
					}
				}
			}
			return t;
		}
		var getNumberOfTrains = function (d) {
			var trains = d;
			//var trainIndeces = _.map(trains, function (t) {
			//    return parseInt(t.substr(t.indexOf("Train") + 6));
			//})
			var counts=0;
			var trainIndeces = [];
			for (var i = 0; i < trains.length; i++) {
				if (trains[i].length > 2) {
					var ar = trains[i].split('-');
					trainIndeces.push(parseInt(ar[0]));
					trainIndeces.push(parseInt(ar[1]));
					counts=counts+ (parseInt(ar[1])-parseInt(ar[0])+1);
				} else {
					counts=counts+1
					trainIndeces.push(parseInt(trains[i]));
				}
			}
			trainIndeces.sort(function (a, b) {
				return a - b
			});
			//console.log(parseInt(trainIndeces.length));
			//return parseInt(trainIndeces[trainIndeces.length - 1]) - parseInt(trainIndeces[0]) + 1;
			return counts;
		}
		var getSummarys_k = function (d) {
			var trains = d;
			var trainIndeces = [];
			for (var i = 0; i < trains.length; i++) {
				if (trains[i].length > 2) {
					var ar = trains[i].split('-');
						trainIndeces.push(parseInt(ar[0]));
					    trainIndeces.push(parseInt(ar[1]));
				} else {
					trainIndeces.push(parseInt(trains[i]));
				}
			}
			trainIndeces.sort(function (a, b) {
				return a - b
			});
			if (trainIndeces[0] == undefined && trainIndeces[trainIndeces.length - 1] == undefined) {
				return "No Train(s) here ";
			}
			else {
				if (trainIndeces.length > 1) {
					return  tg(trainIndeces);
				} else {
					return  trainIndeces[0];
				}
			}
		}
		var getSummary = function (d) {
			var trainIndeces = d;
			trainIndeces.sort(function (a, b) {
				return a - b
			});
			if (trainIndeces[0] == undefined && trainIndeces[trainIndeces.length - 1] == undefined) {
				return "No Train(s) here ";
			}
			else {
				if (trainIndeces.length > 1) {
					return  tg(trainIndeces);
				}
				else {
					return  trainIndeces[0];
				}
			}
		}
		var mfgsummary = getSummary(train_no_puzhen);
		var asssummary = getSummary(train_no_smh);
		var kjdsummary = getSummary(train_no_kjd);
		var subdsummary = getSummarys_k(train_no_subd);
		var subdnumber = getNumberOfTrains(train_no_subd);
		var kjdnumber = getNumberOfTrains(train_no_kjd);
		$('#kjd_name').text("SITE FOUR");
		$('#kjd_no').text(kjdsummary);
		$('#kjd_total').text(kjdnumber);
		$('#smh_name').text("SITE TWO");
		$('#smh_no').text(asssummary);
		$('#puzhen_name').text("SITE ONE");
		$('#puzhen_no').text(mfgsummary);
		$('#subd_name').text("SITE THREE");
		$('#subd_no').text(subdsummary);
		$('#subd_total').text(subdnumber);

	}
})

mpxd.modules.sys_etde.sys_etde_project_timeline = Backbone.View.extend({   
	initialize: function (options) {
		this.data = options.data;
		this.render();
	}, render: function () {
		var that = this;
		var html = mpxd.getTemplate(that.data.type);
		template = _.template(html, {data: that.data});
		that.$el.html(template);
		that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
		that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
	/*	var getVariance = function (phasedate) {
				if(phasedate !== "undefined" ){
					var variance = Math.round(compareDate(phasedate));
				}else{
					var variance = 0;
				}
			return variance;
		}
		var getDayLeft = function (phasedate) {
			if(phasedate !== "undefined" ){
				console.log(phasedate);
				var daysleft = compareDate(phasedate)
				if( daysleft < 0){ daysleft=0 };
			}else{
				daysleft=0;
			}
			return daysleft
		}*/
	/*	var portlet_etde_project_timeline_data = that.data.data;

		for (var i = 0; i < portlet_etde_project_timeline_data.length; i++) {
			a = portlet_etde_project_timeline_data[i]
			var td_data1 = a.phase;
			var td_data2a = 0;
			var td_data2b = a.sat_date;
			var td_data2c = getVariance(a.sat_date);
			var td_data3a = 0;
			var td_data3b = a.sit_date;
			var td_data3c =getVariance(a.sit_date);
			var td_data4a = getDayLeft(a.trial_date);
			var td_data4b = a.trial_date;
			var td_data4c =getVariance(a.trial_date);
*/
			/*var append_this = '<tr><td>'+td_data1+'</td><td><div class="col-md-12 upper_box"><div class="row"><div class="col-md-12 col1_data1_data"><span class="data_holder data_days">'+td_data2a+'</span></div><div class="col-md-12 col1_data1_label">Days Left</div></div></div><div class="col-md-12 lower_box"><div class="row"><div class="col-md-6"><div class="row"><div class="col-md-12 col1_data2_label">Start Date:</div><div class="col-md-12 col1_data2_data"><span class="data_holder data_early">'+td_data2b+'</span></div></div></div><div class="col-md-6"><div class="row"><div class="col-md-12 col1_data3_label">Variance:</div><div class="col-md-12 col1_data3_data"><span class="data_holder data_variance">'+td_data2c+'</span></div></div></div></div></div></td><td><div class="col-md-12 upper_box"><div class="row"><div class="col-md-12 col2_data1_data"><span class="data_holder data_days">'+td_data3a+'</span></div><div class="col-md-12 col2_data1_label">Days Left</div></div></div><div class="col-md-12 lower_box"><div class="row"><div class="col-md-6"><div class="row"><div class="col-md-12 col2_data2_label">Start Date:</div><div class="col-md-12 col2_data2_data"><span class="data_holder data_early">'+td_data3b+'</span></div></div></div><div class="col-md-6"><div class="row"><div class="col-md-12 col2_data3_label">Variance:</div><div class="col-md-12 col2_data3_data"><span class="data_holder data_variance">'+td_data3c+'</span></div></div></div></div></div></td><td><div class="col-md-12 upper_box"><div class="row"><div class="col-md-12 col3_data1_data"><span class="data_holder data_days">'+td_data4a+'</span></div><div class="col-md-12 col3_data1_label">Days Left</div></div></div><div class="col-md-12 lower_box"><div class="row"><div class="col-md-6"><div class="row"><div class="col-md-12 col3_data2_label">Start Date:</div><div class="col-md-12 col3_data2_data"><span class="data_holder data_early">'+td_data4b+'</span></div></div></div><div class="col-md-6"><div class="row"><div class="col-md-12 col3_data3_label">Variance:</div><div class="col-md-12 col3_data3_data"><span class="data_holder data_variance">'+td_data4c+'</span></div></div></div></div></div></td></tr>'*/

			/*$('.portlet_etde_project_timeline table tbody').append(append_this);*/

		}

/*	}*/
})






//
// TW&MV (Main)
// 

mpxd.modules.sys_twmv_m.sys_twmv_gis = Backbone.View.extend({   
	initialize: function (options) {
		this.data = options.data;
		this.render();
	}, render: function () {
		var that = this;
		var html = mpxd.getTemplate(that.data.type);
		template = _.template(html, {data: that.data});
		that.$el.html(template);
		that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
		that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
	}
})



//
// TW&MV
// 

mpxd.modules.sys_twmv.sys_twmv_actual_progress = Backbone.View.extend({   
	initialize: function (options) {
		this.data = options.data;
		this.render();
	}, render: function () {
		var that = this;
		var html = mpxd.getTemplate(that.data.type);
		template = _.template(html, {data: that.data});
		that.$el.html(template);
		that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
		that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
	}
})


mpxd.modules.sys_twmv.sys_twmv_kd_overall_progress = Backbone.View.extend({   
	initialize: function (options) {
		this.data = options.data;
		this.render();
	}, render: function () {
		var that = this;
		var html = mpxd.getTemplate(that.data.type);
		template = _.template(html, {data: that.data});
		that.$el.html(template);
		that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
		that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
	}
})

mpxd.modules.sys_twmv.sys_twmv_kd_summary = Backbone.View.extend({   
	initialize: function (options) {
		this.data = options.data;
		this.render();
	}, render: function () {
		var that = this;
		var html = mpxd.getTemplate(that.data.type);
		// var currentProgress = parseFloat((typeof that.data.data.currentActual == "undefined")?0:that.data.data.currentActual);
		// var remainingProgress = 100 - currentProgress;
		var currentProgress = 74;
		var remainingProgress = 100 - currentProgress;
		template = _.template(html, {data: that.data});
		that.$el.html(template);
		that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
		that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
		that.$el.find('#chart_' + that.data.id).highcharts({
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: 0,
				plotShadow: false,
				margin: [0, 0, 0, 0],
				spacingTop: 0,
				spacingBottom: 0,
				spacingLeft: 0,
				spacingRight: 0,
				height: 250
			},
			title: {
				text: currentProgress + '%',
				style: {
					color: '#0ff',
					fontSize: '250%',
					fontWeight: 'bold'
				},
				align: 'center',
				verticalAlign: 'middle',
				y: 10
			},
			tooltip: {
				pointFormat: '<b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					dataLabels: {
						enabled: false,
						distance: -50,
						style: {
							fontWeight: 'bold',
							color: 'white',
							textShadow: '0px 1px 2px black'
						}
					},
					startAngle: 0,
					endAngle: 360,
					size:'100%'
				}
			},
			series: [{
					type: 'pie',
					innerSize: '90%',
					data: [
						{
							name: 'Completed',
							y: currentProgress,
							color: 'rgba(0,255,255,.5)'
						},
						{
							name: 'Remaining',
							y: remainingProgress,
							color: 'rgba(0,0,0,0.2)'
						},
					]
				}]
			,
			credits: {
				enabled: false
			}
		});
	}
})



//
// PSDS (Main)
// 

mpxd.modules.sys_psds_m.sys_psds_gis = Backbone.View.extend({   
	initialize: function (options) {
		this.data = options.data;
		this.render();
	}, render: function () {
		var that = this;
		var html = mpxd.getTemplate(that.data.type);
		template = _.template(html, {data: that.data});
		that.$el.html(template);
		that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
		that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
        console.log(that.data.data);
		var trendJSON=that.data.data.TREND;
		console.log(trendJSON);
		/*var json = [
			{"boxid":"box1","b_name":"Design","arrow":"up","percentage":"86%"},
			{"boxid":"box2","b_name":"Installation","arrow":"down","percentage":"56%"},
			{"boxid":"box3","b_name":"Test & Comm","arrow":"right","percentage":"75%"},
			{"boxid":"box4","b_name":"Hand Over","arrow":"right","percentage":"35%"}
		];*/
		for (i = 1; i < trendJSON.length; i++) {
			var b = trendJSON[i];
			use_d__arrow=b.d_arrow;
			use_d_percentage=b.d_percentage;
			use_i__arrow=b.i_arrow;
			use_i_percentage=b.i_percentage;
			use_t__arrow=b.t_arrow;
			use_t_percentage=b.t_percentage;
			use_h__arrow=b.h_arrow;
			use_h_percentage=b.h_percentage;

			if(use_d__arrow=="1.00") {
				apply_arrow_d='<i style="color:#0f3" class="fa fa-arrow-up" aria-hidden="true"></i>'
			} else if(use_d__arrow=="3.00") {
				apply_arrow_d='<i style="color:#f03" class="fa fa-arrow-down" aria-hidden="true"></i>'
			} else if (use_d__arrow=="2.00"){
				apply_arrow_d='<i style="color:#333" class="fa fa-arrow-right" aria-hidden="true"></i>'
			}else{
				apply_arrow_d='<i style="color:#333" class="fa fa-arrow-right" aria-hidden="true"></i>'
			}
			if(use_i__arrow=="1.00") {
				apply_arrow_i='<i style="color:#0f3" class="fa fa-arrow-up" aria-hidden="true"></i>'
			} else if(use_i__arrow=="3.00") {
				apply_arrow_i='<i style="color:#f03" class="fa fa-arrow-down" aria-hidden="true"></i>'
			} else if (use_i__arrow=="2.00"){
				apply_arrow_i='<i style="color:#333" class="fa fa-arrow-right" aria-hidden="true"></i>'
			}else{
				apply_arrow_i='<i style="color:#333" class="fa fa-arrow-right" aria-hidden="true"></i>'
			}
			if(use_t__arrow=="1.00") {
				apply_arrow_t='<i style="color:#0f3" class="fa fa-arrow-up" aria-hidden="true"></i>'
			} else if(use_t__arrow=="3.00") {
				apply_arrow_t='<i style="color:#f03" class="fa fa-arrow-down" aria-hidden="true"></i>'
			} else if (use_t__arrow=="2.00"){
				apply_arrow_t='<i style="color:#333" class="fa fa-arrow-right" aria-hidden="true"></i>'
			}else{
				apply_arrow_t='<i style="color:#333" class="fa fa-arrow-right" aria-hidden="true"></i>'
			}
			if(use_h__arrow=="1.00") {
				apply_arrow_h='<i style="color:#0f3" class="fa fa-arrow-up" aria-hidden="true"></i>'
			} else if(use_h__arrow=="3.00") {
				apply_arrow_h='<i style="color:#f03" class="fa fa-arrow-down" aria-hidden="true"></i>'
			} else if (use_h__arrow=="2.00"){
				apply_arrow_h='<i style="color:#333" class="fa fa-arrow-right" aria-hidden="true"></i>'
			}else{
				apply_arrow_h='<i style="color:#333" class="fa fa-arrow-right" aria-hidden="true"></i>'
			}
			$('.number_d' ).text(use_d_percentage +"%");
			$('.number_i' ).text(use_i_percentage+"%");
			$('.number_t' ).text(use_t_percentage+"%");
			$('.number_h' ).text(use_h_percentage+"%");

			$('.trend_d' ).html(apply_arrow_d);
			$('.trend_i' ).html(apply_arrow_i);
			$('.trend_t' ).html(apply_arrow_t);
			$('.trend_h' ).html(apply_arrow_h);
			var json = [
				{"chart_title":"System Overall","chart_name":"","chart_id":"db_donut_0","chart_value":"25","set_donut":"1","url":"#"}
			];


				var b = json[i];
				use_chart_title ="System Overall";
				use_chart_id = "db_donut_0";
				use_chart_value =parseFloat((parseFloat(use_d_percentage)+parseFloat(use_i_percentage)+parseFloat(use_t_percentage)+parseFloat(use_h_percentage))/4);
				use_chart_set_donut = "1";
				use_chart_name = "";
				use_chart_url="#";

				use_chart_font_size = '25px';
				use_chart_font_color = '#ffffff';
				if (use_chart_value >= 75) {
					use_chart_donut_color = '#00ff55';
				} else if (use_chart_value >= 50) {
					use_chart_donut_color = '#ffff00';
				} else if (use_chart_value >= 25) {
					use_chart_donut_color = '#ff7700';
				} else if (use_chart_value < 25) {
					use_chart_donut_color = '#ff0055';
				};
				use_chart_circle_border = 'border:1px solid '+use_chart_donut_color+';'
				use_chart_svg_width = 165;
				use_chart_svg_height = 165;
				use_chart_circle_r = 80;
				use_chart_circle_cx = 81.5;
				use_chart_circle_cy = 81.5;
				use_chart_circle_data_total = 503;
				use_chart_circle_data_used = use_chart_value / 100 * use_chart_circle_data_total;


				donut_body = '<div><a class="url_donut_system" style="text-decoration: none; color: #fff;" href="'+use_chart_url+'" title="'+use_chart_name+'"><span class="donut_title1_name">'+use_chart_title+'</span></a><svg class="svg_donut_system" width="'+use_chart_svg_width+'" height="'+use_chart_svg_height+'" style="border:1px solid '+use_chart_donut_color+';"><text style="font-style:normal;font-weight:bold;font-size:'+use_chart_font_size+';fill:'+use_chart_font_color+';" transform="matrix(0,1,-1,0,0,0)"><tspan sodipodi:role="line" x="50" y="-65">'+use_chart_value+'%</tspan></text><circle class="svg_donut_system_circle" r="'+use_chart_circle_r+'" cx="'+use_chart_circle_cx+'" cy="'+use_chart_circle_cy+'" class="pie" style="stroke: '+use_chart_donut_color+';stroke-dasharray: '+use_chart_circle_data_used+','+use_chart_circle_data_total+';"></circle></svg></div>';


				$('.dp_top').append(donut_body);

		}

		// below this


		var json = [
			{"ring":"R6","comment":"750 DC cable termination in progress for STN 23 - STN 27","Date":"25 Jul 2016"},
			{"ring":"R1","comment":"PSCADA SAT testing are pending due to BTN unavability","Date":"29 Jun 2016"},
			{"ring":"R4","comment":"33KV AC cable termination in progress for STN 31-STN 33","Date":"23 Jul 2016"},
			{"ring":"R4","comment":"33KV AC cable termination in progress for STN 31-STN 33","Date":"23 Jul 2016"},
			{"ring":"R4","comment":"33KV AC cable termination in progress for STN 31-STN 33","Date":"23 Jul 2016"},
			{"ring":"R4","comment":"33KV AC cable termination in progress for STN 31-STN 33","Date":"23 Jul 2016"},
			{"ring":"R1","comment":"@ southern elevatedstations work in progress","Date":"29 Jun 2016"},
			{"ring":"R5","comment":"33KV cable laying and termination completed including Fiber Optic Cable","Date":"29 Jun 2016"}


		];
		for (i = 0; i < json.length; i++) {
			var b = json[i];
			use_ring= b.ring;
			use_comment=b.comment;
			use_Date=b.Date;



			$('#box1_modal-test table tbody' ).append('<tr><td>'+use_ring+'</td><td>'+use_comment+'</td><td>'+use_Date+'</td></tr>');



		}

		//end fahmy



		// below this


		var jsonSummary = that.data.data.SUMMARY;
			/*{"activities":"Overall Installation PS&DS(Station)","details":"","percentage":"79.5%"},
			{"activities":"Installation & Termination for TRIP Cable Northern","details":"33KV AC","percentage":"100%"},
			{"activities":"","details":"750V AC","percentage":"96.4% "},
			{"activities":"Installation & Termination for TRIP Cable Souhern","details":"33KV AC","percentage":"95.02%"},
			{"activities":"","details":"750V AC","percentage":"23.13%"},
			{"activities":"Overall T&C for PS&DS","details":"","percentage":"42.44%"}



		];*/
		for (i = 1; i < jsonSummary.length; i++) {
			var b = jsonSummary[i];
			use_activities= b.activities;
			use_percentage=b.total;
			use_a_percentage=b.ac;
			use_b_percentage=b.dc;
			if(use_percentage !=""){
				activities=b.activities;
				deatils="";
				percent=b.total+"%";
				$('#box1_modal-installation table tbody' ).append('<tr><td>'+activities+'</td><td>'+deatils+'</td><td>'+percent+'</td></tr>');
			}
			if(use_a_percentage !="" && use_a_percentage !=""){
				activities=b.activities;
				deatils_ac="33KV AC";
				deatils_dc="750V AC";
				percent_a=b.ac+"%";
				percent_b=b.dc+"%";
				$('#box1_modal-installation table tbody' ).append('<tr><td>'+activities+'</td><td>'+deatils_ac+'</td><td>'+percent_a+'</td></tr><tr><td></td><td>'+deatils_dc+'</td><td>'+percent_b+'</td></tr>');
			}

		}
		$('#plate_vector_map').load('../assets/mmc/svg/sys_psds_gis.svg',function(){


			/*$('#pl_station > span').click(function(){
			 alert('poi');
			 })
			 $('.v_station').click(function(){
			 alert('poi');
			 })
			 $('.v_depot').click(function(){
			 alert('poi');
			 })*/

			// vector_track
			var json = [
				{"vector_track":"legend_v_track_1","vector_status":"0","url":""},
				{"vector_track":"legend_v_track_2","vector_status":"1","url":""},
				{"vector_track":"legend_v_track_3","vector_status":"2","url":""},
				{"vector_track":"legend_v_track_4","vector_status":"3","url":""},
				{"vector_track":"psds_track_01","vector_status":"1","url":""},
				{"vector_track":"psds_track_02","vector_status":"1","url":""},
				{"vector_track":"psds_track_03","vector_status":"1","url":""},
				{"vector_track":"psds_track_04","vector_status":"1","url":""},
				{"vector_track":"psds_track_05","vector_status":"2","url":""},
				{"vector_track":"psds_track_06","vector_status":"2","url":""},
				{"vector_track":"psds_track_07","vector_status":"2","url":""},
				{"vector_track":"psds_track_08","vector_status":"3","url":""},
				{"vector_track":"psds_track_09","vector_status":"3","url":""},
				{"vector_track":"psds_track_10","vector_status":"3","url":""},
				{"vector_track":"psds_track_11","vector_status":"3","url":""},
				{"vector_track":"psds_track_12","vector_status":"3","url":""},
				{"vector_track":"psds_track_13","vector_status":"2","url":""},
				{"vector_track":"psds_track_14","vector_status":"1","url":""},
				{"vector_track":"psds_track_15","vector_status":"1","url":""},
				{"vector_track":"psds_track_16","vector_status":"1","url":""},
				{"vector_track":"psds_track_17","vector_status":"1","url":""},
				{"vector_track":"psds_track_18","vector_status":"1","url":""},
				{"vector_track":"psds_track_19","vector_status":"1","url":""},
				{"vector_track":"psds_track_20","vector_status":"1","url":""},
				{"vector_track":"psds_track_21","vector_status":"1","url":""},
				{"vector_track":"psds_track_22","vector_status":"1","url":""},
				{"vector_track":"psds_track_23","vector_status":"1","url":""},
				{"vector_track":"psds_track_24","vector_status":"0","url":""},
				{"vector_track":"psds_track_25","vector_status":"0","url":""},
				{"vector_track":"psds_track_26","vector_status":"0","url":""},
				{"vector_track":"psds_track_27","vector_status":"0","url":""},
				{"vector_track":"psds_track_28","vector_status":"0","url":""},
				{"vector_track":"psds_track_29","vector_status":"0","url":""},
				{"vector_track":"psds_track_30","vector_status":"0","url":""},
				{"vector_track":"psds_track_31","vector_status":"0","url":""},
				{"vector_track":"psds_track_32","vector_status":"0","url":""},
				{"vector_track":"psds_track_33","vector_status":"0","url":""},
				{"vector_track":"psds_track_34","vector_status":"0","url":""},
				{"vector_track":"psds_track_35","vector_status":"0","url":""},
				{"vector_track":"psds_track_36","vector_status":"0","url":""},
				{"vector_track":"psds_track_37","vector_status":"0","url":""},
				{"vector_track":"psds_track_38","vector_status":"0","url":""},
				{"vector_track":"psds_track_38","vector_status":"2","url":""},
				{"vector_track":"psds_track_39","vector_status":"2","url":""}


			];
			for (i = 0; i < json.length; i++) {
				var b = json[i];
				vector_track_name = b.vector_track;
				vector_track_status = b.vector_status;
				vector_track_url = b.url;
				if (vector_track_status==0) {/*blank*/
					$('#'+vector_track_name).css({'stroke':'#9FA09F'});
				} else if (vector_track_status==1) {/*on schedule*/
					$('#'+vector_track_name).css({'stroke':'#00ff55'});
				} else if (vector_track_status==2) {/*behind late*/
					$('#'+vector_track_name).css({'stroke':'#ff0055'});
				} else if (vector_track_status==3) {/*critical*/
					blink('#'+vector_track_name, -1, 500);
					function blink(elem, times, speed) {
						if (times > 0 || times < 0) {
							if ($(elem).fadeTo( 500, 0.33 ))
								$(elem).fadeTo( 500, 1);
							else
								$(elem).fadeTo( 500, 0.33 );
						}
						clearTimeout(function () {
							blink(elem, times, speed);
						});

						if (times > 0 || times < 0) {
							setTimeout(function () {
								blink(elem, times, speed);
							}, speed);
							times -= .5;
						}
					}
					$('#'+vector_track_name).toggle('pulsate').css({'stroke-width':'20','fill':'#ff0055','stroke':'#ff0055'});
				};
			}

			var json = [
				{"vector_station":"legend_v_station_1","vector_status":"0"},
				{"vector_station":"legend_v_station_2","vector_status":"4"},
				{"vector_station":"legend_v_station_3","vector_status":"2"},
				{"vector_station":"legend_v_station_4","vector_status":"3"},

				{"vector_station":"v_station_1","vector_status":"1"},
				{"vector_station":"v_station_2","vector_status":"2"},
				{"vector_station":"v_station_3","vector_status":"3"},
				{"vector_station":"v_station_4","vector_status":"0"},
				{"vector_station":"v_station_5","vector_status":"1"},
				{"vector_station":"v_station_6","vector_status":"1"},
				{"vector_station":"v_station_7","vector_status":"1"},
				{"vector_station":"v_station_8","vector_status":"1"},
				{"vector_station":"v_station_9","vector_status":"1"},
				{"vector_station":"v_station_10","vector_status":"2"},
				{"vector_station":"v_station_11","vector_status":"3"},
				{"vector_station":"v_station_12","vector_status":"0"},
				{"vector_station":"v_station_13","vector_status":"1"},
				{"vector_station":"v_station_14","vector_status":"2"},
				{"vector_station":"v_station_15","vector_status":"3"},
				{"vector_station":"v_station_16","vector_status":"0"},
				{"vector_station":"v_station_17","vector_status":"1"},
				{"vector_station":"v_station_18","vector_status":"2"},
				{"vector_station":"v_station_19","vector_status":"3"},
				{"vector_station":"v_station_20","vector_status":"0"},
				{"vector_station":"v_station_21","vector_status":"1"},
				{"vector_station":"v_station_22","vector_status":"1"},
				{"vector_station":"v_station_23","vector_status":"1"},
				{"vector_station":"v_station_24","vector_status":"1"},
				{"vector_station":"v_station_25","vector_status":"1"},
				{"vector_station":"v_station_26","vector_status":"1"},
				{"vector_station":"v_station_27","vector_status":"1"},
				{"vector_station":"v_station_28","vector_status":"1"},
				{"vector_station":"v_station_29","vector_status":"1"},
				{"vector_station":"v_station_30","vector_status":"1"},
				{"vector_station":"v_station_31","vector_status":"2"},
				{"vector_station":"v_station_32","vector_status":"3"},
				{"vector_station":"v_station_33","vector_status":"0"},
				{"vector_station":"v_station_34","vector_status":"0"},
				{"vector_station":"v_station_35","vector_status":"1"},
				{"vector_station":"v_station_36","vector_status":"2"},
				{"vector_station":"v_station_37","vector_status":"3"},
				{"vector_station":"v_station_38","vector_status":"1"},

				{"vector_station":"v_station_99","vector_status":"0"},
				{"vector_station":"v_station_98","vector_status":"1"},
				{"vector_station":"v_station_97","vector_status":"2"},
				{"vector_station":"v_station_96","vector_status":"3"},
				{"vector_station":"v_station_95","vector_status":"4"}




			];
			for (i = 0; i < json.length; i++) {
				var b = json[i];
				vector_station_name = b.vector_station;
				vector_station_status = b.vector_status;
				if (vector_station_status==0) {/*blank*/
					$('#'+vector_station_name).css({'fill':'#ffffff','stroke':'#222222'});
				} else if (vector_station_status==1) {/*on schedule*/
					$('#'+vector_station_name).css({'fill':'#ffffff','stroke':'#f50'});
				} else if (vector_station_status==2) {/*behind late*/
					$('#'+vector_station_name).css({'fill':'#ffffff','stroke':'#f05'});
				} else if (vector_station_status==3) {/*behind late*/
					blink('#'+vector_station_name, -1, 500);
					function blink(elem, times, speed) {
						if (times > 0 || times < 0) {
							if ($(elem).fadeTo( 500, 0.33 ))
								$(elem).fadeTo( 500, 1);
							else
								$(elem).fadeTo( 500, 0.33 );
						}
						clearTimeout(function () {
							blink(elem, times, speed);
						});

						if (times > 0 || times < 0) {
							setTimeout(function () {
								blink(elem, times, speed);
							}, speed);
							times -= .5;
						}
					}
					$('#'+vector_station_name).toggle('pulsate').css({'fill':'#ffffff','stroke':'#ff0055'});

				} else if (vector_station_status==4) {/*critical*/
					$('#'+vector_station_name).css({'fill':'#ffffff','stroke':'#0f5'});

				};
			}

			var json = [
				{"vector_depot":"legend_v_depot_1","vector_status":"0"},
				{"vector_depot":"legend_v_depot_2","vector_status":"1"},
				{"vector_depot":"legend_v_depot_3","vector_status":"2"},
				{"vector_depot":"legend_v_depot_4","vector_status":"3"},
				{"vector_depot":"v_depot_1","vector_status":"1"}
			];
			for (i = 0; i < json.length; i++) {
				var b = json[i];
				vector_depot_name = b.vector_depot;
				vector_depot_status = b.vector_status;
				if (vector_depot_status==0) {/*blank*/
					$('#'+vector_depot_name).css({'fill':'#ffffff','stroke':'#222222'});
				} else if (vector_depot_status==1) {/*on schedule*/
					$('#'+vector_depot_name).css({'fill':'#ffffff','stroke':'#00ff55'});
				} else if (vector_depot_status==2) {/*behind late*/
					$('#'+vector_depot_name).css({'fill':'#ffffff','stroke':'#ff0055'});
				} else if (vector_depot_status==3) {/*critical*/
					blink('#'+vector_depot_name, -1, 500);
					function blink(elem, times, speed) {
						if (times > 0 || times < 0) {
							if ($(elem).fadeTo( 500, 0.33 ))
								$(elem).fadeTo( 500, 1);
							else
								$(elem).fadeTo( 500, 0.33 );
						}
						clearTimeout(function () {
							blink(elem, times, speed);
						});

						if (times > 0 || times < 0) {
							setTimeout(function () {
								blink(elem, times, speed);
							}, speed);
							times -= .5;
						}
					}
					$('#'+vector_depot_name).toggle('pulsate').css({'fill':'#ffffff','stroke':'#ff0055'});
				};
			}



		});



		// current date
		var fullDate = new Date()
		var month = new Array();
		month[0] = "JAN";
		month[1] = "FEB";
		month[2] = "MAR";
		month[3] = "APR";
		month[4] = "MAY";
		month[5] = "JUN";
		month[6] = "JUL";
		month[7] = "AUG";
		month[8] = "SEP";
		month[9] = "OCT";
		month[10] = "NOV";
		month[11] = "DEC";
		var n = month[fullDate.getMonth()];
		var currentDate = fullDate.getDate() + " " + n + " " + fullDate.getFullYear();
		$('#current_date').text(currentDate);



		//
		// portlet - main menu date
		//


		$('#header_menu button.goto_home').click(function(){
			window.location.href = "index.php";
		});
		$('#header_menu button.goto_scurve').click(function(){
			window.location.href = "scurve.php";
		});
		$('#header_menu button.goto_procurement').click(function(){
			window.location.href = "procurement.php";
		});
		$('#header_menu button.goto_generate_report').click(function(){
			window.location.href = "generate_report.php";
		});




		//
		// portlet - portlet_tunnel_progress
		//

		$('div.portlet_tunnel_progress ul li.show_Rings').click(function(){
			$('div.portlet_tunnel_progress ul li').removeClass('active');$(this).addClass('active');
			$('div.portlet_tunnel_progress table').addClass('hidden');
			$('div.portlet_tunnel_progress table.show_Rings').removeClass('hidden');
		});
		$('div.portlet_tunnel_progress ul li.show_Trackbed').click(function(){
			$('div.portlet_tunnel_progress ul li').removeClass('active');$(this).addClass('active');
			$('div.portlet_tunnel_progress table').addClass('hidden');
			$('div.portlet_tunnel_progress table.show_Trackbed').removeClass('hidden');
		});
		$('div.portlet_tunnel_progress ul li.show_Bracket').click(function(){
			$('div.portlet_tunnel_progress ul li').removeClass('active');$(this).addClass('active');
			$('div.portlet_tunnel_progress table').addClass('hidden');
			$('div.portlet_tunnel_progress table.show_Bracket').removeClass('hidden');
		});
		$('div.portlet_tunnel_progress ul li.show_ES1').click(function(){
			$('div.portlet_tunnel_progress ul li').removeClass('active');$(this).addClass('active');
			$('div.portlet_tunnel_progress table').addClass('hidden');
			$('div.portlet_tunnel_progress table.show_ES1').removeClass('hidden');
		});
		$('div.portlet_tunnel_progress ul li.show_ES3').click(function(){
			$('div.portlet_tunnel_progress ul li').removeClass('active');$(this).addClass('active');
			$('div.portlet_tunnel_progress table').addClass('hidden');
			$('div.portlet_tunnel_progress table.show_ES3').removeClass('hidden');
		});
		$('div.portlet_tunnel_progress ul li.show_IVS1').click(function(){
			$('div.portlet_tunnel_progress ul li').removeClass('active');$(this).addClass('active');
			$('div.portlet_tunnel_progress table').addClass('hidden');
			$('div.portlet_tunnel_progress table.show_IVS1').removeClass('hidden');
		});
		$('div.portlet_tunnel_progress ul li.show_IVS2').click(function(){
			$('div.portlet_tunnel_progress ul li').removeClass('active');$(this).addClass('active');
			$('div.portlet_tunnel_progress table').addClass('hidden');
			$('div.portlet_tunnel_progress table.show_IVS2').removeClass('hidden');
		});


		//
		// portlet - portlet_work_progress
		//


		/*menu*/
		$('div.portlet_work_progress ul li.show_Station_Box').click(function(){
			$('div.portlet_work_progress ul li').removeClass('active');$(this).addClass('active');
			$('div.portlet_work_progress div.show').addClass('hidden');
			$('div.portlet_work_progress div.show.show_Station_Box').removeClass('hidden');
		});

		$('div.portlet_work_progress ul li.show_Entrance').click(function(){
			$('div.portlet_work_progress ul li').removeClass('active');$(this).addClass('active');
			$('div.portlet_work_progress div.show').addClass('hidden');
			$('div.portlet_work_progress div.show.show_Entrance').removeClass('hidden');
		});

		$('div.portlet_work_progress ul li.show_Vent_Shaft').click(function(){
			$('div.portlet_work_progress ul li').removeClass('active');$(this).addClass('active');
			$('div.portlet_work_progress div.show').addClass('hidden');
			$('div.portlet_work_progress div.show.show_Vent_Shaft').removeClass('hidden');
		});

		$('.portlet_work_progress i.fa-plus-square',this).click(function(){
			console.log(this);
			$(this).parent().find('i.fa-plus-square').addClass('hidden');
			$(this).parent().find('i.fa-minus-square').removeClass('hidden');
			$(this).parent().parent().parent().parent().parent().find('table').removeClass('hidden');
		});
		$('.portlet_work_progress i.fa-minus-square',this).click(function(){
			console.log(this);
			$(this).parent().find('i.fa-minus-square').addClass('hidden');
			$(this).parent().find('i.fa-plus-square').removeClass('hidden');
			$(this).parent().parent().parent().parent().parent().find('table').addClass('hidden');
		});


		//
		// portlet - portlet_generate_report
		//
		$('.portlet_generate_report i.fa-plus-square',this).click(function(){
			$(this).parent().find('i.fa-plus-square').addClass('hidden');
			$(this).parent().find('i.fa-minus-square').removeClass('hidden');
			console.log($(this).parent().parent().parent().parent().parent().parent());
			$(this).parent().parent().parent().parent().parent().parent().find('tbody').removeClass('hidden');
		});
		$('.portlet_generate_report i.fa-minus-square',this).click(function(){
			console.log(this);
			$(this).parent().find('i.fa-minus-square').addClass('hidden');
			$(this).parent().find('i.fa-plus-square').removeClass('hidden');
			$(this).parent().parent().parent().parent().parent().parent().find('tbody').addClass('hidden');
		});



	}
})





//
// PSDS
// 
mpxd.modules.sys_psds.sys_psds_trip_cable = Backbone.View.extend({   
	initialize: function (options) {
		this.data = options.data;
		this.render();
	}, render: function () {
		var that = this;
		var html = mpxd.getTemplate(that.data.type);
		template = _.template(html, {data: that.data});
		that.$el.html(template);
		that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
		that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
	}
})
mpxd.modules.sys_psds.sys_psds_installation = Backbone.View.extend({   
	initialize: function (options) {
		this.data = options.data;
		this.render();
	}, render: function () {
		var that = this;
		var html = mpxd.getTemplate(that.data.type);
		template = _.template(html, {data: that.data});
		that.$el.html(template);
		that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
		that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
		$('#comment_date').datepicker({
			dateFormat: "dd M yy",
			beforeShowDay: enableAllTheseDays,
			nextText: "",
			prevText: "",
			altField: '#data_date_selected',
			altFormat: "dd-M-y",
			onSelect: function (dateText, inst) {
				p = reallink.substr(0, (reallink.indexOf('?') == -1) ? reallink.length : reallink.indexOf('?'));
				var selected = $('#data_date_selected').val();
				$("#date-display").text(selected);
				loadPage(p + '?date=' + selected)

			}
		});
		$('#comment_selector').on('click', function () {
			$('#comment_date').datepicker('show');
		});

		var $err="<small class='pull-left' style='color:rgb(194, 67, 71)'>*Required</small>";
		$('#ring_comment').keyup(function(){
			if($(this).val().trim().length>0){
				$(this).css("border-color", "rgba(21, 166, 233, 0.2)");$(this).next('small').remove();
			}else{
				$(this).css("border-color","rgb(194, 67, 71)");$(this).next('small').remove();$(this).after($err);
			}
		});

		$("#cmnt_ring").click(function(){
			var flag=0;
			if($("#comment_date_selected").val()!=""){
				$('#comment_date').css("border-color", "rgba(21, 166, 233, 0.2)");$('#comment_date').parent().next('small').remove();
				flag++;
			}else{
				$('#comment_date').css("border-color","rgb(194, 67, 71)");$('#comment_date').parent().next('small').remove();$('#comment_date').parent().after($err);
			}
			if($("#ring_comment").val()!=""){
				$('#ring_comment').css("border-color", "rgba(21, 166, 233, 0.2)");$('#ring_comment').next('small').remove();
				flag++;
			}else{
				$('#ring_comment').css("border-color","rgb(194, 67, 71)");$('#ring_comment').next('small').remove();$('#ring_comment').after($err);
			}
			if(flag>1){
				mpxd.getJSONData("commentRing/get?r="+$("#page_title").text().trim().substring(1,3)+"&comments=" + $('#ring_comment').val()+"&date="+$("#comment_date_selected").val(), function (d) {
					if(d==1){
						$("#modal_ring_comment").modal('hide');
						$('#ring_comment').val('');
						$("#save_status").text('').text("Comment saved successfully.");
						$("#status_box").modal('show');
						$("#comment_date").val('');
						$("#comment_date_selected").val('');
					}else{
						$("#save_status").text('').text("Unable to save the Comment. Try Later.");
					}
				});
			}
		});
		var portlet_psds_installation_data = [
			{
				"station":"<b>SUBD</b><br>Sungai Buloh Depot",
				"installation":"completed",
				"a_acdc":"33KV",
				"a_testing_pat":"completed",
				"a_testing_sat":"completed",
				"a_forecast":"30-Apr-2014",
				"a_actual":"20-Oct-2014",
				"b_acdc":"750V",
				"b_testing_pat":"completed",
				"b_testing_sat":"completed",
				"b_forecast":"30-May-2015",
				"b_actual":"24-Apr-2015",
				"c_acdc":"PSCADA",
				"c_testing_pat":"completed",
				"c_testing_sat":"completed",
				"c_forecast":"-",
				"c_actual":"Pending"
			},{
				"station":"<b>STN 01</b><br>Sungai Buloh",
				"installation":"completed",
				"a_acdc":"33KV",
				"a_testing_pat":"completed",
				"a_testing_sat":"completed",
				"a_forecast":"26-Nov-2015",
				"a_actual":"27-Jan-2016",
				"b_acdc":"750V",
				"b_testing_pat":"completed",
				"b_testing_sat":"completed",
				"b_forecast":"25-Jan-2016",
				"b_actual":"Pending",
				"c_acdc":"PSCADA",
				"c_testing_pat":"completed",
				"c_testing_sat":"completed",
				"c_forecast":"-",
				"c_actual":"Pending"
			},{
				"station":"<b>STN 02</b><br>Kampung Selamat",
				"installation":"completed",
				"a_acdc":"33KV",
				"a_testing_pat":"completed",
				"a_testing_sat":"completed",
				"a_forecast":"25-Nov-2015",
				"a_actual":"29-Dec-2015",
				"b_acdc":"750V",
				"b_testing_pat":"completed",
				"b_testing_sat":"completed",
				"b_forecast":"25-Jan-2016",
				"b_actual":"Pending",
				"c_acdc":"PSCADA",
				"c_testing_pat":"completed",
				"c_testing_sat":"completed",
				"c_forecast":"-",
				"c_actual":"Pending"
			},{
				"station":"<b>KWDE2</b><br>Kwasa Damansara Future",
				"installation":"completed",
				"a_acdc":"33KV",
				"a_testing_pat":"completed",
				"a_testing_sat":"in_progress",
				"a_forecast":"06-Oct-2015",
				"a_actual":"15-Oct-2015",
				"b_acdc":"750V",
				"b_testing_pat":"N/A",
				"b_testing_sat":"N/A",
				"b_forecast":"N/A",
				"b_actual":"N/A",
				"c_acdc":"PSCADA",
				"c_testing_pat":"-",
				"c_testing_sat":"-",
				"c_forecast":"-",
				"c_actual":"-"
			}
		]

		for (var i = 0; i < portlet_psds_installation_data.length; i++) {
			a = portlet_psds_installation_data[i]

			var td_data1a = a.station;
			var td_data1b = a.installation;
			var td_data2a = a.a_acdc;
			var td_data2b = a.a_testing_pat;
			var td_data2c = a.a_testing_sat;
			var td_data2d = a.a_forecast;
			var td_data2e = a.a_actual;
			var td_data3a = a.b_acdc;
			var td_data3b = a.b_testing_pat;
			var td_data3c = a.b_testing_sat;
			var td_data3d = a.b_forecast;
			var td_data3e = a.b_actual;
			var td_data4a = a.c_acdc;
			var td_data4b = a.c_testing_pat;
			var td_data4c = a.c_testing_sat;
			var td_data4d = a.c_forecast;
			var td_data4e = a.c_actual;


			if (td_data1b == "N/A") {
				var td_data1b_text = td_data1b;
			} else {
				var td_data1b_text = "";
			}

			if (td_data2b == "N/A") {
				var td_data2b_text = td_data2b;
			} else {
				var td_data2b_text = "";
			}
			if (td_data2c == "N/A") {
				var td_data2c_text = td_data2c;
			} else {
				var td_data2c_text = "";
			}

			if (td_data3b == "N/A") {
				var td_data3b_text = td_data3b;
			} else {
				var td_data3b_text = "";
			}
			if (td_data3c == "N/A") {
				var td_data3c_text = td_data3c;
			} else {
				var td_data3c_text = "";
			}

			if (td_data4b == "N/A") {
				var td_data4b_text = td_data4b;
			} else {
				var td_data4b_text = "";
			}
			if (td_data4c == "N/A") {
				var td_data4c_text = td_data4c;
			} else {
				var td_data4c_text = "";
			}

			var append_this = '<tr><td rowspan="3">'+td_data1a+'</td><td rowspan="3" class="align circle_'+td_data1b+'">'+td_data1b_text+'<i class="fa fa-circle"></i></td><td class="color-beige">'+td_data2a+'</td><td class="align circle_'+td_data2b+'">'+td_data2b_text+'<i class="fa fa-circle"></i></td><td class="align circle_'+td_data2c+'">'+td_data2c_text+'<i class="fa fa-circle"></i></td><td>'+td_data2d+'</td><td>'+td_data2e+'</td></tr><tr><td class="color-beige">'+td_data3a+'</td><td class="align circle_'+td_data3b+'">'+td_data3b_text+'<i class="fa fa-circle"></i></td><td class="align circle_'+td_data3c+'">'+td_data3c_text+'<i class="fa fa-circle"></i></td><td>'+td_data3d+'</td><td>'+td_data3e+'</td></tr><tr><td class="color-beige">'+td_data4a+'</td><td class="align circle_'+td_data4b+'">'+td_data4b_text+'<i class="fa fa-circle"></i></td><td class="align circle_'+td_data4c+'">'+td_data3c_text+'<i class="fa fa-circle"></i></td><td>'+td_data4d+'</td><td>'+td_data4e+'</td></tr>'

			$('.portlet_psds_installation table tbody').append(append_this);

		}


	}
})



//
// COMMS&ITS
// 

mpxd.modules.sys_commsits.sys_commsits_actual_progress = Backbone.View.extend({   
	initialize: function (options) {
		this.data = options.data;
		this.render();
	}, render: function () {
		var that = this;
		var html = mpxd.getTemplate(that.data.type);
		template = _.template(html, {data: that.data});
		that.$el.html(template);
		that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
		that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
	}
})



//
// AFC
// 

mpxd.modules.sys_afc.sys_afc_actual_progress = Backbone.View.extend({   
	initialize: function (options) {
		this.data = options.data;
		this.render();
	}, render: function () {
		var that = this;
		var html = mpxd.getTemplate(that.data.type);
		template = _.template(html, {data: that.data});
		that.$el.html(template);
		that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
		that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
	}
})


