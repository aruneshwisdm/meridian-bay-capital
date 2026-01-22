"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Download,
  Calendar,
  MessageSquare,
  User,
  LogOut,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Card, Button, Badge } from "@/components/ui";
import { formatCurrency, formatPercent, formatDate } from "@/lib/utils/formatting";
import { generateDemoPortfolioData } from "@/lib/utils/calculations";
import { cn } from "@/lib/utils/cn";

// Demo data
const portfolioValue = 2547832;
const todayChange = 12453;
const todayChangePercent = 0.49;
const ytdReturn = 8.7;

const allocationData = [
  { name: "US Stocks", value: 45, color: "#0A2463" },
  { name: "International Stocks", value: 20, color: "#2E5090" },
  { name: "Bonds", value: 25, color: "#C9A961" },
  { name: "Real Estate", value: 7, color: "#2D6A4F" },
  { name: "Cash", value: 3, color: "#8D90A8" },
];

const recentActivity = [
  { date: "2025-01-20", type: "Dividend", description: "Vanguard Total Stock Market", amount: 1234.56 },
  { date: "2025-01-18", type: "Buy", description: "iShares Core US Aggregate Bond", amount: -15000 },
  { date: "2025-01-15", type: "Dividend", description: "Vanguard International Stock", amount: 567.89 },
  { date: "2025-01-10", type: "Rebalance", description: "Portfolio Rebalancing", amount: 0 },
  { date: "2025-01-05", type: "Deposit", description: "Monthly Contribution", amount: 10000 },
];

const timeRanges = ["1M", "3M", "6M", "1Y", "All"];

