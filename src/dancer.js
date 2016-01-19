var Dancer = function(top, left, timeBetweenSteps){
  // this = Object.create(Dancer.prototype)
  // this = {};
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();

  this.setPosition(top, left);
  //Dancer.prototype.setPosition.call(this, top, left);
  // return this
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this) , this.timeBetweenSteps);
  // var context = this;
  // setTimeout(function(){context.step.call(context);}, this.timeBetweenSteps);
};
// when this.step runs inside setTimeout, 
  // it's 'this' binding will be 
Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
      top: top,
      left: left
    };

    this.$node.css(styleSettings);
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