/*------------------------------------------------------------------
FOODMAP
[Scripts]

Version:			1.4.2
Ultimo cambio:		15/06 	[see foodmap-project.txt]

Ultimo cambio por:	Mati
-------------------------------------------------------------------*/


/*------------------------------------------------------------------
Declare global variables
-------------------------------------------------------------------*/
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
// svg path for plane icon
var planeSVG = "M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z";

var window_width = $(window).width();
var window_height = $(window).height();
console.log('window = ' + window_width +'x'+ window_height);

var search_string=""; //1.4.1.1

var device_orientation;

var sidepanel_width = '700px';

var foodtrip_marker = 'M28.337 16.247c0.929 0.9 1.4 2 1.4 3.334c0 1.317-0.453 2.406-1.382 3.3 c-0.931 0.929-2.022 1.381-3.336 1.381c-1.314 0-2.406-0.451-3.336-1.381c-0.93-0.93-1.381-2.02-1.381-3.336 c0-1.314 0.451-2.405 1.381-3.334c0.93-0.93 2.021-1.383 3.336-1.383C26.314 14.9 27.4 15.3 28.3 16.247z M50.001 25 c0 13.806-11.195 24.999-25 24.999c-13.807 0-25-11.193-25-24.999c0-13.807 11.193-25 25-25C38.806 0 50 11.2 50 25.001z M35.137 19.581c0-2.824-0.972-5.168-2.971-7.167c-1.998-1.998-4.342-2.969-7.165-2.969c-2.822 0-5.167 0.971-7.167 3 c-1.998 2-2.969 4.342-2.969 7.167c0 1.4 0.2 2.6 0.6 3.49l7.725 16.378c0.158 0.3 0.4 0.6 0.7 0.8 c0.672 0.4 1.5 0.4 2.1 0c0.328-0.199 0.571-0.465 0.737-0.807l7.697-16.375C34.924 22.2 35.1 21 35.1 19.581z';


function detect_orientation() {
	if (window_height > window_width) {
		device_orientation = 'portrait';
	} else {
		device_orientation = 'landscape';
	}
	console.log('initial orientation: '+device_orientation);
	$(window).on("orientationchange",function(event){
		device_orientation = event.orientation;
		console.log('orientation is now: '+device_orientation);
	});
}

function prepare_mapcontainer() {
	//console.log('test '+window_width+' '+device_orientation);
	//if (window_width <= 768 && device_orientation == 'portrait') {
		var element_height;
		if (window_width <= 568) {
			element_height = window_height-80+'px';
		} else {
			element_height = window_height-131+'px';
		}

		$('#main').css('height',element_height);
		$('#mapdiv').css('height',element_height);
		$('#guidebox').css('height',element_height);
		$('#sidepanel').css('height',element_height);
	//}
}

function prepare_side() {
	if (window_width <= 600) {
		console.log('window width = '+window_width)
		$('#sidepanel').css({
			width : window_width,
		});
		sidepanel_width = window_width;
	} else if (window_width <= 800) {
		console.log('window width = '+window_width)
		$('#sidepanel').css({
			width : '530px',
		});
		sidepanel_width = '530px';
	}
	console.log('sidepanel should be: '+sidepanel_width);
}


/*------------------------------------------------------------------
AM Map function + what I need added to it
-------------------------------------------------------------------*/

