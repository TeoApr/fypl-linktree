import Header from './components/Header';
import MainButton from './components/MainButton';
import TeamGrid from './components/TeamGrid';
import './index.css';
import './components/MainButton.css';

const instagramUrl = 'https://www.instagram.com/efwaipiel.alsut?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fypl-gray to-white flex flex-col">
      <Header />
      <main className="flex-1">
        <MainButton />
        <section className="main-btn-section">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="main-btn"
          >
            Visit Our Instagram
          </a>
        </section>
        <TeamGrid />
      </main>
      <footer className="text-center text-gray-500 py-4 md:py-6 text-xs sm:text-sm bg-white border-t border-gray-100 px-4">
        <p>&copy; First Year Program Leader 2029</p>
        <p className="text-xs mt-1">Here we are, here we remain</p>
      </footer>
    </div>
  );
}

export default App; 