import express from 'express';
import cors from 'cors';
import { router } from './routes';
import { connect } from './database/connection';


class App {
  constructor() {
    this.express = express();
    this.middlewares();
  }

  async middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
    await this.connectDatabase();
    this.express.use(router)
  }

  async connectDatabase() {
    await connect();
  }
}

export default new App().express;