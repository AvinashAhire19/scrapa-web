import React from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; // 
const Navigation = () => {
    AOS.init();

  return (
    <div  >
      <nav id="navbar" className="navbar navbar-expand-lg fixed-top sticky">
          <div className='container'>
          <a className="navbar-brand" href="#">
            <div data-aos='fade-right' data-aos-anchor-placement="top-bottom" className="logo logo-light">
                 <h2 id="LogoText">
                    <span style={{ "background": "#f0473e","border-radius": "10px"}}> SW </span>
                    <span>S</span>crapa
                    <span>W</span>holesaller
                 </h2>
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="mdi mdi-menu"></span>
          </button>
          </div>
      </nav>
    </div>
  )
}

export default Navigation
