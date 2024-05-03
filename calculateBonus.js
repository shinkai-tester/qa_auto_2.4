const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  // pause to check the value of sum before evaluating the condition
  debugger;
  sum > 50 ? (bonus = 50) : (bonus = sum);
  // pause to verify the value of bonus before returning it
  debugger;
  return bonus;
};

calculateBonus(30, 30);
