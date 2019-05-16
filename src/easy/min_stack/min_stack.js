export const MinStack = function() {
  this.stack = [];
  this.length = 0;
};

MinStack.prototype.push = function(x) {
  this.stack.push(x);
  this.length++;
};

MinStack.prototype.pop = function() {
  if (this.length > 0) {
    this.stack.pop();
  }
};

MinStack.prototype.top = function() {
  if (this.length > 0) return this.stack[this.stack.length-1];
};

MinStack.prototype.getMin = function() {
  if (this.length > 0) {
    return Math.min(...this.stack);
  }
};