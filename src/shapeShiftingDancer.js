var ShapeShiftingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps); 
  this.$node = $('<img class="dancer gif" src="https://media0.giphy.com/media/31vamYdZV5ISQ/200.gif#105" alt=""/>');
  this.step();
  this.setPosition(top, left);
};

ShapeShiftingDancer.prototype = Object.create(Dancer.prototype);
ShapeShiftingDancer.prototype.constructor = ShapeShiftingDancer;

ShapeShiftingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // 1
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggleClass('square-dancer');
};