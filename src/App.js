import Header from './Header'
import './App.css';
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topadvertise from './Topadvertise';
import Footer from './Footer';
import Menu from './Menu';
import SearchPage from './SearchPage'
import Airbnbhome from './Airbnbhome';
function App() {
  return (
    <div className="app">
       <Router>
       <Topadvertise/>
        <Header />

    
        <Menu/>
        <Routes>
          <Route path="/search" element={<SearchPage />}>
            
          </Route>
          <Route path="/" element={<Home />}>
          
          </Route>
          <Route path="/searchpage" element={<SearchPage/>}></Route>
          <Route path="/Airbnbyourhome" element={<Airbnbhome/>}></Route>
        </Routes>
        
        <Footer />
      </ Router>
    </div>
    
  );
}

export default App;