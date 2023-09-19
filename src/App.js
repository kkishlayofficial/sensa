import './App.css';
import AboutUs from './components/modules/AboutUs';
import Categories from './components/modules/Category';
import Footer from './components/modules/Footer';
import Navbar from './components/modules/Navbar'
import Products from './components/modules/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Products/> */}
      <Categories/>
      <AboutUs/>
      <Footer />
    </div>
  );
}

export default App;
