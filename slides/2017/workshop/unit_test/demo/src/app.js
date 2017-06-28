$(function() {
	$('#send').on('click', function() {
		var user = $('#user').val(),
			pass = $('#pass').val(),
			key  = auth_check(user, pass)

		$('#result').text(get_message(key))

		if (key === 'login')
			$('#result').addClass('correct')
		else
			$('#result').removeClass('correct')
	})
})

