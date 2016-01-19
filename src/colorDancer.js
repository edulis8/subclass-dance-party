var ColorDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = new Dancer(top, left, timeBetweenSteps);
  // *this* = Object.create(BlinkyDancer.prototype);
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"</span>');
  //return this;
};

ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;
ColorDancer.prototype.step = function(){ 
  Dancer.prototype.step.call(this);
  //this.$node.css({"border-color": "white"});
  this.$node.toggleClass("color")
  //this.$node.toggleClass("otherColor");
  //this.$node.fadeToggle();
};
