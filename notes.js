/** ******************* NOTES FROM REVISION SESSION 19/04/23 ********
 * https://drive.google.com/file/d/11wP12TxtNCyb0u6oNYNckAuhqhz2Opn-/view?ts=64404d2b
 * ***********/

//how to find what something is

// let data = []

// console.log(typeof data)

// CASTING or changing from one thing to another
let data1 = "22";

data1 = Number(data1);

console.log(typeof data1);

//COERSION - doing maths to create a number readable
let data2 = "22";

data2 = data2 * 1;

console.log(typeof data2);

// method types

let data = "Hello World";

console.log(data.charAt(0)); //returns character 'H'

console.log(data + data); //better to use template literal `` but this is concat

console.log(`${data} - ${data}`); //template literal

console.log(data.includes("World")); // method on a string  - can use .replace instead of include etc

///NUMBER

let data3 = 100.2; //floating point number computers dont like them (avaoid decimals)

//so

let data4 = "fish";

console.log(data4 * 10); //try to turn fish into number NaN

console.log(Math.random()); //between 0/1

console.log(Math.round(Math.random() * 1000)); //converts it by multiplying and rounding moving decimal place

let data5 = 28.66;

console.log(Math.floor(data5)); //rounds down
console.log(Math.ceil(data5)); //rounds up

let data6 = -33.77;
console.log(Math.abs(data6)); //removes minus

("Hello World"); ///literal string

console.log("Hello World");

// const  and var 18:46pm

// var is scoped to function
//const even more narrow

myName = "Colette"; //global variable - BAD
child = "child of scope";

function scope() {
  var myName = "Colette"; //var only available inside function where its been declaired
  //or any child of it as data travels into children
  function child() {
    console.log(myName);
  }
}

scope();

function demo7() {
  if (true) {
    //this always runs
    var test = "Hello"; //const very private // let only works where it is
    //var works anywhere within func  // let can be reassigned const can't
  }

  console.log(test);
}
demo7(); //call it

function demo7() {
  if (true) {
    //this always runs
    const test = {};
    test.name = "Colette"; //test is object but put more data in box const applies to the box
    //around not the content of the box -
    //hence why you can change a cont if it is a memebr of the object family
    console.log(test);
  }
}
demo7(); //call it

//garbage collection

for (let i = 0; i < 99; i++) {
  const myName = "Colette";
  console.log(myName);
}

//NAMING - 100% CASE SENSITIVE

//camel case convention
const iWorkForIBM = false;

//instance use underscore
const _iAmAnInstance = new Object();

//constructors - things that create
function Person() {}

//when you have a const that has been decided before prog ran
// not usual
// const I_AM_A_WOMAN;

//CRUD - CREATE READ UPDATE DELETE 6:58pm

//operators 6:59pm

const age = 100;
const happy = true;

if (age && happy) {
  //or ||
  // can use  === ,==, =, >, >=, != etc
  console.log("yes");
}

//object operator logical operator

const obj = { name: "dave", location: {} };

if (obj && obj.location) {
  console.log("yes");
}

///FALSY

// var string = ""; // <-- falsy

// var filledString = "some string in here"; // <-- truthy

// var zero = 0; // <-- falsy

// var numberGreaterThanZero // <-- truthy

// var emptyArray = []; // <-- truthy, we'll explore more about this next

// var emptyObject = {}; // <-- truthy

const falseStatement = 0;

if (data) {
  console.log("yes");
}

//false

//
const object = { name: "Colette", age: 25, height: 168 };
//eg name: is the key "colette" is the value

const key = "name";
object[key] = "Bob"; //dynamic object key- updating data inside object

//read data from object
console.log(object.name);

//keys and dynamic object keys 7:08pm

//when object contains a function we call the function a method
//because methods can call other methods...

const object2 = {
  add(x, y) {
    return x + y;
  },
};

console.log(object2);

//GETTERS SETTERS

