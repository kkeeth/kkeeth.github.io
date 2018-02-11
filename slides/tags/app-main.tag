<app-main>
  <article>
    <h1>{ title }</h1>
    <div data-is="{ data }"></div>
  </article>

  <script>
    const self = this
    self.title = opts.title || 'Now loading...'
    self.data = 'list-2018'

    var r = route.create()
    r('',     home      )
    r('2017', list_2017 )
    r(        home      )

    function home() {
      self.data = "list-2018"
      self.update()
    }
    function list_2017() {
      self.data = "list-2017"
      self.update()
    }
  </script>

  <style>
    :scope {
      display: block;
      font-family: sans-serif;
      padding: 1em;
      text-align: center;
      color: #666;
    }
    h1 {
      font-family: Josefin\ Sans;
    }
    a button:hover {
      color: #008080;
      font-weight: bold;
    }
    .mdl-button {
      font-family: sans-serif;
      font-size: 16px;
      text-transform: none;
    }
    .mdl-data-table th  {
      background-color: #333;
      color: #FFF;
      font-family: Josefin\ Sans;
      font-weight: bold;
      text-align: center;
    }
    @media (min-width: 600px) {
      :scope {
        margin-left: 80px;
        margin-right: 200px;
        margin-bottom: 20px;
      }
      h1 {
        margin: 15px 50px;
        text-align: left;
      }
   }
  </style>

</app-main>

