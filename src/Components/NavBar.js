import React from 'react';
import { Link } from "react-router-dom";


function NavBar() {
  return (
    // <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#8BBCCC", colors: "#06283D"}}>
    //     <div className="container-fluid">
    //         {/* <div className="title"> */}
    //             <Link className="navbar-brand fs-3" to="/"><img class="logo" src="/images/gujarat-police-logo.png" alt="" width="60px"/>e-Pratikriya</Link>
    //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span class="navbar-toggler-icon"></span>
    //             </button>
    //         {/* </div> */}

            
            
    //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //             <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
    //                 <li className="nav-item">
    //                 <Link className="nav-link active" aria-current="page" href="#">Dashboard</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                 <Link className="nav-link" href="#">Generate QR Code</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                 <Link className="nav-link">Report</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                 <Link className="nav-link">Profile</Link>
    //                 </li>
    //             </ul>
    //         </div>
    //         {/* <div class="log-out">
    //             <button class="btn btn-outline-dark" type="submit">Log Out</button>
    //         </div> */}
    //     </div>
    // </nav>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Generate QR Code</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    
    )
}

export default NavBar

