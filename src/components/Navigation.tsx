interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'team', label: 'Our Team' },
    { id: 'rules', label: 'Rules' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-blue-500/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-blue-400">SharkyMC</div>

            <div className="hidden md:flex space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setCurrentPage(link.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    currentPage === link.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <a
            href="https://discord.gg/Jx9tveNVDY"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold border-2 border-indigo-400 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-indigo-500/50"
          >
            Join Discord
          </a>
        </div>

        <div className="md:hidden pb-3 flex space-x-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                currentPage === link.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
