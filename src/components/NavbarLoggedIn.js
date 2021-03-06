import {useContext} from "react"
import StateContext from "../UserContext"
import {Link} from "react-router-dom"

function NavbarLoggedIn() {

    const setloggedIn = useContext(StateContext)

    function handleLogOut () {
        setloggedIn(false)
        localStorage.removeItem("loginToken")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
            <a className="navbar-brand" href="#"><img src="images/Logo-etqaan.png" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="كلمة البحث..." aria-label="Search" />
                </form>

                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        <i className="far fa-comment-dots"></i>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="far fa-bell"></i>
                    </a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        مرحبا محمد
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link onClick={handleLogOut} className="dropdown-item">تسجيل خروج</Link></li>
                    </ul>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
  }
  
  export default NavbarLoggedIn;
  