import "./_navbar.scss";
import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <section className="nav-container">
        <span className="logo">Book with us</span>
        <aside className="nav-btns">
          <button>Register</button>
          <button>Login</button>
        </aside>
      </section>
    </header>
  );
};

export default Navbar;
