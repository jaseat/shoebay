function analyze(img) {
  const visionCore = require('./visionCore');
  const shoesRexEx = require('./dictionary').shoes;

  return new Promise(resolve => {
    visionCore.detect(img, 'LABEL').then(resp => {
      var queryString = '';
      //generating string out of labels
      for (var i = 0; i < resp.length; i++) {
        queryString += resp[i].description + ' ';
      }
      //cuz feels good
      var alter = queryString.replace(shoesRexEx, '');
      //removing double entrees
      var removeDoubles = alter
        .split(' ')
        .filter((word, i, allwords) => {
          return i == allwords.indexOf(word);
        })
        .join(' ');

      resolve(removeDoubles);
    });
  });
}

module.exports = analyze;
