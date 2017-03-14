$(document).ready(function() {
	$('#button').mouseenter(function() {
		$(this).css('-webkit-box-shadow', '1px 1px rgba(0,0,0,0.5)',
            '1px 1px rgba(255,255,255,1)');
		$(this).css('-moz-box-shadow', '1px 1px rgba(0,0,0,0.5)',
            '1px 1px rgba(255,255,255,1)');
		$(this).css('box-shadow', '1px 1px rgba(0,0,0,0.5)',
            '1px 1px rgba(255,255,255,1)');
	});
});
