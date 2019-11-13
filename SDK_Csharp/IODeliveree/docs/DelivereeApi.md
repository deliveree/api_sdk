# IO.Deliveree.Api.DelivereeApi

All URIs are relative to *https://api.sandbox.deliveree.com/public_api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CancelBooking**](DelivereeApi.md#cancelbooking) | **POST** /deliveries/{id}/cancel | 
[**DeliveriesGetQuotePost**](DelivereeApi.md#deliveriesgetquotepost) | **POST** /deliveries/get_quote | 
[**DeliveriesPost**](DelivereeApi.md#deliveriespost) | **POST** /deliveries | 

<a name="cancelbooking"></a>
# **CancelBooking**
> void CancelBooking (int? id, string acceptLanguage = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Deliveree.Api;
using IO.Deliveree.Client;
using IO.Deliveree.Model;

namespace Example
{
    public class CancelBookingExample
    {
        public void main()
        {
            // Configure API key authorization: ApiKeyAuth
            Configuration.Default.AddApiKey("Authorization", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("Authorization", "Bearer");

            var apiInstance = new DelivereeApi();
            var id = 56;  // int? | ID of delivery
            var acceptLanguage = acceptLanguage_example;  // string |  (optional) 

            try
            {
                apiInstance.CancelBooking(id, acceptLanguage);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DelivereeApi.CancelBooking: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**| ID of delivery | 
 **acceptLanguage** | **string**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
<a name="deliveriesgetquotepost"></a>
# **DeliveriesGetQuotePost**
> Object DeliveriesGetQuotePost (Quote body, string acceptLanguage = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Deliveree.Api;
using IO.Deliveree.Client;
using IO.Deliveree.Model;

namespace Example
{
    public class DeliveriesGetQuotePostExample
    {
        public void main()
        {
            // Configure API key authorization: ApiKeyAuth
            Configuration.Default.AddApiKey("Authorization", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("Authorization", "Bearer");

            var apiInstance = new DelivereeApi();
            var body = new Quote(); // Quote | 
            var acceptLanguage = acceptLanguage_example;  // string |  (optional) 

            try
            {
                Object result = apiInstance.DeliveriesGetQuotePost(body, acceptLanguage);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DelivereeApi.DeliveriesGetQuotePost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Quote**](Quote.md)|  | 
 **acceptLanguage** | **string**|  | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
<a name="deliveriespost"></a>
# **DeliveriesPost**
> Object DeliveriesPost (Delivery body, string acceptLanguage = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Deliveree.Api;
using IO.Deliveree.Client;
using IO.Deliveree.Model;

namespace Example
{
    public class DeliveriesPostExample
    {
        public void main()
        {
            // Configure API key authorization: ApiKeyAuth
            Configuration.Default.AddApiKey("Authorization", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.AddApiKeyPrefix("Authorization", "Bearer");

            var apiInstance = new DelivereeApi();
            var body = new Delivery(); // Delivery | 
            var acceptLanguage = acceptLanguage_example;  // string |  (optional) 

            try
            {
                Object result = apiInstance.DeliveriesPost(body, acceptLanguage);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DelivereeApi.DeliveriesPost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Delivery**](Delivery.md)|  | 
 **acceptLanguage** | **string**|  | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
