$(function() {
	$('#send').on('click', function() {
		var user = $('#user').val(),
			pass = $('#pass').val(),
			key  = auth_check(user, pass)

		if (key === 'login')
			$('#result').addClass('correct')
		else
			$('#result').removeClass('correct')

		$('#result').text(get_message(key))
	})
})
