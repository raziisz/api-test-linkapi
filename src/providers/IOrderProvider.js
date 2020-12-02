import { NotImplementedException } from '../utils/NotImplementedException';

class IOrderProvider{
  
  storeOrder(order) {
    throw new NotImplementedException();
  }
}

export { IOrderProvider }