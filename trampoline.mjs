// recursive function to calculate factorial
const facto = (n, a = 1) => {
    if (n === 0) return a; // if n is 0 return the current value of a. this is the Base Case and the stopping point for recursion
    return () => facto(n - 1, n * a); // return a function to avoid stack overflow
  }
  
  // trampoline function to handle recursive calls
  const trampoline = (f, ...args) => {
    let result = f(...args); // call the function with arguments
    while (typeof result === "function") { // while result is a function
      result = result(); // call the function again
    }
    return result; // return the final result
  }
  
  // call the factorial function with trampoline to avoid stack overflow
  console.log(trampoline(facto(10000))); // print the result of factorial(10000)
  