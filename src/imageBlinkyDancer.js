var ImageBlinkyDancer = function(top, left, timeBetweenSteps){
  // *this* = Object.create(BlinkyDancer.prototype);
  BlinkyDancer.call(this, top, left, timeBetweenSteps); 
  //return this;
  this.$node.html("<img class='image' src='https://cdn3.iconfinder.com/data/icons/vacation-4/32/vacation_30-512.png'>");
  this.$node.addClass('image');
};

ImageBlinkyDancer.prototype = Object.create(BlinkyDancer.prototype);
ImageBlinkyDancer.prototype.constructor = ImageBlinkyDancer;
ImageBlinkyDancer.prototype.step = function(){ 
  BlinkyDancer.prototype.step.call(this);


  
  
};