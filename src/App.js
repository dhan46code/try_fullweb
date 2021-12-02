import Header_SliderImage from './Components/Header_SliderImage';
import Gallery from './Components/Gallery';
import './global.css';

function App() {
  return (
    <div className='App'>
      <header>
        <Header_SliderImage />
      </header>
      <main>
        <Gallery />
      </main>
    </div>
  );
}

export default App;
