$(document).ready(function(){

	$('#plate_vector_map').load('assets/mmc/svg/plate_vector_map.svg',function(){

		var json = [ 
			{"vector_track":"legend_v_track_1","vector_status":"0","url":""},
			{"vector_track":"legend_v_track_2","vector_status":"1","url":""},
			{"vector_track":"legend_v_track_3","vector_status":"2","url":""},
			{"vector_track":"legend_v_track_4","vector_status":"3","url":""},
			{"vector_track":"v_track_201","vector_status":processVariance(viaduct["v201"]),"url":""},
			{"vector_track":"v_track_202","vector_status":processVariance(viaduct["v202"]),"url":""},
			{"vector_track":"v_track_203","vector_status":processVariance(viaduct["v203"]),"url":""},
			{"vector_track":"v_track_ug","vector_status":"0","url":""},
			{"vector_track":"v_track_204","vector_status":processVariance(viaduct["v204"]),"url":""},
			{"vector_track":"v_track_205","vector_status":processVariance(viaduct["v205"]),"url":""},
			{"vector_track":"v_track_206","vector_status":processVariance(viaduct["v206"]),"url":""},
			{"vector_track":"v_track_207","vector_status":processVariance(viaduct["v207"]),"url":""},
			{"vector_track":"v_track_208","vector_status":processVariance(viaduct["v208"]),"url":""},
			{"vector_track":"v_track_209","vector_status":processVariance(viaduct["v209"]),"url":""},
			{"vector_track":"v_track_210","vector_status":processVariance(viaduct["v210"]),"url":""}
		];
		for (i = 0; i < json.length; i++) {
			var b = json[i];
			vector_track_name = b.vector_track;
			vector_track_status = b.vector_status;
			vector_track_url = b.url;
			if (vector_track_status==0) {/!*blank*!/
				$('#'+vector_track_name).css({'fill':'#777777','stroke':'#222222'});
			} else if (vector_track_status==1) {/!*on schedule*!/
				$('#'+vector_track_name).css({'fill':'#00ff55','stroke':'#00ff55'});
			} else if (vector_track_status==2) {/!*behind late*!/
				$('#'+vector_track_name).css({'fill':'#ff0055','stroke':'#ff0055'});
			} else if (vector_track_status==3) {/!*critical*!/
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
				$('#'+vector_track_name).toggle('pulsate').css({'stroke-width':'5','fill':'#ff0055','stroke':'#ff0055'});
			};
		}
		
		var json = [ 
			{"vector_station":"legend_v_station_1","vector_status":"0"},
			{"vector_station":"legend_v_station_2","vector_status":"0"},
			{"vector_station":"legend_v_station_3","vector_status":"0"},
			{"vector_station":"legend_v_station_4","vector_status":"0"},
			{"vector_station":"v_station_1","vector_status":processVariance(station["sg-buloh"])},
			{"vector_station":"v_station_2","vector_status":processVariance(station["dsara-damai"])},
			{"vector_station":"v_station_3","vector_status":processVariance(station["sri-dsara-west"])},
			{"vector_station":"v_station_4","vector_status":processVariance(station["sri-dsara-east"])},
			{"vector_station":"v_station_5","vector_status":processVariance(station["kepong-sentral"])},
			{"vector_station":"v_station_6","vector_status":processVariance(station["metro-prima"])},
			{"vector_station":"v_station_7","vector_status":processVariance(station["kepong-baru"])},
			{"vector_station":"v_station_8","vector_status":processVariance(station["jinjang"])},
			{"vector_station":"v_station_9","vector_status":processVariance(station["sri-delima"])},
			{"vector_station":"v_station_10","vector_status":processVariance(station["kg-batu"])},
			{"vector_station":"v_station_11","vector_status":processVariance(station["kentonmen"])},
			{"vector_station":"v_station_12","vector_status":processVariance(station["jln-ipoh"])},
			{"vector_station":"v_station_13","vector_status":processVariance(station["sentul-west"])},
			{"vector_station":"v_station_14","vector_status":processVariance(station["hkl"])},
			{"vector_station":"v_station_15","vector_status":processVariance(station["kg-baru-north"])},
			{"vector_station":"v_station_16","vector_status":processVariance(station["ampang-park"])},
			{"vector_station":"v_station_17","vector_status":processVariance(station["klcc-east"])},
			{"vector_station":"v_station_18","vector_status":processVariance(station["conlay"])},
			{"vector_station":"v_station_19","vector_status":processVariance(station["titiwangsa"])},
			{"vector_station":"v_station_20","vector_status":processVariance(station["trx"])},
			{"vector_station":"v_station_21","vector_status":processVariance(station["chan-sow-lin"])},
			{"vector_station":"v_station_22","vector_status":processVariance(station["bdr-malaysia-north"])},
			{"vector_station":"v_station_23","vector_status":processVariance(station["bdr-malaysia-south"])},
			{"vector_station":"v_station_24","vector_status":processVariance(station["kuchai-lama"])},
			{"vector_station":"v_station_25","vector_status":processVariance(station["tmn-naga-emas"])},
			{"vector_station":"v_station_26","vector_status":processVariance(station["sg-besi"])},
			{"vector_station":"v_station_27","vector_status":processVariance(station["tech-park"])},
			{"vector_station":"v_station_28","vector_status":processVariance(station["serdang-raya-north"])},
			{"vector_station":"v_station_29","vector_status":processVariance(station["serdang-raya-south"])},
			{"vector_station":"v_station_30","vector_status":processVariance(station["sri-kembangan"])},
			{"vector_station":"v_station_31","vector_status":processVariance(station["upm"])},
			{"vector_station":"v_station_32","vector_status":processVariance(station["tmn-universiti"])},
			{"vector_station":"v_station_33","vector_status":processVariance(station["equine-park"])},
			{"vector_station":"v_station_34","vector_status":processVariance(station["tmn-putra-permai"])},
			{"vector_station":"v_station_35","vector_status":processVariance(station["16-sierra"])},
			{"vector_station":"v_station_36","vector_status":processVariance(station["cyberjaya-north"])},
			{"vector_station":"v_station_37","vector_status":processVariance(station["cyberjaya-city-centre"])},
			{"vector_station":"v_station_38","vector_status":processVariance(station["putrajaya-sentral"])}
		];
		for (i = 0; i < json.length; i++) {
			var b = json[i];
			vector_station_name = b.vector_station;
			vector_station_status = b.vector_status;
			if (vector_station_status==0) {/!*blank*!/
				$('#'+vector_station_name).css({'fill':'#ffffff','stroke':'#222222'});
			} else if (vector_station_status==1) {/!*on schedule*!/
				$('#'+vector_station_name).css({'fill':'#ffffff','stroke':'#00ff55'});
			} else if (vector_station_status==2) {/!*behind late*!/
				$('#'+vector_station_name).css({'fill':'#ffffff','stroke':'#ff0055'});
			} else if (vector_station_status==3) {/!*critical*!/
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
			};
		}
		var json = [ 
			{"vector_depot":"legend_v_depot_1","vector_status":"0"},
			{"vector_depot":"legend_v_depot_2","vector_status":"1"},
			{"vector_depot":"legend_v_depot_3","vector_status":"2"},
			{"vector_depot":"legend_v_depot_4","vector_status":"3"},
			{"vector_depot":"v_depot_1","vector_status":processVariance(depot["serdang-dpt"])}
		];
		for (i = 0; i < json.length; i++) {
			var b = json[i];
			vector_depot_name = b.vector_depot;
			vector_depot_status = b.vector_status;
			if (vector_depot_status==0) {/!*blank*!/
				$('#'+vector_depot_name).css({'fill':'#ffffff','stroke':'#222222'});
			} else if (vector_depot_status==1) {/!*on schedule*!/
				$('#'+vector_depot_name).css({'fill':'#ffffff','stroke':'#00ff55'});
			} else if (vector_depot_status==2) {/!*behind late*!/
				$('#'+vector_depot_name).css({'fill':'#ffffff','stroke':'#ff0055'});
			} else if (vector_depot_status==3) {/!*critical*!/
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
	var json = [ 

		//	arrage by sequence :
		//
		//	- S&TC & PSD/APG
		//	- ICSS&CMMS
		//	- ET&DE
		//	- TW&MV
		//	- PSDS
		//	- COMMS&ITS
		//	- AFC
		//
		{"chart_id":"db_donut_1a","chart_title":"S&TC & PSD/APG","chart_name":"Signalling & Train Control System And Platform Screen Doors/ Automatic Platform Gates","chart_value":"0","set_donut":"2","url":"sys-stcpsd/index","link_enable":"no"},
		{"chart_id":"db_donut_1b","chart_title":"<br>ICSS & CMMS","chart_name":"Integrated Control Supervisory System And Computerised Maintenance Management System","chart_value":"0","set_donut":"2","url":"sys-icsscmms/index","link_enable":"no"},
		{"chart_id":"db_donut_2a","chart_title":"<br>ET & DE","chart_name":"Electric Trains And Depot Equipment","chart_value":checkDefined(system["sys-etde"]),"set_donut":"2","url":"sys-etde/index","link_enable":"yes"},
		{"chart_id":"db_donut_2b","chart_title":"<br>TW & MV","chart_name":"Trackworks, Maintenance Vehicles & Works Train","chart_value":checkDefined(system["sys-twmv"]),"set_donut":"2","url":"sys-twmv/index","link_enable":"yes"},
		{"chart_id":"db_donut_3a","chart_title":"<br>PS&DS","chart_name":"Power Supply And Distribution System","chart_value":checkDefined(system["sys-psds"]),"set_donut":"2","url":"sys-psds/index","link_enable":"yes"},
		{"chart_id":"db_donut_3b","chart_title":"<br>COMMS & ITS","chart_name":"Communications, Government Integrated Radio Network, Commercial Telecom (INFRA) And Information Technology System","chart_value":"0","set_donut":"2","url":"sys-commsits/index","link_enable":"no"},
		{"chart_id":"db_donut_4a","chart_title":"<br>AFC","chart_name":"Automatic Fare Collection System","chart_value":"0","set_donut":"2","url":"sys-afc/index","link_enable":"no"}
	];
	for (i = 0; i < json.length; i++) {
		var b = json[i];
		use_chart_title = b.chart_title;
		use_chart_id = b.chart_id;
		use_chart_value = b.chart_value;
		use_chart_set_donut = b.set_donut;
		use_chart_name = b.chart_name;
		use_chart_url= b.url;
		use_chart_link_enable= b.link_enable;
		if (use_chart_set_donut==2) {
			use_chart_font_size = '20px';
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
			if (use_chart_link_enable == 'yes') {
				link_css = 'text-decoration: none;'
			} else {
				link_css = 'color:#fff !important;cursor:default;'
				use_chart_url = '#'
			};
			use_chart_svg_width = 62;
			use_chart_svg_height = 62;
			use_chart_circle_r = 30;
			use_chart_circle_cx = 30;
			use_chart_circle_cy = 30;
			use_chart_circle_data_total = 189;
			use_chart_circle_data_used = use_chart_value / 100 * use_chart_circle_data_total;
			gauge_value = use_chart_value/100*112.225;
			gauge_value_num = use_chart_value;
			donut_body = '<div class="gauge1"><div class="title"><a class="url_donut_system" style="'+link_css+'" href="'+use_chart_url+'" title="'+use_chart_name+'"><span class="donut_title_name">'+use_chart_title+'</span></a></div><svg class="meter" viewBox="-7 -18 70 110"><circle id="low" r="34.4" cx="50%" cy="50%" stroke="rgba(255,255,255,.5)" stroke-width="2" stroke-dasharray="128.75,128.5" fill="none" style="stroke:rgba(255,255,255,.5);stroke-opacity:1" /><circle id="circle4" r="30" cx="50%" cy="50%" stroke="#0f0" stroke-width="8" stroke-dasharray="'+gauge_value+',220" fill="none" /><line x1="16.359814" y1="41.187347" x2="6.3598132" y2="34.187347" id="line6" style="stroke:rgba(255,255,255,.5);stroke-width:2;stroke-opacity:1" /><line x1="58.397079" y1="53.990067" x2="70.397079" y2="53.990067" id="line8" style="stroke:rgba(255,255,255,.5);stroke-width:2;stroke-opacity:1" /><rect width="64" height="30" style="fill:#000;stroke:rgba(255,255,255,.25);stroke-width:1" transform="matrix(0.81915204,0.57357644,-0.57357644,0.81915204,8,-6)" id="rect10" x="13" y="0" /><text x="-43.319473" y="-2.332696" font-size="18" transform="matrix(-0.81915204,-0.57357644,0.57357644,-0.81915204,8,-3)" id="text12" style="text-anchor:middle;">'+gauge_value_num+'%</text></svg></div>';
			$('.dp_'+use_chart_id+'').append(donut_body);
		};
	}
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


    function processVariance($v){
        if($v <= -8){
             return 3;
        }else if($v < 0){
             return 2;
        }else if($v >= 0){
            return 1;
        }else{
            return 0;
        }
    }

    function checkDefined($v){
        if(typeof($v) === "undefined"){
              return 0;
        }else{
            return $v;
        }
    }
});	

