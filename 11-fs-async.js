const { readFile, writeFile } = require("fs");
const newFile = readFile("./content/first.txt", (err, resp) => {
  // basic code to read file it takes 2 argument 1 is file path and 2nd is callback
  if (err) {
    console.log("Error ::", err);
    return;
  } else {
    console.log("resp", resp); // this print result in base64 buffer
  }
});
console.log('start the task')
readFile("./content/first.txt", "utf8", (err, resp) => {
  // basic code to read file it takes 2 argument 1 is file path and 2nd is callback
  if (err) {
    console.log("Error ::", err);
    return;
  } else {
    console.log("resp", resp); // this will print file content
  }
  const first = resp;
  readFile("./content/second.txt", "utf8", (err, resp) => {
    if (err) {
      console.log("Error ::", err);
      return;
    } else {
      console.log("resp", resp); // this will print file content
    }
  });
  const second = resp;
  writeFile(
    "./content/result-async.txt",
    `Here sync file Content ${first} ${second}`,
    { flag: "a" },
    (err, resp) => {
      if (err) {
        console.log("Error ::", err);
        return;
      } else {
        console.log("resp", resp); // this will print file content
      }
      console.log('task is ended')
    }
  );
});
