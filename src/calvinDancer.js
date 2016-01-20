var CalvinDancer = function(top, left, timeBetweenSteps){
  AnimateDancer.call(this, top, left, timeBetweenSteps); 
  this.$node.html("<img class='image' src='http://img.photobucket.com/albums/v257/knitepoet/FUNNY/CalvinHobbesBirthdayDance.gif'>");
  this.$node.addClass('image calvin');
  
};

CalvinDancer.prototype = Object.create(AnimateDancer.prototype);
CalvinDancer.prototype.constructor = CalvinDancer;
CalvinDancer.prototype.step = function(){ 
  AnimateDancer.prototype.step.call(this);
  
};

// INHERITS FROM ANIMATEDANCER:

// CalvinDancer.prototype.lineUp = function(){
//     this.$node.animate({
//       top: $("body").height() * 0.8,
//       //left: $("body").width() * 0.7
//     });
// };