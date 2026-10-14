 class Counter {
  constructor() {
    this.count = 0;
  } 

  increment() {
    this.count++;
  } 
  
  get Value() {
    return this.count;
  }

}

export default Counter;