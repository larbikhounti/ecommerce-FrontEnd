import ProductsLayout from "./components/frontPage/ProductsLayout";
import NavBar from "./components/frontPage/NavBar";
import react, { useState } from "react";
export const ProductsContext = react.createContext();

function App() {
  const [productCount, setProductCount] = useState(0);
  const [itemsBag] = useState([]);
  function myProductCount(e,products) {
    setProductCount(productCount + 1);
    itemsBag.push(products)
   
  }
  return (
    <div className="App ">
       <ProductsContext.Provider value={itemsBag}>
        <NavBar productCount={productCount} />
        </ProductsContext.Provider>
        <ProductsLayout addProductCount={myProductCount} />
      
     
    </div>
  );
}


export default App;
