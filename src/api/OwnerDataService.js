import axios from "axios"

class OwnerDataService {

    //Get all owners 
    getAllOwners = () => {
        return axios.get('https://petclinic-turbulent-fossa.cfapps.io/owner/getAllOwners');
    }
    //Get owners by id
    getOwnerById = (id) => {
        return axios.get('https://petclinic-turbulent-fossa.cfapps.io/owner/getById/{id}');
    }

    //delete owners
    deleteOwner = (id) => {
        return axios.delete('https://petclinic-turbulent-fossa.cfapps.io/owner/deleteOwner')
    }

    //update owners
    updateOwner = (id, owner) => {
        return axios.put('https://petclinic-turbulent-fossa.cfapps.io/owner/updateOwner')
    }

    //Add owners
    addOwner = (owner) => {
        return axios.post('https://petclinic-turbulent-fossa.cfapps.io/owner/')
    }
}

export default new OwnerDataService()