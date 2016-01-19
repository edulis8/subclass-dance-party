var Dancer = function(top, left, timeBetweenSteps){
  // this = Object.create(Dancer.prototype)
  // this = {};
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.check = true;
  this.styleSettings = {
      top: top,
      left: left
    };

  this.step();

  this.setPosition(top, left);
  //Dancer.prototype.setPosition.call(this, top, left);
  // return this
};

Dancer.prototype.step = function() {
  if(!this.$node.hasClass('stopToggle')){
    setTimeout(this.step.bind(this) , this.timeBetweenSteps);
  }

  // var context = this;
  // setTimeout(function(){context.step.call(context);}, this.timeBetweenSteps);
};
// when this.step runs inside setTimeout, 
  // it's 'this' binding will be 
Dancer.prototype.setPosition = function(top, left) {
  //this.styleSettings = {
      //top: top,
      //left: left
    //};

    this.$node.css(this.styleSettings);
};

Dancer.prototype.lineUp = function(){
  this.$node.animate({
    left: 20
  });
};

Dancer.prototype.congregate = function() {
  if(this.check === true){
    this.check = false;
    this.$node.animate({
      left: this.left,
      top: this.top
    });
  } else {
    this.$node.animate(this.styleSettings);
    this.check = true;
  }
};

// var makeDancer = function(top, left, timeBetweenSteps){

//   var dancer = {};

//   dancer.$node = $('<span class="dancer"></span>');


//   dancer.step = function(){
//     setTimeout(dancer.step, timeBetweenSteps);
//   };

//   dancer.step();

//   dancer.setPosition = function(top, left){
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   dancer.setPosition(top, left);

//   return dancer;
// };