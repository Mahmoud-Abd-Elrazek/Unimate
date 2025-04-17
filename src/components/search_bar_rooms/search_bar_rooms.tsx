import { TfiSearch } from "react-icons/tfi";
import { useState } from "react";
import { useLocation } from "react-router-dom"; // Corrected import
import "./search_bar_rooms.css";

interface Funprop {
  placeholderval: string;
}

export default function Search_bar({ placeholderval }: Funprop) {
  const [isFocused, setIsFocused] = useState(false);
  const location = useLocation(); // Fix: Initialize location object
  const showsearchbar = ["/"];
  const shouldshowsearchbar = showsearchbar.includes(location.pathname);

  if (!shouldshowsearchbar) return null; // Fix: Proper conditional rendering

  return (
    <div className={`input-container ${isFocused ? "focused" : ""}`}>
      <input
        className="input-field"
        placeholder={placeholderval}
        type="text"
        dir="rtl"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className="search-button">
        <TfiSearch className="search-icon" />
      </div>
    </div>
  );
}