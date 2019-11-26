# Deliveree-php-sdk
With Deliveree SDK, developers can integrate our on-demand local delivery platform into their applications. The SDK is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.

- SDK version: 1.0.0

## Requirements

- More info [PHP 5.5 and later](https://www.php.net)

- [Composer](https://getcomposer.org)
````
    // More example look at dist folder
````
# Installation & Usage
Note: there are two ways to adding package in to your project:

### 1. Using Composer 

To install the bindings via [Composer](http://getcomposer.org/), add the following to `composer.json`:
```
{
    "repositories": [
        {
            "type": "path",
            // link to your php sdk source
            "url": "(C:/sdk...)/deliveree-php-sdk/deliveree-sdk",
            "options": {
                "symlink": true
              }
        }

    ]
  "require": {
    // 
    "deliveree-php-sdk/delivere-sdk": "*@dev"
  }
}
```

Then run `composer install`

### 2. Manual Installation
Manual require file
```php
    require_once('/path/to/deliveree-php-sdk/deliveree-sdk/vendor/autoload.php');
```

# Getting Started

- Please follow the [installation procedure](#installation--usage) and then run the following:
- There are 3 normal APIs from SDK
```php
<?php
require_once('/path/to/deliveree-php-sdk/deliveree-sdk/vendor/autoload.php');

## Cancel Booking
// Configure API key authorization: ApiKeyAuth
$config = Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new DelivereeApi(
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

## Get Quote 
// Configure API key authorization: ApiKeyAuth
$config = Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new DelivereeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new Quote(); // Quote | 
$accept_language = "accept_language_example"; // string | 

try {
    $result = $apiInstance->deliveriesGetQuotePost($body, $accept_language);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DelivereeApi->deliveriesGetQuotePost: ', $e->getMessage(), PHP_EOL;
}

## Create Booking or Delivery
// Configure API key authorization: ApiKeyAuth
$config = Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Deliveree\Client\Api\DelivereeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new Delivery(); // Delivery | 
$accept_language = "accept_language_example"; // string | 

try {
    $result = $apiInstance->deliveriesPost($body, $accept_language);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DelivereeApi->deliveriesPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

## Documentation for SDK APIs Endpoints
There are 4 methods provide for each APIs in *PHP sdk* with different Result value:

Api | Description
 -------------------------- | ------------------
*deliveriesGetQuotePost* |  * return object * 
*deliveriesGetQuotePostWithHttpInfo* | *return array of object, HTTP status code, HTTP response headers (array of strings)*
*deliveriesGetQuotePostAsync* | *return array of @Object \GuzzleHttp\Promise\PromiseInterface*
*deliveriesGetQuotePostAsyncWithHttpInfo* | *return @Object \GuzzleHttp\Promise\PromiseInterface *
... | ...

All URIs are relative to *PHP sdk*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DelivereeApi* | [**cancelBooking**](docs/Api/DelivereeApi.md#cancelbooking) | **POST** /deliveries/{id}/cancel | 
*DelivereeApi* | [**deliveriesGetQuotePost**](docs/Api/DelivereeApi.md#deliveriesgetquotepost) | **POST** /deliveries/get_quote | 
*DelivereeApi* | [**deliveriesPost**](docs/Api/DelivereeApi.md#deliveriespost) | **POST** /deliveries | 

Documentation For Models

 - [Delivery](docs/Model/Delivery.md)
 - [Location](docs/Model/Location.md)
 - [PositionTracking](docs/Model/PositionTracking.md)
 - [Quote](docs/Model/Quote.md)

Documentation For *ApiKeyAuth* Authorization

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header


## Author
duke@deliveree.com

