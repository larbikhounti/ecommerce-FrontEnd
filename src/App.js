import ProductsLayout from "./components/frontPage/ProductsLayout";
import NavBar from "./components/frontPage/NavBar";
import react, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemInfo from "./components/item/ItemInfo";
 export const ProductsContext = react.createContext();
 export const AddToBasket = react.createContext();
 
function App() {
  const [productCount, setProductCount] = useState(0);
  const [itemsBag] = useState([]);
  const [itemsInfo,setItemInfo] = useState({});
  function myProductCount(CurrentProduct) {
    setProductCount(productCount + 1);
    itemsBag.push(CurrentProduct);
    console.log(itemsBag)
  }
  function saveProduct(product) {
    setItemInfo(product)
  }
  return (
    <Router>
      <div className="App ">
        <ProductsContext.Provider value={itemsBag}>
          <NavBar productCount={productCount} />
        </ProductsContext.Provider>

        <Switch>
          <Route path="/item/:id">
          <AddToBasket.Provider value={{myProductCount,itemsInfo}}>
            <ItemInfo/>
            </AddToBasket.Provider>
          </Route>
          <Route path="/users"></Route>
          <Route path="/">
            <ProductsLayout addProductCount={saveProduct} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
