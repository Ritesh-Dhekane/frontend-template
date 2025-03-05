import Link from 'next/link'

export default function ProductNotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-display font-bold mb-4">Product Not Found</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        The product you're looking for doesn't exist or has been removed.
      </p>
      <Link
        href="/products"
        className="bg-ravion-primary text-white px-6 py-3 rounded-lg hover:bg-ravion-primary/90 transition-colors"
      >
        Browse Products
      </Link>
    </div>
  )
} 