<header>
	<div class="columns header-container">
		<h1 class="header">Navbar</h1>
		<div id="main-logo" class="column col-sm-6 col-2">
			<a href="/">
				<img src="../img/logo.png">
			</a>
		</div>
		<div show="{!mode.sp}" id="menu-pc" class="column col-10">
			<div id="menu-section" class="btn-group">
				<a href="{ paths.index }">
					<button class="{ current-page:current_page == paths.index } btn">HOME</button>
				</a>
				<a href="{ paths.about }">
					<button class="{ current-page:current_page == paths.index } btn">ABOUT</button>
				</a>
				<a href="{ paths.skill }">
					<button class="{ current-page:current_page == paths.skill } btn">SKILL</button>
				</a>
				<a href="{ paths.links }">
					<button class="{ current-page:current_page == paths.links } btn">LINKS</button>
				</a>
				<a href="{ paths.development }">
					<button class="{ current-page:current_page == paths.development } btn">DEVELOPMENT</button>
				</a>
			</div>
			<lang-change></lang-change>
		</div>
		<div show="{mode.sp}" onclick="{ toggle_menu }" id="menu-hamburger" class="column col-sm-6 col-10">
			<div class="{is-active: menu_active} hamburger hamburger--collapse-r">
				<div class="hamburger-box">
					<div class="hamburger-inner {bg-white: menu_sp_overlay}"></div>
				</div>
			</div>
		</div>
	</div>

	<script>
		import './lang-change.tag'
		import util_mixin from '../util-mixin.js'

		const self = this
		this.loaded = false
		this.menu_sp_overlay = false
		this.menu_active = false
		this.mode = false
		this.current_page = ''
		this.mixin(util_mixin)

		self.on("mount", () => {
			riot_control.on(i.ActionTypes.PAGE_CHANGED, () => {
				self.current_page = i.data.current_page
				i.data.menu_open = false
				self.menu_sp_overlay = false
				self.menu_active = false
				self.update()
			})

			riot_control.on(r.ON_MENU_CLOSE, () => {
				self.menu_active = false
				setTimeout(() => {
					self.menu_sp_overlay = false
					self.update()
				}, 100)
				self.update()
			})

			riot_control.on(r.WINDOW_ON_SCROLL, () => {
				self.loaded = false
				self.update()
			})

			riot_control.on(r.WINDOW_ON_SCROLL_TOP, () => {
				self.loaded = true
				self.update()
			})

			riot_control.on(r.ON_MOUSE_AT_TOP, () => {
				self.loaded = true,
				self.update()
			})

			riot_control.on(r.ON_CATEGORY_SP_OPEN, () => {
				i.data.menu_open = true,
				self.categoryMode = true,
				self.menu_sp_overlay = true,
				self.menu_active = true,
				self.update()
			})

			this.update_page = () => {
				this.current_page = ""
			}

			this.toggle_menu = () => {
				i.data.menu_open
					? (this.categoryMode &&
							(
								i.data.menu_open = false
							),
							riot_control.trigger(r.ON_MENU_CLOSE)
						)
					: (
							this.menu_sp_overlay = true,
							this.menu_active = true,
							riot.update(),
							riot_control.trigger(r.ON_MENU_SELECTED)
						)
			}
		})
	</script>
</header>