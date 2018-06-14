import authMiddleware from '../middlewares/authMiddleware'

const eventsRoutes = (app) => {
    app.post('/api/events' ,authMiddleware, (req,res) => {
        res.status(201).json({user: req.currentUser});
    });
}
export default eventsRoutes;