$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    dancer.addMouseover();

    window.dancers.push(dancer);
    $('body').append(dancer.$node);

    for(var i = 0; i < window.dancers.length; i++){
      window.dancers[i].calcDistance(window.dancers);
    }

    // for(var i = 0; i < window.dancers.length; i++){

    //   window.dancers[i].addMouseover();
    //   console.log('here',dancers[i])
    // }


    
  });

  // EVENT LISTENERS
  $('.lineUpButton').on( "click", function(){
    for(var i = 0; i < window.dancers.length; i++){
      window.dancers[i].lineUp();   
    }
  });

  $('body').on("mouseover", ".dancer", function(){
    $(this).addClass('opacity');
  });
  

  $('.congregateButton').on( "click", function(){
    for(var i = 0; i < window.dancers.length; i++){
      window.dancers[i].congregate();   
    }
  });

  $('.explodeButton').on("click", function(){
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node.hide('explode');
      window.dancers[i].$node.addClass('stopToggle');
    }
    // $(this).hide('explode');
    // $(this).addClass('stopToggle');
  });
});

var merge = function(array1, array2, callback){ 
        
  var mergedArr = [];
        
  for(var i = 0; i < array1.length; i++){
    mergedArr.push(callback(array1[i], array2[i]));
  }

  return mergedArr;
};

var euclid = function(coords1, coords2){
  var squaredDeltas = merge(coords1, coords2, function(a,b){
    return Math.abs((a-b)*(a-b));
  });

  var answer = Math.sqrt(squaredDeltas[0] + squaredDeltas[1]);

  return answer;
};




