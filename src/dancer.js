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
  this.distances = {};

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


Dancer.prototype.calcDistance = function(array) {
  
  //console.log('window.dancers', array)
 // console.log('euclid', euclid);
  for (var i = 0; i < array.length; i++) {
    var distance = euclid([this.styleSettings.left, this.styleSettings.top],[array[i].styleSettings.left, array[i].styleSettings.top]);
    //console.log("this.styleSettings.left", this.styleSettings.left);
    //console.log("array[i].left", array[i].left);
    //console.log("array[i]", array[i]);

    this.distances[i] = distance;
    //console.log(this.distances);

  }
};


// / Make dancers that interact with other dancers. For example, by iterating across the array window.dancers and using the Pythagorean Theorem to calculate *your* distance from each other dancer, you can have a dancer find its n closest neighbors and do something based on their positions.

// // iterate across window.dancers. 
  // info needed: this.styleSettings {left: num, top: num}
  // sqrt((this.styleSettings[1].left - this.styleSettings[0].left - (2)) + .top(2))

//make an object for each element with a key-value pair for each other element. the key is the other element
//and the value is the distance from that element determined using the pythagorean theorem

  // var dancers[0] = {
  // dancers[1]: euclid();
  // dancers[2]: euclid();

// iterate across window.dancers [0 , 1, 2, 3, 4, 5]
                     //focal
  // euclid([this.styleSettings.left, this.styleSettings.top], [window.dancers[i].left, .top])
      // spits out all distances compared to focal dancer.

      
  // store that somewhere -- var array0 = [euclid(dancers[1]), euclid(dancers[2])]
  // store in an object . this.distances -- {
        // this.distances[i] = euclid(this compared with dancers[i]) 
        // 1: 4.5
        // 2: 3.33
        //this.distances[1] = euclid()
        //0: 3.5
        //2: 5.6
  // }

// iterate over window.dancers[i] and find the distance between the focal dancer and every other dancer
  // store this in an object for each focal dancer where key = other dancers i and value = distance between them
    // iterate through each object finding the shortest distance out of every object (this returns 1 value total, not
    // 1 value for each object)
      // when this distance is found, have those n dancers interact. delete these dancers from every other object. repeat
      // until done

// new method that runs on every dancer, inside .addDancerButton listener
// //dancer.distances = {
//   1: 44
//   2: 3
//   3: 99
//   4: 2
// }
// perform a operation that gets the lowest 3.
// // lowestThree = {
//     4: 2
//     2: 3
//     1: 44
//     }
// 
// for-in loop on lowestThree
  // window.dancers[key].$node









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