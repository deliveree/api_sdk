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
    root.DelivereeApi.VehicleAttribute = factory(root.DelivereeApi.ApiClient);
  }
})(this, function (ApiClient) {
  "use strict";

  /**
   * The VehicleAttribute model module.
   * @module model/VehicleAttribute
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>VehicleAttribute</code>.
   * @alias module:model/VehicleAttribute
   * @class
   */
  var exports = function () {};

  /**
   * Constructs a <code>VehicleAttribute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VehicleAttribute} obj Optional instance to populate.
   * @return {module:model/VehicleAttribute} The populated <code>VehicleAttribute</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty("plate_number"))
        obj.plateNumber = ApiClient.convertToType(
          data["plate_number"],
          "String"
        );
    }

    return obj;
  };

  /**
   * @member {String} plateNumber
   */
  exports.prototype.plateNumber = undefined;

  return exports;
});
