mpxd.constructors.page_info_system = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}

mpxd.constructors.system_design_1 = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}

mpxd.constructors.system_design_2 = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}

mpxd.constructors.system_design_3 = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}
mpxd.constructors.testing_commisioning_1 = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}

mpxd.constructors.testing_commisioning_2 = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}

mpxd.constructors.testing_commisioning_3 = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}

mpxd.constructors.testing_commisioning_4 = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}

mpxd.constructors.procurement_manufacturing_1 = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}

mpxd.constructors.procurement_manufacturing_2 = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}

mpxd.constructors.procurement_manufacturing_3 = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}

mpxd.constructors.procurement_manufacturing_4 = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}

mpxd.constructors.procurement_manufacturing_5 = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}

mpxd.constructors.installation_1 = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}

mpxd.constructors.installation_2 = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}

mpxd.constructors.installation_3 = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}

mpxd.constructors.delivery_1 = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}
mpxd.constructors.delivery_2 = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}
mpxd.constructors.delivery_3 = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}
mpxd.constructors.delivery_4 = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}
mpxd.constructors.delivery_5 = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}
mpxd.constructors.le = function (data) {
    mpxd.modules.general.GenerateGeneralview(data);
}

mpxd.modules.double_pier_view = {};
mpxd.modules.double_pier_view.View = Backbone.View.extend({
    initialize: function (options) {
        this.data = options.data;
        this.render();
    },
    render: function () {
        var that = this;
        var html = mpxd.getTemplate("double_pier_view");

        template = _.template(html, {data: that.data});
        that.$el.html(template);
    }
});

mpxd.constructors.double_pier_view = function (items) {
    var el = "#portlet_" + items.id
    return new mpxd.modules.double_pier_view.View({data: items, el: el});
}


mpxd.modules.single_pier_view = {};
mpxd.modules.single_pier_view.View = Backbone.View.extend({
    initialize: function (options) {
        this.data = options.data;
        this.render();
    },
    render: function () {
        var that = this;
        var html = mpxd.getTemplate("single_pier_view");

        template = _.template(html, {data: that.data});
        that.$el.html(template);
    }
});

mpxd.constructors.single_pier_view = function (items) {
    var el = "#portlet_" + items.id
    return new mpxd.modules.single_pier_view.View({data: items, el: el});
}


mpxd.modules.viaduct_pier_view = {};
mpxd.modules.scurve = {};
mpxd.modules.scurve.ScurveView1 = Backbone.View.extend({
    initialize: function (options) {
        //console.log(options);
        this.data = options.data;
        this.render();

    },
    render: function () {
        var that = this;
        var html = mpxd.getTemplate("scurve-1");

        template = _.template(html, {data: that.data});
        that.$el.html(template);
        that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
        that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
        //that.$el.find('#chart_'+that.data.id).highcharts({
        var chart = new Highcharts.Chart({
            title: {
                text: '',
                x: -20 //center
            },
            xAxis: {
                categories: that.data.categories,
                tickInterval: 3,
                labels: {
                    rotation: 270,
                    //step: 3,
                    style: {
                        color: '#ffd461',
                        font: '11px Trebuchet MS, Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                max: 100,
                tickInterval: 10,
                labels: {
                    style: {
                        color: '#ffd461',
                        font: '11px Trebuchet MS, Verdana, sans-serif'
                    }
                },
                title: {
                    text: '%',
                    style: {
                        color: '#ffd461',
                        font: '11px Trebuchet MS, Verdana, sans-serif'
                    },
                    margin: 0
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#333'
                }],
                gridLineColor: '#333'
            },
            tooltip: {
                enabled: true,
                //formatter: function() { return this.series.name; },
                //valueSuffix: '%'
                formatter: function (evt) {
                    var current = this.series.data;
                    //console.log(current[current.length - 1].category);
                    var tooltip;
                    if (current[current.length - 1].series.name === 'Actual' && current[current.length - 1].y === this.y) {
                        tooltip = '<span style="color:#EBFF00">Current ' + this.series.name + ' (' + current[current.length - 1].category + ')</span>: <b>' + current[current.length - 1].y + '%</b><br/>';
                        return tooltip;
                    }
                    else {
                        return false
                    }
                }
            },
            legend: {
                enabled: false,
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Early',
                data: that.data.earlyData,
                color: '#04B152',
                enableMouseTracking: false
            }, {
                name: 'Late',
                data: that.data.delayedData,
                color: '#FF0000',
                enableMouseTracking: false
            }, {
                name: 'Actual',
                data: that.data.actualData,
                color: '#0070C0'
                //enableMouseTracking: false,
                /*events : {
                 mouseOver: function() {
                 console.log(this.yData[this.yData.length - 1]);
                 }
                 },*/
            }],
            plotOptions: {
                series: {
                    marker: {
                        enabled: false
                    }
                }
            },
            credits: {
                enabled: false
            },
            chart: {
                type: 'spline',
                backgroundColor: '#222',
                renderTo: 'chart_' + that.data.id
            }


        });

        /*chart.tooltip.refresh(chart.series[2].points[that.data.actualData.length - 1]); // onload render tooltip
         (function(chart) {
         chart.wrap(chart.Tooltip.prototype, 'hide', function(defaultCallback) {
         });
         }(Highcharts));*/
    }
});

