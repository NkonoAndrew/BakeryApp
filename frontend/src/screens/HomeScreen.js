import "./HomeScreen.css"
import React from 'react'
import { useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";



//components
import Product from  '../components/Product'

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);


    return <div className="homeScreen">
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
    
}

export default HomeScreen;
