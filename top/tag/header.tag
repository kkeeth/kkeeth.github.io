<header>
	<ul id="nav-mobile" class="side-nav fixed">
		<li>
			<div class="userView">
				<div class="background">
				</div>
				<a href="/"><img class="circle" src="top/img/logo.png"></a>
				<a href="#!name"><span class="white-text name">k-kuwahara</span></a>
				<a href="#!email"><span class="white-text email">zensin@gmail.com</span></a>
			</div>
		</li>
		<li><i class="material-icons">cloud</i>First Link With Icon</li>
		<li>Second Link</li>
		<li><div class="divider"></div></li>
		<li>Subheader</li>
		<li>Third Link With Waves</li>
	</ul>
	<a href="#" data-activates="slide-out" ref="menu" onclick="{  menu_toggle }"><i class="material-icons">menu</i></a>

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
			console.info(this.refs.menu)
			$(this.refs.menu).sideNav()
		}
	</script>
</header>