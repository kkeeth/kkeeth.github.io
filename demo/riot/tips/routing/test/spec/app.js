const assert = require('assert')
// const utils  = require('./utils.js')

describe("Routing Demo Test", function () {
   // before(function () {
   //     // create mounting points
   //     var html = document.createElement('app');
   //     document.body.appendChild(html);
   // });

   // マウントのチェック
   it('app mount check', function () {
       tag = riot.mount('app', { items: [] });
console.info(app)
       assert(document.querySelector('h1') === '');
       tag[0].unmount(true);
   });
})
