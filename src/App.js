import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ProductCard from './components/ProductCard';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"Bienvenidos"}/>
      <ProductCard/>
     
    </div>
  );
}

export default App;
