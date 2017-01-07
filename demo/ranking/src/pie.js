const riot  = require('riot')
const data  = require('./dataset.js')
require('../tag/pie.tag')

// main riot part
riot.mount('pie', {
   header: 'Ranking App!!',
   title: 'Year of change',
   dataset: data,
})
