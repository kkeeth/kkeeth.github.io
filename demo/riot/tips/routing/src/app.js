const riot  = require('riot')
const route = require('riot-route')
require('../tag/app.tag')

// routing part
riot.mount('app', {
   header: 'routing demo by riot v3',
   navs : [
      { id: 'First',  name: 'foo'},
      { id: 'Second', name: 'bar'},
      { id: 'Third',  name: 'piyo'}
   ]
})
route.start(true)
