function My_store() {
	riot.observable(this)

	const self = this
	let menu_open = false
	let current_page = '/'
	let current_lang = 'ja'

	self.on('init_page', () => {
		self.trigger('init', {
			lang: current_lang,
			page: current_page
		})
	})

	self.on('set_page', (page) => {
		self.current_page = page
	})

	self.on('set_lang', (lang) => {
		self.current_lang = lang
		self.trigger('chagne_lang')
	})

	self.on('toggle_menu', () => {
		self.menu_open = !self.menu_open
		self.trigger('chagne_lang')
	})
}

module.exports = new My_store()