import axios from 'axios';

export const api = () => {
    return axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL,
        headers: {
            'Content-Type': 'application/json',
        }
    })
};

export const newTrainingSession = async (data) => {
    try {
        const res = await api().post('/trainingSession', data);
        console.log('created', res.data)
        return res.data;
    } catch (error) {
        throw new Error('Error creating training session:', error)
    }
};

export const handleEndTrainingSession = async (sessionId) => {
    try {
        const res = await api().patch(`/trainingSession/${sessionId}`, {
            endDateTime: new Date()
        });
        const durationConverted = new Date(res.data.duration);
        console.log('Session ended successfully:', res.data)
        // for tracking exercise sets duration (more precise, seconds do matter):
        console.log(`${durationConverted.getMinutes()}:${durationConverted.getSeconds()}`);
        // // for tracking whole workout session duration, not in hours-min-sec but only in minutes, to simplify:
        // console.log(`${durationConverted.getMinutes()} min`)
        return res.data;

    } catch (error) {
        throw new Error('Error ending training session:', error)
    }
}