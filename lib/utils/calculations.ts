// Financial calculation utilities for Meridian Bay Capital

/**
 * Calculate future value with compound interest and regular contributions
 */
export function calculateFutureValue(
  principal: number,
  monthlyContribution: number,
  years: number,
  annualRate: number
): {
  futureValue: number;
  totalContributions: number;
  investmentGains: number;
  yearlyData: YearlyData[];
} {
  const monthlyRate = annualRate / 100 / 12;
  const yearlyData: YearlyData[] = [];

  let currentValue = principal;
  let totalContributions = principal;

  for (let year = 1; year <= years; year++) {
    for (let month = 1; month <= 12; month++) {
      currentValue = currentValue * (1 + monthlyRate) + monthlyContribution;
      totalContributions += monthlyContribution;
    }

    yearlyData.push({
      year,
      value: Math.round(currentValue),
      contributions: Math.round(totalContributions),
      gains: Math.round(currentValue - totalContributions),
    });
  }

  return {
    futureValue: Math.round(currentValue),
    totalContributions: Math.round(totalContributions),
    investmentGains: Math.round(currentValue - totalContributions),
    yearlyData,
  };
}

export interface YearlyData {
  year: number;
  value: number;
  contributions: number;
  gains: number;
}

/**
 * Calculate the impact of fees on investment returns
 */
export function calculateFeeImpact(
  principal: number,
  years: number,
  grossReturn: number,
  feePercent: number
): {
  withoutFees: number;
  withFees: number;
  feeImpact: number;
} {
  const withoutFees = principal * Math.pow(1 + grossReturn / 100, years);
  const netReturn = grossReturn - feePercent;
  const withFees = principal * Math.pow(1 + netReturn / 100, years);
  const feeImpact = withoutFees - withFees;

  return {
    withoutFees: Math.round(withoutFees),
    withFees: Math.round(withFees),
    feeImpact: Math.round(feeImpact),
  };
}

/**
 * Calculate retirement savings goal
 */
export function calculateRetirementGoal(
  currentAge: number,
  retirementAge: number,
  annualExpenses: number,
  yearsInRetirement: number,
  inflationRate: number = 3
): number {
  const yearsToRetirement = retirementAge - currentAge;

  // Adjust expenses for inflation
  const futureAnnualExpenses = annualExpenses * Math.pow(1 + inflationRate / 100, yearsToRetirement);

  // Calculate total needed (simplified - assuming 4% withdrawal rate)
  const retirementGoal = futureAnnualExpenses * 25;

  return Math.round(retirementGoal);
}

/**
 * Calculate required monthly savings to reach a goal
 */
export function calculateRequiredMonthlySavings(
  goal: number,
  years: number,
  annualRate: number,
  currentSavings: number = 0
): number {
  const monthlyRate = annualRate / 100 / 12;
  const months = years * 12;

  // Future value of current savings
  const fvCurrentSavings = currentSavings * Math.pow(1 + monthlyRate, months);

  // Remaining goal
  const remainingGoal = goal - fvCurrentSavings;

  if (remainingGoal <= 0) return 0;

  // Calculate monthly payment needed
  const monthlyPayment = remainingGoal * (monthlyRate / (Math.pow(1 + monthlyRate, months) - 1));

  return Math.round(monthlyPayment);
}

/**
 * Calculate portfolio allocation based on risk tolerance
 */
export function suggestAllocation(
  age: number,
  riskTolerance: "conservative" | "moderate" | "aggressive"
): {
  stocks: number;
  bonds: number;
  cash: number;
  alternatives: number;
} {
  // Base allocation on age (100 - age rule with adjustments)
  const baseStocks = 100 - age;

  const riskAdjustments = {
    conservative: -15,
    moderate: 0,
    aggressive: 15,
  };

  let stocks = Math.max(20, Math.min(90, baseStocks + riskAdjustments[riskTolerance]));
  let bonds = Math.max(5, 100 - stocks - 10);
  let cash = 5;
  let alternatives = 100 - stocks - bonds - cash;

  // Normalize to 100%
  const total = stocks + bonds + cash + alternatives;
  if (total !== 100) {
    const factor = 100 / total;
    stocks = Math.round(stocks * factor);
    bonds = Math.round(bonds * factor);
    alternatives = Math.round(alternatives * factor);
    cash = 100 - stocks - bonds - alternatives;
  }

  return { stocks, bonds, cash, alternatives };
}

/**
 * Generate demo portfolio performance data
 */
export function generateDemoPortfolioData(days: number = 30): {
  date: string;
  value: number;
  change: number;
}[] {
  const data = [];
  let value = 2500000;
  const today = new Date();

  for (let i = days; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    // Random daily change between -2% and +2.5%
    const changePercent = (Math.random() - 0.4) * 2.5;
    value = value * (1 + changePercent / 100);

    data.push({
      date: date.toISOString().split("T")[0],
      value: Math.round(value),
      change: changePercent,
    });
  }

  return data;
}
