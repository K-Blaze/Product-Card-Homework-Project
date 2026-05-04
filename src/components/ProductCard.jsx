export default function ProductCard({ product, onSelect, getStockStatus }) {
    return (
      <div className="card" onClick={() => onSelect(product)}>
        <img src={product.thumbnail} alt={product.title} />
  
        <h3>{product.title}</h3>
        <p>{product.category}</p>
        <p>${product.price}</p>
        <p>⭐ {product.rating}</p>
        <p>Brand: {product.brand}</p>
        <p>Stock Status: {getStockStatus(product.stock)}</p>
      </div>
    );
  }
