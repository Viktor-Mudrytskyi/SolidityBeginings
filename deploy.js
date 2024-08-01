async function main() {
  let variable = 5;
  console.log(variable);
  hi();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
