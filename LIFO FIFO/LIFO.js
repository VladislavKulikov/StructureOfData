class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (this.stack.length == 0) return undefined;
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  getAll() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + "\n";
    }
    return str;
  }
}
