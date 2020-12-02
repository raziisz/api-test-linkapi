import { NotImplementedException } from '../utils/NotImplementedException';

class IOpportunityProvider {
  getOpportunitiesWon() {
    throw new NotImplementedException();
  }
}

export { IOpportunityProvider }