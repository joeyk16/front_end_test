import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
        <div class="container">
            <header class="header clearfix">
                <nav>
                    <ul class="nav nav-pills float-right">
                        <li class="nav-item">
                            <a class="nav-link active" href="/">Deliveries</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">New Delivery</a>
                        </li>
                    </ul>
                </nav>
                <h3 class="text-muted">CartonCloud</h3>
            </header>
            <main role="main">
                <h1>Deliveries</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Name</th>
                            <th scope="col">Driver</th>
                            <th scope="col">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                          <th scope="row">1</th>
                          <td>test</td>
                          <td>test</td>
                          <td>test</td>
                          <td class="text-right">
                              <a class="btn btn-outline-primary" href="/">Edit</a>
                              <a class="btn btn-outline-danger" href="/">Delete</a>
                          </td>
                      </tr>
                    </tbody>
                </table>
            </main>
        </div>
    );
  }
}

export default Main;
