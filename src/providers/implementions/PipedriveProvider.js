import { IOpportunityProvider } from '../IOpportunityProvider';
import pipedrive from 'pipedrive';
import dotenv from 'dotenv';
dotenv.config();

export class PipedriveProvider extends IOpportunityProvider {
  constructor() {
    super();
    
    pipedrive.Configuration.apiToken = process.env.API_KEY_PIPEDRIVE;
    this.controller = pipedrive.DealsController;
  }

  async getOpportunitiesWon() {
    try {
      const response = await this.controller.getAllDeals({
        status: 'won'
      });
  
      return response.data
    } catch (error) {
      throw error;
    }
  }


}