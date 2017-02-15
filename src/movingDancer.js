var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps); 
  this.top = top;
  this.left = left;
  this.$node = $('<img class="dancer gif" src="https://media0.giphy.com/media/6qNansp6qSjWU/200w.gif#285" alt=""/>');
  this.step();
  this.setPosition(top, left);
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // 1
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
  //this.$node.animate({height: '20px'}, 500);
  //this.$node.animate({height: '8px'}, 1000);

/*  this.oldStep();

  this.$node.animate({height: this.top}, 500);*/
};