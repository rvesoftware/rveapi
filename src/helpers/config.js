import dotenv from 'dotenv';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({
  path: path.resolve(__dirname, process.env.NODE_ENV + '.env'),
});

export default {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 4200,
    mongodbURL:
    process.env.MONGODB_URI ||
    'mongodb+srv://user:api12345@cluster0.2tqpl.mongodb.net/apirest?retryWrites=true&w=majority',
    SKIP_PREFLIGHT_CHECK:true,
    MAILGUN_APIKEY:'a5e2f6a88af9e5de3261717aa90f7df0-e31dc3cc-65a8594d',
    JWT_ACC_ACTIVATE:'accountactivatekey123',
    CLIENT_URL:'http://localhost:3000',
    RESET_PASSWORD_KEY:'passwordresetkey123456',
    JWT_SIGNIN_KEY:'signinkey1234',
    STREAM_API_KEY: 'vmqupdngewz4',
    STREAM_API_SECRET: '37twhddgwyas9abu5ku2q72fr45yw25fequx6audkqtg4s2jyt6pxfhh5z7cq3v8',
    STREAM_APP_ID: 1163933
}