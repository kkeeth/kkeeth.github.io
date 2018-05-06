<app>
  <h3>{ opts.title }</h3>

  <ul>
    <li each={ opts.items }>
      <p>name: { opts.name }</p>
      <p>id: { id }</p>
      <p>val: { val }</p>
    </li>
  </ul>

  <style>
    li {
      margin-top: 5px;
      padding: 5px;
      border: 1px solid #008080;
    }
    li > p {
      margin: 0 auto;
      line-height: 1.5;
    }
  </style>
</app>
