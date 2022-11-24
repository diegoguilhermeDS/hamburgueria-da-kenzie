import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { useEffect, useState } from "react";
import { api } from "./services/api";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("");
        setProducts(response.data)
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <ProductsList products={products} currentSale={currentSale} setCurrentSale={setCurrentSale}/>
        </section>
        <Cart currentSale={currentSale}/>
      </main>
    </div>
  );
}

export default App;
