var HueScout = require('elroy-hue-driver');

module.exports = function(runtime) {
  runtime.scouts.push(HueScout);
};
