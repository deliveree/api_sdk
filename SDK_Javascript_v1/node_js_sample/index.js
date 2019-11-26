const express = require('express')
const DelivereeSDK = require('deliveree-sdk');
const app = express()
const port = 3000

var defaultClient = DelivereeSDK.ApiClient.instance;
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "YOUR API KEY"

var api = new DelivereeSDK.DelivereeApi()

// app.set('view engine', 'pug');
app.get('/', (req, res) => {
  var id = 56; // {Number} ID of delivery
  var opts = { 
    'acceptLanguage': "en" // {String} 
  };

  var callback = function(error, data, response) {
    let message = "";
    if (error) {
      message = error;
    } else {
      message = 'API called successfully.';
    }
    res.send({ title: 'Sample SDK', message: message });
  };

  api.cancelBooking(id, opts,  callback);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));