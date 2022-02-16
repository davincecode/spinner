let sentence = "\r|/-|-/|/-|-/|/-|-/|/-|-/|";
let timer = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
    process.stdout.cursorTo(0);
  }, timer);
  timer += 200;
}
