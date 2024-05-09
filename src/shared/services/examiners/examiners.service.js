import axios from 'axios';

export class ExaminersService {
    async getAll(){
        try {
            return await axios.get('http://localhost:3000/api/v1/examiners');
        } catch (error) {
            console.error('Error fetching examiners:', error);
            throw error;
        }
    }
}
