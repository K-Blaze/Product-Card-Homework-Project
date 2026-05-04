
import { useState } from "react";
import ProductCard from "../ProductCard";
import "../styles.css";

const PRODUCTS = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    brand: "Essence",
    category: "beauty",
    price: 9.99,
    rating: 4.94,
    stock: 5,
    description: "A popular mascara known for its volumizing and lengthening effects.",
    tags: ["beauty", "mascara"],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    ],
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    brand: "Glamour Beauty",
    category: "beauty",
    price: 19.99,
    rating: 3.28,
    stock: 44,
    description: "A versatile eyeshadow palette with a built-in mirror.",
    tags: ["beauty", "eyeshadow"],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
    ],
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getStockStatus = (stock) => {
    if (stock === 0) return "Sold Out";
    if (stock < 5) return "Low Stock";
    return "In Stock";
  };

  const filteredProducts = PRODUCTS.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (selectedProduct) {
    return (
      <div className="app">
        <button onClick={() => setSelectedProduct(null)}>⬅ Back</button>

        <h1>{selectedProduct.title}</h1>
        <img
          className="main-image"
          src={selectedProduct.thumbnail}
          alt={selectedProduct.title}
        />

        <p>{selectedProduct.description}</p>
        <p>Category: {selectedProduct.category}</p>
        <p>Rating: ⭐ {selectedProduct.rating}</p>
        <p>Brand: {selectedProduct.brand}</p>
        <p>Stock Status: {getStockStatus(selectedProduct.stock)}</p>

        <h3>Tags:</h3>
        <ul>
          {selectedProduct.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>

        <h3>More Images:</h3>
        <div className="small-images">
          {selectedProduct.images.map((img, index) => (
            <img key={index} src={img} alt={selectedProduct.title} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Product Store</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={setSelectedProduct}
            getStockStatus={getStockStatus}
          />
        ))}
      </div>
    </div>
  );
}
