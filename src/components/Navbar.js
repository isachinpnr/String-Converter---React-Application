import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {


  return (

    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className={`container-fluid bg-${props.mode === 'light' ? 'white' : 'black'}`}>
          <Link to="/textbox3" className="navbar-brand " style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Textutils</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/about" className="nav-link active " aria-current="page " style={{ color: props.mode === 'light' ? 'black' : 'white' }}>About </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link " style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Contact </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle " href="/more" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                  More
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>

                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-success" type="submit" > Search</button>
        </form> */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'black' : 'white'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.navBtn}</label>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">

      </div>

    </>
  );
}
