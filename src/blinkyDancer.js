var BlinkyDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = new Dancer(top, left, timeBetweenSteps);
  // *this* = Object.create(BlinkyDancer.prototype);
  Dancer.call(this, top, left, timeBetweenSteps); // this may call oldStep before it should be called
  //return this;
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
// //-------old pattern-----------
// var makeBlinkyDancer = function(top, left, timeBetweenSteps){
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

// // blinkyDancer === {
// //    $node: $('<span class="dancer"></span>'),
// //    step: function(){
// //      oldstep();
// //     setTimeout(dancer.step, timeBetweenSteps)
// //      },
// //      setPosition: function(top, left){
// //     var styleSettings = {
// //       top: top,
// //       left: left
// //     };
// //     dancer.$node.css(styleSettings);
// //   }
// //  }


//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step; // -->function(){setTimeout(dancer.step, timeBetweenSteps);
// //   };

//   // overwrites before Dancer.step()
//   blinkyDancer.step = function(){
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep(); // --
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };