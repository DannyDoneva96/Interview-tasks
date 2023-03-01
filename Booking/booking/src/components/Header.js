import React from 'react'

const Header = () => {
  return (
    <div className="header">
        <ul className="navbar">
        <li className="options-nav">Home</li>
        <li className="options-nav">Books</li>
        <label htmlFor="search-bar"><i class="fa-solid fa-magnifying-glass"></i></label>
        <input  name='search-bar' id="search-bar" type="text" className="search-bar" />
        </ul>
      
    </div>
  )
}

export default Header
