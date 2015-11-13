import express from 'express';
import powerRangers from './routes/powerRangers';
const app = express();

export default () => {
  return new Promise(resolve => {
    app.use('/powerRangers', powerRangers);
    resolve(app.listen(3030));
  });
}
