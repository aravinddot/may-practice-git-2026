import dotenv from "dotenv";

const env = process.env.TEST_ENV || 'qa'

dotenv.config({path: `.env.${env}`, quiet: true});


export const ENV = {
    baseUrl: process.env.BASE_URL
}