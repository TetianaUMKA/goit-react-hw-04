import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images }) {
  return (
    <ul>
      {images.map((image) => {
        return (
          <li key={image.id}>
            <ImageCard image={image} />
          </li>
        );
      })}
    </ul>
  );
}
