import React from 'react'
import IphoneFrame from '../images/Screens/iphone-frame.svg'
import ScreenBalance from '../images/Screens/screen-balance.svg'
import ScreenBudget from '../images/Screens/screen-budget.svg'
import ScreenTransfer from '../images/Screens/screen-transfer.svg'
import ScreenCards from '../images/Screens/screen-cards.svg'
import ScreenLaptop from '../images/Screens/screen-cards-laptop.svg'

const Carousel = () => {
  return (
    <div className="screens">

    <div id="iphone-frame">
    <img src={IphoneFrame} alt=""/></div>

<div id="balance-screen">
    <img src={ScreenBalance} alt=""/></div>

   <div id="budget-screen"> 
    <img src={ScreenBudget} alt=""/></div>
   
   <div id="transfer-screen">
    <img src={ScreenTransfer} alt=""/></div>
   
    <div id="cards-screen">
    <img src={ScreenCards} alt=""/></div>

    <div id="cards-screen-laptop">
        <img src={ScreenLaptop} alt=""/>
    </div>
</div>
  )
}

export default Carousel