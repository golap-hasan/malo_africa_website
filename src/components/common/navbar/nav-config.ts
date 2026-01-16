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
  // LayoutGrid,
  Ticket,
  HelpCircle,
  // Settings,
} from "lucide-react";

export const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Products", href: "/products", icon: ShoppingBag },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "News", href: "/news", icon: Newspaper },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "FAQ", href: "/faq", icon: HelpCircle },
  { name: "Contact", href: "/contact", icon: MessageSquare },
];

export const userMenuItems = [
  // { name: "Home", href: "/", icon: Home },
  { name: "My Profile", href: "/profile", icon: User },
  { name: "My Searches", href: "/searches", icon: Search },
  { name: "My Likes", href: "/profile/my-likes", icon: ThumbsUp },
  { name: "My Adverts", href: "/profile/my-adverts", icon: Megaphone },
  { name: "My Event", href: "/profile/my-events", icon: Calendar },
  { name: "My Chat", href: "/profile/chat", icon: MessageSquare },
  // { name: "Categories", href: "/categories", icon: LayoutGrid },
  { name: "Voucher", href: "/profile/vouchers", icon: Ticket },
  // { name: "Settings", href: "/settings", icon: Settings },
  { name: "Add Business Account", href: "/create/business", icon: Building2 },
];

export const dropdownMenuItems = [
  { name: "My Profile", href: "/profile", icon: User },
  { name: "My Adverts", href: "/profile/my-adverts", icon: Megaphone },
  { name: "My Event", href: "/profile/my-events", icon: Calendar },
  // { name: "Settings", href: "/settings", icon: Settings },
];
