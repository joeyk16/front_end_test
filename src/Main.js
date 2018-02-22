import React, { Component } from "react";
import deliveriesService from "./deliveriesService.js";

class Main extends Component {
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
        <header className="header clearfix">
          <nav>
            <ul className="nav nav-pills float-right">
              <li className="nav-item">
                <a className="nav-link active" href="/">Deliveries</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">New Delivery</a>
              </li>
            </ul>
          </nav>
          <h3 className="text-muted">CartonCloud</h3>
        </header>
        <main role="main">
          <h1>Deliveries</h1>
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
              {deliveries.map(delivery =>
                <tr>
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

export default Main;
