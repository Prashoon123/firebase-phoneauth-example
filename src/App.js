import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="loading">
        <Router>
          <Redirect exact from="/" to="/login" />
          <Switch>
            <Route path="/login">
              <h1>Logging you in...</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <>
          <Router>
            <Redirect exact from="/" to="/login" />
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </Router>
        </>
      ) : (
        <>
          <Router>
            <Redirect exact from="/" to="/home" />
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
            </Switch>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
