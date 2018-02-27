import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import driversService from './services/driversService.js';
import deliveriesService from './services/deliveriesService.js';
import { PropTypes as T } from 'prop-types';

class New extends Component  {
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
    };
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

  create = (e) => {
    const params = {
      name: this.name.value,
      pick_up_date: this.pickUpDate.value,
      user_id: this.userId.value,
    };

    this.validationGuard(params, () =>
      this.createRequest(params)
    );
  }

  validationGuard(params, cb) {
    const validations = {
      pickUpDate: params.pick_up_date.length === 0,
      name: params.name.length === 0,
      user_id: params.user_id.length === 0,
    };

    this.setState({validations}, cb);
  }

  createRequest(params) {
    const { history } = this.props;

    if (Object.values(this.state.validations).includes(true)) return;

    this.deliveriesService.create(params)
      .then((res) => {
        if (res.ok) {
          // Should show a flash message so user knows its been
          // created. This wasn't in your example so i will leave this out.
          history.push('/');
        } else {
          // Should show a flash message so user knows there's an error
          // this wasn't in your example so i will leave this out.
        }
      });
  }

  inputError(value) {
    const message = this.message(value)
    if (this.state.validations[value]) {
      return (
        <div className="m0 red font-x-small">
          {message}
        </div>
      )
    };
  }

  message(value) {
    if (value === 'pickUpDate') { return 'Please enter a valid date'};
    if (value === 'name') { return 'Please enter a name'};
    if (value === 'user_id') { return 'Please choose a driver'};
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
                <input hidden type="date" required name="delivery[pick_up_date]" ref={ref => this.pickUpDate = ref}/>
                <DatePicker
                  className="form-control"
                  onChange={this.setPickUpDate}
                  selected={this.state.pickUpDate}
                  dateFormat={'DD/MM/YYYY'}
                />
                { this.inputError('pickUpDate') }
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="text"
                  name="delivery[name]"
                  ref={ref => this.name = ref}
                />
                { this.inputError('name') }
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Driver</label>
              <div className="col-sm-10">
                <input hidden type="text" required name="delivery[user_id]" ref={ref => this.userId = ref}/>
                <select
                  className="form-control"
                  id="deliveryDriver"
                  name="driver_id"
                  onChange={ this.setUserId }
                >
                  <option>- Select One -</option>
                  { drivers.map((driver, key) =>
                    <option key={key} value={`${driver.id}`}>
                      {`${driver.first_name} ${driver.last_name}`}
                    </option>
                  )}
                </select>
                { this.inputError('user_id') }
              </div>
            </div>
            <button type="button" className="btn btn-primary float-right" onClick={this.create}>
              Create
            </button>
          </form>
        </main>
      </div>
    )
  }
}

export default New;