// add all your code to this method, as this will ensure that page is loaded
AmCharts.ready(function() {

	AmCharts.theme = AmCharts.themes.foodmap;

	// create AmMap object
	var map = new AmCharts.AmMap();
	var foodtrip = new AmCharts.AmMap();

	// set path to images
	map.pathToImages = "ammap/images/";
	map.backgroundColor  = "#F4F3F0";
    map.backgroundAlpha  = 1;

    // set path to images
	foodtrip.pathToImages = "ammap/images/";
	foodtrip.backgroundColor  = "#F4F3F0";
    foodtrip.backgroundAlpha  = 1;

	//initialize variables here instead of in listener
	var country_name;
	var country_code;

	//add india data provider object
	var indiaDataProvider = {
		mapVar: AmCharts.maps.indiaLow,//was indiaHigh
		getAreasFromMap:true
	};



	/* create data provider object
	 mapVar tells the map name of the variable of the map data. You have to
	 view source of the map file you included in order to find the name of the
	 variable - it's the very first line after commented lines.

	 getAreasFromMap indicates that amMap should read all the areas available
	 in the map data and treat them as they are included in your data provider.
	 in case you don't set it to true, all the areas except listed in data
	 provider will be treated as unlisted.
	*/
	var dataProvider = {
		mapVar:	AmCharts.maps.worldLow,
		getAreasFromMap:true,
		areas: [
			{
				id: "IN",
				linkToObject: indiaDataProvider,
			    /* color: "#723C1A", */
			    passZoomValuesToTarget: false
			}
		]
	};
	var foodtripDataProvider = {
		mapVar:	AmCharts.maps.indiaLow,
		getAreasFromMap:true,
		latitude:18.975,
		longitude:72.825833,
		//linkToObject: "bombay",
		images:[
			{
				id:"bombay",
				latitude:18.975,
				longitude:72.825833,
				svgPath:foodtrip_marker,
				scale:0.75,
				color:"#f07971",
				label:"Bombay, Maharashtra",
				labelShiftY:2,
				zoomLevel: 2,
				zoomLatitude: 18.975,
				zoomLongitude: 72.825833},
			{
				id: "panaji",
				latitude:15.498889,
				longitude:73.827778,
				svgPath:foodtrip_marker,
				scale:0.75,
				color:"#f07971",
				label:"Panaji, Goa",
				labelShiftY:2},
			{
				id: "bangalore",
				latitude:12.970057,
				longitude:77.599354,
				svgPath:foodtrip_marker,
				scale:0.75,
				color:"#f07971",
				label:"Bangalore, Karnataka",
				labelShiftY:-10,
				zoomLevel: 2,
				images: [{

					imageURL: "../includes/foodtrip-sats.png",
					latitude:12.970057,
					longitude:77.599354,
					height:222,
					width:216,
					labelColor: "#000000",
					labelRollOverColor: "#CC0000",
					labelFontSize: 11,
				}],
				},
			{
				id: "thiruvananthapuram",
				latitude:8.4875,
				longitude:76.9525,
				svgPath:foodtrip_marker,
				scale:0.75,
				color:"#f07971",
				label:"Thiruvananthapuram, Kerala",
				labelShiftY:2},
			{
				id: "puducherry",
				latitude:11.930965,
				longitude:79.785182,
				svgPath:foodtrip_marker,
				scale:0.75,
				color:"#f07971",
				label:"Puducherry, Puducherry",
				labelShiftY:2},
			{
				id: "hyderabad",
				latitude:17.366,
				longitude:78.476,
				svgPath:foodtrip_marker,
				scale:0.75,
				color:"#f07971",
				label:"Hyderabad, Andhra Pradesh",
				labelShiftY:2},],

		lines: [{
					latitudes: [18.975, 15.498889],
					longitudes: [72.82583, 73.827778]
				}, {
					latitudes: [15.498889, 12.970057],
					longitudes: [73.827778, 77.599354]
				}, {
					latitudes: [12.970057, 8.4875],
					longitudes: [77.599354, 76.9525]
				}, {
					latitudes: [8.4875, 11.930965],
					longitudes: [76.9525, 79.785182]
				}, {
					latitudes: [11.930965, 17.366],
					longitudes: [79.785182, 78.476]
				}],

	};




	// pass data provider to the map object
	map.dataProvider = dataProvider;
	foodtrip.dataProvider = foodtripDataProvider;


	/* create areas settings
	* autoZoom set to true means that the map will zoom-in when clicked on the area
	* selectedColor indicates color of the clicked area.
	*/
	map.areasSettings = {
		autoZoom: true,
	};

	foodtrip.areasSettings = {
		autoZoom: false,
		selectable: true
	};
	foodtrip.linesSettings = {
		color: "#eb4b3f",
		alpha: 0.4,
		thickness: 3,
		dashLength: 0.5
	};
	foodtrip.imagesSettings = {
		rollOverColor: "#eb4b3f",
		rollOverScale: 1,
		selectedScale: 1,
		selectedColor: "#eb4b3f",
		alpha: .75,
	};

	foodtrip.linesAboveImages = false;

	// let's say we want a small map to be displayed, so let's create and add it to the map
	//map.smallMap = new AmCharts.SmallMap();

	// write the map to container div
	map.write("mapdiv");
	foodtrip.write("foodtripdiv");


	//http://jsfiddle.net/amcharts/k67gB/light/
	map.addListener("clickMapObject", function (event) {

		country_name = event.mapObject.title;
		country_code = event.mapObject.id;

		//call other functions when click on country
		close_guidebox();
		show_showinfo();
		populate_showinfo(country_name, country_code);
		resize_map(); //1.4.1.2

		//if we click inside map of India
		if (map.dataProvider == indiaDataProvider) {

			//AQUI VA CODIGO PARA CAMBIAR DE ACUERDO A LO SELECCIONADO

			var sidepanel_content = $("#sidepanel-navigation .sidepanel-menu .current").data('sidepanel-content');

			$("#sidepanel-content").load('content/IN-KA-info.php');

			//AQUI CAMBIAR NAV PARA QUE SEA DE KARNATAKA


		}


	});
	foodtrip.addListener("clickMapObject", function (event) {
		//alert(event.mapObject.id);

		var div_width = $('#map-content').width();
		var div_height = $('#map-content').height();
		console.log('w = '+div_width+' h = '+div_height);



		var satellites_x = (div_width/2)-109;
		var satellites_y = (div_height/2)-110;

		function testtest() {
			//alert('ooo');
			$('#foodtripdiv').on('mouseenter','image', function(e){
				$('#foodtrip-satellites-container').css({
					top : satellites_y+'px',
					left: satellites_x+'px'

				}).addClass('shown');

				$('#map-content').on('click','.link-sidepanel', function(e){
					//alert('go');
						open_side();
						populate_side('India','IN');

				//if (map.dataProvider == indiaDataProvider) {

					//AQUI VA CODIGO PARA CAMBIAR DE ACUERDO A LO SELECCIONADO

					var sidepanel_content = $("#sidepanel-navigation .sidepanel-menu .current").data('sidepanel-content');

					$("#sidepanel-content").load('content/bisi-bele-bath-generalinfo.php');

					//AQUI CAMBIAR NAV PARA QUE SEA DE BISI BELE BATH


				//}



				});

			});

		}
		testtest();


	});



	$('.go-country').on("click", function(e){ //$("[class^=main]")
		e.preventDefault();
		//alert('india!');

		var country_name = "India";
		var country_code = "IN";

		//call other functions when click on country
		show_showinfo();
		populate_showinfo(country_name, country_code);

		map.dataProvider.areas.push({ id: country_code, showAsSelected: true});

		map.validateNow();
		//resize_map(); //1.4.1.2
	});


	/* FoodMap specific functions
	-------------------------------------------------------------------*/

	// Resize map
	// Since 1.4.1.2
	function resize_map() {

		//console.log('sidepanel will change to '+sidepanel_width);
		window_width = $(window).width();

		var original_map_width = $('#mapdiv').width();
		//console.log('original window = ' + original_map_width);

		var new_map_width = window_width - 700 + 'px'; //change this to - 700
		//console.log('new map width = ' + new_map_width);

		function toggle_map_size(map_width,margin_left,data_provider){

			$('#mapdiv').css({
				width : map_width,
				marginLeft: margin_left

			});

			map.dataProvider = data_provider;
			map.validateNow();


		}

		$("a.clickme").click(function(e){
			toggle_map_size(new_map_width,'700px',indiaDataProvider)
		});

		$('#close-sidepanel').click(function(e){
			toggle_map_size(original_map_width,0,dataProvider)
		});

	}


	//Clear map of all selections
	function clear_map() {
		event.preventDefault();
		map.dataProvider.areas.length=0;
		map.validateNow();
		$("#results").html('');
	}

	//Call clear function on click "Clear"
	$("#clear").click(clear_map());


	//Search for ingredient or dish
	function search_map() {

		$(".searchbox-submit").click(function() {

			event.preventDefault();

			//Clear map of all selected regions
			clear_map();

			//Get search string
			search_string = $(".searchbox-input").val(); //In 1.4.1.2, search string is DECLARED here, why not in 1.4.1.1?

			//Convert search string to country code
			if(search_string) {

				if(search_string == 'rice' || search_string == 'arroz') {
					search_string = 'arroz';
					country_code = ['JP','IN','CR'];
				} else if(search_string == 'beans' || search_string == 'frijoles') {
					search_string = 'frijoles';
					country_code = ['BR','CR','MX'];
				} else if(search_string == 'bisi bele bath') {
					country_code = ['IN'];
				}

				//Add countries to array for display
				for (var id in country_code) {
					$("#results").append(' ' + search_string + ' (ID: ' + country_code[id] + ')');
				}

			}

			//Push countries to selected array
			for (var id in country_code) {
				map.dataProvider.areas.push({ id: country_code[id], showAsSelected: true});
			}

			//Esto hace que el mapa haga su gracia
			//Reflect changes in map
			map.validateNow();

		});
	}
	search_map();



});


