// This should be an enivrontment variable for simplicity I will leave it
const baseUrl = "http://localhost:3000"

export default class driversService {
  index() {
    return fetch(`${baseUrl}/users`, {
      method: "GET",
    })
      .then(response => response.json());
  };
}
