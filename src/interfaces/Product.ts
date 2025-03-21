interface Review {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  reviews: Review[];
  images: string[];
  thumbnail: string;
}
