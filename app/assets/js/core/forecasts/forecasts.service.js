angular
  .module('core.forecasts')
  .factory('Forecasts', [
    'XHR',
    (XHR) => {
      let location = 'Paris';
      let request = {};

      return {
        getData: (callback) => {
          if (request.forecast) {
            return callback(request);
          }

          request = XHR.get(
            {
              q: location,
            },
            response => callback(response),
          );

          return request;
        },

        getLocation: () => location,

        setLocation: (value) => {
          if (value && location !== value) {
            location = value;
            request = {};
          }
        },
      };
    },
  ]);