mpxd.modules.scurve.ScurveView2 = Backbone.View.extend({
    initialize: function (options) {
        //console.log(options);
        this.data = options.data;
        if (typeof options.componentSelector != 'undefined') {
            this.render(options.componentSelector);
        } else {
            this.render();
        }
    },
    render: function (componentSelector) {
        // ComponentSelector is css selector for embedding S-Curve as a component, rather than a portlet
        var that = this;
        var html = mpxd.getTemplate("scurve-2");

        template = _.template(html, {data: that.data});

        if (typeof componentSelector != 'undefined') {
            var contents = $(template).find('.container');

            that.$el.find(componentSelector).html(contents);
        } else {
            that.$el.html(template);
            that.$el.find('.portlet_content').css({"height":(that.$el.find('.content').parent().parent().parent().height())-40});
            that.$el.find('.portlet_content').mCustomScrollbar({theme:"dark-3"});
        }
        var chart = new Highcharts.Chart({
            title: {
                text: '',
                x: -20 //center
            },
            xAxis: {
                categories: that.data.categories,
                tickInterval: that.data.tickInterval,
                labels: {
                    rotation: 270,
                    //step: 3,
                    style: {
                        color: '#ffd461',
                        font: '11px Trebuchet MS, Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                max: 100,
                tickInterval: 10,
                labels: {
                    style: {
                        color: '#ffd461',
                        font: '11px Trebuchet MS, Verdana, sans-serif'
                    }
                },
                title: {
                    text: '%',
                    style: {
                        color: '#ffd461',
                        font: '11px Trebuchet MS, Verdana, sans-serif'
                    }
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#333'
                }],
                gridLineColor: '#333'
            },
            tooltip: {
                enabled: true,
                //formatter: function() { return this.series.name; }
                formatter: function (evt) {
                    var current = this.series.data;
                    //console.log(current[current.length - 1].category);
                    var tooltip;
                    if (current[current.length - 1].series.name === 'Actual' && current[current.length - 1].y === this.y) {
                        tooltip = '<span style="color:#EBFF00">Current ' + this.series.name + ' (' + current[current.length - 1].category + ')</span>: <b>' + current[current.length - 1].y + '%</b><br/>';
                        return tooltip;
                    }
                    else {
                        return false
                    }
                    ;
                }
            },
            legend: {
                enabled: false,
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Early',
                data: that.data.earlyData,
                color: '#04B152',
                enableMouseTracking: false
            }, {
                name: 'Late',
                data: that.data.delayedData,
                color: '#FF0000',
                enableMouseTracking: false
            }, {
                name: 'Actual',
                data: that.data.actualData,
                color: '#0070C0'
            }],
            lang: {
                noData: "Data not available!"
            },
            noData: {
                style: {
                    fontWeight: 'bold',
                    fontSize: '14px',
                    color: '#6F6A6A'
                }
            },
            plotOptions: {
                series: {
                    marker: {
                        enabled: false
                    }
                }
            },
            credits: {
                enabled: false
            },
            chart: {
                type: 'spline',
                backgroundColor: '#222',
                renderTo: 'chart_' + that.data.id
            }


        });

        /*chart.tooltip.refresh(chart.series[2].points[that.data.actualData.length - 1]); // onload render tooltip
         (function(chart) {
         chart.wrap(chart.Tooltip.prototype, 'hide', function(defaultCallback) {
         });
         }(Highcharts));*/
    }
});


mpxd.modules.scurve.initializeScurve = function (callback) {
    /* Initialize template */

    if (typeof mpxd.modules.scurve.initializedFlag == "undefined") {
        mpxd.loadTemplateAsync(["scurve-1", "scurve-2"], callback);
        mpxd.modules.scurve.initializedFlag = true;
    } else {
        if (typeof callback == "function")
            callback();
    }
}


