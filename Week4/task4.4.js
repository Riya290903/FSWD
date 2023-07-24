const path = require("path");
const fs = require("fs");

// Function to extract and display directory name and base name from a file path
function extractPathInfo(filePath) {
  const directoryName = path.dirname(filePath);
  const baseName = path.basename(filePath);
  console.log("Directory Name:", directoryName);
  console.log("Base Name:", baseName);
}

// Function to check if a file exists and display success/error message
function checkFileExistence(filePath) {
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error("File does not exist.");
    } else {
      console.log("File exists.");
    }
  });
}

// Main program
const filePath = "example.txt";

extractPathInfo(filePath);
checkFileExistence(filePath);
