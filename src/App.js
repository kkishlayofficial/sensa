import './App.css';
import Navbar from './components/modules/Navbar'

function App() {
  return (
    <div className="App">
       <Navbar />
      <section id="section1">
        <h1>Section 1</h1>
        {/* Add your content for Section 1 */}
      </section>
      <section id="section2">
        <h1>Section 2</h1>
        {/* Add your content for Section 2 */}
      </section>
      <section id="section3">
        <h1>Section 3</h1>
        {/* Add your content for Section 3 */}
      </section>
    </div>
  );
}

export default App;
