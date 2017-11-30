

//
// TEMP
//

mpxd.constructors.temp_portlet = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.temp_module.temp_portlet_data({data: data, el: el});
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
		var currentProgress = parseFloat((typeof that.data.data.currentActual == "undefined")?0:that.data.data.currentActual);
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
	}
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


