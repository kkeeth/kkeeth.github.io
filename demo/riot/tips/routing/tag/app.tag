const route = require('riot-route')
<app>
  <h1> { opts.header }</h1>
  <div class="mdl-layout__tab_bar mdl-tabs mdl-js-tas">
    <div class="nav_item mdl-tabs__tab-bar is-upgraded">
      <a class="mdl-tabs__tab nav-items" each="{ items }" id="{ id }" href="#{ id }" onclick="{ select }">{ id }</a>
    </div>

    <article>
      <h2>{ page.name || 'Not Found' }</h2>
    </article>
  </div>

  <script>
     const self = this;

     self.items = opts.items
     self.page  = opts.items[0]
     const $ = require('jquery')

     select (e) {
        $('.nav-items').removeClass('is-active')
        $(e.target).addClass('is-active')
     }

     route((id) => {
        self.page = self.items.filter((r) => {
           return r.id == id
        })[0] || {}
        self.update()
     })
  </script>
</app>
