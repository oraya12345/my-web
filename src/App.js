
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from './components/Header';
import Product from './components/Product';



 function App() {
   return (
     <div className="App">
     <Router>
       <Header/>
       <Switch>
        <Route exact path='/'  component={Home}/> 
       </Switch>
      </Router>
      <Product/>
     <Footer/> 
     </div>
   )
 }

export default App;
