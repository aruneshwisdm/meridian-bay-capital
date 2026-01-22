// Services data for Meridian Bay Capital

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: "wealth-planning",
    title: "Wealth Planning",
    shortDescription: "Comprehensive financial strategies tailored to your unique goals and lifestyle.",
    description: `Our wealth planning process begins with understanding what matters most to you. We work closely with you to define your financial goals, whether that's securing your family's future, funding education, or achieving financial independence.

Our team develops a customized financial roadmap that considers all aspects of your financial life—from cash flow and budgeting to insurance and risk management. We integrate tax planning strategies throughout, ensuring every decision is optimized for your overall financial health.

We believe in proactive planning, not reactive responses. Our ongoing monitoring and regular reviews ensure your plan evolves with your life circumstances and market conditions.`,
    icon: "TrendingUp",
    features: [
      "Comprehensive financial analysis and goal setting",
      "Cash flow optimization and budgeting strategies",
      "Insurance and risk management review",
      "Education funding planning (529 plans, UGMA/UTMA)",
      "Tax-efficient wealth accumulation strategies",
      "Regular plan reviews and updates",
    ],
    image: "/images/services/wealth-planning.jpg",
  },
  {
    id: "investment-management",
    title: "Investment Management",
    shortDescription: "Disciplined portfolio management focused on your long-term success.",
    description: `Our investment approach is grounded in academic research and decades of market experience. We construct diversified portfolios tailored to your risk tolerance, time horizon, and specific goals, using a combination of institutional-quality funds and individual securities where appropriate.

We believe in disciplined rebalancing, tax-loss harvesting, and maintaining appropriate asset allocation through all market conditions. Our team continuously monitors your portfolio and the broader market environment, making tactical adjustments when warranted while avoiding reactive decisions driven by short-term noise.

For clients interested in aligning their investments with their values, we offer ESG-focused portfolio options that seek competitive returns while considering environmental, social, and governance factors.`,
    icon: "LineChart",
    features: [
      "Customized asset allocation based on your profile",
      "Diversified portfolio construction",
      "Ongoing monitoring and rebalancing",
      "Tax-loss harvesting strategies",
      "ESG and sustainable investing options",
      "Access to institutional investment vehicles",
    ],
    image: "/images/services/investment-management.jpg",
  },
  {
    id: "retirement",
    title: "Retirement Planning",
    shortDescription: "Strategic planning for a secure and fulfilling retirement.",
    description: `Retirement planning is about more than accumulating assets—it's about ensuring you can maintain your lifestyle and pursue your passions throughout your retirement years. Our comprehensive approach addresses the unique challenges of transitioning from accumulation to distribution.

We analyze your Social Security options to maximize lifetime benefits, develop sustainable withdrawal strategies, and plan for healthcare costs including Medicare and potential long-term care needs. For clients approaching retirement, we create detailed income projections that account for inflation, taxes, and sequence-of-returns risk.

Our goal is to help you retire with confidence, knowing you have a clear plan for generating reliable income throughout your retirement.`,
    icon: "Landmark",
    features: [
      "Social Security optimization analysis",
      "Retirement income projections and planning",
      "401(k) and pension rollover guidance",
      "Healthcare and Medicare planning",
      "Long-term care planning strategies",
      "Required Minimum Distribution (RMD) planning",
    ],
    image: "/images/services/retirement-planning.jpg",
  },
  {
    id: "estate",
    title: "Estate & Legacy",
    shortDescription: "Preserve and transfer your wealth according to your wishes.",
    description: `Effective estate planning ensures your wealth is distributed according to your wishes while minimizing tax implications and avoiding unnecessary complications for your heirs. We work closely with your estate attorney to develop a comprehensive plan that protects your legacy.

Our team helps you navigate complex decisions around trust structures, beneficiary designations, and gifting strategies. For business owners, we address succession planning to ensure your business continues to thrive. For philanthropically-minded clients, we structure charitable giving strategies that maximize both impact and tax benefits.

Beyond the technical aspects, we facilitate important family conversations about wealth, helping prepare the next generation to be responsible stewards of family assets.`,
    icon: "Users",
    features: [
      "Estate plan review and coordination",
      "Trust and beneficiary designation optimization",
      "Gifting strategies and wealth transfer planning",
      "Business succession planning",
      "Charitable giving and foundation strategies",
      "Family wealth education and governance",
    ],
    image: "/images/services/estate-planning.jpg",
  },
];

export interface ServiceTier {
  name: string;
  description: string;
  minimumAssets: string;
  features: Record<string, boolean>;
}

export const serviceTiers: ServiceTier[] = [
  {
    name: "Essential",
    description: "Core wealth management services",
    minimumAssets: "$500K",
    features: {
      "Comprehensive financial plan": true,
      "Investment management": true,
      "Quarterly reviews": true,
      "Tax-loss harvesting": true,
      "Dedicated advisor": false,
      "Estate planning coordination": false,
      "Private investments access": false,
      "Family wealth education": false,
    },
  },
  {
    name: "Premium",
    description: "Enhanced services with dedicated support",
    minimumAssets: "$1M",
    features: {
      "Comprehensive financial plan": true,
      "Investment management": true,
      "Quarterly reviews": true,
      "Tax-loss harvesting": true,
      "Dedicated advisor": true,
      "Estate planning coordination": true,
      "Private investments access": false,
      "Family wealth education": false,
    },
  },
  {
    name: "Elite",
    description: "Our most comprehensive offering",
    minimumAssets: "$5M",
    features: {
      "Comprehensive financial plan": true,
      "Investment management": true,
      "Quarterly reviews": true,
      "Tax-loss harvesting": true,
      "Dedicated advisor": true,
      "Estate planning coordination": true,
      "Private investments access": true,
      "Family wealth education": true,
    },
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}
