import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
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
