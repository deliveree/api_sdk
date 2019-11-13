# IO.Deliveree - the C# library for the Deliveree API

With Deliveree API, developers can integrate our on-demand local delivery platform into their applications. The API is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.

This C# SDK is develop by TMA Team:

- API version: 1.0.0
- SDK version: 1.0.0

<a name="frameworks-supported"></a>
## Frameworks supported
- .NET 4.5 or later
- .NET CORE 2.0 or later

<a name="dependencies"></a>
## Dependencies
- [RestSharp](https://www.nuget.org/packages/RestSharp) - 105.1.0 or later
- [Json.NET](https://www.nuget.org/packages/Newtonsoft.Json/) - 7.0.0 or later
- [JsonSubTypes](https://www.nuget.org/packages/JsonSubTypes/) - 1.2.0 or later

## Should be required for .Net core console application
- [SystemSecurityPermission] Install-Package System.Security.Permissions -Version 4.6.0

The DLLs included in the package may not be the latest version. We recommend using [NuGet](https://docs.nuget.org/consume/installing-nuget) to obtain the latest version of the packages:
```
Install-Package RestSharp
Install-Package Newtonsoft.Json
Install-Package JsonSubTypes
```

Include the DLL (under the `bin` folder) in the C# project, and use the namespaces:
<a name="getting-started"></a>
## Getting Started

```csharp
using System;
using System.Diagnostics;
using IO.Deliveree.Api;
using IO.Deliveree.Client;
using IO.Deliveree.Model;

namespace Example
{
    public class Example
    {
        public void main()
        {
            // Configure API key authorization: ApiKeyAuth
            Configuration.Default.ApiKey.Add("Authorization", "YOUR_API_KEY");
            // Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
            // Configuration.Default.ApiKeyPrefix.Add("Authorization", "Bearer");

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

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://api.sandbox.deliveree.com/public_api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DelivereeApi* | [**CancelBooking**](docs/DelivereeApi.md#cancelbooking) | **POST** /deliveries/{id}/cancel | 
*DelivereeApi* | [**DeliveriesGetQuotePost**](docs/DelivereeApi.md#deliveriesgetquotepost) | **POST** /deliveries/get_quote | 
*DelivereeApi* | [**DeliveriesPost**](docs/DelivereeApi.md#deliveriespost) | **POST** /deliveries | 

<a name="documentation-for-models"></a>
## Documentation for Models

 - [Model.Delivery](docs/Delivery.md)
 - [Model.Location](docs/Location.md)
 - [Model.PositionTracking](docs/PositionTracking.md)
 - [Model.Quote](docs/Quote.md)

<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="ApiKeyAuth"></a>
### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

