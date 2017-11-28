export default function main() {
    const message = `And Hello from JS ${Date.now()}`;
    window.setTimeout(() => window.alert(message), 3000);
}
