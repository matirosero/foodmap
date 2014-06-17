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
	new_content = '<h4>' + country_name + '</h4>';
	
	if(search_string !=="") {

		if(search_string == 'arroz' || search_string == 'frijoles' ) {
			result_kind = 'Ingrediente';
			new_content += '<a class="clickme" href="#about">1 '+ result_kind +' (' + search_string + ')</a> | \
			 <a class="clickme" href="#about">24 Platos</a>';
		} else if(search_string == 'sushi') {
			result_kind = 'Plato';
			new_content += '<a class="clickme" href="#about">4 Ingredientes</a> | \
			 <a class="clickme" href="#about">1 '+ result_kind +' (' + search_string + ')</a>';
		}

	} else {
		new_content += '<a class="clickme" href="#about">80 Ingredientes</a> | \
			 <a class="clickme" href="#about">24 Platos</a>';
	}
		
	$("#showinfo").css("opacity","0.75");

	$("#content").html(new_content);
	
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
	
	var new_side_content;
	
	//When click links in showinfo
	$("a.clickme").on("click", function(){
		
		var result_text = $(this).text();
		var result_number = result_text.match(/\d+/);
		var result_text = result_text.replace(/[0-9]+\s/g, "");
		var result_kind;
		var result_class;
		
		//If the user clicks on the INGREDIENTS or PLATOS link
		if (result_text == "Ingredientes" || result_text == "Platos") { 

			//TODO: doesn't take into account if it's just ingredients for a dish
			result_kind = result_text;
			
		} else {
			
			//If user clicks on a specific dish or ingredient, get the different variables from the string
			
			//KIND of result: Ingrediente or Plato
			result_kind = result_text.match(/^[a-zA-Z]+/g); //FIXED WHITESPACE PROBLEM
			
			//Name of the specific thing being searched (i.e. arroz or sushi)
			//Get rid of whitespace and parenthesis	
			var result_name = result_text.replace(result_kind, "").replace(" (", "").replace(")", "");

		}
		
		
		//Set result_class from result_kind
		if (result_kind == 'Ingredientes' || result_kind == 'Ingrediente') {
			result_class = 'ingredient';
		} else if (result_kind == 'Platos' || result_kind == 'Plato') {
			result_class = 'recipe';
		}
		
		
		//Generate side content START
		
		//Generate <h2>
		if (!result_name) {
			//If there's no specific result going in
			console.log('No hay nombre');
			new_side_content = '<h2><span class="light">' + result_number + ' ' + result_kind + ' de</span> ' + country_name + '</h2>';
		} else {
			//If there is a specific result going in (arros || sushi)
			console.log('Si hay');
			new_side_content = '<h2>' + result_name + ' <span class="light">de ' + country_name + '</span></h2>';
		}
		
		//Add paragraph and open <ul>
		new_side_content += '<p>Consectetur adipiscing elit. Etiam viverra dolor id enim venenatis hendrerit. Donec faucibus urna vitae lorem viverra rutrum. Fusce vehicula est at velit scelerisque commodo. Mauris eleifend vehicula nisi at gravida. Quisque viverra quam nec lorem congue commodo. Pellentesque lorem ligula, aliquam ut placerat ut, placerat at enim. Donec tincidunt faucibus ultrices.</p>\
		<ul class="blocks">';
			
		
		//Loop through results and create their content	
		var c = 0;
		for (var c=0; c<result_number; c++) { 
			new_side_content += '<li class="foodresult ' + result_class + '">\
				<a class="foodresult-image" href="">\
					<img src="images/' + result_class + '.jpg" alt="" />\
				</a><a class="foodresult-name" href="">\
					<h4>Nombre del ingrediente</h4>\
				</a></li>';
		}
		
		//Close </ul>
		new_side_content += '</ul>';
			
		//Insert content in sidepanel
		$("#sidepanel-content").html(new_side_content);		
		
	});
}


//Open side panel function
function open_side() {
	
	$("a.clickme").on("click", function(e){ //$("[class^=main]")
    	e.preventDefault();
    
		//alert('open sesame');
		var hrefval = $(this).attr("href");
    
		if(hrefval == "#about") { 
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
	var submitIcon = $('.searchbox-icon');
	var inputBox = $('.searchbox-input');
	var searchBox = $('.searchbox');
	
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
	

	//search_map();
});