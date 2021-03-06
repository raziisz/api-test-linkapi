import { Router } from 'express';

import opportunityFactory from './factories/opportunityFactory';

const opportunityController = opportunityFactory();

const router = Router();

router.get('/', (req, res) => {
  return res.send("It's works");
});


// Opportunities
router.get('/opportunities', opportunityController.index);
router.get('/opportunities/group-by-day', opportunityController.showGroupBy);

export { router }