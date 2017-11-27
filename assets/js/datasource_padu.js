

//	TEMP

mpxd.constructors.padu_progress = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.padu_project.padu_progress({data: data, el: el});
}
mpxd.constructors.padu_projectcost = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.padu_project.padu_projectcost({data: data, el: el});
}
mpxd.constructors.padu_scurve = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.padu_project.padu_scurve({data: data, el: el});
}
mpxd.constructors.padu_upcomingtask = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.padu_project.padu_upcomingtask({data: data, el: el});
}
mpxd.constructors.padu_latetask = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.padu_project.padu_latetask({data: data, el: el});
}
mpxd.constructors.padu_issuemitigation = function(data) {
	var el = "#portlet_" + data.id;
	return new mpxd.modules.padu_project.padu_issuemitigation({data: data, el: el});
}


// DECLARE
//----------------------
mpxd.modules.padu_project ={};	// TEMPORARY
//----------------------
// DECLARE



//	PSDS

mpxd.modules.padu_progress.padu_progress = Backbone.View.extend({   
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
mpxd.modules.padu_progress.padu_projectcost = Backbone.View.extend({   
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
mpxd.modules.padu_progress.padu_scurve = Backbone.View.extend({   
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
mpxd.modules.padu_progress.padu_upcomingtask = Backbone.View.extend({   
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
mpxd.modules.padu_progress.padu_latetask = Backbone.View.extend({   
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
mpxd.modules.padu_progress.padu_issuemitigation = Backbone.View.extend({   
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