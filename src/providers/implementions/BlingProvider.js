import { IOrderProvider } from '../IOrderProvider';
const js2xmlparser = require('js2xmlparser');
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

class BlingProvider extends IOrderProvider {
  constructor() {
    super();

    this.API_KEY = process.env.API_KEY_BLING;
    this.Options = {
      declaration: {
        encoding: 'UTF-8'
      }
    }
    this.xmlParser = js2xmlparser;

    this.storeOrder = this.storeOrder.bind(this);
  }

  async storeOrder(order) {
    const xml = this.xmlParser.parse('pedido', order, this.Options);
    try {
      const response = await axios.post(`https://bling.com.br/Api/v2/pedido/json?apikey=${this.API_KEY}&xml=${xml}`);
      if(!!response.data.retorno.erros) {
        console.log('erros', JSON.stringify(response.data.retorno.erros));
      }
      return response.data
    } catch (error) {
      throw error;
    }
  }
}

export { BlingProvider }