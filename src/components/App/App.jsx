import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { fetchPhotos } from "../../api";

function App() {
  const [query, setQuery] = useState("");
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getImages() {
      try {
        const fetchedPhotos = await fetchPhotos(query, page);
        setGallery(fetchedPhotos);
        console.log(fetchedPhotos);
      } catch (error) {
        console.log(error);
      }
    }
    getImages();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {gallery.length > 0 && <ImageGallery images={gallery} />}
    </>
  );
}

export default App;
