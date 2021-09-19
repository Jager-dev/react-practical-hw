import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from "./views/HomePage";
import Works from "./views/Works";
import Calendar from "./views/Calendar";
import Possibilities from "./views/Possibilities";



function App() {
  return (
    <Router>
      <Route exact path='/'><HomePage /></Route>
      <Route exact path='/works'><Works /></Route>
      <Route exact path='/calendar'><Calendar /></Route>
      <Route exact path='/possibilities'><Possibilities /></Route>
    </Router>
  );
}

export default App;
