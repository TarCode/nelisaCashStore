$(document).ready(function() {
   var count = 0;
	$("#searchBar").keypress(function(){
		count++;
		//if(count >= 3){
			var searchValue = $("#searchBar").val();
			$.get("/products/search/" + searchValue, function(results){
				//set inner html
				//alert(results)
				$( "#productList" ).html( results );
			});

		//}
	})
});