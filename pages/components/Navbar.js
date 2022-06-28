function Navbar(props) {
  return (
    <div>
      <nav
        className={`h-16 shadow-md flex justify-between items-center px-4 fixed top-0 w-full ${
          props.darkMode ? "bg-zinc-900" : ""
        }`}>
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
          <h1 className="font-bold tracking-wide text-2xl">Portfolio</h1>
        </div>
        <div
          className={`hidden md:flex md:justify-evenly md:items-center ${
            props.darkMode ? "text-white" : "text-black"
          }`}>
          <ul className="font-semibold tracking-wide">
            <li className="inline-block mr-4 cursor-pointer">Home</li>
            <li className="inline-block mr-4 cursor-pointer">Contact</li>
            <li className="inline-block mr-4 cursor-pointer">Blog</li>
            <li className="inline-block mr-4 cursor-pointer">Showcase</li>
          </ul>
          <div className="flex items-center font-semibold tracking-wide gap-2 text-xs">
            <span>Light</span>
            <div
              onClick={props.toogleDarkMode}
              className={`w-6 h-3 bg-slate-900 rounded-md cursor-pointer ${
                props.darkMode ? "bg-white" : ""
              }`}>
              <div
                className={`w-3 h-3 rounded-full transition duration-500 ${
                  props.darkMode ? "translate-x-3 bg-slate-900" : "bg-white"
                }`}></div>
            </div>
            <span>Dark</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
