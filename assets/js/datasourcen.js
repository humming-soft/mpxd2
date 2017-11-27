

//	TEMP

mpxd.constructors.temp_portlet = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.temp_module.temp_portlet_data({data: data, el: el});
}


//	PSDS

mpxd.constructors.gis_sbk_s_05 = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.psds.generateGIS({data: data, el: el});
}


//	ET

mpxd.constructors.page_system_info = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_et.page_system_info({data: data, el: el});
}
mpxd.constructors.et_progress = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_et.et_progress({data: data, el: el});
}
mpxd.constructors.et_overallOpenItemClosure = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_et.et_overallOpenItemClosure({data: data, el: el});
}
mpxd.constructors.et_testing = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_et.et_testing({data: data, el: el});
}
mpxd.constructors.et_manufacturing_progress = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_et.et_manufacturing_progress({data: data, el: el});
}
mpxd.constructors.et_project_timeline = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_et.et_project_timeline({data: data, el: el});
}


// COMMS
mpxd.constructors.comms_actual_progress = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_comms.comms_actual_progress({data: data, el: el});
}

// TW
mpxd.constructors.tw_kd_overall_progress = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_tw.tw_kd_overall_progress({data: data, el: el});
}
mpxd.constructors.tw_kd_summary = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.sys_tw.tw_kd_summary({data: data, el: el});
}



// DECLARE
//----------------------
mpxd.modules.temp_module ={};	// TEMPORARY
mpxd.modules.sys_et ={};		// Electric Train
mpxd.modules.sys_demv ={};		// Depot Equipment & Maintenance Vehicle / Works Train
mpxd.modules.sys_stc ={};		// Signalling & Train Control
mpxd.modules.sys_psd ={};		// Platform Screen Door
mpxd.modules.sys_psds_m ={};	// Power Supply & Distribution System
mpxd.modules.sys_psds ={};		// Power Supply & Distribution System - Rxx
mpxd.modules.sys_tw_m ={};		// Trackworks
mpxd.modules.sys_tw ={};		// Trackworks Kxx
mpxd.modules.sys_comms ={};		// Communications, GIRN & IDS
mpxd.modules.sys_afc ={};		// Automatic Fare Collection
//----------------------
// DECLARE



//	TEMP

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


//	ET

mpxd.modules.sys_et.page_system_info = Backbone.View.extend({   
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
mpxd.modules.sys_et.et_progress = Backbone.View.extend({   
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

mpxd.modules.sys_et.et_overallOpenItemClosure = Backbone.View.extend({   
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

mpxd.modules.sys_et.et_testing = Backbone.View.extend({   
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

mpxd.modules.sys_et.et_manufacturing_progress = Backbone.View.extend({   
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

mpxd.modules.sys_et.et_project_timeline = Backbone.View.extend({   
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


//	PSDS

mpxd.modules.sys_psds.generateGIS = Backbone.View.extend({   
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


// COMMS

mpxd.modules.sys_comms.comms_actual_progress = Backbone.View.extend({   
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


// TW

mpxd.modules.sys_tw.tw_kd_overall_progress = Backbone.View.extend({   
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

mpxd.modules.sys_tw.tw_kd_summary = Backbone.View.extend({   
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