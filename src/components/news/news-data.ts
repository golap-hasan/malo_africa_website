export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  publishedAt: string;
  time: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "1",
    title:
      "Malo Africa secures funding to expand digital marketplace across Zambia",
    summary:
      "The platform will onboard more local merchants and service providers, focusing on underserved regions and SMEs.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&q=80",
    category: "Business",
    publishedAt: "2026-01-05",
    time: "08:30",
  },
  {
    id: "2",
    title: "New logistics partnerships aim to cut delivery times in half",
    summary:
      "Malo Africa announces strategic deals with local couriers to improve last‑mile delivery for buyers and sellers.",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
    category: "Logistics",
    publishedAt: "2026-01-03",
    time: "14:15",
  },
  {
    id: "3",
    title: "Local creatives showcase work through Malo Africa services hub",
    summary:
      "Photographers, designers and consultants are using the platform to reach customers beyond their neighborhoods.",
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&q=80",
    category: "Community",
    publishedAt: "2026-01-01",
    time: "19:45",
  },
  {
    id: "4",
    title: "Secure payments update brings stronger protection for buyers",
    summary:
      "A new security layer reduces fraud risk while keeping the checkout experience fast and mobile‑friendly.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&q=80",
    category: "Product",
    publishedAt: "2025-12-29",
    time: "10:05",
  },
];

