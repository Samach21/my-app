import './App.css';
import Head from './components/head';
import Main from './components/main';
import Login from './components/login';
import Store from './components/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Head />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/store' component={Store} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
