"use strict"
$(document).ready(function(){

	/* in order to use GIPHY, get an API key 	*/
	/* api_key=b6e909924b444d769a6516f7c60d3c08	*/

	var sResults = [];

	$('#search-GIPHY').on("click", getClip);
	$('.prevSearch').on("click", getClip);

	function getClip(event){

		event.preventDefault();

		$('#search-results').empty();

		var TERMS = $('#search-terms').val();
		var COUNT = $('#search-count').val();

		$.ajax({

			url: "http://api.giphy.com/v1/gifs/search?q=" + TERMS + "&api_key=b6e909924b444d769a6516f7c60d3c08&limit=" + COUNT,
			method: "GET"
		}).done(function(response){

			console.log(response);
		/*	console.log( $('#search-terms').val() );
			console.log( $('#search-terms').text() );
		*/

		/*	console.log(response.data);
			console.log(response.data[0]);
			console.log(response.data[0].images);
			console.log(response.data[0].images.fixed_height_small);
		*/

		/*	add the button to searched movie array */
			sResults.push(TERMS);
			renderButtons();

			for(var i = 0; i < response.data.length; ++i){

				var respo = response.data[i].images.fixed_height_small
				$('#search-results').append("<img src='" + respo['url'] + "'>");

				/* var photoDiv = $("<div>");
				photoDiv.addClass("onePic");
				photoDiv.append("<img src='" + respo['url'] + "'>");

				$('#search-results').append(photoDiv); */
			}

			console.log(sResults);

		}).fail(function(){

			console.log("Hey Alexus, it still didn't work!");
		});

	}

	function renderButtons(){

		$("#search-buttons").empty();

		// Looping through the array of movies
        for (var i = 0; i < sResults.length; i++) {

        	/* create a button */
        	var a = $("<button>");

          	// Adding a class
          	a.addClass("prevSearch");

		    // Added a data-attribute
		    a.attr("data-name", sResults[i]);
		          
		    // Provided the initial button text
		    a.text(sResults[i]);
		          
		    // Added the button to the HTML
		    $("#search-buttons").append(a);
        }

	}

	/* }); */

});