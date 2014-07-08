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

	//AmCharts.theme = AmCharts.themes.dark;

	// create AmMap object
	var map = new AmCharts.AmMap();

	// set path to images
	map.pathToImages = "ammap/images/";

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
				getAreasFromMap:true
	};
	// pass data provider to the map object
	map.dataProvider = dataProvider;

	/* create areas settings
	* autoZoom set to true means that the map will zoom-in when clicked on the area
	* selectedColor indicates color of the clicked area.
	*/
	map.areasSettings = {
		autoZoom: true,
		selectedColor: "#CC0000",
		color: "#aaaaaa"
	};

	// let's say we want a small map to be displayed, so let's create and add it to the map
	//map.smallMap = new AmCharts.SmallMap();

	// write the map to container div
	map.write("mapdiv");


	//http://jsfiddle.net/amcharts/k67gB/light/
	map.addListener("clickMapObject", function (event) {

		var country_name;
		var country_code;
		country_name = event.mapObject.title;
		country_code = event.mapObject.id;

		//call other functions when click on country
		close_guidebox();
		show_showinfo();
		populate_showinfo(country_name, country_code);
		resize_map(); //1.4.1.2

	});



	/* FoodMap specific functions
	-------------------------------------------------------------------*/

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
				} else if(search_string == 'sushi') {
					country_code = ['JP'];
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


	// Resize map
	// Since 1.4.1.2
	function resize_map() {

		//console.log('sidepanel will change to '+sidepanel_width);
		window_width = $(window).width();

		var original_map_width = $('#mapdiv').width();
		console.log('original window = ' + original_map_width);

		var new_map_width = window_width - 710 + 'px'; //change this to - 700
		console.log('new map width = ' + new_map_width);

		function toggle_map_size(map_width,margin_left){

			$('#mapdiv').css({
				width : map_width,
				marginLeft: margin_left

			});

			map.validateNow();
		}

		$("a.clickme").click(function(e){
			toggle_map_size(new_map_width,'700px')
		});

		$('#close-sidepanel').click(function(e){
			toggle_map_size(original_map_width,0)
		});

	}

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
			new_ingredients = '1 '+ result_kind +' (' + search_string + ')';
			new_dish = '24 Platos';

			new_href_ingredient = 'arroz';
			new_href_dish = 'dishes';

			//new_content += '<a class="clickme" href="#about">1 '+ result_kind +' (' + search_string + ')</a> | \
			 //<a class="clickme" href="#about">24 Platos</a>';
		} else if(search_string == 'sushi') {
			result_kind = 'Plato';
			new_ingredients = '4 Ingredientes';
			new_dish = '1 '+ result_kind +' (' + search_string + ')';

			new_href_dish = 'sushi';
			new_href_ingredient = 'ingredients';
			//new_content += '<a class="clickme" href="#about">4 Ingredientes</a> | \
			 //<a class="clickme" href="#about">1 '+ result_kind +' (' + search_string + ')</a>';
		}

	} else {
		new_ingredients = '80 Ingredientes';
		new_dish = '24 Platos';

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



	//When click links in showinfo
	$('.modal-content, #sidepanel-navigation, #sidepanel-content').on("click", 'a', function(e){
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
			var sidepanel_item = $(this).attr('data-sidepanel-item');
			//console.log('this is in: '+parent_menu_li);

			parent_menu_li.find('.submenu-container').load('/blocks/sidepanel-submenu-'+child_menu_type+'.php',
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
		$("#sidepanel-content").load('content/'+sidepanel_content_filename+'.html');




	});



}



//Open side panel function
function open_side() {

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