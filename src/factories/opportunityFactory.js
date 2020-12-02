import { OpportunityRepository } from '../repositories/implementions/OpportunityRepository';
import { OpportunityController }  from '../controllers/OpportunityController';

const generateInstance = () => {
  const repository = new OpportunityRepository();
  const opportunityController = new OpportunityController(repository);

  return opportunityController;

}

export default generateInstance;