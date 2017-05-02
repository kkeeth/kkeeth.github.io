$(function() {
	$('#send').on('click', function() {
		var user = $('#user').val(),
			 pass = $('#pass').val()
			 key = valid_check(user, pass)

		$('#result').text(get_message(key))
	})
})

