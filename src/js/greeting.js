export default class Greeting {
    constructor(name) {
        this.message = `Hello from JS using ES6, ${name}!`;
    }

    sayHello() {
        return this.message;
    }
}
