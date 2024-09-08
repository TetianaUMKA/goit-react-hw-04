import ImageCard from "../ImageCard/ImageCard";

import css from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  return (
    <ul className={css.list}>
      {images.map((image) => {
        return (
          <li className={css.item} key={image.id}>
            <ImageCard image={image} />
          </li>
        );
      })}
    </ul>
  );
}
