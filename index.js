const main = () => {
    console.log("Hi doggy");
}
main()

const sum => (a, b) => a + b;
const three = sum(1, sum(1, 1));
console.log(three + 1);
