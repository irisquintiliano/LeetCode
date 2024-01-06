function argumentsLength(...args) {
    return args.length;
}

// Example 1
const example1Args = [5];
console.log(argumentsLength(...example1Args)); // Output: 1

// Example 2
const example2Args = [{}, null, "3"];
console.log(argumentsLength(...example2Args)); // Output: 3
