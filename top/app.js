import 'riot-hot-reload'
import my_store from './my_store.js'
import './tag/app.tag'

riot_control.addStore(my_store)
riot.mount('*')
