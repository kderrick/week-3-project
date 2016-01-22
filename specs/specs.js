// describe('numberCounter', function() {
//   it("Will count up to number entered by user, by ones.", function() {
//     expect(numberCounter(20)).to.equal('1234567891011121314151617181920');
//   });
// });
//
//
// describe('arrayMaker', function() {
//   it("Will convert a string of numbers to an array", function () {
//     expect(arrayMaker('1234567891011121314151617181920')).to.equal(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']);
//   });
// });


describe('numberPusher', function() {
  it("Will push user input number into an array", function() {
    expect(numberPusher(15)).to.eql([15]);
  });
});

describe('numberCounter',function() {
  it("Will count up to user input number by ones in strings", function() {
    expect(numberCounter(15)).to.eql(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']);
  });
});

//   describe('pingPong',function() {
//     it("Will count up to user input number by ones in strings and replace strings divisble by 3 with ping, 5 with pong, and 15 with pingpong", function() {
//       expect(pingPong(15)).to.eql(['1','2','ping', '4', 'pong', 'ping, 7', '8', 'ping', 'pong', '11', 'ping','13', '14', 'pingpong']);
//     });
// });
