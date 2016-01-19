var ColorDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = new Dancer(top, left, timeBetweenSteps);
  // *this* = Object.create(BlinkyDancer.prototype);
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("black");
  this.$node.addClass("white");
  this.left = 1000;
  this.top = 500;
  //return this;
};

ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;
ColorDancer.prototype.step = function(){ 
  Dancer.prototype.step.call(this);
  this.$node.toggleClass("black");
  //this.$node.fadeToggle();
};

ColorDancer.prototype.lineUp = function() {
  this.$node.animate({
    left: $("body").width() * 0.8,
  });
};