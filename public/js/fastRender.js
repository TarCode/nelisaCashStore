$(document).ready(function() {
   
	$("#productSearchBar").keypress(function(){
			var searchValue = $("#productSearchBar").val();
			$.get("/products/search/" + searchValue, function(results){
				$( "#productList" ).html( results );
			});
	});

	$("#saleSearchBar").keypress(function(){
			var searchValue = $("#saleSearchBar").val();
			$.get("/sales/search/" + searchValue, function(results){
				$( "#saleList" ).html( results );
			});
	});

	$("#purchaseSearchBar").keypress(function(){
			var searchValue = $("#purchaseSearchBar").val();
			$.get("/purchases/search/" + searchValue, function(results){
				$( "#purchaseList" ).html( results );
			});
	});
});