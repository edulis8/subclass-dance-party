var CircleDancer = function(top, left, timeBetweenSteps){
  // DISCO BALL DANCER!!!!
  Dancer.call(this, top, left, timeBetweenSteps);
  
  this.top = 400;
  this.left = 666;
  this.$node.html("<img class='discoball' src='https://d30y9cdsu7xlg0.cloudfront.net/png/25440-200.png'>");
  this.$node.addClass('discoball');
};

CircleDancer.prototype = Object.create(Dancer.prototype);
CircleDancer.prototype.constructor = CircleDancer;
CircleDancer.prototype.step = function(){ 
  Dancer.prototype.step.call(this);
  this.$node.animate({
    'top' : '1000'
  }, 5000, function(){
    this.hide();
  });
};

CircleDancer.prototype.calcDistance = function() {
  
};

CircleDancer.prototype.addMouseover = function() {
  
};
