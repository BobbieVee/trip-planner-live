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
		//var val = sel.val();
		var text = sel.find(':selected').text();
		var id = sel.find(':selected').val()
		console.log('text and value',text,id)

	})

});

