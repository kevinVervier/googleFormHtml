jQuery( document ).ready(function( $ ) {
	// variable to hold request
	var request;
	// bind to the submit event of our form
	$("#test-form").submit(function(event){
		// abort any pending request
		if (request) {
			request.abort();
		}
		// setup some local variables
		var $form = $(this);
		// let's select and cache all the fields
		var $inputs = $form.find("text, input, select, button, textarea");
		// serialize the data in the form
		var serializedData = $form.serialize();
	
		// fire off the request to /form.php
		request = $.ajax({
			url: "https://script.google.com/macros/s/AKfycby7IJigwmpzMnw8801h9KKSdUrwMbKSdwfvnKNVNM_KbcpT9UVR/exec",
			type: "post",
			data: serializedData
		});
	
	
		// prevent default posting of form
		event.preventDefault();
	});
});
