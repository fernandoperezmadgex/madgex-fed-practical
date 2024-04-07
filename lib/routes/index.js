import jobsData from '../data/jobs.js';
import taxonomy from '../data/taxonomy.js';

export default (/* server, options */) => {
  return [
    {
      method: 'get',
      path: '/api/jobs',
      async handler(request) {
        const culture = request.headers['x-culture'] || 'en-GB';
        const { jobCount, jobsList } = jobsData;

        function filterTermsByCulture(data, cultureCode) {
          return data.map((category) => ({
            ...category,
            names: category.names.filter((name) => name.culture === cultureCode),
            terms: category.terms.map((term) => ({
              ...term,
              paths: term.paths.filter((path) => path.culture === cultureCode),
              names: term.names.filter((name) => name.culture === cultureCode),
            })),
          }));
        }

        const filteredTaxonomy = filterTermsByCulture(taxonomy, culture);

        return { jobCount, jobsList, filteredTaxonomy };
      },
    },
  ];
};
