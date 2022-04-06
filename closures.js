// -----------Problems for Class----------------

function OuterFunction() {
  var outerVariable = 100;

  function InnerFunction() {
    alert(outerVariable);
  }

  return InnerFunction;
}
var innerFunc = OuterFunction();

innerFunc();

// Output : 100 will be the output in alert box

function Counter() {
  var counter = 0;

  function IncreaseCounter() {
    return (counter += 1);
  }

  return IncreaseCounter;
}
var counter = Counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

// Output: 1 2 3 4 in alertbox

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // 1
  }
  console.log(count); // 0
})();

// Output: 1 0

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);
    }, 1000);
  }

// Output : 3 will be printed with settimeout function 1000 milliseconds

// ---------------Problems for Handson---------------

// Write a code to explain Closure

function outer() {
  var firstvar = 10;

  function inner() {
    alert(firstvar);
  }
  return inner;
}
var secondvar = outer();
inner();

//  Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function OuterFunction() {
  var length = 100;

  function InnerFunction() {
    var width = 200;
    var area;
    console.log((area = length * width));
  }

  return InnerFunction;
}
var innerFunc = OuterFunction();

innerFunc();

// Take a varziable in outer function and create an inner function to increase the counter every time it is called

function Counter() {
  var counter = 0;

  function IncreaseCounter() {
    return (counter += 1);
  }

  return IncreaseCounter;
}

var counter = Counter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// Print the Output
var a = 12;
(function () {
  console.log(a);
})();

// Output: 12

// Print the Output:

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

// Output: alert with 12

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

// Output : outerArg = 123
//          innerArg = 456
//          outerVar = a
//          innerVar = b
//          globalVar = xyz