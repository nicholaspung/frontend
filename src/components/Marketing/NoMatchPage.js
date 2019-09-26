import React from "react";
import { Link } from "react-router-dom";

const NoMatchPage = () => (
  <h3 style={{ minHeight: window.innerHeight - 10.05 * 16 }}>
    404 - Not Found. Click <Link to="/">here</Link> to go to the Homepage.
  </h3>
);

export default NoMatchPage;
