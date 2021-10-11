import React from "react";



function App() {
    return (
     <div>
          {/* navbar */}
     <div className="nav_section">
    <section className="header1">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark ">
        <a class="navbar-brand" href="#">Shop<span style={{ color: 'yellow'}}>io</span></a>
          {/* <!-- <a class="navbar-brand" href="#"><span style="color:whitesmoke;">Shop<span
                style="color: yellow;">io</span></span></a> --> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home </a>
              </li>

             <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Electronic Devices
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                 <li><a className="dropdown-item" href="#">Smart Phone</a></li>
                  <li><a className="dropdown-item" href="#">Laptop</a></li>
                  <li><a className="dropdown-item" href="#">Tablets</a></li>
                  <li><a className="dropdown-item" href="#">Desktop</a></li>
                  <li><a className="dropdown-item" href="#">Smart Watches</a></li>
                </ul>
</li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Electronic Accessories
                </a>
                {<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Mobile Accessories</a></li>
                  <li><a className="dropdown-item" href="#">HeadPhone and Handsets</a></li>
                  <li><a className="dropdown-item" href="#">Computer Components</a></li>
              
                </ul>}
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              {/* <!-- <li class="nav-item">
                <a> <i class="fas fa-shopping-cart"></i> </a>
              </li>
              <li class="nav-item">
                <a> <i class="fas fa-user"></i> </a>
              </li> --> */}
            </ul>

          </div>
        </nav>
      </div>
    </section>
  </div>


  {/* navbar end */}
         </div>
    )
}