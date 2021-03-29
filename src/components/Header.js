function Header() {
    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-2 ">
              <img src="images/icon-start.png" />
              <a href="#">لوحة المشرف</a>
            </div>
            <div className="col-2">
              <img src="images/icon-students.png" />
              <a href="#">الطلاب</a>
            </div>
            <div className="col-2">
              <img src="images/icon-assistants.png" />
              <a href="#">المساعدين</a>
            </div>
            <div className="col-2">
              <img src="images/icon-reports.png" />
              <a href="#">الكشوف</a>
            </div>
            <div className="col-2">
              <img src="images/icon-detailed-report.png" />
              <a href="#">التقرير الفصلي</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  