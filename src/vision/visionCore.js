//core functions that make calls to Vision API and return promises
//detect labbes, and websearches
//takes one argument image in base64 encoding
//LABEL - the response provided is an array of objects with keys (etc descritption, ratio)
//WEB - response is a single string

function detect(base64img, method) {
  // [BEGIN vision_detection]
  const request = require('request');
  const URL = process.env.VISION_API_URL;
  const KEY = process.env.VISION_API_KEY;
  //!important
  const BODY = {
    requests: [
      {
        image: {
          content: base64img,
        },
        features: [
          {
            type: method + '_DETECTION', //LABEL_DETECTION or WEB_DETECTION
            maxResults: 3,
          },
        ],
      },
    ],
  };
  //
  return new Promise((resolve, reject) => {
    request.post(
      {
        url: URL + '?key=' + KEY,
        body: JSON.stringify(BODY),
      },
      (err, resp, body) => {
        if (err) reject(err);
        var parse = JSON.parse(body);

        //this will also throw 503 if there is an error with base64 image
        // if (parse.responses[0].error) {
        //   reject(parsedBody.responses[0].error);
        // }
        //otherwise everything is cool returning object to work with
        var annotations = null;
        switch (method) {
          case 'WEB':
            annotations =
              parse.responses[0].webDetection.bestGuessLabels[0].label;
            break;
          case 'LABEL':
            annotations = parse.responses[0].labelAnnotations;
            break;
          default:
            reject('Wrong method arg, use LABEL or WEB');
            break;
        }
        resolve(annotations);
      }
    );
  });
  // [END vision_detection]
}

module.exports = { detect };
