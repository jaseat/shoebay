const amazon = require('amazon-product-api');

const client = amazon.createClient({
  awsId: process.env.AWS_ID,
  awsSecret: process.env.AWS_SECRET,
  awsTag: process.env.AWS_TAG,
});

const itemLookup = itemASIN => {
  return new Promise((resolve, reject) => {
    client
      .itemLookup({
        idType: 'ASIN',
        itemId: itemASIN,
        responseGroup: 'Images',
      })
      .then(response => {
        var large = response[0].LargeImage[0].URL[0];
        resolve(large);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const requestBuilder = params => {
  return new Promise((resolve, reject) => {
    const womenShoesNodeId = '679337011';
    const menShoesNodeId = '679255011';
    const keywords = params;
    client
      .itemSearch({
        condition: 'New',
        // MinimumPrice: minPrice,
        // MaximumPrice: maxPrice,
        searchIndex: 'FashionWomen',
        browseNode: womenShoesNodeId,
        // Title: category,//here goes category
        Keywords: keywords, //width size and color can be here
        responseGroup: 'ItemAttributes,Images,Offers',
        itemPage: 1,
        // availability: 'Available',
      })
      .then(function(results) {
        var generateResultArr = [];
        results.map(item => {
          generateResultArr.push({
            asin: item.ASIN[0],
            parent_asin: item.ParentASIN[0],
            url: item.DetailPageURL[0],
            title: item.ItemAttributes[0].Title[0],
          });
        });
        resolve(generateResultArr);
      })
      .catch(function(err) {
        reject(err[0].Error);
      });
  });

  // var minPrice = '';
  // var maxPrice = '';
  // var department = '';
  // var type = '';
  // var size = '';
  // var width = '';
  // var color = '';

  // for (var k in params) {
  //   if (k == 'minPrice') {
  //     var minPrice = minPrice + params[k];
  //     console.log(minPrice);
  //   } else if (k == 'maxPrice') {
  //     var maxPrice = maxPrice + params[k];
  //     console.log(maxPrice);
  //   } else if (k == 'department') {
  //     if (params[k] == 'Men') {
  //       var department = 'FashionMen';
  //       console.log(department);
  //     } else if (params[k] == 'Women') {
  //       var department = 'FashionWomen';
  //       console.log(department);
  //     }
  //   } else if (k == 'category') {
  //     var type = type + params[k];
  //     console.log(type);
  //   } else if (k == 'size') {
  //     var size = size + params[k];
  //     console.log(size);
  //   } else if (k == 'width') {
  //     var width = width + params[k];
  //     console.log(width);
  //   } else if (k == 'color') {
  //     var color = color + params[k];
  //     console.log(color);
  //   } else {
  //     console.log('Missing Input');
  //   }
  // }
  // var keywords = 'shoes' + ', ' + width + ', ' + size + ', ' + color;
};

module.exports = { requestBuilder, itemLookup };
