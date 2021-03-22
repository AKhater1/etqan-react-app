function SignIn() {
    return (
        <div className="row register-template">
            <div className="register-img col-4">
                <img src="images/logo-etqan-login.png" />
                <p>شعارنا أن تقرأ القرآن عن ظهر قلب</p>
            </div>
            <form className="row register-form login-form col-6">

                <div>
                    <h5>تسجيل الدخول</h5>
                    <hr />
                    <p className="welcome-again">مرحبا بعودتك</p>
                </div>
                
                <div>
                    <label className="form-label">اسم المستخدم</label>
                    <input type="text" name="name" className="form-control" placeholder="اسم المستخدم" />
                </div>

                <div>
                    <label className="form-label">كلمة المرور</label>
                    <input type="password" name="password" className="form-control" placeholder="......." />
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

                <p className="create-account">ليس لديك حساب؟ <a href="#">إنشاء حساب</a></p>
            </form>
        </div>
    );
  }
  
  export default SignIn;
  