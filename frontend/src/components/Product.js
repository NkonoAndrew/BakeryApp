import "./Product.css";

const Product = ({imageUrl, name, description, price}) => {
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

            <div className="quantityandCart">
              <p className="quantity"> Quantity:
                  <select className="select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
              </p>

              <p>
                <button type="button" className="addtoCart">Add to Cart</button>
              </p>
            </div>
      </div>
    </div>
  );
};

export default Product;