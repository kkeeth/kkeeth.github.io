<app>
  <h3 class="title">{ opts.title }</h3>

  <p>This wording is actually changed, but this demo will not change it.<br>↓↓↓</p>
  Hi <other-content text="{ name }" />

  <script>
    this.name = opts.name || 'empty'
    
    // Update this tag based on some event
    setTimeout(() => {
      this.update({ name: 'Mike!' })
    }, 1000)
  </script>
</app>

<other-content>
  <b>{ text }</b>

  <script>
    this.text = opts.text || '';
    
    this.on('update', () => {
      console.log(opts)
    })
  </script>

  <style>
    :scope {
      color: #008080;
    }
  </style>
</other-content>

