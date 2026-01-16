export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: string;
};

export const FAQ_DATA: FaqItem[] = [
  {
    id: "1",
    question: "What is Malo Afrika?",
    answer: "Malo Afrika is a premier platform connecting businesses and consumers across Zambia. We provide a space for discovering local services, events, news, and products, fostering growth and community engagement.",
    category: "General",
  },
  {
    id: "2",
    question: "How do I create an account?",
    answer: "Creating an account is simple! Click on the 'Sign Up' button at the top right corner of the page. You can register using your email address or connect via your Google account for quick access.",
    category: "Account",
  },
  {
    id: "3",
    question: "Is it free to list my business?",
    answer: "We offer both free and premium listing options. A basic listing allows you to showcase your business to our audience at no cost. For enhanced visibility and advanced features, check out our premium packages.",
    category: "Business",
  },
  {
    id: "4",
    question: "How can I promote my event?",
    answer: "To promote an event, navigate to the 'Events' section and click 'Create Event'. Fill in the details, upload an image, and submit. Once approved, your event will be visible to thousands of potential attendees.",
    category: "Events",
  },
  {
    id: "5",
    question: "Can I sell products on Malo Afrika?",
    answer: "Yes! Our platform supports product listings. Whether you're an artisan, retailer, or individual seller, you can list your items in our marketplace section to reach eager buyers.",
    category: "Marketplace",
  },
  {
    id: "6",
    question: "How do I contact support?",
    answer: "Our support team is here to help. You can reach us via the 'Contact Us' page, send an email to support@maloafrika.com, or call our helpline during business hours.",
    category: "Support",
  },
  {
    id: "7",
    question: "What payment methods are accepted?",
    answer: "We accept various payment methods including mobile money (Airtel, MTN, Zamtel), credit/debit cards, and direct bank transfers to ensure convenience for all our users.",
    category: "Payments",
  },
  {
    id: "8",
    question: "Is my personal information secure?",
    answer: "Absolutely. We prioritize your privacy and security. Our platform uses industry-standard encryption and security protocols to protect your personal data and transactions.",
    category: "Security",
  },
];
