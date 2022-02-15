let sentence = "\r|/-|-/|/-|-/|/-|-/|/-|-/|";
let timer = 0;
let result = [];
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
    process.stdout.cursorTo(0);
    // process.stdout.clearLine(); to clear the line
  }, timer);
  timer += 200;
}
return result;
