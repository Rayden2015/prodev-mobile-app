export type CoffeeSize = "S" | "M" | "L" | "XL";

export type CoffeeDrink = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  votes: number;
  tags?: string[];
  sizes?: CoffeeSize[];
};

export type CoffeeCategory = {
  id: string;
  label: string;
};

export type CoffeeStory = {
  id: string;
  headline: string;
  copy: string;
};

