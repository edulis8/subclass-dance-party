$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on( "click", function(){
    for(var i = 0; i < window.dancers.length; i++){
      window.dancers[i].lineUp();   
    }
  });

  $('.congregateButton').on( "click", function(){
    for(var i = 0; i < window.dancers.length; i++){
      window.dancers[i].congregate();   
    }
  });

  $('body').on("mouseover", ".dancer", function(){
    $(this).hide('explode');
    $(this).addClass('stopToggle');
  });

});

// Make dancers that interact with other dancers. For example, by iterating across the array window.dancers and using the Pythagorean Theorem to calculate *your* distance from each other dancer, you can have a dancer find its n closest neighbors and do something based on their positions.

// iterate across window.dancers. 
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




// function playHadouken(){
//   $('#hadouken-sound')[0].volume = 0.5;
//   $('#hadouken-sound')[0].load();
//   $('#hadouken-sound')[0].play();
// }





