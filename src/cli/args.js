const parseArgs = () => {
  const args = process.argv.slice(2);

  const result = args.reduce((accumulator, curValue, curIndex) => {
    if (curValue.startsWith("--")) {
      accumulator.push(`${curValue.slice(2)} is ${args[curIndex + 1]}`)
    }

    return accumulator;
  }, []);

  console.log(result.join(', '));
};

parseArgs();
