$(document).ready(function(){
	$('.myForm').submit(function(event) {
		var textboxVal = $('.textbox').val();
		$('.list').append('<li><input class="checkbox" type="checkbox">' + textboxVal + '<image class="x" src="delete.png"></image></li>');

		event.preventDefault();
		$('.myForm')[0].reset();
	});

	$('.Form1').submit(function(event) {
		$('#li_list').remove();
	});

	$('ul').on('click', '.x', function(e){
			$(this).closest('li').remove();
	});

	$('ul').on('click', '.checkbox', function(e){
		$(this).closest('li').toggleClass('selected');
	});
});