import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {

  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();


  const handleSearch = (e) => {
    e.preventDefault();

    if(searchText.trim() !== ""){
      navigate(`/search/${searchText}`);
    }
  };


  return (
    <nav className="navbar">

      <div className="brand">
        <span className="food-icon">🍕</span>
        <h2>Recipe Hub</h2>
      </div>


      <form className="search-box" onSubmit={handleSearch}>

        <input
          type="text"
          placeholder="Search recipes..."
          value={searchText}
          onChange={(e)=>setSearchText(e.target.value)}
        />

        <button type="submit">
          <FaSearch />
        </button>

      </form>


    </nav>
  );
}

export default Navbar;