import { Router } from 'express';

import opportunityFactory from './factories/opportunityFactory';

const opportunityController = opportunityFactory();

const router = Router();

router.get('/', opportunityController.index);

export { router }