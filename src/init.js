$(document).ready(function() {
  window.dancers = [];

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

    // make a dancer with a random position

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

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

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

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineupButton').on('click', function(event) {
    
    /* backup
    var $body = $('body');
    var x = $body.width * .25;
    var y = $body.height * .5;
    $('body .dancer').remove();
    for (var i = 0; i < window.dancers.length; i++, x += 20) {
      window.dancers[i].setPosition(x, y);
      //$('body').append(window.dancers[i].$node);
    }

    console.log(window.dancers);
    */
    var $body = $('body');
    var x = $($body).width() * .25;
    var y = $($body).height() * .5;
    var $allDancers = $('.dancer');

    for (var i = 0; i < $allDancers.length; i++, x += 50) { 
      // $(danzer).animate({top: 500, left: 1000 }, 1000);
      var dancer = $allDancers[i];  
      $(dancer).animate({left: x, top: y}, 1000);
    }

  });

  $('body').on('mouseover', '.dancer', function(event) {
    $(this).toggleClass('on-mouseover');
  });



});


//After updating the object properties
  //how to know which js object for dom object

//Suggestion:
  // add new property to track the dom objects
    //use data property


//do a jquery call using the id property from dancer objects
  //edit that node












