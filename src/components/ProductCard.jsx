function ProductCard({ product }) {
    const discount = Math.round(
      ((product.oldPrice - product.price) / product.oldPrice) * 100
    );
  
    return (
      <div className="product-card">
        <div className="product-image">
          <span className="discount-badge">{discount}% OFF</span>
          <span className="product-emoji">{product.image}</span>
          <button className="wishlist-button" aria-label="Add to wishlist">
            ♡
          </button>
        </div>
  
        <div className="product-info">
          <p className="product-category">{product.category}</p>
  
          <h3>{product.name}</h3>
  
          <p className="product-rating">★ {product.rating} / 5</p>
  
          <p className="product-description">{product.description}</p>
  
          <div className="product-prices">
            <span className="current-price">₹{product.price}</span>
            <span className="old-price">₹{product.oldPrice}</span>
          </div>
  
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    );
  }
  
  export default ProductCard;