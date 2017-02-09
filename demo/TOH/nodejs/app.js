const express = require('express'),
      logger  = require('morgan'),
      bodyParser = require('body-parser')
const app = express()

// テンプレート
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

// 以下の２つは順番が大事
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

// ログの表示
app.use(logger('dev'))
// 静的ファイルの配信のディレクトリを指定
app.use(express.static(__dirname + '/public'))
// middlewareを自作
app.use((req, res, next) => {
   console.log('my custom middleware!!')
   next()   // 必須
})
// パラメータによって処理を分ける
app.param('id', (req, res, next, id) => {
   let users = ['hoge', 'fuga', 'piyo']
   req.params.name = users[id] || 'nobody'
   next()
})

// GETの処理
app
   // viewのエンジンを指定しない場合
   /*
   .get('/', (req, res) => {
      res.send('Hello Express!!')
   })
   */
   .get('/', (req, res) => {
      // エンジンを使う場合拡張子は不要
      res.render('index', {mess: 'by node.js'})
   })
   .get('/new', (req, res) => {
      // フォーム用の画面
      res.render('new')
   })
   .get('/hello/:id', (req, res) => {
      res.send('hello ' + req.params.name)
   })
   .get('/bye/:id', (req, res) => {
      res.send('bye ' + req.params.name)
   })
   .get('/about', (req, res) => {
      res.send('About this page!')
   })
   // ?はオプショナルの指定
   .get('/users/:name?', (req, res) => {
      if (req.params.name) {
         res.send('Hello ' + req.params.name)
      }
      else {
         res.send('Hello Nobody')
      }
   })
   // 正規表現でのキャプチャも取れる
   .get('/items/:id([0-9]+)', (req, res) => {
      res.send('item no: ' + req.params.id)
   })
   /**
    * ファイルを読み込む
    * 個別に指定する場合は以下のように書く
    *
   .get('/hello.txt', (req, res) => {
      // res.send('hello from app.js')
      res.sendfile(__dirname + '/public/hello.txt')
   })
    */

// POSTの処理
app
   .post('/create', (req, res) => {
      res.send(req.body.name)
   })

app.listen(3000)
console.log('server starting...')
