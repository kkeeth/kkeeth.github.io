<lang-change>
	<div id="translation-section" class="btn-group">
		<div onclick="{change('ja')}" class="btn translation {current-language: lang == 'ja'}">JP</div>
		<div class="hide btn translation disabled">/</div>
		<div onclick="{change('en')}" class="btn translation {current-language: lang == 'en'}">EN</div>
	</div>

	<script>
		this.lang = ''

		// change language
		this.change = (e) => {
		}
	</script>
</lang-change>