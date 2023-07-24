const readline = require("readline");
const urlModule = require("url");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to parse and display URL components
function parseURL(urlString) {
  const parsedURL = urlModule.parse(urlString, true);
  console.log("Protocol:", parsedURL.protocol);
  console.log("Host:", parsedURL.host);
  console.log("Path:", parsedURL.pathname);
  console.log("Query Parameters:", parsedURL.query);
}

// Function to resolve and display absolute URL
function resolveRelativeURL(baseURL, relativePath) {
  const resolvedURL = urlModule.resolve(baseURL, relativePath);
  console.log("Absolute URL:", resolvedURL);
}

// Main program
rl.question("Enter a URL: ", (userInput) => {
  parseURL(userInput);
  rl.question("Enter a base URL: ", (baseURL) => {
    rl.question("Enter a relative path: ", (relativePath) => {
      resolveRelativeURL(baseURL, relativePath);
      rl.close();
    });
  });
});
