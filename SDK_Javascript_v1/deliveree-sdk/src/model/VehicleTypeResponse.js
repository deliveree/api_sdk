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
    root.DelivereeApi.VehicleTypeResponse = factory(
      root.DelivereeApi.ApiClient
    );
  }
})(this, function (ApiClient) {
  "use strict";

  /**
   * The VehicleTypeResponse model module.
   * @module model/VehicleTypeResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>VehicleTypeResponse</code>.
   * @alias module:model/VehicleTypeResponse
   * @class
   */
  var exports = function () {};

  /**
   * Constructs a <code>VehicleTypeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VehicleTypeResponse} obj Optional instance to populate.
   * @return {module:model/VehicleTypeResponse} The populated <code>VehicleTypeResponse</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty("id"))
        obj.id = ApiClient.convertToType(data["id"], "Number");

      if (data.hasOwnProperty("name"))
        obj.name = ApiClient.convertToType(data["name"], "String");

      if (data.hasOwnProperty("cargo_length"))
        obj.totalFees = ApiClient.convertToType(data["cargo_length"], "Number");

      if (data.hasOwnProperty("cargo_height"))
        obj.currency = ApiClient.convertToType(data["cargo_height"], "Number");

      if (data.hasOwnProperty("cargo_width"))
        obj.totalFees = ApiClient.convertToType(data["cargo_width"], "Number");

      if (data.hasOwnProperty("cargo_weight"))
        obj.totalFees = ApiClient.convertToType(data["cargo_weight"], "Number");

      if (data.hasOwnProperty("cargo_cubic_meter"))
        obj.totalFees = ApiClient.convertToType(
          data["cargo_cubic_meter"],
          "Number"
        );
    }

    return obj;
  };

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Number} cargoLength
   */
  exports.prototype.cargoLength = undefined;

  /**
   * @member {Number} cargoHeight
   */
  exports.prototype.cargoHeight = undefined;

  /**
   * @member {Number} cargoWidth
   */
  exports.prototype.cargoWidth = undefined;

  /**
   * @member {Number} cargoWeight
   */
  exports.prototype.cargoWeight = undefined;

  /**
   * @member {Number} cargoCubicMeter
   */
  exports.prototype.cargoCubicMeter = undefined;

  return exports;
});
