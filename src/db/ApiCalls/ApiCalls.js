const { OperationHelper } = require('apac');

const opHelper = new OperationHelper({
  awsId: 'AKIAJQ3AS4URJTVW54AQ',
  awsSecret: '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',
  assocId: 'mobilea0a3089-20',
  maxRequestsPerSecond: 1,
});

var requestBuilder = function(params) {
  let keywords = params.keywords;
  opHelper
    .execute('ItemSearch', {
      SearchIndex: 'Fashion',
      Keywords: keywords,
      ResponseGroup: 'ItemAttributes,Offers',
    })
    .then(response => {
      //console.log('Results object: /n \n', response.result);
      console.log('Raw response body: /n \n', response.responseBody);
    })
    .catch(err => {
      console.error('Something went wrong! ', err);
    });
};

requestBuilder({ keywords: 'shoes' });

export default ApiCalls;
