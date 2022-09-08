
$( document ).ready(function() {
	$( "*[data-id]" ).each(function() {
	  console.log($( this ));
	  console.log($( this ).html());
	});
});
