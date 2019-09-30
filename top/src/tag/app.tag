<app>
	<div class="row">
		<div class="col m3 s12">
			<header></header>
		</div>
		<div class="col m9 s12">
			<main></main>
		</div>
	</div>
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