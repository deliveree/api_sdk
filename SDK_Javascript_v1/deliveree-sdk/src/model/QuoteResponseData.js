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
    define(["../ApiClient"], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require("../ApiClient"));
  } else {
    // Browser globals (root is window)
    if (!root.DelivereeApi) {
      root.DelivereeApi = {};
    }
    root.DelivereeApi.QuoteResponseData = factory(root.DelivereeApi.ApiClient);
  }
})(this, function (ApiClient) {
  "use strict";

  /**
   * The QuoteResponseData model module.
   * @module model/QuoteResponseData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>QuoteResponseData</code>.
   * @alias module:model/QuoteResponseData
   * @class
   */
  var exports = function () {};

  /**
   * Constructs a <code>QuoteResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuoteResponseData} obj Optional instance to populate.
   * @return {module:model/QuoteResponseData} The populated <code>QuoteResponseData</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty("vehicle_type_id"))
        obj.vehicleTypeId = ApiClient.convertToType(
          data["vehicle_type_id"],
          "Number"
        );

      if (data.hasOwnProperty("vehicle_type_name"))
        obj.vehicleTypeName = ApiClient.convertToType(
          data["vehicle_type_name"],
          "String"
        );
      if (data.hasOwnProperty("total_fees"))
        obj.totalFees = ApiClient.convertToType(data["total_fees"], "String");

      if (data.hasOwnProperty("currency"))
        obj.currency = ApiClient.convertToType(data["currency"], "String");
    }
    return obj;
  };

  /**
   * @member {Number} vehicleTypeId
   */
  exports.prototype.vehicleTypeId = undefined;

  /**
   * @member {String} vehicleTypeName
   */
  exports.prototype.vehicleTypeName = undefined;

  /**
   * @member {String} totalFees
   */
  exports.prototype.totalFees = undefined;

  /**
   * @member {String} currency
   */
  exports.prototype.currency = undefined;

  return exports;
});
