import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./components/home/home";

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Home}/>
      </Router>
    </>
  );
}

export default App;
