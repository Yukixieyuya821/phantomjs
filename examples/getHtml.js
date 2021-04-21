var page = require('webpage').create();
page.open('https://locallife.happyeasygo.com/hot-coupons-c0', function(status) {
    if (status !== 'success') {
        console.log('Unable to access network');
      } else {
        // var ua = page.evaluate(function() {
        //   return document.getElementById('app').textContent;
        // });
        console.log(page.content);
      }
      phantom.exit();
});