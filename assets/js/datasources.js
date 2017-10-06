/*Created : Sebin Thomas
For     : Backbone Constructors, Views and the associated functions
Date    : 14/07/2016*/

//Redefined Console.log function
//Please comment the below line when console.log requires.
//console.log = function() {}

//Page Info for Stations
mpxd.constructors.page_station_info = function(data) {
    mpxd.modules.general.GenerateGeneralview(data);
}
//Page Info for MSPR
mpxd.constructors.page_mspr_info = function(data) {
    mpxd.modules.general.GenerateGeneralview(data);
}
//Page Info for SYSTEM
mpxd.constructors.page_system_info = function(data) {
    mpxd.modules.general.GenerateGeneralview(data);
}
//KPI
mpxd.constructors.kpi = function(data) {
    var el = "#portlet_" + data.id;
    return new mpxd.modules.viaducts.kpi({data: data, el: el});
}
mpxd.constructors.kpi_viaducts = function(data) {
    var el = "#portlet_" + data.id;
    return new mpxd.modules.viaducts.kpi_viaducts({data: data, el: el});
}
mpxd.constructors.viaduct_pier_view = function(data) {
    var el = "#portlet_" + data.id;
    return new mpxd.modules.piers.viaduct_pier_view({data: data, el: el});
}
mpxd.constructors.viaducts_compare = function(data) {
    var el = "#portlet_" + data.id;
    return new mpxd.modules.viaducts.compare({data: data, el: el});
}
//KD
mpxd.constructors.kd = function(data) {
    var el = "#portlet_" + data.id;
    return new mpxd.modules.viaducts.kd({data: data, el: el});
}

// Issue
mpxd.constructors.issue = function(data) {
    var el = "#portlet_" + data.id;
    return new mpxd.modules.general.GenerateGeneralview2({data: data, el: el});
}
//Mitigation
mpxd.constructors.mitigation = function(data) {
    var el = "#portlet_" + data.id;
    return new mpxd.modules.general.GenerateGeneralview2({data: data, el: el});
}
//Tunnel Progress
mpxd.constructors.tunnel_progress = function(data) {
    var el = "#portlet_" + data.id;
    return new mpxd.modules.ug.tunnel_progress({data: data, el: el});
}
//Underground Summary
mpxd.constructors.ug_summary = function(data) {
    var el = "#portlet_" + data.id;
    return new mpxd.modules.ug.ug_summary({data: data, el: el});
}

mpxd.modules.piers = {}
mpxd.modules.viaducts = {}
mpxd.modules.stations = {}
mpxd.modules.mspr = {}
mpxd.modules.ug = {}
mpxd.modules.ug_stations = {}
mpxd.modules.north_south = {}
mpxd.modules.procurement = {}
mpxd.modules.scurves = {}
mpxd.modules.none = {}
mpxd.modules.report = {}

/*
 ********************************************
 ***************    REPORT   ****************
 * ******************************************
 */
mpxd.constructors.report = function(data) {
    var el = "#portlet_" + data.id;
    return new mpxd.modules.report.generate({data: data, el: el});
}

/*
 ********************************************
 *************  NORTH / SOUTH   *************
 * ******************************************
 */
mpxd.constructors.summary_list = function(data) {
    mpxd.modules.general.GenerateGeneralview(data);
}

/*
 ********************************************
 ******************  NONE   *****************
 * ******************************************
 */
mpxd.constructors.none = function(data) {
    var el = "#portlet_" + data.id;
    return new mpxd.modules.none.error404({data: data, el: el});
}

/*
 ********************************************
 **********  UNDERGROUND STATIONS   *********
 * ******************************************
 */
mpxd.constructors.ug_work_progress = function(data) {
    var el = "#portlet_" + data.id;
    return new mpxd.modules.ug_stations.work_progress({data: data, el: el});
}

/*
********************************************
***********  PROCUREMENT   *****************
* ******************************************
*/
// mpxd.modules.procurement.piechart_workpackage.initialize = function (callback) {
//     /* Initialize template */
//
//     if (typeof mpxd.modules.procurement.piechart_workpackage.initializedFlag == "undefined") {
//         mpxd.loadTemplateAsync(["piechart_workpackage"], callback);
//         mpxd.modules.procurement.piechart_workpackage.initializedFlag = true;
//     } else {
//         if (typeof callback == "function")
//             callback();
//     }
// }

mpxd.constructors.piechart_workpackage = function (data) {
    // mpxd.modules.procurement.piechart_workpackage.initialize();
    var el = "#portlet_" + data.id
    return new mpxd.modules.procurement.piechart_workpackage({data: data, el: el});
}

// mpxd.modules.procurement.barchart_workpackage.initialize = function (callback) {
//     /* Initialize template */
//     if (typeof mpxd.modules.procurement.barchart_workpackage.initializedFlag == "undefined") {
//         mpxd.loadTemplateAsync(["barchart_workpackage"], callback);
//         mpxd.modules.procurement.barchart_workpackage.initializedFlag = true;
//     } else {
//         if (typeof callback == "function")
//             callback();
//     }
// }

mpxd.constructors.barchart_workpackage = function (items) {
    // mpxd.modules.procurement.barchart_workpackage.initialize();
    var el = "#portlet_" + items.id
    return new mpxd.modules.procurement.barchart_workpackage({data: items, el: el});
}

