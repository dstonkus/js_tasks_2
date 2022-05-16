import axios from 'axios';

const API_ENDPOINT =
  'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';

const getPeopleList = () => {
  return axios
    .get(API_ENDPOINT)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const peopleApi = {
  getPeopleList,
};

export default peopleApi;
