// Meridian Bay Capital - Constants and Configuration

export const COMPANY = {
  name: "Meridian Bay Capital",
  tagline: "Wealth Management for Coastal Living",
  description: "Comprehensive wealth management for those who value expertise and coastal living.",
  phone: "(415) 555-0123",
  phoneFormatted: "+14155550123",
  email: "info@meridianbaycapital.com",
  clientEmail: "clients@meridianbaycapital.com",
  address: {
    street: "100 Harbor View Drive",
    suite: "Suite 400",
    city: "Sausalito",
    state: "CA",
    zip: "94965",
    country: "USA",
  },
  hours: {
    weekdays: "8:00 AM - 6:00 PM PST",
    saturday: "By Appointment",
    sunday: "Closed",
  },
  founded: 1999,
  aum: "$2.5B",
  clients: "500+",
  retention: "98%",
  social: {
    linkedin: "https://linkedin.com/company/meridian-bay-capital",
    twitter: "https://twitter.com/meridianbay",
  },
  registration: {
    sec: "SEC Registered Investment Advisor",
    secNumber: "801-XXXXX",
    fiduciary: "Fiduciary Standard",
  },
} as const;

export const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
] as const;

export const FOOTER_LINKS = {
  services: [
    { label: "Wealth Planning", href: "/services#wealth-planning" },
    { label: "Investment Management", href: "/services#investment-management" },
    { label: "Retirement Planning", href: "/services#retirement" },
    { label: "Estate & Legacy", href: "/services#estate" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Market Insights", href: "/insights" },
    { label: "Financial Tools", href: "/tools" },
    { label: "FAQ", href: "/faq" },
    { label: "Client Portal", href: "/portal" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Disclosures", href: "/disclosures" },
    { label: "Accessibility", href: "/accessibility" },
  ],
} as const;

export const TRUST_INDICATORS = [
  "SEC Registered",
  "Fiduciary Duty",
  "$2.5B AUM",
  "Serving Bay Area Since 1999",
] as const;

export const DISCLAIMERS = {
  investment: "Past performance does not guarantee future results. Investing involves risk, including the potential loss of principal.",
  calculator: "This calculator provides estimates for illustrative purposes only. Actual returns may vary based on market conditions and individual circumstances.",
  general: "Meridian Bay Capital is a registered investment advisor. Registration does not imply any level of skill or training.",
  suitability: "The information provided is general in nature and should not be considered investment advice. Please consult with a qualified financial advisor for personalized recommendations.",
} as const;

export const META = {
  siteUrl: "https://meridianbaycapital.com",
  siteName: "Meridian Bay Capital",
  defaultTitle: "Meridian Bay Capital | Wealth Management for Coastal Living",
  defaultDescription: "Comprehensive wealth management services for high-net-worth individuals and families. SEC Registered Investment Advisor serving the Bay Area since 1999.",
  keywords: [
    "wealth management",
    "financial planning",
    "investment management",
    "retirement planning",
    "estate planning",
    "Bay Area",
    "fiduciary",
    "SEC registered",
  ],
  twitterHandle: "@meridianbay",
  ogImage: "/images/og-image.jpg",
} as const;

export const CALCULATOR_DEFAULTS = {
  initialInvestment: 100000,
  monthlyContribution: 2000,
  timeHorizon: 20,
  expectedReturn: 7,
} as const;

export const CALCULATOR_LIMITS = {
  initialInvestment: { min: 10000, max: 10000000 },
  monthlyContribution: { min: 0, max: 50000 },
  timeHorizon: { min: 1, max: 40 },
  expectedReturn: { min: 3, max: 12 },
} as const;
