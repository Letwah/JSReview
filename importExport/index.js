//if it is a named export we must use curly brackets to import
//eg

import { genRandomId } from "./utils.js";
console.log(genRandomId());

// import theDefault, { genRandomId } from "./utils.js";
// genRandomId();

///destructuring genRandomId from the module

//defaults allow us to import/export stuff under any name we want
// import getRandoStuff from "./utils.js";
// getRandoStuff();
