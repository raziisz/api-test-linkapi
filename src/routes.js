import { Router } from 'express';

import opportunityFactory from './factories/opportunityFactory';

const opportunityController = opportunityFactory();

const router = Router();

router.get('/', (req, res) => {
  return res.send("It's works");
});
router.get('/opportunities', opportunityController.index);

export { router }