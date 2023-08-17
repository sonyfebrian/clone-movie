import Popular from "./pages/PopularMovie";
import TopRatedMovie from "./pages/TopRatedMovie";
import PlayingNowMovie from "./pages/PlayingNowMovie";
import { useState, useEffect } from "react";

function App() {
  // const [sticky, setSticky] = useState(false);
  // const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "POPULAR", link: "#popular" },
    { name: "TOP RATED", link: "#top" },
    { name: "PLAYING NOW", link: "#playing" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // const nav = document.querySelector("nav");
      window.scrollY > 0;
    });
  }, []);

  const handleLinkClick = (event, link) => {
    event.preventDefault();
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [query, setQuery] = useState("");

  return (
    <>
      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4  flex flex-wrap items-center text-base justify-center">
            <ul className="flex items-center gap-1 py-2 text-lg">
              <li className="flex text-3xl items-center font-semibold  mb-4 md:mb-0">
                <span className="ml-3 text-xl">Netplix</span>
              </li>
              {menuLinks?.map((menu, i) => (
                <li key={i} className="px-6 hover:text-cyan-600">
                  <a
                    href={menu?.link}
                    onClick={(e) => handleLinkClick(e, menu?.link)}
                  >
                    {menu?.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Movie..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </header>{" "}
      <Popular query={query} />
      <TopRatedMovie query={query} />
      <PlayingNowMovie query={query} />
    </>
  );
}

export default App;
