<app>
  <h2>{ opts.title }</h2>

  <table border="1">
    <thead>
      <tr>
        <th>Name</th>
        <th>Star</th>
        <th>URL</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Angular</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>React.js</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Riot.js</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Vue.js</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <script>
    const self = this

    self.on('mount', () => {
      $.ajax({
        url: 'https://github.com/facebook/react',
        type: 'GET',
        timeout: 30000
      })
        .done((data) => {
          console.info(data)
        })
    })
  </script>
</app>
