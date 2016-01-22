// var numberCounter = function(number) {
// var numbersArray = [];
//   for  (var i = 1; i <= number; i+= 1) {
//   numbersArray =  numbersArray.push(i);
//   }
//   return numbers
// };
//
// var arrayMaker = function (numbers) {
//   var splitNumbers = numbers.split("");
//   return splitNumbers;
// }
var numberPusher = function(number) {
  var numbersArray = [];
  numbersArray.push(number);
  return numbersArray;
}


var numberCounter = function(int) {
  var strings = [];
  for (var i = 1; i <= int; i++) {
    strings = numberPusher(strings);
    strings = strings += i;
  };
  strings = strings.split("");
  return strings
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
