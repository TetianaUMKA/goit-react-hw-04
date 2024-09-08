import css from "./ImageCard.module.css";

export default function ImageCard({
  image: {
    likes,
    alt_description,
    description,
    urls: { regular, small },
  },
}) {
  return (
    <div className={css.container}>
      <img className={css.img} src={small} alt={alt_description} />
      {/* <p>{description ? description : "Good picture"}</p> */}
      <p className={css.likes}>👍 {likes}</p>
    </div>
  );
}
