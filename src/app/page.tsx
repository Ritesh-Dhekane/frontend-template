import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Frontend Template</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          A modern Next.js template with TypeScript, Tailwind CSS, and more.
        </p>
      </section>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">TypeScript</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Built with TypeScript for better development experience and type safety.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Tailwind CSS</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Styled with Tailwind CSS for rapid UI development and customization.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Dark Mode</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Includes dark mode support with easy theme switching.
          </p>
        </div>
      </section>
    </div>
  );
}
