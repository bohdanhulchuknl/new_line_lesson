import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>
        NAV
        <nav>
          <ul className="flex gap-2 text-green-500">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="todos">Todos</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Suspense fallback={<div>LOADING...</div>}>
          <Outlet />
        </Suspense>
      </div>
      <footer>FOOTER</footer>
    </div>
  );
};

export default Layout;
