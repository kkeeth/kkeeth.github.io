<app>
  <h3>{ opts.title }</h3>
  <div id="container">
    <div id="select" class="box">
      <p>select loop times</p>
      <form onchange="{ view }">
        <select name="times">
          <option value="">please select</option>
          <option value="10">10</option>
          <option value="100">100</option>
          <option value="1000">1000</option>
          <option value="10000">10000</option>
        </select>
      </form>
      <ul if="{ items.length > 0 }">
        <label each="{ val, i in items }" onclick="{ toggle_bgcolor }">
          <li class="bg-off">
            <input type="checkbox" name="hoge[]"/>hoge{ i+1 }
          </li>
        </label>
      </ul>
    </div>
    <div id="result" if="{ items.length > 0 }" class="box">
      <p>
        <b>It took to mount time</b><br/>
        { view_time }(s)
      </p>
    </div>
  </div>

  <script>
    // for benchmark
    this.view_time = 0
    // default items
    this.items = []
    // init start time
    this.start = 0
    // updated flg
    var updated_flg = true

    //  after updated
    this.on('updated', function() {
      if (!updated_flg) {
        var end = (new Date()).getTime()
        this.view_time = (end - this.start) / 1000
        updated_flg = true
        // updated value to DOM
        this.update()
      }
    })

    // view list
    view(e) {
      this.items = Array(parseInt(e.target.value))
      this.start = (new Date()).getTime()
      updated_flg = false
    }

    // if checked, change background-color
    toggle_bgcolor(e) {
      if ($(e.target).find('input').prop('checked')) {
        $(e.target).addClass('bg-off')
        $(e.target).removeClass('bg-on')
        $(e.target).find('input').prop('checked', false)
      }
      else {
        $(e.target).addClass('bg-on')
        $(e.target).removeClass('bg-off')
        $(e.target).find('input').prop('checked', true)
      }
    }
  </script>
</app>