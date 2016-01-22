
describe("numberCounter", function(){
  it("will count to the number given one at a time", function() {
    expect(numberCounter(3)).to.eql([1, 2, 3]);
  });
});


describe("pingNumberCounter", function(){
  it("will count to the number given one at a time, place in array, and replace numbers divisible by 3 with 'Ping'", function() {
    expect(pingNumberCounter(3)).to.eql([1, 2, 'ping']);
  });
});

describe("pongNumberCounter", function(){
  it("will count to the number given one at a time, place in array, and replace numbers divisible by 5 with 'Pong'", function() {
    expect(pongNumberCounter(5)).to.eql([1, 2, 3, 4, 'pong']);
  });
});

describe("pingPongNumberCounter", function(){
  it("will count to the number given one at a time, place in array, and replace numbers divisible by 15 with 'PingPong'", function() {
    expect(pingPongNumberCounter(15)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 'pingpong']);
  });
});

describe("finalPingPong", function(){
  it("will count to the number given one at a time, place in array, and replace numbers divisible by 3 with 'Ping', disvisible by 5 with 'Pong' and disvisible by 15 with 'PingPong'", function() {
    expect(finalPingPong(15)).to.eql([ 1, 2,' Ping', 4,' Pong',' Ping', 7, 8, ' Ping',' Pong', 11,' Ping', 13, 14,' PingPong']);
  });
});


// describe('numberPusher', function() {
//   it("Will push user input number into an array", function() {
//     expect(numberPusher(15)).to.eql([15]);
//   });
// });
//
// describe('numberCounter',function() {
//   it("Will count up to user input number by ones in strings", function() {
//     expect(numberCounter(15)).to.eql(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']);
//   });
// });

//   describe('pingPong',function() {
//     it("Will count up to user input number by ones in strings and replace strings divisble by 3 with ping, 5 with pong, and 15 with pingpong", function() {
//       expect(pingPong(15)).to.eql(['1','2','ping', '4', 'pong', 'ping, 7', '8', 'ping', 'pong', '11', 'ping','13', '14', 'pingpong']);
//     });
// });
