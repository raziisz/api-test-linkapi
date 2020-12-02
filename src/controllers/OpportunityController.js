class OpportunityController {
  
  constructor(repository) {
    this._repository = repository
    this.index = this.index.bind(this);
  }

  async index(req, res) {
    
    try {
      const data = await this._repository.getAllOpportunities();

      console.log(data);

      return res.json(data);
    } catch (error) {
      console.log('Deu erro', error)

      return res.status(500).send('Error internal')
    }
  }
}

export {OpportunityController};