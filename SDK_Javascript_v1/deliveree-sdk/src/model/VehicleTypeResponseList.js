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
    define(["../ApiClient", "./VehicleTypeResponse"], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require("../ApiClient"),
      require("./VehicleTypeResponse")
    );
  } else {
    // Browser globals (root is window)
    if (!root.DelivereeApi) {
      root.DelivereeApi = {};
    }
    root.DelivereeApi.VehicleTypeResponseList = factory(
      root.DelivereeApi.ApiClient,
      root.DelivereeApi.VehicleTypeResponse
    );
  }
})(this, function (ApiClient, VehicleTypeResponse) {
  "use strict";

  /**
   * The VehicleTypeResponseList model module.
   * @module model/VehicleTypeResponseList
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>VehicleTypeResponseList</code>.
   * @alias module:model/VehicleTypeResponseList
   * @class
   */
  var exports = function () {};

  /**
   * Constructs a <code>VehicleTypeResponseList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VehicleTypeResponseList} obj Optional instance to populate.
   * @return {module:model/VehicleTypeResponseList} The populated <code>VehicleTypeResponseList</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty("data"))
        obj.data = ApiClient.convertToType(data["data"], [VehicleTypeResponse]);
    }
    return obj;
  };

  /**
   * @member {Array.<module:model/VehicleTypeResponse>} data
   */
  exports.prototype.data = undefined;

  return exports;
});
