// import React from 'react'

// export default function Navbar(props) {
//     return (
//         <div>

//         </div>
//     )
// }


import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-warning
">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img className="logo" src="/logo192.png" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/technews">Tech News</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tech Q&A
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">DSA</a></li>
                                    <li><a className="dropdown-item" href="/">Web development</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Android Development</a></li>
                                </ul>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>

                        </ul>
                        <Link to="/signIn"><button type="button" class="btn mx-1 btn-primary">Sign-in</button></Link>
                        <Link to="/signUp"><button type="button" class="btn mx-1 btn-success">Sign-up</button></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
