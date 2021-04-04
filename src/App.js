import {useState} from "react"
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import StateContext from "./UserContext"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import SupervisorDashboard from "./components/SupervisorDashboard"
import SupervisorReports from "./components/SupervisorReports" 
import NavbarLoggedIn from "./components/NavbarLoggedIn";

function App() {

  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("loginToken")))

  console.log(loggedIn)
  return (
    <StateContext.Provider value={setLoggedIn}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {loggedIn ? <SupervisorDashboard /> : <SignIn />}
          </Route>
          <Route path="/sign-up"><SignUp /></Route>
          <Route path="/supervisor-dashboard"><SupervisorDashboard /></Route>
          <Route path="/supervisor-reports"><SupervisorReports /></Route>
        </Switch>
      </BrowserRouter>
    </StateContext.Provider>
  );
}

export default App;
