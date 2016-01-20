var CircleDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.css({"border-color": "blue"});
  this.top = 400;
  this.left = 666;
};

CircleDancer.prototype = Object.create(Dancer.prototype);
CircleDancer.prototype.constructor = CircleDancer;
CircleDancer.prototype.step = function(){ 
  Dancer.prototype.step.call(this);
  this.$node.toggleClass("bulge");
};

// https://cdn3.iconfinder.com/data/icons/vacation-4/32/vacation_30-512.png