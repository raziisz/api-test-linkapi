import { NotImplementedException } from '../utils/NotImplementedException';

class IOpportunityRepository {
  getAllOpportunities() {
    throw new NotImplementedException();
  }

  getOpportunitiesByDay() {
    throw new NotImplementedException();
  }

  getOpportunityById(id) {
    throw new NotImplementedException();
  }

  addOpportunity(data) {
    throw new NotImplementedException();
  }
}

export { IOpportunityRepository };