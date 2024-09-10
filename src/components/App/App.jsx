import { useState, useEffect } from "react";

import { fetchPhotos } from "../../api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [dataForModal, setDataForModal] = useState({});

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
        setGallery((prev) => [...prev, ...fetchedPhotos.result]);
        setTotalPages(fetchedPhotos.totalPages);
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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function getDataForModal(data) {
    setDataForModal(data);
    console.log(data);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {gallery.length > 0 && (
        <ImageGallery
          images={gallery}
          onOpenModal={openModal}
          getDataForModal={getDataForModal}
        />
      )}
      {totalPages > page && <LoadMoreBtn onChangePage={loadMore} />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        onCloseModal={closeModal}
        dataForModal={dataForModal}
      />
    </>
  );
}

export default App;
