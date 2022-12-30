import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header role="banner">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="index.html">Brand</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample05">
            <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Recipes</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                <div className="dropdown-menu" aria-labelledby="dropdown04">
                  <a className="dropdown-item" href="#">Food Catering</a>
                  <a className="dropdown-item" href="#">Drink &amp; Beverages</a>
                  <a className="dropdown-item" href="#">Wedding &amp; Birthday</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">News</a>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item cta-btn mr-4">
                <a className="nav-link" href="#">SignUp</a>
              </li>
              <li className="nav-item cta-btn2">
                <a className="nav-link" href="#">SignIn</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </header>
    
    

    <div className="hero" style={{"backgroundImage": "url('images/hero_1.jpg')"}}></div>
    </div>
  )
}

export default Navbar