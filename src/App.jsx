import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import AllTheBooks from "./components/AllTheBooks";
import MyNav from "./components/MyNav";
import { BrowserRouter, Route, Routes } from "react-router";
import BookDetails from "./components/BookDetails";
import MyFooter from "./components/MyFooter";
import NotFound from "./components/NotFound";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState("light");

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`main-wrapper ${theme === "light" ? "text-dark" : "bg-dark text-white"}`}>
          <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <main style={{ minHeight: "80vh" }}>
            <Routes>
              <Route path="/" element={<AllTheBooks searchQuery={searchQuery} />} />
              <Route path="/details/:asin" element={<BookDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <MyFooter />
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
