<app>
	<header></header>
	<main></main>
	<footer></footer>

	<script>
		import './header.tag'
		import './main.tag'
		import './footer.tag'

		this.on('before-mount', () => {
			riot_control.trigger('init_page')
		})
	</script>
</app>