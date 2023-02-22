import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import {holidays, loadHolidayData} from "./icalImporter";
import v1 from "./routes/v1/route";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Holidates!');
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    next();
})

app.use('/v1/', v1);

app.listen(port, () => {
    log('rest', `Server is running on port ${port}.`);
})

loadHolidayData().then(() => log('data', `Loaded holiday data, ${holidays.length} holidays found.`));

export const log = (topic: String, message: String) => {
    console.log(`⚡ [${topic}]: ${message}`);
}