
$( document ).ready(function() {

	console.log($("html").html());	
	
	var array = $(".divs").children();
	
	console.log("before");
	
	for(let i = 0; i < array.length; i++){
		console.log($(array[i]).height());
	}
	
	array.sort( function(a,b) {
	   return $(b).height() - $(a).height();
	});
	
	console.log("after");
	
	for(let i = 0; i < array.length; i++){
		console.log($(array[i]).height());
	}
	
	$(".divs").parent().append(array);
	
	console.log($("html").html());
	
});
