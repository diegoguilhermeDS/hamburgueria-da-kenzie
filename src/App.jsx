import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { useEffect, useState } from "react";
import { api } from "./services/api";
import { GlobalStyle } from "./styles/global";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("");
        setProducts(response.data);
        response.data.map((dat) => dat.amount = 1)
        setFilteredProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, []);

  return (
    <div className="App">
      <GlobalStyle/>
      <Header
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        products={products}
      />
      <main>
        <section>
          <ProductsList
            products={filteredProducts}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        </section>
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </main>
    </div>
  );
}

export default App;
