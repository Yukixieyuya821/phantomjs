var page = require('webpage').create();
page.open('https://locallife.happyeasygo.com/hot-coupons-c0', function(status) {
    console.log(123)
    if (status !== 'success') {
        console.log('Unable to access network');
      } else {
        console.log(document);
      }
      phantom.exit();
});