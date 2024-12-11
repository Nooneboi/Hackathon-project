import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.js";

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <Navbar/>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}