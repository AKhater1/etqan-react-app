import {BrowserRouter, Switch, Route} from "react-router-dom";

import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import NavbarLoggedIn from "./components/NavbarLoggedIn"


function App() {
  return (
    <div className="App">
      <NavbarLoggedIn />

      <BrowserRouter>
        <Switch>
          <Route path="/sign-in"><SignIn /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
