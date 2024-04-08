import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

export const SearchForm = ({ onSearch }) => {
  const handleScroll = (e) => {
    console.dir(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.elements.query.value.trim() === "") {
      toast.error("EMPTY STRING");
      return;
    }

    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <>
      <header onScrollCapture={handleScroll} className={css.headerBox}>
        <form className={css.headerForm} onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </>
  );
};