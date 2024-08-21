import { Request, Response, Router } from 'express';

const router = Router();

import * as PageController from '../controllers/pageControler';
import * as SearchController from '../controllers/searchControler';

router.get('/', PageController.page);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);
router.get('/search', SearchController.search);

router.use((req: Request, res: Response) => {
  res.render('404');
});

export default router;
