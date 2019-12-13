import React, { Component } from "react";
import OwnerDataService from '../api/OwnerDataService'

class AddOwner extends Component {
  state = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    phoneNumber: ''
  }

  handleChange = (e) => {
    const target = e.target;
    const value= target.value;
    const name = target.name;
    this.setState({[name] : value})
  }
  

  submitOwner = (e) => {
    e.preventDefault();
 
  const owner = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address:this.state.address,
                city:this.state.city,
                phoneNumber: this.state.phoneNumber
              }
      OwnerDataService.addOwner(owner )
        .then(res=> {
         console.log("Response done------>")
        }
        ) 
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="well well-sm">
              <form className="form-horizontal" method="post" onSubmit={this.submitOwner}>
                <fieldset>
                  <legend className="text-center header">Add Owner</legend>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      {/* <label>First Name:</label> */}
                      <input
                        id="fname"
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        className="form-control"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      <input
                        id="lname"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      <input
                        id="street1_id"
                        name="address"
                        type="text"
                        placeholder="Street Address, P.O box , company name, c/o"
                        className="form-control"
                        onChange={this.handleChange}

                      />
                    </div>
                  </div>

                  

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      <input
                        id="state"
                        name="city"
                        type="text"
                        placeholder="city"
                        className="form-control"
                        onChange={this.handleChange}

                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-phone-square bigicon"></i>
                    </span>
                    <div className="col-md-8">
                      <input
                        id="phone"
                        name="phoneNumber"
                        type="text"
                        placeholder="Phone"
                        className="form-control"
                        onChange={this.handleChange}

                      />
                    </div>
                  </div>

                
                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-pencil-square-o bigicon"></i>
                    </span>
                    <div className="col-md-8"></div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12 text-center">
             
                      <button type="Add" className="btn btn-primary btn-lg">
                        Add
                      </button>
                    </div>
                  </div>
                </fieldset>
                

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default AddOwner;

