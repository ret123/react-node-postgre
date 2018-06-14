import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpackConfig.dev';
import usersRoutes from './routes/usersRoutes';
import authRoutes from './routes/authRoutes';
import eventsRoutes from './routes/eventsRoutes';

let app = express();
app.use(bodyParser.json());
usersRoutes(app);
authRoutes(app);
eventsRoutes(app);
const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, {
     hot: true,
     quiet: true,
     noInfo: true,
     publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname,"index.html"));
});

app.listen(3000, () => console.log('Server running on port 3000'));