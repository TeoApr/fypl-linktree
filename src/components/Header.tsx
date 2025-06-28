import Logo from '../assets/Logo.png';

const Header = () => (
  <header className="bg-gradient-to-r from-fypl-primary to-fypl-accent text-white py-8 md:py-12 text-center shadow-lg">
    <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
      <img src={Logo} alt="FYPL Organization Logo" className="h-16 md:h-24 w-auto mb-3 md:mb-4 drop-shadow-lg" />
      <p className="text-base sm:text-lg md:text-xl font-light mb-2 opacity-90">
        First Year Program Leader
      </p>
      <p className="text-sm sm:text-base md:text-lg opacity-80 px-2">
        Freshmen's Starter Pack for FYP 🌟
      </p>
    </div>
  </header>
);

export default Header; 
