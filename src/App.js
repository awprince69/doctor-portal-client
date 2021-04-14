import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Appointment from './Component/Appointment/Appointment/Appointment';
import DashBoard from './Component/DashBoard/DashBoard/DashBoard';
import AllPatients from './Component/AllPatients/AllPatients/AllPatients';
import AddDoctor from './Component/AddDoctor/AddDoctor';
import { createContext, useState } from 'react';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import Login from './Component/Login/Login/Login';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path="/allPatients">
            <AllPatients></AllPatients>
          </PrivateRoute>
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