mpxd.modules.piers.viaduct_pier_view = Backbone.View.extend({
    initialize: function (options) {
        this.data = options.data;
        this.render();
    },render: function () {
        var that = this;
        var html = mpxd.getTemplate(that.data.type);
        template = _.template(html, {data: that.data});
        that.$el.html(template);
        that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
        that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});

        //console.log(that.data.data);
        var t_pier = that.data.data;
        var t_pier_temp = [
            {"pier_v":"v201","pier_id":"SB01","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SB02","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SB03","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"2","pier_type":"p12","span_type":"sb","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id":["sbg1","sbg2","sbg3","sbg4","sbg5","sbg6","sbg7","sbg8","sbg9","sbg10","sbg11","sbg12","sbg13","sbg14","sbg15","sbg16","sbg17","sbg18","sbg19","sbg20","sbg21","sbg22"],"sbg_lr":["left","left","left","left","left","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right"],"sbg_va":[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1]},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SB04","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"Special Crossing No. 1","pier_marker_b":"2","pier_layout":"2","pier_type":"p14","span_type":"sb","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id":["sbg1","sbg2","sbg3","sbg4","sbg5","sbg6","sbg7","sbg8","sbg9","sbg10","sbg11","sbg12","sbg13","sbg14","sbg15","sbg16","sbg17","sbg18","sbg19","sbg20","sbg21","sbg22","sbg23","sbg24","sbg25","sbg26","sbg27","sbg28","sbg29","sbg30","sbg31","sbg32","sbg33","sbg34"],"sbg_lr":["left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right"],"sbg_va":[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SB05","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"2","pier_type":"p14","span_type":"sb","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id":["sbg1","sbg2","sbg3","sbg4","sbg5","sbg6","sbg7","sbg8","sbg9","sbg10","sbg11","sbg12","sbg13","sbg14","sbg15","sbg16","sbg17","sbg18","sbg19","sbg20","sbg21","sbg22","sbg23","sbg24","sbg25","sbg26","sbg27","sbg28","sbg29","sbg30","sbg31","sbg32","sbg33","sbg34"],"sbg_lr":["left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right"],"sbg_va":[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SB06","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"2","pier_type":"p12","span_type":"sb","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id":["sbg1","sbg2","sbg3","sbg4","sbg5","sbg6","sbg7","sbg8","sbg9","sbg10","sbg11","sbg12","sbg13","sbg14","sbg15","sbg16","sbg17","sbg18","sbg19","sbg20","sbg21","sbg22","sbg23","sbg24","sbg25","sbg26","sbg27","sbg28","sbg29","sbg30","sbg31","sbg32","sbg33","sbg34"],"sbg_lr":["left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right"],"sbg_va":[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SB07","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SB08","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SB09","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SB10","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SB11","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SB12","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SB13","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SB14","pier_north_id":"SBN14","pier_south_id":"SBS14","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p8211","span_type":"s2","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"100","pier_pierhead_3":"100","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SB15","pier_north_id":"SBN15","pier_south_id":"SBS15","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p8211","span_type":"s2","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"100","pier_pierhead_3":"100","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SB16","pier_north_id":"SBN16","pier_south_id":"SBS16","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p8211","span_type":"s2","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"100","pier_pierhead_3":"100","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD01","pier_north_id":"DDN01","pier_south_id":"DDS01","pier_marker_a":"Damansara Damai Station (Island Platform)","pier_marker_b":"1","pier_layout":"1","pier_type":"p7x","span_type":"ss","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"100","pier_pierhead_3":"100","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD02","pier_north_id":"DDN02","pier_south_id":"DDS02","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p7x","span_type":"ss","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"100","pier_pierhead_3":"100","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD03","pier_north_id":"DDN03","pier_south_id":"DDS03","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p7x","span_type":"ss","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"100","pier_pierhead_3":"100","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD04","pier_north_id":"DDN04","pier_south_id":"DDS04","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p7x","span_type":"ss","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"100","pier_pierhead_3":"100","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD05","pier_north_id":"DDN05","pier_south_id":"DDS05","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p7x","span_type":"s2","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"100","pier_pierhead_3":"100","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD06","pier_north_id":"DDN06","pier_south_id":"DDS06","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p8211","span_type":"s2","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"100","pier_pierhead_3":"100","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD07","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD08","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD09","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD10","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p33","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD11","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p24","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD12","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD13","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD14","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD15","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD16","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD17","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD18","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD19","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD20","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD21","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD22","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD23","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD24","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD25","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD26","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD27","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD28","pier_north_id":"DDN28","pier_south_id":"DDS28","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p6x","span_type":"s1","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"100","pier_pierhead_3":"100","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD29","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD30","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p22","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD31","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p22","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD32","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD33","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD34","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD35","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD36","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD37","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD38","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD39","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"Special Crossing No. 2","pier_marker_b":"2","pier_layout":"2","pier_type":"p12","span_type":"sb","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id":["sbg1","sbg2","sbg3","sbg4","sbg5","sbg6","sbg7","sbg8","sbg9","sbg10","sbg11","sbg12","sbg13","sbg14","sbg15","sbg16","sbg17","sbg18","sbg19","sbg20","sbg21","sbg22","sbg23","sbg24","sbg25","sbg26","sbg27","sbg28","sbg29","sbg30","sbg31","sbg32","sbg33","sbg34"],"sbg_lr":["left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right"],"sbg_va":[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD40","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"2","pier_type":"p12","span_type":"sb","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id":["sbg1","sbg2","sbg3","sbg4","sbg5","sbg6","sbg7","sbg8","sbg9","sbg10","sbg11","sbg12","sbg13","sbg14","sbg15","sbg16","sbg17","sbg18","sbg19","sbg20","sbg21","sbg22","sbg23","sbg24","sbg25","sbg26","sbg27","sbg28","sbg29","sbg30","sbg31","sbg32","sbg33","sbg34"],"sbg_lr":["left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right"],"sbg_va":[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD41","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"2","pier_type":"p12","span_type":"sb","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id":["sbg1","sbg2","sbg3","sbg4","sbg5","sbg6","sbg7","sbg8","sbg9","sbg10","sbg11","sbg12","sbg13","sbg14","sbg15","sbg16","sbg17","sbg18","sbg19","sbg20","sbg21","sbg22","sbg23","sbg24","sbg25","sbg26","sbg27","sbg28","sbg29","sbg30","sbg31","sbg32","sbg33","sbg34"],"sbg_lr":["left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right"],"sbg_va":[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD42","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD43","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p33","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD44","pier_north_id":"DDN44","pier_south_id":"DDS44","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p6x","span_type":"s1","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"100","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD45","pier_north_id":"DDN45","pier_south_id":"DDS45","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p6x","span_type":"s1","pier_pile_1":"100","pier_pile_2":"100","pier_pilecap_1":"100","pier_pilecap_2":"100","pier_pier_1":"100","pier_pier_2":"100","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"100","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD46","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p33","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD47","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p33","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"DD48","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p33","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW01","pier_north_id":"","pier_south_id":"","pier_marker_a":"Sri Damansara West Station (Island Platform)","pier_marker_b":"1","pier_layout":"1","pier_type":"p32","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW02","pier_north_id":"","pier_south_id":"","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p32","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW03","pier_north_id":"","pier_south_id":"","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p32","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW04","pier_north_id":"","pier_south_id":"","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p32","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW05","pier_north_id":"","pier_south_id":"","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW06","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW07","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p33","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW08","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p33","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW09","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW10","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW11","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p23","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW12","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p23","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW13","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW14","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW15","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW16","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW17","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW18","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW19","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW20","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW21","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW22","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW23","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW24","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW25","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW26","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW27","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW28","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p22","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW29","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p22","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW30","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW31","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW32","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW33","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW34","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW35","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"Special Crossing No. 3","pier_marker_b":"2","pier_layout":"2","pier_type":"p12","span_type":"sb","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id":["sbg1","sbg2","sbg3","sbg4","sbg5","sbg6","sbg7","sbg8","sbg9","sbg10","sbg11","sbg12","sbg13","sbg14","sbg15","sbg16","sbg17","sbg18","sbg19","sbg20","sbg21","sbg22","sbg23","sbg24","sbg25","sbg26","sbg27","sbg28","sbg29","sbg30","sbg31","sbg32","sbg33","sbg34"],"sbg_lr":["left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right"],"sbg_va":[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW36","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"2","pier_type":"p12","span_type":"sb","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id":["sbg1","sbg2","sbg3","sbg4","sbg5","sbg6","sbg7","sbg8","sbg9","sbg10","sbg11","sbg12","sbg13","sbg14","sbg15","sbg16","sbg17","sbg18","sbg19","sbg20","sbg21","sbg22","sbg23","sbg24","sbg25","sbg26","sbg27","sbg28","sbg29","sbg30","sbg31","sbg32","sbg33","sbg34"],"sbg_lr":["left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right"],"sbg_va":[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW37","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"2","pier_type":"p12","span_type":"sb","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id":["sbg1","sbg2","sbg3","sbg4","sbg5","sbg6","sbg7","sbg8","sbg9","sbg10","sbg11","sbg12","sbg13","sbg14","sbg15","sbg16","sbg17","sbg18","sbg19","sbg20","sbg21","sbg22","sbg23","sbg24","sbg25","sbg26","sbg27","sbg28","sbg29","sbg30","sbg31","sbg32","sbg33","sbg34"],"sbg_lr":["left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right","right"],"sbg_va":[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW38","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW39","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW40","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDW41","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE01","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"Sri Damansara East Station (Side Platform)","pier_marker_b":"1","pier_layout":"1","pier_type":"p12","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE02","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p12","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE03","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p12","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE04","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE05","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE06","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE07","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE08","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE09","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p22","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE10","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE11","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE12","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE13","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"12 nos. Single Pier Near Syabas Water Tanks (RCD Method)","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE14","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE15","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE16","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE17","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE18","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE19","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE20","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE21","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE22","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE23","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p11","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE24","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v201","pier_id":"SDE25","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"SDE26","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"SDE27","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"SDE28","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"SDE29","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"SDE30","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"SDE31","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"SDE32","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"SDE33","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"SDE34","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"SDE35","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"SDE36","pier_north_id":"SDEN36","pier_south_id":"SDES36","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p8212","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"SDE37","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"SDE38","pier_north_id":"SDEN38","pier_south_id":"SDES38","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p8212","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS01","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"Kepong Sentral Station","pier_marker_b":"1","pier_layout":"3","pier_type":"p52","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS2","pier_north_id":"KS2A","pier_south_id":"KS2E","pier_marker_a":"","pier_marker_b":"1","pier_layout":"3","pier_type":"p6x","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS02","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"3","pier_type":"p52","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS4D","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"1","pier_layout":"3","pier_type":"p42","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS03","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"3","pier_type":"p52","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS6D","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"1","pier_layout":"3","pier_type":"p42","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS04","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"3","pier_type":"p52","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS8D","pier_north_id":"","pier_south_id":"","pier_marker_a":"","pier_marker_b":"1","pier_layout":"3","pier_type":"p42","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS05","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p52","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS06","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS07","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS08","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS09","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS10","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS11","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS12","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS13","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS14","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS15","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS16","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"2","pier_type":"p12","span_type":"sb","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id":["sbg1","sbg2","sbg3","sbg4","sbg5","sbg6","sbg7","sbg8","sbg9","sbg10","sbg11"],"sbg_lr":["left","left","left","left","right","right","right","right","right","right","right"],"sbg_va":[0,0,0,0,0,0,0,0,0,0,0]},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS17","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"Long Span No. 4","pier_marker_b":"2","pier_layout":"2","pier_type":"p12","span_type":"sb","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id":["sbg1","sbg2","sbg3","sbg4","sbg5","sbg6","sbg7","sbg8","sbg9","sbg10","sbg11","sbg12","sbg13","sbg14","sbg15"],"sbg_lr":["left","left","left","left","left","left","left","left","right","right","right","right","right","right","right"],"sbg_va":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS18","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"2","pier_type":"p12","span_type":"sb","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id":["sbg1","sbg2","sbg3","sbg4","sbg5","sbg6","sbg7","sbg8","sbg9","sbg10","sbg11","sbg12","sbg13","sbg14","sbg15"],"sbg_lr":["left","left","left","left","left","left","left","left","right","right","right","right","right","right","right"],"sbg_va":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS19","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"2","pier_type":"p12","span_type":"sb","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id":["sbg1","sbg2","sbg3","sbg4","sbg5","sbg6","sbg7","sbg8","sbg9","sbg10","sbg11","sbg12"],"sbg_lr":["left","left","left","left","left","left","left","left","right","right","right","right"],"sbg_va":[0,0,0,0,0,0,0,0,0,0,0,0]},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS20","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS21","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS22","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS23","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS24","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS25","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS26","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"2","pier_type":"p12","span_type":"sb","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id":["sbg1","sbg2","sbg3","sbg4","sbg5","sbg6","sbg7","sbg8","sbg9","sbg10","sbg11","sbg12","sbg13","sbg14","sbg15","sbg16","sbg17","sbg18","sbg19","sbg20","sbg21"],"sbg_lr":["left","left","left","left","left","left","left","right","right","right","right","right","right","right","right","right","right","right","right","right","right"],"sbg_va":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS27","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"Long Span No. 5","pier_marker_b":"2","pier_layout":"2","pier_type":"p12","span_type":"sb","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id":["sbg1","sbg2","sbg3","sbg4","sbg5","sbg6","sbg7","sbg8","sbg9","sbg10","sbg11","sbg12","sbg13","sbg14","sbg15","sbg16","sbg17","sbg18","sbg19","sbg20","sbg21","sbg22","sbg23","sbg24","sbg25","sbg26","sbg27","sbg28","sbg29"],"sbg_lr":["left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","right","right","right","right","right","right","right","right","right","right","right","right","right","right"],"sbg_va":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS28","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"2","pier_type":"p12","span_type":"sb","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id":["sbg1","sbg2","sbg3","sbg4","sbg5","sbg6","sbg7","sbg8","sbg9","sbg10","sbg11","sbg12","sbg13","sbg14","sbg15","sbg16","sbg17","sbg18","sbg19","sbg20"],"sbg_lr":["left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","right","right","right","right","right"],"sbg_va":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS29","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"2","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS30","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS31","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS32","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p22","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS33","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p22","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS34","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p22","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS35","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS36","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p22","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS37","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p22","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS38","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS39","pier_north_id":"KSN39","pier_south_id":"KSS39","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p6x","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS40","pier_north_id":"KSN40","pier_south_id":"KSS40","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p6x","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS41","pier_north_id":"KSN41","pier_south_id":"KSS41","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p6x","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS42","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS43","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS44","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KS45","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP01","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"Metro Prima Station","pier_marker_b":"1","pier_layout":"3","pier_type":"p32","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP02","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"3","pier_type":"p32","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP03","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"3","pier_type":"p32","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP04","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"3","pier_type":"p32","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP05","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP06","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP07","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP08","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP09","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP10","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP11","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"Pocket Track","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP12","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP13","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP14","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP15","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP16","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP17","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP18","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP19","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP20","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP21","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP22","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP23","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP24","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP25","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP26","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP27","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP28","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"MP29","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s3","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB01","pier_north_id":"KBN01","pier_south_id":"KBS01","pier_marker_a":"Kepong Baru Station","pier_marker_b":"1","pier_layout":"3","pier_type":"p12","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB02","pier_north_id":"KBN02","pier_south_id":"KBS02","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"3","pier_type":"p12","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB03","pier_north_id":"KBN03","pier_south_id":"KBS03","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"3","pier_type":"p12","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB04","pier_north_id":"KBN04","pier_south_id":"KBS04","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"3","pier_type":"p12","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB05","pier_north_id":"KBN05","pier_south_id":"KBS05","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"1","pier_type":"p12","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB06","pier_north_id":"KBN06","pier_south_id":"KBS06","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB07","pier_north_id":"KBN07","pier_south_id":"KBS07","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB08","pier_north_id":"KBN08","pier_south_id":"KBS08","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB09","pier_north_id":"KBN09","pier_south_id":"KBS09","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB10","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB11","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB12","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB13","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB14","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB15","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB16","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB17","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB18","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB19","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB20","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB21","pier_north_id":"KBN21","pier_south_id":"KBS21","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB22","pier_north_id":"KBN22","pier_south_id":"KBS22","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB23","pier_north_id":"KBN23","pier_south_id":"KBS23","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"KB24","pier_north_id":"KBN24","pier_south_id":"KBS24","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p12","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"JS01","pier_north_id":"JS01","pier_south_id":"JN01","pier_marker_a":"Jinjang Station","pier_marker_b":"1","pier_layout":"3","pier_type":"p8211","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"JS1","pier_north_id":"JS1A","pier_south_id":"JS1E","pier_marker_a":"","pier_marker_b":"1","pier_layout":"3","pier_type":"p6x","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"JS02","pier_north_id":"JS02","pier_south_id":"JN02","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"3","pier_type":"p7x","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"JS3","pier_north_id":"JS3A","pier_south_id":"JS3E","pier_marker_a":"","pier_marker_b":"1","pier_layout":"3","pier_type":"p6x","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"JS03","pier_north_id":"JS03","pier_south_id":"JN03","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"3","pier_type":"p7x","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"JS5","pier_north_id":"JS5A","pier_south_id":"JS5E","pier_marker_a":"","pier_marker_b":"1","pier_layout":"3","pier_type":"p6x","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"JS04","pier_north_id":"JS04","pier_south_id":"JN04","pier_marker_a":"0","pier_marker_b":"1","pier_layout":"3","pier_type":"p7x","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"JS7","pier_north_id":"JS7A","pier_south_id":"JS7E","pier_marker_a":"","pier_marker_b":"1","pier_layout":"3","pier_type":"p6x","span_type":"ss","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"JS05","pier_north_id":"JS05","pier_south_id":"JN05","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p8212","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"JS06","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"JS07","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"JS08","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"JS09","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"JS10","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s2","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"JS11","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"1","pier_type":"p32","span_type":"s1","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"},
            {"pier_v":"v202","pier_id":"JS12","pier_north_id":"0","pier_south_id":"0","pier_marker_a":"0","pier_marker_b":"0","pier_layout":"0","pier_type":"0","span_type":"0","pier_pile_1":"100","pier_pile_2":"0","pier_pilecap_1":"100","pier_pilecap_2":"0","pier_pier_1":"100","pier_pier_2":"0","pier_pierhead_1":"100","pier_pierhead_2":"0","pier_pierhead_3":"0","span1":"0","span2":"0","span3":"0","sbg": {"sbg_id": [],"sbg_lr": [],"sbg_va": []},"parapet1":"0","parapet2":"0","parapet3":"0"}

        ];

        for (i = 0; i < t_pier.length; i++) {
            var b = t_pier[i];
            p_pv = b.pier_v;
            p_pid = b.pier_id;
            p_nid = b.pier_north_id;
            p_sid = b.pier_south_id;
            p_maa = b.pier_marker_a;
            p_mab = b.pier_marker_b;
            p_la = b.pier_layout;
            p_pt = b.pier_type;
            p_st = b.span_type;
            p_a1 = b.pier_pile_1;
            p_a2 = b.pier_pile_2;
            p_b1 = b.pier_pilecap_1;
            p_b2 = b.pier_pilecap_2;
            p_c1 = b.pier_pier_1;
            p_c2 = b.pier_pier_2;
            p_d1 = b.pier_pierhead_1;
            p_d2 = b.pier_pierhead_2;
            p_d3 = b.pier_pierhead_3;
            p_s1 = b.span1;
            p_s2 = b.span2;
            p_s3 = b.span3;
            p_sbg_id = b.sbg.sbg_id;
            p_sbg_lr = b.sbg.sbg_lr;
            p_sbg_va = b.sbg.sbg_va;
            p_p1 = b.parapet1;
            p_p2 = b.parapet2;
            p_p3 = b.parapet3;
            p_pp = b.p_progress;

            color_0 = "none"; color_1 = "#888899"; color_2 = "#ff5500"; color_3 = "#00ff00";

            p_hl0 = "highlight_null"; p_hl1 = "highlight_normal"; p_hl2 = "highlight_notice"; p_hl3 = "highlight_alert"; p_hl4 = "highlight_critical";

            // pier_pile_1
            // pier_pile_2
            if (p_a1 < 0) {color_p_a1 = color_0; p_a1_hl_trigger = 4;}
            else if (p_a1 == 0) {color_p_a1 = color_1; p_a1_hl_trigger = 3;}
            else if (p_a1 < 100) {color_p_a1 = color_2; p_a1_hl_trigger = 2;}
            else if (p_a1 == 100) {color_p_a1 = color_3; p_a1_hl_trigger = 1;}
            else if (p_a1 == '') {p_a1_hl_trigger = 0;}
            else {color_p_a1 = color_0; p_a1_hl_trigger = 4;}

            if (p_a2 < 0) {color_p_a2 = color_0; p_a2_hl_trigger = 4;}
            else if (p_a2 == 0) {color_p_a2 = color_1; p_a2_hl_trigger = 3;}
            else if (p_a2 < 100) {color_p_a2 = color_2; p_a2_hl_trigger = 2;}
            else if (p_a2 == 100) {color_p_a2 = color_3; p_a2_hl_trigger = 1;}
            else if (p_a2 == '') {p_a2_hl_trigger = 0;}
            else {color_p_a2 = color_0; p_a2_hl_trigger = 4;}

            // pier_pilecap_1
            // pier_pilecap_2
            if (p_b1 < 0) {color_p_b1 = color_0; p_b1_hl_trigger = 4;}
            else if (p_b1 == 0) {color_p_b1 = color_1; p_b1_hl_trigger = 3;}
            else if (p_b1 < 100) {color_p_b1 = color_2; p_b1_hl_trigger = 2;}
            else if (p_b1 == 100) {color_p_b1 = color_3; p_b1_hl_trigger = 1;}
            else if (p_b1 == '') {p_b1_hl_trigger = 0;}
            else {color_p_b1 = color_0; p_b1_hl_trigger = 4;}

            if (p_b2 < 0) {color_p_b2 = color_0; p_b2_hl_trigger = 4;}
            else if (p_b2 == 0) {color_p_b2 = color_1; p_b2_hl_trigger = 3;}
            else if (p_b2 < 100) {color_p_b2 = color_2; p_b2_hl_trigger = 2;}
            else if (p_b2 == 100) {color_p_b2 = color_3; p_b2_hl_trigger = 1;}
            else if (p_b2 == '') {p_b2_hl_trigger = 0;}
            else {color_p_b2 = color_0; p_b2_hl_trigger = 4;}

            // pier_pier_1
            // pier_pier_2
            if (p_c1 < 0) {color_p_c1 = color_0; p_c1_hl_trigger = 4;}
            else if (p_c1 == 0) {color_p_c1 = color_1; p_c1_hl_trigger = 3;}
            else if (p_c1 < 100) {color_p_c1 = color_2; p_c1_hl_trigger = 2;}
            else if (p_c1 == 100) {color_p_c1 = color_3; p_c1_hl_trigger = 1;}
            else if (p_c1 == '') {p_c1_hl_trigger = 0;}
            else {color_p_c1 = color_0; p_c1_hl_trigger = 4;}

            if (p_c2 < 0) {color_p_c2 = color_0; p_c2_hl_trigger = 4;}
            else if (p_c2 == 0) {color_p_c2 = color_1; p_c2_hl_trigger = 3;}
            else if (p_c2 < 100) {color_p_c2 = color_2; p_c2_hl_trigger = 2;}
            else if (p_c2 == 100) {color_p_c2 = color_3; p_c2_hl_trigger = 1;}
            else if (p_c2 == '') {p_c2_hl_trigger = 0;}
            else {color_p_c2 = color_0; p_c2_hl_trigger = 4;}

            // pier_pierhead_1
            // pier_pierhead_2
            // pier_pierhead_3 (shared)
            if (p_d1 < 0) {color_p_d1 = color_0; p_d1_hl_trigger = 4;}
            else if (p_d1 == 0) {color_p_d1 = color_1; p_d1_hl_trigger = 3;}
            else if (p_d1 < 100) {color_p_d1 = color_2; p_d1_hl_trigger = 2;}
            else if (p_d1 == 100) {color_p_d1 = color_3; p_d1_hl_trigger = 1;}
            else if (p_d1 == '') {p_d1_hl_trigger = 0;}
            else {color_p_d1 = color_0; p_d1_hl_trigger = 4;}

            if (p_d2 < 0) {color_p_d2 = color_0; p_d2_hl_trigger = 4;}
            else if (p_d2 == 0) {color_p_d2 = color_1; p_d2_hl_trigger = 3;}
            else if (p_d2 < 100) {color_p_d2 = color_2; p_d2_hl_trigger = 2;}
            else if (p_d2 == 100) {color_p_d2 = color_3; p_d2_hl_trigger = 1;}
            else if (p_d2 == '') {p_d2_hl_trigger = 0;}
            else {color_p_d2 = color_0; p_d2_hl_trigger = 4;}

            if (p_d3 < 0) {color_p_d3 = color_0; p_d3_hl_trigger = 4;}
            else if (p_d3 == 0) {color_p_d3 = color_1; p_d3_hl_trigger = 3;}
            else if (p_d3 < 100) {color_p_d3 = color_2; p_d3_hl_trigger = 2;}
            else if (p_d3 == 100) {color_p_d3 = color_3; p_d3_hl_trigger = 1;}
            else if (p_d3 == '') {p_d3_hl_trigger = 0;}
            else {color_p_d3 = color_0; p_d3_hl_trigger = 4;}

            // span1
            // span2
            // span3
            // spanx
            if (p_s1 < 0) {color_p_s1 = color_0; p_s1_hl_trigger = 4;}
            else if (p_s1 == 0) {color_p_s1 = color_1; p_s1_hl_trigger = 3;}
            else if (p_s1 < 100) {color_p_s1 = color_2; p_s1_hl_trigger = 2;}
            else if (p_s1 == 100) {color_p_s1 = color_3; p_s1_hl_trigger = 1;}
            else if (p_s1 == '') {p_s1_hl_trigger = 0;}
            else {color_p_s1 = color_0; p_s1_hl_trigger = 4;}

            if (p_s2 < 0) {color_p_s2 = color_0; p_s2_hl_trigger = 4;}
            else if (p_s2 == 0) {color_p_s2 = color_1; p_s2_hl_trigger = 3;}
            else if (p_s2 < 100) {color_p_s2 = color_2; p_s2_hl_trigger = 2;}
            else if (p_s2 == 100) {color_p_s2 = color_3; p_s2_hl_trigger = 1;}
            else if (p_s2 == '') {p_s2_hl_trigger = 0;}
            else {color_p_s2 = color_0; p_s2_hl_trigger = 4;}

            if (p_s3 < 0) {color_p_s3 = color_0; p_s3_hl_trigger = 4;}
            else if (p_s3 == 0) {color_p_s3 = color_1; p_s3_hl_trigger = 3;}
            else if (p_s3 < 100) {color_p_s3 = color_2; p_s3_hl_trigger = 2;}
            else if (p_s3 == 100) {color_p_s3 = color_3; p_s3_hl_trigger = 1;}
            else if (p_s3 == '') {p_s3_hl_trigger = 0;}
            else {color_p_s3 = color_0; p_s3_hl_trigger = 4;}

            // parapet1
            // parapet2
            // parapet3
            if (p_p1 < 0) {color_p_p1 = color_0; p_p1_hl_trigger = 4;}
            else if (p_p1 == 0) {color_p_p1 = color_1; p_p1_hl_trigger = 3;}
            else if (p_p1 < 100) {color_p_p1 = color_2; p_p1_hl_trigger = 2;}
            else if (p_p1 == 100) {color_p_p1 = color_3; p_p1_hl_trigger = 1;}
            else if (p_p1 == '') {p_p1_hl_trigger = 0;}
            else {color_p_p1 = color_0; p_p1_hl_trigger = 4;}

            if (p_p2 < 0) {color_p_p2 = color_0; p_p2_hl_trigger = 4;}
            else if (p_p2 == 0) {color_p_p2 = color_1; p_p2_hl_trigger = 3;}
            else if (p_p2 < 100) {color_p_p2 = color_2; p_p2_hl_trigger = 2;}
            else if (p_p2 == 100) {color_p_p2 = color_3; p_p2_hl_trigger = 1;}
            else if (p_p2 == '') {p_p2_hl_trigger = 0;}
            else {color_p_p2 = color_0; p_p2_hl_trigger = 4;}

            if (p_p3 < 0) {color_p_p3 = color_0; p_p3_hl_trigger = 4;}
            else if (p_p3 == 0) {color_p_p3 = color_1; p_p3_hl_trigger = 3;}
            else if (p_p3 < 100) {color_p_p3 = color_2; p_p3_hl_trigger = 2;}
            else if (p_p3 == 100) {color_p_p3 = color_3; p_p3_hl_trigger = 1;}
            else if (p_p3 == '') {p_p3_hl_trigger = 0;}
            else {color_p_p3 = color_0; p_p3_hl_trigger = 4;}

            // pier highlights
            if (p_pp == 0) {
                p_highlight = p_hl1;
            } else if (p_pp == 1) {
                p_highlight = p_hl4;
            } else {
                p_highlight = p_hl1;
            }

            // pier_layout
            if (p_la == 1) {
                $('div#pier_plate_'+p_pv).append('<div id="pier_id_'+p_pid+'" class="pier_block pier_block_type_a"><div class="marker_a"><span class="content"></span></div><div class="span"><span class="content"></span></div><div class="pier"><span class="content"></span></div><div class="pier_id"></div><div class="marker_d"><span class="content"></span></div><span class="'+p_highlight+'"></span></div>');
                /* pier layout a"*/
            } else if (p_la == 2) {
                $('div#pier_plate_'+p_pv).append('<div id="pier_id_'+p_pid+'" class="pier_block pier_block_type_b"><div class="marker_a"><span class="content"></span></div><div class="span"><span class="content"></span></div><div class="pier"><span class="content"></span></div><div class="pier_id"></div><div class="marker_d"><span class="content"></span></div><span class="'+p_highlight+'"></span></div>');
                /* pier layout b"*/
            } else if (p_la == 3) {
                $('div#pier_plate_'+p_pv).append('<div id="pier_id_'+p_pid+'" class="pier_block pier_block_type_C"><div class="marker_a"><span class="content"></span></div><div class="span"><span class="content"></span></div><div class="pier"><span class="content"></span></div><div class="pier_id"></div><div class="marker_d"><span class="content"></span></div><span class="'+p_highlight+'"></span></div>');
                /* pier layout c"*/
            } else {
                /* something else"*/
            }

            // pier_marker_a
            // pier_marker_b
            if (p_mab == 0) {
                /* no marker_a, marker_b"*/
            } else if (p_mab == 1) {
                if (p_maa != 0) {
                    $('div#pier_id_'+p_pid+' div.marker_a span.content').removeClass().addClass('content station_title').append(p_maa);
                }
                $('div#pier_id_'+p_pid+' div.marker_b span.content').removeClass().addClass('content station');
                /* got station"*/
            } else if (p_mab == 2) {
                if (p_maa != 0) {
                    $('div#pier_id_'+p_pid+' div.marker_a span.content').removeClass().addClass('content special_span_title').append(p_maa);
                }
                $('div#pier_id_'+p_pid+' div.marker_b span.content').removeClass().addClass('content special_span');
                /* got special span"*/
            } else {
                /* something else"*/
            }

            // pier_id
            // pier_north_id
            // pier_south_id
            if (p_nid == "" || p_sid == "" || p_nid == 0 || p_sid == 0) {
                /* use single label, ignore p_nid & p_sid"*/
                $('div#pier_id_'+p_pid+' div.pier_id').append('<span class="content single"><span class="name1"><span class="id_plate">'+p_pid+'</span></span></span>');
            } else {
                $('div#pier_id_'+p_pid+' div.pier_id').append('<span class="content twin"><span class="name2"><span class="id_plate">'+p_sid+'</span></span><span class="name1"><span class="id_plate">'+p_nid+'</span></span></span>');
                /* use twin label, ignore pier_id"*/
            }

            // $('div#pier_id_'+p_pid+' .pier span.content').load('../assets/svg/d1/pier_a1b1c1d1.svg');

            switch(p_pt){
                case "p11":
                    // console.log('pier_a2b1c1d1.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="narrowbody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 6.2658042,111.21581 0,-5.75703 3.5181846,0 3.5181952,0 0,5.75703 0,5.75704 -3.5181952,0 -3.5181846,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 0,101.94012 0,-2.771904 9.8615878,0 9.8615982,0 0,2.771904 0,2.77191 -9.8615982,0 -9.8615878,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 4.9046054,88.189492 0,-10.128139 4.9574397,0 4.9574599,0 0,10.128139 0,10.128118 -4.9574599,0 -4.9574397,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="m 3.6733307,71.9819 -1.2859588,-5.223987 1.1549748,0 1.1549851,0 0,-1.385948 0,-1.385961 2.0256278,0 2.0256278,0 0,1.385961 0,1.385948 1.1194124,0 1.1194332,0 0,-1.385948 0,-1.385961 2.025617,0 2.025628,0 0,1.385961 0,1.385948 1.160327,0 1.160327,0 -0.563427,2.265505 c -0.309866,1.246022 -0.886979,3.59682 -1.282456,5.223989 l -0.719041,2.958476 -4.917554,0 -4.9175333,0 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p12":
                    // console.log('pier_a2b1c1d1.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="narrowbody" viewBox="0 0 150 86" width="150" height="86"><g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"><path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 9e-5,110.40624 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 15.28557,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /><path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 0,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /><path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 4.71948,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /><path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 3.53468,72.680093 -1.23742,-5.026806 1.11138,0 1.11139,0 0,-1.333635 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333635 1.07716,0 1.07718,0 0,-1.333635 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333635 1.11653,0 1.11653,0 -0.54216,2.179993 c -0.29817,1.19899 -0.8535,3.461057 -1.23405,5.026808 l -0.6919,2.846808 -4.73194,0 -4.73192,0 z" id="path11" /></g></svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p13":
                    // console.log('pier_a3b1c1d1.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="narrowbody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 0.0097,110.40206 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.69407,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.5915,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 0,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 4.71948,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 3.53468,72.680093 -1.23742,-5.026806 1.11138,0 1.11139,0 0,-1.333635 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333635 1.07716,0 1.07718,0 0,-1.333635 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333635 1.11653,0 1.11653,0 -0.54216,2.179993 c -0.29817,1.19899 -0.8535,3.461057 -1.23405,5.026808 l -0.6919,2.846808 -4.73194,0 -4.73192,0 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p14":
                    // console.log('pier_a4b1c1d1.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="narrowbody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 0.00896,110.39764 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.23198,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 4.92421,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 0,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 4.71948,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="m 3.53468,72.680093 -1.23742,-5.026806 1.11138,0 1.11139,0 0,-1.333635 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333635 1.07716,0 1.07718,0 0,-1.333635 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333635 1.11653,0 1.11653,0 -0.54216,2.179993 c -0.29817,1.19899 -0.8535,3.461057 -1.23405,5.026808 l -0.6919,2.846808 -4.73194,0 -4.73192,0 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p1x":
                    // console.log('pier_axb1c1d1.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="narrowbody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 5.24094,110.39764 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 0,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 4.71948,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="m 3.53468,72.680093 -1.23742,-5.026806 1.11138,0 1.11139,0 0,-1.333635 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333635 1.07716,0 1.07718,0 0,-1.333635 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333635 1.11653,0 1.11653,0 -0.54216,2.179993 c -0.29817,1.19899 -0.8535,3.461057 -1.23405,5.026808 l -0.6919,2.846808 -4.73194,0 -4.73192,0 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;

                case "p21":
                    // console.log('pier_a1b1c1d2.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="narrowbody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 9.52202,110.43311 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 3.49272,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 8.2122,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="M 4.52643,75.78599 C 2.52339,74.73676 0.851,73.84769 0.80999,73.81032 0.76889,73.77282 0.59699,72.56638 0.42782,71.12911 0.25864,69.69183 0.09316,68.31967 0.0601,68.07988 L 0,67.64388 l 0.51922,0 0.51922,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94916,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.02679 -4.74467,-9.1e-4 -4.74469,-9.1e-4 -3.64187,-1.90769 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p22":
                    // console.log('pier_a2b1c1d2.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="narrowbody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 3.40096,110.40624 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 15.28557,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 3.49272,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 8.2122,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="M 4.52643,75.78599 C 2.52339,74.73676 0.851,73.84769 0.80999,73.81032 0.76889,73.77282 0.59699,72.56638 0.42782,71.12911 0.25864,69.69183 0.09316,68.31967 0.0601,68.07988 L 0,67.64388 l 0.51922,0 0.51922,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94916,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.02679 -4.74467,-9.1e-4 -4.74469,-9.1e-4 -3.64187,-1.90769 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p23":
                    // console.log('pier_a3b1c1d2.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="narrowbody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 3.41235,110.40206 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.69407,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.5915,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 3.49272,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 8.2122,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="M 4.52643,75.78599 C 2.52339,74.73676 0.851,73.84769 0.80999,73.81032 0.76889,73.77282 0.59699,72.56638 0.42782,71.12911 0.25864,69.69183 0.09316,68.31967 0.0601,68.07988 L 0,67.64388 l 0.51922,0 0.51922,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94916,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.02679 -4.74467,-9.1e-4 -4.74469,-9.1e-4 -3.64187,-1.90769 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p24":
                    // console.log('pier_a4b1c1d2.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="narrowbody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 3.41161,110.39764 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.23198,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 4.92421,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 3.49272,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 8.2122,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="M 4.52643,75.78599 C 2.52339,74.73676 0.851,73.84769 0.80999,73.81032 0.76889,73.77282 0.59699,72.56638 0.42782,71.12911 0.25864,69.69183 0.09316,68.31967 0.0601,68.07988 L 0,67.64388 l 0.51922,0 0.51922,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94916,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.02679 -4.74467,-9.1e-4 -4.74469,-9.1e-4 -3.64187,-1.90769 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p2x":
                    // console.log('pier_axb1c1d2.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="narrowbody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 8.64359,110.39764 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 3.49272,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 8.2122,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="M 4.52643,75.78599 C 2.52339,74.73676 0.851,73.84769 0.80999,73.81032 0.76889,73.77282 0.59699,72.56638 0.42782,71.12911 0.25864,69.69183 0.09316,68.31967 0.0601,68.07988 L 0,67.64388 l 0.51922,0 0.51922,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94916,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.02679 -4.74467,-9.1e-4 -4.74469,-9.1e-4 -3.64187,-1.90769 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;

                case "p31":
                    // console.log('pier_a1b1c1d3.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 16.932556,110.43311 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 10.903256,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 15.622736,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="m 15.579306,77.694648 c -0.0286,-0.0286 -2.51858,-0.89366 -5.53315,-1.92225 l -5.48103,-1.87012 -1.52789,-0.0546 L 1.50933,73.793278 0.75466,71.649688 0,69.506128 l 0.56981,-1.0623 0.5698,-1.0623 1.738415,0 1.738391,0 0,-1.33364 0,-1.33363 1.94917,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33364 5.79621,0 5.79621,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07718,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.73841,0 1.73841,0 0.56981,1.0623 0.5698,1.0623 -0.75467,2.14356 -0.75467,2.14359 -1.52789,0.0544 -1.5279,0.0546 -5.48845,1.89466 -5.48844,1.89463 -4.77693,0.0276 c -2.62731,0.0154 -4.80037,0.005 -4.82903,-0.0245 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p32":
                    // console.log('pier_a2b1c1d3.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 11.937046,110.40624 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 15.28557,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 10.903256,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 15.622736,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="m 15.579306,77.694648 c -0.0286,-0.0286 -2.51858,-0.89366 -5.53315,-1.92225 l -5.48103,-1.87012 -1.52789,-0.0546 L 1.50933,73.793278 0.75466,71.649688 0,69.506128 l 0.56981,-1.0623 0.5698,-1.0623 1.738415,0 1.738391,0 0,-1.33364 0,-1.33363 1.94917,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33364 5.79621,0 5.79621,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07718,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.73841,0 1.73841,0 0.56981,1.0623 0.5698,1.0623 -0.75467,2.14356 -0.75467,2.14359 -1.52789,0.0544 -1.5279,0.0546 -5.48845,1.89466 -5.48844,1.89463 -4.77693,0.0276 c -2.62731,0.0154 -4.80037,0.005 -4.82903,-0.0245 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p33":
                    // console.log('pier_a3b1c1d3.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 10.859966,110.40206 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.69407,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.5915,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 10.903256,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 15.622736,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="m 15.579306,77.694648 c -0.0286,-0.0286 -2.51858,-0.89366 -5.53315,-1.92225 l -5.48103,-1.87012 -1.52789,-0.0546 L 1.50933,73.793278 0.75466,71.649688 0,69.506128 l 0.56981,-1.0623 0.5698,-1.0623 1.738415,0 1.738391,0 0,-1.33364 0,-1.33363 1.94917,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33364 5.79621,0 5.79621,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07718,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.73841,0 1.73841,0 0.56981,1.0623 0.5698,1.0623 -0.75467,2.14356 -0.75467,2.14359 -1.52789,0.0544 -1.5279,0.0546 -5.48845,1.89466 -5.48844,1.89463 -4.77693,0.0276 c -2.62731,0.0154 -4.80037,0.005 -4.82903,-0.0245 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p34":
                    // console.log('pier_a4b1c1d3.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 10.887286,110.39764 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.23198,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 4.92421,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 10.903256,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 15.622736,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="m 15.579306,77.694648 c -0.0286,-0.0286 -2.51858,-0.89366 -5.53315,-1.92225 l -5.48103,-1.87012 -1.52789,-0.0546 L 1.50933,73.793278 0.75466,71.649688 0,69.506128 l 0.56981,-1.0623 0.5698,-1.0623 1.738415,0 1.738391,0 0,-1.33364 0,-1.33363 1.94917,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33364 5.79621,0 5.79621,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07718,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.73841,0 1.73841,0 0.56981,1.0623 0.5698,1.0623 -0.75467,2.14356 -0.75467,2.14359 -1.52789,0.0544 -1.5279,0.0546 -5.48845,1.89466 -5.48844,1.89463 -4.77693,0.0276 c -2.62731,0.0154 -4.80037,0.005 -4.82903,-0.0245 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p3x":
                    // console.log('pier_axb1c1d3.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 16.122936,110.39764 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 10.903256,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 15.622736,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="m 15.579306,77.694648 c -0.0286,-0.0286 -2.51858,-0.89366 -5.53315,-1.92225 l -5.48103,-1.87012 -1.52789,-0.0546 L 1.50933,73.793278 0.75466,71.649688 0,69.506128 l 0.56981,-1.0623 0.5698,-1.0623 1.738415,0 1.738391,0 0,-1.33364 0,-1.33363 1.94917,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33364 5.79621,0 5.79621,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07718,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.73841,0 1.73841,0 0.56981,1.0623 0.5698,1.0623 -0.75467,2.14356 -0.75467,2.14359 -1.52789,0.0544 -1.5279,0.0546 -5.48845,1.89466 -5.48844,1.89463 -4.77693,0.0276 c -2.62731,0.0154 -4.80037,0.005 -4.82903,-0.0245 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;

                case "p41":
                    // console.log('pier_a1b1c1d4.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 12.84907,119.44872 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 6.81977,110.52314 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 11.53629,102.0865 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="m 0,92.824685 0,-4.97551 4.75742,0 4.75741,0 11.60533,-11.64749 11.60534,-11.6475 0,5.05641 0,5.05638 -11.56694,11.56662 -11.56693,11.56659 -4.79581,0 -4.79582,0 z m 12.05408,-16.8757 11.38688,-11.38725 4.30869,0 4.30868,0 -11.38689,11.38725 -11.38689,11.38724 -4.30869,0 -4.30869,0 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p42":
                    // console.log('pier_a2b1c1d4.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'" d="m 6.83433,119.42656 0,-5.53973 1.84657,0 1.84659,0 0,5.53973 0,5.53974 -1.84659,0 -1.84657,0 z m 15.28556,0 0,-5.53973 1.84658,0 1.84659,0 0,5.53973 0,5.53974 -1.84659,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'" d="m 6.81977,110.52314 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'" d="m 11.53629,102.0865 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'" d="m 0,92.824685 0,-4.97551 4.75742,0 4.75741,0 11.60533,-11.64749 11.60534,-11.6475 0,5.05641 0,5.05638 -11.56694,11.56662 -11.56693,11.56659 -4.79581,0 -4.79582,0 z m 12.05408,-16.8757 11.38688,-11.38725 4.30869,0 4.30868,0 -11.38689,11.38725 -11.38689,11.38724 -4.30869,0 -4.30869,0 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p43":
                    // console.log('pier_a3b1c1d4.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 6.82845,119.42976 0,-5.53973 1.84657,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84657,0 z m 7.69407,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.5915,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 6.81977,110.52314 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 11.53629,102.0865 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="m 0,92.824685 0,-4.97551 4.75742,0 4.75741,0 11.60533,-11.64749 11.60534,-11.6475 0,5.05641 0,5.05638 -11.56694,11.56662 -11.56693,11.56659 -4.79581,0 -4.79582,0 z m 12.05408,-16.8757 11.38688,-11.38725 4.30869,0 4.30868,0 -11.38689,11.38725 -11.38689,11.38724 -4.30869,0 -4.30869,0 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p44":
                    // console.log('pier_a4b1c1d4.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 6.81909,119.41713 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.23198,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 4.92421,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 6.81977,110.52314 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 11.53629,102.0865 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="m 0,92.824685 0,-4.97551 4.75742,0 4.75741,0 11.60533,-11.64749 11.60534,-11.6475 0,5.05641 0,5.05638 -11.56694,11.56662 -11.56693,11.56659 -4.79581,0 -4.79582,0 z m 12.05408,-16.8757 11.38688,-11.38725 4.30869,0 4.30868,0 -11.38689,11.38725 -11.38689,11.38724 -4.30869,0 -4.30869,0 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p4x":
                    // console.log('pier_axb1c1d4.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 12.05107,119.41713 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 6.81977,110.52314 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 11.53629,102.0865 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="m 0,92.824685 0,-4.97551 4.75742,0 4.75741,0 11.60533,-11.64749 11.60534,-11.6475 0,5.05641 0,5.05638 -11.56694,11.56662 -11.56693,11.56659 -4.79581,0 -4.79582,0 z m 12.05408,-16.8757 11.38688,-11.38725 4.30869,0 4.30868,0 -11.38689,11.38725 -11.38689,11.38724 -4.30869,0 -4.30869,0 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;

                case "p51":
                    // console.log('pier_a1b1c1d5.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 15.275972,132.83955 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 9.246672,123.91397 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 13.963192,115.47733 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="m 2.427962,106.22329 0,-4.97551 4.75741,0 4.75741,0 11.60533,-11.647481 11.60534,-11.647503 0,5.056413 0,5.05638 -11.56694,11.566616 -11.56694,11.566585 -4.79581,0 -4.7958,0 z M 1.237432,95.400289 0,90.373499 l 1.111392,0 1.1114,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.07718,0 1.07717,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.11652,0 1.11653,0 -0.54215,2.17998 c -0.29819,1.19899 -0.8535,3.46107 -1.23405,5.0268 l -0.69192,2.846821 -4.73192,0 -4.73193,0 z m 11.50351,4.00091 c 0.0398,-0.19746 0.52806,-2.27489 1.08496,-4.61645 0.55688,-2.34156 1.0365,-4.35894 1.06581,-4.48306 0.0494,-0.20916 0.0118,-0.22794 -0.51277,-0.25648 l -0.56605,-0.0307 6.02965,-6.02818 6.02965,-6.028153 4.28179,0.0268 4.2818,0.0268 -10.88363,10.874293 c -9.4241,9.416 -10.87392,10.826136 -10.81121,10.51523 z m 11.68132,-27.185773 -1.23743,-5.0268 1.1114,0 1.11139,0 0,-1.33365 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33365 1.07717,0 1.07717,0 0,-1.33365 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33365 1.11653,0 1.11653,0 -0.54214,2.17999 c -0.29819,1.19901 -0.85351,3.46104 -1.23406,5.0268 l -0.69191,2.84681 -4.73194,0 -4.73192,0 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p52":
                    // console.log('pier_a2b1c1d5.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 9.231402,132.80957 0,-5.53973 1.84657,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84657,0 z m 15.28556,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 9.246672,123.91397 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 13.963192,115.47733 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="m 2.427962,106.22329 0,-4.97551 4.75741,0 4.75741,0 11.60533,-11.647481 11.60534,-11.647503 0,5.056413 0,5.05638 -11.56694,11.566616 -11.56694,11.566585 -4.79581,0 -4.7958,0 z M 1.237432,95.400289 0,90.373499 l 1.111392,0 1.1114,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.07718,0 1.07717,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.11652,0 1.11653,0 -0.54215,2.17998 c -0.29819,1.19899 -0.8535,3.46107 -1.23405,5.0268 l -0.69192,2.846821 -4.73192,0 -4.73193,0 z m 11.50351,4.00091 c 0.0398,-0.19746 0.52806,-2.27489 1.08496,-4.61645 0.55688,-2.34156 1.0365,-4.35894 1.06581,-4.48306 0.0494,-0.20916 0.0118,-0.22794 -0.51277,-0.25648 l -0.56605,-0.0307 6.02965,-6.02818 6.02965,-6.028153 4.28179,0.0268 4.2818,0.0268 -10.88363,10.874293 c -9.4241,9.416 -10.87392,10.826136 -10.81121,10.51523 z m 11.68132,-27.185773 -1.23743,-5.0268 1.1114,0 1.11139,0 0,-1.33365 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33365 1.07717,0 1.07717,0 0,-1.33365 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33365 1.11653,0 1.11653,0 -0.54214,2.17999 c -0.29819,1.19901 -0.85351,3.46104 -1.23406,5.0268 l -0.69191,2.84681 -4.73194,0 -4.73192,0 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p53":
                    // console.log('pier_a3b1c1d5.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 9.227682,132.78506 0,-5.53973 1.84657,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84657,0 z m 7.69407,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.59149,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 9.246672,123.91397 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 13.963192,115.47733 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="m 2.427962,106.22329 0,-4.97551 4.75741,0 4.75741,0 11.60533,-11.647481 11.60534,-11.647503 0,5.056413 0,5.05638 -11.56694,11.566616 -11.56694,11.566585 -4.79581,0 -4.7958,0 z M 1.237432,95.400289 0,90.373499 l 1.111392,0 1.1114,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.07718,0 1.07717,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.11652,0 1.11653,0 -0.54215,2.17998 c -0.29819,1.19899 -0.8535,3.46107 -1.23405,5.0268 l -0.69192,2.846821 -4.73192,0 -4.73193,0 z m 11.50351,4.00091 c 0.0398,-0.19746 0.52806,-2.27489 1.08496,-4.61645 0.55688,-2.34156 1.0365,-4.35894 1.06581,-4.48306 0.0494,-0.20916 0.0118,-0.22794 -0.51277,-0.25648 l -0.56605,-0.0307 6.02965,-6.02818 6.02965,-6.028153 4.28179,0.0268 4.2818,0.0268 -10.88363,10.874293 c -9.4241,9.416 -10.87392,10.826136 -10.81121,10.51523 z m 11.68132,-27.185773 -1.23743,-5.0268 1.1114,0 1.11139,0 0,-1.33365 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33365 1.07717,0 1.07717,0 0,-1.33365 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33365 1.11653,0 1.11653,0 -0.54214,2.17999 c -0.29819,1.19901 -0.85351,3.46104 -1.23406,5.0268 l -0.69191,2.84681 -4.73194,0 -4.73192,0 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p54":
                    // console.log('pier_a4b1c1d5.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 9.226322,132.78396 0,-5.53972 1.84658,0 1.84658,0 0,5.53972 0,5.53974 -1.84658,0 -1.84658,0 z m 5.23198,0 0,-5.53972 1.84658,0 1.84658,0 0,5.53972 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53972 1.84658,0 1.84658,0 0,5.53972 0,5.53974 -1.84658,0 -1.84658,0 z m 4.92421,0 0,-5.53972 1.84658,0 1.84658,0 0,5.53972 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 9.246672,123.91397 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 13.963192,115.47733 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="m 2.427962,106.22329 0,-4.97551 4.75741,0 4.75741,0 11.60533,-11.647481 11.60534,-11.647503 0,5.056413 0,5.05638 -11.56694,11.566616 -11.56694,11.566585 -4.79581,0 -4.7958,0 z M 1.237432,95.400289 0,90.373499 l 1.111392,0 1.1114,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.07718,0 1.07717,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.11652,0 1.11653,0 -0.54215,2.17998 c -0.29819,1.19899 -0.8535,3.46107 -1.23405,5.0268 l -0.69192,2.846821 -4.73192,0 -4.73193,0 z m 11.50351,4.00091 c 0.0398,-0.19746 0.52806,-2.27489 1.08496,-4.61645 0.55688,-2.34156 1.0365,-4.35894 1.06581,-4.48306 0.0494,-0.20916 0.0118,-0.22794 -0.51277,-0.25648 l -0.56605,-0.0307 6.02965,-6.02818 6.02965,-6.028153 4.28179,0.0268 4.2818,0.0268 -10.88363,10.874293 c -9.4241,9.416 -10.87392,10.826136 -10.81121,10.51523 z m 11.68132,-27.185773 -1.23743,-5.0268 1.1114,0 1.11139,0 0,-1.33365 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33365 1.07717,0 1.07717,0 0,-1.33365 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33365 1.11653,0 1.11653,0 -0.54214,2.17999 c -0.29819,1.19901 -0.85351,3.46104 -1.23406,5.0268 l -0.69191,2.84681 -4.73194,0 -4.73192,0 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p5x":
                    // console.log('pier_axb1c1d5.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 14.458302,132.78396 0,-5.53972 1.84658,0 1.84658,0 0,5.53972 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53972 1.84658,0 1.84658,0 0,5.53972 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 9.246672,123.91397 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 13.963192,115.47733 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_d1+'"  d="m 2.427962,106.22329 0,-4.97551 4.75741,0 4.75741,0 11.60533,-11.647481 11.60534,-11.647503 0,5.056413 0,5.05638 -11.56694,11.566616 -11.56694,11.566585 -4.79581,0 -4.7958,0 z M 1.237432,95.400289 0,90.373499 l 1.111392,0 1.1114,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.07718,0 1.07717,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.11652,0 1.11653,0 -0.54215,2.17998 c -0.29819,1.19899 -0.8535,3.46107 -1.23405,5.0268 l -0.69192,2.846821 -4.73192,0 -4.73193,0 z m 11.50351,4.00091 c 0.0398,-0.19746 0.52806,-2.27489 1.08496,-4.61645 0.55688,-2.34156 1.0365,-4.35894 1.06581,-4.48306 0.0494,-0.20916 0.0118,-0.22794 -0.51277,-0.25648 l -0.56605,-0.0307 6.02965,-6.02818 6.02965,-6.028153 4.28179,0.0268 4.2818,0.0268 -10.88363,10.874293 c -9.4241,9.416 -10.87392,10.826136 -10.81121,10.51523 z m 11.68132,-27.185773 -1.23743,-5.0268 1.1114,0 1.11139,0 0,-1.33365 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33365 1.07717,0 1.07717,0 0,-1.33365 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33365 1.11653,0 1.11653,0 -0.54214,2.17999 c -0.29819,1.19901 -0.85351,3.46104 -1.23406,5.0268 l -0.69191,2.84681 -4.73194,0 -4.73192,0 z" id="path11" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;

                case "p6x":
                    // console.log('pier_a2b2c2d6.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="cccccccccccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 0.00254,130.31788 0,-5.53975 1.846572,0 1.84658,0 0,5.53975 0,5.53975 -1.84658,0 -1.846572,0 z m 15.285572,0 0,-5.53975 1.84658,0 1.84658,0 0,5.53975 0,5.53975 -1.84658,0 -1.84658,0 z" id="path7" /> <path sodipodi:nodetypes="cccccccccccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:'+color_p_a2+'"  d="m 23.174842,107.33842 0,-5.53974 1.84659,0 1.84657,0 0,5.53974 0,5.53974 -1.84657,0 -1.84659,0 z m 15.28558,0 0,-5.53974 1.84657,0 1.84658,0 0,5.53974 0,5.53974 -1.84658,0 -1.84657,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 0,121.39516 0,-2.66728 9.489372,0 9.48936,0 0,2.66728 0,2.66727 -9.48936,0 -9.489372,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:'+color_p_b2+'"  d="m 23.165112,98.400894 0,-2.66728 9.48937,0 9.48936,0 0,2.66728 0,2.667296 -9.48936,0 -9.48937,0 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 4.705012,108.15196 0,-9.745846 4.77034,0 4.77033,0 0,9.745846 0,9.74584 -4.77033,0 -4.77034,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:'+color_p_c2+'"  d="m 27.909222,89.976064 0,-4.950268 4.77032,-4.76951 4.77033,-4.7695 0,9.71977 0,9.719788 -4.77033,0 -4.77032,0 z" id="path17" /> <path sodipodi:nodetypes="cccccccccccccccccccccccccccccccccsscccccscccccccsccccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="c_pierhead" style="fill:'+color_p_d3+'"  d="m 4.713562,92.820694 0,-4.9755 4.75741,0 4.75741,0 11.60533,-11.647507 11.60534,-11.64748 0,5.0564 0,5.05639 -11.56694,11.56661 -11.56694,11.566587 -4.79581,0 -4.7958,0 z m 12.05407,-16.875687 11.38688,-11.38724 4.30869,0 4.30868,0 -11.38688,11.38724 -11.3869,11.387257 -4.30869,0 -4.30868,0 z" id="path19" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;

                case "p7x":
                    // console.log('pier_a2b2c2d7.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="cccccccccccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 0.00254,143.56788 0,-5.53975 1.846572,0 1.84658,0 0,5.53975 0,5.53975 -1.84658,0 -1.846572,0 z m 15.285572,0 0,-5.53975 1.84658,0 1.84658,0 0,5.53975 0,5.53975 -1.84658,0 -1.84658,0 z" id="path7" /> <path sodipodi:nodetypes="cccccccccccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:'+color_p_a2+'"  d="m 23.174842,120.58842 0,-5.53974 1.84659,0 1.84657,0 0,5.53974 0,5.53974 -1.84657,0 -1.84659,0 z m 15.28558,0 0,-5.53974 1.84657,0 1.84658,0 0,5.53974 0,5.53974 -1.84658,0 -1.84657,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_b1+'"  d="m 0,134.64516 0,-2.66728 9.489372,0 9.48936,0 0,2.66728 0,2.66727 -9.48936,0 -9.489372,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:'+color_p_b2+'"  d="m 23.165112,111.65089 0,-2.66728 9.48937,0 9.48936,0 0,2.66728 0,2.6673 -9.48936,0 -9.48937,0 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_c1+'"  d="m 4.705012,121.40196 0,-9.74585 4.77034,0 4.77033,0 0,9.74585 0,9.74584 -4.77033,0 -4.77034,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:'+color_p_c2+'"  d="m 27.909222,103.22606 0,-4.950264 4.77032,-4.76951 4.77033,-4.7695 0,9.71977 0,9.719784 -4.77033,0 -4.77032,0 z" id="path17" /> <path sodipodi:nodetypes="cccccccccccccccccccccccccccccccccsscccccscccccccsccccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="c_pierhead" style="fill:'+color_p_d3+'"  d="m 4.708962,106.07189 0,-4.97551 4.75741,0 4.75741,0 11.60533,-11.647489 11.60534,-11.6475 0,5.05641 0,5.05638 -11.56694,11.56662 -11.56694,11.566589 -4.79581,0 -4.7958,0 z m -1.19053,-10.823009 -1.23743,-5.02679 1.11139,0 1.1114,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.07718,0 1.07717,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.11652,0 1.11653,0 -0.54215,2.17998 c -0.29819,1.19899 -0.8535,3.46107 -1.23405,5.0268 l -0.69192,2.846819 -4.73192,0 -4.73193,0 z m 11.50351,4.00091 c 0.0398,-0.19746 0.52806,-2.27489 1.08496,-4.61645 0.55688,-2.34156 1.0365,-4.35894 1.06581,-4.48306 0.0494,-0.20916 0.0118,-0.22794 -0.51277,-0.25648 l -0.56605,-0.0307 6.02965,-6.02818 6.02965,-6.02815 4.28179,0.0268 4.2818,0.0268 -10.88363,10.87429 c -9.4241,9.416 -10.87392,10.82614 -10.81121,10.51523 z m 11.68132,-27.18577 -1.23743,-5.0268 1.1114,0 1.11139,0 0,-1.33365 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33365 1.07717,0 1.07717,0 0,-1.33365 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33365 1.11653,0 1.11653,0 -0.54214,2.17999 c -0.29819,1.19901 -0.85351,3.46104 -1.23406,5.0268 l -0.69191,2.84681 -4.73194,0 -4.73192,0 z" id="path19" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;

                case "p8111":
                    // console.log('pier_a11b2c2d811.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 6.029302,132.99141 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_a2+'"  d="m 0,124.06583 0,-2.66727 9.489362,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.489362,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_b1+'"  d="m 4.719482,110.83423 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_b2+'"  d="m 3.534682,95.238391 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:'+color_p_c1+'"  d="m 28.505802,109.81305 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:'+color_p_c2+'"  d="m 22.476502,100.88747 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path17" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:'+color_p_d1+'"  d="m 27.195982,87.65587 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path19" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="b_pierhead" style="fill:'+color_p_d2+'"  d="m 26.011182,72.060031 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path21" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p8112":
                    // console.log('pier_a11b2c2d812.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 6.029302,132.99141 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_a2+'"  d="m 0,124.06583 0,-2.66727 9.489362,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.489362,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_b1+'"  d="m 4.719482,110.83423 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_b2+'"  d="m 3.534682,95.238391 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:'+color_p_c1+'"  d="m 30.450332,109.81305 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:'+color_p_c2+'"  d="m 24.421032,100.88747 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path17" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:'+color_p_d1+'"  d="m 29.140512,87.65587 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path19" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="b_pierhead" style="fill:'+color_p_d2+'"  d="m 25.520122,75.164602 c -2.00304,-1.04923 -3.67543,-1.9383 -3.71644,-1.97567 -0.0411,-0.0375 -0.213,-1.24394 -0.38217,-2.68121 -0.16918,-1.43728 -0.33466,-2.80944 -0.36772,-3.04923 l -0.0601,-0.436 0.51922,0 0.51922,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94916,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.02679 -4.74467,-9.1e-4 -4.74469,-9.1e-4 -3.64187,-1.90769 z" id="path21" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p8121":
                    // console.log('pier_a11b2c2d821.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 9.456652,132.99053 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_a2+'"  d="m 3.427342,124.06495 0,-2.66728 9.48937,0 9.48938,0 0,2.66728 0,2.66729 -9.48938,0 -9.48937,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_b1+'"  d="m 8.146822,110.83334 0,-9.74585 4.77033,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77033,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_b2+'"  d="m 4.526432,98.342058 c -2.00304,-1.04923 -3.67543,-1.9383 -3.71644,-1.97567 -0.0411,-0.0375 -0.213002,-1.24394 -0.382172,-2.68121 -0.16918,-1.43728 -0.33466,-2.80944 -0.36772,-3.04923 L 0,90.199948 l 0.51922,0 0.519222,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.026802 -4.74467,-9.1e-4 -4.7447,-9.1e-4 -3.64187,-1.907702 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:'+color_p_c1+'"  d="m 28.459182,109.81223 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:'+color_p_c2+'"  d="m 22.429882,100.88665 0,-2.667277 9.48936,0 9.48937,0 0,2.667277 0,2.66729 -9.48937,0 -9.48936,0 z" id="path17" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:'+color_p_d1+'"  d="m 27.149362,87.655043 0,-9.745848 4.77032,0 4.77034,0 0,9.745848 0,9.74583 -4.77034,0 -4.77032,0 z" id="path19" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="b_pierhead" style="fill:'+color_p_d2+'"  d="m 25.964562,72.059206 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path21" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p8211":
                    // console.log('pier_a22b2c2d811.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 0,132.96191 0,-5.53973 1.846572,0 1.84659,0 0,5.53973 0,5.53975 -1.84659,0 -1.846572,0 z m 15.285562,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53975 -1.84658,0 -1.84658,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_a2+'"  d="m 0.02178,124.06583 0,-2.66727 9.489362,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.489362,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_b1+'"  d="m 4.741262,110.83423 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_b2+'"  d="m 3.556462,95.238391 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:'+color_p_c1+'"  d="m 22.482202,109.79938 0,-5.53973 1.84657,0 1.84659,0 0,5.53973 0,5.53974 -1.84659,0 -1.84657,0 z m 15.28556,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:'+color_p_c2+'"  d="m 22.498282,100.88747 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path17" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:'+color_p_d1+'"  d="m 27.217762,87.65587 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path19" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="b_pierhead" style="fill:'+color_p_d2+'"  d="m 26.032962,72.060031 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path21" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p8212":
                    // console.log('pier_a22b2c2d812.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 0.00787,132.96728 0,-5.53973 1.846572,0 1.84659,0 0,5.53973 0,5.53974 -1.84659,0 -1.846572,0 z m 15.285562,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_a2+'"  d="m 0,124.06583 0,-2.66727 9.489362,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.489362,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_b1+'"  d="m 4.719482,110.83423 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_b2+'"  d="m 3.534682,95.238391 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:'+color_p_c1+'"  d="m 24.412522,109.80475 0,-5.53973 1.84657,0 1.84659,0 0,5.53973 0,5.53974 -1.84659,0 -1.84657,0 z m 15.28556,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:'+color_p_c2+'"  d="m 24.421032,100.88747 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path17" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:'+color_p_d1+'"  d="m 29.140512,87.65587 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path19" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="b_pierhead" style="fill:'+color_p_d2+'"  d="m 25.520122,75.164602 c -2.00304,-1.04923 -3.67543,-1.9383 -3.71644,-1.97567 -0.0411,-0.0375 -0.213,-1.24394 -0.38217,-2.68121 -0.16918,-1.43728 -0.33466,-2.80944 -0.36772,-3.04923 l -0.0601,-0.436 0.51922,0 0.51922,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94916,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.02679 -4.74467,-9.1e-4 -4.74469,-9.1e-4 -3.64187,-1.90769 z" id="path21" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
                case "p8221":
                    // console.log('pier_a22b2c2d821.svg');
                    $('div#pier_id_'+p_pid+' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:'+color_p_a1+'"  d="m 3.433742,132.97789 0,-5.53973 1.84657,0 1.84659,0 0,5.53973 0,5.53974 -1.84659,0 -1.84657,0 z m 15.28556,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:'+color_p_a2+'"  d="m 3.427342,124.06495 0,-2.66728 9.48937,0 9.48938,0 0,2.66728 0,2.66729 -9.48938,0 -9.48937,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:'+color_p_b1+'"  d="m 8.146822,110.83334 0,-9.74585 4.77033,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77033,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:'+color_p_b2+'"  d="m 4.526432,98.342058 c -2.00304,-1.04923 -3.67543,-1.9383 -3.71644,-1.97567 -0.0411,-0.0375 -0.213002,-1.24394 -0.382172,-2.68121 -0.16918,-1.43728 -0.33466,-2.80944 -0.36772,-3.04923 L 0,90.199948 l 0.51922,0 0.519222,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.026802 -4.74467,-9.1e-4 -4.7447,-9.1e-4 -3.64187,-1.907702 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:'+color_p_c1+'"  d="m 22.468792,109.81536 0,-5.53973 1.84657,0 1.84659,0 0,5.53973 0,5.53974 -1.84659,0 -1.84657,0 z m 15.28556,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:'+color_p_c2+'"  d="m 22.429882,100.88665 0,-2.667277 9.48936,0 9.48937,0 0,2.667277 0,2.66729 -9.48937,0 -9.48936,0 z" id="path17" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:'+color_p_d1+'"  d="m 27.149362,87.655043 0,-9.745848 4.77032,0 4.77034,0 0,9.745848 0,9.74583 -4.77034,0 -4.77032,0 z" id="path19" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="b_pierhead" style="fill:'+color_p_d2+'"  d="m 25.964562,72.059206 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path21" /> </g> </svg>');
                    // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                    break;
            }


            // span_type
            switch(p_st){
                case "ss":
                    $('div#pier_id_'+p_pid+' .span span.content').append('<span class="span_station"></span>');
                    $('div#pier_id_'+p_pid+' div.marker_a span.content').attr('style', 'margin-left:0px;');
                    $('div#pier_id_'+p_pid+' div.marker_b span.content').attr('style', 'margin-left:0px;');
                    break;
                case "s1":
                    $('div#pier_id_'+p_pid+' .span span.content').append('<svg viewBox="0 0 150 39.500001" width="150" height="39.5"> <g inkscape:label="span 3" inkscape:groupmode="layer" id="g4158" transform="translate(0,-1012.8621)" style="display:inline"> <path inkscape:connector-curvature="0" class="a_span" style="fill:'+color_p_s1+'"  d="m 0.180591,1045.39 0,6.3559 115.677959,0 0,-6.3559 z" id="path7" /> <path inkscape:connector-curvature="0" class="a_parapet" style="fill:'+color_p_p1+'"  d="m 0,1041.3959 0,2.5857 116.03914,0 0,-2.5857 z" id="path9" /> </g> </svg>');
                    break;
                case "s2":
                    $('div#pier_id_'+p_pid+' .span span.content').append('<svg viewBox="0 0 150 39.500001" width="150" height="39.5"> <g inkscape:label="span 3" inkscape:groupmode="layer" id="g4158" transform="translate(0,-1012.8621)" style="display:inline"> <path inkscape:connector-curvature="0" class="a_span" style="fill:'+color_p_s1+'"  d="m 0.304926,1045.39 0,6.3559 115.677964,0 0,-6.3559 z" id="path7" /> <path inkscape:connector-curvature="0" class="a_parapet" style="fill:'+color_p_p1+'"  d="m 0.124335,1041.3959 0,2.5857 116.039145,0 0,-2.5857 z" id="path9" /> </g> <g transform="translate(0,-1012.8621)" id="g4152" inkscape:groupmode="layer" inkscape:label="span 2" style="display:inline"> <path inkscape:connector-curvature="0" class="b_span" style="fill:'+color_p_s2+'"  d="m 0.180591,1031.3782 0,6.3559 115.677979,0 0,-6.3559 z" id="path12" /> <path inkscape:connector-curvature="0" class="b_parapet" style="fill:'+color_p_p2+'"  d="m 0,1027.3841 0,2.5857 116.03916,0 0,-2.5857 z" id="path14" /> </g> </svg>');
                    break;
                case "s3":
                    $('div#pier_id_'+p_pid+' .span span.content').append('<svg viewBox="0 0 150 39.500001" width="150" height="39.5"> <g inkscape:label="span 3" inkscape:groupmode="layer" id="g4158" transform="translate(0,-1012.8621)" style="display:inline"> <path inkscape:connector-curvature="0" class="a_span" style="fill:'+color_p_s1+'"  d="m 0.50075,1045.39 0,6.3559 115.67797,0 0,-6.3559 z" id="path7" /> <path inkscape:connector-curvature="0" class="a_parapet" style="fill:'+color_p_p1+'"  d="m 0.320159,1041.3959 0,2.5857 116.039151,0 0,-2.5857 z" id="path9" /> </g> <g transform="translate(0,-1012.8621)" id="g4152" inkscape:groupmode="layer" inkscape:label="span 2" style="display:inline"> <path inkscape:connector-curvature="0" class="b_span" style="fill:'+color_p_s2+'"  d="m 0.376415,1031.3782 0,6.3559 115.677985,0 0,-6.3559 z" id="path12" /> <path inkscape:connector-curvature="0" class="b_parapet" style="fill:'+color_p_p2+'"  d="m 0.195824,1027.3841 0,2.5857 116.039166,0 0,-2.5857 z" id="path14" /> </g> <g inkscape:label="span 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-1012.8621)" style="display:inline"> <path inkscape:connector-curvature="0" class="c_span" style="fill:'+color_p_s3+'"  d="m 0.180591,1017.3622 0,6.3559 115.677979,0 0,-6.3559 z" id="path17" /> <path inkscape:connector-curvature="0" class="c_parapet" style="fill:'+color_p_p3+'"  d="m 0,1013.3681 0,2.5857 116.03916,0 0,-2.5857 z" id="path19" /> </g> </svg>');
                    break;
                case "sb":
                    for (sbg_count = 0; sbg_count < p_sbg_id.length; sbg_count++) {
                        var marker_width = p_sbg_id.length * 8;
                        var marker_label = p_sbg_id.length * 8 - 47;
                        if (marker_width <= 150) {
                            total_sbg = p_sbg_id.length;
                            var default_sbg_width = 150 / total_sbg;
                        } else {
                            var default_sbg_width = 8;
                        }

                        var a = f_color_sbg(p_sbg_va[sbg_count]);
                        function f_color_sbg(a){
                            if (a == 0) {
                                color_sbg = color_1;
                                return color_sbg;
                            } else if (a == 1) {
                                color_sbg = color_3;
                                return color_sbg;
                            }
                        }
                        $('div#pier_id_'+p_pid+' .span span.content').append('<span id="'+p_pid+'_'+p_sbg_id[sbg_count]+'" class="sbg '+p_sbg_lr[sbg_count]+'" style="width:'+default_sbg_width+'px;background:'+color_sbg+'"></span>');
                    }
                    $('div#pier_id_'+p_pid+' div.marker_a span.content').attr('style', 'margin-left:0;width:'+marker_width+'px;');
                    $('div#pier_id_'+p_pid+' div.marker_b span.content').attr('style', 'width:'+marker_width+'px;');
                    // $('div#pier_id_'+p_pid+' div.pier_id span.content').attr('style', 'margin-left:'+marker_label+'px;');

                    sbg_left_separation = $('div#pier_id_'+p_pid+' span.sbg.left').length;
                    sbg_right_separation = sbg_left_separation+1;
                    $('div#pier_id_'+p_pid+' span.sbg.left:nth-child('+sbg_left_separation+')').addClass('sbg_left_separation').append(']');
                    $('div#pier_id_'+p_pid+' span.sbg.right:nth-child('+sbg_right_separation+')').addClass('sbg_right_separation').append('[');
                    break;
            }
        }

    }
});
mpxd.modules.viaducts.kpi = Backbone.View.extend({
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
});

mpxd.modules.viaducts.kd = Backbone.View.extend({
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
});

mpxd.modules.ug.tunnel_progress = Backbone.View.extend({
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

        that.$el.find('div.portlet_tunnel_progress ul li.show_Rings').click(function(){
            $('div.portlet_tunnel_progress ul li').removeClass('active');$(this).addClass('active');
            $('div.portlet_tunnel_progress table').addClass('hidden');
            $('div.portlet_tunnel_progress table.show_Rings').removeClass('hidden');
        });
        that.$el.find('div.portlet_tunnel_progress ul li.show_Trackbed').click(function(){
            $('div.portlet_tunnel_progress ul li').removeClass('active');$(this).addClass('active');
            $('div.portlet_tunnel_progress table').addClass('hidden');
            $('div.portlet_tunnel_progress table.show_Trackbed').removeClass('hidden');
        });
        that.$el.find('div.portlet_tunnel_progress ul li.show_Bracket').click(function(){
            $('div.portlet_tunnel_progress ul li').removeClass('active');$(this).addClass('active');
            $('div.portlet_tunnel_progress table').addClass('hidden');
            $('div.portlet_tunnel_progress table.show_Bracket').removeClass('hidden');
        });
        that.$el.find('div.portlet_tunnel_progress ul li.show_ES1').click(function(){
            $('div.portlet_tunnel_progress ul li').removeClass('active');$(this).addClass('active');
            $('div.portlet_tunnel_progress table').addClass('hidden');
            $('div.portlet_tunnel_progress table.show_ES1').removeClass('hidden');
        });
        that.$el.find('div.portlet_tunnel_progress ul li.show_ES3').click(function(){
            $('div.portlet_tunnel_progress ul li').removeClass('active');$(this).addClass('active');
            $('div.portlet_tunnel_progress table').addClass('hidden');
            $('div.portlet_tunnel_progress table.show_ES3').removeClass('hidden');
        });
        that.$el.find('div.portlet_tunnel_progress ul li.show_IVS1').click(function(){
            $('div.portlet_tunnel_progress ul li').removeClass('active');$(this).addClass('active');
            $('div.portlet_tunnel_progress table').addClass('hidden');
            $('div.portlet_tunnel_progress table.show_IVS1').removeClass('hidden');
        });
        that.$el.find('div.portlet_tunnel_progress ul li.show_IVS2').click(function(){
            $('div.portlet_tunnel_progress ul li').removeClass('active');$(this).addClass('active');
            $('div.portlet_tunnel_progress table').addClass('hidden');
            $('div.portlet_tunnel_progress table.show_IVS2').removeClass('hidden');
        });
    }
});

