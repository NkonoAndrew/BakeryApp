import "./HomeScreen.css"
import React from 'react'
import { useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";

import { useAuth0 } from '@auth0/auth0-react';

//components
import Product from  '../components/Product'

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  if(isAuthenticated) {
    return (<div className="homeScreen">
      <h2 className="homescreen__title">Menu Options</h2>
      <div className = "underline" ></div>

      <div className="homescreen__products">
      {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))
        )}        
      </div>
    </div>
    )
  }else{
    return <div> Login to Browse Menu </div>
  }
    
}

export default HomeScreen;
