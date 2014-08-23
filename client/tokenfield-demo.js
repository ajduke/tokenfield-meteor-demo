  Template.hello.greeting = function () {
    return "Welcome to tokenfield-demo.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  Template.hello.rendered =function(){
    $('#tokenfield').tokenfield({
      tokens:['mitra', 'friend'],
      limit: 3,
      minWidth:23
    })
  }
