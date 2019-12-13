import axios from "axios"

class PetDataService {

    //Get all pets 
    getAllPets = () => {
        return axios.get('https://petclinic-turbulent-fossa.cfapps.io/pet/getAllPets');
    }
    //Get pets by id
    getPetById = (id) => {
        return axios.get('https://petclinic-turbulent-fossa.cfapps.io/pet/getPetById/{id}');
    }

    
    //update pets
    updatePet = (id, owner) => {
        return axios.put('https://petclinic-turbulent-fossa.cfapps.io/pet/updatePet')
    }

    
}

export default new PetDataService()