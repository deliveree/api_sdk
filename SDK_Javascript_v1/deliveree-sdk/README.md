# Deliveree_SDK

Deliveree SDK - JavaScript client for deliveree_api
With Deliveree SDK, developers can integrate our on-demand local delivery platform into their applications. The SDK is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.

- SDK version: 1.0.0
- Package version: 1.0.0

## Basic installation & Used
  - Required to install Nodejs
  - More info [Node.js](https://nodejs.org/)

### Local development
- There are two ways to install SDK in to your project.
  - Manual link to SDK `JAVASCRIPT_CLIENT_DIR`.
  - Using npm local remote package `package.json`


#### 1. Manual install SDK 
Move package `deliveree-sdk` into your project

Then require:
```javascript
var DelivereeApi = require("path/to/deliveree-sdk/src/index");

var defaultClient = DelivereeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix['Authorization'] = "Token"

var api = new DelivereeApi.DelivereeApi()

var id = 56; // {Number} ID of delivery

var opts = { 
  'acceptLanguage': "en" // {String} 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.cancelBooking(id, opts, callback);

```

#### 2. Using NPM local remote package

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json`

Adding SDK in `package.json` file in your project.
```javascript
 "devDependencies": {
    "deliveree-sdk": "1.0.0"
  }
```

Next, Install [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

To make sure link is available in your device
Then go to `deliveree-sdk` directory and run:
```shell

  npm link

  // result like
  ***
  success Registered "deliveree-sdk".
  ...
  ***
```

Finally, switch to the directory you want to use your deliveree_SDK from, and run:

```shell
npm link  "deliveree-sdk"
```

You should now be able to `require('deliveree_api')` in javascript files from the directory you ran the last 
command above from.

# Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:



Then example 1 Get Quotes: 
```javascript
  var DelivereeApi = import("deliveree-sdk");
  // Basic use
  var ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
  ApiKeyAuth.apiKey = "YOUR API KEY";

  var api = new DelivereeApi.DelivereeApi();
  var opts = {
      acceptLanguage: "en" // {String}
    };
    let data = {
      time_type: "now",
      locations: [
        {
          address:
            "Jl. Sultan Iskandar Muda No.21, Arteri Pondok Indah, Pd. Pinang, Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia",
          latitude: -6.2608232,
          longitude: 106.7884168
        }
      ]
    };

    var callback = function(error, response) {
      if (error) {
        console.error(error);
      } else {
        console.log("API called successfully.");
      }
    };
    api.deliveriesGetQuotePost(data, opts, callback);

```

Example 2 Create Deliveree booking
```javascript 
  var DelivereeApi = import("deliveree-sdk");

  var ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
  ApiKeyAuth.apiKey = "YOUR API KEY";
  let api = new DelivereeApi.DelivereeApi();
  let  opts = {
    acceptLanguage: "en" // {String}
  };

 let delivery = {
      vehicle_type_id: 62,
      note: "Testing - API Default Fragile item that needs good care Welcome.",
      time_type: "schedule",
      pickup_time: "2016-05-13T09:51:16+07:00",
      job_order_number: "66666",
      locations: [
        {
          // location
        },
        {
          // location 
        }
      ]
    };
  var callback = function(error, data, response) {
    if (error) {
      console.log(error);
    } else {
    console.log("API called successfully.");
    }
  };

api.deliveriesPost(delivery, opts, callback);
```

Example 3 CancelBooking
```javascript
  var DelivereeApi = import("deliveree-sdk");

  // Basic use
  var ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
  ApiKeyAuth.apiKey = "YOUR API KEY";

  var api = new DelivereeApi.DelivereeApi();
  var id = 56; // {Number} ID of delivery

  var opts = {
    acceptLanguage: "en" // {String}
  };

  var callback = function(error, data, response) {
    if (error) {
      console.log(error);
    } else {
    console.log("API called successfully.");
    }
  };

api.cancelBooking(id, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *SDK APIs*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DelivereeApi.DelivereeApi* | [**cancelBooking**](docs/DelivereeApi.md#cancelBooking) | **POST** /deliveries/{id}/cancel | 
*DelivereeApi.DelivereeApi* | [**deliveriesGetQuotePost**](docs/DelivereeApi.md#deliveriesGetQuotePost) | **POST** /deliveries/get_quote | 
*DelivereeApi.DelivereeApi* | [**deliveriesPost**](docs/DelivereeApi.md#deliveriesPost) | **POST** /deliveries | 


## Documentation for Models

 - [DelivereeApi.Delivery](docs/Delivery.md)
 - [DelivereeApi.Location](docs/Location.md)
 - [DelivereeApi.PositionTracking](docs/PositionTracking.md)
 - [DelivereeApi.Quote](docs/Quote.md)


## Documentation for Authorization


### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