/*------------------------------------------------------------------
Functions not specifically associated with AM Map
-------------------------------------------------------------------*/
// Should they still be inside the function??



//Generic close btn
function close_btn() {

	//Close window on click
	$(".close-this").click(function(){
		$(this).parent().hide();
	});
}


//Initialize first modal window
//TODO: change name from guidebox to something more explanatory
function prepare_guidebox() {

	// OPACITY OF BUTTON SET TO 50%
	$("#guidebox").css("opacity","0.9");

	//Close window on click on links
	$(".go-map, .go-search").click(
		function(){
			//$("#guidebox").fadeTo('fast', 0);
			$("#guidebox").hide();
		}
	);

	//Close window when click outside of it
	$(document).click(function() {
		close_guidebox();
	})

}


//Close initial modal window
//TODO: change name from guidebox to something more explanatory
function close_guidebox() {

	if(('#guidebox').length) {
        if($('#guidebox').is(":visible")) {
	    	$('#guidebox').hide();
		}
	}
}


//Show intial modal window again
//TODO: this is unnecesary, but change so it's to show modal window with hints (& create that modal indow
function show_guidebox() {
	$("#guidebox").css("opacity","0.75");
}


//Prepare showinfo tooltip
//TODO: change to more explanatory name?
function prepare_showinfo() {
	$("#showinfo").hide();
}


