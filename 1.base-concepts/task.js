"use strict"
function solveEquation(a, b, c) {
  const discriminant = b ** - 4 * a * c;
  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root]; //корень один
  } else {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2]; //два корня
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}