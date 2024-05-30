import app from '@/app';
import '@/config/module-alias';
import 'express-async-errors';

import { env, logger } from '@/config';



app.listen(env.port, () => {
  logger.info('Server started on port:', env.port);
});