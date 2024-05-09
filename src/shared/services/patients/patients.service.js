import axios from 'axios';

export class PatientsService {
   async getAll(){
      try {
         return await axios.get('http://localhost:3000/api/v1/patients');
      } catch (error) {
         console.error('Error fetching patients:', error);
         throw error;
      }
   }
}
