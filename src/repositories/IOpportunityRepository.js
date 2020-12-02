class NotImplementedException extends Error {
  constructor() {
    super("Not Implemented Exception")
  }
}

class IOpportunitRepository {
  getAllOpportunities() {
    throw new NotImplementedException();
  }
}

export { IOpportunitRepository };