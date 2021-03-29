import {useEffect} from 'react';
import {Link} from "react-router-dom"
import Axios from "axios"

function NavbarLoggedOut() {


    useEffect(()=>{
        async function handleSubmit() {
            try {
                const response = await Axios.post('https://my.etqaaan.com/api/loginclient', {username: "Admin@etqan", password: "Admin@etqan"})            
                    console.log(response.data)
            } catch {
                console.log("There was a problem.")
            }
        }
        handleSubmit()
    }, [])
    

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
                        <li className="nav-item">
                            <Link to="/sign-in" className="nav-link sign-in-link" aria-current="page">
                                تسجيل الدخول
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-link sign-up-link" href="#">
                                مستخدم جديد
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
  
  export default NavbarLoggedOut;
  