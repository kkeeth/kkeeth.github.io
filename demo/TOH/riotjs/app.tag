<app>
  <h1>{ opts.title }</h1>

  <h2> My Heroes </h2>
  <ul class="heroes">
    <li each="{ hero in heroes }"
        class="{ hero === selectedHero ? 'selected' : ' ' }"
        onclick="{ onSelect }">
      <span class="badge">{ hero.id }</span>{ hero.name }
    </li>
  </ul>

  <div if="{ selectedHero }">
    <h2> { selectedHero.name } details!</h2>
    <div>
      <label>id: </label>
      { selectedHero.id }
    </div>
    <div>
      <label>name: </label>
      <input type="text"
             value="{ selectedHero.name }"
             name="selected"
             placeholder="name"
             onInput="{ changeName }">
    </div>
   </div>

  <script>
    this.heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ]
    this.selectedHero = ''

    onSelect(e) {
      this.selectedHero = e.item.hero
    }

    changeName(e) {
      this.selectedHero.name = e.target.value
    }
  </script>
</app>
