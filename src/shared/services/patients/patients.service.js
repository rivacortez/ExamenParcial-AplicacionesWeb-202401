import axios from 'axios';

export class PatientsService {
   getPatients(){
      return axios.get('http://localhost:3000/api/v1/patients');
   }

}
