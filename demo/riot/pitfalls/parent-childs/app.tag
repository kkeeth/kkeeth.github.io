<app>

  <!-- layout -->
  <h3>{ opts.title }</h3>

  <!-- 子タグ -->
  <foo></foo>
  <bar></bar>
  <baz></baz>

  <!-- javascript -->
  <script>
    this.on('mount', function() {

      // 何らかの処理後
      var hoge = '2'

      // hogeの値によりマウントする子タグを指定
      switch(hoge) {
        case '1':
          riot.mount('foo')
          break

        case '2':
          riot.mount('bar', {text: 'mount!!'})
          break

        default:
          riot.mount('baz')
          break
      }
    })
  </script>
</app>