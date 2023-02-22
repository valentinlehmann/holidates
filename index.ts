import express, {Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Holidates!');
})

app.listen(port, () => {
    log('rest', `Server is running on port ${port}.`);
})

export const log = (topic: String, message: String) => {
    console.log(`⚡ [${topic}]: ${message}`);
}