import ProductsLayout from "./components/frontPage/ProductsLayout";
import NavBar from "./components/frontPage/NavBar";
import react, { useState } from "react";
export const ProductsContext = react.createContext();

function App() {
  const [productCount, setProductCount] = useState(0);
  function myProductCount() {
    setProductCount(productCount + 1);
    console.log(productCount);
  }
  return (
    <div className="App ">
      <ProductsContext.Provider value={"black"}>
        <NavBar productCount={productCount} />
        <ProductsLayout addProductCount={myProductCount} />
      </ProductsContext.Provider>
    </div>
  );
}

export default App;
