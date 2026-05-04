import React, { useState } from "react";
import "./styles.css";

const PRODUCTS = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    brand: "Essence",
    category: "beauty",
    price: 9.99,
    rating: 4.94,
    stock: 5,
    description:
      "A popular mascara known for its volumizing and lengthening effects.",
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
  {
    id: 3,
    title: "Powder Canister",
    brand: "Velvet Touch",
    category: "beauty",
    price: 14.99,
    rating: 3.82,
    stock: 59,
    description: "A setting powder that helps control shine.",
    tags: ["beauty", "powder"],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp",
    ],
  },
  {
    id: 4,
    title: "Red Lipstick",
    brand: "Chic Cosmetics",
    category: "beauty",
    price: 12.99,
    rating: 2.51,
    stock: 68,
    description: "A bold red lipstick with a creamy finish.",
    tags: ["beauty", "lipstick"],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp",
    ],
  },
  {
    id: 5,
    title: "Red Nail Polish",
    brand: "Nail Couture",
    category: "beauty",
    price: 8.99,
    rating: 3.91,
    stock: 0,
    description: "A glossy red nail polish with long-lasting color.",
    tags: ["beauty", "nails"],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp",
    ],
  },
  {
    id: 6,
    title: "Calvin Klein CK One",
    brand: "Calvin Klein",
    category: "fragrances",
    price: 49.99,
    rating: 4.85,
    stock: 17,
    description: "A classic unisex fragrance with a fresh clean scent.",
    tags: ["fragrance", "unisex"],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
    ],
  },
  {
    id: 7,
    title: "Chanel Coco Noir Eau De",
    brand: "Chanel",
    category: "fragrances",
    price: 129.99,
    rating: 2.76,
    stock: 3,
    description: "A luxury fragrance with an elegant and mysterious scent.",
    tags: ["fragrance", "luxury"],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
    ],
  },
  {
    id: 8,
    title: "Dior J'adore",
    brand: "Dior",
    category: "fragrances",
    price: 89.99,
    rating: 3.31,
    stock: 10,
    description: "A floral fragrance with a luxurious scent.",
    tags: ["fragrance", "floral"],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
    ],
  },
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");

  const getStockStatus = (stock) => {
    if (stock === 0) return "Sold Out";
    if (stock < 5) return "Low Stock";
    return "In Stock";
  };

  const filteredProducts = PRODUCTS.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()) ||
    product.brand.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())
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
        placeholder="Search by product, brand, or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="products">
        {filteredProducts.map((product) => (
          <div
            className="card"
            key={product.id}
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.thumbnail} alt={product.title} />

            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <p>⭐ {product.rating}</p>
            <p>Brand: {product.brand}</p>
            <p>Stock Status: {getStockStatus(product.stock)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
