// Advisor team data for Meridian Bay Capital

export interface Advisor {
  id: string;
  name: string;
  title: string;
  credentials: string[];
  bio: string;
  fullBio: string;
  image: string;
  education: string[];
  specialties: string[];
  experience: number;
  linkedin?: string;
  email: string;
}

export const advisors: Advisor[] = [
  {
    id: "james-chen",
    name: "James Chen",
    title: "Managing Partner & Senior Wealth Advisor",
    credentials: ["CFP®", "CFA®"],
    bio: "With over 25 years of experience in wealth management, James leads our team with a commitment to personalized service and fiduciary excellence.",
    fullBio: "James founded Meridian Bay Capital in 1999 with a vision of bringing institutional-quality wealth management to high-net-worth families in the Bay Area. His approach combines rigorous investment analysis with deep client relationships, ensuring each family's unique goals are at the center of their financial strategy. James is known for his calm demeanor during market volatility and his ability to translate complex financial concepts into actionable plans.",
    image: "/images/team/james-chen.jpg",
    education: [
      "MBA, Stanford Graduate School of Business",
      "BS Finance, UC Berkeley",
    ],
    specialties: [
      "Complex financial planning",
      "Multi-generational wealth transfer",
      "Alternative investments",
      "Business owner exit planning",
    ],
    experience: 25,
    linkedin: "https://linkedin.com/in/jameschen",
    email: "james.chen@meridianbaycapital.com",
  },
  {
    id: "sarah-martinez",
    name: "Sarah Martinez",
    title: "Partner & Portfolio Manager",
    credentials: ["CFA®", "CAIA®"],
    bio: "Sarah brings institutional investment expertise to our clients, having managed portfolios for major foundations before joining Meridian Bay.",
    fullBio: "Sarah's investment philosophy centers on disciplined asset allocation and risk management. Before joining Meridian Bay, she spent 12 years managing endowment portfolios for leading educational institutions. Her experience navigating diverse market cycles has proven invaluable for our clients seeking steady, long-term growth. Sarah is particularly passionate about sustainable investing and has helped many clients align their portfolios with their values.",
    image: "/images/team/sarah-martinez.jpg",
    education: [
      "MBA, Wharton School of Business",
      "BA Economics, Yale University",
    ],
    specialties: [
      "Portfolio construction",
      "ESG/Sustainable investing",
      "Institutional investment strategies",
      "Risk management",
    ],
    experience: 18,
    linkedin: "https://linkedin.com/in/sarahmartinez",
    email: "sarah.martinez@meridianbaycapital.com",
  },
  {
    id: "michael-wong",
    name: "Michael Wong",
    title: "Senior Tax Strategist",
    credentials: ["CPA", "JD"],
    bio: "Michael's dual expertise in tax law and accounting helps clients minimize their tax burden while maximizing wealth accumulation.",
    fullBio: "Michael joined Meridian Bay after a distinguished career at a Big Four accounting firm, where he specialized in high-net-worth individual taxation. His unique combination of legal and accounting expertise allows him to identify tax planning opportunities that others might miss. Michael works closely with our investment team to ensure tax efficiency is embedded in every portfolio decision, from asset location to harvest strategies.",
    image: "/images/team/michael-wong.jpg",
    education: [
      "JD, Georgetown University Law Center",
      "MS Taxation, Golden Gate University",
      "BS Accounting, UCLA",
    ],
    specialties: [
      "Tax-efficient investing",
      "Estate tax planning",
      "Business succession planning",
      "Charitable giving strategies",
    ],
    experience: 20,
    linkedin: "https://linkedin.com/in/michaelwong",
    email: "michael.wong@meridianbaycapital.com",
  },
  {
    id: "elizabeth-foster",
    name: "Elizabeth Foster",
    title: "Estate Planning Specialist",
    credentials: ["JD", "LLM", "TEP"],
    bio: "Elizabeth helps families create lasting legacies through sophisticated estate planning and wealth transfer strategies.",
    fullBio: "Elizabeth brings over 15 years of experience in trust and estate law to Meridian Bay. She has helped hundreds of families structure their wealth for multi-generational success, navigating complex family dynamics with empathy and discretion. Elizabeth is particularly skilled at coordinating with clients' existing legal and tax advisors to create cohesive wealth transfer plans. Her approach ensures that family values and financial assets are preserved for future generations.",
    image: "/images/team/elizabeth-foster.jpg",
    education: [
      "LLM Estate Planning, University of Miami",
      "JD, UC Hastings College of Law",
      "BA Political Science, Stanford University",
    ],
    specialties: [
      "Trust administration",
      "Dynasty trust planning",
      "Family governance",
      "Philanthropic planning",
    ],
    experience: 15,
    linkedin: "https://linkedin.com/in/elizabethfoster",
    email: "elizabeth.foster@meridianbaycapital.com",
  },
  {
    id: "david-park",
    name: "David Park",
    title: "Retirement Planning Director",
    credentials: ["CFP®", "ChFC®"],
    bio: "David specializes in helping clients transition smoothly into retirement with comprehensive income and lifestyle planning.",
    fullBio: "David understands that retirement is about more than just finances—it's about lifestyle, purpose, and peace of mind. With 16 years of experience focused exclusively on retirement planning, he has guided hundreds of clients through this important transition. David's holistic approach addresses not just investment strategy and income planning, but also healthcare costs, Social Security optimization, and the psychological aspects of leaving the workforce.",
    image: "/images/team/david-park.jpg",
    education: [
      "MS Financial Planning, Texas Tech University",
      "BS Business Administration, USC",
    ],
    specialties: [
      "Retirement income strategies",
      "Social Security optimization",
      "Healthcare planning in retirement",
      "401(k) and pension analysis",
    ],
    experience: 16,
    linkedin: "https://linkedin.com/in/davidpark",
    email: "david.park@meridianbaycapital.com",
  },
  {
    id: "rachel-anderson",
    name: "Rachel Anderson",
    title: "Client Relationship Manager",
    credentials: ["CFP®"],
    bio: "Rachel serves as a dedicated point of contact for our clients, ensuring their needs are met with responsiveness and care.",
    fullBio: "Rachel's role at Meridian Bay is to ensure every client feels heard, understood, and well-served. She coordinates between our various specialists to deliver a seamless client experience, from scheduling reviews to answering day-to-day questions. Rachel's background in financial planning allows her to provide substantive assistance while connecting clients with the right team members for specialized needs. She is passionate about client education and often leads our educational workshops.",
    image: "/images/team/rachel-anderson.jpg",
    education: [
      "MS Personal Financial Planning, Kansas State University",
      "BA Communications, Northwestern University",
    ],
    specialties: [
      "Client communication",
      "Financial education",
      "Service coordination",
      "New client onboarding",
    ],
    experience: 8,
    linkedin: "https://linkedin.com/in/rachelanderson",
    email: "rachel.anderson@meridianbaycapital.com",
  },
];

export function getAdvisorById(id: string): Advisor | undefined {
  return advisors.find((advisor) => advisor.id === id);
}

export function getAdvisorsBySpecialty(specialty: string): Advisor[] {
  return advisors.filter((advisor) =>
    advisor.specialties.some((s) => s.toLowerCase().includes(specialty.toLowerCase()))
  );
}
