// This should be an enivrontment variable for simplicity I will leave it
const baseUrl = 'https://carton-cloud-api.herokuapp.com/'

export default class driversService {
  index() {
    return fetch(`${baseUrl}/users`, {
      method: 'GET',
    })
      .then(response => response.json());
  };
}
