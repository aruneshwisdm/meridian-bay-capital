// Insights/Articles data for Meridian Bay Capital

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  author: string;
  authorImage?: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
  featured?: boolean;
}

export type ArticleCategory =
  | "Market Commentary"
  | "Planning Tips"
  | "Tax Strategy"
  | "Retirement"
  | "Estate Planning";

export const articles: Article[] = [
  {
    slug: "market-volatility-long-term-perspective",
    title: "Market Volatility: A Long-Term Perspective",
    excerpt: "Why short-term market movements rarely matter for long-term investors, and how to stay focused on your goals during turbulent times.",
    category: "Market Commentary",
    author: "Sarah Martinez, CFA",
    date: "2025-01-15",
    readTime: "6 min read",
    image: "/images/insights/market-volatility.jpg",
    featured: true,
    content: `Market volatility is an inherent part of investing. While it can be unsettling to watch your portfolio value fluctuate, understanding the nature of market movements can help you maintain perspective and avoid costly mistakes.

## The Nature of Short-Term Volatility

Stock markets are forward-looking, constantly processing new information about corporate earnings, economic conditions, and geopolitical events. This continuous reassessment leads to daily price movements that can seem random or excessive in the moment.

However, when we zoom out and look at longer time periods, a clear pattern emerges: markets have historically trended upward over time, despite frequent short-term declines.

## Historical Context

Since 1950, the S&P 500 has experienced:
- Average intra-year declines of approximately 14%
- Yet positive annual returns in roughly 75% of years
- Average annual returns of approximately 10%

This means that even in years that ended positively, investors likely experienced significant paper losses at some point during the year.

## Why Time in the Market Matters

The most significant returns often occur during brief periods that are impossible to predict. Missing just the 10 best days in the market over a 20-year period can cut your returns in half. This is why staying invested, rather than trying to time the market, is crucial for long-term success.

## Strategies for Volatile Times

1. **Review your asset allocation** - Ensure your portfolio still aligns with your risk tolerance and time horizon
2. **Rebalance opportunistically** - Volatility can create opportunities to rebalance at attractive prices
3. **Consider tax-loss harvesting** - Market declines can provide tax-planning opportunities
4. **Focus on your plan** - Your financial plan accounts for market volatility; trust the process

## Our Approach

At Meridian Bay, we build portfolios designed to weather volatility while capturing long-term market returns. Our disciplined approach helps clients avoid the emotional decisions that can derail financial plans.

If you're concerned about your portfolio during volatile periods, we encourage you to reach out. Sometimes the best investment advice is simply a reminder of why your plan was built the way it was.`,
  },
  {
    slug: "tax-loss-harvesting-strategies-2025",
    title: "Tax-Loss Harvesting Strategies for 2025",
    excerpt: "How to turn market downturns into tax savings opportunities while maintaining your investment strategy.",
    category: "Tax Strategy",
    author: "Michael Wong, CPA, JD",
    date: "2025-01-10",
    readTime: "8 min read",
    image: "/images/insights/tax-strategy.jpg",
    content: `Tax-loss harvesting is one of the most effective strategies for improving after-tax investment returns. By strategically realizing losses, you can offset gains and reduce your tax liability while maintaining your desired market exposure.

## What Is Tax-Loss Harvesting?

Tax-loss harvesting involves selling investments that have declined in value to realize a capital loss. This loss can be used to offset capital gains from other investments, and up to $3,000 of excess losses can be deducted against ordinary income each year.

## The Wash-Sale Rule

The IRS prohibits claiming a loss if you purchase a "substantially identical" security within 30 days before or after the sale. However, you can maintain your market exposure by purchasing a similar (but not identical) investment.

For example, if you sell an S&P 500 index fund at a loss, you could immediately purchase a total stock market fund to maintain similar exposure while avoiding a wash sale.

## Key Strategies for 2025

1. **Harvest losses throughout the year** - Don't wait until December; opportunities can arise at any time
2. **Consider short-term vs. long-term gains** - Short-term gains are taxed at higher rates, so prioritize offsetting those
3. **Coordinate across accounts** - Gains in taxable accounts can be offset by losses elsewhere
4. **Track your cost basis carefully** - Proper record-keeping is essential

## When Tax-Loss Harvesting Makes Sense

Tax-loss harvesting is most beneficial when:
- You have realized gains to offset
- You're in a high tax bracket
- You have a long time horizon to benefit from the deferred taxes
- Transaction costs are minimal

## Our Approach

At Meridian Bay, tax-loss harvesting is an integrated part of our investment management process. We continuously monitor client portfolios for harvesting opportunities and execute them when appropriate, considering each client's complete tax situation.

Contact your advisor to discuss how tax-loss harvesting might benefit your specific situation.`,
  },
  {
    slug: "retirement-planning-in-your-40s",
    title: "Retirement Planning in Your 40s: Key Considerations",
    excerpt: "Your 40s are a critical decade for retirement planning. Here's how to make the most of these peak earning years.",
    category: "Retirement",
    author: "David Park, CFP, ChFC",
    date: "2025-01-05",
    readTime: "7 min read",
    image: "/images/insights/retirement-40s.jpg",
    content: `Your 40s represent a pivotal time for retirement planning. With peak earning years ahead and retirement on the horizon, the decisions you make now will significantly impact your financial future.

## The Power of Your 40s

By your 40s, you likely have:
- Established career with higher income
- Clearer picture of your retirement goals
- Time to course-correct if you're behind
- Ability to maximize retirement contributions

## Key Strategies

### 1. Maximize Retirement Contributions

In 2025, you can contribute up to $23,000 to a 401(k), plus an additional $7,500 catch-up contribution if you're 50 or older. If you're not maximizing these accounts, create a plan to increase your contributions annually.

### 2. Assess Your Asset Allocation

Your 40s are a good time to review your investment strategy. While you still have decades until retirement, you may want to begin gradually reducing risk. A common guideline is to subtract your age from 110 to determine your stock allocation, though this should be customized to your situation.

### 3. Plan for Healthcare Costs

Healthcare is often the largest expense in retirement. Consider contributing to a Health Savings Account (HSA) if you have access to one—it offers triple tax advantages and can be used for qualified medical expenses in retirement.

### 4. Protect Your Income

Your ability to earn income is your most valuable asset. Ensure you have adequate disability insurance coverage—many experts recommend 60-70% of your gross income.

### 5. Start Estate Planning

If you haven't already, this is the time to establish or update your estate plan. At minimum, you need a will, power of attorney, and healthcare directive.

## Common Mistakes to Avoid

- Prioritizing children's education over retirement
- Carrying high-interest debt while saving
- Underestimating how much you'll need
- Not accounting for inflation

## Creating Your Plan

At Meridian Bay, we help clients in their 40s develop comprehensive retirement strategies that balance current lifestyle needs with future goals. Schedule a consultation to discuss your specific situation and create a roadmap for the decades ahead.`,
  },
  {
    slug: "understanding-required-minimum-distributions",
    title: "Understanding Required Minimum Distributions (RMDs)",
    excerpt: "What you need to know about RMDs from retirement accounts and strategies to minimize their tax impact.",
    category: "Tax Strategy",
    author: "Michael Wong, CPA, JD",
    date: "2024-12-28",
    readTime: "5 min read",
    image: "/images/insights/rmd.jpg",
    content: `Required Minimum Distributions (RMDs) are mandatory withdrawals from tax-deferred retirement accounts. Understanding the rules and planning strategies can help minimize the tax impact of these distributions.

## RMD Basics

Under current law, you must begin taking RMDs from traditional IRAs and most employer retirement plans at age 73 (or 75 if you were born in 1960 or later). The amount is calculated based on your account balance and IRS life expectancy tables.

## Key Considerations

### Timing Your First RMD

You can delay your first RMD until April 1 of the year following the year you turn 73. However, this means you'll need to take two distributions in that year—which could push you into a higher tax bracket.

### RMDs and Social Security

Large RMDs can increase your taxable income, potentially causing more of your Social Security benefits to be taxed and increasing your Medicare premiums through IRMAA surcharges.

## Strategies to Consider

1. **Roth Conversions** - Converting traditional IRA funds to Roth before RMDs begin can reduce future RMD amounts
2. **Qualified Charitable Distributions** - If you're 70½ or older, you can donate up to $100,000 directly to charity from your IRA, satisfying your RMD without increasing taxable income
3. **Strategic Withdrawals** - Consider taking more than the minimum in lower-income years to reduce future RMDs

## Planning Ahead

Effective RMD planning should begin years before your first required distribution. Contact your Meridian Bay advisor to discuss strategies that fit your situation.`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return articles.filter((article) => article.category === category);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((article) => article.featured);
}

export const articleCategories: ArticleCategory[] = [
  "Market Commentary",
  "Planning Tips",
  "Tax Strategy",
  "Retirement",
  "Estate Planning",
];
