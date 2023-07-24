const path = require("path");
const fs = require("fs");

// Function to check if two file paths refer to the same file
function arePathsSame(filePath1, filePath2) {
  const absolutePath1 = path.resolve(filePath1);
  const absolutePath2 = path.resolve(filePath2);

  return absolutePath1 === absolutePath2;
}

// Function to extract and display the file extension from a file path
function getFileExtension(filePath) {
  return path.extname(filePath);
}

// Main program
const filePath1 = "pathOperations.js";
const filePath2 = "pathOperations.js";
const sameFile = arePathsSame(filePath1, filePath2);
console.log(
  `Are the paths referring to the same file? ${sameFile ? "Yes" : "No"}`
);

const fileExtension = getFileExtension(filePath1);
console.log(`File extension: ${fileExtension}`);
