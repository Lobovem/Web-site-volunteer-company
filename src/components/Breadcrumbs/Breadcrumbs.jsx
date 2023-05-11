import useBreadcrumbs from 'use-react-router-breadcrumbs';
import React from 'react';
import { Link } from 'react-router-dom';
import s from './Breadcrumbs.module.scss';

// export const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;

export const Breadcrumbs = () => {
  const routes = [
    { path: '/', breadcrumb: 'Головна' },
    { path: '/AboutUs', breadcrumb: 'О нас' },
    // { path: '/example', breadcrumb: 'Custom Example' },
  ];

  const breadcrumbs = useBreadcrumbs(routes);
  console.log(breadcrumbs);
  console.log(breadcrumbs[0].location.pathname);

  return (
    <div className={s.breadcrumbs}>
      {breadcrumbs.map(({ location, match, breadcrumb }) => (
        <Link
          className={location.pathname === match.pathname ? s.breadcrumbs__link : `${s.breadcrumbs__link} ${s.breadcrumbs__link_active}`}
          key={match.pathname}
          to={match.pathname}
        >
          {breadcrumb}
        </Link>
      ))}
    </div>
  );
};
