import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import Calendar from "../pages/Calendar";
import ECommerce from "../pages/Dashboard/ECommerce";
import FormElements from "../pages/Form/FormElements";
import FormLayout from "../pages/Form/FormLayout";
import Graficas from "../pages/Graficas/Graficas";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Tables from "../pages/Tables";
import Alerts from "../pages/UiElements/Alerts";
import Buttons from "../pages/UiElements/Buttons";

export const routes = [
  {
    index: true,
    title: 'Dashboard | TailAdmin',
    element: <ECommerce />,
  },
  {
    path: '/calendar',
    title: 'Calendar | TailAdmin',
    element: <Calendar />,
  },
  {
    path: '/profile',
    title: 'Profile | TailAdmin',
    element: <Profile />,
  },
  {
    path: '/forms/form-elements',
    title: 'Form Elements | TailAdmin',
    element: <FormElements />,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layout | TailAdmin',
    element: <FormLayout />,
  },
  {
    path: '/tables',
    title: 'Tables | TailAdmin',
    element: <Tables />,
  },
  {
    path: '/settings',
    title: 'Settings | TailAdmin',
    element: <Settings />,
  },
  {
    path: '/chart',
    title: 'Charts | TailAdmin',
    element: <Graficas />,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts | TailAdmin',
    element: <Alerts />,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons | TailAdmin',
    element: <Buttons />,
  },
  {
    path: '/auth/signin',
    title: 'Sign In | TailAdmin',
    element: <SignIn />,
  },
  {
    path: '/auth/signup',
    title: 'Sign Up | TailAdmin',
    element: <SignUp />,
  },
];
