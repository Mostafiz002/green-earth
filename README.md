
## 🚀 READMe

#### 1) What is the difference between var, let, and const?

- var is function-scoped, it is accessible anywhere within the function it is declared, it allows re-declaration and re-assignment, it's less safe & old way to use.

- let is block-scoped, it is only accessible inside the {} block where it is declared, allows re-assignment but not re-declaration.

- const is block-scoped, it is only accessible inside the {} block where it is declared, must be initialized once, no re-assignment or re-declaration (but object/array contents can change).

---

#### 2) What is the difference between map(), forEach(), and filter()?

- forEach() is mainly used for iterating over an array to updating something or perform other tasks. It doesn’t return a new array. Its return value is always undefined.

- map() is used when I want to transform each element of an array. It applies a function to every element and returns a new array with the transformed values, without changing the original array.

- filter() is used to select elements based on a condition. It tests each element and returns a new array containing only the items that pass the condition.

---

#### 3) What are arrow functions in ES6?

Arrow functions in ES6 are a shorter way to write functions. It automatically return a value if the function has a single expression.We also can write multiline code using {...}. We can't use .this in here. Also They cannot be used as constructors.

---

#### 4) How does destructuring assignment work in ES6?

Destructuring in ES6 lets us extract values from objects or arrays and assign them to variables in a simple & easy way, making code cleaner and easier to read. Instead of accessing each value individually, we can set multiple values at once using {..} for objects or [..] for arrays. We can also set default values or rename variables in this process.

---

#### 5) Explain template literals in ES6. How are they different from string concatenation?

Template literals in ES6 are a way to create strings using backticks (`) instead of quotes. It lets us insert variables or expressions directly using ${...} and write strings across multiple lines easily. Unlike traditional string concatenation, which uses + to join strings and variables, template literals are cleaner, easier to read, and more flexible.

---