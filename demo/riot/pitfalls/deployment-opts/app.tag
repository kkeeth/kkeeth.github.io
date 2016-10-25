<app>
  <h3>{ opts.title }</h3>

  <ul>
    <li each={ opts.items }>
      <label>
        <input type="checkbox" name="hoge[]" value={ id }>{ opts.name }: { val }
      </label>
    </li>
  </ul>
</app>