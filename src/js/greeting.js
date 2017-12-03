export default class Greeting {
    constructor(name) {
        this.message = `Hello from ES6 JS, ${name}!`;
    }

    sayHello() {
        return this.message;
    }
}
