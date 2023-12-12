import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/urlap">Blogs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/adatok">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
