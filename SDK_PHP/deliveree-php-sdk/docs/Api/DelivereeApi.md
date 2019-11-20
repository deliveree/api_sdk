# Deliveree\Client\DelivereeApi

All URIs are relative to *https://api.sandbox.deliveree.com/public_api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelBooking**](DelivereeApi.md#cancelbooking) | **POST** /deliveries/{id}/cancel | 
[**deliveriesGetQuotePost**](DelivereeApi.md#deliveriesgetquotepost) | **POST** /deliveries/get_quote | 
[**deliveriesPost**](DelivereeApi.md#deliveriespost) | **POST** /deliveries | 

# **cancelBooking**
> cancelBooking($id, $accept_language)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: ApiKeyAuth
$config = Deliveree\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Deliveree\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Deliveree\Client\Api\DelivereeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | ID of delivery
$accept_language = "accept_language_example"; // string | 

try {
    $apiInstance->cancelBooking($id, $accept_language);
} catch (Exception $e) {
    echo 'Exception when calling DelivereeApi->cancelBooking: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID of delivery |
 **accept_language** | **string**|  | [optional]

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deliveriesGetQuotePost**
> object deliveriesGetQuotePost($body, $accept_language)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: ApiKeyAuth
$config = Deliveree\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Deliveree\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Deliveree\Client\Api\DelivereeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Deliveree\Client\Model\Quote(); // \Deliveree\Client\Model\Quote | 
$accept_language = "accept_language_example"; // string | 

try {
    $result = $apiInstance->deliveriesGetQuotePost($body, $accept_language);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DelivereeApi->deliveriesGetQuotePost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Deliveree\Client\Model\Quote**](../Model/Quote.md)|  |
 **accept_language** | **string**|  | [optional]

### Return type

**object**

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deliveriesPost**
> object deliveriesPost($body, $accept_language)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: ApiKeyAuth
$config = Deliveree\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Deliveree\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Deliveree\Client\Api\DelivereeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Deliveree\Client\Model\Delivery(); // \Deliveree\Client\Model\Delivery | 
$accept_language = "accept_language_example"; // string | 

try {
    $result = $apiInstance->deliveriesPost($body, $accept_language);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DelivereeApi->deliveriesPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Deliveree\Client\Model\Delivery**](../Model/Delivery.md)|  |
 **accept_language** | **string**|  | [optional]

### Return type

**object**

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

