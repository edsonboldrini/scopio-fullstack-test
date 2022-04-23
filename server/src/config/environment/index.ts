import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;

const env = {
  dev: process.env.NODE_ENV === 'dev',
  test: process.env.NODE_ENV === 'test',
  staging: process.env.NODE_ENV === 'staging',
  prod: process.env.NODE_ENV === 'prod',
};

export { port, env };