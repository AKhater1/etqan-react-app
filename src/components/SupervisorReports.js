import Page from "./Page"
import FixedHeader from "./FixedHeader"

function SupervisorReports() {
    return (
        <>
            <FixedHeader />
            <Page title={`تقرير المشرف`}>
                <div className="supervisor-details supervisor-reports">
                    <div className="supervisor-courses">
                        <div className="row">
                            <div className="col-3 text-center pt-2">
                                <select className="daily-report">
                                    <option>كشف اليوم</option>
                                </select>
                            </div>
                            <div className="col-9 bg-white p-0 round-selection">
                                <select>
                                    <option>دورة الرفيعة 1</option>
                                </select>
                                <select>
                                    <option>اختر المسار</option>
                                </select>
                                <select>
                                    <option>حالة الطالب</option>
                                </select>
                                <select>
                                    <option>الحضور</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 text-center mt-4 d-flex justify-content-evenly">
                                <p>يوم العرض: <span>الثلاثاء</span></p>
                                <p>الأسبوع: <span>الثامن</span></p>
                            </div>
                            <div className="col-4 text-center mt-4">                                     
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="كلمة البحث..." aria-label="Search" />
                                </form>
                            </div>
                        </div>                     
                    </div>
                </div> 
            </Page>
        </>       
    );
  }
  
  export default SupervisorReports;
  