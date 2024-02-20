# Encapsulating Logic

In this tutorial, we will step aside a bit from the Web Audio API to review how we can encapsulate common logic to simplify code, share functionalities and organize applications. Of course, this is a very large and important topic on its own, and this is not the goal of these tutorials to go deep with subjects such as [design patterns](https://www.google.com/search?q=javascript+design+patterns), etc. 

Instead, we will only review the most common concepts and features the language proposes and that we have already met in previous tutorials.

## Functions

The most simple way to encapsulate logic is to use functions. We have already seen and used functions in the previous tutorials, but let's just review how we can declare and use them.

Let's take a contrived example and pretend that at several points of our code we need to compute the mean of a list of numbers, e.g.:

```js
// need to compute the mean of this list of 3 elements
const myFirstList = [1, 2, 3];
let sum = 0;
for (let i = 0; i < 3; i++) {
    sum += myFirstList[i];
}
const mean1 = sum / 3;

// .... later

// need to compute the mean of this list of 4 elements
const mySecondList = [1.2, 2.1, 3.6, 4.2];
let sum = 0;
for (let i = 0; i < 4; i++) {
    sum += mySecondList[i];
}
const mean2 = sum / 4;
```

We can see some issues with this how this code is written: many things are repeated and hard coded, which makes it fragile and hard to maintain. Indeed, what if for some reason the size of the lists changes? If instead of the mean, we finally want to retrieve the median value? If you find a bug in the mean computation and then must change your code everywhere? etc.

To simplify that and make the code more abstract, we can just create a more generic function. With a simple function takes a list of unknown size as argument and returns the mean, we can then rewrite our code as the following:

```js
function computeMean(list) {
    // instead of hardcoding the list size, we just use its `length`` attribute
    const size = list.length;
    let sum = 0;

    for (i = 0; i < size; i++) {
        sum += list[i];
    }

    return sum / size;
}

const myFirstList = [1, 2, 3];
const mean1 = computeMean(myFirstList);

const mySecondList = [1.2, 2.1, 3.6, 4.2];
const mean2 = computeMean(mySecondList);
```

### Function syntax

As already seen earlier in these tutorials, functions in JavaScript can be written with several syntax:

```js
// Named function
function add(a, b) {
    return a + b;
}

// Anonymous function stored into a variable called `add`
const add = function(a, b) {
    return a + b;
}

// Arrow functions stored into a variable called `add`.
// Arrow functions are often used nowadays because they solve 
// some counter intuitive characteristics of "regular" functions
const add = (a, b) => {
    return a + b;
}

// When written on one line, arrow functions can also be written
// without the brackets and the `return` statement, 
const add = (a, b) => a + b;
// This can be useful in some specific situations, e.g.:
const result = [1, 2, 3, 4]
    .filter(item => item % 2 === 0) // keep only even numbers
    .map(item => item * 3) // multiply each item by 3
// > [6, 12]
```

## Classes

Classes are higher-level and more abstract than function. They allow to put together some data and related logic into a common abstraction. Using classes, you can create several **_instances_** of the same object at the same time and manipulate them in a generic way.

Just as with function, we have already seen several manifestations of classes in these tutorials. Indeed, the `AudioContext` is a class, as well as all `AudioNode`s and `AudioParam`s we have used so far are instances of generic classes.

Let's see how we can declare a class, which represent a person with a name and an age:

```js
class Person {
    // this is the method that is called when a "new" Person instance is created
    constructor(name, age) {
        // the keyword `this` represent the current instance
        this.name = name;
        // a value that is bound to a class is called an "attribute"
        this.age = age;
    }

    // a function that is bound to a class is called a "method"
    sayHello() {
        return `Hello my name is "${this.name}"`;
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
// create two "Person" instances
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

::: info
At this point, you can wonder why we said that `AudioNode`s, such as the `OscillatorNode` we created in previous tutorials are instance of classes, as we never created them using the `new` keyword. This is the manifestation of a common design pattern called the **_factory pattern_** which delegates to a class instance the ability to create other class instance:

```js
class AudioContext {
    // ...
    createOscillator() {
        return new OscillatorNode(this);
    }
}
```

We will see in later tutorials that this is also possible to explicitly create `AudioNode`s using the `new` keyword:
```js
const osc = new OscillatorNode(audioContext, options);
````
:::

## Modules

The last way we have seen so far to clean our code further was to use "modules", which are even higher-level than classes. Once again, we will use a very contrived example that will allow us to focus on the syntax and general logic, rather than on  specific functionality and implementation detail. 

Let's imagine we need to increment and decrement a counter in some part of our application, and that another part of the application needs to monitor the current value of the counter for some reason. One possibility is to create a module file, e.g. `counter.js`, which declares and exports three functions:

```js
// counter.js

// This variable is "private" to the module because it is not
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

Then, two separate modules of our application can import the module and use its exposed methods. For example, one part could react to some user clicking on '+' or '-' buttons:

```js
// file: a.js
// import only the `increment` and `decrement` functions from counter
import { increment, decrement } from './counter.js';

myPlusButton.addEventListener('click', increment);
myMinusButton.addEventListener('click', decrement);
```

While a second part could refresh itself every second to display the current value of the counter, disregarding any user events:

```js
// file: b.js
// import only the `getCurrent` function from counter
import { getCurrent } from './counter.js';

// pick the current value of the counter every second
// and display it somehow
setInterval(() => {
    const currentCounterValue = getCurrent();
    displaySomehow(currentCounterValue);
}, 1000);
```

Interestingly, while `a.js` and `b.js` are both dependent from `counter.js`, they are also quite isolated from each other, `b.js` does not have to know anything about `a.js` and vice versa. Such isolation is generally interesting as it makes it safer to modify one part without any impact on the other.

::: info
The module syntax has been standardized relatively recently in JavaScript. As such, this syntax might not work in older Web browser. Different solutions, called **_bundlers_**, exist to work around this issue (cf. [`esbuild`](https://esbuild.github.io/) or [`webpack`](https://webpack.js.org/)).

In these tutorial, we will stick to not using such tools and assume you work with a decently modern and up-to-date Web browser.
:::

## Conclusion

Now that we have accomplished this short refresher on the encapsulation patterns we have seen so far, let's use them in a more hands-on manner by implementing a custom effect, a feedback delay, in such way that you will able to reuse it in several applications.
