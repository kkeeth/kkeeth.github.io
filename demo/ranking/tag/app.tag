<app>
  <h1> { opts.header }</h1>
  <div class="mdl-layout__tab_bar mdl-tabs mdl-js-tas">
    <div class="nav-item mdl-tabs__tab-bar is-upgraded">
      <a class="mdl-tabs__tab nav-items" each="{ items }" id="{ id }" href="#{ id }" onclick="{ select }">{ title }</a>
    </div>
  </div>

  <article>
    <h2>{ page.title || 'Not Found' }</h2>
    <div show="{ page_id }" class="card-table mdl-shadow--3dp mdl-grid">
      <div align="center" class="mdl-cell mdl-cell--6-col-phone mdl-cell--6-col-tablet mdl-cell--6-col-desktop">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded">
          <input class="mdl-textfield__input" type="text" id="input_text" ref="target" onkeyup="{ search }">
          <label class="mdl-textfield__label" for="input_text">Search Name</label>
        </div>
        <div if="{ btn_show_flg }">
           <a href="pies.html?page={ page_id + '_rank' }"><button id="btn-graph" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--green-300 mdl-color-text--white">the graph of the top 3</button></a>
        </div>
      </div>

      <div class="mdl-cell mdl-cell--6-col-phone mdl-cell--6-col-tablet mdl-cell--6-col-desktop" if="{ show_flg }">
        <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
          <thead>
            <tr>
              <th align="center">Rank</th>
              <th align="center">Name</th>
              <th align="center">Count</th>
            </tr>
          </thead>
          <tbody>
            <tr each="{ data }" class="{ is_top(rank) } { data.length === 1 ? 'one-item' : '' }">
              <td align="left">{ rank }</td>
              <td align="left"><a href="pies.html?name={ encodeURIComponent(name) }">{ name }</a></td>
              <td align="left">{ count }</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </article>

  <footer>
    <span>(c) 2016 k-kuwahara</span>
  </footer>

  <script>
     const route = require('riot-route')
     const $ = require('jQuery')
     const self = this;

     self.data  = []
     self.old_data = []
     self.items = opts.items
     self.page = {}
     self.page_id = ''
     self.show_flg = self.data.length > 0
     self.btn_show_flg = true

     // routing part
     route.start(true)

     select (e) {
        $('.nav-items').removeClass('is-active')
        $(e.target).addClass('is-active')
     }

     // filtering
     search (e) {
        self.data = self.old_data
        let tmp = []
        if (e.target.value.length > 0) {
           tmp = self.data.filter((r) => {
              return r.name.search(e.target.value) !== -1
           })
           self.data = tmp
        }
        else {
           self.data = self.old_data
        }
        self.update()
     }

     route((id) => {
        self.page = self.items.filter((r) => {
           self.data = opts.dataset[id] || []
           self.old_data = self.data
           return r.id == id
        })[0] || {}
        self.page_id = id
        if (Object.keys(self.page).length > 0) {
           self.show_flg = true
           self.btn_show_flg = true
        }
        self.update()
     })

     is_top (num) {
         switch (num) {
            case 1:
               return 'top'
            case 2:
               return 'top2'
            case 3:
               return 'top3'
            default:
               return ''
         }
     }
  </script>
</app>
