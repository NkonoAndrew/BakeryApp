import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';

//Components
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="App">
       <main>
         <Routes>
          <Route path="/" element={HomeScreen} />
          <Route path="/cart" element={CartScreen} />
          <Route path="/cart" element={CartScreen} />
          {/* <Route path="/cart" element={CartScreen} />
          <Route path="/cart" element={CartScreen} /> */}

         </Routes>
       </main>
    </div>
    </BrowserRouter>
  );
}

export default App;


