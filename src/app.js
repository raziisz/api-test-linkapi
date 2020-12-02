import express from 'express';
import cors from 'cors';
import pipeAndBlingIntegrate from './jobs/IntegratePipeAndBling';
import { router } from './routes';
import { connect } from './database/connection';


class App {
  constructor() {
    this.express = express();
    //setInterval(pipeAndBlingIntegrate, 1000 * 60);
    this.middlewares();
  }

  async middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
    await this.connectDatabase();
    //this.express.use(pipeAndBlingIntegrate);
    this.express.use(router)
  }

  async connectDatabase() {
    await connect();
  }


}

export default new App().express;