//Show showinfo tooltip
//TODO: change to more explanatory name?
function show_showinfo() {
	$("#showinfo").show();

}


//Load country info into showinfo tooltip
//Add variable for search (?)
function populate_showinfo(country_name,country_code) {

	var new_content;
	var filter_results;
	var new_place_name = '<h4>' + country_name + '</h4>';
	//new_content = '';
	var new_ingredients;
	var new_dish;
	var new_href_dish;
	var new_href_ingredient;

	if(search_string !=="") {


		if(search_string == 'arroz' || search_string == 'frijoles' ) {
			result_kind = 'Ingrediente';
			new_ingredients = search_string;
			new_dish = '28 Platos';

			new_href_ingredient = 'arroz';
			new_href_dish = 'dishes';

			//new_content += '<a class="clickme" href="#about">1 '+ result_kind +' (' + search_string + ')</a> | \
			 //<a class="clickme" href="#about">24 Platos</a>';
		} else if(search_string == 'bisi bele bath') {
			result_kind = 'Plato';
			new_ingredients = '12 Ingredientes';
			new_dish = search_string;

			new_href_dish = 'bisi-bele-bath';
			new_href_ingredient = 'ingredients';
			//new_content += '<a class="clickme" href="#about">4 Ingredientes</a> | \
			 //<a class="clickme" href="#about">1 '+ result_kind +' (' + search_string + ')</a>';
		}

	} else {
		new_ingredients = '12 Ingredientes';
		new_dish = '28 Platos';

		new_href_dish = 'dishes';
		new_href_ingredient = 'ingredients';
		//new_content += '<a class="clickme" href="#about">80 Ingredientes</a> | \
			 //<a class="clickme" href="#about">24 Platos</a>';
	}

	$("#showinfo").css("opacity","1.0");

	$(".modal-header").html(new_place_name);
	$(".modal-content .ingredients").html(new_ingredients);
	$(".modal-content .dish").html(new_dish);

	$(".modal-content .link-dishes").attr({
		'href': '#'+new_href_dish,
		'data-sidepanel-content': new_href_dish,
		'data-country-code': country_code,
		'data-country-name': country_name
	});
	$(".modal-content .link-ingredients").attr({
		'href': '#'+new_href_ingredient,
		'data-sidepanel-content': new_href_ingredient,
		'data-country-code': country_code,
		'data-country-name': country_name
	});


	open_side();
	populate_side(country_name,country_code);

	$(".filter a").click(
		function(event){

			event.preventDefault();
			var filter_selector;
			filter_selector = $(this).attr('class');

			$(this).closest("#info").find('li:not(.'+filter_selector+')').hide();
			$(this).closest("#info").find("li."+filter_selector).show();

		}
	);
}


