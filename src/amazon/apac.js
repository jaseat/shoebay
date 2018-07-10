//this is currently unused
const { OperationHelper } = require('apac');
const parseString = require('xml2js').parseString;
const opHelper = new OperationHelper({
  awsId: process.env.AWS_ID,
  awsSecret: process.env.AWS_SECRET,
  assocId: process.env.AWS_TAG,
});

const APACrequestBuilder = params => {
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
        nodeId = '7141123011';
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
    //cuz amazon doesn't have browse node only for shoes
    if (index == 'Fashion') keywords += 'shoes';
    //all other filters will be part of keywords
    for (key in params) {
      keywords += params[key] + ' ';
    }
    console.log(keywords);
    opHelper
      .execute('ItemSearch', {
        // Condition: 'New', //looking only for new
        MinimumPrice: minPrice,
        MaximumPrice: maxPrice,
        SearchIndex: index,
        BrowseNode: nodeId,
        Title: category, //here goes category
        Keywords: keywords, //width size and color can be here
        ResponseGroup: 'Small,OfferSummary',
        ItemPage: page,
        // Availability: 'Available',
      })
      .then(function(results) {
        const stringResult = '';
        parseString(results, (err, result) => {
          console.log(result);
        });
        //return clean object with only needed fields
        // var generateResultArr = [];
        // results.map(item => {
        //   generateResultArr.push({
        //     asin: item.ASIN[0],
        //     parent_asin: item.ParentASIN[0],
        //     url: item.DetailPageURL[0],
        //     title: item.ItemAttributes[0].Title[0],
        //     price: item.OfferSummary[0].LowestNewPrice[0].FormattedPrice[0],
        //   });
        // });

        // resolve(generateResultArr);
      })
      .catch(function(err) {
        reject(err[0].Error);
      });
  });
};

module.exports = { APACrequestBuilder };
