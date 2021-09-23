import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./components/home/home";
import NewItem from "./components/newItem/newItem";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/newitem" component={NewItem}/>
      </Router>
    </>
  );
}

export default App;
