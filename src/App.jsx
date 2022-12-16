import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import { Container } from "./styles/Container";
import PreLoad from "./components/PreLoad";
import { useContext } from "react";
import { CartContext } from "./providers/Cart/cartContext";

function App() {
  const [preloadState, setPreloadState] = useState(true);
  const {showModal} = useContext(CartContext)

  return (
    <>
      <GlobalStyle />
      {preloadState && <PreLoad setPreloadState={setPreloadState} />}
      {!preloadState && (
        <div className="content">
          <Header />
          <Container>
            <section>
              <ProductsList />
            </section>
            {showModal && <Cart />}
          </Container>
        </div>
      )}
    </>
  );
}

export default App;
