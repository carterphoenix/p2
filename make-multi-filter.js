function MakeMultiFilter(originalArray) {
  // Check if originalArray is an array
  if (!Array.isArray(originalArray)) {
    throw new Error('Original array must be an array');
  }

  // Initialize currentArray to be a copy of originalArray
  let currentArray = [...originalArray];

  // Define the arrayFilterer function
  function arrayFilterer(filterCriteria, callback) {
    // If filterCriteria is not a function, return currentArray
    if (typeof filterCriteria !== 'function') {
      return currentArray;
    }

    // Filter currentArray based on filterCriteria
    currentArray = currentArray.filter(filterCriteria);

    // If callback is a function, call it with originalArray as 'this'
    if (typeof callback === 'function') {
      callback.call(originalArray, currentArray);
    }

    // Return arrayFilterer to allow chaining
    return arrayFilterer;
  }

  // Return the arrayFilterer function
  return arrayFilterer;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const filterFunction = MakeMultiFilter(originalArray);

const filterCriteria = (element) => element % 2 === 0;
const callbackFunction = function (filteredArray) {
  console.log('Filtered Array:', filteredArray);
  console.log('Original Array:', this); // 'this' refers to originalArray
};

filterFunction(filterCriteria, callbackFunction);
filterFunction((element) => element > 3)(callbackFunction);
