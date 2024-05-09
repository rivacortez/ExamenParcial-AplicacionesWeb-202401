import axios from 'axios';

export class MentalStateExams {
    async getAll(){
        try {
            return await axios.get('http://localhost:3000/api/v1/mental-state-exams');
        } catch (error) {
            console.error('Error fetching mental state exams:', error);
            throw error;
        }
    }
}
