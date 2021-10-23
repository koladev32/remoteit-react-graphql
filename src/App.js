import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Router>
          <div>
              <Switch>
                  <Route exact path="/login" component={Login} />
              </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
