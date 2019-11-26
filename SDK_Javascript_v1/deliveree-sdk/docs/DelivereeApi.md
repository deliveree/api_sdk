# DelivereeApi.DelivereeApi

All URIs are relative to *https://api.sandbox.deliveree.com/public_api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelBooking**](DelivereeApi.md#cancelBooking) | **POST** /deliveries/{id}/cancel | 
[**deliveriesGetQuotePost**](DelivereeApi.md#deliveriesGetQuotePost) | **POST** /deliveries/get_quote | 
[**deliveriesPost**](DelivereeApi.md#deliveriesPost) | **POST** /deliveries | 


<a name="cancelBooking"></a>
# **cancelBooking**
> cancelBooking(id, opts)



### Example
```javascript
var DelivereeApi = require('deliveree_api');
var defaultClient = DelivereeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new DelivereeApi.DelivereeApi();

var id = 56; // Number | ID of delivery

var opts = { 
  'acceptLanguage': "en" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.cancelBooking(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of delivery | 
 **acceptLanguage** | **String**|  | [optional] [default to en]

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json

<a name="deliveriesGetQuotePost"></a>
# **deliveriesGetQuotePost**
> InlineResponse2001 deliveriesGetQuotePost(body, opts)



### Example
```javascript
var DelivereeApi = require('deliveree_api');
var defaultClient = DelivereeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new DelivereeApi.DelivereeApi();

var body = new DelivereeApi.Quote(); // Quote | 

var opts = { 
  'acceptLanguage': "en" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deliveriesGetQuotePost(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Quote**](Quote.md)|  | 
 **acceptLanguage** | **String**|  | [optional] [default to en]

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json

<a name="deliveriesPost"></a>
# **deliveriesPost**
> InlineResponse200 deliveriesPost(body, opts)



### Example
```javascript
var DelivereeApi = require('deliveree_api');
var defaultClient = DelivereeApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new DelivereeApi.DelivereeApi();

var body = new DelivereeApi.Delivery(); // Delivery | 

var opts = { 
  'acceptLanguage': "en" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deliveriesPost(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Delivery**](Delivery.md)|  | 
 **acceptLanguage** | **String**|  | [optional] [default to en]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json

