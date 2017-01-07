const riot  = require('riot')
const dataset = require('./dataset.js')
require('../tag/app.tag')

// main riot part
riot.mount('app', {
   header: 'Rankiing App!!',
   items : [
      { id: 'all', title: 'All Ranking' },
      { id: 'new', title: 'New Ranking' },
      { id: 'outer', title: 'Outer Ranking' }
   ],
   dataset: dataset
})
