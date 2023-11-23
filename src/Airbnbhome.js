import React from 'react'
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SearchIcon from "@mui/icons-material/Search";
import './Airbnbhome.css'
function Airbnbhome() {
    
  return (
    <div className='airbnbhome'>
        <div className='homeleft'>
            <h1>Airbnb it.</h1>
            <h2>You could earn</h2>
            <h2><CurrencyRupeeIcon/>20,996</h2>
            <div className="location-search">
        <input type="text" id="search-loc" placeholder="Mangalore"></input>
        
        <SearchIcon className="searchicon-loc"/>
      </div>
            
        </div>
        <div className='homeright'></div>
            hello
    </div>
  )
}

export default Airbnbhome