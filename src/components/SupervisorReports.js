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
                        <div className="row supervisor-reports-search">
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
                        <div className="students-report">
                            <div className="row">
                                <div className="col-3 text-center p-2 select-day">
                                    <i class="far fa-calendar-alt"></i>
                                    <span>حدد اليوم</span>
                                </div>
                                <div className="col-9 space"></div>
                            </div>
                            <div class="toast align-items-center m-4" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="d-flex">
                                    <div class="toast-body">
                                    لمعرفة تقرير الطالب المفصل اضغط على اسمه
                                </div>
                                    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                            </div>
                            <div className="student-details p-4">
                                <div className="row border-bottom">
                                    <div className="col-4">
                                        <span>اسم الطالب: </span>
                                        <a href="#">عبدالله بن صالح الشريف</a>
                                    </div>
                                    <div className="col-3">
                                        <span>رقم الطالب: </span>
                                        <span href="#">416037</span>
                                    </div>
                                    <div className="col-3">
                                        <span>المسار: </span>
                                        <span href="#">الحفظ على سنتين</span>
                                    </div>
                                    <div className="col-2">
                                        <i class="far fa-edit"></i>
                                        <i class="far fa-trash-alt"></i>
                                    </div>
                                </div>
                                <div className="row p-3">
                                    <div className="col-2 d-flex flex-column align-items-center">
                                        <div className="student-state">
                                            <span>حالة الطالب: </span>
                                            <span>منتظم</span>
                                        </div>
                                        <div className="attendance-state">
                                            <span>حالة الحضور: </span>
                                            <span>حاضر</span>
                                        </div>
                                    </div>
                                    <div className="col-10">
                                        <div className="table-responsive">
                                            <table class="table text-center">
                                                <thead class="table-dark">
                                                    <th scope="col">السورة</th>
                                                    <th scope="col">أرقام الأوجه</th>
                                                    <th scope="col">عدد الأوجه</th>
                                                    <th scope="col">السماع</th>
                                                    <th scope="col">التلاوة</th>
                                                    <th scope="col">الإتقان</th>
                                                    <th scope="col">التكرار</th>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>النور</td>
                                                        <td>408 : 410</td>
                                                        <td>3</td>
                                                        <td>3</td>
                                                        <td>10</td>
                                                        <td>3</td>
                                                        <td>40</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="table-responsive">
                                            <table class="table text-center">
                                            <thead class="table-dark">
                                                    <th >تكرار أمس</th>
                                                    <th >الربط</th>
                                                    <th >المراجعة</th>
                                                    <th >يوم عرض</th>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>20</td>
                                                        <td>40</td>
                                                        <td>لا</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
  
  export default SupervisorReports;
  