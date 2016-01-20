var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps); 
  this.left = $("body").width() * 0.5;
  this.top = $("body").height() * 0.5;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function(){ 
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

BlinkyDancer.prototype.lineUp = function(){
    this.$node.animate({
      top: $("body").height() * 0.8,
      //left: $("body").width() * 0.7
    });
}
