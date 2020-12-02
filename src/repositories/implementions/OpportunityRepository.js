import { IOpportunitRepository } from '../IOpportunityRepository';

class OpportunityRepository extends IOpportunityRepository {
  constructor(database) {
    super();
    this._database = database;
  }

  async getAllOpportunities() {
    const opportunities = await this._database.find();

    return opportunities;
  }
}

export { OpportunityRepository };