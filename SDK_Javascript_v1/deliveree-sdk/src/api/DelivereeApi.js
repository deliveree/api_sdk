/*
 * Deliveree SDK
 * With Deliveree SDK, developers can integrate our on-demand local delivery platform into their applications. The SDK is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.
 *
 * Contact: duke@deliveree.com
 *
 */

(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    
    // AMD. Register as an anonymous module.
    define([
      "../ApiClient",
      "../model/Delivery",
      "../model/InlineResponse200",
      "../model/InlineResponse2001",
      "../model/Quote"
    ], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require("../ApiClient"),
      require("../model/Delivery"),
      require("../model/InlineResponse200"),
      require("../model/InlineResponse2001"),
      require("../model/Quote")
    );
  } else {
    // Browser globals (root is window)
    if (!root.DelivereeApi) {
      root.DelivereeApi = {};
    }
    root.DelivereeApi.DelivereeApi = factory(
      root.DelivereeApi.ApiClient,
      root.DelivereeApi.Delivery,
      root.DelivereeApi.InlineResponse200,
      root.DelivereeApi.InlineResponse2001,
      root.DelivereeApi.Quote
    );
  }
})(this, function(
  ApiClient,
  Delivery,
  InlineResponse200,
  InlineResponse2001,
  Quote
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
  var exports = function(apiClient) {
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
    this.cancelBooking = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error(
          "Missing the required parameter 'id' when calling cancelBooking"
        );
      }

      var pathParams = {
        id: id
      };
      var queryParams = {};
      var collectionQueryParams = {};
      var headerParams = {
        "Accept-Language": opts["acceptLanguage"]
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
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Quote} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage  (default to en)
     * @param {module:api/DelivereeApi~deliveriesGetQuotePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    this.deliveriesGetQuotePost = function(body, opts, callback) {
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
        "Accept-Language": opts["acceptLanguage"]
      };
      var formParams = {};

      var authNames = ["ApiKeyAuth"];
      var contentTypes = ["application/json", "application/xml"];
      var accepts = ["application/xml", "application/json"];
      var returnType = InlineResponse2001;

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
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Delivery} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage  (default to en)
     * @param {module:api/DelivereeApi~deliveriesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    this.deliveriesPost = function(body, opts, callback) {
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
        "Accept-Language": opts["acceptLanguage"]
      };
      var formParams = {};

      var authNames = ["ApiKeyAuth"];
      var contentTypes = ["application/json", "application/xml"];
      var accepts = ["application/xml", "application/json"];
      var returnType = InlineResponse200;

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
  };

  return exports;
});
