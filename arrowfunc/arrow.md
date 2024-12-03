Sure! Let's test your knowledge on JavaScript arrow functions.

1. **Basic Syntax**:  
What is the result of the following code?
```javascript
const sum = (a, b) => a + b;
console.log(sum(3, 5));
```

Answer: 8 - correct


2. **Implicit Return**:  
Which of the following functions will result in an implicit return?
- A. `const multiply = (a, b) => { return a * b };`
- B. `const multiply = (a, b) => a * b;`
- C. `const multiply = (a, b) => { a * b };`

Answer: B - correct

3. **Lexical `this`**:  
What is the value of `this` in the following code?
```javascript
const person = {
    name: "Alice",
    greet: () => {
        console.log(this.name);
    }
};
person.greet();
```

Answer: person - wrong

Answer: The value of this inside the arrow function will not refer to the person object. Instead, it will refer to the global object (window in browsers, global in Node.js), and this.name will be undefined because this doesn't point to person.


4. **Single Parameter**:  
How can you rewrite the following function using an arrow function with a single parameter?
```javascript
const square = function(x) {
    return x * x;
};

// answer
const aSquare = x => x * x;

```


5. **No Parameters**:  
What is the correct way to define an arrow function with no parameters?

```javascript

const foo = () => 'yes';


```

Feel free to answer, and I'll provide feedback!