export default function DashboardPage() {
  const [selectedRange, setSelectedRange] = useState("1M");

  const chartData = useMemo(() => {
    const days = { "1M": 30, "3M": 90, "6M": 180, "1Y": 365, All: 730 }[selectedRange] || 30;
    return generateDemoPortfolioData(days);
  }, [selectedRange]);

  return (
    <section className="min-h-screen bg-background pb-16">
      {/* Dashboard Header */}
      <div className="bg-white border-b border-neutral-200 sticky top-[4.5rem] md:top-[6rem] z-30">
        <div className="container-main py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-body-sm text-text-secondary">Welcome back,</p>
              <h1 className="font-heading font-bold text-heading-xl text-text">John Doe</h1>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/portal">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container-main py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Portfolio Overview */}
            <Card>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <p className="text-body-sm text-text-secondary mb-1">Total Portfolio Value</p>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono font-bold text-display-sm text-text">
                      {formatCurrency(portfolioValue)}
                    </span>
                    <span
                      className={cn(
                        "flex items-center gap-1 text-body-md font-semibold",
                        todayChange >= 0 ? "text-success" : "text-red-500"
                      )}
                    >
                      {todayChange >= 0 ? (
                        <ArrowUpRight className="h-4 w-4" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4" />
                      )}
                      {formatCurrency(Math.abs(todayChange))} ({formatPercent(todayChangePercent, { showSign: true })})
                    </span>
                  </div>
                  <p className="text-body-sm text-text-tertiary mt-1">Today&apos;s change</p>
                </div>

                {/* Time Range Selector */}
                <div className="flex gap-1 mt-4 md:mt-0">
                  {timeRanges.map((range) => (
                    <button
                      key={range}
                      onClick={() => setSelectedRange(range)}
                      className={cn(
                        "px-3 py-1.5 rounded-lg font-medium text-body-sm transition-colors",
                        selectedRange === range
                          ? "bg-primary text-white"
                          : "text-text-secondary hover:bg-neutral-100"
                      )}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Performance Chart */}
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorPortfolio" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0A2463" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#0A2463" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E8DCC4" />
                    <XAxis
                      dataKey="date"
                      tick={{ fontSize: 12, fill: "#5C5F7A" }}
                      tickLine={false}
                      axisLine={{ stroke: "#E8DCC4" }}
                      tickFormatter={(value) => {
                        const date = new Date(value);
                        return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
                      }}
                      interval={Math.floor(chartData.length / 6)}
                    />
                    <YAxis
                      tick={{ fontSize: 12, fill: "#5C5F7A" }}
                      tickLine={false}
                      axisLine={{ stroke: "#E8DCC4" }}
                      tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                      domain={["dataMin - 50000", "dataMax + 50000"]}
                    />
                    <Tooltip
                      formatter={(value) => [formatCurrency(value as number), "Portfolio Value"]}
                      labelFormatter={(label) => formatDate(String(label), { format: "long" })}
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #E8DCC4",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(10, 36, 99, 0.1)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#0A2463"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorPortfolio)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Asset Allocation */}
            <Card>
              <h2 className="font-heading font-bold text-heading-lg text-text mb-6">
                Asset Allocation
              </h2>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={allocationData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {allocationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`${value}%`, "Allocation"]}
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #E8DCC4",
                          borderRadius: "8px",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-3">
                  {allocationData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-body-md text-text">{item.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-mono font-semibold text-body-md text-text">
                          {item.value}%
                        </span>
                        <span className="text-body-sm text-text-tertiary ml-2">
                          {formatCurrency((portfolioValue * item.value) / 100)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card>
              <h2 className="font-heading font-bold text-heading-lg text-text mb-6">
                Recent Activity
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="text-left py-3 text-body-sm font-medium text-text-secondary">
                        Date
                      </th>
                      <th className="text-left py-3 text-body-sm font-medium text-text-secondary">
                        Type
                      </th>
                      <th className="text-left py-3 text-body-sm font-medium text-text-secondary">
                        Description
                      </th>
                      <th className="text-right py-3 text-body-sm font-medium text-text-secondary">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentActivity.map((activity, index) => (
                      <tr
                        key={index}
                        className="border-b border-neutral-100 last:border-0"
                      >
                        <td className="py-3 text-body-sm text-text-secondary">
                          {formatDate(activity.date, { format: "short" })}
                        </td>
                        <td className="py-3">
                          <Badge
                            variant={
                              activity.type === "Dividend"
                                ? "success"
                                : activity.type === "Buy"
                                ? "primary"
                                : "accent"
                            }
                            size="sm"
                          >
                            {activity.type}
                          </Badge>
                        </td>
                        <td className="py-3 text-body-sm text-text">
                          {activity.description}
                        </td>
                        <td
                          className={cn(
                            "py-3 text-right font-mono text-body-sm font-medium",
                            activity.amount > 0
                              ? "text-success"
                              : activity.amount < 0
                              ? "text-text"
                              : "text-text-tertiary"
                          )}
                        >
                          {activity.amount !== 0
                            ? formatCurrency(activity.amount, { showSign: true })
                            : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* Account Summary */}
            <Card>
              <h3 className="font-heading font-semibold text-heading-md text-text mb-4">
                Account Summary
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-body-sm text-text-secondary">YTD Return</span>
                  <span className="font-mono font-semibold text-body-md text-success">
                    +{ytdReturn}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-body-sm text-text-secondary">Since Inception</span>
                  <span className="font-mono font-semibold text-body-md text-success">
                    +42.3%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-body-sm text-text-secondary">Last Rebalance</span>
                  <span className="text-body-sm text-text">Jan 10, 2025</span>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card>
              <h3 className="font-heading font-semibold text-heading-md text-text mb-4">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <Button variant="secondary" className="w-full justify-start" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download Statement
                </Button>
                <Button variant="secondary" className="w-full justify-start" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Meeting
                </Button>
                <Button variant="secondary" className="w-full justify-start" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </Card>

            {/* Your Advisor */}
            <Card>
              <h3 className="font-heading font-semibold text-heading-md text-text mb-4">
                Your Advisor
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-text">James Chen, CFP®</p>
                  <p className="text-body-sm text-text-secondary">Managing Partner</p>
                </div>
              </div>
              <Button variant="primary" className="w-full mt-4" size="sm" asChild>
                <Link href="/contact">Contact Advisor</Link>
              </Button>
            </Card>

            {/* Market Updates */}
            <Card className="bg-primary-50 border-0">
              <h3 className="font-heading font-semibold text-heading-md text-text mb-3">
                Market Update
              </h3>
              <p className="text-body-sm text-text-secondary mb-3">
                Markets closed higher today on positive economic data. Read our latest
                commentary on portfolio positioning.
              </p>
              <Link
                href="/insights"
                className="text-body-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                Read More →
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
