import type { CoffeeDrink, CoffeeCategory, CoffeeStory } from "@/src/types";

export const COFFEE_CATEGORIES: CoffeeCategory[] = [
  { id: "espresso", label: "Espresso" },
  { id: "latte", label: "Latte" },
  { id: "cappuccino", label: "Cappuccino" },
  { id: "tea", label: "Tea" },
  { id: "special", label: "Special" },
];

export const FEATURED_DRINK: CoffeeDrink = {
  id: "velvet-mocha",
  name: "Velvet Mocha",
  description: "Rich espresso with dark cocoa and steamed oat milk.",
  price: 4.8,
  image:
    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
  rating: 4.9,
  votes: 268,
  tags: ["New", "Limited"],
  sizes: ["S", "M", "L"],
};

export const RECOMMENDED_DRINKS: CoffeeDrink[] = [
  {
    id: "iced-caramel-latte",
    name: "Iced Caramel Latte",
    description: "Cold brew, caramel drizzle, topped with cold foam.",
    price: 5.2,
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=700&q=80",
    rating: 4.7,
    votes: 198,
    tags: ["Cold", "Best Seller"],
    sizes: ["M", "L"],
  },
  {
    id: "classic-flat-white",
    name: "Classic Flat White",
    description: "Silky microfoam over a double ristretto shot.",
    price: 4.4,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80",
    rating: 4.8,
    votes: 324,
    tags: ["Hot", "House Blend"],
    sizes: ["S", "M"],
  },
  {
    id: "matcha-cream",
    name: "Matcha Cream",
    description: "Ceremonial grade matcha with vanilla sweet cream.",
    price: 5.7,
    image:
      "https://images.unsplash.com/photo-1527169402691-feff5539e52c?auto=format&fit=crop&w=700&q=80",
    rating: 4.6,
    votes: 142,
    tags: ["Seasonal"],
    sizes: ["M", "L"],
  },
];

export const COFFEE_STORIES: CoffeeStory[] = [
  {
    id: "farmer-spotlight",
    headline: "Farmer Spotlight",
    copy: "Meet Maria, the producer behind our single origin beans from Colombia.",
  },
  {
    id: "brew-guide",
    headline: "Brew Guide",
    copy: "Learn how our baristas craft the perfect pour-over at home.",
  },
];

