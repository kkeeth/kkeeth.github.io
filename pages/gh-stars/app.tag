<app>
  <h3>{ opts.title }</h3>

  <table class="bordered highlight">
    <thead>
      <tr>
        <th>Name</th>
        <th>Stars</th>
        <th>Forks</th>
      </tr>
    </thead>
    <tbody>
      <tr each={ repo_list }>
        <td><a href="https://github.com/{ url }" target="_blank">{ name }</a></td>
        <td>{ stargazers_count }</td>
        <td>{ forks_count }</td>
      </tr>
    </tbody>
  </table>

  <script>
    const self = this
    self.repo_list = []

    self.on ('before-mount', () => {
       opts.repos.forEach((repo) => {
          $.ajax({
             url: `https://api.github.com/repos/${repo.url}`,
             type: 'GET',
             async: false
          }).done((data) => {
             self.repo_list.push({
                name: repo.key,
                url: repo.url,
                stargazers_count: data.stargazers_count,
                forks_count: data.forks_count
             })
          })
       })
    })
  </script>
</app>
