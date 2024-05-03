let expensesExamples = [
  {
    yearlyExpenses: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpenses: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpenses: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

let expectedResults = [40590, 148200, 25709];

function countYearExpenses(expenses) {
  return expenses
    .filter((amount) => amount > 1000)
    .reduce((sum, amount) => sum + amount, 0);
}

function assert(actualRes, expectedRes) {
  if (actualRes !== expectedRes) {
    console.log(
      `Test failed \u{2614}! Actual expenses' sum = ${actualRes} is not equal to expected value = ${expectedRes}`
    );
    return false;
  } else {
    console.log(
      `Test passed \u{1F31E}! Actual expenses' sum ${actualRes} = ${expectedRes}`
    );
    return true;
  }
}

function findMonthsWithLowExpenses(expenses) {
  let minExpenses = expenses
    .map((spent, month) => ({ month, spent }))
    .filter((item) => item.spent <= 1000);

  minExpenses.forEach((element) =>
    console.log(
      `In ${new Date(2000, element.month, 1).toLocaleString("en-US", {
        month: "long",
      })} the expenses were ${element.spent}`
    )
  );
}

expensesExamples.forEach((element, i) => {
  console.log("HW 2.4.1");
  assert(countYearExpenses(element.yearlyExpenses), expectedResults[i]);
  console.log("HW 2.4.2");
  findMonthsWithLowExpenses(element.yearlyExpenses);
});
