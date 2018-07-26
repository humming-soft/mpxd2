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
mpxd.constructors.spi = function(data) {
    var el = "#portlet_" + data.id;
    return new mpxd.modules.viaducts.spi({data: data, el: el});
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


mpxd.constructors.piechart_workpackage = function (data) {
    // mpxd.modules.procurement.piechart_workpackage.initialize();
    var el = "#portlet_" + data.id
    return new mpxd.modules.procurement.piechart_workpackage({data: data, el: el});
}
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
        that.$el.find('.portlet_content').css({"height": (that.$el.find('.content').parent().parent().parent().height()) - 40});
        that.$el.find('.portlet_content').mCustomScrollbar({theme: "dark-3"});
        var t_pier = [
            {
                "pier_v": "v201",
                "pier_id": "SB01",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
               /* "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"*/
            },
            {
                "pier_v": "v201",
                "pier_id": "SB02",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SB03",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "2",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17", "sbg18", "sbg19", "sbg20", "sbg21", "sbg22"],
                    "sbg_lr": ["right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SB04",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "Special Crossing No. 1",
                "pier_marker_b": "2",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17", "sbg18", "sbg19", "sbg20", "sbg21", "sbg22", "sbg23", "sbg24", "sbg25", "sbg26", "sbg27", "sbg28", "sbg29", "sbg30", "sbg31", "sbg32", "sbg33", "sbg34"],
                    "sbg_lr": ["right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SB05",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "2",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17", "sbg18", "sbg19", "sbg20", "sbg21", "sbg22", "sbg23", "sbg24", "sbg25", "sbg26", "sbg27", "sbg28", "sbg29", "sbg30", "sbg31", "sbg32", "sbg33", "sbg34"],
                    "sbg_lr": ["right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SB06",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "2",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17", "sbg18", "sbg19", "sbg20", "sbg21", "sbg22", "sbg23", "sbg24", "sbg25", "sbg26", "sbg27", "sbg28", "sbg29", "sbg30", "sbg31", "sbg32", "sbg33", "sbg34"],
                    "sbg_lr": ["right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SB07",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SB08",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SB09",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SB10",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SB11",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SB12",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SB13",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SB14",
                "pier_north_id": "SBN14",
                "pier_south_id": "SBS14",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SB15",
                "pier_north_id": "SBN15",
                "pier_south_id": "SBS15",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SB16",
                "pier_north_id": "SBN16",
                "pier_south_id": "SBS16",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD01",
                "pier_north_id": "DDN01",
                "pier_south_id": "DDS01",
                "pier_marker_a": "Damansara Damai Station (Island Platform)",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p7x",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD02",
                "pier_north_id": "DDN02",
                "pier_south_id": "DDS02",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p7x",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD03",
                "pier_north_id": "DDN03",
                "pier_south_id": "DDS03",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p7x",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD04",
                "pier_north_id": "DDN04",
                "pier_south_id": "DDS04",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p7x",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD05",
                "pier_north_id": "DDN05",
                "pier_south_id": "DDS05",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p7x",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD06",
                "pier_north_id": "DDN06",
                "pier_south_id": "DDS06",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD07",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD08",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD09",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD10",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD11",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD12",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD13",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD14",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD15",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD16",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD17",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD18",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD19",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD20",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD21",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD22",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD23",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD24",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD25",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD26",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD27",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD28",
                "pier_north_id": "DDN28",
                "pier_south_id": "DDS28",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p6x",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD29",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD30",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD31",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD32",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD33",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD34",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD35",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD36",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD37",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD38",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD39",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "Special Crossing No. 2",
                "pier_marker_b": "2",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17", "sbg18", "sbg19", "sbg20", "sbg21"],
                    "sbg_lr": ["right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", ],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD40",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "2",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17", "sbg18", "sbg19", "sbg20", "sbg21", "sbg22", "sbg23", "sbg24", "sbg25", "sbg26", "sbg27", "sbg28", "sbg29"],
                    "sbg_lr": ["right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD41",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "2",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17", "sbg18", "sbg19", "sbg20", "sbg21"],
                    "sbg_lr": ["right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD42",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD43",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD44",
                "pier_north_id": "DDN44",
                "pier_south_id": "DDS44",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p6x",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD45",
                "pier_north_id": "DDN45",
                "pier_south_id": "DDS45",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p6x",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD46",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD47",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "DD48",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW01",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "Sri Damansara West Station (Island Platform)",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW02",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW03",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW04",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW05",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW06",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW07",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW08",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW09",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW10",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW11",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p23",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW12",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p23",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW13",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW14",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW15",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW16",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW17",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW18",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "pier_pile_1": "100",
                "pier_pile_2": "0",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW19",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW20",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW21",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW22",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW23",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW24",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW25",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW26",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW27",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW28",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW29",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW30",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW31",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW32",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW33",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW34",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW35",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "Special Crossing No. 3",
                "pier_marker_b": "2",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17", "sbg18"],
                    "sbg_lr": ["right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right",],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW36",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "2",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17", "sbg18", "sbg19", "sbg20", "sbg21", "sbg22", "sbg23", "sbg24", "sbg25", "sbg26", "sbg27"],
                    "sbg_lr": ["right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW37",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "2",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17", "sbg18", "sbg19", "sbg20"],
                    "sbg_lr": ["right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW38",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW39",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW40",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDW41",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE01",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "Sri Damansara East Station (Side Platform)",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE02",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE03",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE04",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE05",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE06",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE07",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE08",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE09",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE10",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE11",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE12",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "2",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE13",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "12 nos. Single Pier Near Syabas Water Tanks (RCD Method)",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE14",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE15",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE16",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE17",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE18",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE19",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE20",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE21",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE22",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE23",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE24",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v201",
                "pier_id": "SDE25",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }
        ];
        var t_pier_v2 = [
            {
                "pier_v": "v202",
                "pier_id": "SDE26",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "SDE27",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "SDE28",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "SDE29",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "SDE30",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "SDE31",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "SDE32",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "SDE33",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "SDE34",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "SDE35",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "SDE36",
                "pier_north_id": "SDEN36",
                "pier_south_id": "SDES36",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8212",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "SDE37",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "SDE38",
                "pier_north_id": "SDEN38",
                "pier_south_id": "SDES38",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8212",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS01",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "Kepong Sentral Station",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p52",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS2",
                "pier_north_id": "KS2A",
                "pier_south_id": "KS2E",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p6x",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS02",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p52",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS4D",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p42",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS03",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p52",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS6D",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p42",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS04",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p52",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS8D",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p42",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS05",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p52",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS06",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS07",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS08",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS09",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS10",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS11",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS12",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS13",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS14",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "pier_pile_1": "100",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS15",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS16",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11"],
                    "sbg_lr": ["left", "left", "left", "left", "right", "right", "right", "right", "right", "right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS17",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "Long Span No. 4",
                "pier_marker_b": "2",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15"],
                    "sbg_lr": ["left", "left", "left", "left", "left", "left", "left", "left", "right", "right", "right", "right", "right", "right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS18",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "2",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15"],
                    "sbg_lr": ["left", "left", "left", "left", "left", "left", "left", "left", "right", "right", "right", "right", "right", "right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS19",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "2",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12"],
                    "sbg_lr": ["left", "left", "left", "left", "left", "left", "left", "left", "right", "right", "right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS20",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "2",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS21",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS22",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS23",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS24",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS25",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS26",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17", "sbg18", "sbg19", "sbg20", "sbg21"],
                    "sbg_lr": ["left", "left", "left", "left", "left", "left", "left", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS27",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "Long Span No. 5",
                "pier_marker_b": "2",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17", "sbg18", "sbg19", "sbg20", "sbg21", "sbg22", "sbg23", "sbg24", "sbg25", "sbg26", "sbg27", "sbg28", "sbg29"],
                    "sbg_lr": ["left", "left", "left", "left", "left", "left", "left", "left", "left", "left", "left", "left", "left", "left", "left", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS28",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "2",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17", "sbg18", "sbg19", "sbg20"],
                    "sbg_lr": ["left", "left", "left", "left", "left", "left", "left", "left", "left", "left", "left", "left", "left", "left", "left", "right", "right", "right", "right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS29",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "2",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS30",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS31",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS32",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS33",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS34",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS35",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS36",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS37",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS38",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS39",
                "pier_north_id": "KSN39",
                "pier_south_id": "KSS39",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p6x",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS40",
                "pier_north_id": "KSN40",
                "pier_south_id": "KSS40",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p6x",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS41",
                "pier_north_id": "KSN41",
                "pier_south_id": "KSS41",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p6x",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS42",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS43",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS44",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KS45",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP01",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "Metro Prima Station",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p32",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP02",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p32",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP03",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p32",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP04",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p32",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP05",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP06",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP07",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP08",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP09",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP10",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP11",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "Pocket Track",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP12",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP13",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP14",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP15",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP16",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP17",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP18",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP19",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP20",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP21",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP22",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP23",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP24",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP25",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP26",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP27",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP28",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "MP29",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB01",
                "pier_north_id": "KBN01",
                "pier_south_id": "KBS01",
                "pier_marker_a": "Kepong Baru Station",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p8211",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB02",
                "pier_north_id": "KBN02",
                "pier_south_id": "KBS02",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p8211",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB03",
                "pier_north_id": "KBN03",
                "pier_south_id": "KBS03",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p8211",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB04",
                "pier_north_id": "KBN04",
                "pier_south_id": "KBS04",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p8211",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB05",
                "pier_north_id": "KBN05",
                "pier_south_id": "KBS05",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB06",
                "pier_north_id": "KBN06",
                "pier_south_id": "KBS06",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB07",
                "pier_north_id": "KBN07",
                "pier_south_id": "KBS07",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB08",
                "pier_north_id": "KBN08",
                "pier_south_id": "KBS08",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB09",
                "pier_north_id": "KBN09",
                "pier_south_id": "KBS09",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB10",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB11",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB12",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB13",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB14",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB15",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB16",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB17",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB18",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB19",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB20",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB21",
                "pier_north_id": "KBN21",
                "pier_south_id": "KBS21",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB22",
                "pier_north_id": "KBN22",
                "pier_south_id": "KBS22",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB23",
                "pier_north_id": "KBN23",
                "pier_south_id": "KBS23",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "KB24",
                "pier_north_id": "KBN24",
                "pier_south_id": "KBS24",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "JS01",
                "pier_north_id": "JS01",
                "pier_south_id": "JN01",
                "pier_marker_a": "Jinjang Station",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p8211",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "JS1",
                "pier_north_id": "JS1A",
                "pier_south_id": "JS1E",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p6x",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "JS02",
                "pier_north_id": "JS02",
                "pier_south_id": "JN02",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p7x",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "JS3",
                "pier_north_id": "JS3A",
                "pier_south_id": "JS3E",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p6x",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "JS03",
                "pier_north_id": "JS03",
                "pier_south_id": "JN03",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p7x",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "JS5",
                "pier_north_id": "JS5A",
                "pier_south_id": "JS5E",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p6x",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "JS04",
                "pier_north_id": "JS04",
                "pier_south_id": "JN04",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p7x",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "JS7",
                "pier_north_id": "JS7A",
                "pier_south_id": "JS7E",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p6x",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "JS05",
                "pier_north_id": "JS05",
                "pier_south_id": "JN05",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8212",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "JS06",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "JS07",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "JS08",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "JS09",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "JS10",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "JS11",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v202",
                "pier_id": "JS12",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "0",
                "pier_type": "0",
                "span_type": "0",
                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }

        ];
        var t_pier_v3 = [
            {
                "pier_v": "v203",
                "pier_id": "J13",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "J14",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "J15",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "J16",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "J16a",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "J17",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p23",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "J18",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p23",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "J19",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "J20",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "J21",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "J22",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "J23",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "J24",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "J25",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "J26",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "2",
                "pier_layout": "1",
                "pier_type": "p11",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "J27",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "J28",
                "pier_north_id": "JN28",
                "pier_south_id": "JS28",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "J29",
                "pier_north_id": "JN29",
                "pier_south_id": "JS29",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "J30",
                "pier_north_id": "JN30",
                "pier_south_id": "JS30",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "J31",
                "pier_north_id": "JN31",
                "pier_south_id": "JS31",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL01",
                "pier_north_id": "SDLN01",
                "pier_south_id": "SDLS01",
                "pier_marker_a": "Sri Delima Station (Island Platform)",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p8212",
                "span_type": "ss",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL02",
                "pier_north_id": "SDLN02",
                "pier_south_id": "SDLS02",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p8212",
                "span_type": "ss",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL03",
                "pier_north_id": "SDLN03",
                "pier_south_id": "SDLS03",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p8212",
                "span_type": "ss",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL04",
                "pier_north_id": "SDLN04",
                "pier_south_id": "SDLS04",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p8212",
                "span_type": "ss",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL05",
                "pier_north_id": "SDLN05",
                "pier_south_id": "SDLS05",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p8212",
                "span_type": "s2",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL06",
                "pier_north_id": "SDLN06",
                "pier_south_id": "SDLS06",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL07",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL08",
                "pier_north_id": "SDLN08",
                "pier_south_id": "SDLS08",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p6x",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL09",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL10",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL11",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL12",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL13",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL14",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v203",
                "pier_id": "SDL15",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "2",
                "pier_type": "p32",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7"],
                    "sbg_lr": ["right", "right", "right", "right", "right", "right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "SDL16",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "2",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15","sbg16", "sbg17", "sbg18", "sbg19", "sbg20", "sbg21", "sbg22", "sbg23", "sbg24", "sbg25", "sbg26", "sbg27", "sbg28", "sbg29", "sbg30"],
                    "sbg_lr": ["left", "left", "left", "left", "left", "left", "left", "left","left","left","left","left","left","left","left", "right", "right", "right", "right", "right", "right", "right","right","right","right","right","right","right","right","right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL17",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "2",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15","sbg16", "sbg17", "sbg18", "sbg19", "sbg20", "sbg21", "sbg22", "sbg23", "sbg24", "sbg25", "sbg26", "sbg27", "sbg28", "sbg29", "sbg30"],
                    "sbg_lr": ["left", "left", "left", "left", "left", "left", "left", "left","left","left","left","left","left","left","left", "right", "right", "right", "right", "right", "right", "right","right","right","right","right","right","right","right","right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL18",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s1",

                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL19",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "SDS20",
                "pier_north_id": "SDLN20",
                "pier_south_id": "SDLS20",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8212",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "SDL21",
                "pier_north_id": "SDLN21",
                "pier_south_id": "SDLS21",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL22",
                "pier_north_id": "SDLN22",
                "pier_south_id": "SDLS22",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL23",
                "pier_north_id": "SDLN23",
                "pier_south_id": "SDLS23",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL24",
                "pier_north_id": "SDLN24",
                "pier_south_id": "SDLS24",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL25",
                "pier_north_id": "SDLN25",
                "pier_south_id": "SDLS25",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "SDL26",
                "pier_north_id": "SDLN26",
                "pier_south_id": "SDLS26",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },   {
                "pier_v": "v203",
                "pier_id": "B01",
                "pier_north_id": "BN01",
                "pier_south_id": "BS01",
                "pier_marker_a": "Kg. Batu Station (Island Platform)",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "B02",
                "pier_north_id": "BN02",
                "pier_south_id": "BS02",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "B03",
                "pier_north_id": "BN03",
                "pier_south_id": "BS03",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "B04",
                "pier_north_id": "BN04",
                "pier_south_id": "BS04",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "B05",
                "pier_north_id": "BN05",
                "pier_south_id": "BS05",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "B06",
                "pier_north_id": "BN06",
                "pier_south_id": "BS06",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "B07",
                "pier_north_id": "BN07",
                "pier_south_id": "BS07",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "B08",
                "pier_north_id": "BN08",
                "pier_south_id": "BS08",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8212",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },  {
                "pier_v": "v203",
                "pier_id": "B09",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v203",
                "pier_id": "B10",
                "pier_north_id": "BN10",
                "pier_south_id": "BS10",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p6x",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },  {
                "pier_v": "v203",
                "pier_id": "B11",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v203",
                "pier_id": "B12",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "B13",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "B14",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "B15",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "B16",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "B17",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "B18",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "B19",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "B20",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v203",
                "pier_id": "B21",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "B22",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "B23",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "B24",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "B25",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "B26",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "B27",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "B28",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "B29",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "B30",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "B31",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "B32",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },{
                "pier_v": "v203",
                "pier_id": "B33",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },{
                "pier_v": "v203",
                "pier_id": "B34",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "B35",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "B36",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "B37",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "B38",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",
                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                }
            },
            {
                "pier_v": "v203",
                "pier_id": "KT01",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "Kentonmen Station (Side Platform)",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p42",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v203",
                "pier_id": "KT02",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p42",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v203",
                "pier_id": "KT03",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p42",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v203",
                "pier_id": "KT04",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p42",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v203",
                "pier_id": "KT05",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p42",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "KT06",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p42",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "KT07",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p42",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "KT08",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p42",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "KT09",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p42",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "KT10",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p41",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "KT11",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p41",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "KT12",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p41",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "KT13",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p41",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "KT14",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p41",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "KT15",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p41",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "KT16",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p41",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "KT17",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p41",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "KT18",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p41",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "KT19",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p41",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "KT20",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p41",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "KT21",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p41",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "KT22",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p41",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "KT23",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p41",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v203",
                "pier_id": "KT24",
                "pier_north_id": "",
                "pier_south_id": "",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p41",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }



        ];
        var t_pier_v4 = [
            {
                "pier_v": "v204",
                "pier_id": "P02",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v204",
                "pier_id": "P03",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v204",
                "pier_id": "P04",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v204",
                "pier_id": "P05",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v204",
                "pier_id": "P06",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v204",
                "pier_id": "P07",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },   {
                "pier_v": "v204",
                "pier_id": "P08",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v204",
                "pier_id": "P09",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v204",
                "pier_id": "P10",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "2",
                "pier_type": "p22",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17"],
                    "sbg_lr": ["left", "left", "left", "left", "right", "right", "right", "right", "right", "right", "right","right", "right", "right", "right", "right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "P11",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17","sbg18", "sbg19", "sbg20", "sbg21", "sbg22", "sbg23", "sbg24", "sbg25", "sbg26"],
                    "sbg_lr": ["left", "left", "left", "left","left", "left", "left", "left", "left","left", "left", "left", "left", "right", "right", "right", "right", "right", "right", "right","right", "right", "right", "right", "right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v204",
                "pier_id": "P12",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17","sbg18", "sbg19", "sbg20"],
                    "sbg_lr": ["left", "left", "left", "left","left", "left", "left", "left","left", "left", "left", "left","left", "left",  "right", "right", "right", "right", "right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            } ,{
                "pier_v": "v204",
                "pier_id": "P13",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "P14",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v204",
                "pier_id": "P15",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v204",
                "pier_id": "P16",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v204",
                "pier_id": "P17",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v204",
                "pier_id": "P18",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v204",
                "pier_id": "P19",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v204",
                "pier_id": "P20",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },  {
                "pier_v": "v204",
                "pier_id": "P21",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v204",
                "pier_id": "P22",
                "pier_north_id": "PN22",
                "pier_south_id": "PS22",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v204",
                "pier_id": "P23",
                "pier_north_id": "PN23",
                "pier_south_id": "PS23",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v204",
                "pier_id": "P24",
                "pier_north_id": "PN24",
                "pier_south_id": "PS24",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v204",
                "pier_id": "P25",
                "pier_north_id": "PN25",
                "pier_south_id": "PS25",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v204",
                "pier_id": "P26",
                "pier_north_id": "PN26",
                "pier_south_id": "PS26",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v204",
                "pier_id": "KL01",
                "pier_north_id": "KLN01",
                "pier_south_id": "KLS01",
                "pier_marker_a": "Kuchai Lama Station (Island Platform)",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p7x",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "KL02",
                "pier_north_id": "KLN02",
                "pier_south_id": "KLS02",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p7x",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "KL03",
                "pier_north_id": "KLN03",
                "pier_south_id": "KLS03",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p7x",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "KL04",
                "pier_north_id": "KLN04",
                "pier_south_id": "KLS04",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p7x",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "KL05",
                "pier_north_id": "KLN05",
                "pier_south_id": "KLS05",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p7x",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            } ,{
                "pier_v": "v204",
                "pier_id": "KL06",
                "pier_north_id": "KLN06",
                "pier_south_id": "KLS06",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "KL07",
                "pier_north_id": "KLN07",
                "pier_south_id": "KLS07",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "KL08",
                "pier_north_id": "KLN08",
                "pier_south_id": "KLS08",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "KL09",
                "pier_north_id": "KLN09",
                "pier_south_id": "KLS09",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "KL10",
                "pier_north_id": "KLN10",
                "pier_south_id": "KLS10",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "KL11",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v204",
                "pier_id": "KL12",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17","sbg18", "sbg19"],
                    "sbg_lr": ["left", "left", "left", "left","left", "left", "right", "right", "right", "right", "right", "right", "right","right", "right", "right", "right", "right", "right","right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v204",
                "pier_id": "KL13",
                "pier_north_id": "KLN13",
                "pier_south_id": "KLS13",
                "pier_marker_a": "",
                "pier_marker_b": "1",
                "pier_layout": "2",
                "pier_type": "p6x",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17","sbg18", "sbg19","sbg20", "sbg21", "sbg22", "sbg23", "sbg24", "sbg25", "sbg26","sbg27", "sbg28"],
                    "sbg_lr": ["left", "left", "left", "left","left", "left","left", "left", "left", "left","left", "left", "left", "right", "right", "right", "right", "right", "right", "right","right", "right", "right", "right", "right", "right","right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "KL14",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17","sbg18", "sbg19","sbg20", "sbg21"],
                    "sbg_lr": ["left", "left", "left", "left","left", "left","left", "left", "left", "left","left", "left", "left","left", "left", "right", "right", "right", "right", "right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0,0, 0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v204",
                "pier_id": "KL15",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",

                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v204",
                "pier_id": "KL16",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v204",
                "pier_id": "KL17",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v204",
                "pier_id": "KL18",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v204",
                "pier_id": "KL19",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "KL20",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "KL21",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "2",
                "pier_type": "p22",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17","sbg18", "sbg19", "sbg20", "sbg21"],
                    "sbg_lr": ["left", "left", "left", "left", "left", "left", "right", "right", "right", "right", "right", "right", "right","right", "right", "right", "right", "right", "right","right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v204",
                "pier_id": "KL22",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17","sbg18", "sbg19", "sbg20", "sbg21"],
                    "sbg_lr": ["left", "left", "left", "left", "left", "left", "right", "right", "right", "right", "right", "right", "right","right", "right", "right", "right", "right", "right","right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v204",
                "pier_id": "KL23",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17","sbg18", "sbg19", "sbg20", "sbg21"],
                    "sbg_lr": ["left", "left", "left", "left", "left", "left", "right", "right", "right", "right", "right", "right", "right","right", "right", "right", "right", "right", "right","right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v204",
                "pier_id": "KL24",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v204",
                "pier_id": "KL25",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",

                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },  {
                "pier_v": "v204",
                "pier_id": "KL26",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p22",
                "span_type": "s1",

                "sbg": {
                    "sbg_id": [],
                    "sbg_lr": [],
                    "sbg_va": []
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "KL27",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17","sbg18", "sbg19", "sbg20", "sbg21"],
                    "sbg_lr": ["left", "left", "left", "left", "left", "left", "right", "right", "right", "right", "right", "right", "right","right", "right", "right", "right", "right", "right","right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v204",
                "pier_id": "KL28",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17","sbg18", "sbg19", "sbg20", "sbg21"],
                    "sbg_lr": ["left", "left", "left", "left", "left", "left", "right", "right", "right", "right", "right", "right", "right","right", "right", "right", "right", "right", "right","right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },
            {
                "pier_v": "v204",
                "pier_id": "KL29",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "2",
                "pier_type": "p12",
                "span_type": "sb",

                "sbg": {
                    "sbg_id": ["sbg1", "sbg2", "sbg3", "sbg4", "sbg5", "sbg6", "sbg7", "sbg8", "sbg9", "sbg10", "sbg11", "sbg12", "sbg13", "sbg14", "sbg15", "sbg16", "sbg17","sbg18", "sbg19", "sbg20", "sbg21"],
                    "sbg_lr": ["left", "left", "left", "left", "left", "left", "right", "right", "right", "right", "right", "right", "right","right", "right", "right", "right", "right", "right","right", "right"],
                    "sbg_va": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0]
                },
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v204",
                "pier_id": "KL30",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v204",
                "pier_id": "KL31",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v204",
                "pier_id": "KL32",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v204",
                "pier_id": "KL33",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }, {
                "pier_v": "v204",
                "pier_id": "KL34",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },   {
                "pier_v": "v204",
                "pier_id": "TNE01",
                "pier_north_id": "TNEN01",
                "pier_south_id": "TNES01",
                "pier_marker_a": "Taman Naga Emas Station(Island Platform)",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p7x",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },  {
                "pier_v": "v204",
                "pier_id": "TNE02",
                "pier_north_id": "TNEN02",
                "pier_south_id": "TNES02",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p7x",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },   {
                "pier_v": "v204",
                "pier_id": "TNE03",
                "pier_north_id": "TNEN03",
                "pier_south_id": "TNES03",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p7x",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE04",
                "pier_north_id": "TNEN04",
                "pier_south_id": "TNES04",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p7x",
                "span_type": "ss",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE05",
                "pier_north_id": "TNEN05",
                "pier_south_id": "TNES05",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p7x",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE06",
                "pier_north_id": "TNEN06",
                "pier_south_id": "TNES06",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "3",
                "pier_type": "p7x",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE07",
                "pier_north_id": "TNEN07",
                "pier_south_id": "TNES07",
                "pier_marker_a": "0",
                "pier_marker_b": "1",
                "pier_layout": "1",
                "pier_type": "p7x",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE08",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s1",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE09",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p12",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE10",
                "pier_north_id": "TNEN10",
                "pier_south_id": "TNES10",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE11",
                "pier_north_id": "TNEN11",
                "pier_south_id": "TNES11",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE12",
                "pier_north_id": "TNEN12",
                "pier_south_id": "TNES12",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE13",
                "pier_north_id": "TNEN13",
                "pier_south_id": "TNES13",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE14",
                "pier_north_id": "TNEN14",
                "pier_south_id": "TNES14",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE15",
                "pier_north_id": "TNEN15",
                "pier_south_id": "TNES15",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE16",
                "pier_north_id": "TNEN16",
                "pier_south_id": "TNES16",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE17",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE18",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE19",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE20",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE21",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE22",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE23",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE24",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE25",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE26",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE27",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE28",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s3",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE29",
                "pier_north_id": "0",
                "pier_south_id": "0",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p32",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE30",
                "pier_north_id": "TNEN30",
                "pier_south_id": "TNES30",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE31",
                "pier_north_id": "TNEN31",
                "pier_south_id": "TNES31",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE32",
                "pier_north_id": "TNEN32",
                "pier_south_id": "TNES32",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p8211",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE33",
                "pier_north_id": "TNEN33",
                "pier_south_id": "TNES33",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p6x",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            },{
                "pier_v": "v204",
                "pier_id": "TNE34",
                "pier_north_id": "TNEN34",
                "pier_south_id": "TNES34",
                "pier_marker_a": "0",
                "pier_marker_b": "0",
                "pier_layout": "1",
                "pier_type": "p6x",
                "span_type": "s2",

                "sbg": {"sbg_id": [], "sbg_lr": [], "sbg_va": []},
                "parapet1": "0",
                "parapet2": "0",
                "parapet3": "0"
            }



        ];
        var t_pier_v5 = [];
        var t_pier_v6 = [];
        var t_pier_v7 = [];
        var t_pier_v8 = [];
        var t_pier_v9 = [];
        var t_pier_v10 = [];
        var t_pier_val = that.data.data;
        viaduct = "";

        if(that.data.data.length > 0) {
            var  via_arr = "";
            for (j = 0; j < t_pier_val.length; j++) {
                var m = t_pier_val[j];
                viaduct = m.pier_v;
            }
            if(viaduct=="v201"){
                via_arr =t_pier;
            }
             if(viaduct=="v202"){
                via_arr =t_pier_v2;
            }
            if(viaduct=="v203"){
                via_arr =t_pier_v3;
            }
            if(viaduct=="v204"){
                via_arr =t_pier_v4;
            }
            if(viaduct=="v205"){
                via_arr =t_pier_v5;
            }
            if(viaduct=="v206"){
                via_arr =t_pier_v6;
            }
            if(viaduct=="v207"){
                via_arr =t_pier_v7;
            }
            if(viaduct=="v208"){
                via_arr =t_pier_v8;
            }
            if(viaduct=="v209"){
                via_arr =t_pier_v9;
            }
            if(viaduct=="v210"){
                via_arr =t_pier_v10;
            }
        for (i = 0; i < via_arr.length; i++) {
            p_a1 = 0;
            p_a2 = 0;
            p_b1 = 0;
            p_b2 = 0;
            p_c1 = 0;
            p_c2 = 0;
            p_d1 = 0;
            p_d2 = 0;
            p_d3 = 0;
            p_s1 = 0;
            p_s2 = 0;
            p_s3 = 0;
            p_p1 = 0;
            p_p2 = 0;
            p_p3 = 0;
            var b = via_arr[i];
            p_pv = b.pier_v;
            p_nid = b.pier_north_id;
            p_sid = b.pier_south_id;
            p_maa = b.pier_marker_a;
            p_mab = b.pier_marker_b;
            p_la = b.pier_layout;
            p_pt = b.pier_type;
            p_st = b.span_type;
            p_sbg_id = b.sbg.sbg_id;
            p_sbg_lr = b.sbg.sbg_lr;
            p_pid = b.pier_id;
            for (j = 0; j < t_pier_val.length; j++) {
                var c = t_pier_val[j];
                if (p_pid == c.pier_id) {
                    p_a1 = c.pier_pile_1;
                    p_a2 = c.pier_pile_2;
                    p_b1 = c.pier_pilecap_1;
                    p_b2 = c.pier_pilecap_2;
                    p_c1 = c.pier_pier_1;
                    p_c2 = c.pier_pier_2;
                    p_d1 = c.pier_pierhead_1;
                    p_d2 = c.pier_pierhead_2;
                    p_d3 = c.pier_pierhead_3;
                    p_s1 = c.span1;
                    p_s2 = c.span2;
                    p_s3 = c.span3;
                    p_p1 = c.parapet1;
                    p_p2 = c.parapet2;
                    p_p3 = c.parapet3;
                    p_sbg_va = c.sbg.sbg_va;
                    break;
                } else {
                    p_a1 = 0;
                    p_a2 = 0;
                    p_b1 = 0;
                    p_b2 = 0;
                    p_c1 = 0;
                    p_c2 = 0;
                    p_d1 = 0;
                    p_d2 = 0;
                    p_d3 = 0;
                    p_s1 = 0;
                    p_s2 = 0;
                    p_s3 = 0;
                    p_p1 = 0;
                    p_p2 = 0;
                    p_p3 = 0;
                    p_sbg_va = b.sbg.sbg_va;
                }
            /*    console.log("-"+p_sbg_va+"-"+ p_a1 +"-"+ p_a2 +"-"+i);*/
             /*   console.log("-"+p_pid+"-"+ p_a1 +"-"+ p_a2 +"-"+i);*/
            }
           /* console.log("-"+p_sbg_va+"-"+ p_a1 +"-"+ p_a2 +"-"+i);*/

                p_pp = b.p_progress;
                color_0 = "none";
                color_1 = "#888899";
                color_2 = "#ff5500";
                color_3 = "#00ff00";

                p_hl0 = "highlight_null";
                p_hl1 = "highlight_normal";
                p_hl2 = "highlight_notice";
                p_hl3 = "highlight_alert";
                p_hl4 = "highlight_critical";

                // pier_pile_1
                // pier_pile_2
                if (p_a1 < 0) {
                    color_p_a1 = color_0;
                    p_a1_hl_trigger = 4;
                }
                else if (p_a1 == 0) {
                    color_p_a1 = color_1;
                    p_a1_hl_trigger = 3;
                }
                else if (p_a1 < 100) {
                    color_p_a1 = color_2;
                    p_a1_hl_trigger = 2;
                }
                else if (p_a1 == 100) {

                    color_p_a1 = color_3;
                    p_a1_hl_trigger = 1;
                }
                else if (p_a1 == '') {
                    p_a1_hl_trigger = 0;
                }
                else {
                    color_p_a1 = color_0;
                    p_a1_hl_trigger = 4;
                }

                if (p_a2 < 0) {
                    color_p_a2 = color_0;
                    p_a2_hl_trigger = 4;
                }
                else if (p_a2 == 0) {
                    color_p_a2 = color_1;
                    p_a2_hl_trigger = 3;
                }
                else if (p_a2 < 100) {
                    color_p_a2 = color_2;
                    p_a2_hl_trigger = 2;
                }
                else if (p_a2 == 100) {
                    color_p_a2 = color_3;
                    p_a2_hl_trigger = 1;
                }
                else if (p_a2 == '') {
                    p_a2_hl_trigger = 0;
                }
                else {
                    color_p_a2 = color_0;
                    p_a2_hl_trigger = 4;
                }

                // pier_pilecap_1
                // pier_pilecap_2
                if (p_b1 < 0) {
                    color_p_b1 = color_0;
                    p_b1_hl_trigger = 4;
                }
                else if (p_b1 == 0) {
                    color_p_b1 = color_1;
                    p_b1_hl_trigger = 3;
                }
                else if (p_b1 < 100) {
                    color_p_b1 = color_2;
                    p_b1_hl_trigger = 2;
                }
                else if (p_b1 == 100) {
                    color_p_b1 = color_3;
                    p_b1_hl_trigger = 1;
                }
                else if (p_b1 == '') {
                    p_b1_hl_trigger = 0;
                }
                else {
                    color_p_b1 = color_0;
                    p_b1_hl_trigger = 4;
                }

                if (p_b2 < 0) {
                    color_p_b2 = color_0;
                    p_b2_hl_trigger = 4;
                }
                else if (p_b2 == 0) {
                    color_p_b2 = color_1;
                    p_b2_hl_trigger = 3;
                }
                else if (p_b2 < 100) {
                    color_p_b2 = color_2;
                    p_b2_hl_trigger = 2;
                }
                else if (p_b2 == 100) {
                    color_p_b2 = color_3;
                    p_b2_hl_trigger = 1;
                }
                else if (p_b2 == '') {
                    p_b2_hl_trigger = 0;
                }
                else {
                    color_p_b2 = color_0;
                    p_b2_hl_trigger = 4;
                }

                // pier_pier_1
                // pier_pier_2
                if (p_c1 < 0) {
                    color_p_c1 = color_0;
                    p_c1_hl_trigger = 4;
                }
                else if (p_c1 == 0) {
                    color_p_c1 = color_1;
                    p_c1_hl_trigger = 3;
                }
                else if (p_c1 < 100) {
                    color_p_c1 = color_2;
                    p_c1_hl_trigger = 2;
                }
                else if (p_c1 == 100) {
                    color_p_c1 = color_3;
                    p_c1_hl_trigger = 1;
                }
                else if (p_c1 == '') {
                    p_c1_hl_trigger = 0;
                }
                else {
                    color_p_c1 = color_0;
                    p_c1_hl_trigger = 4;
                }

                if (p_c2 < 0) {
                    color_p_c2 = color_0;
                    p_c2_hl_trigger = 4;
                }
                else if (p_c2 == 0) {
                    color_p_c2 = color_1;
                    p_c2_hl_trigger = 3;
                }
                else if (p_c2 < 100) {
                    color_p_c2 = color_2;
                    p_c2_hl_trigger = 2;
                }
                else if (p_c2 == 100) {
                    color_p_c2 = color_3;
                    p_c2_hl_trigger = 1;
                }
                else if (p_c2 == '') {
                    p_c2_hl_trigger = 0;
                }
                else {
                    color_p_c2 = color_0;
                    p_c2_hl_trigger = 4;
                }

                // pier_pierhead_1
                // pier_pierhead_2
                // pier_pierhead_3 (shared)
                if (p_d1 < 0) {
                    color_p_d1 = color_0;
                    p_d1_hl_trigger = 4;
                }
                else if (p_d1 == 0) {
                    color_p_d1 = color_1;
                    p_d1_hl_trigger = 3;
                }
                else if (p_d1 < 100) {
                    color_p_d1 = color_2;
                    p_d1_hl_trigger = 2;
                }
                else if (p_d1 == 100) {
                    color_p_d1 = color_3;
                    p_d1_hl_trigger = 1;
                }
                else if (p_d1 == '') {
                    p_d1_hl_trigger = 0;
                }
                else {
                    color_p_d1 = color_0;
                    p_d1_hl_trigger = 4;
                }

                if (p_d2 < 0) {
                    color_p_d2 = color_0;
                    p_d2_hl_trigger = 4;
                }
                else if (p_d2 == 0) {
                    color_p_d2 = color_1;
                    p_d2_hl_trigger = 3;
                }
                else if (p_d2 < 100) {
                    color_p_d2 = color_2;
                    p_d2_hl_trigger = 2;
                }
                else if (p_d2 == 100) {
                    color_p_d2 = color_3;
                    p_d2_hl_trigger = 1;
                }
                else if (p_d2 == '') {
                    p_d2_hl_trigger = 0;
                }
                else {
                    color_p_d2 = color_0;
                    p_d2_hl_trigger = 4;
                }

                if (p_d3 < 0) {
                    color_p_d3 = color_0;
                    p_d3_hl_trigger = 4;
                }
                else if (p_d3 == 0) {
                    color_p_d3 = color_1;
                    p_d3_hl_trigger = 3;
                }
                else if (p_d3 < 100) {
                    color_p_d3 = color_2;
                    p_d3_hl_trigger = 2;
                }
                else if (p_d3 == 100) {
                    color_p_d3 = color_3;
                    p_d3_hl_trigger = 1;
                }
                else if (p_d3 == '') {
                    p_d3_hl_trigger = 0;
                }
                else {
                    color_p_d3 = color_0;
                    p_d3_hl_trigger = 4;
                }

                // span1
                // span2
                // span3
                // spanx
                if (p_s1 < 0) {
                    color_p_s1 = color_0;
                    p_s1_hl_trigger = 4;
                }
                else if (p_s1 == 0) {
                    color_p_s1 = color_1;
                    p_s1_hl_trigger = 3;
                }
                else if (p_s1 == 1.00) {
                    color_p_s1 = color_3;
                    p_s1_hl_trigger = 2;
                }
                else if (p_s1 == '') {
                    p_s1_hl_trigger = 0;
                }
                else {
                    color_p_s1 = color_0;
                    p_s1_hl_trigger = 4;
                }

                if (p_s2 < 0) {
                    color_p_s2 = color_0;
                    p_s2_hl_trigger = 4;
                }
                else if (p_s2 == 0) {
                    color_p_s2 = color_1;
                    p_s2_hl_trigger = 3;
                }
                else if (p_s2 == 1.00) {
                    color_p_s2 = color_3;
                    p_s2_hl_trigger = 2;
                }
                else if (p_s2 == 100) {
                    color_p_s2 = color_3;
                    p_s2_hl_trigger = 1;
                }
                else if (p_s2 == '') {
                    p_s2_hl_trigger = 0;
                }
                else {
                    color_p_s2 = color_0;
                    p_s2_hl_trigger = 4;
                }

                if (p_s3 < 0) {
                    color_p_s3 = color_0;
                    p_s3_hl_trigger = 4;
                }
                else if (p_s3 == 0) {
                    color_p_s3 = color_1;
                    p_s3_hl_trigger = 3;
                }
                else if (p_s3 == 1.00) {
                    color_p_s3 = color_3;
                    p_s3_hl_trigger = 2;
                }
                else if (p_s3 == 100) {
                    color_p_s3 = color_3;
                    p_s3_hl_trigger = 1;
                }
                else if (p_s3 == '') {
                    p_s3_hl_trigger = 0;
                }
                else {
                    color_p_s3 = color_0;
                    p_s3_hl_trigger = 4;
                }

                // parapet1
                // parapet2
                // parapet3
                if (p_p1 < 0) {
                    color_p_p1 = color_0;
                    p_p1_hl_trigger = 4;
                }
                else if (p_p1 == 0) {
                    color_p_p1 = color_1;
                    p_p1_hl_trigger = 3;
                }
                else if (p_p1 < 100) {
                    color_p_p1 = color_2;
                    p_p1_hl_trigger = 2;
                }
                else if (p_p1 == 100) {
                    color_p_p1 = color_3;
                    p_p1_hl_trigger = 1;
                }
                else if (p_p1 == '') {
                    p_p1_hl_trigger = 0;
                }
                else {
                    color_p_p1 = color_0;
                    p_p1_hl_trigger = 4;
                }

                if (p_p2 < 0) {
                    color_p_p2 = color_0;
                    p_p2_hl_trigger = 4;
                }
                else if (p_p2 == 0) {
                    color_p_p2 = color_1;
                    p_p2_hl_trigger = 3;
                }
                else if (p_p2 < 100) {
                    color_p_p2 = color_2;
                    p_p2_hl_trigger = 2;
                }
                else if (p_p2 == 100) {
                    color_p_p2 = color_3;
                    p_p2_hl_trigger = 1;
                }
                else if (p_p2 == '') {
                    p_p2_hl_trigger = 0;
                }
                else {
                    color_p_p2 = color_0;
                    p_p2_hl_trigger = 4;
                }

                if (p_p3 < 0) {
                    color_p_p3 = color_0;
                    p_p3_hl_trigger = 4;
                }
                else if (p_p3 == 0) {
                    color_p_p3 = color_1;
                    p_p3_hl_trigger = 3;
                }
                else if (p_p3 < 100) {
                    color_p_p3 = color_2;
                    p_p3_hl_trigger = 2;
                }
                else if (p_p3 == 100) {
                    color_p_p3 = color_3;
                    p_p3_hl_trigger = 1;
                }
                else if (p_p3 == '') {
                    p_p3_hl_trigger = 0;
                }
                else {
                    color_p_p3 = color_0;
                    p_p3_hl_trigger = 4;
                }

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
                    $('div#pier_plate').append('<div id="pier_id_' + p_pid + '" class="pier_block pier_block_type_a"><div class="marker_a"><span class="content"></span></div><div class="span"><span class="content"></span></div><div class="pier"><span class="content"></span></div><div class="pier_id"></div><div class="marker_d"><span class="content"></span></div><span class="' + p_highlight + '"></span></div>');
                    /* pier layout a"*/
                } else if (p_la == 2) {
                    $('div#pier_plate').append('<div id="pier_id_' + p_pid + '" class="pier_block pier_block_type_b"><div class="marker_a"><span class="content"></span></div><div class="span"><span class="content"></span></div><div class="pier"><span class="content"></span></div><div class="pier_id"></div><div class="marker_d"><span class="content"></span></div><span class="' + p_highlight + '"></span></div>');
                    /* pier layout b"*/
                } else if (p_la == 3) {
                    $('div#pier_plate').append('<div id="pier_id_' + p_pid + '" class="pier_block pier_block_type_C"><div class="marker_a"><span class="content"></span></div><div class="span"><span class="content"></span></div><div class="pier"><span class="content"></span></div><div class="pier_id"></div><div class="marker_d"><span class="content"></span></div><span class="' + p_highlight + '"></span></div>');
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
                        $('div#pier_id_' + p_pid + ' div.marker_a span.content').removeClass().addClass('content station_title').append(p_maa);
                    }
                    $('div#pier_id_' + p_pid + ' div.marker_b span.content').removeClass().addClass('content station');
                    /* got station"*/
                } else if (p_mab == 2) {
                    if (p_maa != 0) {
                        $('div#pier_id_' + p_pid + ' div.marker_a span.content').removeClass().addClass('content special_span_title').append(p_maa);
                    }
                    $('div#pier_id_' + p_pid + ' div.marker_b span.content').removeClass().addClass('content special_span');
                    /* got special span"*/
                } else {
                    /* something else"*/
                }

                // pier_id
                // pier_north_id
                // pier_south_id
                if (p_nid == "" || p_sid == "" || p_nid == 0 || p_sid == 0) {
                    /* use single label, ignore p_nid & p_sid"*/
                    $('div#pier_id_' + p_pid + ' div.pier_id').append('<span class="content single"><span class="name1"><span class="id_plate">' + p_pid + '</span></span></span>');
                } else {
                    $('div#pier_id_' + p_pid + ' div.pier_id').append('<span class="content twin"><span class="name2"><span class="id_plate">' + p_sid + '</span></span><span class="name1"><span class="id_plate">' + p_nid + '</span></span></span>');
                    /* use twin label, ignore pier_id"*/
                }

                // $('div#pier_id_'+p_pid+' .pier span.content').load('../assets/svg/d1/pier_a1b1c1d1.svg');

                switch (p_pt) {
                    case "p11":
                        // console.log('pier_a2b1c1d1.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="narrowbody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 6.2658042,111.21581 0,-5.75703 3.5181846,0 3.5181952,0 0,5.75703 0,5.75704 -3.5181952,0 -3.5181846,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 0,101.94012 0,-2.771904 9.8615878,0 9.8615982,0 0,2.771904 0,2.77191 -9.8615982,0 -9.8615878,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 4.9046054,88.189492 0,-10.128139 4.9574397,0 4.9574599,0 0,10.128139 0,10.128118 -4.9574599,0 -4.9574397,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="m 3.6733307,71.9819 -1.2859588,-5.223987 1.1549748,0 1.1549851,0 0,-1.385948 0,-1.385961 2.0256278,0 2.0256278,0 0,1.385961 0,1.385948 1.1194124,0 1.1194332,0 0,-1.385948 0,-1.385961 2.025617,0 2.025628,0 0,1.385961 0,1.385948 1.160327,0 1.160327,0 -0.563427,2.265505 c -0.309866,1.246022 -0.886979,3.59682 -1.282456,5.223989 l -0.719041,2.958476 -4.917554,0 -4.9175333,0 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p12":
                        // console.log('pier_a2b1c1d1.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="narrowbody" viewBox="0 0 150 86" width="150" height="86"><g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"><path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 9e-5,110.40624 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 15.28557,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /><path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '" d="m 0,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /><path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '" d="m 4.71948,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /><path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '" d="m 3.53468,72.680093 -1.23742,-5.026806 1.11138,0 1.11139,0 0,-1.333635 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333635 1.07716,0 1.07718,0 0,-1.333635 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333635 1.11653,0 1.11653,0 -0.54216,2.179993 c -0.29817,1.19899 -0.8535,3.461057 -1.23405,5.026808 l -0.6919,2.846808 -4.73194,0 -4.73192,0 z" id="path11" /></g></svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p13":
                        // console.log('pier_a3b1c1d1.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="narrowbody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '" d="m 0.0097,110.40206 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.69407,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.5915,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '" d="m 0,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '" d="m 4.71948,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '" d="m 3.53468,72.680093 -1.23742,-5.026806 1.11138,0 1.11139,0 0,-1.333635 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333635 1.07716,0 1.07718,0 0,-1.333635 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333635 1.11653,0 1.11653,0 -0.54216,2.179993 c -0.29817,1.19899 -0.8535,3.461057 -1.23405,5.026808 l -0.6919,2.846808 -4.73194,0 -4.73192,0 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p14":
                        // console.log('pier_a4b1c1d1.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="narrowbody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 0.00896,110.39764 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.23198,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 4.92421,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 0,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 4.71948,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="m 3.53468,72.680093 -1.23742,-5.026806 1.11138,0 1.11139,0 0,-1.333635 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333635 1.07716,0 1.07718,0 0,-1.333635 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333635 1.11653,0 1.11653,0 -0.54216,2.179993 c -0.29817,1.19899 -0.8535,3.461057 -1.23405,5.026808 l -0.6919,2.846808 -4.73194,0 -4.73192,0 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p1x":
                        // console.log('pier_axb1c1d1.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="narrowbody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 5.24094,110.39764 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 0,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 4.71948,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="m 3.53468,72.680093 -1.23742,-5.026806 1.11138,0 1.11139,0 0,-1.333635 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333635 1.07716,0 1.07718,0 0,-1.333635 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333635 1.11653,0 1.11653,0 -0.54216,2.179993 c -0.29817,1.19899 -0.8535,3.461057 -1.23405,5.026808 l -0.6919,2.846808 -4.73194,0 -4.73192,0 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;

                    case "p21":
                        // console.log('pier_a1b1c1d2.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="narrowbody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 9.52202,110.43311 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 3.49272,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 8.2122,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="M 4.52643,75.78599 C 2.52339,74.73676 0.851,73.84769 0.80999,73.81032 0.76889,73.77282 0.59699,72.56638 0.42782,71.12911 0.25864,69.69183 0.09316,68.31967 0.0601,68.07988 L 0,67.64388 l 0.51922,0 0.51922,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94916,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.02679 -4.74467,-9.1e-4 -4.74469,-9.1e-4 -3.64187,-1.90769 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p22":
                        // console.log('pier_a2b1c1d2.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="narrowbody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 3.40096,110.40624 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 15.28557,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 3.49272,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 8.2122,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="M 4.52643,75.78599 C 2.52339,74.73676 0.851,73.84769 0.80999,73.81032 0.76889,73.77282 0.59699,72.56638 0.42782,71.12911 0.25864,69.69183 0.09316,68.31967 0.0601,68.07988 L 0,67.64388 l 0.51922,0 0.51922,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94916,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.02679 -4.74467,-9.1e-4 -4.74469,-9.1e-4 -3.64187,-1.90769 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p23":
                        // console.log('pier_a3b1c1d2.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="narrowbody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 3.41235,110.40206 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.69407,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.5915,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 3.49272,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 8.2122,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="M 4.52643,75.78599 C 2.52339,74.73676 0.851,73.84769 0.80999,73.81032 0.76889,73.77282 0.59699,72.56638 0.42782,71.12911 0.25864,69.69183 0.09316,68.31967 0.0601,68.07988 L 0,67.64388 l 0.51922,0 0.51922,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94916,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.02679 -4.74467,-9.1e-4 -4.74469,-9.1e-4 -3.64187,-1.90769 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p24":
                        // console.log('pier_a4b1c1d2.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="narrowbody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 3.41161,110.39764 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.23198,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 4.92421,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 3.49272,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 8.2122,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="M 4.52643,75.78599 C 2.52339,74.73676 0.851,73.84769 0.80999,73.81032 0.76889,73.77282 0.59699,72.56638 0.42782,71.12911 0.25864,69.69183 0.09316,68.31967 0.0601,68.07988 L 0,67.64388 l 0.51922,0 0.51922,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94916,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.02679 -4.74467,-9.1e-4 -4.74469,-9.1e-4 -3.64187,-1.90769 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p2x":
                        // console.log('pier_axb1c1d2.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="narrowbody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 8.64359,110.39764 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 3.49272,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 8.2122,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="M 4.52643,75.78599 C 2.52339,74.73676 0.851,73.84769 0.80999,73.81032 0.76889,73.77282 0.59699,72.56638 0.42782,71.12911 0.25864,69.69183 0.09316,68.31967 0.0601,68.07988 L 0,67.64388 l 0.51922,0 0.51922,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94916,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.02679 -4.74467,-9.1e-4 -4.74469,-9.1e-4 -3.64187,-1.90769 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;

                    case "p31":
                        // console.log('pier_a1b1c1d3.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 16.932556,110.43311 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 10.903256,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 15.622736,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="m 15.579306,77.694648 c -0.0286,-0.0286 -2.51858,-0.89366 -5.53315,-1.92225 l -5.48103,-1.87012 -1.52789,-0.0546 L 1.50933,73.793278 0.75466,71.649688 0,69.506128 l 0.56981,-1.0623 0.5698,-1.0623 1.738415,0 1.738391,0 0,-1.33364 0,-1.33363 1.94917,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33364 5.79621,0 5.79621,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07718,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.73841,0 1.73841,0 0.56981,1.0623 0.5698,1.0623 -0.75467,2.14356 -0.75467,2.14359 -1.52789,0.0544 -1.5279,0.0546 -5.48845,1.89466 -5.48844,1.89463 -4.77693,0.0276 c -2.62731,0.0154 -4.80037,0.005 -4.82903,-0.0245 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p32":
                        // console.log('pier_a2b1c1d3.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 11.937046,110.40624 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 15.28557,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 10.903256,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 15.622736,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="m 15.579306,77.694648 c -0.0286,-0.0286 -2.51858,-0.89366 -5.53315,-1.92225 l -5.48103,-1.87012 -1.52789,-0.0546 L 1.50933,73.793278 0.75466,71.649688 0,69.506128 l 0.56981,-1.0623 0.5698,-1.0623 1.738415,0 1.738391,0 0,-1.33364 0,-1.33363 1.94917,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33364 5.79621,0 5.79621,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07718,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.73841,0 1.73841,0 0.56981,1.0623 0.5698,1.0623 -0.75467,2.14356 -0.75467,2.14359 -1.52789,0.0544 -1.5279,0.0546 -5.48845,1.89466 -5.48844,1.89463 -4.77693,0.0276 c -2.62731,0.0154 -4.80037,0.005 -4.82903,-0.0245 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p33":
                        // console.log('pier_a3b1c1d3.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 10.859966,110.40206 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.69407,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.5915,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 10.903256,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 15.622736,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="m 15.579306,77.694648 c -0.0286,-0.0286 -2.51858,-0.89366 -5.53315,-1.92225 l -5.48103,-1.87012 -1.52789,-0.0546 L 1.50933,73.793278 0.75466,71.649688 0,69.506128 l 0.56981,-1.0623 0.5698,-1.0623 1.738415,0 1.738391,0 0,-1.33364 0,-1.33363 1.94917,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33364 5.79621,0 5.79621,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07718,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.73841,0 1.73841,0 0.56981,1.0623 0.5698,1.0623 -0.75467,2.14356 -0.75467,2.14359 -1.52789,0.0544 -1.5279,0.0546 -5.48845,1.89466 -5.48844,1.89463 -4.77693,0.0276 c -2.62731,0.0154 -4.80037,0.005 -4.82903,-0.0245 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p34":
                        // console.log('pier_a4b1c1d3.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 10.887286,110.39764 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.23198,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 4.92421,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 10.903256,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 15.622736,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="m 15.579306,77.694648 c -0.0286,-0.0286 -2.51858,-0.89366 -5.53315,-1.92225 l -5.48103,-1.87012 -1.52789,-0.0546 L 1.50933,73.793278 0.75466,71.649688 0,69.506128 l 0.56981,-1.0623 0.5698,-1.0623 1.738415,0 1.738391,0 0,-1.33364 0,-1.33363 1.94917,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33364 5.79621,0 5.79621,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07718,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.73841,0 1.73841,0 0.56981,1.0623 0.5698,1.0623 -0.75467,2.14356 -0.75467,2.14359 -1.52789,0.0544 -1.5279,0.0546 -5.48845,1.89466 -5.48844,1.89463 -4.77693,0.0276 c -2.62731,0.0154 -4.80037,0.005 -4.82903,-0.0245 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p3x":
                        // console.log('pier_axb1c1d3.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 16.122936,110.39764 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 10.903256,101.50753 0,-2.667274 9.48936,0 9.48937,0 0,2.667274 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 15.622736,88.275926 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="m 15.579306,77.694648 c -0.0286,-0.0286 -2.51858,-0.89366 -5.53315,-1.92225 l -5.48103,-1.87012 -1.52789,-0.0546 L 1.50933,73.793278 0.75466,71.649688 0,69.506128 l 0.56981,-1.0623 0.5698,-1.0623 1.738415,0 1.738391,0 0,-1.33364 0,-1.33363 1.94917,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33364 5.79621,0 5.79621,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.07717,0 1.07718,0 0,-1.33364 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33364 1.73841,0 1.73841,0 0.56981,1.0623 0.5698,1.0623 -0.75467,2.14356 -0.75467,2.14359 -1.52789,0.0544 -1.5279,0.0546 -5.48845,1.89466 -5.48844,1.89463 -4.77693,0.0276 c -2.62731,0.0154 -4.80037,0.005 -4.82903,-0.0245 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;

                    case "p41":
                        // console.log('pier_a1b1c1d4.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 12.84907,119.44872 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 6.81977,110.52314 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 11.53629,102.0865 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="m 0,92.824685 0,-4.97551 4.75742,0 4.75741,0 11.60533,-11.64749 11.60534,-11.6475 0,5.05641 0,5.05638 -11.56694,11.56662 -11.56693,11.56659 -4.79581,0 -4.79582,0 z m 12.05408,-16.8757 11.38688,-11.38725 4.30869,0 4.30868,0 -11.38689,11.38725 -11.38689,11.38724 -4.30869,0 -4.30869,0 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p42":
                        // console.log('pier_a2b1c1d4.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '" d="m 6.83433,119.42656 0,-5.53973 1.84657,0 1.84659,0 0,5.53973 0,5.53974 -1.84659,0 -1.84657,0 z m 15.28556,0 0,-5.53973 1.84658,0 1.84659,0 0,5.53973 0,5.53974 -1.84659,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '" d="m 6.81977,110.52314 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '" d="m 11.53629,102.0865 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '" d="m 0,92.824685 0,-4.97551 4.75742,0 4.75741,0 11.60533,-11.64749 11.60534,-11.6475 0,5.05641 0,5.05638 -11.56694,11.56662 -11.56693,11.56659 -4.79581,0 -4.79582,0 z m 12.05408,-16.8757 11.38688,-11.38725 4.30869,0 4.30868,0 -11.38689,11.38725 -11.38689,11.38724 -4.30869,0 -4.30869,0 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p43":
                        // console.log('pier_a3b1c1d4.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 6.82845,119.42976 0,-5.53973 1.84657,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84657,0 z m 7.69407,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.5915,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 6.81977,110.52314 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 11.53629,102.0865 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="m 0,92.824685 0,-4.97551 4.75742,0 4.75741,0 11.60533,-11.64749 11.60534,-11.6475 0,5.05641 0,5.05638 -11.56694,11.56662 -11.56693,11.56659 -4.79581,0 -4.79582,0 z m 12.05408,-16.8757 11.38688,-11.38725 4.30869,0 4.30868,0 -11.38689,11.38725 -11.38689,11.38724 -4.30869,0 -4.30869,0 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p44":
                        // console.log('pier_a4b1c1d4.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 6.81909,119.41713 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.23198,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 4.92421,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 6.81977,110.52314 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 11.53629,102.0865 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="m 0,92.824685 0,-4.97551 4.75742,0 4.75741,0 11.60533,-11.64749 11.60534,-11.6475 0,5.05641 0,5.05638 -11.56694,11.56662 -11.56693,11.56659 -4.79581,0 -4.79582,0 z m 12.05408,-16.8757 11.38688,-11.38725 4.30869,0 4.30868,0 -11.38689,11.38725 -11.38689,11.38724 -4.30869,0 -4.30869,0 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p4x":
                        // console.log('pier_axb1c1d4.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 12.05107,119.41713 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 6.81977,110.52314 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 11.53629,102.0865 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="m 0,92.824685 0,-4.97551 4.75742,0 4.75741,0 11.60533,-11.64749 11.60534,-11.6475 0,5.05641 0,5.05638 -11.56694,11.56662 -11.56693,11.56659 -4.79581,0 -4.79582,0 z m 12.05408,-16.8757 11.38688,-11.38725 4.30869,0 4.30868,0 -11.38689,11.38725 -11.38689,11.38724 -4.30869,0 -4.30869,0 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;

                    case "p51":
                        // console.log('pier_a1b1c1d5.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 15.275972,132.83955 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 9.246672,123.91397 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 13.963192,115.47733 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="m 2.427962,106.22329 0,-4.97551 4.75741,0 4.75741,0 11.60533,-11.647481 11.60534,-11.647503 0,5.056413 0,5.05638 -11.56694,11.566616 -11.56694,11.566585 -4.79581,0 -4.7958,0 z M 1.237432,95.400289 0,90.373499 l 1.111392,0 1.1114,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.07718,0 1.07717,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.11652,0 1.11653,0 -0.54215,2.17998 c -0.29819,1.19899 -0.8535,3.46107 -1.23405,5.0268 l -0.69192,2.846821 -4.73192,0 -4.73193,0 z m 11.50351,4.00091 c 0.0398,-0.19746 0.52806,-2.27489 1.08496,-4.61645 0.55688,-2.34156 1.0365,-4.35894 1.06581,-4.48306 0.0494,-0.20916 0.0118,-0.22794 -0.51277,-0.25648 l -0.56605,-0.0307 6.02965,-6.02818 6.02965,-6.028153 4.28179,0.0268 4.2818,0.0268 -10.88363,10.874293 c -9.4241,9.416 -10.87392,10.826136 -10.81121,10.51523 z m 11.68132,-27.185773 -1.23743,-5.0268 1.1114,0 1.11139,0 0,-1.33365 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33365 1.07717,0 1.07717,0 0,-1.33365 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33365 1.11653,0 1.11653,0 -0.54214,2.17999 c -0.29819,1.19901 -0.85351,3.46104 -1.23406,5.0268 l -0.69191,2.84681 -4.73194,0 -4.73192,0 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p52":
                        // console.log('pier_a2b1c1d5.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 9.231402,132.80957 0,-5.53973 1.84657,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84657,0 z m 15.28556,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 9.246672,123.91397 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 13.963192,115.47733 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="m 2.427962,106.22329 0,-4.97551 4.75741,0 4.75741,0 11.60533,-11.647481 11.60534,-11.647503 0,5.056413 0,5.05638 -11.56694,11.566616 -11.56694,11.566585 -4.79581,0 -4.7958,0 z M 1.237432,95.400289 0,90.373499 l 1.111392,0 1.1114,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.07718,0 1.07717,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.11652,0 1.11653,0 -0.54215,2.17998 c -0.29819,1.19899 -0.8535,3.46107 -1.23405,5.0268 l -0.69192,2.846821 -4.73192,0 -4.73193,0 z m 11.50351,4.00091 c 0.0398,-0.19746 0.52806,-2.27489 1.08496,-4.61645 0.55688,-2.34156 1.0365,-4.35894 1.06581,-4.48306 0.0494,-0.20916 0.0118,-0.22794 -0.51277,-0.25648 l -0.56605,-0.0307 6.02965,-6.02818 6.02965,-6.028153 4.28179,0.0268 4.2818,0.0268 -10.88363,10.874293 c -9.4241,9.416 -10.87392,10.826136 -10.81121,10.51523 z m 11.68132,-27.185773 -1.23743,-5.0268 1.1114,0 1.11139,0 0,-1.33365 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33365 1.07717,0 1.07717,0 0,-1.33365 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33365 1.11653,0 1.11653,0 -0.54214,2.17999 c -0.29819,1.19901 -0.85351,3.46104 -1.23406,5.0268 l -0.69191,2.84681 -4.73194,0 -4.73192,0 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p53":
                        // console.log('pier_a3b1c1d5.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 9.227682,132.78506 0,-5.53973 1.84657,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84657,0 z m 7.69407,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z m 7.59149,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 9.246672,123.91397 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 13.963192,115.47733 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="m 2.427962,106.22329 0,-4.97551 4.75741,0 4.75741,0 11.60533,-11.647481 11.60534,-11.647503 0,5.056413 0,5.05638 -11.56694,11.566616 -11.56694,11.566585 -4.79581,0 -4.7958,0 z M 1.237432,95.400289 0,90.373499 l 1.111392,0 1.1114,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.07718,0 1.07717,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.11652,0 1.11653,0 -0.54215,2.17998 c -0.29819,1.19899 -0.8535,3.46107 -1.23405,5.0268 l -0.69192,2.846821 -4.73192,0 -4.73193,0 z m 11.50351,4.00091 c 0.0398,-0.19746 0.52806,-2.27489 1.08496,-4.61645 0.55688,-2.34156 1.0365,-4.35894 1.06581,-4.48306 0.0494,-0.20916 0.0118,-0.22794 -0.51277,-0.25648 l -0.56605,-0.0307 6.02965,-6.02818 6.02965,-6.028153 4.28179,0.0268 4.2818,0.0268 -10.88363,10.874293 c -9.4241,9.416 -10.87392,10.826136 -10.81121,10.51523 z m 11.68132,-27.185773 -1.23743,-5.0268 1.1114,0 1.11139,0 0,-1.33365 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33365 1.07717,0 1.07717,0 0,-1.33365 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33365 1.11653,0 1.11653,0 -0.54214,2.17999 c -0.29819,1.19901 -0.85351,3.46104 -1.23406,5.0268 l -0.69191,2.84681 -4.73194,0 -4.73192,0 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p54":
                        // console.log('pier_a4b1c1d5.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 9.226322,132.78396 0,-5.53972 1.84658,0 1.84658,0 0,5.53972 0,5.53974 -1.84658,0 -1.84658,0 z m 5.23198,0 0,-5.53972 1.84658,0 1.84658,0 0,5.53972 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53972 1.84658,0 1.84658,0 0,5.53972 0,5.53974 -1.84658,0 -1.84658,0 z m 4.92421,0 0,-5.53972 1.84658,0 1.84658,0 0,5.53972 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 9.246672,123.91397 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 13.963192,115.47733 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="m 2.427962,106.22329 0,-4.97551 4.75741,0 4.75741,0 11.60533,-11.647481 11.60534,-11.647503 0,5.056413 0,5.05638 -11.56694,11.566616 -11.56694,11.566585 -4.79581,0 -4.7958,0 z M 1.237432,95.400289 0,90.373499 l 1.111392,0 1.1114,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.07718,0 1.07717,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.11652,0 1.11653,0 -0.54215,2.17998 c -0.29819,1.19899 -0.8535,3.46107 -1.23405,5.0268 l -0.69192,2.846821 -4.73192,0 -4.73193,0 z m 11.50351,4.00091 c 0.0398,-0.19746 0.52806,-2.27489 1.08496,-4.61645 0.55688,-2.34156 1.0365,-4.35894 1.06581,-4.48306 0.0494,-0.20916 0.0118,-0.22794 -0.51277,-0.25648 l -0.56605,-0.0307 6.02965,-6.02818 6.02965,-6.028153 4.28179,0.0268 4.2818,0.0268 -10.88363,10.874293 c -9.4241,9.416 -10.87392,10.826136 -10.81121,10.51523 z m 11.68132,-27.185773 -1.23743,-5.0268 1.1114,0 1.11139,0 0,-1.33365 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33365 1.07717,0 1.07717,0 0,-1.33365 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33365 1.11653,0 1.11653,0 -0.54214,2.17999 c -0.29819,1.19901 -0.85351,3.46104 -1.23406,5.0268 l -0.69191,2.84681 -4.73194,0 -4.73192,0 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p5x":
                        // console.log('pier_axb1c1d5.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 14.458302,132.78396 0,-5.53972 1.84658,0 1.84658,0 0,5.53972 0,5.53974 -1.84658,0 -1.84658,0 z m 5.12939,0 0,-5.53972 1.84658,0 1.84658,0 0,5.53972 0,5.53974 -1.84658,0 -1.84658,0 z" id="path5" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 9.246672,123.91397 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 13.963192,115.47733 0,-4.95029 4.77033,-4.7695 4.77032,-4.7695 0,9.71977 0,9.71979 -4.77032,0 -4.77033,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_d1 + '"  d="m 2.427962,106.22329 0,-4.97551 4.75741,0 4.75741,0 11.60533,-11.647481 11.60534,-11.647503 0,5.056413 0,5.05638 -11.56694,11.566616 -11.56694,11.566585 -4.79581,0 -4.7958,0 z M 1.237432,95.400289 0,90.373499 l 1.111392,0 1.1114,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.07718,0 1.07717,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.11652,0 1.11653,0 -0.54215,2.17998 c -0.29819,1.19899 -0.8535,3.46107 -1.23405,5.0268 l -0.69192,2.846821 -4.73192,0 -4.73193,0 z m 11.50351,4.00091 c 0.0398,-0.19746 0.52806,-2.27489 1.08496,-4.61645 0.55688,-2.34156 1.0365,-4.35894 1.06581,-4.48306 0.0494,-0.20916 0.0118,-0.22794 -0.51277,-0.25648 l -0.56605,-0.0307 6.02965,-6.02818 6.02965,-6.028153 4.28179,0.0268 4.2818,0.0268 -10.88363,10.874293 c -9.4241,9.416 -10.87392,10.826136 -10.81121,10.51523 z m 11.68132,-27.185773 -1.23743,-5.0268 1.1114,0 1.11139,0 0,-1.33365 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33365 1.07717,0 1.07717,0 0,-1.33365 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33365 1.11653,0 1.11653,0 -0.54214,2.17999 c -0.29819,1.19901 -0.85351,3.46104 -1.23406,5.0268 l -0.69191,2.84681 -4.73194,0 -4.73192,0 z" id="path11" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;

                    case "p6x":
                        // console.log('pier_a2b2c2d6.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="cccccccccccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 0.00254,130.31788 0,-5.53975 1.846572,0 1.84658,0 0,5.53975 0,5.53975 -1.84658,0 -1.846572,0 z m 15.285572,0 0,-5.53975 1.84658,0 1.84658,0 0,5.53975 0,5.53975 -1.84658,0 -1.84658,0 z" id="path7" /> <path sodipodi:nodetypes="cccccccccccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:' + color_p_a2 + '"  d="m 23.174842,107.33842 0,-5.53974 1.84659,0 1.84657,0 0,5.53974 0,5.53974 -1.84657,0 -1.84659,0 z m 15.28558,0 0,-5.53974 1.84657,0 1.84658,0 0,5.53974 0,5.53974 -1.84658,0 -1.84657,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 0,121.39516 0,-2.66728 9.489372,0 9.48936,0 0,2.66728 0,2.66727 -9.48936,0 -9.489372,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:' + color_p_b2 + '"  d="m 23.165112,98.400894 0,-2.66728 9.48937,0 9.48936,0 0,2.66728 0,2.667296 -9.48936,0 -9.48937,0 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 4.705012,108.15196 0,-9.745846 4.77034,0 4.77033,0 0,9.745846 0,9.74584 -4.77033,0 -4.77034,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:' + color_p_c2 + '"  d="m 27.909222,89.976064 0,-4.950268 4.77032,-4.76951 4.77033,-4.7695 0,9.71977 0,9.719788 -4.77033,0 -4.77032,0 z" id="path17" /> <path sodipodi:nodetypes="cccccccccccccccccccccccccccccccccsscccccscccccccsccccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="c_pierhead" style="fill:' + color_p_d1 + '"  d="m 4.713562,92.820694 0,-4.9755 4.75741,0 4.75741,0 11.60533,-11.647507 11.60534,-11.64748 0,5.0564 0,5.05639 -11.56694,11.56661 -11.56694,11.566587 -4.79581,0 -4.7958,0 z m 12.05407,-16.875687 11.38688,-11.38724 4.30869,0 4.30868,0 -11.38688,11.38724 -11.3869,11.387257 -4.30869,0 -4.30868,0 z" id="path19" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;

                    case "p7x":
                        // console.log('pier_a2b2c2d7.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="cccccccccccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 0.00254,143.56788 0,-5.53975 1.846572,0 1.84658,0 0,5.53975 0,5.53975 -1.84658,0 -1.846572,0 z m 15.285572,0 0,-5.53975 1.84658,0 1.84658,0 0,5.53975 0,5.53975 -1.84658,0 -1.84658,0 z" id="path7" /> <path sodipodi:nodetypes="cccccccccccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:' + color_p_a2 + '"  d="m 23.174842,120.58842 0,-5.53974 1.84659,0 1.84657,0 0,5.53974 0,5.53974 -1.84657,0 -1.84659,0 z m 15.28558,0 0,-5.53974 1.84657,0 1.84658,0 0,5.53974 0,5.53974 -1.84658,0 -1.84657,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_b1 + '"  d="m 0,134.64516 0,-2.66728 9.489372,0 9.48936,0 0,2.66728 0,2.66727 -9.48936,0 -9.489372,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:' + color_p_b2 + '"  d="m 23.165112,111.65089 0,-2.66728 9.48937,0 9.48936,0 0,2.66728 0,2.6673 -9.48936,0 -9.48937,0 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_c1 + '"  d="m 4.705012,121.40196 0,-9.74585 4.77034,0 4.77033,0 0,9.74585 0,9.74584 -4.77033,0 -4.77034,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:' + color_p_c2 + '"  d="m 27.909222,103.22606 0,-4.950264 4.77032,-4.76951 4.77033,-4.7695 0,9.71977 0,9.719784 -4.77033,0 -4.77032,0 z" id="path17" /> <path sodipodi:nodetypes="cccccccccccccccccccccccccccccccccsscccccscccccccsccccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="c_pierhead" style="fill:' + color_p_d1 + '"  d="m 4.708962,106.07189 0,-4.97551 4.75741,0 4.75741,0 11.60533,-11.647489 11.60534,-11.6475 0,5.05641 0,5.05638 -11.56694,11.56662 -11.56694,11.566589 -4.79581,0 -4.7958,0 z m -1.19053,-10.823009 -1.23743,-5.02679 1.11139,0 1.1114,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.07718,0 1.07717,0 0,-1.33365 0,-1.33364 1.94917,0 1.94916,0 0,1.33364 0,1.33365 1.11652,0 1.11653,0 -0.54215,2.17998 c -0.29819,1.19899 -0.8535,3.46107 -1.23405,5.0268 l -0.69192,2.846819 -4.73192,0 -4.73193,0 z m 11.50351,4.00091 c 0.0398,-0.19746 0.52806,-2.27489 1.08496,-4.61645 0.55688,-2.34156 1.0365,-4.35894 1.06581,-4.48306 0.0494,-0.20916 0.0118,-0.22794 -0.51277,-0.25648 l -0.56605,-0.0307 6.02965,-6.02818 6.02965,-6.02815 4.28179,0.0268 4.2818,0.0268 -10.88363,10.87429 c -9.4241,9.416 -10.87392,10.82614 -10.81121,10.51523 z m 11.68132,-27.18577 -1.23743,-5.0268 1.1114,0 1.11139,0 0,-1.33365 0,-1.33363 1.94916,0 1.94917,0 0,1.33363 0,1.33365 1.07717,0 1.07717,0 0,-1.33365 0,-1.33363 1.94917,0 1.94916,0 0,1.33363 0,1.33365 1.11653,0 1.11653,0 -0.54214,2.17999 c -0.29819,1.19901 -0.85351,3.46104 -1.23406,5.0268 l -0.69191,2.84681 -4.73194,0 -4.73192,0 z" id="path19" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;

                    case "p8111":
                        // console.log('pier_a11b2c2d811.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 6.029302,132.99141 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_a2 + '"  d="m 0,124.06583 0,-2.66727 9.489362,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.489362,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_b1 + '"  d="m 4.719482,110.83423 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_b2 + '"  d="m 3.534682,95.238391 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:' + color_p_c1 + '"  d="m 28.505802,109.81305 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:' + color_p_c2 + '"  d="m 22.476502,100.88747 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path17" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:' + color_p_d1 + '"  d="m 27.195982,87.65587 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path19" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="b_pierhead" style="fill:' + color_p_d2 + '"  d="m 26.011182,72.060031 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path21" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p8112":
                        // console.log('pier_a11b2c2d812.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 6.029302,132.99141 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_a2 + '"  d="m 0,124.06583 0,-2.66727 9.489362,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.489362,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_b1 + '"  d="m 4.719482,110.83423 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_b2 + '"  d="m 3.534682,95.238391 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:' + color_p_c1 + '"  d="m 30.450332,109.81305 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:' + color_p_c2 + '"  d="m 24.421032,100.88747 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path17" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:' + color_p_d1 + '"  d="m 29.140512,87.65587 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path19" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="b_pierhead" style="fill:' + color_p_d2 + '"  d="m 25.520122,75.164602 c -2.00304,-1.04923 -3.67543,-1.9383 -3.71644,-1.97567 -0.0411,-0.0375 -0.213,-1.24394 -0.38217,-2.68121 -0.16918,-1.43728 -0.33466,-2.80944 -0.36772,-3.04923 l -0.0601,-0.436 0.51922,0 0.51922,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94916,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.02679 -4.74467,-9.1e-4 -4.74469,-9.1e-4 -3.64187,-1.90769 z" id="path21" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p8121":
                        // console.log('pier_a11b2c2d821.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 9.456652,132.99053 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_a2 + '"  d="m 3.427342,124.06495 0,-2.66728 9.48937,0 9.48938,0 0,2.66728 0,2.66729 -9.48938,0 -9.48937,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_b1 + '"  d="m 8.146822,110.83334 0,-9.74585 4.77033,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77033,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_b2 + '"  d="m 4.526432,98.342058 c -2.00304,-1.04923 -3.67543,-1.9383 -3.71644,-1.97567 -0.0411,-0.0375 -0.213002,-1.24394 -0.382172,-2.68121 -0.16918,-1.43728 -0.33466,-2.80944 -0.36772,-3.04923 L 0,90.199948 l 0.51922,0 0.519222,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.026802 -4.74467,-9.1e-4 -4.7447,-9.1e-4 -3.64187,-1.907702 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:' + color_p_c1 + '"  d="m 28.459182,109.81223 0,-5.53973 3.38539,0 3.3854,0 0,5.53973 0,5.53974 -3.3854,0 -3.38539,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:' + color_p_c2 + '"  d="m 22.429882,100.88665 0,-2.667277 9.48936,0 9.48937,0 0,2.667277 0,2.66729 -9.48937,0 -9.48936,0 z" id="path17" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:' + color_p_d1 + '"  d="m 27.149362,87.655043 0,-9.745848 4.77032,0 4.77034,0 0,9.745848 0,9.74583 -4.77034,0 -4.77032,0 z" id="path19" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="b_pierhead" style="fill:' + color_p_d2 + '"  d="m 25.964562,72.059206 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path21" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p8211":
                        // console.log('pier_a22b2c2d811.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 0,132.96191 0,-5.53973 1.846572,0 1.84659,0 0,5.53973 0,5.53975 -1.84659,0 -1.846572,0 z m 15.285562,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53975 -1.84658,0 -1.84658,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_a2 + '"  d="m 0.02178,124.06583 0,-2.66727 9.489362,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.489362,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_b1 + '"  d="m 4.741262,110.83423 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_b2 + '"  d="m 3.556462,95.238391 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:' + color_p_c1 + '"  d="m 22.482202,109.79938 0,-5.53973 1.84657,0 1.84659,0 0,5.53973 0,5.53974 -1.84659,0 -1.84657,0 z m 15.28556,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:' + color_p_c2 + '"  d="m 22.498282,100.88747 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path17" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:' + color_p_d1 + '"  d="m 27.217762,87.65587 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path19" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="b_pierhead" style="fill:' + color_p_d2 + '"  d="m 26.032962,72.060031 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path21" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p8212":
                        // console.log('pier_a22b2c2d812.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 0.00787,132.96728 0,-5.53973 1.846572,0 1.84659,0 0,5.53973 0,5.53974 -1.84659,0 -1.846572,0 z m 15.285562,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_a2 + '"  d="m 0,124.06583 0,-2.66727 9.489362,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.489362,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_b1 + '"  d="m 4.719482,110.83423 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_b2 + '"  d="m 3.534682,95.238391 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:' + color_p_c1 + '"  d="m 24.412522,109.80475 0,-5.53973 1.84657,0 1.84659,0 0,5.53973 0,5.53974 -1.84659,0 -1.84657,0 z m 15.28556,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:' + color_p_c2 + '"  d="m 24.421032,100.88747 0,-2.66727 9.48936,0 9.48937,0 0,2.66727 0,2.66729 -9.48937,0 -9.48936,0 z" id="path17" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:' + color_p_d1 + '"  d="m 29.140512,87.65587 0,-9.74585 4.77032,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77032,0 z" id="path19" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="b_pierhead" style="fill:' + color_p_d2 + '"  d="m 25.520122,75.164602 c -2.00304,-1.04923 -3.67543,-1.9383 -3.71644,-1.97567 -0.0411,-0.0375 -0.213,-1.24394 -0.38217,-2.68121 -0.16918,-1.43728 -0.33466,-2.80944 -0.36772,-3.04923 l -0.0601,-0.436 0.51922,0 0.51922,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94916,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.02679 -4.74467,-9.1e-4 -4.74469,-9.1e-4 -3.64187,-1.90769 z" id="path21" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                    case "p8221":
                        // console.log('pier_a22b2c2d821.svg');
                        $('div#pier_id_' + p_pid + ' .pier span.content').append('<svg class="widebody" viewBox="0 0 150 86" width="150" height="86"> <g transform="translate(0,-64)" style="display:inline" inkscape:label="p1" id="g4193" inkscape:groupmode="layer"> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pile" style="fill:' + color_p_a1 + '"  d="m 3.433742,132.97789 0,-5.53973 1.84657,0 1.84659,0 0,5.53973 0,5.53974 -1.84659,0 -1.84657,0 z m 15.28556,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path7" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pilecap" style="fill:' + color_p_a2 + '"  d="m 3.427342,124.06495 0,-2.66728 9.48937,0 9.48938,0 0,2.66728 0,2.66729 -9.48938,0 -9.48937,0 z" id="path9" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="a_pier" style="fill:' + color_p_b1 + '"  d="m 8.146822,110.83334 0,-9.74585 4.77033,0 4.77034,0 0,9.74585 0,9.74583 -4.77034,0 -4.77033,0 z" id="path11" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="a_pierhead" style="fill:' + color_p_b2 + '"  d="m 4.526432,98.342058 c -2.00304,-1.04923 -3.67543,-1.9383 -3.71644,-1.97567 -0.0411,-0.0375 -0.213002,-1.24394 -0.382172,-2.68121 -0.16918,-1.43728 -0.33466,-2.80944 -0.36772,-3.04923 L 0,90.199948 l 0.51922,0 0.519222,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 1.07717,0 1.07717,0 0,-1.33364 0,-1.33364 1.94917,0 1.94917,0 0,1.33364 0,1.33364 3.3341,0 3.3341,0 0,5.02681 0,5.026802 -4.74467,-9.1e-4 -4.7447,-9.1e-4 -3.64187,-1.907702 z" id="path13" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pile" style="fill:' + color_p_c1 + '"  d="m 22.468792,109.81536 0,-5.53973 1.84657,0 1.84659,0 0,5.53973 0,5.53974 -1.84659,0 -1.84657,0 z m 15.28556,0 0,-5.53973 1.84658,0 1.84658,0 0,5.53973 0,5.53974 -1.84658,0 -1.84658,0 z" id="path15" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pilecap" style="fill:' + color_p_c2 + '"  d="m 22.429882,100.88665 0,-2.667277 9.48936,0 9.48937,0 0,2.667277 0,2.66729 -9.48937,0 -9.48936,0 z" id="path17" /> <path sodipodi:nodetypes="ccccccccc" inkscape:connector-curvature="0" class="b_pier" style="fill:' + color_p_d1 + '"  d="m 27.149362,87.655043 0,-9.745848 4.77032,0 4.77034,0 0,9.745848 0,9.74583 -4.77034,0 -4.77032,0 z" id="path19" /> <path sodipodi:nodetypes="ccccccccccccccccccccsscccc" inkscape:connector-curvature="0" class="b_pierhead" style="fill:' + color_p_d2 + '"  d="m 25.964562,72.059206 -1.23742,-5.0268 1.11138,0 1.11139,0 0,-1.333629 0,-1.333648 1.94917,0 1.94917,0 0,1.333648 0,1.333629 1.07716,0 1.07718,0 0,-1.333629 0,-1.333648 1.94916,0 1.94917,0 0,1.333648 0,1.333629 1.11653,0 1.11653,0 -0.54216,2.17999 c -0.29817,1.19899 -0.8535,3.46106 -1.23405,5.02681 l -0.6919,2.846809 -4.73194,0 -4.73192,0 z" id="path21" /> </g> </svg>');
                        // console.log(p_pid+' | '+p_nid+' | '+p_sid);
                        break;
                }
                // span_type
                switch (p_st) {
                    case "ss":
                        $('div#pier_id_' + p_pid + ' .span span.content').append('<span class="span_station"></span>');
                        $('div#pier_id_' + p_pid + ' div.marker_a span.content').attr('style', 'margin-left:0px;');
                        $('div#pier_id_' + p_pid + ' div.marker_b span.content').attr('style', 'margin-left:0px;');
                        break;
                    case "s1":
                        $('div#pier_id_' + p_pid + ' .span span.content').append('<svg viewBox="0 0 150 39.500001" width="150" height="39.5"> <g inkscape:label="span 3" inkscape:groupmode="layer" id="g4158" transform="translate(0,-1012.8621)" style="display:inline"> <path inkscape:connector-curvature="0" class="a_span" style="fill:' + color_p_s1 + '"  d="m 0.180591,1045.39 0,6.3559 115.677959,0 0,-6.3559 z" id="path7" /> <path inkscape:connector-curvature="0" class="a_parapet" style="fill:' + color_p_p1 + '"  d="m 0,1041.3959 0,2.5857 116.03914,0 0,-2.5857 z" id="path9" /> </g> </svg>');
                        break;
                    case "s2":
                        $('div#pier_id_' + p_pid + ' .span span.content').append('<svg viewBox="0 0 150 39.500001" width="150" height="39.5"> <g inkscape:label="span 3" inkscape:groupmode="layer" id="g4158" transform="translate(0,-1012.8621)" style="display:inline"> <path inkscape:connector-curvature="0" class="a_span" style="fill:' + color_p_s1 + '"  d="m 0.304926,1045.39 0,6.3559 115.677964,0 0,-6.3559 z" id="path7" /> <path inkscape:connector-curvature="0" class="a_parapet" style="fill:' + color_p_p1 + '"  d="m 0.124335,1041.3959 0,2.5857 116.039145,0 0,-2.5857 z" id="path9" /> </g> <g transform="translate(0,-1012.8621)" id="g4152" inkscape:groupmode="layer" inkscape:label="span 2" style="display:inline"> <path inkscape:connector-curvature="0" class="b_span" style="fill:' + color_p_s2 + '"  d="m 0.180591,1031.3782 0,6.3559 115.677979,0 0,-6.3559 z" id="path12" /> <path inkscape:connector-curvature="0" class="b_parapet" style="fill:' + color_p_p2 + '"  d="m 0,1027.3841 0,2.5857 116.03916,0 0,-2.5857 z" id="path14" /> </g> </svg>');
                        break;
                    case "s3":
                        $('div#pier_id_' + p_pid + ' .span span.content').append('<svg viewBox="0 0 150 39.500001" width="150" height="39.5"> <g inkscape:label="span 3" inkscape:groupmode="layer" id="g4158" transform="translate(0,-1012.8621)" style="display:inline"> <path inkscape:connector-curvature="0" class="a_span" style="fill:' + color_p_s1 + '"  d="m 0.50075,1045.39 0,6.3559 115.67797,0 0,-6.3559 z" id="path7" /> <path inkscape:connector-curvature="0" class="a_parapet" style="fill:' + color_p_p1 + '"  d="m 0.320159,1041.3959 0,2.5857 116.039151,0 0,-2.5857 z" id="path9" /> </g> <g transform="translate(0,-1012.8621)" id="g4152" inkscape:groupmode="layer" inkscape:label="span 2" style="display:inline"> <path inkscape:connector-curvature="0" class="b_span" style="fill:' + color_p_s2 + '"  d="m 0.376415,1031.3782 0,6.3559 115.677985,0 0,-6.3559 z" id="path12" /> <path inkscape:connector-curvature="0" class="b_parapet" style="fill:' + color_p_p2 + '"  d="m 0.195824,1027.3841 0,2.5857 116.039166,0 0,-2.5857 z" id="path14" /> </g> <g inkscape:label="span 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-1012.8621)" style="display:inline"> <path inkscape:connector-curvature="0" class="c_span" style="fill:' + color_p_s3 + '"  d="m 0.180591,1017.3622 0,6.3559 115.677979,0 0,-6.3559 z" id="path17" /> <path inkscape:connector-curvature="0" class="c_parapet" style="fill:' + color_p_p3 + '"  d="m 0,1013.3681 0,2.5857 116.03916,0 0,-2.5857 z" id="path19" /> </g> </svg>');
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

                            function f_color_sbg(a) {
                                if (a == 0) {
                                    color_sbg = color_1;
                                    return color_sbg;
                                } else if (a == 1) {
                                    color_sbg = color_3;
                                    return color_sbg;
                                }else{
                                    color_sbg = color_1;
                                }
                            }

                            $('div#pier_id_' + p_pid + ' .span span.content').append('<span id="' + p_pid + '_' + p_sbg_id[sbg_count] + '" class="sbg ' + p_sbg_lr[sbg_count] + '" style="width:' + default_sbg_width + 'px;background:' + color_sbg + '"></span>');
                        }
                        $('div#pier_id_' + p_pid + ' div.marker_a span.content').attr('style', 'margin-left:0;width:' + marker_width + 'px;');
                        $('div#pier_id_' + p_pid + ' div.marker_b span.content').attr('style', 'width:' + marker_width + 'px;');
                        // $('div#pier_id_'+p_pid+' div.pier_id span.content').attr('style', 'margin-left:'+marker_label+'px;');

                        sbg_left_separation = $('div#pier_id_' + p_pid + ' span.sbg.left').length;
                        sbg_right_separation = sbg_left_separation + 1;
                        $('div#pier_id_' + p_pid + ' span.sbg.left:nth-child(' + sbg_left_separation + ')').addClass('sbg_left_separation').append(']');
                        $('div#pier_id_' + p_pid + ' span.sbg.right:nth-child(' + sbg_right_separation + ')').addClass('sbg_right_separation').append('[');
                        break;
                }
            }

    }else{
            $('pier_plate_v201').text("No Data Available Here");

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
        that.$el.find('.portlet_content .table tbody').mCustomScrollbar({theme:"dark-3"});
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
        var that = this;
        var html = mpxd.getTemplate(that.data.type);
        template = _.template(html, {data: that.data});
        that.$el.html(template);
        that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
        that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
        if(that.data.data[0]){
            var procdata = that.data.data[0].data.procurement;
            var awarded = procdata.awarded;
            var yetcalled = procdata.yetcalled;
            var calledin = procdata.calledin;
        }else{
            var awarded =80;
            var yetcalled = 4;
            var calledin =2;
        }
        var total = awarded + yetcalled + calledin;
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
                    ['Awarded', awarded],
                    ['Yet to be called', yetcalled],
                    ['Called in & In Progress', calledin]
                ],
                innerSize: '90%'
            }],
            credits: {enabled: false}
        });

    }
});
mpxd.modules.viaducts.spi = Backbone.View.extend({
    initialize: function (options) {
        this.data = options.data;
        this.render();
    }, render: function () {
        var spiprog = 0 ;
        var that = this;
        var html = mpxd.getTemplate(that.data.type);
        template = _.template(html, {data: that.data});
        that.$el.html(template);
 /*       that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
        that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});*/
        if(that.data.data[1] !=null){
            if((Object.keys(that.data.data[1]).length) > 0) {
              spiprog=parseInt(that.data.data[1].spi) ;
            }

            }
        Highcharts.setOptions({
            colors: ['#f66','#ff0','#0a5']
        });
        that.$el.find('#chart_' + that.data.id).highcharts({
            title: {
                text: '<b>Schedule Performance Index [SPI]</b>',
                style: {
                    fontSize: 14
                }
            },
            credits: false,
            tooltip: {
                enabled:false,
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            pane: {
                center: ['50%', '62%'],
                size: '100%',
                startAngle: -90,
                endAngle: 90,
                background: {
                    borderWidth: 0,
                    backgroundColor: 'none',
                    innerRadius: '70%',
                    outerRadius: '100%',
                    shape: 'arc'
                }
            },
            yAxis: [{
                lineWidth: 0,
                min: 0,
                max: 100,
                minorTickLength: 0,
                tickLength: 0,
                tickWidth: 0,
                labels: {
                    enabled: false
                },
                title: {
                    text: ''
                },
                pane: 0

            }],
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: false
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '62%']
                },
                gauge: {
                    dataLabels: {
                        enabled: true
                    },
                    dial: {
                        radius: '100%'
                    }
                }
            },

            series: [{
                type: 'pie',
                name: '',
                innerSize: '50%',
                data: [
                    [50],
                    [25],
                    [25],
                ]
            },{
                type: 'gauge',
                data: [spiprog],
                dial: {
                    rearLength: 0,
                    backgroundColor:'#fff',
                    borderColor:'#fff'
                },
                dataLabels: {
                    y:-70,
                    borderWidth: 0,
                    style: {
                        fontSize: '20px'
                    },
                    format:'{point.y}%'
                }
            }],
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