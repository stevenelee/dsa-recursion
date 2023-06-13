/** product: calculate the product of an array of numbers. */

function product(nums, numsProduct = 1, i = 0) {
  if (!nums[i]) return numsProduct;

  return product(nums, numsProduct *= nums[i], ++i);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longestLength = 0) {
  if (!words[i]) return longestLength;

  if (words[i].length > longestLength) longestLength = words[i].length;

  return longest(words, ++i, longestLength);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, chars = "", i = 0) {
  if (!str[i]) return chars;

  return everyOther(str, chars += str[i], i += 2);
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val, i = 0) {
  if (!arr[i]) return false;

  if (arr[i] == val) return true;

  return find(arr, val, ++i);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, begI = 0, endI = str.length - 1) {
  if (begI >= endI) return true;
  if (str[begI] != str[endI]) return false;

  return isPalindrome(str, ++begI, --endI);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, reverse = "", endI = str.length - 1) {
  if (endI < 0) return reverse;

  return revString(str, reverse += str[endI], --endI);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (!arr[i]) return -1;

  if (arr[i] === val) return i;

  return findIndex(arr, val, ++i);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, strings = []) {

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      gatherStrings(obj[key], strings);
    } else {
      if (typeof obj[key] === "string") {
        strings.push(obj[key]);
      }
    }
  }
  return strings;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val, i = 0) {
  if (!arr[i]) return false;
  if (arr[i] === val) return true;

  return binarySearch(arr, val, ++i);
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val, i = 0) {
  if (!arr[i]) return -1;
  if (arr[i] === val) return i;

  return binarySearchIndex(arr, val, ++i);
}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
