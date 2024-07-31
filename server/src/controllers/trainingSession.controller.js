import trainingSession from "../schemas/trainingSession.schema.js";

export const createTrainingSession = async (req, res) => {
    try {
        const { body } = req;
        const newTrainingSession = await trainingSession.create(body);
        res.status(201).json(newTrainingSession)
    } catch (error) {
        console.error('failed to create new training session', error);
        res.status(500).json({ error: 'failed to create new training session' });
    }
};

// export const updateTrainingSession = async (req, res) => {
//     try {
//         const { id } = req.params;
//         console.log(id)
//         const { body } = req;
//         const newTrainingSession = await trainingSession.findByIdAndUpdate(id, body)
//         res.status(201).json(newTrainingSession)
//     } catch (error) {
//         console.error('failed to create new training session', error);
//         res.status(500).json({ error: 'failed to create new training session' });
//     }
// };
export const updateTrainingSession = async (req, res) => {
    try {
        const { id } = req.params;
        const { endDateTime } = req.body;
        const session = await trainingSession.findById(id);

        if (!session) {
            return res.status(404).json({ error: 'Training session not found' });
        }

        // Set the endDateTime and calculate the duration
        session.endDateTime = endDateTime || new Date();
        session.duration = session.endDateTime - session.creationDateTime;

        await session.save();
        res.status(200).json(session);
    } catch (error) {
        console.error('Failed to update training session', error);
        res.status(500).json({ error: 'Failed to update training session' });
    }
};
