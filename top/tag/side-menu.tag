<side-menu>
	<!-- サイドメニュー -->
	<ul class="side-nav fixed">
		<li>
			<div class="userView">
				<a href="" class="waves-effect waves-light"><img class="circle" src="top/img/logo.png"></a>
				<a href="https://github.com/k-kuwahara/" class="waves-effect waves-light"><span class="white-text name">k-kuwahara</span></a>
				<a href="mailto:zensin0082@gmail.com" class="waves-effect waves-light"><span class="white-text email">zensin@gmail.com</span></a>
			</div>
		</li>
		<li>
			<a href="#skills" class="waves-effect waves-light">
				<i class="material-icons left">cloud</i>Skills
			</a>
		</li>
		<li>
			<a href="#blogs" class="waves-effect waves-light">
				<i class="material-icons">thumb_up</i>Blogs
			</a>
		</li>
		<li>
			<a href="#links" class="waves-effect waves-light">
				<i class="material-icons">link</i>Links
			</a>
		</li>
	</ul>

	<script>
		const self = this

		self.current_page = ''

		riot_control.on('init', (obj) => {
			self.current_page = obj.page
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
</side-menu>