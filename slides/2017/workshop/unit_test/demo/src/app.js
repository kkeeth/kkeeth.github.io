$(function() {
	$('#send').on('click', function() {
		var user = $('#user').val(),
			 pass = $('#pass').val()

		$('#result').text(valid_check(user, pass))
	})
})

