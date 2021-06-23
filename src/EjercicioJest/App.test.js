import * as app from "./app";
import * as math from "./math";

math.multiply = jest.fn();
math.add      = jest.fn();
math.subtract = jest.fn();
math.divide   = jest.fn();

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});
test("calls math.multiply",()=>{
    app.doMultiply(1,2);
    expect(math.multiply).toHaveBeenCalledWith(1,2);
});
test("calls math.divide",()=>{
    app.doDivide(10,2);
    expect(math.divide).toHaveBeenCalledWith(10,2);
});