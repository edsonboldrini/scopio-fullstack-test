import { port, env } from './config/environment';
import app from './app';

const start = async () => {
  try {
    await app.listen(port);    
    console.log(`🚀 Server started on http://localhost:${port}`);    
  } catch {
    console.log('Not able to run GraphQL server');
  }
};

start();