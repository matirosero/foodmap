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

var window_width = $(window).width();
var window_height = $(window).height();
console.log('window = ' + window_width +'x'+ window_height);

var search_string=""; //1.4.1.1

var device_orientation;

var sidepanel_width = '700px';

var foodtrip_marker = 'M28.337 16.247c0.929 0.9 1.4 2 1.4 3.334c0 1.317-0.453 2.406-1.382 3.3 c-0.931 0.929-2.022 1.381-3.336 1.381c-1.314 0-2.406-0.451-3.336-1.381c-0.93-0.93-1.381-2.02-1.381-3.336 c0-1.314 0.451-2.405 1.381-3.334c0.93-0.93 2.021-1.383 3.336-1.383C26.314 14.9 27.4 15.3 28.3 16.247z M50.001 25 c0 13.806-11.195 24.999-25 24.999c-13.807 0-25-11.193-25-24.999c0-13.807 11.193-25 25-25C38.806 0 50 11.2 50 25.001z M35.137 19.581c0-2.824-0.972-5.168-2.971-7.167c-1.998-1.998-4.342-2.969-7.165-2.969c-2.822 0-5.167 0.971-7.167 3 c-1.998 2-2.969 4.342-2.969 7.167c0 1.4 0.2 2.6 0.6 3.49l7.725 16.378c0.158 0.3 0.4 0.6 0.7 0.8 c0.672 0.4 1.5 0.4 2.1 0c0.328-0.199 0.571-0.465 0.737-0.807l7.697-16.375C34.924 22.2 35.1 21 35.1 19.581z';


