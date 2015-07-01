$(document).ready(function() {
   var count = 0;
	$("#searchBar").keypress(function(){
		count++;
		//if(count >= 3){
			var searchValue = $("#searchBar").val();
			$.get("/products/search/" + searchValue, function(results){
				$( "#productList" ).html( results );
			});

		//}
	})
});