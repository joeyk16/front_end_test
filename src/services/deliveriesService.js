// This should be an enivrontment variable for simplicity I will leave it
const baseUrl = 'https://carton-cloud-api.herokuapp.com/'

export default class deliveriesService {
  index() {
    return fetch(`${baseUrl}/deliveries`, {
      method: 'GET',
    })
      .then(res => res.json());
  };

  create(params) {
    return fetch(`${baseUrl}/deliveries`, {
      method: "POST",
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify({ delivery: params })
    })
      .then(res => res);
  };

  delete(id) {
    return fetch(`${baseUrl}/deliveries/${id}`, {
      headers: new Headers({'Content-Type': 'application/json'}),
      method: "DELETE",
      body: JSON.stringify({ id: id })
    })
      .then(res => res);
  };
}

