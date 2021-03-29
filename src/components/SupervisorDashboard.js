import Page from "./Page"
import FixedHeader from "./FixedHeader"

function SupervisorDashboard() {
    return (
        <>
            <FixedHeader />
            <Page title={`المشرف`}>
                <div className="supervisor-details">
                    <div className="row gx-3">
                        <div className="col-3">
                            <div className="supervisor-side-counts">
                            <div className="welcome-supervisor text-center">
                                <h3>مرحبا</h3>
                                <p>محمد بن حسين الشريف</p>
                                <p>تاريخ الإنضمام <span>22/6/1440هـ</span></p>
                            </div>
                
                            <div className="supervisor-summary-counts">
                                <div className="counts">
                                <span>عدد الطلاب</span>
                                <span>100</span>
                                </div>
                                <div className="counts">
                                <span>عدد المساعدين</span>
                                <span>3</span>
                                </div>
                                <div className="counts">
                                <span>الدورات الحالية</span>
                                <span>2</span>
                                </div>
                                <div className="counts">
                                <span>الدورات المنتهية</span>
                                <span>10</span>
                                </div>
                            </div>
                            
                            <div className="manage-ads">
                                <i className="fas fa-bullhorn"></i>
                                <span>إعلانات الإدارة</span>
                                <div className="ads-details">
                                <div>
                                    <p>اجتماع بخصوص مناقشة دورة جديدة</p>
                                    <p>تاريخ: <span>22/6/1440هـ</span></p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-9">
                        <div className="supervisor-courses">

                        <div className="row">
                            <div className="col-3 text-center pt-2">
                            <h5 className="course-title">دورات بريدة</h5>
                            </div>
                            <div className="col-6 bg-white p-0 round-selection ">
                            <select>
                                <option>الرفيعة 1</option>
                            </select>
                            </div>
                            <div className="col-3 text-center pt-3 course-week-number">
                            <i className="fas fa-chevron-circle-right"></i>
                            <span>الأسبوع الثامن</span>
                            <i className="fas fa-chevron-circle-left"></i>
                            </div>
                            <div className="col-4 text-center mt-4">
                            <p>وقت الدورة: <span>عصر الثلاثاء</span></p>
                            </div>
                            <div className="col-4 text-center mt-4">
                            <p>حالة الدورة: <span>فعالة</span></p>
                            </div>
                        </div>
                        
                        <div className="row p-4 gx-5 gy-5">
                            <div className="col-4">
                            <div className="course-details text-center">
                                <h5>عدد الأوجه المحفوظة</h5>
                                <p>762</p>
                            </div>
                            </div>
                            <div className="col-4">
                            <div className="course-details text-center">
                                <h5>عدد الأوجه المحفوظة</h5>
                                <p>762</p>
                            </div>
                            </div>
                            <div className="col-4">
                            <div className="course-details text-center">
                                <h5>عدد الأوجه المحفوظة</h5>
                                <p>762</p>
                            </div>
                            </div>
                            <div className="col-4">
                            <div className="course-details text-center">
                                <h5>عدد الأوجه المحفوظة</h5>
                                <p>762</p>
                            </div>
                            </div>
                            <div className="col-4">
                            <div className="course-details text-center">
                                <h5>عدد الأوجه المحفوظة</h5>
                                <p>762</p>
                            </div>
                            </div>
                            <div className="col-4">
                            <div className="course-details text-center">
                                <h5>عدد الأوجه المحفوظة</h5>
                                <p>762</p>
                            </div>
                            </div>
                            <div className="col-4">
                            <div className="course-details text-center">
                                <h5>عدد الأوجه المحفوظة</h5>
                                <p>762</p>
                            </div>
                            </div>
                            <div className="col-4">
                            <div className="course-details text-center">
                                <h5>عدد الأوجه المحفوظة</h5>
                                <p>762</p>
                            </div>
                            </div>
                            <div className="col-4">
                            <div className="course-details text-center">
                                <h5>عدد الأوجه المحفوظة</h5>
                                <p>762</p>
                            </div>
                            </div>
                        </div>

                        </div>
                        
                    </div>
                    </div>
                </div> 
            </Page>
        </>
        
    );
  }
  
  export default SupervisorDashboard;
  