"use client";

import { useState, useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Calculator, Info } from "lucide-react";
import { Card } from "@/components/ui";
import { calculateFutureValue } from "@/lib/utils/calculations";
import { formatCurrency, formatCompactCurrency } from "@/lib/utils/formatting";
import { CALCULATOR_DEFAULTS, CALCULATOR_LIMITS, DISCLAIMERS } from "@/lib/constants";

interface SliderInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  formatValue?: (value: number) => string;
}

function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  prefix = "",
  suffix = "",
  formatValue,
}: SliderInputProps) {
  const displayValue = formatValue ? formatValue(value) : `${prefix}${value.toLocaleString()}${suffix}`;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="font-heading font-medium text-body-md text-text">
          {label}
        </label>
        <span className="font-mono font-semibold text-heading-md text-primary">
          {displayValue}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary"
      />
      <div className="flex justify-between text-caption text-text-tertiary">
        <span>{formatValue ? formatValue(min) : `${prefix}${min.toLocaleString()}${suffix}`}</span>
        <span>{formatValue ? formatValue(max) : `${prefix}${max.toLocaleString()}${suffix}`}</span>
      </div>
    </div>
  );
}

export function InvestmentCalculator() {
  const [initialInvestment, setInitialInvestment] = useState<number>(CALCULATOR_DEFAULTS.initialInvestment);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(CALCULATOR_DEFAULTS.monthlyContribution);
  const [timeHorizon, setTimeHorizon] = useState<number>(CALCULATOR_DEFAULTS.timeHorizon);
  const [expectedReturn, setExpectedReturn] = useState<number>(CALCULATOR_DEFAULTS.expectedReturn);

  const results = useMemo(() => {
    return calculateFutureValue(
      initialInvestment,
      monthlyContribution,
      timeHorizon,
      expectedReturn
    );
  }, [initialInvestment, monthlyContribution, timeHorizon, expectedReturn]);

  // Prepare chart data
  const chartData = results.yearlyData.map((data) => ({
    year: `Year ${data.year}`,
    contributions: data.contributions,
    value: data.value,
    gains: data.gains,
  }));

  return (
    <Card className="p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center">
          <Calculator className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-heading-lg text-text">
            Investment Growth Calculator
          </h3>
          <p className="text-body-sm text-text-secondary">
            See how your investments could grow over time
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Inputs */}
        <div className="space-y-8">
          <SliderInput
            label="Initial Investment"
            value={initialInvestment}
            onChange={setInitialInvestment}
            min={CALCULATOR_LIMITS.initialInvestment.min}
            max={CALCULATOR_LIMITS.initialInvestment.max}
            step={10000}
            formatValue={(v) => formatCurrency(v)}
          />

          <SliderInput
            label="Monthly Contribution"
            value={monthlyContribution}
            onChange={setMonthlyContribution}
            min={CALCULATOR_LIMITS.monthlyContribution.min}
            max={CALCULATOR_LIMITS.monthlyContribution.max}
            step={500}
            formatValue={(v) => formatCurrency(v)}
          />

          <SliderInput
            label="Time Horizon"
            value={timeHorizon}
            onChange={setTimeHorizon}
            min={CALCULATOR_LIMITS.timeHorizon.min}
            max={CALCULATOR_LIMITS.timeHorizon.max}
            suffix=" years"
          />

          <SliderInput
            label="Expected Annual Return"
            value={expectedReturn}
            onChange={setExpectedReturn}
            min={CALCULATOR_LIMITS.expectedReturn.min}
            max={CALCULATOR_LIMITS.expectedReturn.max}
            step={0.5}
            suffix="%"
          />
        </div>

        {/* Results */}
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-primary-50 rounded-xl p-4 text-center">
              <p className="text-caption text-text-secondary mb-1">Future Value</p>
              <p className="font-mono font-bold text-heading-lg text-primary">
                {formatCompactCurrency(results.futureValue)}
              </p>
            </div>
            <div className="bg-neutral-100 rounded-xl p-4 text-center">
              <p className="text-caption text-text-secondary mb-1">Contributions</p>
              <p className="font-mono font-semibold text-heading-md text-text">
                {formatCompactCurrency(results.totalContributions)}
              </p>
            </div>
            <div className="bg-success-50 rounded-xl p-4 text-center">
              <p className="text-caption text-text-secondary mb-1">Gains</p>
              <p className="font-mono font-semibold text-heading-md text-success">
                {formatCompactCurrency(results.investmentGains)}
              </p>
            </div>
          </div>

          {/* Chart */}
          <div className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorContributions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2E5090" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#2E5090" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0A2463" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#0A2463" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E8DCC4" />
                <XAxis
                  dataKey="year"
                  tick={{ fontSize: 12, fill: "#5C5F7A" }}
                  tickLine={false}
                  axisLine={{ stroke: "#E8DCC4" }}
                  interval={Math.floor(timeHorizon / 5) - 1}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: "#5C5F7A" }}
                  tickLine={false}
                  axisLine={{ stroke: "#E8DCC4" }}
                  tickFormatter={(value) => formatCompactCurrency(value)}
                />
                <Tooltip
                  formatter={(value, name) => [
                    formatCurrency(value as number),
                    name === "contributions" ? "Total Contributions" : "Portfolio Value",
                  ]}
                  labelStyle={{ color: "#2B2D42", fontWeight: 600 }}
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #E8DCC4",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(10, 36, 99, 0.1)",
                  }}
                />
                <Legend
                  formatter={(value) =>
                    value === "contributions" ? "Contributions" : "Portfolio Value"
                  }
                />
                <Area
                  type="monotone"
                  dataKey="contributions"
                  stroke="#2E5090"
                  fillOpacity={1}
                  fill="url(#colorContributions)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#0A2463"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 pt-6 border-t border-neutral-200">
        <div className="flex items-start gap-2 text-caption text-text-tertiary">
          <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <p>{DISCLAIMERS.calculator}</p>
        </div>
      </div>
    </Card>
  );
}
