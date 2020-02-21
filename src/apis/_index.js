import axios from 'axios';

const getUsers = async () => {
  const { data } = await axios.get("http://dev-node-rest-api.herokuapp.com/ingredient?limit=100");
  return data;
}

export default {
  getUsers
}

