import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <section>
          <ProductsList/>
        </section>
        <Cart/>
      </main>
    </div>
  );
}

export default App;
