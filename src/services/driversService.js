// This should be an environment variable, for simplicity I will leave it.
const baseUrl = 'https://carton-cloud-api.herokuapp.com/'

export default class driversService {
  index() {
    return fetch(`${baseUrl}/users`, {
      method: "GET",
    })
      .then(res => res.json());
  };
}
