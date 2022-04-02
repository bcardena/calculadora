const cal = require('./calculator.js')

describe('add operator', () => {
    test('adds 1 + 2 to equal 3', () => {
      var result = cal.sum(1, 1);
    expect(result).toBe(2);
  });

  test('adds 4 + 5 to equal 9', () => {
    var result = cal.sum(4, 5);
  expect(result).toBe(9);
});
});


describe('substract operator', () => {
  test('restar 5 - 4 to equal 1', () => {
    var result = cal.restar(5, 4);
  expect(result).toBe(1);
  });
  
  test('restar 10 - 0 to equal 10', () => {
    var result = cal.restar(10, 0);
  expect(result).toBe(10);
  });
});

