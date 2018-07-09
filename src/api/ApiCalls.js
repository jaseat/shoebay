var amazon = require('amazon-product-api');

var client = amazon.createClient({
  awsId: 'AKIAJQ3AS4URJTVW54AQ',
  awsSecret: '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',
  awsTag: 'mobilea0a3089-20',
});

var requestBuilder = function(params) {
  var minPrice = '';
  var maxPrice = '';
  var department = '';
  var type = '';
  var size = '';
  var width = '';
  var color = '';

  for (var k in params) {
    if (k == 'minPrice') {
      var minPrice = minPrice + params[k];
      console.log(minPrice);
    } else if (k == 'maxPrice') {
      var maxPrice = maxPrice + params[k];
      console.log(maxPrice);
    } else if (k == 'department') {
      if (params[k] == 'Men') {
        var department = 'FashionMen';
        console.log(department);
      } else if (params[k] == 'Women') {
        var department = 'FashionWomen';
        console.log(department);
      }
    } else if (k == 'category') {
      var type = type + params[k];
      console.log(type);
    } else if (k == 'size') {
      var size = size + params[k];
      console.log(size);
    } else if (k == 'width') {
      var width = width + params[k];
      console.log(width);
    } else if (k == 'color') {
      var color = color + params[k];
      console.log(color);
    } else {
      console.log('Missing Input');
    }
  }
  var keywords = 'shoes' + ', ' + width + ', ' + size + ', ' + color;
  console.log(keywords);
  client
    .itemSearch({
      MinimumPrice: minPrice,
      MaximumPrice: maxPrice,
      searchIndex: department,
      Title: type,
      Keywords: keywords,
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
  size: '10',
  width: 'W',
  color: 'red',
  minPrice: '500',
  maxPrice: '2500',
  department: 'Men',
  category: 'sports',
});

// export default ApiCalls;
