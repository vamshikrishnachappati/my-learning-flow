//  Program to add 2 numbers
{
  let a = parseFloat(prompt("Enter first number: "));
  let b = parseFloat(prompt("Enter second number: "));
  console.log(a + b);
}
// Program to find the total and average of 3 numbers
{
  let a = parseFloat(prompt("Enter first number: "));
  let b = parseFloat(prompt("Enter second number: "));
  let c = parseFloat(prompt("Enter third number: "));
  let total = a + b + c;
  let average = total / 3;
  console.log("Total:", total);
  console.log("Average:", average);
}
//  Program to find the square of the given number
{
  let n = parseFloat(prompt("Enter a number: "));
  console.log("Square:", n ** 2);
}
//Program to find the cube of the given number
{
  let n = parseFloat(prompt("Enter a number: "));
  console.log("Cube:", n ** 3);
}
// Program to find the sum of square and cube of given number
{
  let n = parseFloat(prompt("Enter a number: "));
  let result = n ** 2 + n ** 3;
  console.log("Sum of square and cube:", result);
}
// Program to display last digit of given number
{
  let num = parseInt(prompt("Enter a number: "));
  let last = num % 10;
  console.log("Last digit:", last);
}
// Program to remove last digit of given number
{
  let num = parseInt(prompt("Enter a number: "));
  let rem = Math.floor(num / 10);
  console.log(rem);
}
// Program to find the sum of first N numbers
{
  let n = parseInt(prompt("Enter N: "));
  let total = Math.floor((n * (n + 1)) / 2);
  console.log(total);
}
// Program to swap 2 numbers
{
  let a = parseInt(prompt("Enter first number (a): "));
  let b = parseInt(prompt("Enter second number (b): "));
  let temp = a;
  a = b;
  b = temp;
  console.log(a, b);
}
//  Program to swap 2 numbers without 3rd variable
{
  let a = parseInt(prompt("Enter first number (a): "));
  let b = parseInt(prompt("Enter second number (b): "));
  [a, b] = [b, a];
  console.log(a, b);
}
//  Program to calculate the total amount for the given quantity of fruits purchased
{
  let qua = parseInt(prompt("Enter quantity of fruits: "));
  let price = parseFloat(prompt("Enter price per fruit: "));
  let total = qua * price;
  console.log(total);
}
//  Program to Find the Total salary for the given basic salary
{
  let basic = parseFloat(prompt("Enter basic salary: "));
  let hra = 0.2 * basic; // 20% HRA
  let da = 0.1 * basic; // 10% DA
  let totalSalary = basic + hra + da;
  console.log("Total salary:", totalSalary);
}
//  Program to calculate Area of Circle
{
  let r = parseFloat(prompt("Enter radius of the circle: "));
  let area = Math.PI * r ** 2;
  console.log(parseFloat(area.toFixed(2)));
}
// Program to calculate Area of Triangle
{
  let base = parseFloat(prompt("Enter base of the triangle: "));
  let height = parseFloat(prompt("Enter height of the triangle: "));
  let area = 0.5 * base * height;
  console.log("Area of triangle:", area);
}
//  Program to calculate time taken using speed and distance
{
  let distance = parseFloat(prompt("Enter distance: "));
  let speed = parseFloat(prompt("Enter speed: "));
  let time = distance / speed;
  console.log("Time taken:", time);
}
//  Program to calculate speed using distance and time
{
  let distance = parseFloat(prompt("Enter distance: "));
  let time = parseFloat(prompt("Enter time: "));
  let speed = distance / time;
  console.log("Speed:", speed);
}
// Program to calculate distance using speed and time
{
  let speed = parseFloat(prompt("Enter speed: "));
  let time = parseFloat(prompt("Enter time: "));
  let distance = speed * time;
  console.log("Distance:", distance);
}
// Program to check the input number is Positive or Negative
{
  let n = parseInt(prompt("Enter an integer : "));
  if (n >= 0) {
    console.log("Positive number");
  } else {
    console.log("Negative number");
  }
}
// Program to check the input number is Even or Odd
{
  let n = parseInt(prompt("Enter number : "));
  if (n % 2 === 0) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }
}
// Program to Check Person can Vote or Not
{
  let age = parseInt(prompt("Enter age : "));
  if (age >= 18) {
    console.log("Eligible for Vote");
  } else {
    console.log("Not Eligible for Vote");
  }
}
// Program to find the biggest of two numbers
{
  let a = parseFloat(prompt("Enter first number (a): "));
  let b = parseFloat(prompt("Enter second number (b): "));
  if (a > b) {
    console.log("a is big");
  } else {
    console.log("b is big");
  }
}
//  Program to check the character is Vowel or Not
{
  let ch = prompt("Enter character : ");
  if ("aeiouAEIOU".includes(ch)) {
    console.log("Vowel");
  } else {
    console.log("Not vowel");
  }
}
//  Program to check the character is Alphabet or Not
{
  let ch = prompt("Enter character : ");
  if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
    console.log("Alphabet");
  } else {
    console.log("Not an Alphabet");
  }
}
// Program to Check Login details are Correct or Not
{
  let user = prompt("Enter user name : ");
  let pwd = prompt("Enter password : ");
  if (user === "logic" && pwd === "1234") {
    console.log("Login Success");
  } else {
    console.log("Error : Invalid login");
  }
}
//  Program to Check the Number between 30 and 50 or not
{
  let num = parseInt(prompt("Enter number between 30 and 50 : "));
  if (num >= 30 && num <= 50) {
    console.log("Valid number entered");
  } else {
    console.log("Invalid number entered");
  }
}
//  Program to find sum of even numbers
{
  let n = parseInt(prompt("Enter N: "));
  let total = 0;
  for (let i = 2; i <= n; i += 2) {
    total += i;
  }
  console.log("Sum of even numbers:", total);
}
//  Program to count factors of given number
{
  let n = parseInt(prompt("Enter a number: "));
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  console.log("Number of factors:", count);
}
//  Program to print factors of given number
{
  let n = parseInt(prompt("Enter a number: "));
  let factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  console.log("Factors: " + factors.join(" "));
}
// Program to find the sum of factors of given number
{
  let n = parseInt(prompt("Enter a number: "));
  let total = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      total += i;
    }
  }
  console.log("Sum of factors:", total);
}
// Program to check the input number is Prime or Not
{
  let n = parseInt(prompt("Enter a number: "));
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    console.log("${n} is a Prime number");
  } else {
    console.log(n + " is NOT a Prime number.");
  }
}
// Program to check the input number is Perfect or Not
{
  let n = parseInt(prompt("Enter a number: "));
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  if (sum === n && n > 0) {
    console.log(n + " is a Perfect number.");
  } else {
    console.log(n + " is NOT a Perfect number.");
  }
}
// Display length of following array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  console.log("Length of array:", arr.length);
}

