$(document).ready(function() {
  window.dancers = [];
  window.centerStage = [];

  $('.addDancerButton').on('click', function(event) {
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
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.addSSDancerButton').on('click', function(event) {
  
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 2000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.addMovingDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineupButton').on('click', function(event) {
    var $body = $('body');
    var x = $body.width() * .25;
    var y = $body.height() * .40;
    for (var i = 0; i < window.dancers.length; i++, x += 100) {
      window.dancers[i].lineUp(x, y);
    }

  });
  
  $('body').on('mouseover', '.gif', function(event) {
    $(this).toggleClass('on-mouseover');
  });

  $('body').on('mouseleave', '.gif', function(event) {
    $(this).toggleClass('on-mouseover');
  });

  $('body').on('mouseover', '.dancer', function(event) {
    $(this).toggleClass('blinky');
  });


  $('body').on('click', '.dancer', function(event) {
    var $body = $('body');
    var x = $body.width();
    var y = $body.height();


    if (window.centerStage.length < 2) {
      window.centerStage.push(this);
    } else {
      var $shifted = window.centerStage.shift();
      $($shifted).animate({left: x * Math.random(), top: y * Math.random()});
      window.centerStage.push(this);
    }
    if (window.centerStage.length === 2) {
      $(window.centerStage[0]).animate({left: x * 0.40, top: y * 0.47, 'z-index': 100}, 700);
      $(window.centerStage[1]).animate({left: x * 0.50, top: y * 0.47, 'z-index': 100}, 700);
    }

  });


});








