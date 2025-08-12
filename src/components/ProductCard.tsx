import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  colors: string[];
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-secondary/20">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white text-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
        >
          <Heart 
            className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} 
          />
        </Button>

        {/* Category Badge */}
        <Badge 
          variant="secondary" 
          className="absolute top-2 left-2 bg-primary text-primary-foreground"
        >
          {product.category}
        </Badge>
      </div>

      <CardContent className="p-4">
        {/* Product Name */}
        <h3 className="font-semibold text-lg mb-2 line-clamp-1 text-card-foreground">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Color Options */}
        <div className="flex items-center space-x-1 mb-3">
          <span className="text-xs text-muted-foreground mr-2">Colors:</span>
          {product.colors.map((color, index) => (
            <button
              key={index}
              className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                selectedColor === color 
                  ? 'border-primary scale-110' 
                  : 'border-border hover:border-primary/50'
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
              aria-label={`Select color ${color}`}
            />
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            {product.price}
          </span>
          <span className="text-xs text-muted-foreground">
            Starting from
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-primary hover:bg-primary-hover text-primary-foreground transition-colors duration-200"
          onClick={() => {
            // Add to cart functionality would go here
            console.log('Added to cart:', product.name, 'Color:', selectedColor);
          }}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;