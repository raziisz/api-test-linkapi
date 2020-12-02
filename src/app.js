import express from 'express';
import cors from 'cors';
import { router } from './routes';

class App {
  constructor() {
    this.express = express();
    this.middlewares();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(router)
  }


}

export default new App().express;