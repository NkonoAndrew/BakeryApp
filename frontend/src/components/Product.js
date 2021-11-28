import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({imageUrl, name, description, price, productId}) => {
  return (
    <div className="product">

      <div className="productImage">
        <img src={imageUrl}
        alt="" />
      </div>
      
      <div className="product__info">
          <header>
              <h4>{name}</h4>
              <h4 className="price">${price}</h4>
            </header>
            <p className="item-text"> {description}</p>

      </div>
      <div>
      <Link to={`/product/${productId}`} className="info__button">View</Link> 
      </div>
    </div>
  );
};

export default Product;