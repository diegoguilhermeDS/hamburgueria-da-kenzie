import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { useEffect, useState } from "react";
import { api } from "./services/api";
import { GlobalStyle } from "./styles/global";
import { Container } from "./styles/Container";
import PreLoad from "./components/PreLoad";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [preloadState, setPreloadState] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("");
        setProducts(response.data);
        response.data.map((dat) => (dat.amount = 1));
        setFilteredProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      {/* {preloadState && <PreLoad setPreloadState={setPreloadState} />} */}
      {!preloadState && (
        <div className="content">
          <Header
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
            products={products}
          />
          <Container>
            <section>
              <ProductsList
                products={filteredProducts}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
              />
            </section>
            <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
          </Container>
        </div>
      )}
    </div>
  );
}

export default App;
