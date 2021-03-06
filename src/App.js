//import './index.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Test from './Test';

function App() {
  
  return (
    <Router>
        <Link to="/"><button className="btn btn-outline-light col-12 p-2" type="button"> To Do </button></Link>
        <Link to="/test"><button className="btn btn-outline-light col-12 p-2" type="button"> Done</button></Link>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/test" component={Test}/>
      </Switch>
      
    </Router>
  )
}

export default App;

// TODO : CHECK REACTROUTERDOM, 