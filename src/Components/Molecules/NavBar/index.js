import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">StockVoucher</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link" to="/">Etalase</Link>
        <Link className="nav-link" to="/login">Logout</Link>
  {/* <form class="container-fluid justify-content-end">
    <button class="btn btn-outline-success me-2" type="button" to="/login">Main button</button>
    {/* <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button> */}
      </div>
    </div>
  </div>
</nav>
    );
};

export default NavBar;
