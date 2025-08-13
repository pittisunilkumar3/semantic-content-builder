import { useState, useEffect } from "react";
import KrislProductCard from "./KrislProductCard";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  colors: string[];
  description: string;
}

const KrislProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const latestProducts: Product[] = [
    {
      id: 5,
      name: "Shopping Bag",
      category: "Bags",
      price: "$6.99",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
      colors: ["#fbbf24", "#22c55e", "#3b82f6", "#ec4899"],
      description: "Reusable shopping bag with custom design",
      isOnSale: true
    },
    {
      id: 6,
      name: "Bucket Hat",
      category: "Apparel",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=400&fit=crop&crop=center",
      colors: ["#1f2937", "#3b82f6", "#22c55e"],
      description: "Cotton bucket hat with embroidered logo"
    },
    {
      id: 7,
      name: "Sports Water Bottle",
      category: "Drinkware",
      price: "$13.99",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop&crop=center",
      colors: ["#84cc16", "#f59e0b", "#ec4899", "#9c27b0"],
      description: "32oz sports bottle with squeeze cap"
    },
    {
      id: 8,
      name: "Round Badge",
      category: "Accessories",
      price: "$3.99",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
      colors: ["#ef4444", "#3b82f6", "#22c55e", "#f59e0b"],
      description: "Custom printed round badge or pin"
    }
  ];

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 300));
      setProducts(latestProducts);
      setIsLoading(false);
    };

    loadProducts();
  }, []);

  if (isLoading) {
    return (
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">LATEST TRENDS</h2>
            <p className="text-gray-600">Loading our latest products...</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-300 rounded-lg h-64 mb-4"></div>
                <div className="bg-gray-300 rounded h-4 mb-2"></div>
                <div className="bg-gray-300 rounded h-4 w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            LATEST TRENDS
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <KrislProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KrislProductGrid;