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

	$("#supplierSearchBar").keypress(function(){
			var searchValue = $("#supplierSearchBar").val();
			$.get("/suppliers/search/" + searchValue, function(results){
				$( "#supplierList" ).html( results );
			});
	});

	$("#categorySearchBar").keypress(function(){
			var searchValue = $("#categorySearchBar").val();
			$.get("/category/search/" + searchValue, function(results){
				$( "#categoryList" ).html( results );
			});
	});
});