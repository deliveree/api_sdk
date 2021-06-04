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
    root.DelivereeApi.Pack = factory(root.DelivereeApi.ApiClient);
  }
})(this, function (ApiClient) {
  "use strict";

  /**
   * The Pack model module.
   * @module model/Pack
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Pack</code>.
   * @alias module:model/Pack
   * @class
   */
  var exports = function () {};

  /**
   * Constructs a <code>Pack</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Pack} obj Optional instance to populate.
   * @return {module:model/Pack} The populated <code>Pack</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty("dimensions"))
        obj.dimensions = ApiClient.convertToType(data["dimensions"], [
          "Number",
        ]);

      if (data.hasOwnProperty("weight"))
        obj.weight = ApiClient.convertToType(data["weight"], "Number");

      if (data.hasOwnProperty("quantity"))
        obj.quantity = ApiClient.convertToType(data["quantity"], "Number");
    }

    return obj;
  };

  /**
   * Array [length, width, height] of pack by Meter
   * @member {Array.Number} dimensions
   */
  exports.prototype.dimensions = undefined;

  /**
   * @member {Number} weight
   */
  exports.prototype.weight = undefined;

  /**
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  return exports;
});