mpxd.modules.ug.ug_summary = Backbone.View.extend({
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
});

mpxd.modules.procurement.piechart_workpackage = Backbone.View.extend({
    initialize: function (options) {
        this.data = options.data;
        this.render();
    }, render: function () {
        that = this;
        var html = mpxd.getTemplate(that.data.type);

        template = _.template(html, {data: that.data});
        that.$el.html(template);
        that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
        that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});

        var procdata = that.data.data[0].data.procurement;
        var awarded = procdata.awarded;
        var yetcalled = procdata.yetcalled;
        var calledin = procdata.calledin;

        var ac = (_.reduce(awarded, function (memo, num) {
            if (typeof num === "object") return memo + 1; else return memo;
        }, 0));
        var yc = (_.reduce(yetcalled, function (memo, num) {
            if (typeof num === "object") return memo + 1; else return memo;
        }, 0));
        var cc = (_.reduce(calledin, function (memo, num) {
            if (typeof num === "object") return memo + 1; else return memo;
        }, 0));
        var total = ac + yc + cc;
        //console.log(template);
        //console.log('#chart_'+that.data.id);
        that.$el.find('#chart_' + that.data.id).highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            title: {
                text: '<p style="color: #FFF;font-size: 330%; text-align: center; margin-bottom:0" id="piechart_packages_total">' + total + '</p><p style="color: #9EDD2E;text-align: center">packages</p>',
                align: 'center',
                verticalAlign: 'middle',
                y: -50,
                useHTML: true
            },
            tooltip: {
                enabled: true,
                pointFormat: '<b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: 20,
                        style: {
                            fontWeight: 'bold',
                            color: 'white',
                            textShadow: '0px 1px 2px black'
                        },
                        formatter: function () {
                            return this.y;
                        }
                    },
                    showInLegend: true,
                    point: {
                        events: {
                            click: function (event) {
                                var options = this.options;
                                if (options.name == "Awarded")
                                    loadPage('procurement/awarded');
                                else if (options.name == "Yet to be called")
                                    loadPage('procurement/yetcalled');
                                else if (options.name == "Called in & In Progress")
                                    loadPage('procurement/called');
                                //console.log(options);

                            },
                            legendItemClick: function (e) {
                                /* To calculate what is the total package shown in pie chart */
                                var pts = e.currentTarget.series.points;
                                var sum = ((!e.currentTarget.visible) ? e.currentTarget.y : 0);
                                for (var i = 0; i < pts.length; i++) {
                                    if (pts[i].name == e.currentTarget.name)
                                        continue;
                                    if (pts[i].visible)
                                        sum += pts[i].y;
                                }
                                $('#piechart_packages_total').text(sum);
                            }
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: '',
                data: [
                    ['Awarded', ac],
                    ['Yet to be called', yc],
                    ['Called in & In Progress', cc]
                ],
                innerSize: '90%'
            }],
            credits: {enabled: false}
        });

    }
});

