// Client testimonials for Meridian Bay Capital

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title?: string;
  clientSince: number;
  location: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Working with Meridian Bay has given us the confidence to enjoy our coastal lifestyle while knowing our legacy is secure. Their team truly understands what matters to families like ours.",
    name: "Robert & Linda M.",
    clientSince: 2008,
    location: "Mill Valley, CA",
  },
  {
    id: "2",
    quote: "When I sold my company, I needed advisors who understood the complexity of my situation. The team at Meridian Bay created a comprehensive plan that addressed my taxes, investments, and estate—all working together seamlessly.",
    name: "Thomas K.",
    title: "Former Tech CEO",
    clientSince: 2015,
    location: "Palo Alto, CA",
  },
  {
    id: "3",
    quote: "The peace of mind we've gained is invaluable. Their retirement planning helped us confidently step away from our careers, knowing our income needs are covered for decades to come.",
    name: "Jennifer & Mark S.",
    clientSince: 2012,
    location: "Sausalito, CA",
  },
  {
    id: "4",
    quote: "As a physician with a demanding career, I needed someone I could trust completely with our finances. Meridian Bay has been that partner for over a decade, and I've never looked back.",
    name: "Dr. Patricia L.",
    title: "Cardiologist",
    clientSince: 2011,
    location: "San Francisco, CA",
  },
  {
    id: "5",
    quote: "What sets Meridian Bay apart is their genuine care for our family's wellbeing—not just our portfolio. They've helped us have important conversations with our children about wealth and responsibility.",
    name: "The Harrison Family",
    clientSince: 2005,
    location: "Tiburon, CA",
  },
  {
    id: "6",
    quote: "During the market volatility of recent years, James and his team kept us focused on our long-term goals. Their calm, measured approach prevented us from making emotional decisions we would have regretted.",
    name: "William & Susan T.",
    clientSince: 2018,
    location: "Belvedere, CA",
  },
];

export function getRandomTestimonials(count: number = 3): Testimonial[] {
  const shuffled = [...testimonials].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
