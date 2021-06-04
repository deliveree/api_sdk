/*
 * Deliveree SDK
 * With Deliveree SDK, developers can integrate our on-demand local delivery platform into their applications. The SDK is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.
 *
 * Contact: duke@deliveree.com
 *
 */

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([
      "../ApiClient",
      "../model/Delivery",
      "../model/CreateDeliveryResponse",
      "../model/QuoteResponse",
      "../model/Quote",
      "../model/DeliveryResponse",
      "../model/DeliveryResponseList",
      "../model/VehicleTypeResponseList",
    ], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require("../ApiClient"),
      require("../model/Delivery"),
      require("../model/CreateDeliveryResponse"),
      require("../model/QuoteResponse"),
      require("../model/Quote"),
      require("../model/DeliveryResponse"),
      require("../model/DeliveryResponseList"),
      require("../model/VehicleTypeResponseList")
    );
  } else {
    // Browser globals (root is window)
    if (!root.DelivereeApi) {
      root.DelivereeApi = {};
    }
    root.DelivereeApi.DelivereeApi = factory(
      root.DelivereeApi.ApiClient,
      root.DelivereeApi.Delivery,
      root.DelivereeApi.CreateDeliveryResponse,
      root.DelivereeApi.QuoteResponse,
      root.DelivereeApi.Quote,
      root.DelivereeApi.DeliveryResponse,
      root.DelivereeApi.DeliveryResponseList,
      root.DelivereeApi.VehicleTypeResponseList
    );
  }
})(
  this,
  function (
    ApiClient,
    Delivery,
    CreateDeliveryResponse,
    QuoteResponse,
    Quote,
    DeliveryResponse,
    DeliveryResponseList,
    VehicleTypeResponseList
  ) {
    "use strict";

    /**
     * Deliveree service.
     * @module api/DelivereeApi
     * @version 1.0.0
     */

    /**
     * Constructs a new DelivereeApi.
     * @alias module:api/DelivereeApi
     * @class
     * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */
    var exports = function (apiClient) {
      this.apiClient = apiClient || ApiClient.instance;

      /**
       * Callback function to receive the result of the cancelBooking operation.
       * @callback module:api/DelivereeApi~cancelBookingCallback
       * @param {String} error Error message, if any.
       * @param data This operation does not return a value.
       * @param {String} response The complete HTTP response.
       */

      /**
       * @param {Number} id ID of delivery
       * @param {Object} opts Optional parameters
       * @param {String} opts.acceptLanguage  (default to en)
       * @param {module:api/DelivereeApi~cancelBookingCallback} callback The callback function, accepting three arguments: error, data, response
       */
      this.cancelBooking = function (id, opts, callback) {
        opts = opts || {};
        var postBody = null;

        // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
          throw new Error(
            "Missing the required parameter 'id' when calling cancelBooking"
          );
        }

        var pathParams = {
          id: id,
        };
        var queryParams = {};
        var collectionQueryParams = {};
        var headerParams = {
          "Accept-Language": opts["acceptLanguage"],
        };
        var formParams = {};

        var authNames = ["ApiKeyAuth"];
        var contentTypes = ["application/json", "application/xml"];
        var accepts = ["application/xml", "application/json"];
        var returnType = null;

        return this.apiClient.callApi(
          "/deliveries/{id}/cancel",
          "POST",
          pathParams,
          queryParams,
          collectionQueryParams,
          headerParams,
          formParams,
          postBody,
          authNames,
          contentTypes,
          accepts,
          returnType,
          callback
        );
      };

      /**
       * Callback function to receive the result of the deliveriesGetQuotePost operation.
       * @callback module:api/DelivereeApi~deliveriesGetQuotePostCallback
       * @param {String} error Error message, if any.
       * @param {module:model/QuoteResponse} data The data returned by the service call.
       * @param {String} response The complete HTTP response.
       */

      /**
       * @param {module:model/Quote} body
       * @param {Object} opts Optional parameters
       * @param {String} opts.acceptLanguage  (default to en)
       * @param {module:api/DelivereeApi~deliveriesGetQuotePostCallback} callback The callback function, accepting three arguments: error, data, response
       * data is of type: {@link module:model/QuoteResponse}
       */
      this.deliveriesGetQuotePost = function (body, opts, callback) {
        opts = opts || {};
        var postBody = body;

        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
          throw new Error(
            "Missing the required parameter 'body' when calling deliveriesGetQuotePost"
          );
        }

        var pathParams = {};
        var queryParams = {};
        var collectionQueryParams = {};
        var headerParams = {
          "Accept-Language": opts["acceptLanguage"],
        };
        var formParams = {};

        var authNames = ["ApiKeyAuth"];
        var contentTypes = ["application/json", "application/xml"];
        var accepts = ["application/xml", "application/json"];
        var returnType = QuoteResponse;

        return this.apiClient.callApi(
          "/deliveries/get_quote",
          "POST",
          pathParams,
          queryParams,
          collectionQueryParams,
          headerParams,
          formParams,
          postBody,
          authNames,
          contentTypes,
          accepts,
          returnType,
          callback
        );
      };

      /**
       * Callback function to receive the result of the deliveriesPost operation.
       * @callback module:api/DelivereeApi~deliveriesPostCallback
       * @param {String} error Error message, if any.
       * @param {module:model/CreateDeliveryResponse} data The data returned by the service call.
       * @param {String} response The complete HTTP response.
       */

      /**
       * @param {module:model/Delivery} body
       * @param {Object} opts Optional parameters
       * @param {String} opts.acceptLanguage  (default to en)
       * @param {module:api/DelivereeApi~deliveriesPostCallback} callback The callback function, accepting three arguments: error, data, response
       * data is of type: {@link module:model/CreateDeliveryResponse}
       */
      this.deliveriesPost = function (body, opts, callback) {
        opts = opts || {};
        var postBody = body;

        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
          throw new Error(
            "Missing the required parameter 'body' when calling deliveriesPost"
          );
        }

        var pathParams = {};
        var queryParams = {};
        var collectionQueryParams = {};
        var headerParams = {
          "Accept-Language": opts["acceptLanguage"],
        };
        var formParams = {};

        var authNames = ["ApiKeyAuth"];
        var contentTypes = ["application/json", "application/xml"];
        var accepts = ["application/xml", "application/json"];
        var returnType = CreateDeliveryResponse;

        return this.apiClient.callApi(
          "/deliveries",
          "POST",
          pathParams,
          queryParams,
          collectionQueryParams,
          headerParams,
          formParams,
          postBody,
          authNames,
          contentTypes,
          accepts,
          returnType,
          callback
        );
      };

      /**
       * Callback function to receive the result of the deliveriesGet operation.
       * @callback module:api/DelivereeApi~deliveriesGetCallback
       * @param {String} error Error message, if any.
       * @param data This operation does not return a value.
       * @param {String} response The complete HTTP response.
       */

      /**
       * @param {Number} id ID of delivery
       * @param {Object} opts Optional parameters
       * @param {String} opts.acceptLanguage  (default to en)
       * @param {module:api/DelivereeApi~deliveriesGetCallback} callback The callback function, accepting three arguments: error, data, response
       */

      this.deliveriesGet = function (id, opts, callback) {
        opts = opts || {};
        var postBody = null;

        // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
          throw new Error(
            "Missing the required parameter 'id' when calling deliveriesGet"
          );
        }

        var pathParams = {
          id: id,
        };
        var queryParams = {};
        var collectionQueryParams = {};
        var headerParams = {
          "Accept-Language": opts["acceptLanguage"],
        };
        var formParams = {};

        var authNames = ["ApiKeyAuth"];
        var contentTypes = ["application/json", "application/xml"];
        var accepts = ["application/xml", "application/json"];
        var returnType = DeliveryResponse;

        return this.apiClient.callApi(
          "/deliveries/{id}",
          "GET",
          pathParams,
          queryParams,
          collectionQueryParams,
          headerParams,
          formParams,
          postBody,
          authNames,
          contentTypes,
          accepts,
          returnType,
          callback
        );
      };

      /**
       * Callback function to receive the result of the deliveriesGetList operation.
       * @callback module:api/DelivereeApi~deliveriesGetListCallback
       * @param {String} error Error message, if any.
       * @param data This operation does not return a value.
       * @param {String} response The complete HTTP response.
       */

      /**
       * @param {Number} params ID of delivery
       * @param {Object} opts Optional parameters
       * @param {String} opts.acceptLanguage  (default to en)
       * @param {module:api/DelivereeApi~deliveriesGetListCallback} callback The callback function, accepting three arguments: error, data, response
       */

      this.deliveriesGetList = function (params, opts, callback) {
        opts = opts || {};
        var postBody = null;

        // verify the required parameter 'body' is set
        if (params === undefined || params === null) {
          throw new Error(
            "Missing the required parameters when calling deliveriesGetList"
          );
        }

        var pathParams = {};
        var queryParams = {
          page: params["page"],
          per_page: params["per_page"],
        };
        var collectionQueryParams = {};
        var headerParams = {
          "Accept-Language": opts["acceptLanguage"],
        };
        var formParams = {};

        var authNames = ["ApiKeyAuth"];
        var contentTypes = ["application/json", "application/xml"];
        var accepts = ["application/xml", "application/json"];
        var returnType = DeliveryResponseList;

        return this.apiClient.callApi(
          "/deliveries",
          "GET",
          pathParams,
          queryParams,
          collectionQueryParams,
          headerParams,
          formParams,
          postBody,
          authNames,
          contentTypes,
          accepts,
          returnType,
          callback
        );
      };

      /**
       * Callback function to receive the result of the vehicleTypesGet operation.
       * @callback module:api/DelivereeApi~VehicleTypesCallbackGet
       * @param {String} error Error message, if any.
       * @param {module:model/VehicleTypeResponseList} data The data returned by the service call.
       * @param {String} response The complete HTTP response.
       */

      /**
       * @param {Object} opts Optional parameters
       * @param {String} opts.acceptLanguage  (default to en)
       * @param {module:api/DelivereeApi~VehicleTypesCallbackGet} callback The callback function, accepting three arguments: error, data, response
       * data is of type: {@link module:model/VehicleTypeResponseList}
       */

      this.vehicleTypesGet = function (opts, callback) {
        opts = opts || {};
        var postBody = null;

        var pathParams = {};
        var queryParams = {};
        var collectionQueryParams = {};
        var headerParams = {
          "Accept-Language": opts["acceptLanguage"],
        };
        var formParams = {};

        var authNames = ["ApiKeyAuth"];
        var contentTypes = ["application/json", "application/xml"];
        var accepts = ["application/xml", "application/json"];
        var returnType = VehicleTypeResponseList;

        return this.apiClient.callApi(
          "/vehicle_types",
          "GET",
          pathParams,
          queryParams,
          collectionQueryParams,
          headerParams,
          formParams,
          postBody,
          authNames,
          contentTypes,
          accepts,
          returnType,
          callback
        );
      };
    };

    return exports;
  }
);
