import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import MoreProducts from './Pages/MoreProducts/MoreProducts/MoreProducts';
import AddProducts from './Pages/AddProducts/AddProducts';
import Header from '../../Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
       
      <Switch>
     <Header></Header>
      <Route path="/home">
            <Home />
          </Route>
          <Route path="/moreproducts">
            <MoreProducts />
          </Route>
          <Route path="/addproducts">
            <AddProducts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
