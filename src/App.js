import './App.css';
import Brand from './brands/Brand';
import Cards from './card-page/Cards';
import Category from './categories/Category';
import ContactUs from './contact-page/ContactUs';
import Feedback from './feedback/Feedback';
import Footer from './footer/Footer';
import Info from './information-page/Info';
import Contact from './main-page/Contact';
import Navbar from './navbar-page/Navbar';
import Options from './options/Options';
import Products from './products/Products';

function App() {
  return (
    <div className="App">
      <Navbar/> <Contact/> <Info/> <Products/> <Cards/> <ContactUs/> <Category/> <Options/> <Feedback/> <Brand/> <Footer/>
    </div>
  );
}

export default App;
