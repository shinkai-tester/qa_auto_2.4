let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

let expectedResults = [40590, 148200, 25709];

function countYearExpences(expences) {
  let result = expences
    .filter((amount) => amount > 1000)
    .reduce((sum, amount) => (sum += amount), 0);
  return result;
}

function assertExpences(expences, expectedRes) {
  let actualRes = countYearExpences(expences);
  if (actualRes !== expectedRes) {
    console.log(
      `Test failed \u{2614}! Actual expences' sum = ${actualRes} is not equal to expected value = ${expectedRes}`
    );
  } else {
    console.log(
      `Test passed \u{1F31E}! Actual expences' sum ${actualRes} = ${expectedRes}`
    );
  }
}

expencesExamples.forEach((element, i) =>
  assertExpences(element.yearlyExpences, expectedResults[i])
);
