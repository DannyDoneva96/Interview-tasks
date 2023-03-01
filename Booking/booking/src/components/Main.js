import React from 'react'

const Header = () => {
  return (<>
    <div className="header">
      <div className="headline">
        <h1 className="quote">
          A room without books is like <br /> a body without soul.
        </h1>
      </div>


      <div className="search">
        <h2 className="search-h2">Find Your Book</h2>
        <div className="search-field">
          <label htmlFor="search-input"><i class="fa-solid fa-book-open-cover"></i></label>
          <input type="text" name='search-input' className="search-input" placeholder="Enter your Book" />
          <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <img src={require('./assets/istockphoto-1140770270-612x612-removebg-preview.png')} alt="" />
      </div>
    </div>
  </>
  )
}

export default Header
