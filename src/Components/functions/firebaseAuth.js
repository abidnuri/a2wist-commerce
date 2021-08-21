import axios from 'axios';

export const createOrUpdateUser = async (authtoken) => {
  return axios.post('http://localhost:3333/fireauth/create-or-update-user',
    {},
    {
      headers: {
        authtoken,
      },
    });
}

export const currentUser = async (authtoken) => {
    return axios.post('http://localhost:3333/fireauth/current-user',
      {},
      {
        headers: {
          authtoken,
        },
      });
  }