mpxd.constructors.scurve = function (data) {
    if (typeof data.data.id == "undefined")
        data.data.id = data.id;
    if (typeof data.data.title == "undefined")
        data.data.title = data.title;
    var s = mpxd.modules.scurve;
    s.initializeScurve(function () {
        console.log(data);
        s.GenerateScurve(data.data);
    });

}


mpxd.modules.scurve.GenerateScurve = function (items, componentSelector) {
    //mpxd.modules.scurve.initializeScurve();
    try{
        var data = items;
        var el = "#portlet_" + data.id;
        var type = data.chartType;
        var view = data.viewType;
        var trend = data.trend.toLowerCase();

        /*data.categories = [];*/
        data.currentEarly = data.currentEarly.split('%')[0];
        data.currentActual = data.currentActual.split('%')[0];
        data.currentLate = data.currentLate.split('%')[0];
        //console.log(data);

        //commented by jane
        /*if (type == "long") {
            data.categories = ["Jan/12", "Feb/12", "Mar/12", "Apr/12", "May/12", "Jun/12", "Jul/12", "Aug/12", "Sep/12", "Oct/12", "Nov/12", "Dec/12", "Jan/13", "Feb/13", "Mar/13", "Apr/13", "May/13", "Jun/13", "Jul/13", "Aug/13", "Sep/13", "Oct/13", "Nov/13", "Dec/13", "Jan/14", "Feb/14", "Mar/14", "Apr/14", "May/14", "Jun/14", "Jul/14", "Aug/14", "Sep/14", "Oct/14", "Nov/14", "Dec/14", "Jan/15", "Feb/15", "Mar/15", "Apr/15", "May/15", "Jun/15", "Jul/15", "Aug/15", "Sep/15", "Oct/15", "Nov/15", "Dec/15", "Jan/16", "Feb/16", "Mar/16", "Apr/16", "May/16", "Jun/16", "Jul/16", "Aug/16", "Sep/16", "Oct/16", "Nov/16", "Dec/16", "Jan/17", "Feb/17", "Mar/17", "Apr/17", "May/17", "Jun/17", "Jul/17"];
        } else if (type == "short") {
            data.categories = ["Jan/12", "Apr/12", "Jul/12", "Oct/12", "Jan/13", "Apr/13", "Jul/13", "Oct/13", "Jan/14", "Apr/14", "Jul/14", "Oct/14", "Jan/15", "Apr/15", "Jul/15", "Oct/15", "Jan/16", "Apr/16", "Jul/16", "Oct/16", "Jan/17", "Apr/17", "Jul/17"];
            //data.categories = ["Jan-12", "Apr-12", "Jul-12", "Oct-12", "Jan-13", "Apr-13", "Jul-13", "Oct-13", "Jan-14", "Apr-14", "Jul-14", "Oct-14", "Jan-15", "Apr-15", "Jul-15", "Oct-15", "Jan-16", "Apr-16", "Jul-16", "Oct-16", "Jan-17", "Apr-17", "Jul-17"];
        }*/

        if (typeof data.startAt != "undefined") {
            var dayms = 86400000;
            var beginningD = new Date("1/" + data.categories[0]);
            var startD = new Date("1/" + data.startAt);
            var months = monthDiff(beginningD, startD);
            var quarters = months / 4;
            if (type == "long") {
                data.earlyData.reverse();
                data.actualData.reverse();
                data.delayedData.reverse();
                for (var i = 0; i < months; i++) {
                    data.earlyData.push(null)
                    data.actualData.push(null)
                    data.delayedData.push(null)
                }
                data.earlyData.reverse();
                data.actualData.reverse();
                data.delayedData.reverse();
            } else if (type == "short") {
                data.earlyData.reverse();
                data.actualData.reverse();
                data.delayedData.reverse();
                for (var i = 0; i < quarters; i++) {
                    data.earlyData.push(null)
                    data.actualData.push(null)
                    data.delayedData.push(null)
                }
                data.earlyData.reverse();
                data.actualData.reverse();
                data.delayedData.reverse();
            }
        }

        if (trend == "up") {
            data.trendColor = "#00B050";
            data.arrowDirection = "up";
        } else if (trend == "down") {
            data.trendColor = "#FF0000"
            data.arrowDirection = "down";
        } else if (trend == "right") {
            data.trendColor = "#2E9AFE"
            data.arrowDirection = "right";
        }
    }catch(e){
        console.log("Error in S-Curve"+e);
    }
        view = (typeof view == 'undefined')?1:view;
        if (view == "1") {
            return new mpxd.modules.scurve.ScurveView1({data: data, el: el});
        } else if (view == "2") {
            return new mpxd.modules.scurve.ScurveView2({data: data, el: el, componentSelector: componentSelector});
        }
}


