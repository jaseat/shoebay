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
    var { filters, page } = params;
    //values from amazon api docs to narrow down search
    switch (filters.department) {
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
        nodeId = '7141123011';
        break;
    }
    delete filters.department;

    let category = filters.category || '';
    delete filters.category;

    let maxPrice = filters.maxPrice || '';
    delete filters.maxPrice;
    let minPrice = filters.minPrice || '';
    delete filters.minPrice;

    let keywords = '';
    //cuz amazon doesn't have browse node only for shoes
    if (index == 'Fashion') keywords += 'shoes ';
    //all other filters will be part of keywords
    for (key in filters) {
      keywords += filters[key] + ' ';
    }
    console.log(keywords);
    console.log(page);
    client
      .itemSearch({
        Condition: 'New', //looking only for new
        MinimumPrice: minPrice,
        MaximumPrice: maxPrice,
        searchIndex: index,
        browseNode: nodeId,
        Title: category, //here goes category
        keywords: keywords, //width size and color can be here
        responseGroup: 'Small,OfferSummary',
        itemPage: page,
        Availability: 'Available',
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
            price: item.OfferSummary[0].LowestNewPrice[0].FormattedPrice[0],
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
