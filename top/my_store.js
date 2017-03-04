function MyStore() {
	riot.observable(this)

	const self = this
	self.on('change_lang', () => {
		self.trigger('toggle_lang')
	})
}

module.exports = new MyStore()