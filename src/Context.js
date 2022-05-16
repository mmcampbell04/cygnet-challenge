import { useState, useEffect, createContext } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [searchResults, setSearchResults] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);

  // determine which parent nav to show - mobile vs desktop
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 640;

  // get the user's search input
  function getSearchTerms(input) {
    const userSearch = input.toLowerCase();
    setSearchResults(userSearch);
  }

  // toggle mobile nav
  function toggleNav() {
    if (searchModalOpen) {
      setSearchModalOpen(false);
    }
    setIsNavOpen(!isNavOpen);
  }

  // lock body scroll when mobile nav menu is open
  useEffect(() => {
    if (isNavOpen || searchModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isNavOpen, searchModalOpen]);

  function toggleSearchModal() {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
    setSearchModalOpen(!searchModalOpen);
  }

  function closeSearchModal() {
    setSearchModalOpen(false);
  }

  return (
    <Context.Provider
      value={{
        searchResults,
        getSearchTerms,
        isMobile,
        isNavOpen,
        toggleNav,
        toggleSearchModal,
        searchModalOpen,
        closeSearchModal,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
