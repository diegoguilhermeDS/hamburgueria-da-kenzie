import React, { useContext } from "react";
import Cart from "../../components/Cart";
import Header from "../../components/Header";
import ProductsList from "../../components/ProductsList";
import { CartContext } from "../../providers/Cart/cartContext";
import { Container } from "../../styles/Container";

const Home = () => {
  const { showModal } = useContext(CartContext);

  return (
    <div className="content">
      <Header />
      <Container>
        <section>
          <ProductsList />
        </section>
        {showModal && <Cart />}
      </Container>
    </div>
  );
};

export default Home;
