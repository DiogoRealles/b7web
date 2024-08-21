import { Router, Request, Response } from 'express';

const router = Router();

router.get('/news/:slug', (req: Request, res: Response) => {
  const { slug } = req.params;

  res.send(`Page news: ${slug}`);
});

router.get('/about', (req: Request, res: Response) => {
  res.send('Página institucional sobre a empresa');
});

router.get('/contact', (req: Request, res: Response) => {
  res.send('Formulário de Contato');
});

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World ExpressTS');
});

export default router;
