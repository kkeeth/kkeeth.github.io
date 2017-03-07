<menu-list>
	<button type="button" class="hamburger hamburger--squeeze" onclick="{ toggle_menu }">
		<span class="hamburger-box">
			<span class="hamburger-inner"></span>
		</span>
	</button>

	<div id="nav-list" class="">
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
		<lang-change></lang-change>
	</div>

	<script>
		import util_mixin from '../util-mixin.js'
		const self = this

		self.paths = util_mixin.paths
		self.mixin(util_mixin)

	</script>
</menu-list>