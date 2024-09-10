import css from "./ImageCard.module.css";

export default function ImageCard({
  image: {
    likes,
    alt_description,
    description,
    urls: { regular, small },
    user: { name, location },
  },
  onOpenModal,
  getDataForModal,
}) {
  const handleClick = (src, likes, alt, description, author) => {
    getDataForModal({ src, likes, alt, description, author, location });
    onOpenModal();
  };
  return (
    <div className={css.container}>
      <img
        className={css.img}
        src={small}
        alt={alt_description}
        onClick={() =>
          handleClick(
            regular,
            likes,
            alt_description,
            description,
            name,
            location
          )
        }
      />
      {/* <p>{description ? description : "Good picture"}</p> */}
      <p className={css.likes}>👍 {likes}</p>
    </div>
  );
}
