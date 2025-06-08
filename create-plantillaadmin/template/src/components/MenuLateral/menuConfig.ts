import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaUser,
  FaWpforms,
  FaTable,
  FaCog,
  FaChartBar,
  FaCube,
  FaSignInAlt,
} from "react-icons/fa";

export interface MenuLink {
  to: string;
  label: string;
}

export interface MenuItem {
  id: string;
  to?: string;
  icon: React.ElementType;
  label: string;
  type: 'link' | 'accordion';
  links?: MenuLink[];
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const menuConfig: MenuSection[] = [
  {
    title: "MENU",
    items: [
      {
        id: "dashboard",
        to: "/",
        icon: FaTachometerAlt,
        label: "Dashboard",
        type: "link",
      },
      {
        id: "calendar",
        to: "/calendar",
        icon: FaCalendarAlt,
        label: "Calendar",
        type: "link",
      },
      {
        id: "profile",
        to: "/profile",
        icon: FaUser,
        label: "Profile",
        type: "link",
      },
      {
        id: "forms",
        icon: FaWpforms,
        label: "Forms",
        type: "accordion",
        links: [
          { to: "/forms/form-elements", label: "Form Elements" },
          { to: "/forms/form-layout", label: "Form Layout" },
          { to: "/forms/form-step-by-step", label: "Step by Step" },
          { to: "/forms/dynamic-form", label: "Dynamic Fields" },
        ],
      },
      {
        id: "tables",
        to: "/tables",
        icon: FaTable,
        label: "Tables",
        type: "link",
      },
      {
        id: "settings",
        to: "/settings",
        icon: FaCog,
        label: "Settings",
        type: "link",
      },
    ],
  },
  {
    title: "OTHERS",
    items: [
      {
        id: "chart",
        to: "/chart",
        icon: FaChartBar,
        label: "Chart",
        type: "link",
      },
      {
        id: "ui-elements",
        icon: FaCube,
        label: "UI Elements",
        type: "accordion",
        links: [
          { to: "/ui/alerts", label: "Alerts" },
          { to: "/ui/buttons", label: "Buttons" },
        ],
      },
      {
        id: "authentication",
        icon: FaSignInAlt,
        label: "Authentication",
        type: "accordion",
        links: [
          { to: "/auth/signin", label: "Sign In" },
          { to: "/auth/signup", label: "Sign Up" },
        ],
      },
    ],
  },
]; 