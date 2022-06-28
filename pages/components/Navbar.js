function Navbar() {
  return (
    <div>
      <nav className="h-16 shadow-md flex justify-between items-center px-4 fixed top-0 w-full">
        <div className="font-semibold tracking-wide">
          <h1>Portfolio</h1>
        </div>
        <div className="hidden md:flex md:justify-evenly md:items-center">
          <ul className="font-semibold tracking-wide">
            <li className="inline-block mr-4 cursor-pointer">Home</li>
            <li className="inline-block mr-4 cursor-pointer">Contact</li>
            <li className="inline-block mr-4 cursor-pointer">Blog</li>
            <li className="inline-block mr-4 cursor-pointer">Showcase</li>
          </ul>
          <div className="flex items-center font-semibold tracking-wide gap-2 text-xs">
            <span>Light</span>
            <div className="w-6 h-3 bg-slate-900 rounded-md cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
            <span>Dark</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
