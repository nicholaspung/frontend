import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <Link to="/">Lambda NeXt</Link>
    <div>
      <Link to="/problems">See Problems</Link>
      <Link to="/about">About Us</Link>
      <Link to="/howitworks">How It Works</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  </>
);

export default Header;