function detect_orientation() {

	// Find matches
	var mql = window.matchMedia("(orientation: portrait)");

	// If there are matches, we're in portrait
	if(mql.matches) {
		// Portrait orientation
		console.log('portrait!');
	} else {
		// Landscape orientation
		console.log('landscape!');
	}

	// Add a media query change listener
	mql.addListener(function(m) {
		if(m.matches) {
			// Changed to portrait
			console.log('change to portrait!');
		} else {
			// Changed to landscape
			console.log('change to landscape!');
		}
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
		$('#foodtripdiv').css('height',element_height);
		$('#guidebox').css('height',element_height);
		$('#sidepanel').css('height',element_height);
	//}

}

function prepare_side() {
	if (window_width <= 768) {
		console.log('window width = '+window_width)
		$('#sidepanel').css({
			width : window_width,
		});
		sidepanel_width = window_width;
	} else if (window_width <= 900) {
		console.log('window width = '+window_width)
		$('#sidepanel').css({
			width : '500px',
		});
		sidepanel_width = '500px';
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

					imageURL: "includes/foodtrip-sats.png",
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
						//populate_side(/* 'India','IN' */);
						//populate not necessary, included in doc ready

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

		var original_map_width = $(window).width();
		//console.log('original window = ' + original_map_width);

		var new_map_width;
		 //change this to - 700
		//console.log('new map width = ' + new_map_width);

		var new_margin_left;




		if (window_width <= 900) {
			new_map_width = window_width - 500 + 'px';
			new_margin_left = 500 + 'px';
		} else if (window_width <= 768) {
			new_map_width =0 + 'px';
			new_margin_left = window_width + 'px';
		} else {
			new_map_width = window_width - 700 + 'px';
			new_margin_left = 700 + 'px';
		}



		function toggle_map_size(map_width,margin_left,data_provider){
			console.log(map_width);
			$('#mapdiv').css({
				width : map_width,
				marginLeft: margin_left

			});

			map.dataProvider = data_provider;
			map.validateNow();


		}

		$("a.clickme").click(function(e){
			$('#showinfo').hide();
			toggle_map_size(new_map_width,new_margin_left,indiaDataProvider)
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
					country_code = ['BD','BT','CN','ES','IN','ID','PH','VN','TH','MM','FR','BR','JP','US','KP','KR','CO','PE','VE','KH','IR','LA','MG','NP','NE','PK','LK'];
				} else if(search_string == 'gallo pinto') {
					search_string = 'gallo pinto';
					country_code = ['CR','NI'];
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
	//$("#showinfo").hide();
}


//Show showinfo tooltip
//TODO: change to more explanatory name?
function show_showinfo() {
	//alert( "pageX: " + event.pageX + ", pageY: " + event.pageY );
	var showinfo_width = $('#showinfo').width();
	var showinfo_height = $('#showinfo').height();

	var map_height = $('#main').height();

	var showinfo_top = (map_height/2)-(showinfo_height/2);
	var showinfo_left = (window_width/2)-(showinfo_width/2);



	$("#showinfo").css({
		'top' : showinfo_top+'px',
		'left' : showinfo_left+'px'
	}).show();

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

	var new_dish_menu_target = 'main';
	var new_ingredient_menu_target = 'main';
	var new_dish_sidepanel_content;
	var new_ingredient_sidepanel_content;
	var new_dish_sidepanel_item;
	var new_ingredient_sidepanel_item;

	if(search_string !=="") {


		if(search_string == 'arroz' || search_string == 'frijoles' ) {
			result_kind = 'Ingrediente';
			new_ingredients = '<span class="result-number">1</span> '+search_string.toLowerCase().replace(/\b[a-z]/g, function(letter) {
		return letter.toUpperCase();
	});
			new_dish = '<span class="result-number">28</span> Platos';

			new_ingredient_sidepanel_content = 'generalinfo';
			new_ingredient_sidepanel_item = 'arroz';
			new_dish_sidepanel_content = 'dishes';
			new_ingredient_menu_target = 'sub-ingredients';

			//new_content += '<a class="clickme" href="#about">1 '+ result_kind +' (' + search_string + ')</a> | \
			 //<a class="clickme" href="#about">24 Platos</a>';
		} else if(search_string == 'bisi bele bath') {
			result_kind = 'Plato';
			new_ingredients = '<span class="result-number">12</span> Ingredientes';
			new_dish = '<span class="result-number">1</span> '+search_string.toLowerCase().replace(/\b[a-z]/g, function(letter) {
		return letter.toUpperCase();
	});

			new_dish_sidepanel_content = 'generalinfo';
			new_dish_sidepanel_item = 'bisi-bele-bath';
			new_ingredient_sidepanel_content = 'ingredients';
			new_dish_menu_target = 'sub-dishes';

			//new_content += '<a class="clickme" href="#about">4 Ingredientes</a> | \
			 //<a class="clickme" href="#about">1 '+ result_kind +' (' + search_string + ')</a>';
		}

	} else {
		new_ingredients = '<span class="result-number">12</span> Ingredientes';
		new_dish = '<span class="result-number">28</span> Platos';

		new_dish_sidepanel_content = 'dishes';
		new_ingredient_sidepanel_content = 'ingredients';
		//new_content += '<a class="clickme" href="#about">80 Ingredientes</a> | \
			 //<a class="clickme" href="#about">24 Platos</a>';
	}

	var capitalize_new_dish = new_dish;
	var capitalize_new_ingredients = new_ingredients;

	$("#showinfo").css("opacity","1.0");

	$(".modal-header").html(new_place_name);
	$(".modal-content .ingredients").html(capitalize_new_ingredients);
	$(".modal-content .dish").html(capitalize_new_dish);

	$(".modal-content .link-dishes").attr({
		'href': '#'+new_dish_sidepanel_content,
		'data-sidepanel-content': new_dish_sidepanel_content,
		'data-country-code': country_code,
		'data-country-name': country_name,
		'data-menu-target': new_dish_menu_target
	});
	$(".modal-content .link-ingredients").attr({
		'href': '#'+new_ingredient_sidepanel_content,
		'data-sidepanel-content': new_ingredient_sidepanel_content,
		'data-country-code': country_code,
		'data-country-name': country_name,
		'data-menu-target': new_ingredient_menu_target
	});
	if ( new_dish_menu_target == 'sub-dishes') {
		$(".modal-content .link-dishes").attr({
			'data-sidepanel-item': new_dish_sidepanel_item
		});
	} else if ( new_ingredient_menu_target == 'sub-ingredients') {
		$(".modal-content .link-ingredients").attr({
			'data-sidepanel-item': new_ingredient_sidepanel_item
		});
	}


	open_side();
	//populate_side(/* country_name,country_code */);
	//populate not necessary, included in doc ready


}


//Populate sidepanel with appropriate info
function populate_side(/* country_name,country_code,search_terms */) {

	var menu_target = 'main';
	var sidepanel_content = '';
	var sidepanel_item = '';
	var country_code = 'IN';
	var country_name = 'India';

	var file_to_load;

	//select reegion on sidepanel results filter
	//ONLY WORKS IF DATA-SIDEPANEL-CONTENT == DISHES
	$('#sidepanel-content').on('change','select[name="region"][data-sidepanel-content="dishes"]',function () {

		country_code = 'IN';
		var region_code = 'KA';

		sidepanel_content = $(this).attr('data-sidepanel-content');

		file_to_load = country_code+'-'+region_code+'-'+sidepanel_content+'.php';

		$("#sidepanel-content").load('content/'+file_to_load);

	}).change();


	// click on links to sidepanel
	$('body').on('click', '.sidepanel-content', function(e){
		e.preventDefault();


		// check if  data attr exist and set variables
		if ($(this).is('[data-menu-target]')) {
			// attribute exists
			menu_target = $(this).attr('data-menu-target');
		}

		if ($(this).is('[data-sidepanel-content]')) {
			// attribute exists
			sidepanel_content = $(this).attr('data-sidepanel-content');
		}

		if ($(this).is('[data-sidepanel-item]')) {
			// attribute exists
			sidepanel_item = $(this).attr('data-sidepanel-item');
		}

		/*
		if ($(this).is('[data-country-code]')) {
			// attribute exists
			country_code = $(this).attr('data-country-code');
		}

		if ($(this).is('[data-country-name]')) {
			// attribute exists
			country_name = $(this).attr('data-country-name');
		}*/
		console.log('menu target = '+menu_target+' | content = '+sidepanel_content+' | item = '+sidepanel_item+' | country code = '+country_code+' | country = '+country_name );


		// figure out what file to load
		if ( menu_target == 'main' ) {
			//si menu target MAIN
			file_to_load = country_code+'-'+sidepanel_content+'.php';
			$('#sidepanel-navigation .showmenu').removeClass('showmenu');
			mark_current(menu_target,sidepanel_content,'');
		} else {
			//si menu target SUB
			file_to_load = sidepanel_item+'-'+sidepanel_content+'.php';

			if(sidepanel_item != 'arroz-basmati') {
				show_submenu(menu_target);
				mark_current(menu_target,sidepanel_content,sidepanel_item);
			}



		}
		console.log(file_to_load);

		//load file in sidepanel
		$("#sidepanel-content").load('content/'+file_to_load);


	});




	//make submenu visible
	function show_submenu(submenu_target){
		console.log('show sub! '+submenu_target);

		$('#sidepanel-navigation .'+submenu_target).addClass('showmenu');
		$('#sidepanel-navigation .sidepanel-submenu').not( '.'+submenu_target ).removeClass('showmenu');

	}

	//mark current link
	function mark_current(menu_target,content,item){
		console.log('target menu '+menu_target+' | content '+content+' | item '+item);

		if (menu_target == 'main') {
			//
			$('.sidepanel-menu > li > a[data-sidepanel-content="'+content+'"]').addClass('current');
			$('.sidepanel-menu > li > a').not( '[data-sidepanel-content="'+sidepanel_content+'"]' ).removeClass('current');
		} else {
			//target menu sub-dishes | content generalinfo | item bisi-bele-bath
			$('.'+menu_target+' > li > a[data-sidepanel-content="'+content+'"]').addClass('current');
			$('.'+menu_target+' > li > a').not( '[data-sidepanel-content="'+sidepanel_content+'"]' ).removeClass('current');
			$('.submenu').not('.'+menu_target).find('li a').removeClass('current');

			var parent_menu  = menu_target.replace("sub-", "");
			$('.sidepanel-menu > li > a[data-sidepanel-content="'+parent_menu+'"]').not('.current').addClass('current');

		}

	}

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

	var move_by;


	if (window_width <= 768) {
		move_by = window_width+'px';
	} else if (window_width <= 900) {

		move_by = '500px';

	} else {
		move_by = '700px';
	}


	$('#main').animate({
		right: move_by
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
			$('#searchbox').css('width','270px'); //TODO: inelegant, change
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
	submitIcon.on('mouseup',function(){
    	return false;
	});
	searchBox.on('mouseup',function(){
    	return false;
	});
	$(document).on('mouseup',function(){
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

function fade_pic() {
	$('.fadepic').on('mouseenter', function(e){
		$(this).find('img').css("opacity","0.75");;
	});
	$('.fadepic').on('mouseleave', function(e){
		$(this).find('img').css("opacity","1");;
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
	fade_pic();
	populate_side();
	//dev_disable();

	//search_map();
});