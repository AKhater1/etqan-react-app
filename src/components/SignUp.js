import React, {useState} from 'react';
import Axios from 'axios';
import Countries from ".././Countries"

function SignUp() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [country, setCountry] = useState()
    const [city, setCity] = useState()
    

    async function handleSubmit(e){
        e.preventDefault()
        try{
            await Axios.post('https://myapi.etqaaan.com/api/users/register', {email, name, password, country, city})
            console.log("User was successfully created.")
        }catch(e){
            console.log("Error")
        }
    }

    // function Country() {
    //     for (let country of Object.values(Countries)) {
    //         return country
    //     }
    // }

    const countriesName = Object.values(Countries)
 
    return (
        <div className="row register-template">
            <div className="register-img col-4">
                <img src="images/logo-etqan-login.png" />
                <p>شعارنا أن تقرأ القرآن عن ظهر قلب</p>
            </div>
            <form onSubmit={handleSubmit} className="row register-form col-4">
                <h5>إنشاء حساب</h5>
                <hr />
                <div>
                    <label className="form-label">اسم المستخدم</label>
                    <input onChange={e=>setName(e.target.value)} type="text" name="name" className="form-control" placeholder="اسم المستخدم" />
                </div>

                <div>
                    <label className="form-label">بريدك الالكتروني</label>
                    <input onChange={e=>setEmail(e.target.value)} type="email" name="email" className="form-control" placeholder="عنوان بريدك الالكتروني" />
                </div>

                {/* <div>
                    <label className="form-label">الدولة</label>
                    <input onChange={e=>setCountry(e.target.value)} type="text" name="country" className="form-control" placeholder="اختر الدولة" />
                </div> */}

                <div>
                    <label className="form-label">الدولة</label>
                    <select onChange={e=>setCountry(e.target.value)} className="form-select" placeholder="اختر الدولة">
                        <option selected>اختر الدولة</option>
                        {
                            countriesName.map(country => {
                                return <option>{country}</option>
                            })
                        }
                    </select>
                </div>

                <div>
                    <label className="form-label">المدينة</label>
                    <input onChange={e=>setCity(e.target.value)} type="text" name="city" className="form-control" placeholder="اكتب اسم مدينتك" />
                </div>

                {/* <div>
                    <label className="form-label">نوع الحساب</label>
                    <select className="form-select">
                        <option selected>اختر نوع الحساب</option>
                        <option>...</option>
                    </select>
                </div> */}
                
                <div className="col-md-6">
                    <label className="form-label">كلمة المرور</label>
                    <input type="password" name="password" className="form-control" placeholder="......." />
                </div>

                <div className="col-md-6">
                    <label className="form-label">تأكيد كلمة المرور</label>
                    <input onChange={e=>setPassword(e.target.value)} type="password" name="password" className="form-control" placeholder="......." />
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
  