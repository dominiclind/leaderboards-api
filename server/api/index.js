import { Router } from 'express';

import all from './exercises/all';
import endworkout from './push/end-workout';

export default function() {
	var api = Router();

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({
			version : '1.0',
      app: 'leaderboards api'
		});
	});

  /*include*/
  api.post('/push/send', endworkout);
	
  return api;
}
