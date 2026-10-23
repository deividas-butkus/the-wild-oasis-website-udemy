import Navigation from "@/_components/Navigation";
import Logo from "@/_components/Logo";

function Header() {
  return (
    <header className="border-b border-primary-900 px-4 py-3 sm:px-8 sm:py-5">
      <div className="flex justify-between items-center gap-4 max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
