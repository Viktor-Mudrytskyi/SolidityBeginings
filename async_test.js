async function setUp() {
  var status = await cookPopcorn();
  await pourDrink();
  startMovie();
}

function cookPopcorn() {
  return Promise();
}

function pourDrink() {}

function startMovie() {}
