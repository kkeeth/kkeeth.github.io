var util = require('../src/util-node.js')

describe('valic_check関数のテスト', function() {
   it('case1: どちらも空のケース', function() {
      if (util.auth_check() === 'required') {
         console.log('OK')
      } else {
         throw new Error('NG')
      }
   })
   it('case2: どちらも空文字列のケース', function() {
      if (util.auth_check('', '') === 'required') {
         console.info('OK')
      } else {
         throw new Error('NG')
      }
   })
   it('case3: どちらか一方が空のケース', function() {
      if (util.auth_check('hoge') === 'required') {
         console.info('OK')
      } else {
         throw new Error('NG')
      }
   })
   it('case3: どちらか一方が空のケース', function() {
      if (util.auth_check('', 'test') === 'login') {
         console.info('OK')
      } else {
         throw new Error('NG')
      }
   })
   it('case4: パスワード不正解のケース', function() {
      if (util.auth_check('hoge', 'test') === 'unauthenticated') {
         console.info('OK')
      } else {
         throw new Error('NG')
      }
   })
   it('case5: パスワード正解のケース', function() {
      if (util.auth_check('hoge', 'test1234') === 'login') {
         console.info('OK')
      } else {
         throw new Error('NG')
      }
   })
})
