
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import '../components/navbar/Navbar';
import '../App.css';
import Footer from "./Footer";
import Navbar from "../components/navbar/Navbar";

const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const About = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [recipes, setRecipes] = useState([]);

  const categories = ["All Categories", "Beef", "Chicken", "Vegetarian", "Cake"];

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = category
      ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      : `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, [category]);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  };

  return (
    <div>
      {/* <TopNav /> */}
      <Navbar/>
      <div className="container">
        <h2 className="our-recipes">OUR SPECIAL FOOD RECIPES</h2>
        <div className="category-buttons">
          <h4 className="select-name">SELECT:</h4>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-button ${category === cat ? "active" : ""}`}
              onClick={() => setCategory(cat === "All Categories" ? "" : cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <SearchBar
          isLoading={isLoading}
          query={query}
          setQuery={setQuery}
          handleSubmit={handleSubmit}
        />
        <div className="recipes">
          {recipes ? (
            recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))
          ) : (
            <p>No Recipes!</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;



