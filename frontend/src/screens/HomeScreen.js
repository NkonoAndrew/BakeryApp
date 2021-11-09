import "./HomeScreen.css"
import React from 'react'
import Product from  '../components/Product'

const HomeScreen = () => {
    return <div className="homeScreen">
      <h2 className="homescreen__title">Menu</h2>

      <div className="homescreen__products">
        <Product />        
       

      </div>
    </div>
    
}

export default HomeScreen;
