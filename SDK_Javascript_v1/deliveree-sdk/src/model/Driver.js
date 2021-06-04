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
    root.DelivereeApi.Driver = factory(root.DelivereeApi.ApiClient);
  }
})(this, function (ApiClient) {
  "use strict";

  /**
   * The Driver model module.
   * @module model/Driver
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Driver</code>.
   * @alias module:model/Driver
   * @class
   */
  var exports = function () {};

  /**
   * Constructs a <code>Driver</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Driver} obj Optional instance to populate.
   * @return {module:model/Driver} The populated <code>Driver</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty("id"))
        obj.id = ApiClient.convertToType(data["id"], "Number");

      if (data.hasOwnProperty("name"))
        obj.name = ApiClient.convertToType(data["name"], "String");

      if (data.hasOwnProperty("phone"))
        obj.phone = ApiClient.convertToType(data["phone"], "String");

      if (data.hasOwnProperty("driver_image_url"))
        obj.driverImageUrl = ApiClient.convertToType(
          data["driver_image_url"],
          "String"
        );

      if (data.hasOwnProperty("last_known_position_lat"))
        obj.lastKnownPositionLat = ApiClient.convertToType(
          data["last_known_position_lat"],
          "Number"
        );

      if (data.hasOwnProperty("last_known_position_lng"))
        obj.lastKnownPositionLng = ApiClient.convertToType(
          data["last_known_position_lng"],
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
   * @member {String} phone
   */
  exports.prototype.phone = undefined;

  /**
   * @member {String} driverImageUrl
   */
  exports.prototype.driverImageUrl = undefined;

  /**
   * @member {Number} lastKnownPositionLat
   */
  exports.prototype.lastKnownPositionLat = undefined;

  /**
   * @member {Number} lastKnownPositionLng
   */
  exports.prototype.lastKnownPositionLng = undefined;

  return exports;
});
