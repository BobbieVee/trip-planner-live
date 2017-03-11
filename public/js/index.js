$(document).ready(function(){
	$('#hotel-choices').empty();
		var options ="";
	hotels.forEach(function(hotel){
		options +='<option value="' + hotel.id + '">' + hotel.name + '</option>'
	})
	$('#hotel-choices').append(options);

	$('#restaurant-choices').empty();
		var options ="";
	restaurants.forEach(function(restaurant){
		options +='<option value="' + restaurant.id + '">' + restaurant.name + '</option>'
	})
	$('#restaurant-choices').append(options);

	$('#activity-choices').empty();
		var options ="";
	activities.forEach(function(activity){
		options +='<option value="' + activity.id + '">' + activity.name + '</option>'
	})
	$('#activity-choices').append(options);

	$("button.btn-primary").on('click',function(){
		var sel = $(this).prev();
		var iType = sel.data('type');
		var text = sel.find(':selected').text();
		var id = sel.find(':selected').val()

		itineraryAdd(iType, id, 0);	

	})

});

var itineraryAdd = function(type, id, day){
	var oneDay = itineraries[day]
	if (oneDay[type].indexOf(id) < 0){
			oneDay[type].push(id)
	}
	renderItinerary(day);
};

var renderItinerary = function(day){
	var html = '<div class="itinerary-item"> \
       		<span class="title">TESTAndaz Wall Street</span> \
            <button class="btn btn-xs btn-danger remove btn-circle">x</button> \
            </div>'

    var todayItinerary = itineraries[day]
    console.log(itineraries[day])

    var hotelsContainer = $('#itinerary').find('.list-group')[0];
    var restaurantsContainer = $('#itinerary').find('.list-group')[1];
    var activitiesContainer = $('#itinerary').find('.list-group')[2];
    /*
    //hotels rendering
    $(hotelsContainer).empty();

    renderedContent = todayItinerary['hotel'].map(function(hotel){
    		var hotelObj = hotels.filter(function(item){
    			return item.id===hotel*1
    		})[0];
    		return '<div class="itinerary-item"><span class="title">' + 
    		hotelObj.name
    		+ '</span></div>'
    	}).join('')

    $(hotelsContainer).append(renderedContent);*/

    renderContainer(hotelsContainer,hotels, 'hotel',0);
	renderContainer(restaurantsContainer,restaurants, 'restaurant',0);
	renderContainer(activitiesContainer,activities, 'activity',0);
    



    //console.log('test', hotels)
}

function renderContainer(container, arr, type, day){
	$(container).empty();

	todayItinerary = itineraries[day]
    renderedContent = todayItinerary[type].map(function(id){
    		var Obj = arr.filter(function(item){
    			return item.id===id*1
    		})[0];
    		return '<div class="itinerary-item"><span class="title">' + 
    		Obj.name
    		+ '</span></div>'
    	}).join('')

    $(container).append(renderedContent);
}

