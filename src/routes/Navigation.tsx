import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes
} from 'react-router-dom';

import { LazyPage1, LazyPage2,  LazyPage3 } from '../01-lazyload/pages';
import logo from '../logo.svg';



export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/lazy1" className={(navData) => navData.isActive ? 'nav-active' : '' } >Lazy 1</NavLink>
            </li>
            <li>
              <NavLink to="/lazy2"  className={(navData) => navData.isActive ? 'nav-active' : '' }>Lazy2</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3"  className={(navData) => navData.isActive ? 'nav-active' : '' }>Lazy3</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/lazy1" element={<LazyPage1/>}> 
          </Route>
          <Route path="/lazy2" element={<LazyPage2/>}>
            <h1>Users</h1>
          </Route>
          <Route path="/lazy3"element={<LazyPage3/>}>
            <h1>Home</h1> 
          </Route>
        </Routes>
      </div>
    </Router>
  );
}