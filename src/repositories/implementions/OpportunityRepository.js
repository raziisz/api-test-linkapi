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

  async getOpportunitiesByDay() {
    let mappedOpportunities = [];
    
    const opportunities = await this._database.aggregate([
      {
        $group: 
        {
          _id: {
            day: { $dayOfMonth: "$createdAt"},
            month: { $month: "$createdAt"},
            year: { $year: "$createdAt"},
          },
          total: { $sum: "$value"},
          count: { $sum: 1}
        }
      },
      {
        $sort: { count: 1}
      }
    ]);
    console.log(opportunities)
    if (opportunities.length > 0) {
      
      mappedOpportunities = opportunities.map(op => {
        const formatMMOrDd = (data = "") => data.toString().padStart(2, "0");
        return {
          date: `${op._id.year}-${formatMMOrDd(op._id.month)}-${formatMMOrDd(op._id.day)}`,
          total: op.total,
          quantity: op.count
        }
      });

    }

    return mappedOpportunities;
  }
}

export { OpportunityRepository };