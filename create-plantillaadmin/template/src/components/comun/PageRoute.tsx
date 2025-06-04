// components/PageRoute.tsx
import { ReactNode } from 'react';
import { Route } from 'react-router-dom';
import PageTitle from './PageTitle';


interface PageRouteProps {
  path?: string;
  index?: boolean;
  title: string;
  element: ReactNode;
}

const PageRoute = ({ path, index, title, element }: PageRouteProps) => {
  const contenido = (
    <>
      <PageTitle title={title} />
      {element}
    </>
  );

  return index ? (
    <Route index element={contenido} />
  ) : (
    <Route path={path} element={contenido} />
  );
};

export default PageRoute;
