import jobsData from '../data/jobs.js';
import taxonomy from '../data/taxonomy.js';

export default (/* server, options */) => {
  return [
    {
      method: 'get',
      path: '/api/jobs',
      async handler() {
        const { jobsList } = jobsData;

        return { jobsList, taxonomy };
      },
    },
  ];
};
