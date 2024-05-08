import axios from 'axios';

export class ExaminersService {
    getExaminers(){
        return axios.get('http://localhost:3000/api/v1/examiners');
    }
}
