console.info('valic_check関数のテスト')
console.info('IDの文字数が0以上かつ、Passwordがtest1234だったら正解')

console.info('どちらも空のケース')
if (valid_check() === 'Please enter ID and Password !!')
   console.log('OK')
else
   console.log('NG')

console.info('どちらも空文字列のケース')
if (valid_check('', '') === 'Please enter ID and Password !!')
   console.log('OK')
else
   console.error('NG')

console.info('どちらか一方が空のケース')
if (valid_check('hoge') === 'Please enter ID and Password !!')
   console.log('OK')
else
   console.error('NG')
if (valid_check('', 'test') === 'Please enter ID and Password !!')
   console.log('OK')
else
   console.error('NG')

console.info('パスワードの正解/不正解のケース')
if (valid_check('hoge', 'test') === 'Invalid ID or Password !!')
   console.log('OK')
else
   console.error('NG')
if (valid_check('hoge', 'test1234') === 'Correct !!')
   console.log('OK')
else
   console.error('NG')
