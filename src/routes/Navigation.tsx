
import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  Navigate
} from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';


export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <Router> 
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              {
                routes.map( ({ to,name}) => (
                  <li key={to}>
                    <NavLink to={to} className={({isActive}) => isActive ? 'nav-active' : '' } >{name}</NavLink>
                  </li>
                ))
              }           
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            {
              routes.map( ({path, Component}) => (
                <Route key={path} path={path} element={ <Component/> }>
                </Route>  
              ))
            }
            <Route path={'/*'} element={ <Navigate to={ routes[0].to} replace />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
   
  );
}