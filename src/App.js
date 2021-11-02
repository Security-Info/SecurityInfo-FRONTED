
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import AboutUser from "./components/AboutUser";
import Contact from "./components/Contact";
import ContactUser from "./components/ContactUser";
import ForgPassword from "./components/ForgPassword";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Report from "./components/Report";
import NotFound from "./components/NotFound";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/ForwardPassword" exact>
          <ForgPassword />
        </Route>
        <Route path="/Register" exact>
          <Register />
        </Route>
        <Route path="/About" exact>
          <About />
        </Route>
        <Route path="/Contact" exact>
          <Contact />
        </Route>
        <Route path="/Home" exact>
          <Home />
        </Route>
        <Route path="/Report" exact>
          <Report />
        </Route>
        <Route path="/AboutUser" exact>
          <AboutUser />
        </Route>
        <Route path="/ContactUser" exact>
          <ContactUser />
        </Route>
        <Route path="/Profile" exact>
          <Profile />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;