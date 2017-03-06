<menu>
	<div id="menu-list" class="hide">
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

	<script>
		import util_mixin from '../util-mixin.js'
		const self = this

		self.paths = util_mixin.paths
		self.mixin(util_mixin)

	</script>
</menu>