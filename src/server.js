import dotenv from 'dotenv';
import { RealtimeRelay } from './relay.js';

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;
const port = Number(process.env.PORT) || 8080;

if (!apiKey) {
  console.error('Error: OPENAI_API_KEY is not defined in the environment.');
  process.exit(1);
}

const relay = new RealtimeRelay(apiKey);

relay.listen(port);
console.log(`server listion on ${port}`);
