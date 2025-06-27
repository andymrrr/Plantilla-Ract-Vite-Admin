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
  FaEdit,
  FaLayerGroup,
  FaStepForward,
  FaExclamationTriangle,
  FaPlay,
  FaKey,
  FaUserPlus,
  FaPuzzlePiece,
  FaCheckSquare,
  FaKeyboard,
  FaAlignLeft,
  FaCaretDown,
  FaToggleOn,
  FaFile,
  FaClock,
  FaSearch,
  FaHome,
  FaCogs,
  FaCode,
} from "react-icons/fa";

// ✅ USAR TIPOS CENTRALIZADOS - No duplicar interfaces
import { MenuSection } from './core/types';

export const menuConfig: MenuSection[] = [
  {
    id: 'main-menu',
    title: "MENU PRINCIPAL",
    order: 1,
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
          { to: "/forms/form-elements", label: "Form Elements", icon: FaEdit },
          { to: "/forms/form-layout", label: "Form Layout", icon: FaLayerGroup },
          { to: "/forms/form-step-by-step", label: "Step by Step", icon: FaStepForward },
          { to: "/forms/formulario-completo", label: "Formulario Completo", icon: FaWpforms },
        ],
      },
      {
        id: "componentes",
        icon: FaPuzzlePiece,
        label: "Componentes",
        type: "accordion",
        badge: {
          text: "Nuevo",
          variant: "success"
        },
        links: [
          { to: "/componentes", label: "Biblioteca Completa", icon: FaHome },
          { to: "/componentes/input-examples", label: "HookForm Input", icon: FaKeyboard },
          { to: "/componentes/textarea-examples", label: "HookForm Textarea", icon: FaAlignLeft },
          { to: "/componentes/checkbox-examples", label: "HookForm Checkbox", icon: FaCheckSquare },
          { to: "/componentes/select-examples", label: "HookForm Select", icon: FaCaretDown },
          { to: "/componentes/switcher-examples", label: "HookForm Switcher", icon: FaToggleOn },
          { to: "/componentes/file-examples", label: "HookForm File", icon: FaFile },
          { to: "/componentes/time-selector-examples", label: "Time Selector", icon: FaClock },
          { to: "/componentes/select-busqueda-examples", label: "Select Búsqueda", icon: FaSearch },
          { to: "/componentes/dinamico-examples", label: "HookForm Dinámico", icon: FaCogs },
          { to: "/componentes/step-by-step-examples", label: "Step by Step", icon: FaStepForward },
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
    id: 'other-menu',
    title: "OTROS",
    order: 2,
    items: [
      {
        id: "chart",
        to: "/chart",
        icon: FaChartBar,
        label: "Gráficas",
        type: "link",
      },
      {
        id: "ui-elements",
        icon: FaCube,
        label: "UI Elements",
        type: "accordion",
        links: [
          { to: "/ui/alerts", label: "Alerts", icon: FaExclamationTriangle },
          { to: "/ui/buttons", label: "Buttons", icon: FaPlay },
          { to: "/ui/tooltips", label: "Tooltips", icon: FaCode },
        ],
      },
      {
        id: "authentication",
        icon: FaSignInAlt,
        label: "Authentication",
        type: "accordion",
        permissions: ['auth:view'],
        links: [
          { 
            to: "/auth/signin", 
            label: "Sign In", 
            icon: FaKey,
            permissions: ['auth:signin']
          },
          { 
            to: "/auth/signup", 
            label: "Sign Up", 
            icon: FaUserPlus,
            permissions: ['auth:signup']
          },
        ],
      },
    ],
  },
];

// Funciones helper para compatibilidad con código existente
export const getMenuSections = () => menuConfig;
export const getFullMenuConfig = () => ({
  version: '1.0.0',
  lastUpdated: new Date(),
  sections: menuConfig
}); 