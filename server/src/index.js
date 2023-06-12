import 'dotenv/config';

import connectToDatabase from './config/mongoose';
import startServer from './config/express';

connectToDatabase()
  .then(startServer)
  .catch(e => {
    console.error('Failed to connect', e);
  });
