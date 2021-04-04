import React, {useState, useContext} from 'react';
import {Link} from "react-router-dom";
import Axios from 'axios';

import StateContext from "../UserContext"

function SignIn() {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const setloggedIn = useContext(StateContext)

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await Axios.post('https://my.etqaaan.com/api/loginclient', {username, password})            
                
                if (response.data) {
                    localStorage.setItem("loginToken", response.data.access_token)
                    setloggedIn(true)
                }

        } catch {
            console.log("There was a problem.")
        }
    }

    return (
        <div className="row register-template">
            <div className="register-img col-4">
                <img src="images/logo-etqan-login.png" />
                <p>شعارنا أن تقرأ القرآن عن ظهر قلب</p>
            </div>
            <form onSubmit={handleSubmit} className="row register-form login-form col-6">

                <div>
                    <h5>تسجيل الدخول</h5>
                    <hr />
                    <p className="welcome-again">مرحبا بعودتك</p>
                </div>
                
                <div>
                    <label className="form-label">البريد الالكتروني</label>
                    <input onChange={e=>setUsername(e.target.value)} type="email" name="email" className="form-control" placeholder="أدخل البريد الالكتروني" />
                </div>

                <div>
                    <label className="form-label">كلمة المرور</label>
                    <input onChange={e=>setPassword(e.target.value)} type="password" name="password" className="form-control" placeholder="......." />
                </div>

                <div className="form-check col-4">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                    تذكرني
                    </label>
                </div>

                <div className="col-8 forget-pass">
                    <a href="#">نسيت اسم المستخدم أو كلمة المرور؟</a>
                </div>

                <div className="register-btns text-center col-md-12">
                    <button className="reg-btn btn">تسجيل الدخول</button>
                </div>

                <p className="create-account">ليس لديك حساب؟ <Link to="/sign-up">إنشاء حساب</Link></p>
            </form>
        </div>
    );
  }
  
  export default SignIn;
  