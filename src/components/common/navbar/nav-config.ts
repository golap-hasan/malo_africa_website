import {
  Home,
  ShoppingBag,
  Briefcase,
  Newspaper,
  Calendar,
  Building2,
  User,
  Search,
  ThumbsUp,
  Megaphone,
  MessageSquare,
  LayoutGrid,
  Ticket,
  HelpCircle,
  Settings,
} from "lucide-react";

export const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Products", href: "/products", icon: ShoppingBag },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "News", href: "/news", icon: Newspaper },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Help & FAQ", href: "/faq", icon: HelpCircle },
  { name: "Contact Us", href: "/contact", icon: MessageSquare },
];

export const userMenuItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Add Business Account", href: "/business/add", icon: Building2 },
  { name: "My Profile", href: "/profile", icon: User },
  { name: "My Searches", href: "/searches", icon: Search },
  { name: "My Likes", href: "/likes", icon: ThumbsUp },
  { name: "My Adverts", href: "/adverts", icon: Megaphone },
  { name: "My Event", href: "/my-events", icon: Calendar },
  { name: "My Chat", href: "/chat", icon: MessageSquare },
  { name: "Categories", href: "/categories", icon: LayoutGrid },
  { name: "Voucher", href: "/vouchers", icon: Ticket },
  // { name: "Help & FAQ", href: "/help", icon: HelpCircle },
  { name: "Settings", href: "/settings", icon: Settings },
];