//  Display First element of array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  console.log("First element:", arr[0]);
}

//  Display last element of array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  console.log("Last element:", arr[arr.length - 1]);
}

//  Display Sum of First and Last elements of Array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let sum = arr[0] + arr[arr.length - 1];
  console.log("Sum of first and last elements:", sum);
}

//  Check the first element of array is even or not
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  if (arr[0] % 2 === 0) {
    console.log("First element is Even");
  } else {
    console.log("First element is Odd");
  }
}

// Print Multiplication table for last element in the array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let last = arr[arr.length - 1];
  console.log(`Multiplication table for last element (${last}):`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${last} x ${i} = ${last * i}`);
  }
}

// Display the middle element of following array of odd length
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let midIndex = Math.floor(arr.length / 2);
  console.log("Middle element:", arr[midIndex]);
}

//  Display sum of 2 middle elements in the given even array of elements
{
  let arr = [3, 7, 8, 2, 9, 5, 6, 4];
  let mid2 = arr.length / 2;
  let mid1 = mid2 - 1;
  let sum = arr[mid1] + arr[mid2];
  console.log("Middle elements:", arr[mid1], arr[mid2]);
  console.log("Sum of 2 middle elements:", sum);
}

//  Display all elements in the array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  console.log("All elements:", arr.join(" "));
}

//  Display array elements in reverse order
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let rev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  console.log("Elements in reverse order:", rev.join(" "));
}

// Find the sum of array elements
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("Sum of array elements:", sum);
}

//  Display only even numbers in the given array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let evens = arr.filter((num) => num % 2 === 0);
  console.log("Even numbers:", evens.join(" "));
}

//  Count odd numbers in the given array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      count++;
    }
  }
  console.log("Count of odd numbers:", count);
}

//  Display Sum of Even elements in the given array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let evenSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
    }
  }
  console.log("Sum of even elements:", evenSum);
}

//  Display elements using for-each loop
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  console.log("Elements using forEach:");
  arr.forEach((num) => console.log(num));
}

//Display sum of elements using for-each loop
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  console.log("Sum using forEach:", sum);
}

//  Display even elements in array using for-each loop
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  console.log("Even elements using forEach:");
  arr.forEach((num) => {
    if (num % 2 === 0) {
      console.log(num);
    }
  });
}

// Find the sum of odd elements in the given array using for-each loop
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let oddSum = 0;
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      oddSum += num;
    }
  });
  console.log("Sum of odd elements using forEach:", oddSum);
}

// Swap first and second elements in the array then print elements using for-each loop
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
  console.log("After swapping first and second elements:");
  arr.forEach((num) => console.log(num));
}

//  Swap first and last elements in the array then print elements using for-each loop
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  console.log("After swapping first and last elements:");
  arr.forEach((num) => console.log(num));
}

//Swap elements in specified locations of array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let x = 2,
    y = 3;
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
  console.log(`After swapping elements at index ${x} and ${y}:`, arr);
}

//  Swap array element with its adjacent element for the specified location
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let loc = 3;
  if (loc + 1 < arr.length) {
    let temp = arr[loc];
    arr[loc] = arr[loc + 1];
    arr[loc + 1] = temp;
  }
  console.log(`After swapping index ${loc} with adjacent (${loc + 1}):`, arr);
}

//  Display Largest element in the array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log("Largest element:", max);
}

// Display smallest element in the array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log("Smallest element:", min);
}

// Display First even number in the array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let firstEven = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      firstEven = arr[i];
      break;
    }
  }
  console.log("First even number:", firstEven);
}

//  Display last odd element in the array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let lastOdd = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 !== 0) {
      lastOdd = arr[i];
      break;
    }
  }
  console.log("Last odd element:", lastOdd);
}

//  Swap Smallest and Largest elements in the array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let minIdx = 0,
    maxIdx = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIdx]) minIdx = i;
    if (arr[i] > arr[maxIdx]) maxIdx = i;
  }
  let temp = arr[minIdx];
  arr[minIdx] = arr[maxIdx];
  arr[maxIdx] = temp;
  console.log("After swapping smallest and largest:", arr);
}

// Swap First even and Last Odd elements in the array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let firstEvenIdx = -1;
  let lastOddIdx = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      firstEvenIdx = i;
      break;
    }
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 !== 0) {
      lastOddIdx = i;
      break;
    }
  }
  if (firstEvenIdx !== -1 && lastOddIdx !== -1) {
    let temp = arr[firstEvenIdx];
    arr[firstEvenIdx] = arr[lastOddIdx];
    arr[lastOddIdx] = temp;
  }
  console.log("After swapping first even and last odd:", arr);
}

// Display Second biggest element in the array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let first = -Infinity,
    second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }
  console.log("Second biggest element:", second);
}

// Display Second smallest element in the array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let first = Infinity,
    second = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      second = first;
      first = arr[i];
    } else if (arr[i] < second && arr[i] !== first) {
      second = arr[i];
    }
  }
  console.log("Second smallest element:", second);
}

//  Copy elements from one array to another array
{
  let src = [3, 7, 8, 2, 5, 6, 4];
  let dest = [];
  for (let i = 0; i < src.length; i++) {
    dest[i] = src[i];
  }
  console.log("Copied array:", dest);
}

//  Create new array with only even numbers of given array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  console.log("Array with only even numbers:", evens);
}

// Create new array with only odd numbers of given array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let odds = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odds.push(arr[i]);
    }
  }
  console.log("Array with only odd numbers:", odds);
}

// Create 2 new arrays with even and odd numbers from the given mixed elements array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let evens = [];
  let odds = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    } else {
      odds.push(arr[i]);
    }
  }
  console.log("Even array:", evens);
  console.log("Odd array:", odds);
}

//  Check the element is duplicated or not in the given array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let hasDuplicate = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        hasDuplicate = true;
        break;
      }
    }
    if (hasDuplicate) break;
  }
  if (hasDuplicate) {
    console.log("Array contains duplicates");
  } else {
    console.log("No duplicates found in array");
  }
}

//  Linear Search Algorithm
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let ele = 5;
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    console.log(`Element ${ele} found at index ${index}`);
  } else {
    console.log(`Element ${ele} not found`);
  }
}

// Binary Search Algorithm
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let ele = 5;
  arr.sort((a, b) => a - b);
  console.log("Sorted array for Binary Search:", arr);

  let low = 0,
    high = arr.length - 1;
  let foundIndex = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === ele) {
      foundIndex = mid;
      break;
    } else if (arr[mid] < ele) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  if (foundIndex !== -1) {
    console.log(`Element ${ele} found at index ${foundIndex}`);
  } else {
    console.log(`Element ${ele} not found`);
  }
}

//  Sort all elements in the array (Bubble Sort)
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log("Sorted array:", arr);
}

//  Display array elements which are greater than average of all elements in the array
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  console.log("Average:", avg);
  let greaterThanAvg = arr.filter((x) => x > avg);
  console.log("Elements greater than average:", greaterThanAvg);
}

//Merge 2 arrays
{
  let a1 = [3, 7, 8, 2];
  let a2 = [5, 6, 4];
  let merged = [...a1, ...a2];
  console.log("Merged array:", merged);
}

//  Read the Size and Create Array
{
  let size = parseInt(prompt("Enter size of array: "));
  let arr = new Array(size);
  console.log("Created array of size " + size + ":", arr);
}

// Create the array by reading size and fill the array with elements by reading again from user
{
  let size = parseInt(prompt("Enter size of array: "));
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = parseInt(prompt(`Enter element ${i + 1}: `));
  }
  console.log("User filled array:", arr);
}

//  Program to display the pair of elements whose sum equals to 10
{
  let arr = [3, 7, 8, 2, 5, 6, 4];
  let target = 10;
  console.log("Pairs whose sum is 10:");
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log(`(${arr[i]}, ${arr[j]})`);
      }
    }
  }
}

// Program to replace all duplicates with 0
{
  let arr = [6, 2, 3, 1, 6, 7, 6, 3, 6, 2, 3, 2, 1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) continue;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr[j] = 0;
      }
    }
  }
  console.log("Array after replacing duplicates with 0:", arr);
}

//  Program to display pair of elements whose sum is 10 (contains duplicates in array)
{
  let arr = [6, 3, 9, 1, 2, 8, 4, 5, 7, 6, 2, 9, 1, 4];
  let target = 10;
  let seenPairs = new Set();
  console.log("Pairs with sum 10:");
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        let pairKey = Math.min(arr[i], arr[j]) + "," + Math.max(arr[i], arr[j]);
        if (!seenPairs.has(pairKey)) {
          seenPairs.add(pairKey);
          console.log(`(${arr[i]}, ${arr[j]})`);
        }
      }
    }
  }
}

// Program to find the common elements from 2 arrays
{
  let a1 = [1, 2, 5, 5, 8, 9, 5, 7, 10];
  let a2 = [3, 6, 15, 6, 5, 4, 7, 2, 1];
  let common = [];
  for (let i = 0; i < a1.length; i++) {
    if (a2.includes(a1[i]) && !common.includes(a1[i])) {
      common.push(a1[i]);
    }
  }
  console.log("Common elements:", common);
}

// Program to find the duplicates in the array
{
  let arr = [1, 2, 5, 5, 8, 9, 2, 5, 7, 1, 10, 1, 2];
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }
  console.log("Duplicate elements:", duplicates);
}

//  Program to arrange even numbers to left side and odd numbers to right side of Array
{
  let arr = [7, 2, 9, 8, 4, 1, 2, 6, 5];
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    while (arr[left] % 2 === 0 && left < right) left++;
    while (arr[right] % 2 !== 0 && left < right) right--;
    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  console.log("Array with even left and odd right:", arr);
}

// Program to check 2 arrays are equal or not
{
  let a1 = [3, 4, 5, 6, 7];
  let a2 = [3, 4, 5, 6, 7];
  let isEqual = a1.length === a2.length;
  if (isEqual) {
    for (let i = 0; i < a1.length; i++) {
      if (a1[i] !== a2[i]) {
        isEqual = false;
        break;
      }
    }
  }
  if (isEqual) {
    console.log("Arrays are equal");
  } else {
    console.log("Arrays are NOT equal");
  }
}

//  Program to find the missing number in the given array
{
  let arr = [2, 3, 4, 5, 7, 8, 9];
  let min = arr[0];
  let max = arr[arr.length - 1];
  let missing = [];
  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      missing.push(i);
    }
  }
  console.log("Missing number(s):", missing);
}

//  Program to find the largest difference of Array elements
{
  let arr = [5, 7, 3, 8, 6, 9, 4];
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let diff = max - min;
  console.log("Largest difference:", diff);
}

//  Program to find the index difference between smallest and largest elements
{
  let arr = [5, 7, 3, 8, 6, 9, 4];
  let minIndex = 0,
    maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) minIndex = i;
    if (arr[i] > arr[maxIndex]) maxIndex = i;
  }
  let indexDiff = Math.abs(maxIndex - minIndex);
  console.log(`Smallest at index ${minIndex}, Largest at index ${maxIndex}`);
  console.log("Index difference:", indexDiff);
}

//  Program to check array contains only positive numbers or not
{
  let arr = [5, 7, 3, 8, 6, -4, 4];
  let onlyPositive = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      onlyPositive = false;
      break;
    }
  }
  if (onlyPositive) {
    console.log("Array contains only positive numbers");
  } else {
    console.log("Array does NOT contain only positive numbers");
  }
}

//  Program to print leader elements in the array
{
  let arr = [10, 9, 14, 23, 15, 0, 9];
  let leaders = [];
  let maxFromRight = arr[arr.length - 1];
  leaders.push(maxFromRight);

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > maxFromRight) {
      maxFromRight = arr[i];
      leaders.push(maxFromRight);
    }
  }
  leaders.reverse();
  console.log("Leader elements:", leaders);
}
