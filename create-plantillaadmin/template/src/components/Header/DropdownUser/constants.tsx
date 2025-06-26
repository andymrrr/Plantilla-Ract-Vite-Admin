import { UserData, MenuItemConfig } from './types';
import { 
  FaUser, 
  FaAddressBook, 
  FaCog, 
  FaSignOutAlt 
} from 'react-icons/fa';
import UserOne from '../../../images/user/user-01.png';

export const DEFAULT_USER_DATA: UserData = {
  nombre: 'Thomas Anree',
  cargo: 'UX Designer',
  avatar: UserOne
};

export const DEFAULT_MENU_ITEMS: MenuItemConfig[] = [
  {
    key: 'profile',
    label: 'Mi Perfil',
    ruta: '/profile',
    icono: <FaUser className="w-5 h-5" />
  },
  {
    key: 'contacts',
    label: 'Mis Contactos',
    ruta: '#',
    icono: <FaAddressBook className="w-5 h-5" />
  },
  {
    key: 'settings',
    label: 'Configuración',
    ruta: '/settings',
    icono: <FaCog className="w-5 h-5" />
  }
];

export const LOGOUT_ICON = <FaSignOutAlt className="w-5 h-5" />;

export const DEFAULT_LOGOUT_LABEL = 'Cerrar Sesión'; 