//make a timer that will beep after time passes, user can specify unlimited alarmed using command line arguments.
const args = process.argv.slice(2);

for (let arg of args) {
  if (arg > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (arg*1000));
  }
}

