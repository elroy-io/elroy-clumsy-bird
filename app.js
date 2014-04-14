var ClumsyBird = module.exports = function() {
  this.name = 'clumsy-bird';
};

ClumsyBird.prototype.init = function(zetta) {
  zetta.observe('type="button"')
    .subscribe(function(button) {
      zetta.expose(button);
    });

  zetta.observe('type="huehub"')
    .subscribe(function(button) {
      zetta.expose(button);
    });

};
