let i = 0;
const interval = 200;
const spin = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
const spinner = () => {
  if (i < spin.length) {
    process.stdout.write(spin[i]);
    i++;
    setTimeout(spinner, interval);
  } else {
    process.stdout.write('\n');
  }
};

spinner();