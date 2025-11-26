import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Team from './pages/Team';
import Rules from './pages/Rules';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'team':
        return <Team />;
      case 'rules':
        return <Rules />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-20">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
