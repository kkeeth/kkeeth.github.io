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
		import './lang-change.tag'
		import './menu-list.tag'

		const self = this
		this.loaded = false
		this.menu_sp_overlay = false
		this.menu_active = false
		this.mode = false
		this.current_page = ''

		self.on("mount", () => {

			// riot_control.on(i.ActionTypes.PAGE_CHANGED, () => {
			// 	self.current_page = i.data.current_page
			// 	i.data.menu_open = false
			// 	self.menu_sp_overlay = false
			// 	self.menu_active = false
			// 	self.update()
			// })

			// riot_control.on(r.ON_MENU_CLOSE, () => {
			// 	self.menu_active = false
			// 	setTimeout(() => {
			// 		self.menu_sp_overlay = false
			// 		self.update()
			// 	}, 100)
			// 	self.update()
			// })

			// riot_control.on(r.WINDOW_ON_SCROLL, () => {
			// 	self.loaded = false
			// 	self.update()
			// })

			// riot_control.on(r.WINDOW_ON_SCROLL_TOP, () => {
			// 	self.loaded = true
			// 	self.update()
			// })

			// riot_control.on(r.ON_MOUSE_AT_TOP, () => {
			// 	self.loaded = true,
			// 	self.update()
			// })

			// riot_control.on(r.ON_CATEGORY_SP_OPEN, () => {
			// 	i.data.menu_open = true,
			// 	self.categoryMode = true,
			// 	self.menu_sp_overlay = true,
			// 	self.menu_active = true,
			// 	self.update()
			// })
		})

		this.update_page = () => {
			this.current_page = ""
		}
	</script>
</header>