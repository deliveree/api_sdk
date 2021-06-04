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
      "../model/Pagination",
      "../model/DeliveryResponse",
    ], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require("../ApiClient"),
      require("../model/Pagination"),
      require("./DeliveryResponse")
    );
  } else {
    // Browser globals (root is window)
    if (!root.DelivereeApi) {
      root.DelivereeApi = {};
    }
    root.DelivereeApi.DeliveryResponseList = factory(
      root.DelivereeApi.ApiClient,
      root.DelivereeApi.Pagination,
      root.DelivereeApi.DeliveryResponse
    );
  }
})(this, function (ApiClient, Pagination, DeliveryResponse) {
  "use strict";

  /**
   * The DeliveryResponseList model module.
   * @module model/DeliveryResponseList
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DeliveryResponseList</code>.
   * @alias module:model/DeliveryResponseList
   * @class
   */
  var exports = function () {};

  /**
   * Constructs a <code>DeliveryResponseList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeliveryResponseList} obj Optional instance to populate.
   * @return {module:model/DeliveryResponseList} The populated <code>DeliveryResponseList</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty("pagination"))
        obj.pagination = ApiClient.convertToType(
          data["pagination"],
          Pagination
        );

      if (data.hasOwnProperty("data"))
        obj.data = ApiClient.convertToType(data["data"], [
          DeliveryResponse,
        ]);
    }

    return obj;
  };

  /**
   * @member {<module:model/Pagination>} pagination
   */
  exports.prototype.pagination = undefined;

  /**
   * @member {Array.<module:model/DeliveryResponse>} data
   */
  exports.prototype.data = undefined;

  return exports;
});
