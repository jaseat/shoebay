const amazon = require('amazon-product-api');

const client = amazon.createClient({
  awsId: process.env.AWS_ID,
  awsSecret: process.env.AWS_SECRET,
  awsTag: process.env.AWS_TAG,
});
//lookUpSpecific item and return image url
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
    let nodeId = '';
    let index = '';
    //values from amazon api docs to narrow down search
    switch (params.department) {
      case 'Men':
        index = 'FashionMen';
        nodeId = '679255011';
        break;
      case 'Women':
        index = 'FashionWomen';
        nodeId = '679337011';
        break;
      default:
        index = 'Fashion';
        nodeId = '7141124011';
        break;
    }
    delete params.department;

    let category = params.category || '';
    delete params.category;

    let maxPrice = params.maxPrice || '';
    delete params.maxPrice;
    let minPrice = params.minPrice || '';
    delete params.minPrice;
    let page = params.page || 1;
    delete params.page;

    let keywords = '';
    //all other filters will be part of keywords
    for (key in params) {
      keywords += params[key] + ' ';
    }

    client
      .itemSearch({
        condition: 'New', //looking only for new
        MinimumPrice: minPrice,
        MaximumPrice: maxPrice,
        searchIndex: index,
        browseNode: nodeId,
        Title: category, //here goes category
        Keywords: keywords, //width size and color can be here
        responseGroup: 'ItemAttributes,Offers',
        itemPage: page,
        availability: 'Available',
      })
      .then(function(results) {
        //return clean object with only needed fields
        var generateResultArr = [];
        results.map(item => {
          generateResultArr.push({
            asin: item.ASIN[0],
            parent_asin: item.ParentASIN[0],
            url: item.DetailPageURL[0],
            title: item.ItemAttributes[0].Title[0],
            price: item.ItemAttributes[0].ListPrice[0].FormattedPrice[0],
          });
        });
        resolve(generateResultArr);
      })
      .catch(function(err) {
        reject(err[0].Error);
      });
  });
};

module.exports = { requestBuilder, itemLookup };
