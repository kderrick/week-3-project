
describe("numberCounter", function(){
  it("will count to the number given one at a time", function() {
    expect(numberCounter(3)).to.eql([1, 2, 3]);
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
