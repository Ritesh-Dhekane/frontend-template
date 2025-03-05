import { Product } from '@/types/product'

export const products: Product[] = [
  {
    id: 'classic-tee-1',
    name: 'Classic Cotton T-Shirt',
    description: 'Premium cotton t-shirt perfect for custom designs',
    price: 1999,
    category: 'apparel',
    subCategory: 'tshirts',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800',
    ],
    customizable: true,
    minOrder: 1,
    colors: ['white', 'black', 'navy'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: 'premium-hoodie-1',
    name: 'Premium College Hoodie',
    description: 'Warm and comfortable hoodie for campus life',
    price: 3999,
    category: 'apparel',
    subCategory: 'hoodies',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800',
    ],
    customizable: true,
    minOrder: 1,
    colors: ['gray', 'black', 'navy', 'maroon'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    rating: 4.8,
    reviews: 95
  },
  {
    id: 'student-planner-1',
    name: 'Student Academic Planner',
    description: 'Stay organized throughout your academic year with our comprehensive student planner. Features dedicated spaces for assignments, exams, and extracurricular activities.',
    price: 599,
    images: [
      'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800',
      'https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=800',
      'https://images.unsplash.com/photo-1506784926709-22f1ec395907?w=800',
      'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800',
    ],
    details: [
      'Monthly and weekly planning pages',
      'Assignment tracker',
      'Exam schedule',
      'Goal setting section',
      'Study time log',
      'Premium 100 GSM paper',
      'Hardcover binding',
      'Bookmark ribbons'
    ],
    category: 'stationery'
  },
  {
    id: 'custom-notebook-1',
    name: 'Personalized Notebook Set',
    description: 'Set of 3 customizable notebooks with premium paper',
    price: 29.99,
    category: 'stationery',
    subCategory: 'notebooks',
    images: [
      'https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=800',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800',
    ],
    customizable: true,
    minOrder: 1,
    colors: ['pastel', 'earth', 'bright'],
    inStock: true,
    rating: 4.6,
    reviews: 167
  },
  {
    id: 'team-jersey-1',
    name: 'Custom Team Jersey',
    description: 'High-quality sports jersey for teams and clubs',
    price: 34.99,
    category: 'apparel',
    subCategory: 'jerseys',
    images: [
      'https://images.unsplash.com/photo-1580089595767-98745a3f7c9b?w=800',
      'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800',
    ],
    customizable: true,
    minOrder: 5,
    colors: ['white', 'red', 'blue', 'green'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    rating: 4.9,
    reviews: 82
  },
  {
    id: 'eco-bag-1',
    name: 'Eco-Friendly Tote Bag',
    description: 'Sustainable canvas tote bag for everyday use',
    price: 15.99,
    category: 'packaging',
    subCategory: 'bags',
    images: [
      'https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?w=800',
      'https://images.unsplash.com/photo-1605217613423-0a61fb8a7bc1?w=800',
    ],
    customizable: true,
    minOrder: 1,
    colors: ['natural', 'black', 'navy'],
    inStock: true,
    rating: 4.7,
    reviews: 156
  }
]

export const getProductById = (id: string) => {
  return products.find(product => product.id === id)
}

export const getAllProducts = () => {
  return products
}

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category)
} 