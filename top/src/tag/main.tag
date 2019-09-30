<main>
	<div id="container">
		<route></route>
	</div>

	<script>
		import './side-menu.tag'
		import './home.tag'
		import './skills.tag'
		import './blogs.tag'
		import './links.tag'
		import route from 'riot-route'

		// ルーティング
		route.start(true)
		route((item) => {
			if (item === '')
				riot.mount('route', 'home')
			else
				riot.mount('route', item)
		})

		this.on('mount', () => {})

		riot_control.on('change_lang', () => self.update())
	</script>
</main>