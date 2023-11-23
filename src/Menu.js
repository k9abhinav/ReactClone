import React from 'react'
import './Menu.css'
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import BalconyIcon from '@mui/icons-material/Balcony';
import ParkIcon from '@mui/icons-material/Park';
import DeckIcon from '@mui/icons-material/Deck';
import WeekendIcon from '@mui/icons-material/Weekend';
import CabinIcon from '@mui/icons-material/Cabin';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import CottageIcon from '@mui/icons-material/Cottage';
function Menu() {
  return (
    <div className='menu'>
        <div className='eachmenu'>
                <HolidayVillageIcon/>
            <p>Holiday Village</p>
        </div>
        <div className='eachmenu'>
                <BalconyIcon/>
            <p>Balcony View</p>
        </div>
        <div className='eachmenu'>
                <ParkIcon/>
            <p>Greenary </p>
        </div>
        <div className='eachmenu'>
                <DeckIcon/>
            <p>Private & Peace</p>
        </div>
        <div className='eachmenu'>
                <WeekendIcon/>
            <p>Weekend</p>
        </div>
        <div className='eachmenu'>
                <CabinIcon/>
            <p>Cabins</p>
        </div>
        <div className='eachmenu'>
                <WhatshotIcon/>
            <p>Trending</p>
        </div>
        <div className='eachmenu'>
                <CottageIcon/>
            <p>Cottages</p>
        </div>
    </div>
  )
}

export default Menu