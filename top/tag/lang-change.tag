<lang-change>
	<div>
		<span onclick="{ set_lang }" class="btn translation" data-val="ja">JP</span>
		<span class="translation">/</span>
		<span onclick="{ set_lang }" class="btn translation" data-val="en">EN</span>
	</div>

	<script>
		let self = this
		self.lang = ''

		set_lang() {
			console.info(this)
			riot_control.trigger('set_lang', 'ja')
		}

		riot_control.on('init', (obj) => {
			self.lang = obj.lang
		})

	</script>

	<style scoped>
		:scope div {
			margin-top: 10px;
			text-align: center;
		}
		span.btn {
			padding: 0 10px;
		}
		span.btn:hover {
			background-color: #008080;
			cursor: pointer;
		}
	</style>
</lang-change>