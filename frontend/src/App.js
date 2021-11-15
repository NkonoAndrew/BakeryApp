import './App.css';
import { BrowserRouter as Router,  Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';

//Components
import Navbar from './components/Navbar';
import { Switch } from 'react-router';

const App = () => {
  return (
    <Router>
     <Navbar/> 
    <div className="App">
       <main>
         <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/login" component={LoginScreen} />
          {/* <Route path="/cart" element={CartScreen} />
          <Route path="/cart" element={CartScreen} /> */}
         </Switch>
       </main>
    </div>
    </Router>
  );
}

export default App;


