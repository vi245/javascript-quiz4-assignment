Javascript quiz 4 assignment

## What are anonymous functions in JavaScript?

It is a function who does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

```JavaScript
   var getX=function()
   {
    return 1;
   }
   getX();//1
```

It can only be accessed by a variable it is stored in as a function as a value.it can accept multiple arguments and have one expression.

## Explain strict comparison and Abstract comparison in javascript?

console.log(5 == "5"); // true
console.log(5 === "5"); // false.

Double equals is known as the abstract equality comparison operator while triple equals to is termed the strict equality comparison operator. The difference between them :
Abstract equality will try to resolve the datatype by type coercion before making comparison
Strict equality will return false if the data types are different and will not resolve data types.

## Difference b/w arrow functions and regular functions?

#### Regular Functions

- this changes according to the way that function is invoked.

```JavaScript
  var x = 1;
let myObject = {
 x: 2,
arrowFunction:() => {
 console.log(this.x);
 },
regularFunction(){
 console.log(this.x);
 }
};
myObject.arrowFunction(); //1
myObject.regularFunction();//2
```

- arguments keywords can be used to access the passed arguments when the function is invoked.
- they can not be used as constructors.

#### Arrow Function

- they don't have their own “this”, and they don’t redefine the value of “this ”within the function.
- arguments keyword can't be used and instead using rest operator it can access the arguments.
- they can not be used as constructors.

## What is Hoisting in JavaScript?

Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
Javascript only hoists the declaration and not initialization.In Strict mode it does not allow to use variable if it is not declared.

## JavaScript is a garbage collected programming language, explain how?

Low-level languages require the developer to manually determine at which point in the program the allocated memory is no longer needed and to release it.

Some high-level languages, such as JavaScript, utilize a form of automatic memory management known as garbage collection (GC). The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it. This automatic process is an approximation since the general problem of determining whether or not a specific piece of memory is still needed is undecidable

## Explain Shallow copy vs Deep copy in Javascript?

When we copy a value of one primitive data type to another ,a deep copy is produced.
For ex :var a=23,
var b =a;
By executing b = a , you make the copy.
Now, when we reassign a new value to b,only the value of b changes, but no change in a occurs.

But,in case of shallow copy ,like in cases of refernce variables such as objects,both variables will hold the value of same address so change in one will reflect in both the variables.
FOR ex:

```Javascript
const person={
name:"John",
age:20,
}
const student = person;
student.age = 25;
console.log(atudent.age);//25
console.log(person.age);//25
```

## What is Object.freeze

The Object.freeze() method freezes an object which prevents any changes or makes existing properties non-rewritable. A frozen object can no longer be changed:

- new properties cannot be added,
- existing properties cannot be removed, value cannot be changed, and
- the object's prototype cannot be re-assigned.

```Javascript
 const obj = {
  age: 42
};

Object.freeze(obj);

obj.age = 33;
// Throws an error in strict mode

console.log(obj.age);//42
```
