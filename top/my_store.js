function My_store() {
	riot.observable(this)

	const self = this
	let menu_open = false
	let current_page = '/'
	let current_lang = 'ja'

	self.on('set_page', (page) => {
		self.current_page = page
	})

	self.on('set_lang', (lang) => {
		self.current_lang = lang
	})

	self.on('toggle_menu', () => {
		self.menu_open = !self.menu_open
	})
}

module.exports = new My_store()