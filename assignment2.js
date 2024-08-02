// Q.1: Multiplication Table Generator
for (let i = 1; i <= 10; i++) {   //loop for the numbers 1-10
    let row = '';                 //empty string to initialize row
    for (let j = 1; j <= 10; j++) {  //loop for the numbers 1-10
      row += j * i + '\t';           //multiply outher loop with ineer loop
    }
    console.log(row);             //print the rows
}



// Q.2: Sum of Numbers in an Array
let x = 0;                        //here initialize x as 0
let y = [77, 140, 166, 172, 100]; //here y has store the array that has 5 numbers
for (let i=0; i<y.length; i++) {  //loop for each elements in y array
    x+= y[i];                     //add the current element in y to x
}
console.log("the sum is:" +x);    //print the sum



// Q.3: Palindrome Checker
function palindromeCheck(str) {
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // Remove non-alphanumeric characters and convert to lowercase
    let reversedStr = cleanedStr.split('').reverse().join('');  // Reverse the cleaned string
    return cleanedStr === reversedStr; // Compare the original and reversed strings
} 
console.log(palindromeCheck("LEVEL")); //// Checking if strings are palindromes



// Q.4: Fibonacci Sequence Generator
function generateFibonacciSeries(N) {  //this function will print fibonacci series up to N terms
    let fn1 = 0, fn2 = 1, nextFibonacci; //initialize the first 2 numbers
    console.log('Fibonacci Series up to', N, 'terms:');  //print the header for the fibonacci series
    for (let i = 1; i <= N; i++) {   //loop to generate fibonacci seies upto N terms
      console.log(fn1);              //print the current fibonacci number
      nextFibonacci = fn1 + fn2;     //calculate the next number
      fn1 = fn2;                     //update the previous two numbers
      fn2 = nextFibonacci;
    }
}
  
  // Example usage
if (process.argv.length < 3) {     //check if the required number of command-line arguments are provided
    console.log('Please provide the number of Fibonacci terms as a command-line argument.');   //print this message if the number is not provided
    return;
}
const numTerms = parseInt(process.argv[2]);  //parse the number of terms from the command-line arguents
generateFibonacciSeries(numTerms);           //call the function to generate the fibonacci series with the provided number of terms



// Q.5: Block Scope with Let and Const
function Scopes() {
    // Here we are using function scope
    if (true) {
        var Var1 = "I am a var variable"; // Function-scoped
        let Variable2 = "I am a let variable"; // Block-scoped
        const Var3 = "I am a const variable"; // Block-scoped

        // Logging inside the block where Variable2 and Var3 are accessible
        console.log(Variable2); // This will work
        console.log(Var3); // This will work
    }
    console.log(Var1); // This will work because Var1 is function-scoped
    // The following two lines will throw an error because Variable2 and Var3 are block-scoped
    // console.log(Variable2); // This will cause a ReferenceError
    // console.log(Var3); // This will cause a ReferenceError
}
Scopes(); // Calling the function