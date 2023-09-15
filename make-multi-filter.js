function MakeMultiFilter(originalArray) {
  // Create a copy of the original array
  let currentArray = [...originalArray];

  // Define the arrayFilterer function
  function arrayFilterer(filterCriteria, callback) {
    // Check if filterCriteria is a function
    if (typeof filterCriteria === 'function') {
      // Apply the filterCriteria function to update currentArray
      currentArray = currentArray.filter(filterCriteria);
    }

    // Check if callback is a function and call it with originalArray
    if (typeof callback === 'function') {
      callback(originalArray);
    }

    // Return arrayFilterer function for chaining or currentArray if no filterCriteria
    return typeof filterCriteria === 'function' ? arrayFilterer : currentArray;
  }

  // Return the arrayFilterer function
  return arrayFilterer;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];

const filter1 = MakeMultiFilter(originalArray);
const filter2 = MakeMultiFilter(originalArray);

filter1(
  (element) => element % 2 === 0,
  (result) => {
    console.log('Filtered Array 1:', result);
  }
);

filter2(
  (element) => element > 3,
  (result) => {
    console.log('Filtered Array 2:', result);
  }
);
