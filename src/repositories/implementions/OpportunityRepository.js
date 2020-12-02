import { IOpportunityRepository } from '../IOpportunityRepository';
import Opportunity from '../../database/schemas/OpportunitySchema';
import { PipedriveProvider } from '../../providers/implementions/PipedriveProvider';

class OpportunityRepository extends IOpportunityRepository {
  constructor() {
    super();
    this._database = Opportunity;
    this._pipe = new PipedriveProvider();
  }

  async getAllOpportunities() {
    const opportunities = await this._pipe.getOpportunitiesWon();

    return opportunities;
  }
}

export { OpportunityRepository };