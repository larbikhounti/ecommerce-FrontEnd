import ProductsLayout from "./components/frontPage/ProductsLayout";
import NavBar from "./components/frontPage/NavBar";
import react, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ItemInfo from "./components/item/ItemInfo";
import Cookies from "universal-cookie";
import  Slider  from "./components/item/Slider";
export const ProductsContext = react.createContext();
export const AddToBasket = react.createContext();

function App() {
  let [productCount, setProductCount] = useState(0);
  const [itemsBag] = useState([]);
  const [filterby,setfilterby] = useState("");
  const cookies = new Cookies();

  if (cookies.get("myBag") === undefined) {
    cookies.set("myBag", [], { path: "/" });
  }else{
    
    
  }

  function myProductCount() {
    let pro = cookies.get("myBag");
    setProductCount(productCount + pro.length + 1);
    console.log("count adddd "+ productCount)
  }
  function search(e) {
    if(e){
      setfilterby(e.target.value)
      console.log(filterby)
    }
    
  }
  
  return (
    <Router>
      <div className="App ">
        <ProductsContext.Provider value={itemsBag}>
          <NavBar productCount={productCount} search={search} />
        </ProductsContext.Provider>
        <Switch>
          <Route exact path="/">
            <Redirect to="/women" />
          </Route>
          <Route path="/item/:slug">
            <AddToBasket.Provider value={{ myProductCount }}>
              <ItemInfo myProductCount={myProductCount} />
            </AddToBasket.Provider>
          </Route>
          <Route path="/:category">
            <Slider/>
            <ProductsLayout filterby={filterby}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
