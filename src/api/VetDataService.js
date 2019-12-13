import axios from "axios"

class VetDataService {

    //Get all vets 
    getAllVets = (name) => {
        return axios.get('https://petclinic-turbulent-fossa.cfapps.io/vet/getAllVets');
    }
    

    
}

export default new VetDataService()