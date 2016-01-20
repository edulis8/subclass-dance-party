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


describe("blinkyDancer", function() {

  var blinkyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;

  });

  it("should have a congregate function that makes its node move to a point in the browser", function() {
    sinon.spy(blinkyDancer.$node, 'animate');
    blinkyDancer.congregate();
    expect(blinkyDancer.$node.animate.called).to.be.true;
  });

  it("should have a calcDistance function that modifies the this.distance object", function() {
    expect(blinkyDancer).to.have.a.property("distances");
    //expect.deepEqual(blinkyDancer.distance, {}, "yay deep equalness");
    blinkyDancer.calcDistance([1,2,3]);
    
    console.log('euclid calculation inside spec', euclid([3,4],[66,4]))
    //expect(blinkyDancer.distances).to.have.property("value");
    expect(blinkyDancer.distances).to.have.keys('0','1','2');
  });
 



  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blinkyDancer, "step");
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});



