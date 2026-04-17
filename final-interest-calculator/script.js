/**
 * Interest Rate Calculator — business logic + UI
 * Values are coerced with Number() before math to avoid TypeErrors from string inputs.
 */

function calculate(principal, annualRatePercent, years) {
  const P = Number(principal);
  const annual = Number(annualRatePercent);
  const y = Number(years);

  if (Number.isNaN(P) || Number.isNaN(annual) || Number.isNaN(y)) {
    return NaN;
  }
  if (P < 0 || annual < 0 || y < 0) {
    return NaN;
  }

  const n = Math.round(y * 12);
  if (n === 0) {
    return 0;
  }

  const r = annual / 100 / 12;
  if (r === 0) {
    return Math.round((P / n) * 100) / 100;
  }

  const payment =
    (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
  return Math.round(payment * 100) / 100;
}

function initCalculator() {
  const form = document.getElementById("calculator-form");
  const principalEl = document.getElementById("principal");
  const rateEl = document.getElementById("rate");
  const yearsEl = document.getElementById("years");
  const resultEl = document.getElementById("result");

  if (!form || !principalEl || !rateEl || !yearsEl || !resultEl) {
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const monthly = calculate(
      principalEl.value,
      rateEl.value,
      yearsEl.value
    );
    if (Number.isNaN(monthly)) {
      resultEl.textContent = "Please enter valid non-negative numbers.";
      return;
    }
    resultEl.textContent = "Estimated monthly payment: $" + monthly.toFixed(2);
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { calculate };
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", initCalculator);
}
