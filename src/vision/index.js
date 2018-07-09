function detectLabel(base64img) {
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
            type: 'LABEL_DETECTION',
            maxResults: 5,
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
        //this will also throw 503 if there is an error with base64 image
        // var parsedBody = JSON.parse(body);
        // if (parsedBody.responses[0].error) {
        //   reject(parsedBody.responses[0].error);
        // }
        //otherwise everything is cool returning object to work with
        resolve(body);
      }
    );
  });
  // [END vision_detection]
}

module.exports = { detectLabel };
