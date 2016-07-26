$(document).ready(function(){
	$('.myForm').submit(function(event) {
		var textboxVal = $('#textbox').val();
		$('.list').append('<li>' + textboxVal + '</li>').css("list-style-image", "url('checkbox.png')");
		event.preventDefault();
		$('.myForm')[0].reset();
	});

	$('.Form1').submit(function(event) {
		var clearVal = $('#li_list').remove().slidedown();
	});

	//if the li is clicked the li will be crossed off and then put at 
	//bottom oflist

	$('.list').on('click', function(event){
		$(console.log("first click function enabled"));
		$(this).closest('li').css("text-decoration", "line-through").css("list-style-image", "url('check.png')");
		$(console.log("not broken"));
	});

	/*$('ul').dblclick(function(event){
		$(console.log("double click function enabled"));
		$(this).closest('li').css("text-decoration", "none");
	});*/

	$('ul').dblclick(function(event){
		$(this).closest('li').remove();
	});

});