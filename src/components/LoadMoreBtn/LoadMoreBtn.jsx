import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onChangePage }) {
  return (
    <button className={css.loadMoreBtn} onClick={onChangePage}>
      Load more
    </button>
  );
}
