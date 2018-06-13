import validateInput from '../shared/validations/signup';

const usersRoutes = (app) => {
    app.post('/api/users',(req,res) => {
       const { errors, isValid } = validateInput(req.body);
       if(isValid) {
            res.json({success: true});
       } else {
           res.status(400).json(errors);
       }
    });
}
export default usersRoutes;