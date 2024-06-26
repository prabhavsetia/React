import React from 'react'
// import { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  // const [myStyle, setMyStyle] = useState({
  //   background: 'white',
  //   color: 'black'
  // })
  // const [btnText, setBtnText] = useState("Dark Mode")
  // const ToggleStyle = () => {
  //   if (myStyle.color === 'white') {
  //     setMyStyle({
  //       background: 'white',
  //       color: 'black'
  //     })
  //     setBtnText("Dark Mode")
  //   }
  //   else {
  //     setMyStyle({
  //       background: 'black',
  //       color: 'white'
  //     })
  //     setBtnText("Light Mode")
  //   }
  // }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/" >{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li> 
            <li className="nav-item">
              <Link className="nav-link" to="/about" >{props.aboutText}</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <button onClick={ToggleStyle} type="button" className="btn btn-outline-success" >{btnText}</button>
          </form> */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'Dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toogleMode} type="checkbox"  id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode </label>
          </div>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: "Set the Title",
  aboutText: "About"
}