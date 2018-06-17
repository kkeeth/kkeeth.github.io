<app>
  <h3 class="title">{ opts.title }</h3>

  <p>This text is not updated<br>↓↓↓</p>
  <p show={ show_flg } class="text">hogehoge</p>
  <p hide={ show_flg } class="text">fugafuga</p>

  <child on-toggle={ toggle } />

  <script>
    this.show_flg = false

    toggle() {
       this.show_flg = !this.show_flg
    }
  </script>

  <style>
    .text {
      color: #008080;
      font-weight: bold;
    }
  </style>
</app>

<child>
  <button onclick={ opts.onToggle }>toggle</button>

  <script>
    this.on('update', () => {
       console.log('upadted in child tag.')
    })
  </script>
</child>
