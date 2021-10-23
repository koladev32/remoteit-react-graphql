import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="container h-100">
      <Router>
              <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/" component={Home} />
              </Switch>
      </Router>
    </div>
  );
}

export default App;
