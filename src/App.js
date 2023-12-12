import './App.css';
import logo from './logo.svg';
import Login from './screens/login/login.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import TabBar from './components/tabbar.jsx';

function App() {
  return (
    <Router>
    <Routes>
          <Route path="/">
            <Login />
          </Route>
          <Route path="*">
            <Login />
          </Route>
          <Route element={<TabBar/>} path='/auth'>
          <Route path="/home">
            <Login />
          </Route>
            {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
          </Route>
        </Routes>
  </Router>
  );
}

export default App;
