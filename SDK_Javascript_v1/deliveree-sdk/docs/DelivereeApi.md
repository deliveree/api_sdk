# DelivereeApi.DelivereeApi

All URIs are relative to *https://api.sandbox.deliveree.com/public_api/v1*

| Method                                                               | HTTP request                     | Description |
| -------------------------------------------------------------------- | -------------------------------- | ----------- |
| [**cancelBooking**](DelivereeApi.md#cancelBooking)                   | **POST** /deliveries/{id}/cancel |
| [**deliveriesGetQuotePost**](DelivereeApi.md#deliveriesGetQuotePost) | **POST** /deliveries/get_quote   |
| [**deliveriesPost**](DelivereeApi.md#deliveriesPost)                 | **POST** /deliveries             |
| [**deliveriesGet**](DelivereeApi.md#deliveriesGet)                   | **GET** /deliveries/{id}         |
| [**deliveriesGetList**](DelivereeApi.md#deliveriesGetList)           | **GET** /deliveries              |
| [**vehicleTypesGet**](DelivereeApi.md#vehicleTypesGet)               | **GET** /vehicle_types           |

<a name="cancelBooking"></a>

# **cancelBooking**

> cancelBooking(id, opts)

### Example

```javascript
var DelivereeApi = require("deliveree_api");
var defaultClient = DelivereeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new DelivereeApi.DelivereeApi();

var id = 56; // Number | ID of delivery

var opts = {
  acceptLanguage: "en", // String |
};

var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully.");
  }
};
apiInstance.cancelBooking(id, opts, callback);
```

### Parameters

| Name     | Type                    | Description    | Notes                      |
| -------- | ----------------------- | -------------- | -------------------------- |
| **id**   | **Number**              | ID of delivery | [required]                 |
| **opts** | [**Option**](Option.md) |                | [optional] [default to en] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/xml, application/json

<a name="deliveriesGetQuotePost"></a>

# **deliveriesGetQuotePost**

> QuoteResponse deliveriesGetQuotePost(body, opts)

### Example

```javascript
var DelivereeApi = require("deliveree_api");
var defaultClient = DelivereeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new DelivereeApi.DelivereeApi();

var body = {
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
    },
  ],
};

var opts = {
  acceptLanguage: "en", // String |
};

var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
};
apiInstance.deliveriesGetQuotePost(body, opts, callback);
```

### Parameters

| Name     | Type                                | Description | Notes                      |
| -------- | ----------------------------------- | ----------- | -------------------------- |
| **body** | [**QuoteRequest**](QuoteRequest.md) |             | [required]                 |
| **opts** | [**Option**](Option.md)             |             | [optional] [default to en] |

### Return type

[**QuoteResponse**](QuoteResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/xml, application/json

<a name="deliveriesPost"></a>

# **deliveriesPost**

> CreateDeliveryResponse deliveriesPost(body, opts)

### Example

```javascript
var DelivereeApi = require("deliveree_api");
var defaultClient = DelivereeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new DelivereeApi.DelivereeApi();

var body = {
  time_type: "now",
  locations: [
    {
      address:
        "Jl. Sultan Iskandar Muda No.21, Arteri Pondok Indah, Pd. Pinang, Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia",
      latitude: -6.2608232,
      longitude: 106.7884168,
    },
  ],
};

var opts = {
  acceptLanguage: "en", // String |
};

var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
};
apiInstance.deliveriesPost(body, opts, callback);
```

### Parameters

| Name     | Type                                                  | Description | Notes                      |
| -------- | ----------------------------------------------------- | ----------- | -------------------------- |
| **body** | [**CreateDeliveryRequest**](CreateDeliveryRequest.md) |             | [required]                 |
| **opts** | **String**                                            |             | [optional] [default to en] |

### Return type

[**CreateDeliveryResponse**](CreateDeliveryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/xml, application/json

<a name="deliveriesGet"></a>

# **deliveriesGet**

> deliveriesGet(id, opts)

### Example

```javascript
var DelivereeApi = require("deliveree_api");
var defaultClient = DelivereeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new DelivereeApi.DelivereeApi();

var id = 56; // Number | ID of delivery

var opts = {
  acceptLanguage: "en", // String |
};

var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully.");
  }
};
apiInstance.deliveriesGet(id, opts, callback);
```

### Parameters

| Name     | Type                    | Description    | Notes                      |
| -------- | ----------------------- | -------------- | -------------------------- |
| **id**   | **Number**              | ID of delivery | [required]                 |
| **opts** | [**Option**](Option.md) |                | [optional] [default to en] |

### Return type

[**DeliveryResponse**](DeliveryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/xml, application/json

<a name="deliveriesGetList"></a>

# **deliveriesGetList**

> deliveriesGetList(params, opts)

### Example

```javascript
var DelivereeApi = require("deliveree_api");
var defaultClient = DelivereeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new DelivereeApi.DelivereeApi();

var params = {
  page: 1, // {Number}
  per_page: 10, // {Number}
};

var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully.");
  }
};
apiInstance.deliveriesGetList(params, opts, callback);
```

### Parameters

| Name       | Type                                              | Description | Notes                      |
| ---------- | ------------------------------------------------- | ----------- | -------------------------- |
| **params** | [**DeliveryListRequest**](DeliveryListRequest.md) |             | [required]                 |
| **opts**   | [**Option**](Option.md)                           |             | [optional] [default to en] |

### Return type

[**DeliveryResponseList**](DeliveryResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/xml, application/json

<a name="deliveriesGet"></a>

# **vehicleTypesGet**

> vehicleTypesGet(opts)

### Example

```javascript
var DelivereeApi = require("deliveree_api");
var defaultClient = DelivereeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new DelivereeApi.DelivereeApi();

var opts = {
  acceptLanguage: "en", // String |
};

var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully.");
  }
};
apiInstance.vehicleTypesGet(opts, callback);
```

### Parameters

| Name     | Type                    | Description | Notes                      |
| -------- | ----------------------- | ----------- | -------------------------- |
| **opts** | [**Option**](Option.md) |             | [optional] [default to en] |

### Return type

[**VehicleTypeResponseList**](VehicleTypeResponseList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/xml, application/json
