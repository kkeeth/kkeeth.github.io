var correct = 'test1234'

function valid_check(user, pass) {
   var ret = ''

   if (user.length == 0 || pass.length == 0)
      ret = 'Please enter ID and Password !!'
   else if (pass != correct)
      ret = 'Invalid ID or Password !!'
   else if (pass.length > 0 && pass === correct)
      ret = 'Correct !!'

   return ret
}
