const visionCore = require('./visionCore');
const shoesRexEx = require('./dictionary').shoes;

function LabelDetection(img) {
  return new Promise((resolve, reject) => {
    visionCore
      .detect(img, 'LABEL')
      .then(resp => {
        var queryString = '';
        //generating string out of labels
        for (var i = 0; i < resp.length; i++) {
          queryString += resp[i].description + ' ';
        }
        queryString = queryString.trim();
        //we don't need certain words since search will be narrowed down by amazon api
        var alter = queryString.replace(shoesRexEx, '');
        //removing double entrees
        var removeDoubles = alter
          .split(' ')
          .filter((word, i, allwords) => {
            return i == allwords.indexOf(word);
          })
          .join(' ');
        removeDoubles = removeDoubles.trim();

        resolve(removeDoubles);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function WebDetection(img) {
  return new Promise((resolve, reject) => {
    visionCore
      .detect(img, 'WEB')
      .then(resp => {
        var removeDoubles = resp
          .split(' ')
          .filter((word, i, allwords) => {
            return i == allwords.indexOf(word);
          })
          .join(' ');

        var FINAL = removeDoubles.replace(shoesRexEx, '');
        FINAL = FINAL.trim();
        resolve(FINAL);
      })
      .catch(err => {
        reject(err);
      });
  });
}

module.exports = { LabelDetection, WebDetection };
