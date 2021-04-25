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
  const cookies = new Cookies();
  if (cookies.get("myBag") === undefined) {
    cookies.set("myBag", [], { path: "/" });
  }

  const [productCount, setProductCount] = useState(0);
  const [itemsBag] = useState([]);
  function myProductCount() {
    setProductCount(productCount + cookies.get("productCount"));
  }

  return (
    <Router>
      <div className="App ">
        <ProductsContext.Provider value={itemsBag}>
          <NavBar productCount={productCount} />
        </ProductsContext.Provider>
        <Switch>
          <Route exact path="/">
            <Redirect to="/women" />
          </Route>
          <Route path="/item/:slug">
            <AddToBasket.Provider value={{ myProductCount }}>
              <ItemInfo />
            </AddToBasket.Provider>
          </Route>
          <Route path="/:category">
            <Slider/>
            <ProductsLayout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
