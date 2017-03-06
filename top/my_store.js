function MyStore() {
	riot.observable(this)

	const self = this
	let menu_open = false
	let current_page = '/'
	let current_lang = 'ja'

	return {
		set_current_page: (page) => self.current_page = page,
		set_current_lang: (lang) => self.current_lang = lang
	}
}

module.exports = new MyStore()