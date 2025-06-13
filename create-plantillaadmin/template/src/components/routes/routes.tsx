import SignIn from "../../pages/Authentication/SignIn";
import SignUp from "../../pages/Authentication/SignUp";
import Calendar from "../../pages/Calendar";
import ECommerce from "../../pages/Dashboard/ECommerce";
import FormElements from "../../pages/Form/FormElements";
import FormLayout from "../../pages/Form/FormLayout";
import FormStepByStep from "../../pages/Form/FormStepByStep";
import DynamicFormExample from "../../pages/Form/DynamicFormExample";
import DynamicFormHookExample from "../../pages/Form/DynamicFormHookExample";
import Graficas from "../../pages/Graficas/Graficas";
import Profile from "../../pages/Profile";
import Settings from "../../pages/Settings";
import Tables from "../../pages/Tables";
import Alerts from "../../pages/UiElements/Alerts";
import Buttons from "../../pages/UiElements/Buttons";
import ComponentesIndex from "../../pages/Componentes/ComponentesIndex";
import HookFormCheckboxExamples from "../../pages/Componentes/HookFormCheckboxExamples";
import HookFormInputExamples from "../../pages/Componentes/HookFormInputExamples";
import HookFormTextareaExamples from "../../pages/Componentes/HookFormTextareaExamples";
import HookFormSelectExamples from "../../pages/Componentes/HookFormSelectExamples";
import HookFormSwitcherExamples from "../../pages/Componentes/HookFormSwitcherExamples";
import HookFormFileExamples from "../../pages/Componentes/HookFormFileExamples";
import HookFormTimeSelectorExamples from "../../pages/Componentes/HookFormTimeSelectorExamples";
import HookFormSelectBusquedaExamples from "../../pages/Componentes/SelectBusquedaFormHookExamples";
import { RouteConfig } from "./RouteConfig";

export const routes: RouteConfig[] = [
  {
    path: '/',
    title: 'eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <ECommerce />,
  },
  {
    path: '/calendar',
    title: 'Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <Calendar />,
  },
  {
    path: '/profile',
    title: 'Profile | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <Profile />,
  },
  {
    path: '/forms/form-elements',
    title: 'Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <FormElements />,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <FormLayout />,
  },
  {
    path: '/forms/form-step-by-step',
    title: 'Formulario Step by Step | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <FormStepByStep />,
  },
  {
    path: '/forms/dynamic-form',
    title: 'Formularios Dinámicos | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <DynamicFormExample />,
  },
  {
    path: '/forms/dynamic-form-hook',
    title: 'Formularios Dinámicos Hook Form | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <DynamicFormHookExample />,
  },
  {
    path: '/tables',
    title: 'Tables | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <Tables />,
  },
  {
    path: '/settings',
    title: 'Settings | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <Settings />,
  },
  {
    path: '/chart',
    title: 'Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <Graficas />,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <Alerts />,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <Buttons />,
  },
  {
    path: '/auth/signin',
    title: 'Signin | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <SignIn />,
  },
  {
    path: '/auth/signup',
    title: 'Signup | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <SignUp />,
  },
  {
    path: '/componentes',
    title: 'Biblioteca de Componentes | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <ComponentesIndex />,
  },
  {
    path: '/componentes/input-examples',
    title: 'Ejemplos de HookFormInput | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <HookFormInputExamples />,
  },
  {
    path: '/componentes/textarea-examples',
    title: 'Ejemplos de HookFormTextarea | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <HookFormTextareaExamples />,
  },
  {
    path: '/componentes/checkbox-examples',
    title: 'Ejemplos de HookFormCheckbox | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <HookFormCheckboxExamples />,
  },
  {
    path: '/componentes/select-examples',
    title: 'Ejemplos de HookFormSelect | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <HookFormSelectExamples />,
  },
  {
    path: '/componentes/switcher-examples',
    title: 'Ejemplos de HookFormSwitcher | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <HookFormSwitcherExamples />,
  },
  {
    path: '/componentes/file-examples',
    title: 'Ejemplos de HookFormFile | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <HookFormFileExamples />,
  },
  {
    path: '/componentes/time-selector-examples',
    title: 'Ejemplos de HookFormTimeSelector | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <HookFormTimeSelectorExamples />,
  },
  {
    path: '/componentes/select-busqueda-examples',
    title: 'Ejemplos de SelectBusquedaFormHook | TailAdmin - Tailwind CSS Admin Dashboard Template',
    element: <HookFormSelectBusquedaExamples />,
  },
];
