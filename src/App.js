import './App.css';
import AboutUs from './components/modules/AboutUs';
import Footer from './components/modules/Footer';
import Navbar from './components/modules/Navbar'
import Products from './components/modules/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products/>
      {/* <AboutUs/> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
