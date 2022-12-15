import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import { Container } from "./styles/Container";
import PreLoad from "./components/PreLoad";
import { UserProvider } from "./providers/userContext";

function App() {
  const [preloadState, setPreloadState] = useState(true);

  return (
    <UserProvider>
      <GlobalStyle />
      {preloadState && <PreLoad setPreloadState={setPreloadState} />}
      {!preloadState && (
        <div className="content">
          <Header />
          <Container>
            <section>
              <ProductsList />
            </section>
            <Cart />
          </Container>
        </div>
      )}
    </UserProvider>
  );
}

export default App;