const obj1 = {
  _name: "keanu",
  set name(newName) {
    this._name = newName.toUpperCase();
  },
  get name() {
    return this._name;
  },
};

// obj1.name("letty"); //before setter

obj1.name = "Letty";

console.log(obj1);

//for/In operator 7:14pm

//for/in loop
const obj2 = { a: 1, b: 2, c: 3 };

for (const key in obj2) {
  console.log(obj2[key]);
}

//copy object 7:17pm

const copy = { ...obj2 };

console.log(copy); //skin deep

//objects are passsed by reference

//turned into string then back using JSON.parse  + JSON.stringify

const obj3 = { a: 1, b: 2, c: 3, inner: { name: "sharpie" } };
const copy1 = JSON.parse(JSON.stringify(obj3));

copy1.inner.name = "9999";

console.log(obj, copy1);

//ARRAYS - can contain any datat type 7:32pm

const arr = [1, 2, 3, 4, 5, "Hello"];

//array method - INCLUDES  - only works on primatives
console.log(arr.includes("Hello"));

//mutating array - chopping stuff off
arr.length = 3;

console.log(arr[arr.length - 1]);

//mutating - MAP
const arr2 = [
  { name: "Keanu", age: 57 },
  { name: "Dave", age: 54 },
  { name: "Flea", age: 60 },
  { name: "Pedro", age: 48 },
];

// console.log(arr2.includes("Bye"));

const result = arr2.map((item) => {
  return item.name;
});
// console.log(result);

//repeat something forEach
arr2.forEach((item) => {
  //do something
});

//put in in a box because it returns something (const index = )
//find index(works on objects inside arrays as well)
const index1 = arr2.findIndex((item) => {
  return item.name === "Pedro"; //returns 3 cos thats where he is...
});

console.log(index1);

// //remove an item
// arr2.splice(index1, 2);

//only works on primatives
// const index2 = arr2.indexOf();

//FIND - very useful
const theItemInQuestion = arr2.find((item) => {
  return item.name === "Flea";
});

//manipulating data changes item
theItemInQuestion.name = "Anthony";
console.log(arr2);

//FILTER - very useful (using arr2)

const filteredVersion = arr2.filter((item) => {
  return item.age > 50; //takes out the item with age under 50
});

//reverses it
filteredVersion.reverse();

console.log(filteredVersion);

//********** END OF UBER CRITICAL ONES **************///

//Every METHOD - use .some to see if anyone is old...

const isEveryoneOld = arr2.every((item) => {
  return item.age > 50;
});

console.log(isEveryoneOld); //Flase as Pedro under 50

//turn array back into string by joining wont work here because they are not primatives

// console.log(arr2.join(" - ")); -wont work

//map over array, pull all names, then join together - function chaining
console.log(arr2.map((item) => item.name).join(" ")); //returns KeanuDaveAnthonyPedro

console.log(
  arr2
    .map((item) => {
      return item.name;
    })
    .join(" ")
); ///same but more obvious whats going on

//ADDING TO AN ARRAY
//.push - adds to end , .unshift - adds to start
// you can also sort by using.sort for putting something in order these mutates original

arr2.unshift("yo");
console.log(arr2);

// **************  FUNCTIONS ****************//

//declaration - can write anywher in current scope - write this way or fat arrow
//anonymous until inside a box

// function add(x, y) {
//   return x + y;
// }

//this one is hoisted + inside a box - have to write before you use
// const add = function (x, y) {
//   return x + y;
// };

//FAT ARROW FUNC - same as first one behaviour  ES6
//pure func

const add = (x, y) => {
  return (x = y);
};

console.log(add(2, 3));

//returns stop other bits working because its already returned
const add1 = (x, y) => {
  if (x > 10) {
    return x + y;
  } else {
    return "Too Low";
  }
};

console.log("i never run");

//TRY / CATCH ---talking to API's for eg

function iError() {
  throw new Error("Letty says no");
}

try {
  console.log(today);
} catch (err) {
  console.log(err);
} finally {
  console.log("i always run regardless of if try or catch ran");
}

