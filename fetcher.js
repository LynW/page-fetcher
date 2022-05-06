const request = require('request');
const fs = require("fs");

let url = process.argv[2];
let path = process.argv[3];

request(url, (error, response, body) => {

  if (error){
    console.error('error:', error); // Print the error if one occurred
  }
  
  fs.writeFileSync(`${path}.txt`, body);
  let fileSize = fs.statSync(`${path}.txt`).size;

  console.log(`Downloaded and saved ${fileSize} bytes to ./${path}.txt`);

});