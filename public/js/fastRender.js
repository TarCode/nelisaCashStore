$(document).ready(function() {
   
	$("#productSearchBar").keydown(function(){
			var searchValue = $("#productSearchBar").val();
			$.get("/products/search/" + searchValue, function(results){
				$( "#productList" ).html( results );
			});
	});

	$("#saleSearchBar").keydown(function(){
			var searchValue = $("#saleSearchBar").val();
			$.get("/sales/search/" + searchValue, function(results){
				$( "#saleList" ).html( results );
			});
	});

	$("#purchaseSearchBar").keydown(function(){
			var searchValue = $("#purchaseSearchBar").val();
			$.get("/purchases/search/" + searchValue, function(results){
				$( "#purchaseList" ).html( results );
			});
	});

	$("#supplierSearchBar").keydown(function(){
			var searchValue = $("#supplierSearchBar").val();
			$.get("/suppliers/search/" + searchValue, function(results){
				$( "#supplierList" ).html( results );
			});
	});

	$("#categorySearchBar").keydown(function(){
			var searchValue = $("#categorySearchBar").val();
			$.get("/category/search/" + searchValue, function(results){
				$( "#categoryList" ).html( results );
			});
	});
});