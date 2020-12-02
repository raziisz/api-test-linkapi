import { IOpportunityRepository } from '../IOpportunityRepository';
import Opportunity from '../../database/schemas/OpportunitySchema';

class OpportunityRepository extends IOpportunityRepository {
  constructor() {
    super();
    this._database = Opportunity;
  }

  async getAllOpportunities() {
    const opportunities = await this._database.find();

    return opportunities;
  }
}

export { OpportunityRepository };