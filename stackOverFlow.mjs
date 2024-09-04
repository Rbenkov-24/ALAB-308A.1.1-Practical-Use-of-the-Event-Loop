/**
 * Recursive Call:
    * it is a function calls itself to solve a problem
    * its purpose is to break a big problem into smaller easier pieces
 * How It Works:
    * calls itself with a simpler version of the problem
 * stops when it reaches a simple case (base case)
 * example: 
    * finding factorial: 5! = 5 * 4!, 4! = 4 * 3!, and so on
 * Advantages: 
    * simplifies code for certain problems
 * Limitations: 
    * can cause a stack overflow if there’s no base case or if recursion is too deep
 */

let counter = 0; // make a variable to count how many times the function is called
// this function keeps calling itself without stopping which uses up all the computer's memory causing a stack overflow error when the computer can't handle more
function recursiveCall() { 
  try { // try is used to catch any errors during recursion
    counter++; // add 1 to the counter
    recursiveCall(); // call the function again (this is recursion)
  } catch (e) { // catch is used to handle any errors such as stack overflow
    console.log("Stack overflow at call number:", counter); // print (thecall count) how many times it was called before stack overflow
    console.error("Error:", e); // print the error detail
  }
}

recursiveCall(); // start the function (recursive process)