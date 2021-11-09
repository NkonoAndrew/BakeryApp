import "./Product.css";

const Product = () => {
  return (
    <div className="product">

      <div className="productImage">
        <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
        alt="product name" />
      </div>
    
      <div className="product__info">
        <p className="info__name">Buttermilk Pancakes</p>

        <p className="info__price">$15.99</p>

        <p className="info__description">
            I'm baby woke milk wolf bitters live-edge
            blue bottle, hammock freegan cooper mug 
            whatever cold-pressed
        </p>


      </div>
    </div>
  );
};

export default Product;