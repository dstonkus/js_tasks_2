import axios from 'axios';

const getPeopleList = () => {
  return axios
    .get(
      'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole'
    )
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