//Populate sidepanel with appropriate info
function populate_side(country_name,country_code,search_terms) {

	//TODO: no esta poniendo en cero si se hace click luego de haber buscado

	$('#map-content').on('click','.link-sidepanel', function(e){
		alert('open');
	});

	$('#sidepanel-content').on('change','select[name="region"]',function () {
    	//AQUI VA CODIGO PARA CAMBIAR DE ACUERDO A LO SELECCIONADO
	}).change();

	//When click links in showinfo
	$('.modal-content, #sidepanel-navigation, #sidepanel-content').on("click", 'a:not(.action)', function(e){
		//console.log('link HI: '+$(this).attr('data-sidepanel-content'));
		e.preventDefault();



		var sidepanel_content = $(this).attr('data-sidepanel-content');
		var sidepanel_content_filename;

		country_code = $(this).attr('data-country-code');
		//country_name = $(this).attr('data-country-name');

		if (country_code != 'IN' && country_code != 'JP') {
			country_code = 'IN';
		}

		$('.sidepanel-menu').find('li a').each(function () {
				//console.log('add country '+country_code);
				$(this).attr({
					'data-country-code': country_code,
					'data-country-name': country_name
				});

		});


		if ($(this).attr('data-menu-target') == 'main') {

			sidepanel_content_filename = country_code+'-'+sidepanel_content;

			$('.sidepanel-menu').find('li a[data-sidepanel-content="'+sidepanel_content+'"]').addClass('current');
			$('.sidepanel-menu').find('li a').not( '[data-sidepanel-content="'+sidepanel_content+'"]' ).removeClass('current');

			console.log('hide subpanel');
			$(".sidepanel-submenu").remove();
		}

		if ($(this).closest('#sidepanel-content').length) {
			console.log('goes to dish or ingredient');
			var parent_menu_li = $('.sidepanel-menu .current').closest('li');
			var child_menu_type = $('.sidepanel-menu .current').attr('data-sidepanel-content');
			var sidepanel_item = $(this).parent('.blocks').attr('data-sidepanel-item');
			//console.log('this is in: '+parent_menu_li);

			parent_menu_li.find('.submenu-container').load('blocks/sidepanel-submenu-'+child_menu_type+'.php',
    {
        'sidepanel_item': '<?php echo '+sidepanel_item+'; ?>'
    });
			$('.sidepanel-submenu').find('li a[data-sidepanel-content="'+sidepanel_content+'"]').addClass('current');

		}

		if ($(this).attr('data-menu-target') == 'sub') {
			//console.log('goes to dish or ingredient');

			var sidepanel_item = $(this).attr('data-sidepanel-item');
			sidepanel_content_filename = sidepanel_item+'-'+sidepanel_content;



			$('.sidepanel-submenu').find('li a[data-sidepanel-content="'+sidepanel_content+'"]').addClass('current');
			$('.sidepanel-submenu').find('li a').not( '[data-sidepanel-content="'+sidepanel_content+'"]' ).removeClass('current');


		}

		//Insert content in sidepanel
		console.log('what will load: '+sidepanel_content_filename);
		$("#sidepanel-content").load('content/'+sidepanel_content_filename+'.php');




	});

	sidepanel_menu_txt();
	show_action_tooltip();

}

function show_action_tooltip() {
	//console.log('tooltips on');
	$('#sidepanel-content').on("click", 'a.action', function(e){
		var action_tooltip = $(this).prev();
		if (action_tooltip.hasClass('showaction')){
			$(this).prev().removeClass('showaction');
		} else {
			$(this).prev().addClass('showaction');
		}
	});
	$('#sidepanel-content').on("mouseleave", 'a.action', function(e){
		var action_tooltip = $(this).prev().not( '[data-user-action="add-foodtrip"],[data-user-action="share"]' );
		if (action_tooltip.hasClass('showaction')){
			$(this).prev().removeClass('showaction');
		}
	});
	$('#sidepanel-content').on("mouseleave", '.action-tooltip[data-user-action="add-foodtrip"],.action-tooltip[data-user-action="share"]', function(e){

		if ($(this).hasClass('showaction')){
			$(this).removeClass('showaction');
		}
	});
}

