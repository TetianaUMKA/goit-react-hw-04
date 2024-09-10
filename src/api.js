import axios from "axios";

export const fetchPhotos = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=C2Sxyplpn44SPYJGffQjA1k55v9Bt4BegExNUQqwoxY`,
    {
      params: {
        query,
        page,
        per_page: 12,
        orientation: "landscape",
      },
    }
  );

  return {
    result: response.data.results,
    totalPages: response.data.total_pages,
  };
};
