var ShapeShiftingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps); 
};

ShapeShiftingDancer.prototype = Object.create(Dancer.prototype);
ShapeShiftingDancer.prototype.constructor = ShapeShiftingDancer;
ShapeShiftingDancer.prototype.oldStep = ShapeShiftingDancer.prototype.step;

ShapeShiftingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // 1
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggleClass('square-dancer');
};