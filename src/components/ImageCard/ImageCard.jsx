export default function ImageCard({
  image: {
    likes,
    alt_description,
    description,
    urls: { regular, small },
  },
}) {
  return (
    <div>
      <img src={small} alt={alt_description} />
      <p>{description ? description : "Good picture"}</p>
      <p>👍 {likes}</p>
    </div>
  );
}
