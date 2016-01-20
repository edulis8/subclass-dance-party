var AnimateDancer = function(top, left, timeBetweenSteps){
  //var AnimateDancer = new Dancer(top, left, timeBetweenSteps);
  // *this* = Object.create(AnimateDancer.prototype);
  Dancer.call(this, top, left, timeBetweenSteps); // this may call oldStep before it should be called
  //return this;
  this.left = $("body").width() * 0.75;
  this.top = $("body").height() * 0.25;
};

AnimateDancer.prototype = Object.create(Dancer.prototype);
AnimateDancer.prototype.constructor = AnimateDancer;
AnimateDancer.prototype.step = function(){ 
  Dancer.prototype.step.call(this);
  //this.$node.toggle();
};

AnimateDancer.prototype.lineUp = function(){
    this.$node.animate({
      top: $("body").height() * 0.3333,
      //left: $("body").width() * 0.7
    });
};