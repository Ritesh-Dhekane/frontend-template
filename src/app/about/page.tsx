export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We are dedicated to building modern web applications using cutting-edge technologies.
            Our template provides a solid foundation for creating scalable and maintainable
            applications with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                <li>Next.js 14</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Zustand</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Features</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                <li>Dark Mode</li>
                <li>Authentication</li>
                <li>Responsive Design</li>
                <li>SEO Optimized</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 