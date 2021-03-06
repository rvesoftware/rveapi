import dotenv from 'dotenv';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({
  path: path.resolve(__dirname, process.env.NODE_ENV + '.env'),
});

export default {
    // NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 4200,
    mongodbURL:
    process.env.MONGODB_URI ||
    'mongodb+srv://user:api12345@cluster0.2tqpl.mongodb.net/apirest?retryWrites=true&w=majority',
    SKIP_PREFLIGHT_CHECK:true,
    // MAILGUN_APIKEY:'a5e2f6a88af9e5de3261717aa90f7df0-e31dc3cc-65a8594d',
    // JWT_ACC_ACTIVATE:'accountactivatekey123',
    // CLIENT_URL:'http://localhost:3000',
    // RESET_PASSWORD_KEY:'passwordresetkey123456',
    JWT_SIGNIN_KEY:'signinkey1234',
    STREAM_API_KEY: 'w9gxsq46p828',
    STREAM_API_SECRET: '8bvx85kh5xkdet9ca5rvtzw3cjzc7vvypz9xjn8s522e2qjsq6ycsczpmj8k45nw',
    STREAM_APP_ID: 1176292,
    accessKeyId: process.env.accessKeyId || 'AKIAVHJK4GQ6BBLS6M62',
    secretAccessKey:
    process.env.secretAccessKey || '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',

}