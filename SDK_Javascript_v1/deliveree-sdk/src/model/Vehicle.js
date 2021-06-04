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
    define(["../ApiClient", "./VehicleAttribute"], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require("../ApiClient"),
      require("./VehicleAttribute")
    );
  } else {
    // Browser globals (root is window)
    if (!root.DelivereeApi) {
      root.DelivereeApi = {};
    }
    root.DelivereeApi.Vehicle = factory(
      root.DelivereeApi.ApiClient,
      root.DelivereeApi.VehicleAttribute
    );
  }
})(this, function (ApiClient, VehicleAttribute) {
  "use strict";

  /**
   * The Vehicle model module.
   * @module model/Vehicle
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Vehicle</code>.
   * @alias module:model/Vehicle
   * @class
   */
  var exports = function () {};

  /**
   * Constructs a <code>Vehicle</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Vehicle} obj Optional instance to populate.
   * @return {module:model/Vehicle} The populated <code>Vehicle</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty("vehicle_attributes"))
        obj.vehicleAttributes = ApiClient.convertToType(
          data["vehicle_attributes"],
          VehicleAttribute
        );
    }

    return obj;
  };

  /**
   * @member {module:model/VehicleAttribute} vehicleAttributes
   */
  exports.prototype.vehicleAttributes = undefined;

  return exports;
});
