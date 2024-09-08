import { useState, useEffect } from "react";

import { fetchPhotos } from "../../api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

function App() {
  const [query, setQuery] = useState("");
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getImages() {
      try {
        setLoading(true);
        setGallery([]);
        setError(false);
        const fetchedPhotos = await fetchPhotos(query, page);
        setGallery(fetchedPhotos.results);
        console.log(fetchedPhotos);
        console.log(fetchedPhotos.total_pages);
        setTotalPages(fetchedPhotos.total_pages);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  const loadMore = async () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {gallery.length > 0 && <ImageGallery images={gallery} />}
      {page < totalPages && <LoadMoreBtn onChangePage={loadMore} />}
    </>
  );
}

export default App;
