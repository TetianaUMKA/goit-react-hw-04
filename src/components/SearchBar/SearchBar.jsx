import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Enter your prompt for searching images, please");

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
    <header>
      <form onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
}
