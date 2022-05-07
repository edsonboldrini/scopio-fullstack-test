import env from './config/environment/env.config';
import app from './app';

const start = async () => {
  try {
    var port:Number = env.port || 3000; 

    await app.listen(port);    
    console.log(`🚀 Server started on http://localhost:${port}`);    
  } catch {
    console.log('Not able to run GraphQL server');
  }
};

start();