function sidepanel_menu_txt(){


	$('#sidepanel-navigation').on("mouseenter", 'a:not(.current)', function(e){
		$(this).find('.menu-txt').show();
	});
	$('#sidepanel-navigation').on("mouseleave", 'a', function(e){
		$(this).find('.menu-txt').hide();
	});
	$('#sidepanel-navigation').on("click", 'a', function(e){
		$(this).find('.menu-txt').hide();
	});



}



//Open side panel function
function open_side() {

	$('#map-content').on('click','.link-sidepanel', function(e) { //$("[class^=main]")


		//alert('open sesame');
		var hrefval = $(this).attr("href");

		if(hrefval != "") {
    		var distance = $('#main').css('right');

			if(distance == "auto" || distance == "0px") {
        		$(this).addClass("open");
				openSidepage();
			} else {
        		closeSidepage();
			}
		}
	}); // end click event handler


	$("a.clickme").on("click", function(e){ //$("[class^=main]")


		//alert('open sesame');
		var hrefval = $(this).attr("href");

		if(hrefval != "") {
    		var distance = $('#main').css('right');

			if(distance == "auto" || distance == "0px") {
        		$(this).addClass("open");
				openSidepage();
			} else {
        		closeSidepage();
			}
		}
	}); // end click event handler
}


//Close side panel function
function close_side() {
	$("#close-sidepanel").on("click", function(e){
    	e.preventDefault();
		closeSidepage();
	}); // end close button event handler
}


//Open side panel function
function openSidepage() {
	$('#main').animate({
		right: '700px'
    }, 400, 'easeOutBack');
}


function closeSidepage(){
    $("#navigation li a").removeClass("open");
    $('#main').animate({
    	right: '0px'
    }, 400, 'easeOutQuint');
}


//Open search box
//http://thecodeblock.com/expanding-search-bar-with-jquery-tutroial/
function open_searchbox() {
	var submitIcon = $('#searchbox .searchbox-icon');
	var inputBox = $('#searchbox .searchbox-input');
	var searchBox = $('#searchbox .searchbox');

	var isOpen = false;

	submitIcon.click(function(){
		if(isOpen == false){
			$('#searchbox').css('width','300px'); //TODO: inelegant, change
			searchBox.addClass('searchbox-open');
			inputBox.focus();
			isOpen = true;
		} else {
			$('#searchbox').css('width','50px'); //TODO: inelegant, change
			searchBox.removeClass('searchbox-open');
			inputBox.focusout();
			isOpen = false;
		}
	});
	submitIcon.mouseup(function(){
    	return false;
	});
	searchBox.mouseup(function(){
    	return false;
	});
	$(document).mouseup(function(){
		if(isOpen == true){
			$('.searchbox-icon').css('display','block');
			submitIcon.click();
		}
	});
}
function buttonUp(){
 	var inputVal = $('.searchbox-input').val();
 	inputVal = $.trim(inputVal).length;
 	if( inputVal !== 0){
	 	$('.searchbox-icon').css('display','none');
	} else {
		 $('.searchbox-input').val('');
		 $('.searchbox-icon').css('display','block');
	}
}

function toggle_menu() {

	var container,button,menu;

	button = $('#menu-toggle');
	menu = $('#menu-top');


	button.click(function(e){
		e.preventDefault();
		//menu.addClass('toggled');
		if (!menu.hasClass('toggled')) {
			menu.addClass('toggled');

		} else {
			menu.removeClass('toggled');
		}


	});
}

function dev_disable() {
	$('.disable').hide();
	$('body').css('background','#fff');
}




// Kick things off.
$(document).ready(function() {
	detect_orientation();
	prepare_mapcontainer();
	prepare_side();
	prepare_guidebox();
	prepare_showinfo();
	close_btn();
	open_side();
	close_side();
	open_searchbox();
	toggle_menu();
	//dev_disable();

	//search_map();
});