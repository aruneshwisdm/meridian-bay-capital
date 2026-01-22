// FAQ data for Meridian Bay Capital

export interface FAQ {
  question: string;
  answer: string;
  category: FAQCategory;
}

export type FAQCategory =
  | "Getting Started"
  | "Services"
  | "Fees"
  | "Account Management"
  | "Security";

export const faqs: FAQ[] = [
  // Getting Started
  {
    question: "What is the minimum investment to work with Meridian Bay Capital?",
    answer: "Our Essential service tier begins at $500,000 in investable assets. We also work with clients who are on a clear path to reaching this threshold, such as executives with significant equity compensation. During our initial consultation, we can discuss whether our services are a good fit for your situation.",
    category: "Getting Started",
  },
  {
    question: "What should I expect during the initial consultation?",
    answer: "The initial consultation is a no-obligation conversation to understand your financial situation, goals, and concerns. We'll discuss your current investments, timeline, and what's most important to you. This meeting typically lasts 45-60 minutes and can be held in person at our Sausalito office or via video conference. There's no cost for this meeting.",
    category: "Getting Started",
  },
  {
    question: "How long does the onboarding process take?",
    answer: "Once you decide to work with us, the onboarding process typically takes 2-4 weeks. This includes gathering information about your current accounts, developing your initial financial plan, and transferring assets if applicable. We handle most of the paperwork and coordinate directly with your current institutions to make the transition as smooth as possible.",
    category: "Getting Started",
  },

  // Services
  {
    question: "What is a fiduciary, and why does it matter?",
    answer: "A fiduciary is legally obligated to act in your best interest, not their own. As a registered investment advisor, Meridian Bay Capital is held to a fiduciary standard at all times. This means we must avoid conflicts of interest, disclose any potential conflicts, and always put your interests first. This is a higher standard than the 'suitability' requirement that applies to many brokers and salespeople.",
    category: "Services",
  },
  {
    question: "Do you work with clients' existing advisors (CPAs, attorneys)?",
    answer: "Absolutely. We believe in a collaborative approach to wealth management. We regularly coordinate with our clients' CPAs on tax planning strategies and work closely with estate attorneys to ensure investment strategies align with estate plans. This team approach ensures all aspects of your financial life work together coherently.",
    category: "Services",
  },
  {
    question: "What types of accounts can you manage?",
    answer: "We manage a wide variety of account types including individual and joint brokerage accounts, traditional and Roth IRAs, SEP and SIMPLE IRAs, 401(k) rollovers, trust accounts, custodial accounts (UGMA/UTMA), and 529 education savings plans. For business owners, we can also help with company retirement plans.",
    category: "Services",
  },
  {
    question: "Do you offer sustainable or ESG investing options?",
    answer: "Yes, we offer ESG-focused portfolio options for clients who want to align their investments with their values. These portfolios consider environmental, social, and governance factors while still pursuing competitive risk-adjusted returns. During your financial planning process, we'll discuss whether this approach aligns with your preferences.",
    category: "Services",
  },

  // Fees
  {
    question: "How are your fees structured?",
    answer: "We charge an annual advisory fee based on a percentage of assets under management, which covers financial planning, investment management, and ongoing advice. Fees are tiered and decrease at higher asset levels, starting at 1.00% for the first $1 million. This fee-only model means we don't receive commissions or kickbacks, ensuring our advice is always in your best interest.",
    category: "Fees",
  },
  {
    question: "Are there any additional fees I should be aware of?",
    answer: "In addition to our advisory fee, you may incur underlying fund expenses for the ETFs and mutual funds in your portfolio (typically 0.05%-0.25% annually), trading costs (though most trades are commission-free), and custodian fees (minimal and disclosed). We provide a complete fee disclosure document before you become a client.",
    category: "Fees",
  },
  {
    question: "How often am I billed?",
    answer: "Advisory fees are billed quarterly in arrears, meaning you pay at the end of each quarter for services provided during that period. Fees are calculated based on the average daily balance of your accounts and are automatically deducted from your account.",
    category: "Fees",
  },

  // Account Management
  {
    question: "How often will I meet with my advisor?",
    answer: "At minimum, we conduct formal review meetings quarterly to discuss your portfolio performance, any changes to your situation, and ensure your plan remains on track. However, we encourage clients to reach out anytime questions arise. Many clients also schedule additional meetings around major life events or financial decisions.",
    category: "Account Management",
  },
  {
    question: "Can I access my accounts online?",
    answer: "Yes, you have 24/7 online access to your accounts through our secure client portal. You can view your portfolio, track performance, access documents, and see a consolidated view of all your accounts. We also provide a mobile app for convenient access on the go.",
    category: "Account Management",
  },
  {
    question: "What happens if I need to withdraw money?",
    answer: "You can request withdrawals at any time. For routine withdrawals, you can use the client portal or contact our office. We typically process requests within 1-2 business days. For larger or non-routine withdrawals, we may want to discuss the request to ensure it aligns with your overall financial plan and to optimize the tax implications.",
    category: "Account Management",
  },
  {
    question: "How do you handle account rebalancing?",
    answer: "We monitor portfolios continuously and rebalance when allocations drift significantly from targets, typically triggered when any asset class moves more than 5% from its target. We also look for rebalancing opportunities that can provide tax benefits. All rebalancing is done with consideration for tax efficiency and transaction costs.",
    category: "Account Management",
  },

  // Security
  {
    question: "How is my money protected?",
    answer: "Your assets are held by reputable third-party custodians (typically Charles Schwab or Fidelity), not by Meridian Bay. This separation provides an important layer of protection. These custodians provide SIPC insurance coverage up to $500,000 per account, with additional excess coverage. We never have the ability to move your assets to an outside party.",
    category: "Security",
  },
  {
    question: "What security measures protect my personal information?",
    answer: "We employ bank-level security measures including 256-bit encryption, multi-factor authentication, and regular security audits. Our systems are monitored 24/7 for suspicious activity. We also maintain comprehensive cybersecurity insurance and have detailed protocols for protecting client data.",
    category: "Security",
  },
  {
    question: "What happens to my accounts if something happens to my advisor?",
    answer: "Meridian Bay has succession plans in place to ensure continuity of service regardless of changes to our team. Your accounts and financial plans are documented in our secure systems and can be seamlessly transitioned to another qualified advisor. Additionally, because assets are held with independent custodians, they are always accessible to you and your designated beneficiaries.",
    category: "Security",
  },
];

export function getFAQsByCategory(category: FAQCategory): FAQ[] {
  return faqs.filter((faq) => faq.category === category);
}

export const faqCategories: FAQCategory[] = [
  "Getting Started",
  "Services",
  "Fees",
  "Account Management",
  "Security",
];
