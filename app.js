var ClumsyBird = module.exports = function() {
  this.name = 'clumsy-bird';
};

ClumsyBird.prototype.init = function(elroy) {
  elroy.observe('type="button"')
    .subscribe(function(button) {
      elroy.expose(button);
    });

  elroy.observe('type="huehub"')
    .subscribe(function(button) {
      elroy.expose(button);
    });

};
