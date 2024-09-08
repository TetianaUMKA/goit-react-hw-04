import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";

import css from "./SearchBar.module.css";

const notify = () =>
  toast.error("Enter your prompt for searching images, please", {
    position: "top-right",
  });

export default function SearchBar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const topic = form.elements.topic.value;
    if (topic) {
      onSearch(topic);
      form.reset();
    } else notify();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.searchInput}
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.btn}>
          <FiSearch />
        </button>
        <Toaster />
      </form>
    </header>
  );
}
