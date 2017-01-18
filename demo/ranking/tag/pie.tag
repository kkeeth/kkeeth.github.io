<pie>
  <h1> { opts.header }</h1>

  <article>
    <h2> { opts.title }</h2>
    <div id="dest"></div>
    <div class="btn-back">
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--green-300 mdl-color-text--white" onclick="{ back }">back</button>
    </div>

  </article>

  <footer>
    <span>(c) 2016 k-kuwahara</span>
  </footer>

  <script>
     const c3   = require('c3')
     const self = this;
     self.name  = ''
     self.page  = ''

     self.on('before-mount', () => {
        if (location.search.search('name') != -1) {
           self.name = decodeURI(location.search.split('=')[1])
        }
        if (location.search.search('page') != -1) {
          self.page = location.search.split('=')[1]
        }
     })

     self.on('mount', () => {
        if (self.name.length > 0) {
          let c3_col = []
          opts.dataset['year'].map((r, i) => {
            r[i+1].map((item) => {
               if (item.name == self.name) {
                  c3_col.push(item.count)
               }
            })
          })
          chart_opts.data.types[self.name] = 'area-spline'
          chart_opts.data.columns[0] = [self.name].concat(c3_col)
          c3.generate(chart_opts)
        }
        else if (self.page.length > 0) {
           let max = opts.dataset[self.page].length

           opts.dataset[self.page].forEach((item, key) => {
              chart_opts.data.columns[key] = [item.name].concat(item.data)
              chart_opts.data.types[item.name] = 'area-spline'
           })
           c3.generate(chart_opts)
        }
     })

     // each pie-charts part
     let chart_opts = {
        bindto: '#dest',
        data: {
            columns: [],
            types : {}
        }
     }

     // location back
     function back() {
        history.back()
     }
  </script>
</pie>
