<lang-change>
	<div id="lang-section" class="btn-group">
		<div>
			<span onclick="{change('ja')}" class="btn translation {current-language: lang == 'ja'}">JP</span>
			<span class="hide btn translation disabled">/</span>
			<span onclick="{change('en')}" class="btn translation {current-language: lang == 'en'}">EN</span>
		</div>
	</div>

	<script>
		this.lang = ''

		// change language
		this.change = (e) => {
		}
	</script>
</lang-change>