// Write a recursive function to print out all of the characters in a string.
function printString(myString) {
  console.log(myString[0]);
  // if string length > 1, set substring and recursively call printString
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length)
    printString(mySubString)
  } else {
    return true
  }
}

// Write out a recursive function to reverse a string.
function reverseString(myString) {
  // if string length >= 2, recursively call reverseString with substring
  if (myString.length >= 2) {
    return reverseString(myString.substring(1)) + myString[0];
  } else {
    return myString
  }
}

// Write out a recursive function to see if a word is a palindrome.
function isPalindrome(myString) {
  let len = myString.length
  // terminal case: palindrome if 0 or 1 characters
  if (len === 0 || len === 1) {
    return true
  // palindrome if the first index of the current string is equal to the last
  } else if (myString[0] === myString[len - 1]) {
      return isPalindrome(myString.substring(1, len - 1))
  // not a palindrome
  } else {
    return false
  }
}

// Given an array and an index, write a recursive function to add up the elements of an array.
function addUpTo(arr, i) {
  if (i) {
    return arr[i] + addUpTo(arr, --i)
  } else {
    return arr[i]
  }
}

// Write a recursive function to find the largest integer in an array.
function maxOf(arr) {
  // if array length is 1, return index [0]
  if (arr.length === 1) {
    return arr[0]
  // remove last element, call maxOf recursively with the subarray
  } else {
    return Math.max(arr.pop(), maxOf(arr))
  }
}

// Write out a function to see if an array includes a given element.
function includesNumber(arr, num) {
  // return false for empty array
  if (arr.length === 0) {
    return false
  // return true if index [0] is equal to the number
  } else if (arr[0] === num) {
    return true
  // recursive call to includesNumber subarray
  } else {
    return (includesNumber(arr.slice(1), num))
  }
}