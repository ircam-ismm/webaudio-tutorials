# Encapsulating Logic

In this tutorial, we will step aside a little bit from the Web Audio API to review some important patterns and techniques you need to know when writing code in a general manner. That is, how to encapsulate common logic to simplify your code, share functionnalities and organize your application files.

Of course, this is a very important / large / interesting topic on its own, and this is not the goal of these tutorials to go deep with such subject. Instead, we will only present the most common and simple features the language gives you access to, and won't go into more advanced subjects such as [design patterns](https://www.google.com/search?q=javascript+design+patterns), etc.

## Functions

The most simple way to encapsulate logic is to use functions. We have already seen and used functions in the previous tutorials, but let's just review how we can declare and use them.

Let's take a contrieved example and say that at several points of our code we need to compute the mean of a list of numbers, e.g.:

```js
// need to compute the mean of this list of 3 elements
const myFirstList = [1, 2, 3];
let sum = 0;
for (let i = 0; i < 3; i++) {
    sum += myFirstList[i];
}
const mean = sum / 3;

// .... later

// need to compute the mean of this list of 4 elements
const mySecondList = [1.2, 2.1, 3.6, 4.2];
let sum = 0;
for (let i = 0; i < 4; i++) {
    sum += mySecondList[i];
}
const mean = sum / 4;
```

We can see that this code is verbose, many things are repeated and could easily break. E.g. what if for some reason the size of the list changes? If instead of the mean, we finally want to have the median value? If you found a bug in how you compute the mean and must then change your code everywhere? etc.

To simplify that and make the code more abstract, we can just create a generic function, which would take a list as parameter and return the mean, and rewrite our code as the following:

```js
function computeMean(list) {
    const size = list.length;
    let sum = 0;
    // instead of hardcoding the list size, we just use its `length`` attribute
    for (i = 0; i < list.length; i++) {
        sum += list[i];
    }

    const mean = sum / list.length;
    return mean;
}

const myFirstList = [1, 2, 3];
const mean1 = computeMean(myFirstList);

const mySecondList = [1.2, 2.1, 3.6, 4.2];
const mean2 = computeMean(mySecondList);
```

### Function syntaxes

As already seen earlier in these tutorials, functions in javascript can be written with several syntaxes:

```js
// named function
function add(a, b) {
    return a + b;
}

// anonymous function (very often used for callbacks)
// the anonymous function is stored into a variable called `add`
const add = function (a, b) {
    return a + b;
}

// arrow functions, which are more and more often used nowadays
// because they solve some counter intuitive characteristics of regular functions
const add = (a, b) => {
    return a + b;
}

// arrow function can also be written without the bracket and return
// statement, when written on one line
const add = (a, b) => a + b;
// which can be very handy in some specific situations, e.g.
const result = [1, 2, 3, 4]
    .filter(item => item % 2 === 0) // keep only even numbers
    .map(item => item * 3) // multiply each item by 3
// > [6, 12]
```

## Classes

Classes are a bit higher-level and more abstract than function. They allow to put together some data and related logic into a common abstraction. Additionally, they allow to create several "instances" of the same object at the same time and to manipulate them in a generic way.

Just as with function, we have already seen many different classes in these tutorials. Actually, the `AudioContext` is class, and all `AudioNode`s and `AudioParam`s we have used so far are instances of generic classes.

Let's see how we can declare a class, which represent a person with a name and an age:

```js
// 
class Person {
    // this is the method that is called when a "new" Person instance is created
    constructor(name, age) {
        // the keyword `this` represent the current instance
        // a value that is bound to a class is called a "method"
        this.name = name;
        this.age = age;
    }

    // a function that is bound to a class is called a "method"
    sayHello() {
        return `'Hello my name is "${this.name}"`;
    }

    celebrateBirthday() {
        // increment the Person instance age by 1 and celebrate
        this.age += 1;
        return `${this.sayHello()}, I'm now ${this.age} years old`;
    }
}
```

From this class declaration (you can think of it as a kind of blueprint), you can create several person using the `new` keyword:

```js
// create two "Person"
const niap = new Person('niap', 5);
const hiho = new Person('hiho', 12);

// each of them can say hello
niap.sayHello();
// > Hello my name is "niap"
hiho.sayHello();
// > Hello my name is "hiho"

// each of them can celebrate their birthday
niap.celebrateBirthday();
// > Hello my name is "niap", I'm now 6 years old
hiho.celebrateBirthday();
// > Hello my name is "hiho", I'm now 13 years old
```

## Modules

The last way we have seen so far to clean our code further was to use "modules", which are even higher-level than classes. Once again, we will use here a contrieve example that will allow us to focus on the syntax and general logic, rather than on the specific functionnality and implementation detail. 

Let's say we need to increment and decrement some counter in some part of our application, and that, (for some reason) other parts of the application needs to be able to get the current value of the counter, e.g. to diplay. We can then create a file, e.g. `counter.js` which will declare module with three methods:

```js
// counter.js

// this variable is "private" to the module because it is not
// exposed with the `export` keyword
let counter = 0;
// increment the counter when called
export function increment() {
  counter += 1;
}
// decrement the counter when called
export function decrement() {
  counter -= 1;
}
// retrieve the current value of the counter
export function getCurrent() {
  return counter;
}
```

Then, two separate modules of our application can import the module and use its exported method. E.g. a first part reacting to some user clicking on '+' or '-' buttons:

```js
// file: a.js
// import only the increment and decrement functions from counter
import { increment, decrement } from './counter.js';

myPlusButton.addEventListener('click', increment);
myMinusButton.addEventListener('click', decrement);
```

A second part that refresh itself, disregarding any user events, every second:

```js
// file: b.js
// import only the getCurrent functions from counter
import { getCurrent } from './counter.js';

// pick the current value of the counter every second
// and display it somehow
setInterval(() => {
    const currentCounterValue = getCurrent();
    displaySomehow(currentCounterValue);
}, 1000);
```

::: note
The module syntax in JavaScript has been standardized relatively recently. As such, this syntax might not work in old browser. Many solutions exists to work around this issue such [`esbuild`](https://esbuild.github.io/) or [`webpack`](https://webpack.js.org/).  
In these tutorial, we will stick to the most simple case of not using bundlers and assume you work with a decently modern browser.
:::

## Conclusion

Now that we have accomplished this short refresher on the encapsulation patterns we have seen so far, let's use them in a more hands-on manner by implementing a custom effect, a feedback delay, in such way that you will able to reuse it in several applications.
