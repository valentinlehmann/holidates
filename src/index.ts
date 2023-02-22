import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import {holidays, loadHolidayData} from "./icalImporter";
import v1 from "./routes/v1";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Holidates!');
})

app.use('/v1/', v1);

app.listen(port, () => {
    log('rest', `Server is running on port ${port}.`);
})

loadHolidayData().then(() => log('data', `Loaded holiday data, ${holidays.length} holidays found.`));

export const log = (topic: String, message: String) => {
    console.log(`⚡ [${topic}]: ${message}`);
}