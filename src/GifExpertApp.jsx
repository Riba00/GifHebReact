import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <header className="title-container">
        <h1 className="title">Gif Hub</h1>
        <p className="author"> by RibaDev</p>
        <p className="slogan">Granting Wishes with Copyable GIFs</p>
      </header>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.length === 0 && (
        <h2 className="noSearches">No searches yet...</h2>
      )}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
