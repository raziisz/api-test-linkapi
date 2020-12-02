import express from 'express';
import cors from 'cors';

class App {
  constructor() {
    this.express = express();
    this.middlewares();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }


}

export default new App().express;