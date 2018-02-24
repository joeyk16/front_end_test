import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import driversService from "./services/driversService.js";
import deliveriesService from "./services/deliveriesService.js";
import { withRouter } from 'react-router-dom'
import { PropTypes as T } from 'prop-types';

export default class New extends Component {
  static propTypes = {
    history: T.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      pickUpDate: null,
      drivers: [],
      validations: this.validations(),
    };
  }

  componentWillMount() {
    this.driversService = new driversService();
    this.deliveriesService = new deliveriesService();
    this.drivers();
  }

  validations() {
    return {
      pickUpDate: false,
      name: false,
      user_id: false,
    }
  }

  drivers() {
    this.driversService.index()
    .then((res) => {
      this.setState({
        drivers: res,
      });
    })
  }

  setPickUpDate = (pickUpDate) => {
    this.pickUpDate.value = pickUpDate.format('YYYY-MM-DD');
    this.setState({ pickUpDate });
  }

  setUserId = (userId) => {
    this.userId.value = userId.target.value;
  }

  validationGuard(params, cb) {
    const validations = {
      pickUpDate: params.pick_up_date.length > 0,
      name: params.name.length > 0,
      user_id: params.user_id.length > 0,
    }

    this.setState({validations}, cb)
  }

  createRequest(params) {
    const { history } = this.props;

    if (Object.values(this.state.validations).includes(false)) { return }
    this.deliveriesService.create(params)
    .then((res) => {
      if (res.ok) {
        this.props.history.push("/")
      }
    })
  }

  create = () => {
    const params = {
      name: this.name.value,
      pick_up_date: this.pickUpDate.value,
      user_id: this.userId.value,
    };

    this.validationGuard(params, () =>
      this.createRequest(params)
    )
  }

  render() {
    const drivers = this.state.drivers;

    return (
      <div className="container">
        <main role="main">
          <h1 className="pb-4">Create Delivery</h1>
          <form>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Date</label>
              <div className="col-sm-10">
                <input hidden type="date" required name="delivery[pick_up_date]" ref={ref => this.pickUpDate = ref} />
                <DatePicker
                  className="form-control is-invalid"
                  onChange={this.setPickUpDate}
                  selected={this.state.pickUpDate}
                  dateFormat={'DD/MM/YYYY'}
                />
                <div className="invadlid-feedback">
                  test
                </div>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input
                  className="form-control is-invalid"
                  type="text"
                  name="delivery[name]"
                  ref={ref => this.name = ref}
                />
                <div className="invalid-feedback">
                  test
                </div>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Driver</label>
              <div className="col-sm-10">
                <input hidden type="text" required name="delivery[user_id]" ref={ref => this.userId = ref} />
                <select
                  className="form-control is-invalid"
                  id="deliveryDriver"
                  name="driver_id"
                  onChange={ this.setUserId }
                >
                  <option>- Select One -</option>
                  { drivers.map((driver, key) =>
                    <option key={key} value={`${driver.id}`}>{driver.first_name}</option>
                  )}
                </select>
                <div className="invalid-feedback">
                  test
                </div>
              </div>
            </div>

            <button className="btn btn-primary" onClick={ this.create}>Create</button>
          </form>
        </main>
      </div>
    )
  }
}
