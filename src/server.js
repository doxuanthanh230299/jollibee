import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoutes from './routes/web';
import connectDb from './config/connectDB';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

let app = express();
app.use(cookieParser());
app.use(cors({ origin: true }));

// static Images Folder
app.use('/images', express.static('./images'));

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

viewEngine(app);
initWebRoutes(app);

connectDb();

let port = process.env.PORT;
app.listen(port, () => {
  console.log('Backend nodejs is running on the port :' + port);
});
