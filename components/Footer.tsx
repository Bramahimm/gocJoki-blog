export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-dark-800 border-t border-dark-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-400">
          <p>© {currentYear} JokiGoC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
