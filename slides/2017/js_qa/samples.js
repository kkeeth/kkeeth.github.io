/** bind関数のサンプル **/
/** サンプル1（thisを束縛） **/
var context = function() {
   console.info(this)
}
context()   // Window

var obj = {
   x: 123,
   y: 'hoge'
}
var test = context.bind(obj)
test()   // Object {x: 123, y: "hoge"}


/** サンプル2（引数を束縛） **/
function sum(x, y, z) {
   console.info(x)
   console.info(y)
   console.info(z)
   console.info(x+y+z)
}
sum(1, 2, 3)
// 1
// 2
// 3
// 6

var foo = sum.bind(null, 10)
foo(20, 30)
// 10
// 20
// 30
// 60


/** callメソッドのサンプル **/
const main_obj = {
   name: 'main !!',
   echo: function() {
      console.info(this.name)
   }
}
const sub_obj = {
   name: 'sub !!'
}

main_obj.echo()  // => 'main !!'
sub_obj.echo()  // => エラー
main_obj.echo.call(sub_obj) // => 'sub !!'


/** クラス設計サンプル **/
/** パターン1 **/
var classHoge = function(a, b) {
   this.hoge = a
   this.fuga = b
   this.init()
}
classHoge.prototype = {
   init: function() {
      this.buttonBack(),
      this.buttonNext()
   },
   buttonBack: function() {
      $('#btn-back').on('click', function() {
         alert('back')
      })
   },
   buttonNext: function() {
      $('#btn-next').on('click', function() {
         alert('next')
      })
   }
}
// htmlのscriptタグで
var foo = new classHoge('hoge', 123)

/** パターン2 **/
/** パターン1をコンパクトにした形 **/
var classHoge = (function() {
    function classHoge(a, b) {
       this.hoge = a
       this.fuga = b
       this.init()
    }
    classHoge.prototype = {
      init: function() {
         this.buttonBack(),
         this.buttonNext()
      },
      buttonBack: function() {
         $('#btn-back').on('click', function() {
            alert('back')
         })
      },
      buttonNext: function() {
         $('#btn-next').on('click', function() {
            alert('next')
         })
      }
   }
   return classHoge
})()
// htmlのscriptタグで
var foo = new classHoge('hoge', 123)

/** パターン3 **/
/** クローズドなものとパブリックなものをはっきり分ける **/
var app = (function() {
   var _hoge,
       _fuga

   function foo() {
      // 〜
   }
   function bar() {
      // 〜
   }
   $('#hoge').click(function() {
      alert('hoge')
   })

   refutn {
      hoge: this._hoge
      fuga: this._fuga
      aaa: function() {
         // 〜
      },
      bbb: function() {
         // 〜
      }
   }
})()

/** パターン4 **/
/** 最も直接的な書き方 **/
function hoge() {
   var t = $('#hoge')
   t.length > 0 &&
     // 〜
}
function fuga() {
   var t = $('#fuga')
   t.length > 0 &&
     // 〜
}
$(function() {
   // 〜
   hoge(),
   fuga()
})


/** クロージャのサンプル **/
/** サンプル1（プライベート変数） **/
const app = (() => {
   let _hoge = 'hoge'
   return {
      get_hoge: () => _hoge
   }
})()

/** サンプル2（ダブルクリック防止） **/
$((){
   let is_clicked = false

   $('#submitBtn').click(() => {
      if (is_clicked) {
         alert('既にクリック済みです。お待ちください。')
         return false
      }
      is_clicked = true
   })
})


/** スコープのサンプル **/
// グローバルの変数
let hoge = 'hoge',
    fuga = 'fuga'

// ブロックスコープ用の関数
const show_hoge = () => {
   let hoge = 999
   console.info(hoge)   // ここにはthisは不要
}

console.info(hoge)  // => 'hoge'
show_hoge() // => 999

// グローバル変数の変更
const change_hoge = () => {
   hoge = 111
   console.info(hoge)   // ここもthisは不要
}

console.info(hoge)  // => 'hoge'
change_hoge()   // => 111
console.info(hoge)  // => 111 書き換わる！

// ブロックスコープ用のオブジェクト
const obj = {
   foo: 'foo',
   fuga: 123,
   show_inner_fuga: function() {
       console.info(this.fuga)  // ここにはthisが必要
   },
   show_outer_fuga: function() {
      console.info(fuga)
   }
}

console.info(fuga)  // => 'fuga'
console.info(obj.fuga)  // => 123

console.info(foo) // => エラー
obj.show_inner_fuga() // => 123
obj.show_outer_fuga() // => 'fuga'