<menu-list>
	<div id="nav-list" class="">
		<div>
			<a href="{ paths.index }">
				<button class="{ current-page:current_page == paths.index } btn">HOME</button>
			</a>
		</div>
		<div>
			<a href="{ paths.about }">
				<button class="{ current-page:current_page == paths.index } btn">ABOUT</button>
			</a>
		</div>
		<div>
			<a href="{ paths.skill }">
				<button class="{ current-page:current_page == paths.skill } btn">SKILL</button>
			</a>
		</div>
		<div>
			<a href="{ paths.links }">
				<button class="{ current-page:current_page == paths.links } btn">LINKS</button>
			</a>
		</div>
		<div>
			<a href="{ paths.development }">
				<button class="{ current-page:current_page == paths.development } btn">DEVELOPMENT</button>
			</a>
		</div>
		<lang-change></lang-change>
	</div>

	<script>
		import './lang-change.tag'
		import util_mixin from '../util-mixin.js'
		import route from 'riot-route'
		const self = this

		self.paths = util_mixin.paths
		self.current_page = ''
		self.mixin(util_mixin)
		route.start(true)

		riot_control.on('init', (obj) => {
			self.current_page = obj.page
		})

		// ルーティング
		route('/*', (item) => {
			riot.mount('main')
		})
	</script>

	<style scoped>
		:scope #nav-list div {
			text-align: center;
		}
		.btn {
			color: #FFF;
			font-weight: bold;
		}
	</style>
</menu-list>