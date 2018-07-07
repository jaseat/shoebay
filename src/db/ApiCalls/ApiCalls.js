var amazon = require('amazon-product-api');

var client = amazon.createClient({
  awsId: 'AKIAJQ3AS4URJTVW54AQ',
  awsSecret: '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',
  awsTag: 'mobilea0a3089-20',
});

var requestBuilder = function(params) {
  const { MinPrice, MaxPrice, Department, Type, keywords } = params;
  client
    .itemSearch({
      MinimumPrice: MinPrice,
      MaximumPrice: MaxPrice,
      searchIndex: Department,
      Title: Type,
      keywords: keywords,
      responseGroup: 'ItemAttributes,Offers,Images',
    })
    .then(function(results) {
      console.log(results);
    })
    .catch(function(err) {
      console.log(err[0].Error);
    });
};

requestBuilder({
  keywords: 'shoes size 10',
  MinPrice: '500',
  MaxPrice: '2500',
  Department: 'FashionMen',
  Type: 'sports',
});

// export default ApiCalls;
