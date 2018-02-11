<app-navi>

  <a each={ links } href="#{ url }" class={ selected: parent.selectedId === url }>
    { name }
  </a>

  <script>
    const self = this
    self.selectedId = ''

    this.links = [
      { name: "2018", url: "" },
      { name: "2017", url: "2017" }
    ]

    const r = route.create()
    r(highlightCurrent)

    function highlightCurrent(id) {
      self.selectedId = id
      self.update()
    }
  </script>

  <style>
    :scope {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      box-sizing: border-box;
      font-family: sans-serif;
      text-align: center;
      color: #666;
      background: #333;
      width: 70px;
      transition: width .2s;
    }
    :scope:hover {
      width: 80px;
    }
    a {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 50px;
      line-height: 50px;
      padding: 0 .8em;
      color: white;
      text-decoration: none;
      background: #444;
    }
    a:hover {
      background: #666;
    }
    a.selected {
      background: teal;
    }
  </style>

</app-navi>

