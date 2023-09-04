import { Link, NavLink, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
          alt="logo"
          onClick={() => window.location.replace("/")}
        />

        <nav>
          <NavLink
            to="/root"
            style={({ isActive }) =>
              isActive
                ? {
                    border: "2px solid #fff",
                    backgroundColor: "#e1d1f976",
                  }
                : {}
            }
          >
            Home
          </NavLink>
          <NavLink to="list" style={({ isActive }) =>
              isActive
                ? {
                    border: "2px solid #fff",
                    backgroundColor: "#e1d1f976",
                  }
                : {}
            }>List</NavLink>
          <NavLink to="contact" style={({ isActive }) =>
              isActive
                ? {
                    border: "2px solid #fff",
                    backgroundColor: "#e1d1f976",
                  }
                : {}
            }>Contact</NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};
