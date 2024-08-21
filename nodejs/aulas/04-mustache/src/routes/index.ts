import { Router, Request, Response } from 'express';
import * as HomeControler from '../controllers/homeController';
import * as UserControler from '../controllers/userController';
import * as SignupController from '../controllers/signupController';
import * as DashboardController from '../controllers/dashboardController';
import * as NewsController from '../controllers/newsController';

const router = Router();

router.get('/news/:slug', NewsController.news);

router.get('/dashboard', DashboardController.dashboard);

// 06 - REQ.QUERY
router.get('/signup', SignupController.signup);

// 07.2 - REQ.BODY GET
router.get('/age', UserControler.ageForm);

// 07.1 - REQ.BODY POST
router.post('/age', UserControler.ageAction);

router.get('/', HomeControler.home);

export default router;
