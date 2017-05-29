<header>
	<!-- サイドメニュー -->
	<ul id="nav-mobile" class="side-nav fixed">
		<li>
			<div class="userView">
				<a href="/"><img class="circle" src="top/img/logo.png"></a>
				<a href="#!name"><span class="white-text name">k-kuwahara</span></a>
				<a href="#!email"><span class="white-text email">zensin@gmail.com</span></a>
			</div>
		</li>
		<li><i class="material-icons left">cloud</i>SNS</li>
		<li>Blog +α</li>
		<li>Links</li>
	</ul>

	<div class="columns header-container">
		<div id="main-logo" class="">
			<a href="/">
			</a>
		</div>
		<div id="menu-section">
			<!-- <menu-list></menu-list> -->
		</div>
	</div>

	<script>
		import './menu-list.tag'

		riot_control.on('change_lang', () => self.update())

		this.menu_toggle = () => {
			console.info($(this.refs.menu))
			$(this.refs.menu).sideNav()
		}
	</script>
</header>