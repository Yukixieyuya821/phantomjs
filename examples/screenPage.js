var page = require('webpage').create();
page.open('https://locallife.happyeasygo.com/hot-coupons-c0', function() {
    page.render('locallife.png');
    phantom.exit();
});