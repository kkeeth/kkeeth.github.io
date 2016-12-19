var assert = require('assert')
var route = require('riot-route')
require('../../tag/app.tag')

describe("Routing Demo Test", function () {
   var tag = {}
   before(function () {
       // create mounting points
       var html = document.createElement('app');
       document.body.appendChild(html);
   });

   it('app mount check', function () {
      tag = riot.mount('app', {
         header: 'routing demo by riot v3',
         navs : [
            { id: 'First',  name: 'foo'},
            { id: 'Second', name: 'bar'},
            { id: 'Third',  name: 'piyo'}
         ]
      })
      assert(tag[0].isMounted === true)
      assert(document.querySelector('h2').innerText === 'No Select');
   });

   it('routing check', function () {
      // #Second
      route('Second')
      assert(document.querySelector('h2').innerText === 'bar');

      // #Third
      route('Third')
      assert(document.querySelector('h2').innerText === 'piyo');
   });

   it('app unmount check', function() {
      tag[0].unmount(true)
      assert(tag[0].isMounted === false)
   });
})
