import { MinStack } from './min_stack.js';

describe('minStack', () => {
  let instance = new MinStack();

  it('should recognize a new class instance', () => {
    expect(Array.isArray(instance.stack)).toBe(true);
    expect(instance.length).toBe(0);
  });

  it('should push new items onto the stack', () => {
    instance.push(200);
    instance.push(300);

    expect(instance.stack.length).toBe(2);
  });

  it('should pop items from the stack', () => {
    instance.pop();
    instance.pop();

    expect(instance.stack.length).toBe(0);
  });

  it('should return the top item on the stack', () => {
    instance.push(100);
    instance.push(400);
    instance.push(3600);

    expect(instance.top()).toBe(3600);
  });

  it('should return the minimum or smallest element', () => {
    expect(instance.getMin()).toBe(100);
  });

});