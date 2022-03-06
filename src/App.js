
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import AddEmp from "./pages/addemp";
import Rtl from "./pages/Rtl";
import AddHoliday from "./pages/AddHoliday";
 import AddEmployee from "./pages/AddEmployee";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import Forgot from "./pages/forgot";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";


function App() {
  return (
    <div className="App">
      <Switch>
      
      <Route exact path="/" component={SignIn} /> 
        <Route path="/addemployee" exact component={AddEmployee} />
        <Route path="/sign-in" exact component={SignIn} />
        {/* <Route path="/sign-up" exact component={Logout} /> */}
        <Route path="/forgot" exact component={Forgot}></Route>
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/tables" component={Tables} />
         <Route exact path="/addemp" component={AddEmp} />
          <Route exact path="/rtl" component={Rtl} />
          <Route exact path="/AddHoliday" component={AddHoliday} />
          {/* <Redirect from="*" to="/Tables" /> */}
        </Main>
      </Switch>
    </div>
  );
}

export default App; 
