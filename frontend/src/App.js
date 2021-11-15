import './App.css';
import { BrowserRouter as Router,  Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';

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
          <Route exact path="/product/:id" component={ProductScreen} />
          
         </Switch>
       </main>
    </div>
    </Router>
  );
}

export default App;


