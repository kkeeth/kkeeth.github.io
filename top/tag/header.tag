<header>
	<div class="columns header-container">
		<div id="main-logo" class="">
			<a href="/">
				<img src="top/img/logo.png">
			</a>
		</div>
		<div id="menu-section">
			<menu-list></menu-list>
		</div>
	</div>

	<script>
		import './menu-list.tag'
		const self = this

		riot_control.on('change_lang', () => self.update())
	</script>
</header>