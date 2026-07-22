import "./App.css";
import SearchResult from "./pages/SearchResult";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route 
          path="/" 
          element={<Home />} 
        />

        <Route 
          path="/recipe/:id" 
          element={<RecipeDetails />} 
        />

        <Route 
       path="/search/:name" 
       element={<SearchResult />} 
          />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;