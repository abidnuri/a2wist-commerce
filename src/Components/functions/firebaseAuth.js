import axios from 'axios';

export const createOrUpdateUser = async (authtoken) => {
  return axios.post('https://mysterious-plains-14650.herokuapp.com/fireauth/create-or-update-user',
    {},
    {
      headers: {
        authtoken,
      },
    });
}

export const currentUser = async (authtoken) => {
  return await axios.post('https://mysterious-plains-14650.herokuapp.com/fireauth/current-user',
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const currentAdmin = async (authtoken) => {
  return await axios.post('https://mysterious-plains-14650.herokuapp.com/fireauth/current-admin',
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

