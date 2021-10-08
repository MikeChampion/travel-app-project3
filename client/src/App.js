import Navbar from "./components/Navbar";
import Activity from "./components/Activity";
import Modal from "react-modal";
import Itinerary from "./components/Itinerary";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";

Modal.setAppElement('#root')

function App() {
    return (
        <Router>
          <main className="flex flex-col items-center w-full">
              <Navbar />
              <Switch >
                  <Redirect exact from="/" to="/activities"></Redirect>
                  <Route path="/activities" component={Activity}></Route>
                  <Route path="/itinerary" component={Itinerary}></Route>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/logout" component={Activity}></Route>
              </Switch>
          </main>
      </Router>
    );
}

export default App;
