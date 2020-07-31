$(() => {
	$('#js_numList li').each(function(i) {
		$(this).find('.num').text(i + 1);
	})
})