import React, { Component } from "react";
import deliveriesService from "./services/deliveriesService.js";
import { PropTypes as T } from 'prop-types';
import SweetAlert from 'sweetalert-react';

class Home extends Component {
  static propTypes = {
    history: T.object,
  }

  constructor() {
    super()
    this.state = {
      deliveries: [],
      deleteAlert: false,
      deleteId: null,
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

  deleteAlert() {
    return(
      <div>
        <div>
          <SweetAlert
            showCancelButton={true}
            type="warning"
            show={this.state.deleteAlert}
            title="Are you sure?"
            text="Permanetly delete this delivery"
            onConfirm={this.delete}
            onCancel={this.setState.bind(this, {deleteAlert: false})}
          />
        </div>
      </div>
    )
  }

  delete = () => {
    const { deliveries, deleteId } = this.state
    console.log(deleteId)
    this.deliveriesService.delete(deleteId)
    .then((res) => {
      if (res.ok) {
        this.setState({
          deliveries: deliveries.filter(({ id }) => id !== deleteId),
          deleteAlert: false,
        });
      }
    })
  }

  render() {
    const deliveries = this.state.deliveries;
    return (
      <div className="container">
        <main role="main">
          { this.deleteAlert() }
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
              { deliveries.map(delivery =>
                <tr>
                  <th scope="row">{delivery.id}</th>
                  <td>{delivery.pick_up_date}</td>
                  <td>{delivery.name}</td>
                  <td>{delivery.driver.first_name}</td>
                  <td className="text-right">
                    <a
                      className="btn btn-outline-danger"
                      onClick={() => this.setState({
                        deleteId: delivery.id,
                        deleteAlert: true,
                      })}
                    >
                      Delete
                    </a>
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
