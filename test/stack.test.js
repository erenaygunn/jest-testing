class Stack {
    constructor() {
      this.top = -1;
      this.items = {};
    }
  
    get peek() {
      return this.items[this.top];
    }
  
    push(value) {
      this.top += 1;
      this.items[this.top] = value;
    }
  }

describe('My Stack', () => {


    it("is created empty", () => {
        const stack = new Stack();

        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({})
    });

    test.todo("it can push to the top");

    test.todo("can pop off");
})