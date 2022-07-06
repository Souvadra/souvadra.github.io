$(document).ready( function() {
	
	$.getJSON("contact.json", function load_contact_json(contact_details){
		if (contact_details["location"]){
			var itr_obj = $(".location");
			for (var x in itr_obj)
				itr_obj[x].innerHTML = itr_obj[x].innerHTML+" "+contact_details["location"];
		}
		else{
			$(".location").hide();
		}

		if (contact_details["email"]){
			var itr_obj = $(".email");
			for (var x in itr_obj)
				itr_obj[x].href = "mailto:"+contact_details["email"];

			var itr_obj = $(".email-full");
			for (var x in itr_obj)
				itr_obj[x].innerHTML = itr_obj[x].innerHTML+" "+contact_details["email"];
		}
		else{
			$(".email").hide();
		}

		if (contact_details["linkedin"]){
			var itr_obj = $(".linkedin");
			for (var x in itr_obj)
				itr_obj[x].href = contact_details["linkedin"];
		}
		else{
			$(".linkedin").hide();
		}

		if (contact_details["github"]){
			var itr_obj = $(".github");
			for (var x in itr_obj)
				itr_obj[x].href = contact_details["github"];
		}
		else{
			$(".github").hide();
		}

		if (contact_details["twitter"]){
			var itr_obj = $(".twitter");
			for (var x in itr_obj)
				itr_obj[x].href = contact_details["twitter"];
		}
		else{
			$(".twitter").hide();
		}

		if (contact_details["resume"]){
			var itr_obj = $(".resume");
			for (var x in itr_obj)
				itr_obj[x].href = contact_details["resume"];
		}
		else{
			$(".resume").hide();
		}
	});

	$(".collapse-section").on("click", function() {
		 $("i", this).toggleClass("fa-angle-down fa-angle-up");
	});

	setTimeout(function (){
		$("#load").hide();
		$("#medium-widget").show();
		$("#contact").show();
	}, 500);

});