require('./packager');
var path = require("path");

// APPIUM -----------------
var child_process = require('child_process');
var appiumProc    = child_process.spawn('appium', [
  '-p', '4725',
  '--default-capabilities', '{"fullReset":true}'
]);

var Promise = require('Promise');

var server = {
  host: 'localhost',
  port: 4725 // one off from normal
};

// {
//   host: 'ondemand.saucelabs.com',
//   port: 80,
//   username: process.env.SAUCE_USERNAME,
//   password: process.env.SAUCE_ACCESS_KEY
// };

var loadedAppium = null;

var appiumPromise = new Promise(function (resolve, reject) {
  appiumProc.stdout.on('data', function (data) {
    if (loadedAppium) return;
    console.log('APPIUM: ' + data);

    if (data.indexOf('Appium REST http interface listener started') >= 0) {
      loadedAppium = true;
      resolve(data);
    }
  });
});

appiumProc.stderr.on('data', function (data) {
  console.log('APPIUM err: ' + data);
  appiumProc.kill();
});
process.on('exit', function () {
  appiumProc.kill();
});

// WD -----------------

var realWd = require("wd");
var wd     = require("yiewd");
var color  = require('colors');

// Config for Appium

var UNLIMITED = 100000;

console.log(path.isAbsolute(path.resolve(process.cwd() ,"testbuild/test_ios/testest_ios.zip")));

var caps = {
  browserName: '',
  appiumVersion: '1.6.3',
  automationName: "xcuitest",
  platformName: 'iOS',
  platformVersion: '10.1',
  deviceName: 'iPhone 6s',
  autoLaunch: 'true',
  newCommandTimeout: UNLIMITED,
  app: path.resolve(process.cwd() ,"testbuild/test_ios/testest_ios.zip")
};



module.exports = function(callback) {
  console.log("DRIVER: starting it up");

  appiumPromise.then(function () {
    console.log("DRIVER: will init");

    var driver = wd.remote(server);

    driver.on('status', function(info) {
      console.log(info.cyan);
    });
    driver.on('command', function(meth, path, data) {
      console.log(' > ' + meth.yellow, path.grey, data || '');
    });

    var current = {};

    driver.init(caps, function(){
      console.log('driver started');
      callback({
        driver: driver,
        realWd: realWd,
        wd: wd,
      });
    });
  });
};
