class NotFoundException {
    constructor(message) {
      this.message = message
    }
  }

export { NotFoundException }


// var myError = new Error('foo');
// myError instanceof Error // true
// var myString = "Whatever";
// myString instanceof Error // false