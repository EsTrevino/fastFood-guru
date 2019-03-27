import axios from 'axios';

export default {
  login: loginInfo => axios.post('/api/users/login', loginInfo),
  register: registerInfo => axios.post('/api/users/register', registerInfo),
  geoLocate: geoInfo => axios.post('/api/maps/geolocate', geoInfo),
  googlePlaceSearch: searchInfo => axios.post('/api/maps/search', searchInfo),
  newReview: newReviewInfo => axios.post('/api/reviews/create', newReviewInfo),
  getAllUserReviews: userId => axios.get(`/api/reviews/${userId}`),
  updateUserReview: updateInfo => axios.put('/api/reviews/update', updateInfo),
  deleteUserReview: reviewId => axios.delete(`/api/reviews/delete/${reviewId}`),
  grabAllReviewsWithUserInfo: () => axios.get('api/reviews')
};
