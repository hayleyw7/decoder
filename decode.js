// Here is JavaScript code for a function called decode(message_file) that can read an encoded message from a .txt file and return the decoded version as a string.

const fs = require("fs");

const decode = (content) => {
  const lines = content.split("\n");
  const message = {};
  let triangularNumbers = [];

  lines.forEach(line => {
    const [number, word] = line.split(" ");
    message[number] = word;
  });

  let count = 1, accumulator = 1;
  while (accumulator <= Math.max(...Object.keys(message).map(key => parseInt(key)))) {
    triangularNumbers.push(accumulator);
    count++;
    accumulator += count;
  }

  const result = triangularNumbers
    .map(number => message[number])
    .filter(word => word)
    .join(" ");

  return result;
}

try {
  const content = fs.readFileSync("message_file.txt", "utf8");
  const decodedMessage = decode(content);
  console.log(decodedMessage);
} catch (error) {
  console.error('Error:', error);
}
