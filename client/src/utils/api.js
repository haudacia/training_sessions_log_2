import axios from 'axios';

export const api = () => {
    return axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL,
        headers: {
            'Content-Type': 'application/json',
        }
    })
};

export const newTrainingSession = async () => {
    try {
        const res = await api().post('/trainingSession');
        return res.data;
        console.log('created')
    } catch (error) {
        throw new Error('Error creating training session')
    }
}