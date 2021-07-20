import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [search, setSearch] = useState('');

  return (
    <div className="navbar">
      <h1 className="navbar__header">
        Crypto<span>GUY</span>
      </h1>
      <div className="navbar__search">
        <form>
          <input type="text" placeholder="Search" />
        </form>
      </div>
    </div>
  );
}

export default Navbar;