mpxd.modules.procurement.barchart_workpackage = Backbone.View.extend({
    initialize: function (options) {
        this.data = options.data;
        this.render();
    },
    render: function () {
        that = this;
        var html = mpxd.getTemplate(that.data.type);

        template = _.template(html, {data: that.data});
        that.$el.html(template);
        that.$el.find('#chart_' + that.data.id).highcharts({
            chart: {
                type: 'column',
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '14px'
                    }
                },
                categories: [
                    'Advanced Work',
                    'Elevated Guideways', //4
                    'Depot', //3
                    'Underground Work', //2
                    'Multistorey Carparks', //7
                    'System', //6
                    'Elevated Stations', //5
                    'Civil & Structural and Other Works' //8
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                gridLineColor: 'rgba(255,255,255,0.1)'
            },
            tooltip: {
                headerFormat: '<div style="width:235px"><span style="font-size:16px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0;font-size:13px">{series.name}: </td>' +
                '<td style="padding:0 0 0 20px; color:{series.color}; font-weight:normal">{point.y}</td></tr>',
                footerFormat: '</table></div>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                },
                series: {
                    point: {
                        events: {
                            click: function (e) {
                                var name = e.currentTarget.series.name.toLowerCase();
                                if (name == "awarded")
                                    loadPage('procurement/awarded');
                                else if (name == "yet to be called")
                                    loadPage('procurement/yetcalled');
                                else if (name == "called in & in progress")
                                    loadPage('procurement/called');
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'Total',
                data: [22, 8, 2, 1, 7, 11, 8, 26]

            }, {
                name: 'Awarded',
                data: [22, 8, 2, 1, 6, 11, 8, 19]

            }, {
                name: 'Called in & In Progress',
                data: [0, 0, 0, 0, 0, 0, 0, 3]

            }, {
                name: 'Yet to be called',
                data: [0, 0, 0, 0, 1, 0, 0, 4]

            }],
            credits: {
                enabled: false
            }
        });

    }
});

mpxd.modules.none.error404 = Backbone.View.extend({
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
});

mpxd.modules.report.generate = Backbone.View.extend({
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

        that.$el.find('.portlet_generate_report i.fa-plus-square').click(function(){
            $(this).parent().find('i.fa-plus-square').addClass('hidden');
            $(this).parent().find('i.fa-minus-square').removeClass('hidden');
            $(this).parent().parent().parent().parent().parent().parent().find('tbody').removeClass('hidden');
        });
        that.$el.find('.portlet_generate_report i.fa-minus-square').click(function(){
            $(this).parent().find('i.fa-minus-square').addClass('hidden');
            $(this).parent().find('i.fa-plus-square').removeClass('hidden');
            $(this).parent().parent().parent().parent().parent().parent().find('tbody').addClass('hidden');
        });
    }
});

mpxd.modules.ug_stations.work_progress = Backbone.View.extend({
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

        that.$el.find('div.portlet_work_progress ul li.show_Station_Box').click(function(){
            $('div.portlet_work_progress ul li').removeClass('active');$(this).addClass('active');
            $('div.portlet_work_progress div.show').addClass('hidden');
            $('div.portlet_work_progress div.show.show_Station_Box').removeClass('hidden');
        });

        that.$el.find('div.portlet_work_progress ul li.show_Entrance').click(function(){
            $('div.portlet_work_progress ul li').removeClass('active');$(this).addClass('active');
            $('div.portlet_work_progress div.show').addClass('hidden');
            $('div.portlet_work_progress div.show.show_Entrance').removeClass('hidden');
        });

        that.$el.find('div.portlet_work_progress ul li.show_Vent_Shaft').click(function(){
            $('div.portlet_work_progress ul li').removeClass('active');$(this).addClass('active');
            $('div.portlet_work_progress div.show').addClass('hidden');
            $('div.portlet_work_progress div.show.show_Vent_Shaft').removeClass('hidden');
        });

        that.$el.find('.portlet_work_progress i.fa-plus-square').click(function(){
            $(this).parent().find('i.fa-plus-square').addClass('hidden');
            $(this).parent().find('i.fa-minus-square').removeClass('hidden');
            $(this).parent().parent().parent().parent().parent().find('table').removeClass('hidden');
        });
        that.$el.find('.portlet_work_progress i.fa-minus-square').click(function(){
            $(this).parent().find('i.fa-minus-square').addClass('hidden');
            $(this).parent().find('i.fa-plus-square').removeClass('hidden');
            $(this).parent().parent().parent().parent().parent().find('table').addClass('hidden');
        });
    }
});

mpxd.modules.general.GenerateGeneralview2 = Backbone.View.extend({
    initialize: function (options) {
        this.data = options.data;
        this.render();
    }, render: function () {
        var that = this;
        var html = mpxd.getTemplate(that.data.type);
        template = _.template(html, {data: that.data});
        that.$el.html(template);
        that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-53});
        that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
    }
});