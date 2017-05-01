var correct = 'test1234'

function valid_check(user, pass) {
   var key = ''

   if (user.length == 0 || pass.length == 0)
      key = 'ng1'
   else if (pass != correct)
      key = 'ng2'
   else if (pass.length > 0 && pass === correct)
      key = 'ok'

   return get_message(key)
}

function get_message(key) {
	switch(key) {
		case 'ng1':
			return 'Please enter ID and Password !!'
			break
		case 'ng2':
			return 'Invalid ID or Password !!'
			break
		case 'ok':
			return 'Correct !!'
			break
		default:
			break
	}
}