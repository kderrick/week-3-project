
var numberCounter = function(int) {
  var strings = [];
  for (var i = 1; i <= int; i++) {
      strings.push(i);
  };
    return strings;
};

var pingNumberCounter = function(int) {
  var strings = [];
  for (var i = 1; i <= int; i++) {
    if (i % 3 === 0) {
      strings.push('ping');
    } else {
      strings.push(i);
    }
  };
    return strings;
};


// LOGIC FOR PING PONGING (push doesn't work)

  // var pingPongArray = [];
  // var pingPong = function(input) {
  //   for (var i = 1; i <= input; i++) {
  //     if (i % 3 === 0) {
  //       pingPongArray = pingPongArray.push("Ping");
  //       } else if (i % 5 === 0) {
  //       pingPongArray = pingPongArray.push("Pong");
  //       } else if ((i % 3 === 0) && (i % 5 === 0)) {
  //       pingPongArray = pingPongArray.push("PingPong");
  //       } else {
  //        pingPongArray = pingPongArray.push("i");
  //       }
  //     };
  //       return pingPongArray;
  //   };


  $(document).ready(function() {
    $('form#ping-pong').submit(function(event) {
      var game = parseInt($('input#game').val());
      var result = numberounter(game);


      if (!game) {
        alert("Please enter a positive integer");
      }

      $(".finish").text(result);


      $("#result").show();

      event.preventDefault();

    })

  });