mpxd.modules.piechart_workpackage = {};
mpxd.modules.piechart_workpackage.View = Backbone.View.extend({
    initialize: function (options) {
        this.data = options.data;
        this.render();
    },
    render: function () {
        that = this;
        var html = mpxd.getTemplate("piechartworkpackage");

        template = _.template(html, {data: that.data});
        that.$el.html(template);
        asdasdasd = that.data;

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
})

mpxd.modules.piechart_workpackage.initialize = function (callback) {
    /* Initialize template */

    if (typeof mpxd.modules.piechart_workpackage.initializedFlag == "undefined") {
        mpxd.loadTemplateAsync(["piechartworkpackage"], callback);
        mpxd.modules.piechart_workpackage.initializedFlag = true;
    } else {
        if (typeof callback == "function")
            callback();
    }
}

mpxd.constructors.piechart_workpackage = function (items) {
    mpxd.modules.piechart_workpackage.initialize();
    var el = "#portlet_" + items.id
    return new mpxd.modules.piechart_workpackage.View({data: items, el: el});
}


/**********************************/
/*
 /*	Procurement barchart
 /*
 /**********************************/

mpxd.modules.barchart_workpackage = {};

mpxd.modules.barchart_workpackage.View = Backbone.View.extend({
    initialize: function (options) {
        this.data = options.data;
        this.render();
    },
    render: function () {
        that = this;
        var html = mpxd.getTemplate("barchartworkpackage");

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
})

mpxd.modules.barchart_workpackage.initialize = function (callback) {
    /* Initialize template */
    if (typeof mpxd.modules.barchart_workpackage.initializedFlag == "undefined") {
        mpxd.loadTemplateAsync(["barchartworkpackage"], callback);
        mpxd.modules.barchart_workpackage.initializedFlag = true;
    } else {
        if (typeof callback == "function")
            callback();
    }
}

mpxd.constructors.barchart_workpackage = function (items) {
    mpxd.modules.barchart_workpackage.initialize();
    var el = "#portlet_" + items.id
    return new mpxd.modules.barchart_workpackage.View({data: items, el: el});
}


/****************************

 GIS Map

 ***************************/

mpxd.constructors.tbm = function (items) {
    console.log(items);
}

/* Set up lookups for easier reference */
var pages_lookup_id = {};
var pages_lookup_url = {};
for (var i = 0; i < pages.length; i++) {
    pages_lookup_id[pages[i].id] = pages[i];
    pages_lookup_url[pages[i].url] = pages[i];
}
function generateBreadcrumbs(id) {
    if (typeof pages_lookup_id[id] == "undefined") {
        console.log("Unable to find page from breadcrumbs!");
        return [];
    }
    var $bc = $('#breadcrumbs');
    var $first = $bc.children('li:first');
    var crumbs = [];
    var page = pages_lookup_id[id];
    var parentid = page.parent;
    var url = page.url
    // console.log('imcalled'+url);

    crumbs.push('<a href="javascript:void(0);" onclick="loadPage(\'' + url + '\')">' + page.name + '</a>'); // last value in breadcrumbs
    while (parentid != 0) {
        url = pages_lookup_id[parentid].url;
        if (url != '#') {
                crumbs.push('<a href="javascript:void(0);" onclick="loadPage(\'' + url + '\')">' + pages_lookup_id[parentid].name + '</a>');
        } else
            crumbs.push('<a href="javascript:void(0);" style="cursor:default;color:#B2B2B2">' + pages_lookup_id[parentid].name + '</a>');
            parentid = pages_lookup_id[parentid].parent;
    }
    crumbs = crumbs.reverse();

    var $li = $("<li>" + crumbs.join("</li><li>") + "</li>");

    $bc.empty();

    $bc.append($first).append($li);

    return crumbs;


}


function ellipseTitle(text) {
    /* Not so dynamic, but temporary fix for iPad short width orientation */
    if (($(window).width() <= 768) || true) {
        var $topMenu = $('.menuzord-menu.menuzord-right.menuzord-indented'),
            $pageTitle = $('#page_title'),
            $menuZord = $('#menuzord'),
            defaultMenuWidth = 313,
            menuOuterWidth = (($topMenu.length < 1) ? defaultMenuWidth : $topMenu.outerWidth()), /* If header hasnt load use default */
            zordWidth = $menuZord.width(),
            allowance = zordWidth - menuOuterWidth - parseInt($pageTitle.css('padding-left')) - parseInt($pageTitle.css('padding-right')),
            rlen,
            rtext,
            font = $pageTitle.css('font'),
            bg = $pageTitle.css('background'),
            current = getTextWidth(text, font),
            isExpand = false,
            fexpand = function () {
                $pageTitle.css('background', '#000000');
                $pageTitle.css('border-color', '#000000');
                $pageTitle.text(text);
                isExpand = true;
            },
            fcollapse = function () {
                $pageTitle.css('background', bg);
                $pageTitle.css('border-color', 'transparent');
                $pageTitle.text(rtext);
                isExpand = false;
            },
            ftoggle = function () {
                if (isExpand)
                    fcollapse();
                else
                    fexpand();
            }
        //console.log("current = {0}\n allowence = {1}\n title = {2}\n font = {3}\n zord = {4}\n text = {5}".format(current,allowance,text,font,menuOuterWidth,text));
        if (current > allowance) {
            /* Current text longer than allowed, we try to build the ellipse text */

            for (var i = 0; i < text.length; i++) {
                rtext = text.substring(0, i) + "...";
                rlen = getTextWidth(rtext, font);
                if (rlen > allowance) {
                    rtext = text.substring(0, i - 1) + "...";
                    rlen = getTextWidth(rtext, font);
                    break;
                }
                rtext = text;
                rlen = text.length;
            }
            $pageTitle.text(rtext);
            $pageTitle.on('mouseenter', fexpand).on('mouseleave', fcollapse).on('click', ftoggle);

        } else {
            /* No worries, current is less */
            $pageTitle.text(text);

            /* Reset events */
            $pageTitle.off('mouseenter').off('mouseleave').off('click');
            //console.log('events reset');
        }

    }
}


var currentSlug = "";
var currentPageID = 0;
//var currentPage = "";


/*From: http://stackoverflow.com/questions/13721651/javascript-get-absolute-url-from-relative-escaped-url */
function relativeToAbsolute(url) {
    arr = url.split("/") // Cut the url up into a array
    while (!!~arr.indexOf("..")) { // If there still is a ".." in the array
        arr.splice(arr.indexOf("..") - 1, 2); // Remove the ".." and the element before it.
    }
    return arr.join("/"); // Rebuild the url and return it.
}
enableDays = [];
function loadPage(p, dontsavestate) {
    $("div#loading_pad").removeClass("loading_pad_gohide");
    $("div#cover").removeClass("overlay_gohide").addClass("overlay");
    reallink = p;
    p = p.substr(0, (p.indexOf('?') == -1) ? p.length : p.indexOf('?'));
    //var date = getParameterByName('date');
    $('.megamenu').fadeOut(300);
    if ((typeof p == "undefined") || (p == "") || (p == "#"))
        return;
    if ((typeof dontsavestate != "undefined") && (dontsavestate)) {
    }
    else {

        /* Cant use '../' in pushState, because it will cause a redundant pushstate to parse to the real url! Need to parse it using script to avoid this */
        var parsedlink = relativeToAbsolute(location.href + "/../../" + reallink);
        History.pushState({
            _index: History.getCurrentIndex(),
            p: reallink,
            state: "Pushstate"
        }, document.title, parsedlink);
    }
    //console.log("Pushstate!!");


    //if (

    var currentRoute = p;
    //Added by Sebin for invalid page handling.
    if(typeof pages_lookup_url[p] == "undefined"){
        console.log("invalid Page redirecting to previous page");
        // history.go(-1);
        window.location = baseURL+"404";
    }else {
        currentPageID = pages_lookup_url[p].id;
    }
    var title = pages_lookup_url[p].name;// + (((typeof data_dates[p] == "undefined") || (data_dates[p] == "")) ? "" : " ("+data_dates[p]+")");
    //$('#data_date').text(((typeof data_dates[p] == "undefined") || (data_dates[p] == "")) ? "" : data_dates[p] );
    generateBreadcrumbs(currentPageID);
    $(".breadcrumbs_title").text(title);
    // console.log(title);
    //$('#page_title').text(pages_lookup_url[p].name); // set the page title

    var currentRouteArr = currentRoute.split('/');
    currentSlug = currentRouteArr[0];
    //currentPage = currentRouteArr[1];


    //Get the date list of current slug
    mpxd.getDateList("api/get?date_list=" + currentSlug, function (result) {
        var datelist = $("#date_list").empty();
        var curr_data_date = "";


        for (var i = 0; i < result.length; i++) {
            var date = result[i].date;
            enableDays.push(date);
            if (i == 0)
                datelist.append("<li><a href='javascript:void(0)' onClick=loadPage('" + p + "')>" + date + " (Latest)</a></li>");
            else
                datelist.append("<li><a href='javascript:void(0)' onClick=loadPage('" + p + "?date=" + date + "')>" + date + "</a></li>");

            //Update the current date field
            if (getParameterByName("date") === date) {
                $("#data_date").val(moment(getParameterByName("date"), "DD-MMM-YY").format("DD MMM YYYY").toUpperCase());
                curr_data_date = date;
            }
        }
        if (getParameterByName("date").length == 0) {
            console.log(result[0].date);
            $("#data_date").val(moment(result[0].date, "DD-MMM-YY").format("DD MMM YYYY").toUpperCase());
            curr_data_date = result[0].date;
        }
        //ellipseTitle(title +" ("+ moment(curr_data_date, "DD-MMM-YY").format("DD MMMM YYYY") +")");
        var titletext = title + " (" + moment(curr_data_date, "DD-MMM-YY").format("DD MMMM YYYY") + ")";
        if (!isUseCustomPortlet) {
            ellipseTitle(titletext);
        }
        else {
            $('#page_title').text(titletext);
        }
        setPageTitle(title);


    });

    mpxd.getportletFromURL(p, function (data) {
        //$('#portlet_container').empty();

        //Draw the portlets
        drawPortlets(data);
        var j = p.split("/");
        mpxd.getData(data,function (result) {
            mpxd.resetDatasource();
            for (var i in result.data) {
                //var json = jQuery.parseJSON(result.data[i].value);
                //var name = data[i].name;
                mpxd.storeDatasourceToArray(result.data[i], (typeof result.static_data[i] == "undefined") ? "[]" : result.static_data[i]);
                //temp.push(json);
                //console.log(result.data[i].value);
            }
            // console.log(result);
            var array = mpxd.generatePortletContent(result.item);
            var temp = [];
            $("div#loading_pad").addClass("loading_pad_gohide");
            $("div#cover").addClass("overlay_gohide").removeClass("overlay");
            //mpxd.datasource = temp;
        });
    });
}

function enableAllTheseDays(date) {
    var sdate = $.datepicker.formatDate('dd-M-y', date)
    // console.log(enableDays);
    if ($.inArray(sdate, enableDays) != -1) {
        return [true];
    }
    return [false];
}

function getRoute() {
    var l = location.href;
    var find = "/mpxd2/";
    var start = l.indexOf(find);
//alert (start);
    var currentRoute = l.substr(start + find.length);
    var currentRoute = currentRoute.substr(0, (currentRoute.indexOf('#') == -1) ? currentRoute.length : currentRoute.indexOf('#'));
    return currentRoute;
}

$(function () {
    console.log("Fire!")
    setTimeout(function () {
        console.log("Timeout");
        $(window).trigger("resize");
    }, 2000);
    var State = History.getState()

    //History.log('initial:', State.data, State.title, State.url);

    // Bind to State Change
    History.Adapter.bind(window, 'statechange', function () { // Note: We are using statechange instead of popstate
        // Log the State
        var State = History.getState(); // Note: We are using History.getState() instead of event.state
        //History.log('statechange:', State.data, State.title, State.url);
        /* Using the fix from https://github.com/browserstate/history.js/issues/47#issuecomment-25750285 for popstate on pushstate state call*/
        var currentIndex = History.getCurrentIndex();
        var internal = (History.getState().data._index == (currentIndex - 1));
        if (!internal) {
            if ((typeof State.data.state != "undefined") && (State.data.state == "Pushstate")) {
                if (typeof State.data.p != "undefined") {
                    loadPage(State.data.p, true);
                }
            }
            ;
            // your action
        }

        //console.log(State);
    });
    // $("#data_date").hide();
    $('#data_date').datepicker({
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

    $('#date_selector').on('click', function () {
        $('#data_date').datepicker('show');
    })
});


/* Utility functions */


function getTextWidth(text, font) {
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}
;

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}