import { IOrderProvider } from '../IOrderProvider';
import js2xmlparser from 'js2xmlparser';
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
  }

  async storeOrder(order) {
    const xml = js2xmlparser.parse('pedido', order, this.Options);
    try {
      const response = await axios.post(`https://bling.com.br/Api/v2/pedido/json?apikey=${this.API_KEY}&xml=${xml}`);
      
      return response.data
    } catch (error) {
      throw error;
    }
  }
}

export { BlingProvider }