import logo from './logo.svg';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/navbar.js';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import Section from './components/section';


function App() {
  return (
   <div>
   
  <Navbar/>

  <div className='bgimag'>
  
  
  
        <img src="https://www.wallpapertip.com/wmimgs/50-504378_restaurant-hd-wallpaper-restaurant-hd.jpg"
          class="d-block w-100" alt="..."/>
          
       </div>

       <Section/>

<Footer/>

   </div>
  );
}

export default App;
