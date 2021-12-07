import Nav from './Components/Navbar';
import SliderImage from './Components/Header_SliderImage';
import Gallery from './Components/Gallery';
import OurPartner from './Components/OurPartner';
import './global.css';

function App() {
  return (
    <div className='App'>
      <header>
        <Nav />
        <SliderImage />
      </header>
      <main>
        <Gallery />
        <OurPartner />
      </main>
    </div>
  );
}

export default App;
