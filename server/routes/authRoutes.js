import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user';
import config from '../config';

const authRoutes = (app) => {
    app.post('/api/auth', (req,res) => {
        const { identifier, password} = req.body;
        User.query({
            where : {username: identifier },
            orWhere : { email: identifier}
        }).fetch()
        .then((user) => {
            if(user) {
                if(bcrypt.compareSync(password,user.get('password_digest'))) {
                    const token = jwt.sign({
                        id: user.get('id'),
                        username: user.get('username')
                    }, config.jwtSecret);
                    res.json({token});
                } else {
                    res.status(401).json({errors: {form: 'Invalid credential'}});
                }

            } else {
                res.status(401).json({errors: {form: 'Invalid credential'}});
            }
        });
    });

}
export default authRoutes;