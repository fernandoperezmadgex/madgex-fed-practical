import jobsData from '../data/jobs.js';
import taxonomy from '../data/taxonomy.js';

export default (/* server, options */) => {
  return [
    {
      method: 'get',
      path: '/api/jobs',
      async handler(request) {
        const culture = request.headers['x-culture'] || 'en-GB';
        const { jobsList } = jobsData;

        return { jobsList, taxonomy, culture };
      },
    },
  ];
};
