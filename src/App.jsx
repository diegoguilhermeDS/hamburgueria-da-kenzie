import './App.css';
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
        <aside>
          
        </aside>
      </main>
    </div>
  );
}

export default App;
