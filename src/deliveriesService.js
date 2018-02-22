// This should be an enivrontment variable for simplicity I will leave it
const baseUrl = "http://localhost:4000"

export default class deliveriesService {
  index() {
    return fetch(`${baseUrl}/deliveries`, {
      method: "GET",
    })
      .then(response => response.json());
  };
}
