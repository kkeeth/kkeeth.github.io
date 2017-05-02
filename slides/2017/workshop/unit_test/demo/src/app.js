$(function() {
	$('#send').on('click', function() {
		var user = $('#user').val(),
			pass = $('#pass').val(),
			key  = auth_check(user, pass)

		$('#result').text(get_message(key))
	})
})

