import './App.css';
import Login from './components/Login/Login';
import Home from './components/Pages/Home/Home';
import Register from './components/Register/Register';
import Setting from './components/Settings/Setting';
import Single from './components/Single/Single';
import Topbar from './components/Topbar/Topbar';
import Write from './components/Write/Write';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Register />}
        </Route>
        <Route path="/setting">
          {user ? <Setting /> : <Register />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
