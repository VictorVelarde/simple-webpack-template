import Greeting from './greeting';

export default function main() {
    const greeting = new Greeting('Bob');
    setTimeout(() => console.log(greeting.sayHello()), 3000);
}
