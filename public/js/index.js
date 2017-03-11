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


	//Listening
	$("button.btn-primary").on('click',function(){
		var sel = $(this).prev();
		var iType = sel.data('type');
		var text = sel.find(':selected').text();
		var id = sel.find(':selected').val()

		itineraryAdd(iType, id, 0);	

	})

	$("#itinerary").on('click','button',function(){
		var id = $(this).val();
		var iType = $(this).data('type');
		
		itineraryDelete(iType,id, 0);
	})


});

var itineraryAdd = function(type, id, day){
	var oneDay = itineraries[day]
	if (oneDay[type].indexOf(id) < 0){
			oneDay[type].push(id)
	}
	renderItinerary(day);
};

var itineraryDelete = function(type, id, day){
	var oneDay = itineraries[day]

	var arr = oneDay[type].reduce(function(result, item){
    			if(item !== id){
    				result.push(item);
    			}
    			return result;
    		},[]);

	oneDay[type] = arr;
	renderItinerary(day);
};


var renderItinerary = function(day){

    var todayItinerary = itineraries[day]

    var hotelsContainer = $('#itinerary').find('.list-group')[0];
    var restaurantsContainer = $('#itinerary').find('.list-group')[1];
    var activitiesContainer = $('#itinerary').find('.list-group')[2];
  
    renderContainer(hotelsContainer,hotels, 'hotel',0);
	renderContainer(restaurantsContainer,restaurants, 'restaurant',0);
	renderContainer(activitiesContainer,activities, 'activity',0);

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
    		+ '</span>' + 
            '<button data-type='+type+' value='+Obj.id+' class="btn btn-xs btn-danger remove btn-circle">x</button>' +
    		'</div>'
    	}).join('')

    $(container).append(renderedContent);
}