//defensive checks

function add2(x, y) {
  if (typeof x != "number" || typeof y != "number") {
    return 0;
  }
  return x + y;
}
console.log(add2(1, 2));

//LEXICAL SCOPING - means the scope of something is based on where it is defined. like x,y in above example line 384

//ES6 IMPROVEMENTS

this.name = "Keanu";
console.log(this.name);

//JUST USE FAT ARROWS FFS!!!!!!!!!!!!! - although cant't override iwth call, apply and bind - won't work

setTimeout(() => {
  console.log(this.name);
}, 1000);

//CONTROL FLOW

const age1 = 41;

// if (age1 > 18) {
//   console.log("adult");

//   //   if (today === "Tuesday") {
//   //     //do something here
//   //   }
// } else {
//   //do something else
// }
//this gets complicated nesting if statements so we us SWITCH
//SWITCH STATEMENTS  8:00pm

const age2 = 41;

switch (age2) {
  case 18:
    console.log("Just an adult");
    break;

  case 19:
    console.log("bit older"); ///these are not runnung ask russell about this
    break;

  default:
    break;
}

//LOOPS 8:08pm

//for loop

// for (let i = 0; i < 10; i++) {
//   console.log("I repeat", i);
// }

// for (let i = 0; i < 100; ) {
//   console.log("I repeat", i);
//   i += 3; //every 3 number
// }

for (let i = 0; i < 15; i++) {
  if (i % 3 === 0) {
    continue; //or break
  }
  console.log("I repeat", i);
}

//TIMERS - 8:11pm

setTimeout(() => {
  //to repeat just write setInterval
  console.log("I just ran");
}, 4000);

//to stop - put inside a box

// const timer = setInterval(() => {
//   console.log("I just ran too");
// }, 3000);

// clearInterval(timer);

//DATES - use 3rd part library like day.js

//dtate object has methods

const date = new Date(2010, 20, 8);
const date2 = new Date(2010, 20, 8);

console.log(date.toLocaleString(), date2.toLocaleString());

// console.log(date.toLocaleTimeString()); //can mess with this bit

console.log(Date.now());

//ES6 - SPread Operator

const obj4 = { a: 1, b: 2, c: 3 };

const copy2 = { ...obj4 };

const arr3 = [1, 2, 3, 4, 5, 6, 7];

const arr3Copy2 = [...arr3, "hello universe", []];

console.log(arr3Copy2);

//DESTRUCTURING

const { a: firstItem = "Hello", ...others } = obj4; //rest operator //give default value eg like "Hello"
console.log(firstItem, others); //returns 1 { b: 2, c: 3 }

const list = [9, 8, 7, 6, 5, 4, 3, 2]; //same locg as object - array just object where the keys are numbers
const [item1, item2, ...allOthers] = arr;

console.log(item1, item2, allOthers);

console.log(Array.isArray(list)); //true

//For of loop syntax  8:25pm

const colors = ["red", "green", "orange", "yellow"];
for (const [index, item] of colors.entries()) {
  console.log(index, item);
}

// CLASSES  - define what an object looks like then make instances of it

class Musician {
  //make private field using hashtag

  #_name;

  constructor(name) {
    this.#_name = name;
  }
  get name() {
    return this.#_name;
  }

  //static method - when the method lives on the prototype it is a static method
  //this function is now available regardless of weaather i've mad an instance

  static genRandomId = () => {
    return Math.round(Math.random() * 10000);
  };
}

class GuitarPlayer extends Musician {
  constructor(name, type) {
    super(name);
    this.type = type;
  }

  get isGuitar() {
    return this.type;
  }
}

const _instanceOfGuitarPlayer = new GuitarPlayer("John", true);
console.log(Musician.genRandomId()); //random number id  returned eg 5722
console.log(_instanceOfGuitarPlayer instanceof Musician); //true - like typeof

//end classes

//IMPORT EXPORT see importExport folder in same repo 8:45pm
