const urlModule = require("url");
const querystring = require("querystring");

// Function to extract and display key-value pairs from the query string
function extractQueryParams(urlString) {
  const parsedURL = urlModule.parse(urlString);
  const queryParams = querystring.parse(parsedURL.query);
  console.log("Key-Value Pairs in Query String:");
  console.log(queryParams);
}
// Main program
const urlInput =
  "https://www.example.com/page?name=Riya&age=19&location=India";
extractQueryParams(urlInput);

