import React, { Component } from 'react';
import OwnerDataService from '../api/OwnerDataService'
import PetDataService from '../api/PetDataService'

class DisplayOwners extends Component {
  state = {
    persons: [],
    pets : [],
    petnames:[],
    empty : []
  }

  componentDidMount() {
    OwnerDataService.getAllOwners()
      .then(res => {
        const persons = res.data;
        
        this.setState({ persons });
      })
    
      PetDataService.getAllPets()
      .then(res => {
        const pets = res.data;
        
        this.setState({ pets });
      })
    
  }

  petdetails = (id) => {
    var temp =[]
    this.state.pets.map(
      pet => 
        (pet.ownerId === id) ? temp.push(pet.name + ' ') : null
      
      );

      console.log("list details --" + this.state.petnames);
      return temp;
  }

  deleteOwner = (id) => {

  }

  updateOwner = (id, owner) => {

  }

  render() {
    return (
      <div className="container">
      <table className="table">
        <thead lassName="thead-dark">
          <tr>
            <th>id</th>
            <th>name</th>
            <th>Address</th>
            <th>City</th>
            <th>Telephone</th>
            <th>Pets</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.persons.map(
              o => <tr key={o.id}>
                    <td>{o.id}</td>
                    <td>{o.name}</td>
                    <td>{o.address}</td>
                    <td>{o.city}</td>
                    <td>{o.phoneNumber}</td>
                    {/* {
                      this.state.pets.map(
                      pet => 
                        (pet.ownerId === o.id) ? this.state.petnames.push(pet.name) : null
                      
                      )
                    } */}
                    {/* {console.log("list details --" + this.state.petnames)} */}
                    <td>{this.petdetails(o.id)}</td>
                    {/* {
                      this.state.petnames = []
                    } */}
                    <td><button onClick={() => this.editPerson(o.id)}>edit</button></td>
                    <td><button onClink = {() => this.deletePerson(o.id)}>delete</button></td>
                  </tr>
            )
          }
        </tbody>

      </table>
      </div>
    )
  }
}

  
export default DisplayOwners;