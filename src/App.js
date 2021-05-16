import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Webinar from './components/Webinar/Webinar';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <nav className="sticky-top nav-style bg-dark">
          <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/webinar">Webinar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Blogs">Blogs</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/webinar">
            <Webinar></Webinar>
          </Route>
          <Route path="/Blogs">
            <Blogs></Blogs>
          </Route>
        </Switch>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
