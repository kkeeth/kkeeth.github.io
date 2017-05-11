console.info('valic_check関数のテスト')
console.info('IDの文字数が0以上かつ、Passwordがtest1234だったら正解')
console.log('==========\n\n')

console.info('case1: どちらも空のケース')
if (auth_check() === 'required')
   console.log('OK')
else
   console.error('NG')


console.info('case2: どちらも空文字列のケース')
if (auth_check('', '') === 'required')
   console.log('OK')
else
   console.error('NG')


console.info('case3-1: 1つ目が空のケース')
if (auth_check('hoge') === 'required')
   console.log('OK')
else
   console.error('NG')


console.info('case3-2: 2つ目が空のケース')
if (auth_check('', 'test') === 'required')
   console.log('OK')
else
   console.error('NG')


console.info('case4: パスワード不正解のケース')
if (auth_check('hoge', 'test') === 'unauthenticated')
   console.log('OK')
else
   console.error('NG')


console.info('case5: パスワード正解のケース')
if (auth_check('hoge', 'test1234') === 'login')
   console.log('OK')
else
   console.error('NG')
