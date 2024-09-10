import ImageCard from "../ImageCard/ImageCard";

import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onOpenModal, getDataForModal }) {
  return (
    <ul className={css.list}>
      {images.map((image) => {
        return (
          <li className={css.item} key={image.id}>
            <ImageCard
              image={image}
              onOpenModal={onOpenModal}
              getDataForModal={getDataForModal}
            />
          </li>
        );
      })}
    </ul>
  );
}
