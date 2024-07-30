import trainingSession from "../schemas/trainingSession.schema.js";

export const createTrainingSession = async (req, res) => {
    try {
        const body = req;
        const newTrainingSession = await trainingSession.create({
            exercise: 'bulgarian split squat'
        });
        res.status(200).json(newTrainingSession)
    } catch (error) {
        console.error('failed to create new training session', error);
        res.status(500).json({ error: 'failed to create new training session' });
    }
};