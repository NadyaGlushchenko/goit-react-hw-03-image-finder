import axios from "axios";

const fetchImagesWithQuery = (searchQuery, page = 0) => {
  return axios
    .get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=14234855-711e9a9449f1d753999c1992c`
    )
    .then(response => response.data.hits);
};

export default {
  fetchImagesWithQuery
};
