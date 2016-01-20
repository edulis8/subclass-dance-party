var ImageBlinkyDancer = function(top, left, timeBetweenSteps){
  // *this* = Object.create(BlinkyDancer.prototype);
  BlinkyDancer.call(this, top, left, timeBetweenSteps); 
  //return this;
  this.left = 20;
  this.top = 20;
  this.$node.html("<img class='image' src='https://cdn3.iconfinder.com/data/icons/vacation-4/32/vacation_30-512.png'>");
  this.$node.addClass('image');
};

ImageBlinkyDancer.prototype = Object.create(BlinkyDancer.prototype);
ImageBlinkyDancer.prototype.constructor = ImageBlinkyDancer;
ImageBlinkyDancer.prototype.step = function(){ 
  BlinkyDancer.prototype.step.call(this);
  
};

ImageBlinkyDancer.prototype.lineUp = function() {
  this.$node.animate({
    top: $("body").height() * 0.05
  });
};

// 
// calvin and hobbes: http://img.photobucket.com/albums/v257/knitepoet/FUNNY/CalvinHobbesBirthdayDance.gif


// icon: https://cdn3.iconfinder.com/data/icons/vacation-4/32/vacation_30-512.png'