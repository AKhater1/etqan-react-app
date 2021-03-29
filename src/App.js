import {BrowserRouter, Switch, Route} from "react-router-dom";

import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import SupervisorDashboard from "./components/SupervisorDashboard"
import SupervisorReports from "./components/SupervisorReports" 


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/sign-in"><SignIn /></Route>
          <Route path="/sign-up"><SignUp /></Route>
          <Route path="/supervisor-dashboard"><SupervisorDashboard /></Route>
          <Route path="/supervisor-reports"><SupervisorReports /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
