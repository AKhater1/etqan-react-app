function SignUp() {
    return (
        <div className="row register-template">
            <div className="register-img col-4">
                <img src="images/logo-etqan-login.png" />
                <p>شعارنا أن تقرأ القرآن عن ظهر قلب</p>
            </div>
            <form className="row register-form col-4">
                <h5>إنشاء حساب</h5>
                <hr />
                <div>
                    <label className="form-label">اسم المستخدم</label>
                    <input type="text" name="name" className="form-control" placeholder="اسم المستخدم" />
                </div>

                <div>
                    <label className="form-label">بريدك الالكتروني</label>
                    <input type="email" name="email" className="form-control" placeholder="عنوان بريدك الالكتروني" />
                </div>

                <div>
                    <label className="form-label">المدينة</label>
                    <select className="form-select">
                        <option selected>اختر المدينة</option>
                        <option>...</option>
                    </select>
                </div>

                <div>
                    <label className="form-label">نوع الحساب</label>
                    <select className="form-select">
                        <option selected>اختر نوع الحساب</option>
                        <option>...</option>
                    </select>
                </div>
                
                <div className="col-md-6">
                    <label className="form-label">كلمة المرور</label>
                    <input type="password" name="password" className="form-control" placeholder="......." />
                </div>

                <div className="col-md-6">
                    <label className="form-label">تأكيد كلمة المرور</label>
                    <input type="password" name="password" className="form-control" placeholder="......." />
                </div>

                <div className="register-btns text-center col-md-12">
                    <button className="reg-btn btn">إنشاء حسابي</button>
                </div>

                <p className="restrictions-txt">بالضغط فوق إنشاء حسابي أوافق على <a href="#">شروط برنامج إتقان</a></p>
            </form>
        </div>
    );
  }
  
  export default SignUp
  