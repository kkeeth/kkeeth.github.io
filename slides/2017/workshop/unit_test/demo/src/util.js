var correct = 'test1234'

function auth_check(user, pass) {
	var key = ''

	if (user == void 0 || pass == void 0) {
		key = 'required'
	}
	else if (user.length == 0 || pass.length == 0) {
		key = 'required'
	}
	else if (pass != correct) {
		key = 'unauthenticated'
	}
	else if (pass.length > 0 && pass === correct) {
		key = 'login'
	}

	return key
}

function get_message(key) {
	switch(key) {
		case 'required':
			return 'Please enter ID and Password !!'
			break
		case 'unauthenticated':
			return 'Invalid ID or Password !!'
			break
		case 'login':
			return 'Correct !!'
			break
		default:
			break
	}
}