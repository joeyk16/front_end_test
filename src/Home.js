import React, { Component } from "react";
import deliveriesService from "./services/deliveriesService.js";
import { PropTypes as T } from "prop-types";

class Home extends Component {
  static propTypes = {
    history: T.object,
  }

  constructor() {
    super()
    this.state = {
      deliveries: []
    };
  }

  componentWillMount() {
    this.deliveriesService = new deliveriesService();
    this.deliveries();
  }

  deliveries() {
    this.deliveriesService.index()
    .then((res) => {
      this.setState({
        deliveries: res,
      });
    })
  }

  render() {
    const deliveries = this.state.deliveries;
    return (
      <div className="container">
        <main role="main">
          <h1 className="pb-4">Deliveries</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Name</th>
                <th scope="col">Driver</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              { deliveries.map((delivery, key) =>
                <tr key={key}>
                  <th scope="row">{delivery.id}</th>
                  <td>{delivery.pick_up_date}</td>
                  <td>{delivery.name}</td>
                  <td>{delivery.driver.first_name}</td>
                  <td className="text-right">
                    <a className="btn btn-outline-primary" href="/">Edit</a>
                    <a className="btn btn-outline-danger" href="/">Delete</a>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </main>
      </div>
    );
  }
}

export default Home;
