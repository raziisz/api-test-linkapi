import { NotImplementedException } from '../utils/NotImplementedException';

class IOpportunityRepository {
  getAllOpportunities() {
    throw new NotImplementedException();
  }

  getOpportunitiesByDay() {
    throw new NotImplementedException();
  }
}

export { IOpportunityRepository };