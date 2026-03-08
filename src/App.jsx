import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import { BrowserRouter, Route, Routes } from "react-router";
import BookDetails from "./components/BookDetails";
import NotFound from "./components/NotFound";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState("light");

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={theme === "light" ? "bg-white text-dark" : "bg-dark text-white"}>
          <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Routes>
            <Route path="/" element={<AllTheBooks searchQuery={searchQuery} />} />
            <Route path="/details/:asin" element={<BookDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Welcome />
          <MyFooter />
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
