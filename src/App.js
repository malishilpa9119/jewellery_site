import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Homes/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>

        {/* <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/photogallery' element={<Photogallery/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;
