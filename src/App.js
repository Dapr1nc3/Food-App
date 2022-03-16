import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './componets/Navbar/Navbar';
import UseCarousel from './componets/Carousel/Carousel';

function App() {
  return (
    <div className='App'>
     <Navigation/>
     <div className='container'>
      <UseCarousel/>
     </div>

    </div>
  );
}

export default App;
