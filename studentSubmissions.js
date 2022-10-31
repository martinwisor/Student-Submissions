let submissions = [
  { name: "Jane", score: 95, date: 2020 - 01 - 24, passed: true },
  { name: "Joe", score: 77, date: 2018 - 05 - 14, passed: true },
  { name: "Jack", score: 59, date: 2019 - 07 - 05, passed: false },
  { name: "Jill", score: 88, date: 2020 - 04 - 22, passed: true },
];

function addSubmission(array, newName, newScore, newDate) {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
  };

  newSubmission.score >= 60
    ? (newSubmission.passed = true)
    : (newSubmission.passed = false);

  array.push(newSubmission);
  console.log(array);
}

addSubmission(submissions, "Sally", 48, 2020 - 01 - 01);

// Declare a function named deleteSubmissionByIndex
// Parameter(s): array, index
// Functionality: remove an object from the array at the specified index using the splice method.

function deleteSubmissionByIndex(array, index) {
  submissions.splice(array, index);
}
deleteSubmissionByIndex(submissions, 1);

// Declare a function named deleteSubmissionByName
// Parameter(s): array, name
// Functionality: remove the object from the array that has the provided name.  Incorporate the findIndex method and the splice method.

function deleteSubmissionByName(array, name) {}

// Declare a function named editSubmission
// Parameter(s): array, index, score
// Functionality: update an object’s score in the array at the specified index. Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise

function editSubmission(array, index, score) {}

// Declare a function named findSubmissionByName
// Parameter(s): array, name
// Functionality: return the object in the array that has the provided name. Use the find method.

function findSubmissionByName(array, name){}

// Declare a function named findLowestScore
// Parameter(s): array
// Functionality: return the object in the array that has the lowest score. Use the forEach method to loop through the whole array.

function findLowestScore(array){}

// Declare a function named findAverageScore
// Parameter(s): array
// Functionality: return the average quiz score.  Use a for...of loop.

function findAverageScore(array){}

// Declare a function named filterPassing
// Parameter(s): array
// Functionality: return a new array using the filter method. The filter method should find objects in the array that have passing scores. 

function filterPassing(array){}

// Declare a function named filter90AndAbove
// Parameter(s): array
// Functionality: return a new array using the filter method. The filter method should find objects in the array that have scores greater than or equal to 90.

function filter90AndAbove(array){}
