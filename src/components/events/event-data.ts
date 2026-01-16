export type EventItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  dateLabel: string;
  time: string;
  location: string;
  pricing: string;
  image: string;
  organization: string;
  capacity: string;
};

//   {
//     id: "1",
//     title: "Lusaka Summer Music & Food Festival",
//     // আপডেট করা মিউজিক ফেস্টিভ্যাল ইমেজ
//     image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
//     description: "Live performances, food trucks, and local vendors all in one vibrant outdoor experience.",
//     category: "Music & Culture",
//     dateLabel: "Sat, 22 Feb",
//     time: "15:00 - 23:00",
//     location: "Lusaka Showgrounds",
//     pricing: "From ZMW 150",
//   },
//   {
//     id: "2",
//     title: "Livingstone Tourism & Adventure Expo",
//     image: "https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?w=800&q=80",
//     description: "Discover tour operators, resorts and adventure packages around Victoria Falls.",
//     category: "Travel & Tourism",
//     dateLabel: "Fri, 7 Mar",
//     time: "09:00 - 17:00",
//     location: "Livingstone Civic Center",
//     pricing: "Free Entry",
//   },
//   {
//     id: "3",
//     title: "SME Growth & Networking Conference",
//     image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
//     description: "Panels, workshops and networking sessions for entrepreneurs and small business owners.",
//     category: "Business & Networking",
//     dateLabel: "Thu, 27 Mar",
//     time: "08:30 - 16:30",
//     location: "Manda Hill Conference Center, Lusaka",
//     pricing: "Early Bird ZMW 550",
//   },
//   {
//     id: "4",
//     title: "Kitwe Tech & Innovation Meetup",
//     // আপডেট করা টেক মিটআপ ইমেজ
//     image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
//     description: "Monthly meetup for developers, designers and startups to connect and share ideas.",
//     category: "Tech & Innovation",
//     dateLabel: "Wed, 5 Mar",
//     time: "18:00 - 20:30",
//     location: "Kitwe Hub",
//     pricing: "Free, RSVP Required",
//   },
//   {
//     id: "5",
//     title: "Family Market Day & Kids Fun Fair",
//     // আপডেট করা ফ্যামিলি ফান ফেয়ার ইমেজ
//     image: "https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?w=800&q=80",
//     description: "Local vendors, kids activities and live entertainment for the whole family.",
//     category: "Family & Community",
//     dateLabel: "Sun, 16 Mar",
//     time: "10:00 - 18:00",
//     location: "Woodlands Stadium, Lusaka",
//     pricing: "From ZMW 50",
//   },
//   {
//     id: "6",
//     title: "Zambia Fashion & Lifestyle Showcase",
//     // আপডেট করা ফ্যাশন শো ইমেজ
//     image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
//     description: "Runway shows, pop-up shops and designer showcases from across the country.",
//     category: "Fashion & Lifestyle",
//     dateLabel: "Sat, 29 Mar",
//     time: "17:00 - 22:00",
//     location: "Radisson Blu, Lusaka",
//     pricing: "VIP From ZMW 750",
//   },
// ];
export const EVENTS: EventItem[] = [
  {
    id: "1",
    title: "Lusaka Summer Music & Food Festival",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80",
    description: "Experience the ultimate summer vibe at the Lusaka Summer Music & Food Festival! Join us for a day filled with electrifying live performances from Zambia's top artists, a diverse array of food trucks serving local and international cuisines, and a vibrant marketplace featuring local artisans and vendors. Whether you're a foodie, a music lover, or just looking for a great day out with friends and family, this festival has something for everyone.\n\nWhat to expect:\n• Live performances by top local artists\n• Over 30 food stalls and trucks\n• Craft beer and cocktail garden\n• Dedicated kids' play area\n• Local artisan marketplace",
    category: "Music & Culture",
    dateLabel: "Sat, 22 Feb 2024",
    time: "15:00 - 23:00",
    location: "Lusaka Showgrounds, Great East Road",
    pricing: "ZMW 150",
    organization: "Malo Afrika Events",
    capacity: "5000+ People",
  },
  {
    id: "2",
    title: "Livingstone Tourism & Adventure Expo",
    image: "https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?w=1200&q=80",
    description: "Discover the best of Zambian tourism at the Livingstone Tourism & Adventure Expo. This premier event brings together tour operators, luxury resorts, adventure companies, and travel enthusiasts in the heart of Zambia's tourism capital. Explore exclusive travel deals, participate in adventure workshops, and learn about the latest trends in sustainable tourism near the majestic Victoria Falls.",
    category: "Travel & Tourism",
    dateLabel: "Fri, 7 Mar 2024",
    time: "09:00 - 17:00",
    location: "Livingstone Civic Center",
    pricing: "Free Entry",
    organization: "Zambia Tourism Agency",
    capacity: "2000 People",
  },
  {
    id: "3",
    title: "SME Growth & Networking Conference",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
    description: "Empower your business journey at the SME Growth & Networking Conference. This intensive one-day event is designed specifically for entrepreneurs and small business owners looking to scale their operations in the Zambian market. Featuring keynote speakers from successful African startups, practical workshops on digital marketing and financial management, and structured networking sessions to help you find your next business partner.",
    category: "Business & Networking",
    dateLabel: "Thu, 27 Mar 2024",
    time: "08:30 - 16:30",
    location: "Manda Hill Conference Center, Lusaka",
    pricing: "ZMW 550",
    organization: "Lusaka Chamber of Commerce",
    capacity: "300 People",
  },
  {
    id: "4",
    title: "Kitwe Tech & Innovation Meetup",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80",
    description: "Join the Copperbelt's thriving tech community at our monthly Tech & Innovation Meetup. This month, we're focusing on 'Building Scalable Solutions for Africa'. The event features lightning talks from local developers, a panel discussion on venture capital in Zambia, and plenty of time for informal networking over drinks and snacks. All skill levels are welcome!",
    category: "Tech & Innovation",
    dateLabel: "Wed, 5 Mar 2024",
    time: "18:00 - 20:30",
    location: "Kitwe Hub, CBD",
    pricing: "Free, RSVP Required",
    organization: "Copperbelt Tech Collective",
    capacity: "100 People",
  },
  {
    id: "5",
    title: "Family Market Day & Kids Fun Fair",
    image: "https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?w=1200&q=80",
    description: "Bring the whole family for a day of fun, shopping, and entertainment! Our Family Market Day features over 50 local vendors selling everything from organic produce to handmade clothing. The Kids Fun Fair includes jumping castles, face painting, puppet shows, and interactive games. Enjoy live acoustic music as you shop and eat from our curated selection of local food vendors.",
    category: "Family & Community",
    dateLabel: "Sun, 16 Mar 2024",
    time: "10:00 - 18:00",
    location: "Woodlands Stadium, Lusaka",
    pricing: "ZMW 50",
    organization: "Community First Zambia",
    capacity: "3000 People",
  },
  {
    id: "6",
    title: "Zambia Fashion & Lifestyle Showcase",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
    description: "Witness the pinnacle of Zambian creativity at the Zambia Fashion & Lifestyle Showcase. This glamorous event features runway shows from established and emerging designers, a lifestyle pop-up market, and designer meet-and-greets. Experience the fusion of traditional Zambian fabrics with contemporary high-fashion designs in an evening of elegance and style.",
    category: "Fashion & Lifestyle",
    dateLabel: "Sat, 29 Mar 2024",
    time: "17:00 - 22:00",
    location: "Radisson Blu, Lusaka",
    pricing: "ZMW 750",
    organization: "Fashion Council of Zambia",
    capacity: "500 People",
  },
];