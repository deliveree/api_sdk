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
    define(["../ApiClient", "./QuoteResponseData"], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require("../ApiClient"),
      require("./QuoteResponseData")
    );
  } else {
    // Browser globals (root is window)
    if (!root.DelivereeApi) {
      root.DelivereeApi = {};
    }
    root.DelivereeApi.QuoteResponse = factory(
      root.DelivereeApi.ApiClient,
      root.DelivereeApi.QuoteResponseData
    );
  }
})(this, function (ApiClient, QuoteResponseData) {
  "use strict";

  /**
   * The QuoteResponse model module.
   * @module model/QuoteResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>QuoteResponse</code>.
   * @alias module:model/QuoteResponse
   * @class
   */
  var exports = function () {};

  /**
   * Constructs a <code>QuoteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuoteResponse} obj Optional instance to populate.
   * @return {module:model/QuoteResponse} The populated <code>QuoteResponse</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty("data"))
        obj.data = ApiClient.convertToType(data["data"], [QuoteResponseData]);
    }
    return obj;
  };

  /**
   * @member {Array.<module:model/QuoteResponseData>} data
   */
  exports.prototype.data = undefined;

  return exports;
});
