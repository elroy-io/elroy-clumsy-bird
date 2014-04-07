var ButtonDriver = module.exports = function() {
  this.type = 'button';
  this.name = 'button';
  this.state = 'up';
  this._pressEmitter = null;
};

ButtonDriver.prototype.init = function(config) {
  config
    .when('down', { allow: ['lift', 'click'] })
    .when('up', { allow: ['press', 'click'] })
    .map('press', this.press)
    .map('lift', this.lift)
    .map('click', this.click)
    .stream('pressing', this.onPress);
};

ButtonDriver.prototype.lift = function(cb) {
  this.state = 'up';
  cb();
};

ButtonDriver.prototype.press = function(cb) {
  this.state = 'down';

  if (this._pressEmitter) {
    console.log('emitting pressing');
    this._pressEmitter.emit('data', 1);
  }

  cb();
};

ButtonDriver.prototype.click = function(cb) {
  var self = this;
  this.press(function() {
    self.lift(cb);
  });
};

ButtonDriver.prototype.onPress = function(emitter) {
  this._pressEmitter = emitter;
};
