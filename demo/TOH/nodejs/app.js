const express = require('express'),
      logger  = require('morgan'),
      bodyParser = require('body-parser')
const app = express()


// settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')


// designation of parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// show logs
app.use(logger('dev'))

// GET processing
app
   // viewのエンジンを指定しない場合
   /*
   .get('/', (req, res) => {
      res.send('Hello Express!!')
   })
   */
   .get('/', (req, res) => {
      // エンジンを使う場合拡張子は不要
      res.render('index', { heroes: store.heroes })
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

const store = {
   heroes: [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
   ],
   selected_hero: ''
}
app.listen(3000)
console.log('server starting...')
