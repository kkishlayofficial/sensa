import './App.css';
import AboutUs from './components/modules/AboutUs';
import Footer from './components/modules/Footer';
import Navbar from './components/modules/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutUs/>
      <Footer />
    </div>
  );
}

export default App;
