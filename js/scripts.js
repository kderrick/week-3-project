// ----------BUSINESS-------------

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

var pongNumberCounter = function(int) {
  var strings = [];
  for (var i = 1; i <= int; i++) {
    if (i % 5 === 0) {
      strings.push('pong');
    } else {
      strings.push(i);
    }
  };
    return strings;
};

var pingPongNumberCounter = function(int) {
  var strings = [];
  for (var i = 1; i <= int; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      strings.push('pingpong');
    } else {
      strings.push(i);
    }
  };
    return strings;
};

var finalPingPong = function(int) {
  var strings = [];
  for (var i = 1; i <= int; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      strings.push(' PingPong');
    } else if (i % 3 === 0) {
      strings.push(' Ping');
    } else if (i % 5 === 0) {
      strings.push(' Pong');
    } else {
      strings.push(i);
    }
  };
    return strings;
};



// ----------------------USER -------------------



  $(document).ready(function() {
    $('form#ping-pong').submit(function(event) {
      var game = parseInt($('input#game').val());
      var result = finalPingPong(game);


      if (!game) {
        alert("Please enter a positive integer");
      }

      $(".finish").text(result);


      $("#result").show();

      event.preventDefault();

    })

  });
