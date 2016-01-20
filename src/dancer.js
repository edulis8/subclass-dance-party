var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.check = true;
  this.styleSettings = {
      top: top,
      left: left
    };
  this.location = null;
  this.distances = {};
  this.closest = {};
  this.sortable = [];
  this.step();
  this.setPosition(top, left);

};

Dancer.prototype.step = function() {
  if(!this.$node.hasClass('stopToggle')){
    setTimeout(this.step.bind(this) , this.timeBetweenSteps);
  }
  // second setTimeout to update distances
    // setTimeout(function(){
    //   console.log('secondTimeout')
    //   for(var i = 0; i < window.dancers.length; i++){
    //     window.dancers[i].calcDistance(window.dancers);
    //     window.dancers[i].shorten();
    //   }
    // }, 500);
};

Dancer.prototype.setPosition = function(top, left) {
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

  this.distances = {};

  for (var i = 0; i < array.length; i++) {
    var distance = euclid([this.styleSettings.left, this.styleSettings.top],[array[i].styleSettings.left, array[i].styleSettings.top]);
    this.distances[i] = distance;


  }
  

  for(var key in this.distances){
    this.sortable.push([key, this.distances[key]]);
  }

  this.sortable.sort(function(a,b){
    return a[1]-b[1];
  });
  //console.log('this.sortable', this.sortable)

  this.sortable.shift();
  this.sortable = _.first(this.sortable, 3);
  //console.log("after _first this.sortable", this.sortable);

  for (var j = 0; j < this.sortable.length; j++) {
    var tuple = this.sortable[j];
    if(tuple){
      var property = tuple[0];
      var value = tuple[1];
      this.closest[property] = value;  
    }
  }

  console.log("this.closest", this.closest);
};

Dancer.prototype.addMouseover = function() {
  
  this.location = this.styleSettings;

  this.$node.on("mouseenter", function(){
    console.log('onMouseEnter', this.location)
  }.bind(this))

  this.$node.on("mousedown", function(){
    console.log(this.closest);
    for(var key in this.closest){
      //console.log(window.dancers[key].$node);
      console.log('onClick this.location',this.location)
      window.dancers[key].$node.animate(this.location);
    }
    for(var key in this.closest){
      window.dancers[key].$node.styleSettings = this.location;
    }
    for(var i = 0; i < window.dancers.length; i++){
      window.dancers[i].calcDistance(window.dancers);
    } 
  }.bind(this));

};



// Dancer.prototype.shorten = function() {
  
//   for(var key in this.closest){
//     this.sortable.push([key, this.distances[key]]);
//   }

//   this.sortable.sort(function(a,b){
//     return a[1]-b[1];
//   });
//   console.log('this.sortable', this.sortable)

//   this.sortable.shift();
//   this.sortable = _.first(this.sortable, 3);

//   for (var j = 0; i < this.sortable.length; i++) {
//     var tuple = this.sortable[i];
//     if(tuple){
//       var key = tuple[0];
//       var value = tuple[1];
//       this.closest[key] = value;  
//     }
//   }
// }




